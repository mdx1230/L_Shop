import { Product } from "../types/Product"
import { User } from "../types/User"

const API_URL = "http://localhost:3000"

export async function getProducts(): Promise<Product[]> {

    const response = await fetch(`${API_URL}/products`)

    return response.json()

}

export async function register(user: User) {

    const response = await fetch(`${API_URL}/auth/register`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user),
        credentials: "include"

    })

    return response.json()

}

export async function addToCart(productId: string, quantity: number) {

    const response = await fetch(`${API_URL}/cart/add`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        credentials: "include",

        body: JSON.stringify({
            productId,
            quantity
        })

    })

    return response.json()

}