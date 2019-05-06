import { Route } from '@angular/router';

import { HomeComponent } from '../';

export const homeRoute: Route = {
    path: '',
    component: HomeComponent,
    data: {
        authorities: []
    }
};
