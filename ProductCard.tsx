import { useContext } from "react"
import { CartContext } from "../store/CartContext"
import { Product } from "../types/Product"

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {

    const { addToCart } = useContext(CartContext)

    return (
        <div className="product-card">
            <h3 data-title>{product.name}</h3>
            <p>{product.description}</p>
            <span data-price>${product.price}</span>
            <button onClick={() => addToCart(product)}>
                Добавить в корзину
            </button>
        </div>
    )
}
