import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	@Input() searchTerm: string;
	mcdonalds: boolean = false;

  	constructor() { }

  	ngOnInit() {
  	}

  	searchRestaurants() {
  		if (this.searchTerm === "mcdonalds") {
  			this.mcdonalds = true;
  		}
  	}

}
