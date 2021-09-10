import {
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Tag } from '../../tags/entities/tag.entity';
import User from '../../users/user.entity';

@Entity({ name: 'links' })
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  description: string;

  @Column()
  url: string;

  @JoinTable({ name: 'links_tags' }) // 👈 Join the 2 tables - only the OWNER-side does this
  @ManyToMany(
    () => Tag,
    (tag) => tag.links, // what is "link" within the Tag Entity
    {
      cascade: true,
    },
  )
  tags: Tag[];

  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  @ManyToOne(() => User, (linkOwner) => linkOwner.links, {
    eager: true,
    nullable: false,
  })
  linkOwner: User;
}
