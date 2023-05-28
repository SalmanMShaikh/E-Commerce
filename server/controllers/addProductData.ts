import { Request, Response } from 'express';
import { ProductModel } from '../connection/connection';

const addProductData = async (req: Request, res: Response) => {
    try {
        interface Product {
            name: string,
            price: number,
            images: string
        }

        let addProduct: Product = req.body;

        await ProductModel.save(addProduct);

        return res.status(200).json({ status: 200, message: 'Success' });

    } catch (err) {
        if (err) {
            return res.json({ status: 400, message: 'Something went wrong.' })
        }
    }
}

export default addProductData