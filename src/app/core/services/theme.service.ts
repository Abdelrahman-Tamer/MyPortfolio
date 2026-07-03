import { computed, Service, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'portfolio-theme';
const DEFAULT_THEME: Theme = 'dark';

@Service()
export class ThemeService {
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
    try {
      return typeof localStorage === 'undefined' ? null : localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private writeStorage(key: string, value: string): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, value);
      }
    } catch {
      return;
    }
  }

  private getDocumentRoot(): HTMLElement | null {
    return typeof document === 'undefined' ? null : document.documentElement;
  }
}
