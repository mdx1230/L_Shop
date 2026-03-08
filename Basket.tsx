import { CartItem } from "../types/CartItem"

interface Props {

    items: CartItem[]

}

export default function Basket({ items }: Props) {

    return (

        <div className="basket">

            {items.map(item => (

                <div key={item.productId}>

                    <span data-title="basket">
                        {item.title}
                    </span>

                    <span data-price="basket">
                        {item.price}
                    </span>

                </div>

            ))}

        </div>

    )

}