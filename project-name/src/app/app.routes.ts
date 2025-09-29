import { Routes } from '@angular/router';
import { Animals } from './animals/animals';
import { Friuts } from './friuts/friuts';

export const routes: Routes = [
    { path: 'animals', component: Animals },
    { path: 'fruits', component: Friuts }
];
