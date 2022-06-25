import express from 'express'

const router = express.Router()

import BookController from '../controllers/books-controller.js'

const bookController = new BookController()

router.get('/', (req, res) => {
    res.send('Hello Elisa')
})

export default router