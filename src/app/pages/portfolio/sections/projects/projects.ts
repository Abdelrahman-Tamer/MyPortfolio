import { Component, inject } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import type { LocalizedText } from '../../../../core/models/portfolio.models';
import { ProjectCard, type ProjectAccent } from '../../../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly languageService = inject(LanguageService);

  protected readonly data = portfolioData;
  protected readonly projects = portfolioData.featuredProjects;
  protected readonly moreProjects = portfolioData.moreProjects;
  protected readonly projectAccents: readonly ProjectAccent[] = ['blue', 'purple', 'green', 'orange'];

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }

  protected projectIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
