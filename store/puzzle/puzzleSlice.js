import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  puzzle: [],
};

const puzzleSlice = createSlice({
  name: "puzzle",
  initialState,
  reducers: {
    addCell(state, action) {
      const cell = action.payload;
      state.puzzle.push(cell);
    },
    setPuzzle(state, action) {
      console.log('set puzzle action', action)
      state.puzzle = action.payload;
      console.log('new puzzle in state', state.puzzle[0])
    },
    cellSelected(state, action) {
      const index = action.payload;
      const cell = state.puzzle[(index[0], index[1])];
      cell.selected = !cell.selected;
    },
    updateCell(state, action) {
      const number = action.payload.number;
      const cell = state.puzzle[(index[0], index[1])];
      cell.number = number;
    },
  }
});

export const {
  setPuzzle,
  addCell,
  cellSelected,
  updateCell
} = puzzleSlice.actions;

export default puzzleSlice.reducer;
