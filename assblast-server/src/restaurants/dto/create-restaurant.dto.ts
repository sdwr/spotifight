import { GeoJSON } from '../interfaces/geoJSON.interface';
import { Menu } from '../interfaces/menu.interface';
import { Review } from '../interfaces/review.interface';

export class CreateRestaurantDto {
	readonly name: string;
	readonly location: string;
	readonly url: string;
	readonly coords: GeoJSON;
	readonly menus: [Menu];
	readonly reviews: [Review];
}