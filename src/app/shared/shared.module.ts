import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './pages/HomePage/HomePage.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
