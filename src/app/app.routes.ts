import { Routes } from '@angular/router';
import { Auth } from './core/auth/auth';
import { Home } from './pages/home/home';
import { Page404 } from './pages/page404/page404';

export const routes: Routes = [
      {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: 'auth',
      loadComponent: () => import('./core/auth/auth').then(m => m.Auth),
    },
    {
      path: 'home',
      loadComponent: () => import('./pages/home/home').then(m => m.Home),
    },
    {
      path: '**',
      loadComponent: () => import('./pages/page404/page404').then(m => m.Page404),
    },
];
