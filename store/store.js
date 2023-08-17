import { configureStore } from '@reduxjs/toolkit'
import puzzleReducer from './puzzle/puzzleSlice'

const store = configureStore({
    reducer: {
      // Define a top-level state field named `puzzle`, handled by `puzzleReducer`
      puzzle: puzzleReducer,
    }
  })

export default store