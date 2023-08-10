import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany
} from 'typeorm';

import {
    IsNotEmpty,
    IsDate,
    Length,
    IsUrl,
    IsNumber,
    IsInt
} from 'class-validator';

import { User } from 'src/users/entities/user.entity';
import { Offer } from 'src/offers/entities/offer.entity';


@Entity()
export class Wish {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    @IsDate()
    createdAt: Date;

    @UpdateDateColumn()
    @IsDate()
    updatedAt: Date;

    @Column({ length: 250 })
    @IsNotEmpty()
    @Length(1, 250)
    name: string;

    @Column()
    @IsUrl()
    @IsNotEmpty()
    link: string;

    @Column()
    @IsUrl()
    @IsNotEmpty()
    image: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    @IsNumber()
    @IsNotEmpty()
    raised: number;

    @ManyToOne(() => User, user => user.wishes)
    // @JoinColumn({ name: "ownerId" })
    owner: User;

    @Column({ length: 1024 })
    @IsNotEmpty()
    @Length(1, 1024)
    description: string;

    @OneToMany(() => Offer, offer => offer.item)
    offers: Offer[];

    @Column({ default: 0 })
    @IsInt()
    copied: number;
}
