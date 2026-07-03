import { Component, inject } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import type { LocalizedText } from '../../../../core/models/portfolio.models';
import { SkillCard, type SkillMark } from '../../../../shared/components/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  private readonly languageService = inject(LanguageService);

  protected readonly data = portfolioData;
  protected readonly skills = portfolioData.skills;
  protected readonly skillMarks: readonly SkillMark[] = ['code', 'ng', 'style', 'api', 'tool'];
  protected readonly subtitle: LocalizedText = {
    en: 'Tools I use to build responsive, connected, and maintainable web interfaces.',
    ar: 'أدوات أستخدمها لبناء واجهات متجاوبة، مرتبطة بالبيانات، وسهلة التطوير.',
  };

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }
}
