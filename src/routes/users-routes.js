import express from 'express'

const router = express.Router()

import UserController from '../controllers/users-controllers.js'

const userController = new UserController()

router.post('/login', (req, res) => {userController.loginUser(req, res)})

router.post('/', (req, res) => {userController.registerUser(req, res)})

export default router
