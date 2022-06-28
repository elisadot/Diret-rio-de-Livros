import express from 'express'

const router = express.Router()

import BookController from '../controllers/books-controller.js'

const bookController = new BookController()

router.delete('/id/:_id', (req, res) => {
    bookController.deleteBook(req)
    .then(book => res.status(200).send(book))
})

router.put('/id/:_id', (req, res) => {
    bookController.updateBook(req)
    .then(book => res.status(200).send(book))
})

router.post('/', (req, res) => {
    bookController.registerBook(req)
    .then(book => res.status(200).send(book))
})

router.get('/id/:_id', (req, res) => {
    bookController.searchBooks(req.params)
    .then(book => res.status(200).send(book))
})

router.get('/', (req, res) => {
    bookController.searchBooks(req.query)
    .then(book => res.status(200).send(book))
})


export default router