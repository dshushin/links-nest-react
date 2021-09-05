import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { hash } from 'bcrypt';
import { Link } from '../../links/entities/link.entity';
import { Tag } from '../../tags/entities/tag.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ select: false })
  @Exclude()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToMany(() => Link, (link) => link.linkOwner)
  links: Link[];

  @OneToMany(() => Tag, (tag) => tag.tagOwner)
  tags: Tag[];
}
