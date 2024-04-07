import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SudokuGrid({puzzle}) {

    const renderRow = (row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
                <View key={colIndex} style={styles.cell}>
                    <Text style={styles.cellText}>{cell === 0 ? '' : cell}</Text>
                </View>
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
});

export default SudokuGrid;
