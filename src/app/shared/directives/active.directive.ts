import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges {
  @Input('appActive') isActive: boolean;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  ngOnChanges() {
  	if(this.isActive) {
  		this.backgroundColor = '#3498db';
  		this.color = 'white';
   	} else {
  		this.backgroundColor = 'transparent';
  		this.color = 'black';
  	}	
  }

  constructor() { }

}
