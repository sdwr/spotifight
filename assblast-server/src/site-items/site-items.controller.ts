import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { SiteItemsService } from './site-items.service';
import { CreateSiteItemDto } from './dto/create-siteitem.dto';

@Controller('site-items')
export class SiteItemsController {
	constructor(private readonly siteItemsService: SiteItemsService) {}

	@Get()
	async findAll() {
		return this.siteItemsService.findAll();
	}

	@Post()
	async create(dto: CreateSiteItemDto) {
		return this.siteItemsService.create(dto);
	}
}
