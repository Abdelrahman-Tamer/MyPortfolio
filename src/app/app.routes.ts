import { Routes } from '@angular/router';
import { ROUTE_SEO } from './core/seo/seo.config';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then((component) => component.PortfolioComponent),
    data: {
      seo: ROUTE_SEO.home,
    },
    title: 'Abdelrahman Emam | Angular Frontend Developer',
  },
  {
    path: 'cv',
    loadComponent: () => import('./pages/cv/cv').then((component) => component.Cv),
    data: {
      seo: ROUTE_SEO.cv,
    },
    title: ROUTE_SEO.cv.title,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
