import { DataSource } from "typeorm"
import { Product } from "../entities/Product"
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['server/entities/*{.ts,.js}*'],
    synchronize: true,
    logging: true
})

const ProductModel = AppDataSource.getRepository(Product)



export { AppDataSource, ProductModel }