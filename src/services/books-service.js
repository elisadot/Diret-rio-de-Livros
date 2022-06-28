import mongoose from 'mongoose'
import config from '../config/index.js'

mongoose.connect(config)

import Book from '../models/books-models.js'

class BookService {
    searchBooks(params) {
        if (params !== undefined && params !== null) {
            return Book.find(params)
        } else {
            return Book.find({})           
        }
    }

    registerBook(req, res) {
        const newBook = new Book(req.body)
        return newBook.save()
    }

    updateBook(req, res) {
        return Book.findByIdAndUpdate({_id: req.params._id}, req.body)
    }

    deleteBook(req, res) {
        return Book.findByIdAndDelete({_id: req.params._id})
    }
}

export default BookService