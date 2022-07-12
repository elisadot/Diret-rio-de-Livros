import express from "express"
import RouterBooks from "./books-routes.js"
import RouterUsers from "./users-routes.js"

import dotenv from "dotenv/config"
import jwt from "jsonwebtoken"

const router = express.Router()

console.log(process.env.SECRET)

router.use('/books', RouterBooks)
router.use('/users', RouterUsers)

export default router