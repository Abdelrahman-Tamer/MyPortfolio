import { Component, computed, inject } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import type { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent, type IconName } from '../../../../shared/components/icon/icon';

type AccentKey = 'blue' | 'purple' | 'green' | 'orange';

interface QuickFact {
  readonly icon: IconName;
  readonly color: AccentKey;
  readonly label: string;
  readonly value: string;
  readonly forceLtr?: boolean;
}

@Component({
  selector: 'app-about',
  imports: [IconComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly languageService = inject(LanguageService);

  protected readonly data = portfolioData;
  protected readonly timeline = portfolioData.timeline;
  protected readonly certifications = portfolioData.certifications;

  protected readonly headingParts = computed(() => {
    const heading = this.text(portfolioData.about.heading).replace(/\.$/, '');
    const words = heading.split(' ');
    const accentWords = words.splice(Math.max(words.length - 2, 0));

    return {
      before: words.length ? `${words.join(' ')} ` : '',
      accent: accentWords.join(' '),
    };
  });

  protected readonly paragraphs = computed(() => {
    const paragraph = this.text(portfolioData.about.paragraph);
    const splitAt = paragraph.indexOf('. ');

    if (splitAt < 0) {
      return [paragraph];
    }

    return [paragraph.slice(0, splitAt + 1), paragraph.slice(splitAt + 2)];
  });

  protected readonly quickFacts = computed<QuickFact[]>(() => [
    {
      icon: 'map-pin',
      color: 'blue',
      label: this.languageService.isArabic() ? 'الموقع' : 'Location',
      value: this.text(portfolioData.personal.location),
    },
    {
      icon: 'graduation-cap',
      color: 'purple',
      label: this.languageService.isArabic() ? 'التعليم' : 'Education',
      value: 'EELU - 2026',
      forceLtr: true,
    },
    {
      icon: 'code',
      color: 'green',
      label: this.languageService.isArabic() ? 'التخصص' : 'Focus',
      value: 'Angular',
      forceLtr: true,
    },
    {
      icon: 'check',
      color: 'orange',
      label: this.languageService.isArabic() ? 'الحالة' : 'Status',
      value: this.text(portfolioData.hero.badge),
    },
  ]);

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }

  protected isEducation(index: number): boolean {
    return index === this.timeline.length - 1;
  }

  protected timelineAccent(index: number): AccentKey {
    return this.isEducation(index) ? 'purple' : 'blue';
  }
}
