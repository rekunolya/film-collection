import { Component } from '@angular/core';
import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-page-not-found',
  imports: [Button],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss',
})
export class PageNotFound {
  goToMainPage() {
    console.log('clicked button on the page not found')
  }
}
