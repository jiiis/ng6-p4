import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private _recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is recipe 1.', 'https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg'),
    new Recipe('Recipe 2', 'This is recipe 2.', 'https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg')
  ];

  recipeSelectedEventEmitter = new EventEmitter<Recipe>();

  constructor() {}

  get recipes() {
    return this._recipes.slice();
  }
}
