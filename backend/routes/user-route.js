import express from 'express'
import { updateUser, deleteUser, getUserListings } from '../controllers/user-controller.js';
import { verfiyToken } from '../utils/verfiyUser.js';


const router = express.Router()


router.post("/update/:id", verfiyToken, updateUser)
router.delete("/delete/:id", verfiyToken, deleteUser)
router.get("/listings/:id", verfiyToken, getUserListings)

export default router;