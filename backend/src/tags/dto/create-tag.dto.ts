import { IsNotEmpty } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  readonly tagName: string;

  @IsNotEmpty()
  readonly tagOwner: string;
}
