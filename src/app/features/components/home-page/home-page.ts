import { Component, inject, input } from '@angular/core';
import { FilmCard } from '../../../shared/components/film-card/film-card';
import { FilmsService } from '../../../shared/services/films-service';


@Component({
  selector: 'app-home-page',
  imports: [FilmCard],
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
