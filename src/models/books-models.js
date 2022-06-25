import mongoose from 'mongoose'

const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Book', schema)