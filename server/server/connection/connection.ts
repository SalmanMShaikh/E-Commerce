import { DataSource } from "typeorm"
import { Product } from "../entities/Product"
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'suleiman.db.elephantsql.com',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'pkajslol',
    password: process.env.DB_PASSWORD || 'odoKfBX2BfxkUXJtmRLShpPgEonZ_lw9',
    database: process.env.DB_DATABASE || 'pkajslol',
    entities: ['server/entities/*{.ts,.js}*'],
    synchronize: true,
    logging: true
})

const ProductModel = AppDataSource.getRepository(Product)



export { AppDataSource, ProductModel }