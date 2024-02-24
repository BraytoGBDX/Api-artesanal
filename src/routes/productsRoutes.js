import { Router } from "express";
import { deleteProduct, formInsertCandy, updateProduct, getAllCandys, insertCandy, getOneProduct, addToCart, viewCart, deleteProductCart } from "../controllers/productsController.js";
const router=Router()

router.get('/',getAllCandys)
router.get('/:candybc',getOneProduct)
router.post('/insert',insertCandy)
router.post('/:candybc',updateProduct)
router.get('/delete/:candybc',deleteProduct)

router.get('/insert/insertCandy',formInsertCandy)
router.get('/addToCart/:candybc', addToCart);


router.get('/viewCart/Cart', viewCart);
router.get('/deleteCart/:cartbc',deleteProductCart)
router.get('/viewCart', (req, res) => {
    // Tu lógica para mostrar el carrito de compras
});






export default router
