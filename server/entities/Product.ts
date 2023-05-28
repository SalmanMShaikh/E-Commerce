import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Generated } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    @Generated("uuid")
    sku: string

    @Column()
    price: number

    @Column()
    images: string
}