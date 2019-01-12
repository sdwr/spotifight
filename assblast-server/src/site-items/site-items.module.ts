import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SiteItemsController } from './site-items.controller';
import { SiteItemsService } from './site-items.service';
import { SiteItemSchema } from './schemas/siteItem.schema';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'SiteItem', schema: SiteItemSchema }])],
  controllers: [SiteItemsController],
  providers: [SiteItemsService]
})
export class SiteItemsModule {}
