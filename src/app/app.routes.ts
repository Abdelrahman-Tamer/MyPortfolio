import { Routes } from '@angular/router';
import { ROUTE_SEO } from './core/seo/seo.config';

const portfolioRoute = (sectionId: keyof typeof ROUTE_SEO) => ({
  loadComponent: () => import('./pages/portfolio/portfolio.component').then((component) => component.PortfolioComponent),
  data: {
    seo: ROUTE_SEO[sectionId],
    sectionId,
  },
});

export const routes: Routes = [
  {
    path: '',
    ...portfolioRoute('home'),
    title: 'Abdelrahman Emam | Angular Frontend Developer',
  },
  {
    path: 'about',
    ...portfolioRoute('about'),
    title: ROUTE_SEO.about.title,
  },
  {
    path: 'services',
    ...portfolioRoute('services'),
    title: ROUTE_SEO.services.title,
  },
  {
    path: 'projects',
    ...portfolioRoute('projects'),
    title: ROUTE_SEO.projects.title,
  },
  {
    path: 'skills',
    ...portfolioRoute('skills'),
    title: ROUTE_SEO.skills.title,
  },
  {
    path: 'contact',
    ...portfolioRoute('contact'),
    title: ROUTE_SEO.contact.title,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
