import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  originalPuzzle: [],
  puzzle: [],
  solvedPuzzle: [],
  cellSelected: null,
  otherCellsSelected: [],
  difficulty: 31,
  solved: false,
  countDown: 0
};

const puzzleSlice = createSlice({
  name: "puzzle",
  initialState,
  reducers: {
    setPuzzle(state, action) {
      state.originalPuzzle = action.payload.puzzle;
      state.puzzle = action.payload.puzzle;
      state.solvedPuzzle = action.payload.solvedPuzzle;
      state.solved = false;

      // Update the number of empty cells
      for (let cell of state.puzzle) {
        if (cell.value == 0)
          state.countDown = state.countDown + 1;
      }
    },
    selectCell(state, action) {
      state.cellSelected = action.payload.cell.index;
      state.otherCellsSelected = [];

      // Update array of other cells with the same value as selected cell
      for (let cell of action.payload.puzzle) {
        if (cell.value == action.payload.cell.value)
          state.otherCellsSelected.push(cell.index)
      }
    },
    updateCell(state, action) {
      const number = action.payload.number;
      const index = action.payload.index;
      const puzzle = state.puzzle;

      // Update the cell if it can be edited
      if (puzzle[index].edit) {
        state.puzzle[index].value = number;

        // If the value entered is not zero, deduct 1 from countdown
        if (number > 0) {
          state.countDown = state.countDown - 1;
        }
      }
      let solvedPuzzle = state.solvedPuzzle;

      // Check if all the cells have been filled
      if (state.countDown < 1) {

        // Check if the puzzle is solved
        let solved = true;

        for (let cell of puzzle) {
          let index = cell.index;
          let value = solvedPuzzle[index].value;

          if (cell.value != value) {
            solved = false;
            break;
          }
        }
        state.solved = solved;
      }
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
