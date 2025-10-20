import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { AuthGuard } from '@acme/shared';

export const remoteRoutes: Route[] = [
  { 
    path: '', 
    component: RemoteEntry,
    canActivate: [AuthGuard]
  }
];
