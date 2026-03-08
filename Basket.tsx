import { useContext } from "react"
import { CartContext } from "../store/CartContext"

export default function Basket() {

    const { cart, increase, decrease } = useContext(CartContext)

    const total = cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    )

    return (

        <div className="basket">

            <h3>Корзина</h3>

            {cart.length === 0 && (
                <p>Корзина пуста</p>
            )}

            {cart.map(item => (

                <div key={item.product.id}>

                    <span data-title="basket">
                        {item.product.name}
                    </span>

                    <span data-price="basket">
                        ${item.product.price}
                    </span>

                    <div>

                        <button onClick={() =>
                            decrease(item.product.id)
                        }>
                            -
                        </button>

                        <span>
                            {item.quantity}
                        </span>

                        <button onClick={() =>
                            increase(item.product.id)
                        }>
                            +
                        </button>

                    </div>

                </div>

            ))}

            {cart.length > 0 && (
                <h4>
                    Всего: ${total}
                </h4>
            )}

        </div>
    )
}
