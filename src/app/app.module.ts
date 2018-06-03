import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/fr';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule       

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-BE' }   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
