import { Request, Response } from 'express';
import { ProductModel } from '../connection/connection';
import { config } from '../config/config';
import path from 'path';
import fs from 'fs';

const addProductData = async (req: Request, res: Response) => {
    try {
        interface Product {
            name: string,
            price: number,
            images: string
        }

        let uploadPath: string = config.imageUploadDir;
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true })
        }



        let imagesArray: string[] = []
        console.log(req.files, '<<<<<<<<<<<<<<<<<<<<<<,why')
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

        let addProduct: Product = {
            name: req.body.name,
            price: req.body.price,
            images: imagePaths
        };

        await ProductModel.save(addProduct);

        return res.status(200).json({ status: 200, message: 'Success' });

    } catch (err) {
        if (err) {
            return res.json({ status: 400, message: 'Something went wrong.' })
        }
    }
}

export default addProductData