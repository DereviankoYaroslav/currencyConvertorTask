import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UAHCurrency } from 'src/app/constants/currency';
import { CurrencyData } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  @Input() currencies: CurrencyData[];

  defaultAmount: number = 0;

  ngOnInit(): void {
    this.currencies.push(UAHCurrency);
  }

  onAmountChange = (defaultAmount: number) => {
    this.defaultAmount = defaultAmount;
  } 
}
