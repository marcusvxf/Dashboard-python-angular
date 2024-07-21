import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dictPipe',
  standalone: true,
})
export class DictPipe implements PipeTransform {
  transform(dict: any, args: any[] = [null]): any {
    let array: { key: string; value: any }[] = [];
    for (let [key, value] of Object.entries(dict)) {
      array.push({ key: key, value: value });
    }
    return array;
  }
}
