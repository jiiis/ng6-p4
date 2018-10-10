import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../models/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  ingredientsChangedEventEmitter = new EventEmitter<Ingredient[]>();

  constructor() {}

  get ingredients() {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);

    this.ingredientsChangedEventEmitter.emit(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);

    this.ingredientsChangedEventEmitter.emit(this._ingredients.slice());
  }
}
