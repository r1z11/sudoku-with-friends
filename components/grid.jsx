import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { arraysAreEqual, themeCell } from '../utils/helpers';
import { selectCell } from '../store/puzzle/puzzleSlice';

function SudokuGrid({ puzzle }) {

    const cellSelected = useSelector(state => state.puzzle.cellSelected);
    const dispatch = useDispatch();

    useEffect(() => {
        // update cell
    }, [cellSelected]);

    const renderRow = (row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
                <Pressable
                    key={colIndex}
                    style={[
                        styles.cell,
                        (arraysAreEqual(cellSelected, [rowIndex, colIndex]) ?
                            styles.selectedCellBg : (themeCell([rowIndex, colIndex]) ?
                                styles.darkBg : null))]}
                    onPress={() => { dispatch(selectCell([rowIndex, colIndex])) }}
                >
                    <Text style={styles.cellText}>{cell === 0 ? '' : cell}</Text>
                </Pressable>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            {puzzle.map((row, rowIndex) => renderRow(row, rowIndex))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellText: {
        fontSize: 20,
    },
    darkBg: {
        backgroundColor: '#CCC'
    },
    selectedCellBg: {
        backgroundColor: '#AAA'
    }
});

export default SudokuGrid;
