import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

import Numpad from '../components/numpad';
import SudokuGrid from '../components/grid';
import { generatePuzzle } from '../utils/generator';
import { formatTime } from '../utils/helpers';
import { setPuzzle } from '../store/puzzle/puzzleSlice';

export default function Game() {

    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

    const puzzle = useSelector(state => state.puzzle.puzzle);

    const dispatch = useDispatch();

    // Generate puzzle and start timer
    useEffect(() => {
        dispatch(setPuzzle(generatePuzzle(30)));
        toggleTimer();
    }, []);

    useEffect(() => {
        // update puzzle
    }, [puzzle]);

    // Timer
    useEffect(() => {

        let timerInterval;

        if (isRunning) {
            timerInterval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(timerInterval);
        }

        return () => clearInterval(timerInterval);
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setSeconds(0);
        setIsRunning(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false} horizontal={false}>

                <View style={styles.header}>
                    <Text style={styles.timer}>{formatTime(seconds)}</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Ionicons style={styles.refreshBtn} name='refresh-outline' size={32} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.difficulty}>Advanced</Text>

                <SudokuGrid puzzle={puzzle} />

                <Numpad />

            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingVertical: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timer: {
        color: '#333',
        fontSize: 27,
        fontWeight: 'bold',
        fontFamily: 'Inter-Tight-Bold'
    },
    refreshBtn: {},
    difficulty: {
        fontFamily: 'Inter-Tight-Regular',
        marginTop: 10,
        marginBottom: 20,
        fontSize: 21,
        color: '#aaa'
    }
});