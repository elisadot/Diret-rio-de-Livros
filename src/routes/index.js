import express from "express"
import RouterBooks from "./books-routes.js"

const router = express.Router()

router.use('/books', RouterBooks)

export default router