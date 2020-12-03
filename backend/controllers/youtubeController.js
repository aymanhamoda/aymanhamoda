import asyncHandler from 'express-async-handler'
import Youtube from '../models/youtubeModel.js'

// @desc    Fetch all teamwork
// @route   GET /api/teamwork
// @access  Public
const getYoutubes = asyncHandler(async (req, res) => {
  const youtubes = await Youtube.find({})
  res.json({ youtubes })
})

// @desc    Fetch single teamwork
// @route   GET /api/teamworks/:id
// @access  Public
const getYoutubeById = asyncHandler(async (req, res) => {
  const youtube = await Youtube.findById(req.params.id)

  if (youtube) {
    res.json(youtube)
  } else {
    res.status(404)
    throw new Error('Youtube not found')
  }
})

export { getYoutubes, getYoutubeById }
