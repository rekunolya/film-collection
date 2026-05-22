import { Routes } from '@angular/router';
import { HomePage } from './features/components/home-page/home-page';
import { PageNotFound } from './features/components/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'about',
    loadComponent: () => import('./features/components/about-page/about-page').then(m => m.AboutPage)
  },
  {
    path: 'film/:id',
    loadComponent: () => import('./features/components/film-details/film-details').then(m => m.FilmDetails)
  },
  {
    path: '**',
    component: PageNotFound
  }
];
