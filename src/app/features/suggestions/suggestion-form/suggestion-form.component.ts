import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { Suggestion } from '../../../models/suggestion';

import { SuggestionsService } from '../suggestions.service';

@Component({

  selector: 'app-suggestion-form',

  standalone: true,

  imports: [ReactiveFormsModule, CommonModule],

  templateUrl: './suggestion-form.component.html',

  styleUrl: './suggestion-form.component.css'

})

export class SuggestionFormComponent implements OnInit {

  suggestionForm!: FormGroup;

  categories: string[] = [

    'Infrastructure et bâtiments',

    'Technologie et services numériques',

    'Restauration et cafétéria',

    'Hygiène et environnement',

    'Transport et mobilité',

    'Activités et événements',

    'Sécurité',

    'Communication interne',

    'Accessibilité',

    'Autre'

  ];

  constructor(

    private fb: FormBuilder,

    private suggestionsService: SuggestionsService,

    private router: Router

  ) {}

  ngOnInit() {

    this.suggestionForm = this.fb.group({

      title: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Z][a-zA-Z]*$/)]],

      description: ['', [Validators.required, Validators.minLength(30)]],

      category: ['', Validators.required]

    });

  }

  onSubmit() {

    if (this.suggestionForm.valid) {

      const formValue = this.suggestionForm.value;

      const maxId = Math.max(...this.suggestionsService.getSuggestions().map(s => s.id), 0);

      const newSuggestion: Suggestion = {

        id: maxId + 1,

        title: formValue.title,

        description: formValue.description,

        category: formValue.category,

        date: new Date(),

        status: 'en attente',

        nbLikes: 0

      };

      this.suggestionsService.addSuggestion(newSuggestion);

      this.router.navigate(['/suggestions']);

    }

  }

  get title() { return this.suggestionForm.get('title'); }

  get description() { return this.suggestionForm.get('description'); }

  get category() { return this.suggestionForm.get('category'); }

}
