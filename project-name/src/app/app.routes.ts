import { Routes } from '@angular/router';
import { Animals } from './animals/animals';
import { Friuts } from './friuts/friuts';
import { Generic } from './generic/generic';

export const routes: Routes = [
    { path: 'animals', component: Animals },
    { path: 'fruits', component: Friuts },
    {path: '', redirectTo: '/animals', pathMatch: 'full'},
   { path: 'generic/:id', component: Generic }
];
