import { combineReducers } from 'redux'

import puzzleReducer from './puzzle/puzzleSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `puzzle`, handled by `puzzleReducer`
  puzzle: puzzleReducer,
})

export default rootReducer