import { MenuItem } from './menuItem.interface';

export interface Menu {
	readonly name: string;
	readonly items: MenuItem;
}