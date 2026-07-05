import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, inject, PLATFORM_ID, Service, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'portfolio-theme-v2';
const DEFAULT_THEME: Theme = 'light';

@Service()
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly currentTheme = signal<Theme>(this.loadTheme());

  readonly theme = this.currentTheme.asReadonly();
  readonly isDark = computed(() => this.currentTheme() === 'dark');

  constructor() {
    this.applyTheme(this.currentTheme());
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    this.saveTheme(theme);
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  private loadTheme(): Theme {
    const storedTheme = this.readStorage(THEME_STORAGE_KEY);

    return this.isTheme(storedTheme) ? storedTheme : DEFAULT_THEME;
  }

  private saveTheme(theme: Theme): void {
    this.writeStorage(THEME_STORAGE_KEY, theme);
  }

  private applyTheme(theme: Theme): void {
    const root = this.getDocumentRoot();

    if (!root) {
      return;
    }

    root.classList.toggle('dark', theme === 'dark');
  }

  private isTheme(value: string | null): value is Theme {
    return value === 'dark' || value === 'light';
  }

  private readStorage(key: string): string | null {
    if (!this.isBrowser) {
      return null;
    }

    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private writeStorage(key: string, value: string): void {
    if (!this.isBrowser) {
      return;
    }

    try {
      localStorage.setItem(key, value);
    } catch {
      return;
    }
  }

  private getDocumentRoot(): HTMLElement | null {
    return this.document.documentElement;
  }
}
