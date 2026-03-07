import { Response } from "express"
import { readJSON, writeJSON } from "../utilites/fileStorage"
import { User } from "../models/User"
import { AuthRequest } from "../types/AuthRequest"
import { CartItem } from "../models/CartItem"

const USERS_PATH = "src/data/users.json"

export const addToCart = (req: AuthRequest, res: Response) => {

    const user = req.user

    if (!user) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const { productId, quantity } = req.body as CartItem

    const users = readJSON<User[]>(USERS_PATH)

    const dbUser = users.find(u => u.id === user.id)

    if (!dbUser) {
        return res.status(404).json({ message: "User not found" })
    }

    dbUser.cart.push({
        productId,
        quantity
    })

    writeJSON<User[]>(USERS_PATH, users)

    res.json({
        message: "Product added to cart",
        cart: dbUser.cart
    })
}