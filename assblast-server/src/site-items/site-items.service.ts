import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SiteItem } from './interfaces/siteitem.interface';
import { CreateSiteItemDto } from './dto/create-siteitem.dto';


@Injectable()
export class SiteItemsService {
	constructor(@InjectModel('SiteItem') private readonly siteItemModel: Model<SiteItem>) {}

  async create(createDto: CreateSiteItemDto): Promise<SiteItem> {
    const createdSiteItem = new this.siteItemModel(createDto);
    return await createdSiteItem.save();
  }

  async findAll(): Promise<SiteItem[]> {
    return await this.siteItemModel.find().exec();
  }
}
