import { Component, input } from '@angular/core';
import { Film } from '../../../shared/interfaces/film-interface';
import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-film-details',
  imports: [Button],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  filmDetails = input.required<Film>();
}
