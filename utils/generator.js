export function generatePuzzle(emptyCells) {
    const grid = Array.from({ length: 9 }, () => Array(9).fill(0));

    // Function to check if a number is valid in a specific cell
    function isValidNumber(row, col, num) {
        // Check the row
        for (let i = 0; i < 9; i++) {
            if (grid[row][i] === num) return false;
        }

        // Check the column
        for (let i = 0; i < 9; i++) {
            if (grid[i][col] === num) return false;
        }

        // Check the 3x3 box
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = boxRow; i < boxRow + 3; i++) {
            for (let j = boxCol; j < boxCol + 3; j++) {
                if (grid[i][j] === num) return false;
            }
        }

        return true;
    }

    // Function to solve the Sudoku using backtracking
    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValidNumber(row, col, num)) {
                            grid[row][col] = num;
                            if (solve()) {
                                return true;
                            }
                            grid[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    // Fill the initial grid with a valid Sudoku
    solve();

    // Remove random numbers to create a puzzle
    for (let i = 0; i < emptyCells; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        grid[row][col] = 0;
    }

    return grid;
}
