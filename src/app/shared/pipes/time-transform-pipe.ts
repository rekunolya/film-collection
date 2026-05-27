import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTransform',
  standalone: true,
})
export class TimeTransformPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null) return '';

    if (value < 60) {
      return `${value} min`;
    } else {
      return Math.floor(value / 60) + 'h ' + (value % 60) + 'min';
    }
  }
}
