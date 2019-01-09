import { Controller, Get, Post, Body } from '@nestjs/common';

import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
	constructor(private readonly restaurantsService: RestaurantsService) {}
	@Get()
	async findAll() {
		return this.restaurantsService.findAll();
	}

	@Post()
	async create(@Body() createDto: CreateRestaurantDto) {
		console.log(createDto);
		this.restaurantsService.create(createDto);
	}
}
