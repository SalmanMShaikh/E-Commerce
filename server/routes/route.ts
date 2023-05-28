import express from 'express';
import getProductData from '../controllers/getProductData';
import updateProductData from '../controllers/updateProductData';
import adddProductData from '../controllers/addProductData';
import deleteProductData from '../controllers/deleteProductData';
const router = express.Router();

router.get('/getProductData',
    getProductData
)

router.post('/updateProductData',
    updateProductData
)

router.post('/addProductData',
    adddProductData
)

router.delete('/deleteProductData/:id',
    deleteProductData
)

export default router;