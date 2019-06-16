import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhrasesComponent } from './phrases/phrases.component';
import { WordsComponent } from './words/words.component';
import { HomeComponent } from './home/home.component';
import { VerbTensesComponent } from './verb-tenses/verb-tenses.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'phrases', component: PhrasesComponent},
    { path: 'words', component: WordsComponent},
    { path: 'tenses', component: VerbTensesComponent},
    { path: 'home', component: PhrasesComponent},
    { path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
