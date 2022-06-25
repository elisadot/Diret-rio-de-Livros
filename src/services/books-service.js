import mongoose from 'mongoose'
import config from '../config/index.js'

mongoose.connect(config)

import Book from '../models/books-models.js'

class BookService {
    searchBooks() {
        return Book.find()
    }

    async registerBook(req, res) {
        const newBook = new Book(req.body)
        return newBook.save()
    }
}

export default BookService