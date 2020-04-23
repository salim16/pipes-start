import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: any) {
      return value.split('').reverse().join('');
    }
    //  I splited the param value by empty character '', 
    // I used the reverse method from array prototype an then joined the empty character again.
}