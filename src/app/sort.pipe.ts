import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'sort',
    pure: false
})
export class OrderPipe implements PipeTransform {
    transform(value: any, orderingProp: string) {
      return value.sort(
        (a, b) => {
          const aa = a[orderingProp].toUpperCase();
          const bb = b[orderingProp].toUpperCase();
          if(aa < bb) return -1;
          if(aa > bb) return 1;
          return 0;
        }
      );
    }
}