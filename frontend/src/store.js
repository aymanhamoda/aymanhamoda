import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { youtubeListReducer } from './reducers/youtubeReducers'
import { promotionListReducer } from './reducers/promotionReducers'
import { courseListReducer } from './reducers/courseReducers'

const reducer = combineReducers({
  youtubeList: youtubeListReducer,
  promotionList: promotionListReducer,
  courseList: courseListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
