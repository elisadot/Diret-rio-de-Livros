import UserService from '../services/users-service.js'

class UserController {
    registerUser(req, res) {
        const userService = new UserService()
        return userService.registerUser(req, res)
    }

    loginUser(req, res) {
        const userService = new UserService()
        return userService.loginUser(req, res)
    }
}

export default UserController