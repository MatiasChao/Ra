import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhrasesComponent } from './phrases/phrases.component';

const appRoutes: Routes = [
    { path: '', component: PhrasesComponent},
    { path: 'phrases', component: PhrasesComponent},
    { path: '**', component: PhrasesComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
