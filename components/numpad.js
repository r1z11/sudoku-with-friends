import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { updateCell } from '../store/puzzle/puzzleSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Numpad() {

    const dispatch = useDispatch();

    const cellSelected = useSelector(state => state.puzzle.cellSelected)

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => dispatch(updateCell({ number: 1, index: cellSelected }))}><Text style={styles.number}>1</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(updateCell({ number: 2, index: cellSelected }))}><Text style={styles.number}>2</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(updateCell({ number: 3, index: cellSelected }))}><Text style={styles.number}>3</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => dispatch(updateCell({ number: 4, index: cellSelected }))}><Text style={styles.number}>4</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(updateCell({ number: 5, index: cellSelected }))}><Text style={styles.number}>5</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(updateCell({ number: 6, index: cellSelected }))}><Text style={styles.number}>6</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => dispatch(updateCell({ number: 7, index: cellSelected }))}><Text style={styles.number}>7</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(updateCell({ number: 8, index: cellSelected }))}><Text style={styles.number}>8</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(updateCell({ number: 9, index: cellSelected }))}><Text style={styles.number}>9</Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => dispatch(updateCell({ number: 0, index: cellSelected }))}><Ionicons style={styles.btn} name='backspace-outline' size={32} /></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'column',
        paddingHorizontal: 20
    },
    number: {
        fontFamily: 'Inter-Tight-Regular',
        fontSize: 27,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn: {
        alignSelf: 'center',
        marginTop: 20
    }
});