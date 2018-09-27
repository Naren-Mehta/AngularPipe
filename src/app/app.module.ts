import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShortenPipe } from './pipe/shorten.pipe';
import { ShortBySalaryPipe } from './pipe/short-by-salary.pipe';
import { FormsModule } from '@angular/forms';
import { FilterDataPipe } from './pipe/filter-data.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    ShortBySalaryPipe,
    FilterDataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
