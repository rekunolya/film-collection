import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  textButton = input.required<string>();

  buttonClick() {
    console.log('click button component');
  }
}
