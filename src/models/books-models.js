import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publishingCompany: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Date,
        required: true,
        trim: true,
    },
    isbn: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Book', schema)