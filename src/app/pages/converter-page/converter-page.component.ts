import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CurrencyData } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-converter-page',
  templateUrl: './converter-page.component.html',
  styleUrls: ['./converter-page.component.css']
})
export class ConverterPageComponent {

  currency: Observable<CurrencyData[]>;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.currency = this.currencyService.fetchCurrencies().pipe(
      tap(() => console.log(this.currency))
    );
  }
}
