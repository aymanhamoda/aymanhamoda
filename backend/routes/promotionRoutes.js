import express from 'express'
const router = express.Router()
import { getPromotions } from '../controllers/promotionController.js'

router.route('/').get(getPromotions)

export default router
