import express from 'express'
import { register, login, profile, logout } from '../controller/index.mjs'
import { loginValidation, registerValidation, tokenValidation } from '../utils/validation.mjs'

const router = express.Router()

router.post('/register', registerValidation, register)
router.post('/login', loginValidation, login)
router.get('/logout', logout)

//Secure Route
router.use('/profile', tokenValidation, profile)


export default router
