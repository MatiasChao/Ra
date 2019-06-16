import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhrasesComponent } from './phrases/phrases.component';
import { MenuComponent } from './menu/menu.component';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { WordsComponent } from './words/words.component';
import { VerbTensesComponent } from './verb-tenses/verb-tenses.component';
import { OthersComponent } from './others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    PhrasesComponent,
    MenuComponent,
    WordsComponent,
    VerbTensesComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
