import mongoose from 'mongoose'

const promotionSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Promotion = mongoose.model('Promotion', promotionSchema)

export default Promotion
