import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], prop: string, order: number): any[] {
    if (!Array.isArray(array) || !prop) {
      return array;
    }

    array.sort((a, b) => {
      const aValue = a[prop];
      const bValue = b[prop];
      if (aValue < bValue) {
        return -1 * order;
      } else if (aValue > bValue) {
        return 1 * order;
      } else {
        return 0;
      }
    });

    return array;
  }
}
