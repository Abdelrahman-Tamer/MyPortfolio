import { Component, computed, inject } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [IconComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private readonly languageService = inject(LanguageService);

  protected readonly data = portfolioData;
  protected readonly tickerSkills = portfolioData.featuredSkills;
  protected readonly tickerLoop = [
    ...portfolioData.featuredSkills,
    ...portfolioData.featuredSkills,
    ...portfolioData.featuredSkills,
    ...portfolioData.featuredSkills,
  ];
  protected readonly stackItems = ['Angular', 'TypeScript', 'Tailwind', 'Git'];
  protected readonly codeEntries = computed(() => [
    ['name', `'${this.nameParts().first}'`],
    ['role', "'Front-End Dev'"],
    ['focus', "'Angular'"],
    ['location', `'${portfolioData.personal.location.en}'`],
  ]);
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
