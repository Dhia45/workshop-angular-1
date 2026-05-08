import { Routes } from '@angular/router';

export const suggestionsRoutes: Routes = [

  {

    path: '',

    loadComponent: () => import('./suggestions-list.component').then(c => c.SuggestionsListComponent)

  },

  {

    path: ':id',

    loadComponent: () => import('./suggestion-details.component').then(c => c.SuggestionDetailsComponent)

  }

];