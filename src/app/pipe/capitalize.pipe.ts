import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformCapitalizes',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (typeof value === 'string') {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }

}
