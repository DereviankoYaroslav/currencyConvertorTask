import { Component, Input } from '@angular/core';
import { MyCurrency } from 'src/app/models/currency';

@Component({
  selector: 'app-converter-element',
  templateUrl: './converter-element.component.html',
  styleUrls: ['./converter-element.component.css']
})
export class ConverterElementComponent {
  @Input() currencies: MyCurrency[];
}
