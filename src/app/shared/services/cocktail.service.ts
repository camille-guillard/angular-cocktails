import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {
	public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
  	new Cocktail('Mojito', 'https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg', 'Le mojito1, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche. Inspiré du mint julep, et variante des Ti-punch des Antilles, Daïquiri, et Cuba libre, il est né à Cuba dans les Caraïbes dans les années 1910 (dont il est à ce jour un des emblèmes exotiques international).'),


new Cocktail('Margarita', 'https://www.wikihow.com/images/thumb/3/3f/Make-a-Habanero-Margarita-Step-11---Version-2.jpg/aid214058-v4-1200px-Make-a-Habanero-Margarita-Step-11---Version-2.jpg', 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch qui serait une version du cocktail daisy (qui signifie « marguerite » en français, « margarita » en espagnol) dans lequel on remplaça le brandy par de la téquila durant la prohibition, période où les Américains ouvrirent des bars au Mexique et au Canada dans les zones frontalières.'),


  	new Cocktail('Sour', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Whiskey_sour.jpg/1024px-Whiskey_sour.jpg', 'Le Whiskey sour est un cocktail alcoolisé à base de whiskey ou de bourbon, de jus de citron, de sucre et optionnellement de blanc d’œuf. ')
  ]);

	public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);


	selectCocktail(index: number): void {
		this.cocktail.next(this.cocktails.value[index]);
	}


  constructor() { }
}
