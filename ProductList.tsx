import { Product } from "../types/Product"
import ProductCard from "./ProductCard"

interface Props {

    products: Product[]
    onAdd: (id: string) => void

}

export default function ProductList({ products, onAdd }: Props) {

    return (

        <div className="product-grid">

            {products.map(product => (

                <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                />

            ))}

        </div>

    )

}