import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurant.module';
import { SiteItemsModule } from './site-items/site-items.module';

const mongoDB = "mongodb+srv://assblast-dev:assblastpass@cluster0-nzlqs.gcp.mongodb.net/test?retryWrites=true"

@Module({
  imports: [MongooseModule.forRoot(mongoDB),
  			RestaurantsModule,
  			SiteItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
