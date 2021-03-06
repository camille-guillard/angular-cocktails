import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {
	public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
  	new Cocktail('Mojito', 'https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg', 'Le mojito1, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche. Inspiré du mint julep, et variante des Ti-punch des Antilles, Daïquiri, et Cuba libre, il est né à Cuba dans les Caraïbes dans les années 1910 (dont il est à ce jour un des emblèmes exotiques international).', 

[
    new Ingredient('rhum blanc', 5), 
  	new Ingredient('feuilles de menthe', 7),
    new Ingredient('jus de citron vert', 1),
    new Ingredient('sucre', 1),
    new Ingredient('eau gazeuse', 6),
    new Ingredient('glaçons pilés', 4)
  	]


  	),


new Cocktail('Margarita', 'https://www.wikihow.com/images/thumb/3/3f/Make-a-Habanero-Margarita-Step-11---Version-2.jpg/aid214058-v4-1200px-Make-a-Habanero-Margarita-Step-11---Version-2.jpg', 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch qui serait une version du cocktail daisy (qui signifie « marguerite » en français, « margarita » en espagnol) dans lequel on remplaça le brandy par de la téquila durant la prohibition, période où les Américains ouvrirent des bars au Mexique et au Canada dans les zones frontalières.', [
    new Ingredient('tequila', 4), 
  	new Ingredient('jus de citron vert', 2),
    new Ingredient('curaçao triple sec', 2),
    new Ingredient('citron vert', 1),
    new Ingredient('glaçons', 5),
  	new Ingredient('sel fin', 1)
  	]),


  	new Cocktail('Whiskey Sour', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Whiskey_sour.jpg/1024px-Whiskey_sour.jpg', 'Le Whiskey sour est un cocktail alcoolisé à base de whiskey ou de bourbon, de jus de citron, de sucre et optionnellement de blanc d’œuf.', [
    new Ingredient('whiskey', 5), 
    new Ingredient('citron', 1), 
  	new Ingredient('sirop de sucre de canne', 2),
    new Ingredient('glaçons', 3)
  	])
  ]);

	public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);


  getCocktail(index: number): Cocktail {
    return this.cocktails.value[index];
  }

  addCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    cocktails.push(new Cocktail(cocktail.name, cocktail.img, cocktail.desc, 

    cocktail.ingredients
      .filter(ingredient => {return ingredient.name && ingredient.quantity})
      .map( ingredient => new Ingredient(ingredient.name, ingredient.quantity))));

    this.cocktails.next(cocktails);
  }

  editCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    const index = cocktails.map( c => c.name).indexOf(cocktail.name);
    cocktails[index] = new Cocktail(cocktail.name, cocktail.img, cocktail.desc, 

    cocktail.ingredients
      .filter(ingredient => {return ingredient.name && ingredient.quantity})
      .map( ingredient => new Ingredient(ingredient.name, ingredient.quantity)))
    
    this.cocktails.next(cocktails);
  }

  constructor() { }
}
