import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { themeCell } from '../utils/helpers';
import { selectCell } from '../store/puzzle/puzzleSlice';
import { colours } from '../utils/constants';

function SudokuGrid({ puzzle }) {

    const cellSelected = useSelector(state => state.puzzle.cellSelected);

    const dispatch = useDispatch();

    // Render a single cell
    const renderCell = (object, index) => (
        <Pressable
            key={index}
            style={[styles.cell, cellSelected == object.index ? styles.selectedCellBg : (themeCell(object.index) ? styles.darkBg : null)]}
            onPress={() => dispatch(selectCell(object.index))}
        >
            <Text style={[styles.cellText, {color: object.textColour}]}>{object.value == 0 ? '' : object.value}</Text>
        </Pressable>
    );

    // Render a row of cells
    const renderRow = (i) => (
        <View key={i} style={styles.row}>
            {puzzle.slice(i, i + 9).map(renderCell)}
        </View>
    );

    return (
        <View style={styles.container}>
            {Array.from({ length: 9 }, (_, index) => index * 9).map(renderRow)}
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
        backgroundColor: colours.gray
    },
    selectedCellBg: {
        backgroundColor: colours.darkGray
    }
});

export default SudokuGrid;
