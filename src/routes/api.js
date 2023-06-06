const express =require('express');

const ProductsController=require("../controllers/productsController")
const router =express.Router();


router.get("/product-list/:pageNo/:perPage/:searchKey",ProductsController.ProductList);



module.exports=router;