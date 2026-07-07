import { Component, inject } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import type { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent, type IconName } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-process',
  imports: [IconComponent],
  templateUrl: './process.html',
  styleUrl: './process.css',
})
export class Process {
  private readonly languageService = inject(LanguageService);

  protected readonly data = portfolioData;
  protected readonly stepIcons: readonly IconName[] = ['globe', 'palette', 'code', 'check'];

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }
}
