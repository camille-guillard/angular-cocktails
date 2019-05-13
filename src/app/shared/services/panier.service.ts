import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
	public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>(null);


  addIngredients(ingredients: Ingredient[]): void {
    let currentValue = [];
  	if(this.panier.value) currentValue = this.panier.value.slice()

  	for(let i=0; i<ingredients.length; i++) {
      let index = currentValue.map( i => i.name).indexOf(ingredients[i].name);

      if(index >= 0) {
        currentValue[index].quantity += ingredients[i].quantity;
      } else {
        currentValue.push(new Ingredient(ingredients[i].name, ingredients[i].quantity));
      }

    }

    this.panier.next(currentValue);
  }

  constructor() { }
}
