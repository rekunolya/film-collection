import { Component, inject, input } from '@angular/core';
import { Header } from '../header/header';
import { FilmCard } from '../../../shared/components/film-card/film-card';
import { FilmsService } from '../../../shared/services/films-service';
import { BreadCrumbs } from '../bread-crumbs/bread-crumbs';
import { PageNotFound } from '../page-not-found/page-not-found';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home-page',
  imports: [Header, BreadCrumbs, PageNotFound, FilmCard, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  title = input.required<string>();

  private filmService = inject(FilmsService);

  films = this.filmService.films;

  openFilmDetail(id: number) {
   console.log('click on film-card on home page', id);
  }

}
