import express from 'express'
import jwt from "jsonwebtoken"

const router = express.Router()

import BookController from '../controllers/books-controller.js'

const bookController = new BookController()

router.delete('/id/:_id', (req, res) => {bookController.deleteBook(req, res)})

router.post('/', (req, res) => {bookController.registerBook(req, res)})

router.put('/id/:_id', (req, res) => {bookController.updateBook(req, res)})

router.get('/id/:_id', (req, res) => {bookController.searchBooks(req.params, res)})

router.get('/', verifyJWT, (req, res) => {bookController.searchBooks(req.query, res)})

router.put('*', (req, res) => {(res.status(404).send('Page not found'))})
router.post('*', (req, res) => {(res.status(404).send('Page not found'))})
router.delete('*', (req, res) => {(res.status(404).send('Page not found'))})
router.get('*', (req, res) => {(res.status(404).send('Page not found'))})

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token']

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) {
        return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded
      }
      
      req.userId = decoded.id;
      next();
    });
}

export default router