import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { PeopleCounterComponent } from './people-counter/people-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    LabelComponent,
    PeopleCounterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
