import { createContext, useState, ReactNode } from "react"
import { Product } from "../types/Product"

export interface CartItem {
    product: Product
    quantity: number
}

interface CartContextType {
    cart: CartItem[]
    addToCart: (product: Product) => void
    increase: (productId: string) => void
    decrease: (productId: string) => void
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    increase: () => {},
    decrease: () => {}
})

interface Props {
    children: ReactNode
}

export function CartProvider({ children }: Props) {

    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {

        setCart(prev => {

            const existing = prev.find(
                item => item.product.id === product.id
            )

            if (existing) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...prev, { product, quantity: 1 }]
        })
    }

    const increase = (productId: string) => {

        setCart(prev =>
            prev.map(item =>
                item.product.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }

    const decrease = (productId: string) => {

        setCart(prev =>
            prev
                .map(item =>
                    item.product.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        )
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, increase, decrease }}
        >
            {children}
        </CartContext.Provider>
    )
}