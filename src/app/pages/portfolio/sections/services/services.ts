import { Component, inject } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import type { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent, type IconName } from '../../../../shared/components/icon/icon';

type AccentKey = 'blue' | 'purple' | 'green' | 'orange';

interface ServiceMeta {
  readonly icon: IconName;
  readonly color: AccentKey;
}

@Component({
  selector: 'app-services',
  imports: [IconComponent],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  private readonly languageService = inject(LanguageService);

  protected readonly data = portfolioData;
  protected readonly services = portfolioData.services;
  protected readonly servicesTitle =
    portfolioData.sectionHeadings.services.title ?? portfolioData.sectionHeadings.services.label;
  protected readonly serviceMeta: readonly ServiceMeta[] = [
    { icon: 'monitor', color: 'blue' },
    { icon: 'code', color: 'purple' },
    { icon: 'database', color: 'green' },
    { icon: 'server', color: 'orange' },
  ];

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }
}
