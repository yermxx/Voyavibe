import { Module } from '@nestjs/common';
import { BucketlistsService } from './bucketlists.service';
import { BucketlistsController } from './bucketlists.controller';

@Module({
  controllers: [BucketlistsController],
  providers: [BucketlistsService],
})
export class BucketlistsModule {}
