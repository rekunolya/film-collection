import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './features/components/header/header';
import { Footer } from './features/components/footer/footer';
import { BreadCrumbs } from './features/components/bread-crumbs/bread-crumbs';
import { PageNotFound } from './features/components/page-not-found/page-not-found';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, BreadCrumbs, PageNotFound],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Film collection');
}
