import express from 'express'
import { verfiyToken } from '../utils/verfiyUser.js'
import { createListing, deleteListing } from '../controllers/list-controller.js'

const router  = express.Router()


router.post('/create', verfiyToken, createListing)
router.delete('/delete/:id', verfiyToken, deleteListing)

export default router