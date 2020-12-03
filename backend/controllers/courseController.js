import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'

// @desc    Fetch all teamwork
// @route   GET /api/teamwork
// @access  Public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({})
  res.json({ courses })
})
export { getCourses }
