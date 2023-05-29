import { Request, Response } from 'express';
import { ProductModel } from '../connection/connection';
import { config } from '../config/config';
import fs from 'fs';
import path from 'path';

const deleteProductData = async (req: Request, res: Response) => {
    try {
        let productId: number = -1;
        if (req.params && req.params.id) {
            productId = Number(req.params.id)
        }


        let productData = await ProductModel.findOne({ where: { id: productId } })
        if (productData && productData.images) {
            let productDataImages: string[] = productData.images.split(',');
            productDataImages.forEach(fileName => {
                let imagePath = path.join(config.imageUploadDir, fileName)
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath)
                }
            })
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