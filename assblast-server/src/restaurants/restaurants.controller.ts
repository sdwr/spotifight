import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';

import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
	constructor(private readonly restaurantsService: RestaurantsService) {}
	@Get()
	async findAll() {
		return this.restaurantsService.findAll();
	}

	@Get(':searchName')
	async search(@Param() params) {
		return this.findAll()
			.then((restaurants) => restaurants.filter(r => r.name.includes(params.searchName)));
	}

	@Post()
	async create(@Body() createDto: CreateRestaurantDto) {
		console.log(createDto);
		this.restaurantsService.create(createDto);
	}

	@Put()
	async update(@Body() update: CreateRestaurantDto) {
		console.log("updating:" + update);
		this.restaurantsService.update(update);
	}
}
