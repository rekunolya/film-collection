import { Component, inject, input, signal } from '@angular/core';
import { Film } from '../../../shared/interfaces/film-interface';
import { Button } from '../../../shared/components/button/button';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from '../../../shared/services/films-service';
import { TimeTransformPipe } from '../../../shared/pipes/time-transform-pipe';

@Component({
  selector: 'app-film-details',
  imports: [Button, TimeTransformPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  filmDetails = signal<Film | null>(null);

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private film = inject(FilmsService);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.filmDetails.set(this.film.getFilmById(id));
  }

  goToMainPage(){
    this.router.navigate(['/home']);
  }
}
