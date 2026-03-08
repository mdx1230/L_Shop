import { useEffect, useState, useContext } from "react"
import { Product } from "../types/Product"
import { getProducts } from "../api/api"
import ProductList from "../components/ProductList"
import Basket from "../components/Basket"
import { CartContext } from "../store/CartContext"

export default function HomePage() {

    const [products, setProducts] = useState<Product[]>([])
    const [search, setSearch] = useState<string>("")
    const [sort, setSort] = useState<string>("")

    const { cart } = useContext(CartContext)

    useEffect(() => {
        loadProducts()
    }, [])

    async function loadProducts(): Promise<void> {

        try {

            const data: Product[] = await getProducts()

            let filtered = data

            
            if (search.trim() !== "") {

                const value = search.toLowerCase()

                filtered = filtered.filter(product =>
                    product.name.toLowerCase().includes(value) ||
                    product.description.toLowerCase().includes(value)
                )
            }

            
            if (sort === "price") {

                filtered = [...filtered].sort(
                    (a, b) => a.price - b.price
                )
            }

            setProducts(filtered)

        } catch (error) {

            console.error("Error loading products:", error)

        }
    }

   
    useEffect(() => {
        loadProducts()
    }, [search, sort])

    return (

        <div className="container">

            <div className="filters">

                <input
                    type="text"
                    placeholder="Поиск..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >

                    <option value="">
                        Нет сортировки
                    </option>

                    <option value="price">
                        Сортировать по цене
                    </option>

                </select>

            </div>

            <ProductList
                products={products}
                onAdd={(id: string) => {
                    console.log("Добавить в корзину:", id)
                }}
            />

            <Basket items={cart} />

        </div>

    )
}