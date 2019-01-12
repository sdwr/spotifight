import * as mongoose from 'mongoose';

export const SiteItemSchema = new mongoose.Schema({
	title: String,
	creationTimestamp: {type: Date, default: Date.now},
	url: String
});