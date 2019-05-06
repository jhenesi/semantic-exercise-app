import { Routes } from '@angular/router';
import { homeRoute, unsecuredRoute, loginRoute } from './';

const MAIN_ROUTES = [homeRoute, unsecuredRoute, loginRoute];

export const mainRoutes: Routes = [{
    path: '',
    children: MAIN_ROUTES
}];
