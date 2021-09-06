import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Link } from '../../links/entities/link.entity';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'tags' })
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  tagName: string;

  @ManyToMany(
    () => Link,
    (link) => link.tags, // what is "tags" within the Link Entity
  )
  links: Tag[];

  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  @ManyToOne(() => User, (tagOwner) => tagOwner.tags, { eager: true })
  tagOwner: User;
}
