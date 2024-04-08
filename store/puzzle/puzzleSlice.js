import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  puzzle: [],
  cellSelected: null,
  difficulty: 31
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
      const index = action.payload.index;
      const puzzle = action.payload.puzzle;

      if (puzzle[index].edit)
        state.puzzle[index].value = number;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },
  }
});

export const {
  setPuzzle,
  selectCell,
  updateCell,
  setDifficulty
} = puzzleSlice.actions;

export default puzzleSlice.reducer;
