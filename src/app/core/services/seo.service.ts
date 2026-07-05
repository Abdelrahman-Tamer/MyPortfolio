import { DOCUMENT } from '@angular/common';
import { DestroyRef, inject, Service } from '@angular/core';
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
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
} from '../seo/seo.config';
import type { ProjectAction, ProjectItem } from '../models/portfolio.models';
import type { SeoRouteData } from '../seo/seo.models';

type JsonLdObject = Record<string, unknown>;

@Service()
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private trackingStarted = false;

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
    this.setDocumentLanguage();
    this.setCanonicalUrl(canonicalUrl);

    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'keywords', content: seo.keywords });
    this.meta.updateTag({ name: 'author', content: AUTHOR_NAME });
    this.meta.updateTag({ name: 'application-name', content: SITE_NAME });
    this.meta.updateTag({ name: 'robots', content: seo.robots });
    this.meta.updateTag({ name: 'theme-color', content: THEME_COLOR });
    this.meta.updateTag({ name: 'language', content: 'English' });

    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: seo.image });
    this.meta.updateTag({ property: 'og:image:secure_url', content: seo.image });
    this.meta.updateTag({ property: 'og:image:type', content: 'image/png' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: seo.imageAlt });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: seo.image });
    this.meta.updateTag({ name: 'twitter:image:alt', content: seo.imageAlt });

    this.setStructuredData(seo, canonicalUrl);
  }

  private currentSeoData(): SeoRouteData {
    let activeRoute = this.route;

    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }

    const seo = activeRoute.snapshot.data['seo'];

    return this.isSeoRouteData(seo) ? seo : DEFAULT_SEO;
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

  private setDocumentLanguage(): void {
    this.document.documentElement.lang = 'en';
    this.document.documentElement.dir = 'ltr';
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
      url: `${SITE_URL}/projects`,
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
