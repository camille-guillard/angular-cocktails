import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  
  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
  	this.cocktailService.cocktail.subscribe((cocktail: Cocktail) => {
  		this.cocktail = cocktail
  	})
  }

}
