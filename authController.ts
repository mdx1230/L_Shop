import { Request, Response } from "express"
import { v4 as uuid } from "uuid"
import { readJSON, writeJSON } from "../utilites/fileStorage"
import {User} from "../models/User"
const USERS_PATH = "src/data/users.json"

export const register = (req: Request, res: Response) => {

    const { name, email, login, phone, password } = req.body

    const users = readJSON<User[]>(USERS_PATH)

    const user:User = {
        id: uuid(),
        name,
        email,
        login,
        phone,
        password,
        cart: []
    }

    users.push(user)

    writeJSON<User[]>(USERS_PATH, users)

    res.cookie("auth", user.id, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000
    })

    res.json({
        message: "Пользователь зарегистрирован",
        user
    })
}
export const login = (req: Request, res: Response) => {

    const { login, password } = req.body

    const users = readJSON<User[]>(USERS_PATH)

    const user = users.find(
        u=> u.login === login && u.password === password
    )

    if (!user) {
        return res.status(401).json({
            message: "Неверные данные"
        })
    }

    res.cookie("auth", user.id, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000
    })

    res.json({
        message: "Вход успешен",
        user
    })
}