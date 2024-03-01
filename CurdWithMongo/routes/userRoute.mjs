import express from 'express';
import { createUser, deleteUser, updateUser, getUsers, getUser } from '../controller/userController.mjs'
const router = express.Router();


router.get('/get-users', getUsers)
router.get('/get-user/:id', getUser)
router.post('/create', createUser)
router.delete('/delete/:id', deleteUser)
router.put('/update/:id', updateUser)

export default router;  