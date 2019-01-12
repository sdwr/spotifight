import { Component, OnInit } from '@angular/core';
import { Location } from '../models/Location'
import { Restaurant } from '../models/Restaurant'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor() {
  	var location: Location = {
  		type: "Point",
  		coordinates: [10,10]
  	}
  	var restaurants: Restaurant[] = [
  		{
  			name: "Burrito Del Rio",
  			location: location,
  			url: "www.penisland.com"
  		},
  		{
  			name: "Subway",
  			location: location,
  			url: "www.penisland.com"
  		},
  		{
  			name: "McDonalds",
  			location: location,
  			url: "www.penisland.com"
  		}
  	];	
  }

  ngOnInit() {
  }

}
