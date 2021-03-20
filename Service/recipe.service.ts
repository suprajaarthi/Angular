import { Recipe } from './recipe.model';
import { EventEmitter,Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{
    recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Gordon_Ramsay_Burger.jpg',
    [
    new Ingredient('Meat',1),
    new Ingredient('Bun',2),
    new Ingredient('Cheese',1),
    new Ingredient('Tomato',1),
    new Ingredient('Onion',2),
    new Ingredient('Spinach',2),

    ]),

    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/BBQ_Chicken.jpg',
    [
    new Ingredient('Chicken',1),
    new Ingredient('Mayonnaise',1),
    ]),

     new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/6/61/Pizza_Prosciutto.jpg',[]),

    new Recipe('A Test Recipe', 'This is Curd Rice', 'https://upload.wikimedia.org/wikipedia/commons/5/58/Curd_Rice.jpg',[]),

    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/7/77/Vegetable_biriyani_%2829372046950%29.jpg',[]),
    
  ];
  constructor(private slService : ShoppingListService){}
  getRecipes()
  {
  	return this.recipes.slice();
  }


addIngredientsToShoppingList(ingredients: Ingredient[] ){
	this.slService.addIngredients(ingredients);
} 
}