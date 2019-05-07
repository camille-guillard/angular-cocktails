import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  @Input() cocktails: Cocktail[];
  @Output() pickEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  pickCocktail(index: number): void {
    this.pickEvent.emit(index);
  }

}
