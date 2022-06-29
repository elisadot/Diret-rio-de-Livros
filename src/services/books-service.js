import mongoose from 'mongoose'
import config from '../config/index.js'

mongoose.connect(config)

import Book from '../models/books-models.js'

class BookService {
    async searchBooks(params, res) {
        if (params !== undefined && params !== null && Object.values(params).length !== 0) {
            Book.find(params).exec(function (err, response) {
                if (err) {
                    return res.status(400).send({message: `ID it's out of the norm`});
                } 
                else if (Object.values(response).length == 0) {
                    return res.status(404).send({message: `ID not found in database`});
                } 
                else {
                    return res.status(200).json(response)
                }
            })
        } else {
            const response = await Book.find({})
            return res.status(200).json(response)
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