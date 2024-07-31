import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformGender',  
  standalone: true
})
export class GenderPipe implements PipeTransform {
  transform(value: number): string {
    return value === 1 ? 'Male' : value === 0 ? 'Female' : 'Unknown';
  }
}