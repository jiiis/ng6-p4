import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Some Recipe', 'This is a test.', 'https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg'),
    new Recipe('Some Recipe', 'This is a test.', 'https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
