
import { Component } from '@angular/core';

@Component({
  selector: 'shared-home-page',
  templateUrl: './HomePage.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class HomePageComponent { }
