import { Routes } from '@angular/router';
import { HomePage } from './features/components/home-page/home-page';
import { PageNotFound } from './features/components/page-not-found/page-not-found';
import { AboutPage } from './features/components/about-page/about-page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'about',
    loadComponent: () => import('./features/components/about-page/about-page').then(m => m.AboutPage)
  },
  {
    path: '**',
    component: PageNotFound
  }
];
