import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';

import { Suggestion } from '../../models/suggestion';

import { SuggestionsService } from '../suggestions.service';

@Component({

  selector: 'app-suggestions-list',

  standalone: true,

  imports: [CommonModule, FormsModule, RouterLink],

  templateUrl: './suggestions-list.component.html',

  styleUrl: './suggestions-list.component.css',

})

export class SuggestionsListComponent implements OnInit {

  suggestions: Suggestion[] = [];

  searchTerm: string = '';

  favorites: Suggestion[] = [];

  constructor(private suggestionsService: SuggestionsService) {}

  ngOnInit() {

    this.suggestions = this.suggestionsService.getSuggestions();

  }

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