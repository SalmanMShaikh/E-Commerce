import express from 'express';
import getProductData from '../controllers/product/getProductData';
import updateProductData from '../controllers/product/updateProductData';
import adddProductData from '../controllers/product/addProductData';
import deleteProductData from '../controllers/product/deleteProductData';
import addUser from '../controllers/user/addUser';
import multer from 'multer';
import checkUser from '../controllers/user/checkUser';
const router = express.Router();

router.get('/getProductData',
    getProductData
)

router.post('/updateProductData/:id',
    multer().any(),
    updateProductData
)

router.get('/getProductDataById/:id',
    getProductData
)

router.post('/addProductData',
    multer().any(),
    adddProductData
)

router.delete('/deleteProductData/:id',
    deleteProductData
)

router.post('/addUser',
    addUser
)

router.post('/checkUser',
    checkUser)

export default router;