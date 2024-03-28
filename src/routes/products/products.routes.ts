import { Router } from "express";
import { API } from "context/api";
import { getProducts } from "controller/index";

const router = Router();

router.get("/products", async (_, res) => {
  const products = await getProducts();
  
  res.json(API.success(products))
});

export const ProductsRoutes = router;
