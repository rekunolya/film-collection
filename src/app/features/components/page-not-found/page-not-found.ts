import { Component, inject } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [Button],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss',
})
export class PageNotFound {
  private route = inject(Router);

  goToMainPage() {
    //console.log('clicked button on the page not found')
    this.route.navigate(['/home'])
  }
}
