import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Link } from './entities/link.entity';
import { Tag } from '../tags/entities/tag.entity';

@Module({
  controllers: [LinksController],
  providers: [LinksService],
  imports: [TypeOrmModule.forFeature([User, Link, Tag])],
})
export class LinksModule {}
