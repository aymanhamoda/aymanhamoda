import {
  PROMOTION_LIST_REQUEST,
  PROMOTION_LIST_SUCCESS,
  PROMOTION_LIST_FAIL,
  PROMOTION_URL_EXTRACTOR,
} from '../constants/promotionConstants'

export const promotionListReducer = (state = { promotions: [] }, action) => {
  switch (action.type) {
    case PROMOTION_LIST_REQUEST:
      return { loading: true, promotions: [] }
    case PROMOTION_LIST_SUCCESS:
      return {
        loading: false,
        promotions: action.payload.promotions,
      }
    case PROMOTION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
