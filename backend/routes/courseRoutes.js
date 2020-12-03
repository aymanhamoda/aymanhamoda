import express from 'express'
const router = express.Router()
import { getCourses } from '../controllers/courseController.js'

router.route('/').get(getCourses)

export default router
