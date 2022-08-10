import mongoose from 'mongoose'
import config from '../config/index.js'
import User from '../models/users-models.js'
import bcrypt from "bcrypt"
import dotenv from "dotenv/config"
import jwt from "jsonwebtoken"

mongoose.connect(config)

class UserService {
    async registerUser(req, res) {
        const newUser = new User(req.body)
        let error = false

        await newUser.save().catch(err => {
            error = true
            return res.status(400).send({message: err})
        })
        if (!error) {
            return res.status(200).json(`${newUser.username} cadastrado com sucesso!`)               
        } 
    }

    async loginUser(req, res) {
        const username = req.body.username
        const password = req.body.password
        const hash = await User.find({username: username})

        if(User.find({username: username}) !== undefined && await bcrypt.compare(password, hash[0].password)){
            const id = hash[0]._id
            const token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300
            })

            return res.json({auth: true, token});
        }
        res.status(500).json({message: 'Login inválido!'});
    }
}

export default UserService