import { Routes } from '@angular/router';
import { HomePage } from './features/components/home-page/home-page';
import { PageNotFound } from './features/components/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '**',
    component: PageNotFound
  }
];
