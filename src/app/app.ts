import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './features/components/header/header';
import { BreadCrumbs } from './features/components/bread-crumbs/bread-crumbs';
import { Footer } from './features/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, BreadCrumbs, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Film collection');
}
