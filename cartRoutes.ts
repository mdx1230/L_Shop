import { Router } from "express"
import { addToCart } from "../controllers/cartController"
import { authMiddleware } from "../middleware/authMiddleware"

const router = Router()

router.post("/add", authMiddleware, addToCart)

export default router