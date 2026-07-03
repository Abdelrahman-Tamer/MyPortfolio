import { computed, Service, signal } from '@angular/core';

export type Language = 'en' | 'ar';
export type TextDirection = 'ltr' | 'rtl';

const LANGUAGE_STORAGE_KEY = 'portfolio-language-v2';
const DEFAULT_LANGUAGE: Language = 'en';

@Service()
export class LanguageService {
  private readonly currentLanguage = signal<Language>(this.loadLanguage());

  readonly language = this.currentLanguage.asReadonly();
  readonly direction = computed<TextDirection>(() => (this.currentLanguage() === 'ar' ? 'rtl' : 'ltr'));
  readonly isArabic = computed(() => this.currentLanguage() === 'ar');

  constructor() {
    this.applyLanguage(this.currentLanguage());
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.saveLanguage(language);
    this.applyLanguage(language);
  }

  toggleLanguage(): void {
    this.setLanguage(this.isArabic() ? 'en' : 'ar');
  }

  private loadLanguage(): Language {
    const storedLanguage = this.readStorage(LANGUAGE_STORAGE_KEY);

    return this.isLanguage(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  }

  private saveLanguage(language: Language): void {
    this.writeStorage(LANGUAGE_STORAGE_KEY, language);
  }

  private applyLanguage(language: Language): void {
    const root = this.getDocumentRoot();

    if (!root) {
      return;
    }

    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
  }

  private isLanguage(value: string | null): value is Language {
    return value === 'en' || value === 'ar';
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
