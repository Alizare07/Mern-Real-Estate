import express from 'express'
import { verfiyToken } from '../utils/verfiyUser.js'
import { createListing } from '../controllers/list-controller.js'

const router  = express.Router()


router.post('/create', verfiyToken, createListing)

export default router