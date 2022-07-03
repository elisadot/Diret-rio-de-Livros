import { response } from 'express'
import mongoose from 'mongoose'
import config from '../config/index.js'
import Book from '../models/books-models.js'

mongoose.connect(config)


class BookService {
    async searchBooks(params, res) {
        if (params !== undefined && params !== null && Object.values(params).length !== 0) {
            Book.find(params).exec(function (err, response) {
                if (err) {
                    return res.status(400).send({message: `ID it's out of the norm`})
                } 
                else if (Object.values(response).length == 0) {
                    return res.status(404).send({message: `ID not found in database`})
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

    async registerBook(req, res) {
        const newBook = new Book(req.body)
        let error = false

        await newBook.save().catch(err => {
            error = true
            return res.status(400).send({message: err})
        })
        if (!error) {
            return res.status(200).json(newBook)               
        } 
    }

    async updateBook(req, res) {
        const body = req.body
        const params = req.params._id

        Book.findByIdAndUpdate({_id: params}, body).exec(function (err, response) {
            if (err) {
                return res.status(400).send({message: err})
            } else {
                return res.status(200).json(response)
            }
        })
    }

    async deleteBook(req, res) {
        return Book.findByIdAndDelete({_id: req.params._id}).exec(function (err, response) {
            if (err) {
                return res.status(400).send({message: `ID it's out of the norm`})
            } else if (response == null) {
                return res.status(404).send({message: `ID not found`})
            } else {
                return res.status(200).json(response)
            }
        })
    }
}

export default BookService