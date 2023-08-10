import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable
} from 'typeorm';

import {
    IsDate,
    IsString,
    Length,
} from 'class-validator';

import { Wish } from 'src/wishes/entities/wish.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    @IsDate()
    createdAt: Date;

    @UpdateDateColumn()
    @IsDate()
    updatedAt: Date;

    @Column({ length: 250 })
    @IsString()
    @Length(1, 250)
    name: string;

    @Column({ length: 1500 })
    @IsString()
    @Length(1, 1500)
    description: string;

    @Column()
    @IsString()
    image: string;

    @ManyToMany(() => User, (user) => user.wishlists)
    owner: User;

    @ManyToMany(() => Wish, (wish) => wish.name)
    @JoinTable()
    items: Wish[];
}
