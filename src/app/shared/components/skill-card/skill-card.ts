import { Component, input } from '@angular/core';
import type { SkillCategory } from '../../../core/models/portfolio.models';
import { IconComponent } from '../icon/icon';

export type SkillMark = 'code' | 'ng' | 'style' | 'api' | 'tool';

@Component({
  selector: 'app-skill-card',
  imports: [IconComponent],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  readonly category = input.required<SkillCategory>();
  readonly title = input.required<string>();
  readonly mark = input.required<SkillMark>();
}
