import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { contactConfig } from '../../../../core/config/contact.config';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import type { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent, type IconName } from '../../../../shared/components/icon/icon';

interface ContactRow {
  readonly id: string;
  readonly icon: IconName;
  readonly label: LocalizedText;
  readonly value: string;
  readonly href?: string;
  readonly forceLtr?: boolean;
}

type ContactStatus = 'idle' | 'success' | 'error';
type ContactFieldName = 'user_name' | 'user_email' | 'subject' | 'message';

@Component({
  selector: 'app-contact',
  imports: [IconComponent, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly languageService = inject(LanguageService);
  private readonly formBuilder = inject(NonNullableFormBuilder);

  protected readonly data = portfolioData;
  protected readonly submitted = signal(false);
  protected readonly isSending = signal(false);
  protected readonly status = signal<ContactStatus>('idle');
  protected readonly contactForm = this.formBuilder.group({
    user_name: ['', [Validators.required]],
    user_email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
    company_website: [''],
  });

  protected readonly placeholders = {
    name: {
      en: 'Your name',
      ar: 'اسمك',
    },
    email: {
      en: 'your@email.com',
      ar: 'your@email.com',
    },
    subject: {
      en: 'Project inquiry',
      ar: 'استفسار عن مشروع',
    },
    message: {
      en: 'Tell me about your project...',
      ar: 'حدثني عن مشروعك...',
    },
  } satisfies Record<string, LocalizedText>;

  protected readonly labels = {
    subject: {
      en: 'Subject',
      ar: 'الموضوع',
    },
  } satisfies Record<string, LocalizedText>;

  protected readonly feedback = {
    success: {
      en: 'Thanks! Your message has been sent successfully.',
      ar: 'تم إرسال رسالتك بنجاح، شكرًا لتواصلك.',
    },
    error: {
      en: 'Something went wrong. Please try again or contact me on WhatsApp.',
      ar: 'حدث خطأ أثناء الإرسال. حاول مرة أخرى أو تواصل معي على واتساب.',
    },
    required: {
      en: 'This field is required.',
      ar: 'هذا الحقل مطلوب.',
    },
    invalidEmail: {
      en: 'Please enter a valid email address.',
      ar: 'من فضلك أدخل بريدًا إلكترونيًا صحيحًا.',
    },
    sending: {
      en: 'Sending...',
      ar: 'جارٍ الإرسال...',
    },
  } satisfies Record<string, LocalizedText>;

  protected readonly rows: readonly ContactRow[] = [
    {
      id: 'email',
      icon: 'mail',
      label: {
        en: 'Email',
        ar: 'البريد',
      },
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      forceLtr: true,
    },
    {
      id: 'phone',
      icon: 'phone',
      label: {
        en: 'Phone',
        ar: 'الهاتف',
      },
      value: portfolioData.contact.phone,
      href: 'tel:+201122615864',
      forceLtr: true,
    },
    {
      id: 'location',
      icon: 'map-pin',
      label: {
        en: 'Location',
        ar: 'الموقع',
      },
      value: '',
    },
  ];

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }

  protected rowValue(row: ContactRow): string {
    return row.id === 'location' ? this.text(portfolioData.contact.location) : row.value;
  }

  protected fieldError(fieldName: ContactFieldName): string {
    const control = this.contactForm.controls[fieldName];

    if (!control.invalid || (!control.touched && !this.submitted())) {
      return '';
    }

    if (control.hasError('required')) {
      return this.text(this.feedback.required);
    }

    if (control.hasError('email')) {
      return this.text(this.feedback.invalidEmail);
    }

    return '';
  }

  protected async handleSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    this.submitted.set(true);
    this.status.set('idle');

    if (this.contactForm.controls.company_website.value.trim()) {
      this.resetForm();
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending.set(true);

    const templateParams = {
      user_name: this.contactForm.controls.user_name.value.trim(),
      user_email: this.contactForm.controls.user_email.value.trim(),
      subject: this.contactForm.controls.subject.value.trim(),
      message: this.contactForm.controls.message.value.trim(),
    };

    try {
      await emailjs.send(
        contactConfig.emailjsServiceId,
        contactConfig.emailjsTemplateId,
        templateParams,
        {
          publicKey: contactConfig.emailjsPublicKey,
        },
      );

      this.status.set('success');
      this.resetForm();
    } catch {
      this.status.set('error');
    } finally {
      this.isSending.set(false);
    }
  }

  private resetForm(): void {
    this.contactForm.reset({
      user_name: '',
      user_email: '',
      subject: '',
      message: '',
      company_website: '',
    });
    this.submitted.set(false);
  }
}
