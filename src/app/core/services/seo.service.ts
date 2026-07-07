import { DOCUMENT } from '@angular/common';
import { DestroyRef, effect, inject, Service } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { portfolioData } from '../data/portfolio.data';
import {
  AUTHOR_EMAIL,
  AUTHOR_JOB_TITLE,
  AUTHOR_NAME,
  DEFAULT_SEO,
  GITHUB_URL,
  LINKEDIN_URL,
  LOGO_PATH,
  ROUTE_SEO,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE_TYPE,
  THEME_COLOR,
} from '../seo/seo.config';
import type { ProjectAction, ProjectItem } from '../models/portfolio.models';
import type { SeoRouteData } from '../seo/seo.models';
import { LanguageService } from './language.service';
import { ThemeService } from './theme.service';

type JsonLdObject = Record<string, unknown>;
const LIGHT_THEME_COLOR = '#eef2f9';

@Service()
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);
  private trackingStarted = false;
  private readonly preferenceMetadataEffect = effect(() => {
    this.themeService.theme();
    this.languageService.language();

    if (this.trackingStarted) {
      this.setRouteMetadata();
    }
  });

  trackRouteMetadata(): void {
    if (this.trackingStarted) {
      return;
    }

    this.trackingStarted = true;

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        startWith(null),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.setRouteMetadata());
  }

  private setRouteMetadata(): void {
    const seo = this.currentSeoData();
    const canonicalUrl = this.absoluteUrl(seo.path);

    this.title.setTitle(seo.title);
    this.setCanonicalUrl(canonicalUrl);

    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'author', content: AUTHOR_NAME });
    this.meta.updateTag({ name: 'application-name', content: SITE_NAME });
    this.meta.updateTag({ name: 'robots', content: seo.robots });
    this.meta.updateTag({ name: 'theme-color', content: this.themeColor() });
    this.meta.updateTag({ name: 'language', content: this.languageName() });

    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: seo.image });
    this.meta.updateTag({ property: 'og:image:secure_url', content: seo.image });
    this.meta.updateTag({ property: 'og:image:type', content: SOCIAL_IMAGE_TYPE });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: seo.imageAlt });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:locale', content: this.ogLocale() });
    this.meta.updateTag({ property: 'og:locale:alternate', content: this.alternateOgLocale() });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: seo.image });
    this.meta.updateTag({ name: 'twitter:image:alt', content: seo.imageAlt });

    this.setStructuredData(seo, canonicalUrl);
    queueMicrotask(() => this.title.setTitle(seo.title));
  }

  private currentSeoData(): SeoRouteData {
    let activeRoute = this.route;

    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }

    const seo = activeRoute.snapshot.data['seo'];

    if (!this.isSeoRouteData(seo)) {
      return DEFAULT_SEO;
    }

    if (seo.path !== '/') {
      return seo;
    }

    const fragment = this.router.parseUrl(this.router.url).fragment;

    if (this.isPortfolioSection(fragment)) {
      return {
        ...ROUTE_SEO[fragment],
        path: '/',
      };
    }

    return seo;
  }

  private isPortfolioSection(value: string | null): value is 'about' | 'services' | 'projects' | 'skills' | 'contact' {
    return value === 'about' || value === 'services' || value === 'projects' || value === 'skills' || value === 'contact';
  }

  private isSeoRouteData(value: unknown): value is SeoRouteData {
    if (!value || typeof value !== 'object') {
      return false;
    }

    const data = value as Record<keyof SeoRouteData, unknown>;

    return (
      typeof data.title === 'string' &&
      typeof data.description === 'string' &&
      typeof data.keywords === 'string' &&
      typeof data.path === 'string' &&
      typeof data.image === 'string' &&
      typeof data.imageAlt === 'string' &&
      typeof data.robots === 'string'
    );
  }

  private absoluteUrl(path: string): string {
    return `${SITE_URL}${path === '/' ? '/' : path}`;
  }

  private themeColor(): string {
    return this.themeService.isDark() ? THEME_COLOR : LIGHT_THEME_COLOR;
  }

  private languageName(): string {
    return this.languageService.isArabic() ? 'Arabic' : 'English';
  }

  private ogLocale(): string {
    return this.languageService.isArabic() ? 'ar_EG' : 'en_US';
  }

  private alternateOgLocale(): string {
    return this.languageService.isArabic() ? 'en_US' : 'ar_EG';
  }

  private setCanonicalUrl(url: string): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = url;
  }

  private setStructuredData(seo: SeoRouteData, canonicalUrl: string): void {
    const personId = `${SITE_URL}/#person`;
    const websiteId = `${SITE_URL}/#website`;
    const portfolioId = `${SITE_URL}/#portfolio`;

    this.upsertJsonLd('person-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': personId,
      name: AUTHOR_NAME,
      jobTitle: AUTHOR_JOB_TITLE,
      url: SITE_URL,
      email: `mailto:${AUTHOR_EMAIL}`,
      image: `${SITE_URL}${LOGO_PATH}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cairo',
        addressCountry: 'Egypt',
      },
      sameAs: [LINKEDIN_URL, GITHUB_URL],
      knowsAbout: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'REST APIs',
        'Responsive Web Design',
        'Accessibility',
        'Arabic RTL Interfaces',
        'Firebase',
        'ASP.NET Core',
      ],
    });

    this.upsertJsonLd('website-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': websiteId,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: ['en', 'ar'],
      author: {
        '@id': personId,
      },
      publisher: {
        '@id': personId,
      },
    });

    this.upsertJsonLd('portfolio-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': portfolioId,
      name: `${AUTHOR_NAME} Portfolio`,
      description: DEFAULT_SEO.description,
      url: `${SITE_URL}/#projects`,
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': personId,
      },
      creator: {
        '@id': personId,
      },
      hasPart: this.projectStructuredData(),
    });

    this.upsertJsonLd('page-jsonld', {
      '@context': 'https://schema.org',
      '@type': this.pageType(seo.path),
      '@id': `${canonicalUrl}#webpage`,
      name: seo.title,
      description: seo.description,
      url: canonicalUrl,
      image: seo.image,
      inLanguage: ['en', 'ar'],
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': personId,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: seo.image,
        width: 1200,
        height: 630,
      },
    });
  }

  private projectStructuredData(): readonly JsonLdObject[] {
    return [...portfolioData.featuredProjects, ...portfolioData.moreProjects].map((project) => {
      return {
        '@type': 'CreativeWork',
        name: project.title.en,
        description: project.description.en,
        url: this.projectUrl(project),
        image: project.imageUrl ? `${SITE_URL}${project.imageUrl}` : undefined,
        creator: {
          '@id': `${SITE_URL}/#person`,
        },
      };
    });
  }

  private projectUrl(project: ProjectItem): string | undefined {
    const actions: readonly ProjectAction[] = project.actions;
    const action = actions.find((candidate) => typeof candidate.url === 'string');

    return action?.url;
  }

  private pageType(path: string): string {
    if (path === '/about') {
      return 'AboutPage';
    }

    if (path === '/contact') {
      return 'ContactPage';
    }

    if (path === '/projects') {
      return 'CollectionPage';
    }

    return 'ProfilePage';
  }

  private upsertJsonLd(id: string, data: JsonLdObject): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }
}
