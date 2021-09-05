import { IsFQDN, IsNotEmpty } from 'class-validator';

export class CreateLinkDto {
  @IsNotEmpty()
  readonly description: string;

  @IsFQDN()
  @IsNotEmpty()
  readonly url: string;

  @IsNotEmpty()
  readonly tags: string[];

  @IsNotEmpty()
  readonly linkOwner: string;
}
