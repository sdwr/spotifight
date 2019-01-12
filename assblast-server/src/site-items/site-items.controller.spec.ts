import { Test, TestingModule } from '@nestjs/testing';
import { SiteItemsController } from './site-items.controller';

describe('SiteItems Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SiteItemsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SiteItemsController = module.get<SiteItemsController>(SiteItemsController);
    expect(controller).toBeDefined();
  });
});
