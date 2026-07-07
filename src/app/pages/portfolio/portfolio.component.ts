import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';
import { Hero } from './sections/hero/hero';
import { Navbar } from './sections/navbar/navbar';
import { Process } from './sections/process/process';
import { Projects } from './sections/projects/projects';
import { Services } from './sections/services/services';
import { Skills } from './sections/skills/skills';
import { Stats } from './sections/stats/stats';
import { contactConfig } from '../../core/config/contact.config';
import { LocalizedText } from '../../core/models/portfolio.models';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-portfolio',
  imports: [Navbar, Hero, Stats, About, Services, Projects, Skills, Process, Contact, Footer],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly languageService = inject(LanguageService);
  protected readonly whatsappHref = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;
  protected readonly whatsappHidden = signal(false);
  protected readonly whatsappLabel: LocalizedText = {
    en: 'Contact me on WhatsApp',
    ar: 'تواصل معي عبر واتساب',
  };

  constructor() {
    afterNextRender(() => this.observeContactSection());
  }

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }

  private observeContactSection(): void {
    if (typeof document === 'undefined') {
      return;
    }

    const contactSection = document.getElementById('contact');

    if (!contactSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => this.whatsappHidden.set(Boolean(entry?.isIntersecting)),
      { threshold: 0.16 },
    );

    observer.observe(contactSection);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
