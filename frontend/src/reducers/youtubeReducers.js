import {
  YOUTUBE_LIST_REQUEST,
  YOUTUBE_LIST_SUCCESS,
  YOUTUBE_LIST_FAIL,
  YOUTUBE_URL_EXTRACTOR,
} from '../constants/youtubeConstants'

export const youtubeListReducer = (state = { youtubes: [] }, action) => {
  switch (action.type) {
    case YOUTUBE_LIST_REQUEST:
      return { loading: true, youtubes: [] }
    case YOUTUBE_LIST_SUCCESS:
      return {
        loading: false,
        youtubes: action.payload.youtubes,
      }
    case YOUTUBE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
