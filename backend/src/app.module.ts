import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LinksModule } from './links/links.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './tags/tags.module';
import config from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    LinksModule,
    AuthModule,
    TagsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
