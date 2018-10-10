import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../../models/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _recipesService: RecipesService
  ) {}

  ngOnInit() {
    this.recipes = this._recipesService.recipes;
  }

  onNewRecipeClicked() {
    this._router.navigate(['new'], {relativeTo: this._route});
  }
}
