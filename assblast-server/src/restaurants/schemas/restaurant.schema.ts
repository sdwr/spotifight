import * as mongoose from 'mongoose';
import { GeoJSON } from '../interfaces/geoJSON.interface';

let ObjectId = mongoose.Schema.Types.ObjectId;

export const RestaurantSchema = new mongoose.Schema({
	name: String,
	location: String,
	url: String,
	coords: {
		type: String,
		coordinates: [Number]
	},
	menus: [{name: String, 
					 items: [{
					 	id: Number,
					 	name: String,
					 	description: String,
					 	price: Number
					 }]
					}],
	reviews: [{
		stars: Number,
		comment: String,
		items: [Number]
	}]

});