import { afterNextRender, Component, computed, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { portfolioData } from '../../../../core/data/portfolio.data';
import { LanguageService } from '../../../../core/services/language.service';
import { ThemeService } from '../../../../core/services/theme.service';
import { LocalizedText } from '../../../../core/models/portfolio.models';
import { IconComponent } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-navbar',
  imports: [IconComponent, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly burgerButton = viewChild<ElementRef<HTMLButtonElement>>('burgerButton');
  private readonly mobilePanel = viewChild<ElementRef<HTMLElement>>('mobilePanel');
  protected readonly languageService = inject(LanguageService);
  protected readonly themeService = inject(ThemeService);
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeSection = signal('');
  protected readonly navKeys = ['about', 'services', 'projects', 'skills', 'contact'];
  protected readonly languageToggleText = computed(() => (this.languageService.isArabic() ? 'ع' : 'EN'));
  protected readonly languageToggleLabel = computed(() =>
    this.languageService.isArabic() ? 'Switch language to English' : 'Switch language to Arabic',
  );
  protected readonly cvLabel = computed(() => (this.languageService.isArabic() ? 'السيرة الذاتية' : 'CV'));
  protected readonly hireMeLabel = computed(() => (this.languageService.isArabic() ? 'وظفني' : 'Hire Me'));
  protected readonly menuLabel = computed(() =>
    this.menuOpen()
      ? this.languageService.isArabic()
        ? 'إغلاق القائمة'
        : 'Close menu'
      : this.languageService.isArabic()
        ? 'فتح القائمة'
        : 'Open menu',
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

  protected navigateToSection(section: string): void {
    this.menuOpen.set(false);

    void this.router.navigate(['/'], {
      fragment: section === 'home' ? undefined : section,
    });
  }

  protected toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu();
      return;
    }

    this.menuOpen.set(true);
    this.focusFirstMobileLink();
  }

  protected closeMenu(restoreFocus = true): void {
    this.menuOpen.set(false);

    if (restoreFocus) {
      this.burgerButton()?.nativeElement.focus();
    }
  }

  protected trapMobileMenuFocus(event: Event): void {
    if (!(event instanceof KeyboardEvent)) {
      return;
    }

    const focusableElements = this.mobileFocusableElements();

    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  private focusFirstMobileLink(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.requestAnimationFrame(() => this.mobileFocusableElements()[0]?.focus());
  }

  private mobileFocusableElements(): readonly HTMLElement[] {
    const panel = this.mobilePanel()?.nativeElement;

    if (!panel) {
      return [];
    }

    return Array.from(
      panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => !element.hasAttribute('disabled') && element.tabIndex !== -1);
  }
}
