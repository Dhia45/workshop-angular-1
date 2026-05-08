import { Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

import { NotFoundComponent } from './core/notfound/notfound.component';

export const routes: Routes = [

  {

    path: '',

    redirectTo: '/home',

    pathMatch: 'full'

  },

  { path: 'home', component: HomeComponent },

  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.routes').then(r => r.suggestionsRoutes) },

  { path: 'users', loadChildren: () => import('./features/users/users.routes').then(r => r.usersRoutes) },

  { path: '**', component: NotFoundComponent }

];