import { afterNextRender, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import { ThemeService } from '../../../../core/services/theme.service';
import { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-navbar',
  imports: [IconComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly languageService = inject(LanguageService);
  protected readonly themeService = inject(ThemeService);
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeSection = signal('');
  protected readonly navKeys = ['about', 'projects', 'skills', 'contact'];
  protected readonly languageToggleText = computed(() => (this.languageService.isArabic() ? 'ع' : 'EN'));
  protected readonly languageToggleLabel = computed(() =>
    this.languageService.isArabic() ? 'Switch language to English' : 'Switch language to Arabic',
  );

  protected readonly navLinks = computed(() =>
    this.navKeys
      .map((key) => portfolioData.navLinks.find((link) => link.id === key))
      .filter((link) => link !== undefined),
  );

  constructor() {
    afterNextRender(() => {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }

      const updateScrolled = () => this.scrolled.set(window.scrollY > 24);
      updateScrolled();

      window.addEventListener('scroll', updateScrolled, { passive: true });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }
          });
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );

      this.navKeys.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.observe(element);
        }
      });

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', updateScrolled);
        observer.disconnect();
      });
    });
  }

  protected text(value: LocalizedText): string {
    return value[this.languageService.language()];
  }

  protected toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  protected scrollTo(section: string, event?: Event): void {
    event?.preventDefault();
    this.menuOpen.set(false);

    if (typeof document === 'undefined') {
      return;
    }

    const target = document.getElementById(section);

    if (!target) {
      return;
    }

    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${section}`);
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.requestAnimationFrame(() => window.scrollTo({ top, behavior: 'smooth' }));
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
