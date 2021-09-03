import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'links' })
export class LinkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  tag: string;
}
