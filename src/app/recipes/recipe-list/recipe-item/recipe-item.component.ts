import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../../models/Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() id: number;
  @Input() recipe: Recipe;

  ngOnInit() {}
}
