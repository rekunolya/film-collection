import { Component, inject, input } from '@angular/core';
import { FilmCard } from '../../../shared/components/film-card/film-card';
import { FilmsService } from '../../../shared/services/films-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [FilmCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  title = input.required<string>();

  private filmService = inject(FilmsService);
  private router = inject(Router);

  films = this.filmService.films;

  openFilmDetail(id: number) {
   console.log('click on film-card on home page', id);
   this.router.navigate(['/film', id])
  }

}
