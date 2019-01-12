import { Test, TestingModule } from '@nestjs/testing';
import { SiteItemsService } from './site-items.service';

describe('SiteItemsService', () => {
  let service: SiteItemsService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteItemsService],
    }).compile();
    service = module.get<SiteItemsService>(SiteItemsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
