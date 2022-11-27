import { Component, Input } from '@angular/core';
import { CurrencyData } from 'src/app/models/currency';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() currencies: CurrencyData[];
}

