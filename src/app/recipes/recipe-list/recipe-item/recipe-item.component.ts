import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../../models/Recipe';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _recipesService: RecipesService) {}

  ngOnInit() {}

  onSelected() {
    this._recipesService.recipeSelectedEventEmitter.emit(this.recipe);
  }
}
