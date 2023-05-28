import { Request, Response } from 'express';
import { ProductModel } from '../connection/connection';

const updateProductData = async (req: Request, res: Response) => {
    try {
        let productId: number = Number(req.body.id);

        if (req.body && req.body.id) {
            delete req.body.id
        }

        interface Product {
            name: string,
            price: number,
            images: string
        }

        let updateProduct: Product = req.body;
        if (productId) {
            await ProductModel.update(productId, updateProduct);
        } else {
            return res.json({ status: 400, message: 'Product not found.' })
        }

        return res.status(200).json({ status: 200, message: 'Success' });

    } catch (err) {
        if (err) {
            return res.json({ status: 400, message: 'Something went wrong.' })
        }
    }

}

export default updateProductData