import axios from 'axios'
import {
  PROMOTION_LIST_REQUEST,
  PROMOTION_LIST_SUCCESS,
  PROMOTION_LIST_FAIL,
} from '../constants/promotionConstants'

export const listPromotions = () => async (dispatch) => {
  try {
    dispatch({ type: PROMOTION_LIST_REQUEST })

    const { data } = await axios.get('/api/promotions')

    dispatch({
      type: PROMOTION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PROMOTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
