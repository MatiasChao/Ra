import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhrasesComponent } from './phrases/phrases.component';
import { WordsComponent } from './words/words.component';
import { VerbTensesComponent } from './verb-tenses/verb-tenses.component';

const appRoutes: Routes = [
    { path: '', component: PhrasesComponent},
    { path: 'phrases', component: PhrasesComponent},
    { path: 'words', component: WordsComponent},
    { path: 'tenses', component: VerbTensesComponent},
    { path: '**', component: PhrasesComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
