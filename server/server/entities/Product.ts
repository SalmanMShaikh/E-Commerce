import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Generated } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    name: string

    @Column()
    @Generated("uuid")
    sku: string

    @Column({ nullable: true })
    price: number

    @Column({ nullable: true })
    images: string
}