// Determine if a cell should be dark or light
export function themeCell(index) {
    // console.log('theme cell', index);

    const darkArray = [
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2],
        [0, 6], [0, 7], [0, 8],
        [1, 6], [1, 7], [1, 8],
        [2, 6], [2, 7], [2, 8],
        [3, 3], [3, 4], [3, 5],
        [4, 3], [4, 4], [4, 5],
        [5, 3], [5, 4], [5, 5],
        [6, 0], [6, 1], [6, 2],
        [7, 0], [7, 1], [7, 2],
        [8, 0], [8, 1], [8, 2],
        [6, 6], [6, 7], [6, 8],
        [7, 6], [7, 7], [7, 8],
        [8, 6], [8, 7], [8, 8],
    ]

    if (findArray(darkArray, index)) {
        return true;
    }
    return false;
}

function checkGrid(array) {
    let i = [0,1,2,3,4,5,6,7,8]
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

    return `${hours}:${minutes}:${remainingSeconds}`;
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