import { afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';
import { Hero } from './sections/hero/hero';
import { Navbar } from './sections/navbar/navbar';
import { Projects } from './sections/projects/projects';
import { Services } from './sections/services/services';
import { Skills } from './sections/skills/skills';
import { Stats } from './sections/stats/stats';
import { contactConfig } from '../../core/config/contact.config';

@Component({
  selector: 'app-portfolio',
  imports: [Navbar, Hero, Stats, About, Services, Projects, Skills, Contact, Footer],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  host: {
    '(document:pointermove)': 'moveCursorSpot($event)',
    '(document:mousemove)': 'moveCursorSpot($event)',
  },
})
export class PortfolioComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);
  private readonly cursorSpot = viewChild<ElementRef<HTMLElement>>('cursorSpot');
  protected readonly whatsappHref = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;
  private readonly revealSelectors = [
    '.section-header',
    '.stat-cell',
    '.about-copy',
    '.timeline-item',
    '.service-card',
    '.project-card',
    '.skill-card',
    '.contact-copy',
    '.contact-form',
    '.resp-footer',
  ].join(',');

  constructor() {
    afterNextRender(() => {
      this.scrollToInitialSection();
      this.setupScrollReveal();
    });
  }

  protected moveCursorSpot(event: PointerEvent | MouseEvent): void {
    const spot = this.cursorSpot()?.nativeElement;

    if (!spot) {
      return;
    }

    spot.style.transform = `translate3d(${event.clientX - 300}px, ${event.clientY - 300}px, 0)`;
    spot.classList.add('is-active');
  }

  private scrollToInitialSection(): void {
    const sectionId = this.route.snapshot.data['sectionId'];

    if (typeof sectionId !== 'string' || sectionId === 'home' || typeof document === 'undefined') {
      return;
    }

    const target = document.getElementById(sectionId);

    if (!target || typeof window === 'undefined') {
      return;
    }

    window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }

  private setupScrollReveal(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(this.revealSelectors));

    document.documentElement.classList.add('reveal-ready');

    elements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 45}ms`);
    });

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible', 'reveal-complete'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            window.setTimeout(() => entry.target.classList.add('reveal-complete'), 720);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
