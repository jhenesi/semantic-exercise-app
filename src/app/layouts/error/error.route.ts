import { Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
    {
        path: 'accessdenied',
        component: ErrorComponent
    }
];
