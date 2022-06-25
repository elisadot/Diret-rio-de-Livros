import mongoose from 'mongoose'
import config from '../config/index.js'

mongoose.connect(config)

import Book from '../models/books-models.js'

class BookService {
    
}

export default BookService