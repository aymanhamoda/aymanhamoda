import axios from 'axios'
import {
  YOUTUBE_LIST_REQUEST,
  YOUTUBE_LIST_SUCCESS,
  YOUTUBE_LIST_FAIL,
  YOUTUBE_URL_EXTRACTOR,
} from '../constants/youtubeConstants'

export const listYoutubes = () => async (dispatch) => {
  try {
    dispatch({ type: YOUTUBE_LIST_REQUEST })

    const { data } = await axios.get('/api/youtubes')

    dispatch({
      type: YOUTUBE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: YOUTUBE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
