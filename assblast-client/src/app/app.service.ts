import { Injectable } from '@angular/core';
import { Restaurant } from './models/Restaurant';
import { Location } from './models/Location';

@Injectable({
  providedIn: 'root'
})
export class AppService {

	restaurants: Restaurant[];

  constructor() { 
  var location = {
  		type: "Point",
  		coordinates: [10,10]
  	}
  	this.restaurants = [
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

  searchRestaurants(searchTerm: string): Promise<Restaurant[]> {
  	return Promise.resolve(this.restaurants);
  }
}
