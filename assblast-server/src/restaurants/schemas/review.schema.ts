import * as mongoose from 'mongoose';

export const ReviewSchema = new mongoose.Schema({
	stars: Number,
	restaurant_id: ObjectId,
	menu_item_ids: Array,
	comment: String
});