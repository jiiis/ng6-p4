import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is recipe 1.', 'https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg'),
    new Recipe('Recipe 2', 'This is recipe 2.', 'https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
