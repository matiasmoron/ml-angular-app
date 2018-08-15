import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})

/**
 * Transform the price depending of the currency sign
 */
export class PricePipe implements PipeTransform {

  transform(value: number, currencySign: string): string {
    const moneyFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: currencySign, minimumFractionDigits: 0 });
    
    return moneyFormat.format(value);
  }
}
