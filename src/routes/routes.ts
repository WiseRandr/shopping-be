import { Application } from "express"
import { ProductsRoutes } from "./products/products.routes"

export async function v1Routes(app: Application) {
  app.use("/shopping/v1/", ProductsRoutes);
}
