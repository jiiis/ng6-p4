import { Component, OnInit } from '@angular/core';

import { Recipe } from '../models/Recipe';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;

  constructor(private _recipesService: RecipesService) {}

  ngOnInit() {
    this._recipesService.recipeSelectedEventEmitter.subscribe(
      (recipe: Recipe) => this.recipeSelected = recipe
    );
  }
}
