import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { Tag } from './entities/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../users/user.entity';
import { Link } from '../links/entities/link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, User, Link])],
  controllers: [TagsController],
  providers: [TagsService, Tag],
  exports: [TagsService],
})
export class TagsModule {}
