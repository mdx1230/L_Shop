import AppRouter from "./router/AppRouter"
import { CartProvider } from "./store/CartContext"

export default function App() {

    return (

        <CartProvider>

            <AppRouter />

        </CartProvider>

    )

}