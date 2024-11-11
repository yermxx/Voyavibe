import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BucketlistsService } from './bucketlists.service';
import { CreateBucketlistDto } from './dto/create-bucketlist.dto';
import { UpdateBucketlistDto } from './dto/update-bucketlist.dto';

@Controller('bucketlists')
export class BucketlistsController {
  constructor(private readonly bucketlistsService: BucketlistsService) {}

  @Post()
  create(@Body() createBucketlistDto: CreateBucketlistDto) {
    return this.bucketlistsService.create(createBucketlistDto);
  }

  @Get()
  findAll() {
    return this.bucketlistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bucketlistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBucketlistDto: UpdateBucketlistDto) {
    return this.bucketlistsService.update(+id, updateBucketlistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bucketlistsService.remove(+id);
  }
}
