import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if(item[propName] === filterString) { // In Javascript, property can be accessed by obj["propertyName"];
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
