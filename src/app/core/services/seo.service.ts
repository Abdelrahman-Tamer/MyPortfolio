import { Meta, Title } from '@angular/platform-browser';
import { inject, Service } from '@angular/core';

interface SeoMetadata {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly image: string;
}

const PORTFOLIO_SEO: SeoMetadata = {
  title: 'Abdelrahman Emam | Angular Frontend Developer',
  description:
    'Angular Frontend Developer in Cairo building responsive web interfaces, REST API integrations, and client-ready projects.',
  // TODO: Replace with final deployed portfolio domain.
  url: 'https://your-domain.com/',
  // TODO: Replace with the final social preview image if a branded image is produced.
  image: 'https://your-domain.com/og-preview.svg',
};

@Service()
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  setPortfolioMetadata(): void {
    this.title.setTitle(PORTFOLIO_SEO.title);

    this.meta.updateTag({ name: 'description', content: PORTFOLIO_SEO.description });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Angular Developer, Frontend Developer, TypeScript, Responsive Web Design, REST API Integration, Cairo Developer, JavaScript Developer',
    });
    this.meta.updateTag({ name: 'author', content: 'Abdelrahman Emam' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'theme-color', content: '#0b0e14' });

    this.meta.updateTag({ property: 'og:title', content: PORTFOLIO_SEO.title });
    this.meta.updateTag({ property: 'og:description', content: PORTFOLIO_SEO.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: PORTFOLIO_SEO.url });
    this.meta.updateTag({ property: 'og:image', content: PORTFOLIO_SEO.image });
    this.meta.updateTag({ property: 'og:site_name', content: 'Abdelrahman Emam Portfolio' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: PORTFOLIO_SEO.title });
    this.meta.updateTag({ name: 'twitter:description', content: PORTFOLIO_SEO.description });
    this.meta.updateTag({ name: 'twitter:image', content: PORTFOLIO_SEO.image });
  }
}
