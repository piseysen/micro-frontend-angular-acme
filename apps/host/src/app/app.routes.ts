import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { AuthGuard, LoginComponent } from '@acme/shared';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    loadChildren: () => import('about/Routes').then((m) => m!.remoteRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    loadChildren: () => import('cart/Routes').then((m) => m!.remoteRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: 'shop',
    loadChildren: () => import('shop/Routes').then((m) => m!.remoteRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: NxWelcome,
    canActivate: [AuthGuard],
  },
];
