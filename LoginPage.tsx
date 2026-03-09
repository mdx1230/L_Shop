import { useState } from "react"
import { register } from "../api/api"

export default function LoginPage() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e: React.FormEvent) {

        e.preventDefault()

        await register({
            name,
            email,
            login,
            phone,
            password
        })

    }

    return (

        <form data-registration onSubmit={handleSubmit}>

            <input
                placeholder="Имя"
                onChange={e => setName(e.target.value)}
            />

            <input
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
            />

            <input
                placeholder="Логин"
                onChange={e => setLogin(e.target.value)}
            />

            <input
                placeholder="Телефон"
                onChange={e => setPhone(e.target.value)}
            />

            <input
                type="password"
                placeholder="Пароль"
                onChange={e => setPassword(e.target.value)}
            />

            <button>
                Зарегистрироваться
            </button>

        </form>

    )

}