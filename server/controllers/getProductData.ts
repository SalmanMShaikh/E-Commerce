import { Request, Response } from "express";
import { ProductModel } from "../connection/connection";

const getProductData = async (req: Request, res: Response) => {
    try {
        let productData = await ProductModel.find()
        return res.json({ status: 200, data: productData })
    } catch (err) {
        if (err) {
            return res.json({ status: 400, message: 'Something went wrong.' })
        }
    }
}

export default getProductData