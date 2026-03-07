import { Request, Response } from "express"
import { readJSON } from "../utilites/fileStorage"
import { Product } from "../models/Product"

const PRODUCTS_PATH = "src/data/products.json"

export const getProducts = (req: Request, res: Response) => {

    let products = readJSON<Product[]>(PRODUCTS_PATH)

    const { search, sort, category, available } = req.query

    if (search) {

        const searchValue = (search as string).toLowerCase()

        products = products.filter(product =>
            product.name.toLowerCase().includes(searchValue) ||
            product.description.toLowerCase().includes(searchValue)
        )
    }

    if (category) {

        products = products.filter(
            product => product.category === category
        )
    }

    if (available) {

        products = products.filter(
            product => product.available === true
        )
    }

    if (sort === "price") {

        products.sort((a, b) => a.price - b.price)

    }

    res.json(products)
}