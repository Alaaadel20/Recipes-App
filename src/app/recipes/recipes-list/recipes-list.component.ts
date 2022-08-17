import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Recipe>()
  recipes:Recipe[]=[new Recipe('A test recipe','ma7shy','https://images.immediate.co.uk/production/volatile/sites/30/2022/06/BBQ-halloumi-fajita-skewers-6bad040.jpg '),
  new Recipe('Another test recipe','ma7shy','https://images.immediate.co.uk/production/volatile/sites/30/2022/06/BBQ-halloumi-fajita-skewers-6bad040.jpg ')]
  constructor() { }

  ngOnInit(): void {
  }
onRecipeSelecetd(recipe:Recipe){
  this.recipeWasSelected.emit(recipe)
}
}
