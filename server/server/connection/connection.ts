import { DataSource } from "typeorm"
import { Product } from "../entities/Product"

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'a.b.c.d.',
    database: 'postgres',
    entities: ['server/entities/*{.ts,.js}*'],
    synchronize: true,
    logging: true
})

const ProductModel = AppDataSource.getRepository(Product)



export { AppDataSource, ProductModel }