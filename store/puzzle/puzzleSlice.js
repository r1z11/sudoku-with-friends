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
      const cell = action.payload.cell;
      const puzzle = action.payload.puzzle;

      if (puzzle[cell[0]][cell[1]] == 0) {
        for (let i = 0; i < puzzle.length; i++) {
          for (let j = 0; j < puzzle[i].length; j++) {
            console.log(cell, [i, j])
            if (cell[0] == i && cell[1] == j) {
              state.puzzle[i][j] = number;
            }
          }
        }
      }
    },
  }
});

export const {
  setPuzzle,
  selectCell,
  updateCell
} = puzzleSlice.actions;

export default puzzleSlice.reducer;
