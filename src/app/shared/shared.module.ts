import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './pages/ContactPage/ContactPage.component';
import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
