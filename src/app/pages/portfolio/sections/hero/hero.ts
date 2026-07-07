import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [IconComponent, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private readonly languageService = inject(LanguageService);

  protected readonly data = portfolioData;
  protected readonly codeFileComment: LocalizedText = {
    en: '// profile.ts',
    ar: '// ملف_تعريف.ts',
  };
  protected readonly codeCardAriaLabel: LocalizedText = {
    en: 'Developer profile code sample',
    ar: 'نموذج كود لملف تعريف المطور',
  };
  protected readonly codeProfileEntries = [
    {
      key: 'name',
      value: {
        en: 'Abdelrahman',
        ar: 'عبدالرحمن',
      },
    },
    {
      key: 'role',
      value: {
        en: 'Angular Frontend Dev',
        ar: 'مطور واجهات أمامية',
      },
    },
    {
      key: 'focus',
      value: {
        en: 'Clean API-ready UI',
        ar: 'واجهات واضحة ومتصلة',
      },
    },
    {
      key: 'location',
      value: {
        en: 'Cairo, Egypt',
        ar: 'القاهرة، مصر',
      },
    },
  ] satisfies readonly { readonly key: string; readonly value: LocalizedText }[];
  protected readonly codeStack = [
    'Angular',
    'TypeScript',
    'REST APIs',
    'Git',
  ];
  protected readonly resumeLabel: LocalizedText = {
    en: 'View CV',
    ar: 'عرض السيرة الذاتية',
  };
  protected readonly isRtl = computed(() => this.languageService.isArabic());
  protected readonly roleLabel = computed(() => this.text(portfolioData.personal.role).split('|')[0].trim());
  protected readonly nameParts = computed(() => {
    const name = this.text(portfolioData.personal.name);
    const [first, ...rest] = name.split(' ');

    return {
      first,
      second: rest.join(' '),
    };
  });

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }
}
