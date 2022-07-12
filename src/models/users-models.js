import mongoose from 'mongoose'
import bcrypt from "bcrypt"

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        required: true,
        trim: true,
        type: String
    },
    username: {
        required: true,
        index: {
            unique: true
        },
        type: String
    },
    password: {
        type: String,
        required: true
    }
})

schema.pre('save', function (next) {

    var user = this

    // if (!user.isModified('password'))
    //     return next()

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err)
            user.password = hash
            next()
        })
    })

})

export default mongoose.model('User', schema)