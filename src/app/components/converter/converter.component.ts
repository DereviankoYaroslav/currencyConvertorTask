import { Component, Input } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MyCurrency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  @Input() currency!: MyCurrency

  details = false
}
