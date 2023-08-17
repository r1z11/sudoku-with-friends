import { StyleSheet, View } from 'react-native';
import Cell from './cell';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function Board() {

    const puzzle = useSelector((state) => state.puzzle.puzzle);
    const [rows, setRows] = useState([]);

    let _rows = []

    const generateGrid = (arr) => {
        console.log('generating grid')
        console.log('array outside loop', arr[0])
        if (arr.length > 0) {
            console.log('array in loop', arr[0])
            for (let i = 0; i < 9; i++) {
                let row = [];
                for (let j = 0; j < 9; j++) {
                    let num = arr[i][j]
                    row.push(<Cell key={i.toString() + j.toString()} number={num} backgroundColor={"#fff"} index={[i, j]} />);
                }
                _rows.push(row);
            }
        }
        setRows(_rows);
        console.log('rows', rows[0])
    }
    // generateGrid(puzzleArray);

    useEffect(() => {
        console.log('puzzle array before generate grid', puzzle[0])
        generateGrid(puzzle);
    }, [puzzle])

    // Do something when a cell is selected
    const selectCells = () => {}

    return (
        <View style={styles.container}>
            {rows.map((row, i) => (
                <View key={'row_' + i.toString()} style={styles.row}>{row}</View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 10,
    },
    row: {
        flexDirection: 'row'
    }
});