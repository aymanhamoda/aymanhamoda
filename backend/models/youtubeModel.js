import mongoose from 'mongoose'

const youtubeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Youtube = mongoose.model('Youtube', youtubeSchema)

export default Youtube
