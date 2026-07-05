import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './core/services/language.service';
import { SeoService } from './core/services/seo.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);
  private readonly themeService = inject(ThemeService);

  constructor() {
    this.seoService.trackRouteMetadata();
  }
}
