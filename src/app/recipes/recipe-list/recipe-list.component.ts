import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this._recipesService.recipes;
  }
}
