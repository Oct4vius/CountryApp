import { Component } from '@angular/core';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: `

  `
})
export class ByCapitalPageComponent {

  searchByCapital( term: string){
    console.log('Desde capital page')
    console.log({term})
  }
}
