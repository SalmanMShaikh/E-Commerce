import { DataSource } from "typeorm"
import { Product } from "../entities/Product"
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'a.b.c.d.',
    database: process.env.DB_DATABASE || 'postgres',
    entities: ['server/entities/*{.ts,.js}*'],
    synchronize: true,
    logging: true
})

const ProductModel = AppDataSource.getRepository(Product)



export { AppDataSource, ProductModel }