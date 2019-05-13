import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Cocktail } from '../../shared/models/cocktail.model';
import { Ingredient } from '../../shared/models/ingredient.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { PanierService} from '../../shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  public index: number;
  
  constructor(private activatedRoute: ActivatedRoute, private cocktailService: CocktailService, private panierService: PanierService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: Params) => {
      if(params.index) {
        this.index = params.index;
        this.cocktail = this.cocktailService.getCocktail(params.index);
      } else {
        this.index = 0;
        this.cocktail = this.cocktailService.getCocktail(0);
      }

    })
  }

  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients.slice());
  }

  getUrl(): string[] {
    return ['/cocktails', this.index+'', 'edit']
  }

}
