import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { portfolioData } from '../../core/data/portfolio.data';
import { GITHUB_URL, LINKEDIN_URL } from '../../core/seo/seo.config';
import { LanguageService } from '../../core/services/language.service';
import { IconComponent, IconName } from '../../shared/components/icon/icon';

interface CvLink {
  readonly label: string;
  readonly href: string;
}

interface CvIconLink extends CvLink {
  readonly icon: IconName;
}

interface CvSkillLine {
  readonly category: string;
  readonly items: string;
}

interface CvEntry {
  readonly title: string;
  readonly meta: string;
  readonly date?: string;
  readonly dateTime?: string;
  readonly bullets: readonly string[];
  readonly links?: readonly CvLink[];
}

@Component({
  selector: 'app-cv',
  imports: [IconComponent, RouterLink],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {
  private readonly languageService = inject(LanguageService);

  protected readonly backLabel = computed(() => (this.languageService.isArabic() ? 'رجوع' : 'Back'));
  protected readonly backAriaLabel = computed(() =>
    this.languageService.isArabic() ? 'رجوع إلى الصفحة الرئيسية' : 'Back to portfolio home',
  );
  protected readonly emailHref = `mailto:${portfolioData.personal.email}`;
  protected readonly phoneHref = `tel:${portfolioData.personal.phone.replaceAll(' ', '')}`;
  protected readonly socialLinks: readonly CvIconLink[] = [
    { label: 'Portfolio Website', href: '/', icon: 'globe' },
    { label: 'LinkedIn', href: LINKEDIN_URL, icon: 'linkedin' },
    { label: 'GitHub', href: GITHUB_URL, icon: 'github' },
  ];
  protected readonly contactLines: readonly CvLink[] = [
    { label: 'Cairo, Egypt', href: '' },
    { label: portfolioData.personal.phone, href: this.phoneHref },
    { label: portfolioData.personal.email, href: this.emailHref },
  ];
  protected readonly skillLines: readonly CvSkillLine[] = [
    {
      category: 'Frontend',
      items: 'HTML5, CSS3, JavaScript ES6+, TypeScript, Angular, RxJS, Angular Router, Guards, Reactive Forms',
    },
    {
      category: 'Styling',
      items: 'Bootstrap 5, Tailwind CSS, Responsive Design, Flexbox, CSS Grid',
    },
    {
      category: 'API & Data',
      items: 'REST APIs, JSON, JWT Authentication, HttpClient, Firebase Firestore',
    },
    {
      category: 'Browser & Storage',
      items: 'DOM, RegEx, Form Validation, localStorage',
    },
    {
      category: 'Tools',
      items: 'Git, GitHub, npm, Chrome DevTools, Postman',
    },
  ];
  protected readonly projects: readonly CvEntry[] = [
    {
      title: 'Receipta Pro - Electronic Receipt Management System',
      meta: 'HTML5, CSS3, JavaScript ES6+, Firebase, jsPDF | Confidential Client Project - Waad Rent Cars | Code & Demo Private',
      bullets: [
        'Built a full Arabic receipt management system for Waad Rent Cars, covering create, edit, delete, search, and payment status tracking.',
        'Integrated Firebase Firestore for real-time cloud sync across devices using a unique company key, with localStorage offline fallback.',
        'Implemented PDF export using jsPDF and html2canvas for high-quality printable receipts.',
        'Delivered a fully responsive RTL UI supporting mobile, tablet, and desktop.',
      ],
    },
    {
      title: 'FreshCart E-commerce',
      meta: 'Angular 22, TypeScript, Bootstrap 5 | Route Academy Final Project',
      links: [
        { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/FreshCart.git' },
        { label: 'Live Demo', href: 'https://fresh-cart-roan-seven.vercel.app/' },
      ],
      bullets: [
        'Built a full-featured Angular SPA with product catalog, search, category/brand filters, cart, wishlist, and checkout flow.',
        'Integrated REST APIs for products, cart, and orders; implemented JWT authentication with Angular route guards.',
        'Integrated Stripe payment flow with success/failure state handling and real-time cart total recalculation.',
        'Applied lazy loading for feature modules to reduce initial bundle size.',
      ],
    },
    {
      title: 'Bookmarker',
      meta: 'JavaScript ES6+, Bootstrap 5 | Route Academy',
      links: [
        { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/Bookmark-Manager.git' },
        { label: 'Live Demo', href: 'https://bookmark-manager-em.vercel.app/' },
      ],
      bullets: [
        'Built a full CRUD bookmark manager with create, read, update, delete, search, and RegEx URL validation.',
        'Persisted entries across sessions using localStorage; delivered a fully responsive UI.',
      ],
    },
    {
      title: 'Doccure - Healthcare Appointment Platform',
      meta: 'HTML5, CSS3, Bootstrap 5, jQuery, Font Awesome | NTI Final Project',
      links: [
        { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/Doccure.git' },
        { label: 'Live Demo', href: 'https://doccure-psi.vercel.app/' },
      ],
      bullets: [
        'Built a multi-page healthcare platform with Doctor Dashboard, Doctor Profile, and Profile Settings views.',
        'Implemented responsive layouts using Bootstrap 5 grid with Slick Carousel for featured doctor listings.',
        'Designed a clean dashboard UI with appointment management sections and patient record views.',
      ],
    },
    {
      title: 'Luxestate - Real Estate Landing Page',
      meta: 'HTML5, CSS3, Bootstrap 5',
      links: [
        { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/luxestate.git' },
        { label: 'Live Demo', href: 'https://luxestate-em.vercel.app/' },
      ],
      bullets: [
        'Built a responsive real estate landing page with structured sections for property discovery, services, agents, and contact information.',
        'Implemented clean section-based layouts, reusable UI patterns, and mobile-friendly spacing across screen sizes.',
      ],
    },
    {
      title: 'Axit - Landing Page Template',
      meta: 'HTML5, CSS3, Bootstrap 5',
      links: [
        { label: 'GitHub', href: 'https://github.com/Abdelrahman-Tamer/Axit-Task.git' },
        { label: 'Live Demo', href: 'https://axit-rose.vercel.app/' },
      ],
      bullets: [
        'Built a responsive multi-section landing page: Hero with free-trial form, Features, Pricing, Reviews, and Contact.',
        'Applied consistent layout patterns and media queries for mobile-first responsive behavior.',
      ],
    },
  ];
  protected readonly experience: readonly CvEntry[] = [
    {
      title: 'Frontend Developer Trainee',
      meta: 'Route Academy, Cairo, Egypt',
      date: 'Mar 2025 - Jul 2026',
      dateTime: '2025-03/2026-07',
      bullets: [
        'Delivered 4+ frontend projects including a full Angular e-commerce SPA and a multi-page healthcare platform.',
        'Implemented client-side form validation for 10+ fields using RegEx with clear user-facing error messages.',
        'Built reusable Angular components and standardized layouts to reduce duplicated code across project pages.',
        'Maintained version-controlled repositories on GitHub with branching and structured commit history.',
      ],
    },
    {
      title: 'Frontend Web Developer',
      meta: 'Elevvo Pathways, Cairo, Egypt',
      date: 'Aug 2025 - Sep 2025',
      dateTime: '2025-08/2025-09',
      bullets: [
        'Built 5+ responsive pages and UI components with consistent layouts across mobile and desktop screens.',
        'Resolved styling and layout issues to improve UI consistency before client delivery.',
      ],
    },
    {
      title: 'Internship Trainee',
      meta: 'CIB Egypt, Cairo, Egypt',
      date: 'Sep 2025',
      dateTime: '2025-09',
      bullets: ['Completed a structured 1-week banking internship with task documentation and review.'],
    },
  ];
  protected readonly certifications: readonly string[] = [
    'NTI Web Designer (Digital Egypt Youth) - Score: 100%',
    'ALX AiCE - AI Career Essentials',
  ];
  protected readonly softSkills =
    'Problem Solving | Communication | Teamwork | Time Management | Attention to Detail | Fast Learning';
}
