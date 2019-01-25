import { Document } from 'mongoose';

import { GeoJSON } from './geoJSON.interface';
import { Menu } from './menu.interface';
import { Review } from './review.interface';

export interface Restaurant extends Document {
	readonly name: string;
	readonly location: string;
	readonly url: string;
	readonly coords: GeoJSON;
	readonly menus: [Menu];
	readonly reviews: [Review]
}