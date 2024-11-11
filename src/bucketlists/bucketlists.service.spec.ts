import { Test, TestingModule } from '@nestjs/testing';
import { BucketlistsService } from './bucketlists.service';

describe('BucketlistsService', () => {
  let service: BucketlistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BucketlistsService],
    }).compile();

    service = module.get<BucketlistsService>(BucketlistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
