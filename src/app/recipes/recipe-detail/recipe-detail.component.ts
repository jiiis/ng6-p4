import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../../models/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(
    private _recipesService: RecipesService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.recipe = this._recipesService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this._recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
