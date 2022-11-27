import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyData } from '../models/currency';

@Pipe({
  name: 'filterCurrencies'
})
export class FilterCurrenciesPipe implements PipeTransform {

  transform(currencies: CurrencyData[]) {
    return currencies.filter(c => c.cc === 'USD' || c.cc === 'EUR');
  }
}