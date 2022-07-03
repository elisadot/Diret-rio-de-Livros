import express from 'express'

const router = express.Router()

import BookController from '../controllers/books-controller.js'

const bookController = new BookController()

router.delete('/id/:_id', (req, res) => {bookController.deleteBook(req, res)})

router.post('/', (req, res) => {bookController.registerBook(req, res)})

router.put('/id/:_id', (req, res) => {bookController.updateBook(req, res)})

router.get('/id/:_id', (req, res) => {bookController.searchBooks(req.params, res)})

router.get('/', (req, res) => {bookController.searchBooks(req.query, res)})

router.put('*', (req, res) => {(res.status(404).send('Page not found'))})
router.post('*', (req, res) => {(res.status(404).send('Page not found'))})
router.delete('*', (req, res) => {(res.status(404).send('Page not found'))})
router.get('*', (req, res) => {(res.status(404).send('Page not found'))})


export default router