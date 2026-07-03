import { Component, inject } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent, type IconName } from '../../../../shared/components/icon/icon';

interface StatVisual {
  readonly value?: string;
  readonly icon?: IconName;
}

@Component({
  selector: 'app-stats',
  imports: [IconComponent],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  private readonly languageService = inject(LanguageService);

  protected readonly stats = portfolioData.stats;
  protected readonly statVisuals: readonly StatVisual[] = [
    { value: '5+' },
    { value: '1' },
    { icon: 'sparkles' },
    { value: '100%' },
  ];

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }
}
