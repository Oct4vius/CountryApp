import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './CountryTable.component.html',
  styles: [
    `img{
      width: 25px
    }`
  ],
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = []


}
