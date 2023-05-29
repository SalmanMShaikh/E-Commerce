import express from 'express';
import getProductData from '../controllers/getProductData';
import updateProductData from '../controllers/updateProductData';
import adddProductData from '../controllers/addProductData';
import deleteProductData from '../controllers/deleteProductData';
import multer from 'multer';
const router = express.Router();

router.get('/getProductData',
    getProductData
)

router.post('/updateProductData/:id',
    multer().any(),
    updateProductData
)

router.post('/addProductData',
    multer().any(),
    adddProductData
)

router.delete('/deleteProductData/:id',
    deleteProductData
)

export default router;