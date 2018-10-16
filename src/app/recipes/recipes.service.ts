import { Injectable } from '@angular/core';

import { Recipe } from '../models/Recipe';
import { Ingredient } from '../models/Ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private _recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'This is recipe 1.',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20),
      ]
    ),
    new Recipe(
      'Recipe 2',
      'This is recipe 2.',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private _shoppingListService: ShoppingListService) {}

  get recipes() {
    return this._recipes.slice();
  }

  getRecipe(id: number) {
    return this._recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients);
  }
}
