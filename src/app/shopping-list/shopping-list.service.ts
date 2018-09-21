import { Injectable } from '@angular/core';

import { Ingredient } from '../models/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {}

  get ingredients() {
    return this._ingredients.slice();
  }
}
