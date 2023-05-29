import { Request, Response } from 'express';
import { config } from '../config/config';
import { ProductModel } from '../connection/connection';
import fs from 'fs';
import path from 'path';

const updateProductData = async (req: Request, res: Response) => {
    try {
        let productId: number = -1;

        if (req.params && req.params.id) {
            productId = Number(req.params.id)
        }

        interface Product {
            name: string,
            price: number,
            images: string
        }
        let uploadPath: string = config.imageUploadDir;
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true })
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
        let imagesArray: string[] = []
        if (req.files && Array.isArray(req.files) && req.files.length > 0) {
            req.files.forEach(file => {
                let filename: string = `${Date.now()}_${Math.floor(Math.random() * 9000 + 1000)}_${file.originalname}`
                let fullPath: string = path.join(uploadPath, filename)
                imagesArray.push(filename)
                fs.writeFileSync(fullPath, file.buffer)
            })
        }

        let imagePaths: string = ''
        if (imagesArray.length > 0) {
            imagePaths = imagesArray.join(',')
        }
        let updateProduct: Product = {
            name: req.body.name,
            price: req.body.price,
            images: imagePaths
        };
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