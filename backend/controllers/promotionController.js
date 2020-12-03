import asyncHandler from 'express-async-handler'
import Promotion from '../models/promotionModel.js'

// @desc    Fetch all teamwork
// @route   GET /api/teamwork
// @access  Public
const getPromotions = asyncHandler(async (req, res) => {
  const promotions = await Promotion.find({})
  res.json({ promotions })
})
export { getPromotions }
