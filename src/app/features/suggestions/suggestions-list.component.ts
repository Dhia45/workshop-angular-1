import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';

import { Suggestion } from '../../models/suggestion';

@Component({

  selector: 'app-suggestions-list',

  standalone: true,

  imports: [CommonModule, FormsModule, RouterLink],

  templateUrl: './suggestions-list.component.html',

  styleUrl: './suggestions-list.component.css',

})

export class SuggestionsListComponent {

  suggestions: Suggestion[] = [

    {

      id: 1,

      title: 'Organiser une journée team building',

      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',

      category: 'Événements',

      date: new Date('2025-01-20'),

      status: 'acceptee',

      nbLikes: 10

    },

    {

      id: 2,

      title: 'Améliorer le système de réservation',

      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',

      category: 'Technologie',

      date: new Date('2025-01-15'),

      status: 'refusee',

      nbLikes: 0

    },

    {

      id: 3,

      title: 'Créer un système de récompenses',

      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',

      category: 'Ressources Humaines',

      date: new Date('2025-01-25'),

      status: 'refusee',

      nbLikes: 0

    },

    {

      id: 4,

      title: 'Moderniser l\'interface utilisateur',

      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',

      category: 'Technologie',

      date: new Date('2025-01-30'),

      status: 'en_attente',

      nbLikes: 0

    },

  ];

  searchTerm: string = '';

  favorites: Suggestion[] = [];

  get filteredSuggestions(): Suggestion[] {

    return this.suggestions.filter(s =>

      s.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||

      s.category.toLowerCase().includes(this.searchTerm.toLowerCase())

    );

  }

  addToFavorites(s: Suggestion) {

    this.favorites.push(s);

  }

}