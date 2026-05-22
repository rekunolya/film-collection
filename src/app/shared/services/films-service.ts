import { Injectable, signal } from '@angular/core';
import { Film } from '../interfaces/film-interface';
import { getFilms } from '../../../assests/films';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  films = signal<Film[]>(getFilms());

  getFilmById(id:number) {
    return this.films().find(film => film.id === id) ?? null;
  }
}
