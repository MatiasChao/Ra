import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Phrases } from './phrases.component/phrases.component.component';
import { PhrasesComponent } from './phrases/phrases.component';

@NgModule({
  declarations: [
    AppComponent,
    Phrases.ComponentComponent,
    PhrasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
