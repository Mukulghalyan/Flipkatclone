import express  from 'express';
import {usersignup , userLogin} from '../controller/usercontroller.js';
import { getProducts , getProductByid} from '../controller/productcontroller.js';

const router=express.Router();

router.post('/signup', usersignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductByid);



export default router;