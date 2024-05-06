import { Router } from "express";
import {
    getCategoriesAll,
    getProductsByCategoryId,
    getModelsByProductId,
    getModelById,
    getOrderById,
    createOrder
} from "../controllers/supabase.controller.js";

const router = Router();

// router.post("/create-checkout-session", createSession);

// router.get("/success", (req, res) => res.redirect("/success.html"));

// router.get("/cancel", (req, res) => res.redirect("/cancel.html"));
// router.get('/', [], getProductsAll);
// router.get('/:category_id', getProductsByCategoryId);
router.get('/categories-all', getCategoriesAll);
router.get('/products-by-category/:category_id', getProductsByCategoryId);
router.get('/models-by-product/:product_id', getModelsByProductId);
router.get('/model-by-id/:id', getModelById);
router.get('/order-by-id/:id', getOrderById);
// router.get('qwe/:category_id', [], getProductsByCategoryId);

router.post("/orders", createOrder);

// router.post("/create-checkout-session", createSession);

export default router;