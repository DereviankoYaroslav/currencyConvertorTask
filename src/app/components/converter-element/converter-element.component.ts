import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrencyData } from 'src/app/models/currency';

@Component({
  selector: 'app-converter-element',
  templateUrl: './converter-element.component.html',
  styleUrls: ['./converter-element.component.css']
})
export class ConverterElementComponent implements OnInit {
  @Input() currencies: CurrencyData[];
  @Input() amount: number;
  @Output() onAmountChange = new EventEmitter<number>();

  coefficient: number;

  ngOnInit(): void {
    this.coefficient = this.currencies[0].rate;
  }

  onChangeF = (value: Event) => {
    let x = (value.target as HTMLInputElement).value;
    this.coefficient = x ? parseFloat(x) : 1;
  }

  setAmount = (event: Event) => {
    let x = (event.target as HTMLInputElement).value;
    this.amount = x ? parseFloat(x) : 0;
    this.onAmountChange.emit(this.amount*this.coefficient);
  }
}
