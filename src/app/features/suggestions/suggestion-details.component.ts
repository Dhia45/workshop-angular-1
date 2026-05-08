import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';

import { Suggestion } from '../../models/suggestion';

import { SuggestionsService } from '../suggestions.service';

@Component({

  selector: 'app-suggestion-details',

  standalone: true,

  imports: [CommonModule, RouterLink],

  templateUrl: './suggestion-details.component.html',

  styleUrl: './suggestion-details.component.css',

})

export class SuggestionDetailsComponent implements OnInit {

  suggestion: Suggestion | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private suggestionsService: SuggestionsService) {}

  ngOnInit() {

    const id = +this.route.snapshot.params['id'];

    this.suggestion = this.suggestionsService.getSuggestionById(id);

  }

}