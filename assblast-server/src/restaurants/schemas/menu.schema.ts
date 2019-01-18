import * as mongoose from 'mongoose';

export const MenuSchema = new mongoose.Schema({
	name: String,
	restaurant_id: ObjectId,
	menu_item_ids: Array,
});