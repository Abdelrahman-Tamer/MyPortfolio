import { Component, computed, inject, input, signal } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import type { LocalizedText, ProjectAction, ProjectItem } from '../../../core/models/portfolio.models';
import { IconComponent, type IconName } from '../icon/icon';

export type ProjectAccent = 'blue' | 'purple' | 'green' | 'orange';

@Component({
  selector: 'app-project-card',
  imports: [IconComponent],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  private readonly languageService = inject(LanguageService);

  readonly project = input.required<ProjectItem>();
  readonly index = input.required<string>();
  readonly accent = input.required<ProjectAccent>();
  readonly compact = input(false);

  protected readonly imageFailed = signal(false);
  protected readonly primaryAction = computed(() => this.project().actions[0]);
  protected readonly secondaryAction = computed(() => this.project().actions[1]);
  protected readonly isPrivate = computed(() => this.project().actions.some((action) => action.isPrivate));
  protected readonly previewType = computed(() => this.project().id);
  protected readonly hasProjectImage = computed(() => Boolean(this.project().imageUrl) && !this.imageFailed());

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }

  protected actionLabel(action: ProjectAction | undefined): string {
    return action ? this.text(action.label) : '';
  }

  protected actionUrl(action: ProjectAction | undefined): string | undefined {
    return action?.url;
  }

  protected actionIcon(action: ProjectAction): IconName {
    if (action.isPrivate) {
      return 'lock';
    }

    return this.actionLabel(action).toLowerCase().includes('github') ? 'github' : 'external-link';
  }

  protected actionAriaLabel(action: ProjectAction): string {
    return `${this.actionLabel(action)} - ${this.text(this.project().title)}`;
  }

  protected imageAlt(): string {
    const imageAlt = this.project().imageAlt;

    return imageAlt ? this.text(imageAlt) : this.text(this.project().title);
  }

  protected imagePosition(): string {
    return this.project().imagePosition ?? 'center';
  }

  protected handleImageError(): void {
    this.imageFailed.set(true);
  }
}
