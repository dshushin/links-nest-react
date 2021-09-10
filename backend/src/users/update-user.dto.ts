import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../auth/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
