import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Activity1Component } from './components/activity1/activity1.component';
import { Activity2Component } from './components/activity2/activity2.component';

export const routes: Routes = [
    { path: 'introduccion/activity1', component: Activity1Component },
    { path: 'introduccion/activity2', component: Activity2Component },
];
