import * as mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema({
	name: String,
	location: String,
	url: String
});