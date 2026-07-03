import { Component, inject } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import type { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent, type IconName } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [IconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly languageService = inject(LanguageService);

  protected readonly data = portfolioData;

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }

  protected socialIcon(id: string): IconName {
    if (id === 'github') {
      return 'github';
    }

    if (id === 'linkedin') {
      return 'linkedin';
    }

    return 'mail';
  }
}
