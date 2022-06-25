import express from 'express'

const router = express.Router()

import BookController from '../controllers/books-controller.js'

const bookController = new BookController()

router.delete('/', (req, res) => {
    res.send('Hello Elisa')
})

router.patch('/', (req, res) => {
    res.send('Hello Elisa')
})

router.put('/', (req, res) => {
    res.send('Hello Elisa')
})

router.post('/', (req, res) => {
    bookController.registerBook(req)
    .then(book => res.status(200).send(book))
})

router.get('/', (req, res) => {
    bookController.searchBooks()
    .then(book => res.status(200).send(book))
})


export default router