import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { Tag } from './entities/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, User])],
  controllers: [TagsController],
  providers: [TagsService, Tag],
})
export class TagsModule {}
