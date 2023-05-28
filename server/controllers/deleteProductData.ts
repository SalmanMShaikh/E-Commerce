import { Request, Response } from 'express';
import { ProductModel } from '../connection/connection';

const deleteProductData = async (req: Request, res: Response) => {
    try {
        let productId: number = -1;
        if (req.params && req.params.id) {
            productId = Number(req.params.id)
        }

        if (productId !== -1) {
            await ProductModel.delete(productId);
        }

        return res.status(200).json({ status: 200, message: 'Success' });
    } catch (err) {
        if (err) {
            return res.json({ status: 400, message: 'Something went wrong.' })
        }
    }

}

export default deleteProductData