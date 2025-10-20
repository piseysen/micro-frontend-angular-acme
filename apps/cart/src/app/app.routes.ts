import { Route } from '@angular/router';
import { AuthGuard, LoginComponent } from '@acme/shared';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
    canActivate: [AuthGuard],
  },
];
