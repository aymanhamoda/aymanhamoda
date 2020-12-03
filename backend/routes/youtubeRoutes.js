import express from 'express'
const router = express.Router()
import {
  getYoutubes,
  getYoutubeById,
} from '../controllers/youtubeController.js'

router.route('/').get(getYoutubes)
router.route('/:id').get(getYoutubeById)

export default router
