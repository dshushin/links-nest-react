import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { LogInWithCredentialsGuard } from '../auth/logInWithCredentials.guard';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user/:id')
  @UseGuards(LogInWithCredentialsGuard)
  getById(@Param('id') id: string) {
    return this.usersService.getById(+id);
  }
}
