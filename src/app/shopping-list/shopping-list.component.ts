import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/Ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private _shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this._shoppingListService.ingredients;
  }
}
