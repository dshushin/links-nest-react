import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user/:id')
  getById(@Param('id') id: string) {
    return this.usersService.getById(+id);
  }
}
