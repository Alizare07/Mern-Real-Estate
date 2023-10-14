import express from 'express'
import { verfiyToken } from '../utils/verfiyUser.js'
import { createListing, deleteListing, updateListing, getListing } from '../controllers/list-controller.js'

const router  = express.Router()


router.post('/create', verfiyToken, createListing)
router.delete('/delete/:id', verfiyToken, deleteListing)
router.post('/update/:id', verfiyToken, updateListing)
router.get('/get/:id', getListing);

export default router