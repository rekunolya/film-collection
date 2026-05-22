import { Component, input, output } from '@angular/core';
import { Film } from '../../interfaces/film-interface';
import { NgClass } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-film-card',
  imports: [NgClass, Button],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Omit<Film, 'description' | 'duration'>>();
  filmId= output<number>();

  openFilmCard(){
    this.filmId.emit(this.film().id);
    console.log('click card', this.film().id);
  }

  addToFavorite() {
    this.film().isFavorite = !this.film().isFavorite;
    //console.log('isFavorite', this.film().isFavorite);
  }
}
