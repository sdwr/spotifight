import { Document } from 'mongoose';

export interface SiteItem extends Document {
	readonly title: string;
	readonly creationTimestamp: Date;
	readonly url: string;
}