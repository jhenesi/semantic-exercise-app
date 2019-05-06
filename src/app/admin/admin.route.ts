import { Routes } from '@angular/router';
import { securedRoute } from './';
import { UserRouteAccessServiceService } from '../core';

const ADMIN_ROUTES = [securedRoute];

export const adminRoutes: Routes = [{
    path: '',
    data: {
        authorities: ['ROLE_ADMIN']
    },
    canActivate: [UserRouteAccessServiceService],
    children: ADMIN_ROUTES
}];
