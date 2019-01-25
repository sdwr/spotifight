import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './interfaces/restaurant.interface';
import { Menu } from './interfaces/menu.interface';
import { MenuItem } from './interfaces/menuItem.interface';
import { Review } from './interfaces/review.interface';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(@InjectModel('Restaurant') private readonly restaurantModel: Model<Restaurant>) 
  {}

  async create(createDto: CreateRestaurantDto): Promise<Restaurant> {
    const createdRestaurant = new this.restaurantModel(createDto);
    return await createdRestaurant.save();
  }

  async findAll(): Promise<Restaurant[]> {
    return await this.restaurantModel.find().exec();
  }
}