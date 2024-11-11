import { Test, TestingModule } from '@nestjs/testing';
import { BucketlistsController } from './bucketlists.controller';
import { BucketlistsService } from './bucketlists.service';

describe('BucketlistsController', () => {
  let controller: BucketlistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BucketlistsController],
      providers: [BucketlistsService],
    }).compile();

    controller = module.get<BucketlistsController>(BucketlistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
