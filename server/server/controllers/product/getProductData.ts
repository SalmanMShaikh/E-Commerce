import { Request, Response } from "express";
import { ProductModel } from "../../connection/connection";

const getProductData = async (req: Request, res: Response) => {
    try {
        let id: number = -1;
        let productData: any = [];
        if (req.params && req.params.id) {
            id = parseInt(req.params.id)
            productData = await ProductModel.findOne({ where: { id } })
            console.log(productData, '<<<<<<<<<<<<<<<<<<<<<here')
            if (!Array.isArray(productData) && productData.images) {
                productData.images = productData.images.split(',')
            } else {
                productData = productData.map((item: any) => {
                    if (item.images) {
                        item.images = item.images.split(',')
                    }

                    return item
                })
            }

        } else {
            productData = await ProductModel.find()
            productData = productData
            if (!Array.isArray(productData) && productData) {
                productData.images = productData.images.split(',')
            } else {
                productData = productData.map((item: any) => {
                    if (item.images) {
                        item.images = item.images.split(',')
                    }
                    return item
                })
            }
        }



        return res.json({ status: 200, data: productData })
    } catch (err) {
        console.log(err, '<<<<<<<<<<<<<<<<<<<<<<<<<here')
        if (err) {
            return res.json({ status: 400, message: 'Something went wrong.' })
        }
    }
}

export default getProductData