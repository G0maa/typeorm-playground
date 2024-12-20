import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

// From what I have noticed the main issue is:
// createTableSql has table.uniques correctly.
// while addColumn (and probably other methods) does not.
// i.e. addColumn has older table.uniques.
// This is apart from the logic itself.
@Entity()
@Unique(['age'])
@Unique('unique-email', ['email'])
@Unique('unique-email-nickname', ['email', 'nickname'])
// @Unique('unique-password', ['password'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  nickname: string;

  @Column()
  age: number;

  // @Column()
  // password: string;
}
