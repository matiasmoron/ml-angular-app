import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDecimalFormat'
})

/**
 * Transform the decimal price
 */
export class PriceDecimalPipe implements PipeTransform {

  transform(value: number, arg: any): string {
    if (value < 10) {
      return `${value}0`;
    } else {
      return `${value}`;
    }
  }
}
