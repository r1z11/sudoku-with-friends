import { colours } from "./constants";

// Determine if a cell should be dark or light
export function themeCell(index) {
    let darkCells = [0, 1, 2, 6, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 24, 25, 26, 30, 31, 32, 39, 40, 41, 48, 49, 50, 54, 55, 56, 60, 61, 62, 63, 64, 65, 69, 70, 71, 72, 73, 74, 78, 79, 80];

    if (darkCells.includes(index))
        return true;
    else
        return false;
}

// Find an array in an array of arrays
function findArray(arrayOfArrays, arrayToFind) {
    const foundArray = arrayOfArrays.find(array => JSON.stringify(array) === JSON.stringify(arrayToFind));

    if (foundArray) {
        return true;
    }
    return false;
}

// Format seconds to hours, minutes and seconds
export const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if(hours == 0)
    return `${minutes < 10 ? '0' + minutes : minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
    if(hours > 0)
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
}

// Check if 2 arrays are equal
export function arraysAreEqual(arr1, arr2) {
    // Check if arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Check if each element in both arrays are equal
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If all elements are equal and the arrays have the same length, they are equal
    return true;
}

// Convert sudoku grid array into an array of cell objects
export function createGrid(puzzle) {
    let grid = []
    let counter = 0

    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[i].length; j++) {
            grid.push({
                index: counter,
                value: puzzle[i][j],
                textColour: puzzle[i][j] == 0 ? '#0778fc' : colours.dark,
                bgColour: colours.light,
                edit: puzzle[i][j] == 0 ? true : false
            });
            counter++;
        }
    }
    return grid;
}

// Game difficulty level
export const level = (difficulty) => {
    switch (difficulty) {
        case 31:
            return 'Easy';
        case 41:
            return 'Medium';
        case 51:
            return 'Hard';
        case 61:
            return 'Expert';
        default:
            return 'Easy';
    }
}