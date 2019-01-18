import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
	@Input() searchResult: Restaurant;

  	constructor() { }

  	ngOnInit() {
  	}

}
