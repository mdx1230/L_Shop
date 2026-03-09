import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./routes/authRoutes"
import productRoutes from "./routes/productRoutes"
import cartRoutes from "./routes/cartRoutes"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",credentials:true
}))
app.use("/auth", authRoutes)
app.use("/products", productRoutes)
app.use("/cart", cartRoutes)

export default app