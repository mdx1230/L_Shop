import { Product } from "../types/Product"

interface Props {

    product: Product
    onAdd: (id: string) => void

}

export default function ProductCard({ product, onAdd }: Props) {

    return (

        <div className="product-card">

            <h3 data-title>
                {product.name}
            </h3>

            <p>{product.description}</p>

            <span data-price>
                {product.price}
            </span>

            <button onClick={() => onAdd(product.id)}>
                Add to cart
            </button>

        </div>

    )

}