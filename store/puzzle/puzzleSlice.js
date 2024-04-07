import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  puzzle: [],
  cellSelected: []
};

const puzzleSlice = createSlice({
  name: "puzzle",
  initialState,
  reducers: {
    setPuzzle(state, action) {
      state.puzzle = action.payload;
    },
    selectCell(state, action) {
      state.cellSelected = action.payload;
    },
    updateCell(state, action) {
      const number = action.payload.number;
      const cell = action.payload.number;
      state.puzzle[cell] = number;
    },
  }
});

export const {
  setPuzzle,
  selectCell,
  updateCell
} = puzzleSlice.actions;

export default puzzleSlice.reducer;
