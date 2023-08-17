import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Board from '../components/board';
import { makePuzzle, pluck } from '../utils/puzzleGenerator';
import Numpad from '../components/numpad';
import { useSelector, useDispatch } from 'react-redux';
import { setPuzzle } from '../store/puzzle/puzzleSlice';

export default function Game() {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const puzzle = useSelector((state) => state.puzzle.puzzle)
    const dispatch = useDispatch()

    useEffect(() => {
        // Generate solved puzzle
        const puzzleArray = makePuzzle();
        // Remove 30 cells from the puzzle
        const newPuzzle = pluck(puzzleArray, 30);
        console.log('new puzzle', newPuzzle[0])
        let arr = []
        newPuzzle?.puzzle?.map(num => {
            arr.push(num)
        })
        console.log('new array before set', arr[0])
        dispatch(setPuzzle(arr))
        console.log('new array after set', puzzle[0])
    }, []);

    useEffect(() => {
        const timer = () => {
            setSeconds(seconds + 1);
            if (seconds > 0) {
                if (seconds % 60 == 0) {
                    setMinutes(minutes + 1);
                    if (seconds == 60) setSeconds(1)
                }
                if (minutes > 0) {
                    if (minutes % 60 == 0) {
                        setHours(hours + 1);
                        if (minutes == 60) setMinutes(1)
                    }
                }
            }
        };
        const interval = setInterval(() => timer(), 1000)
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false} horizontal={false}>

                <View style={styles.header}>
                    <Text style={styles.timer}>{hours < 1 ? null : hours + ':'} {minutes > 9 ? minutes : '0' + minutes} : { seconds > 9 ? seconds : '0' + seconds}</Text>
                    <Pressable onPress={() => { }}>
                        <Ionicons style={styles.refreshBtn} name='refresh-outline' size={32} />
                    </Pressable>
                </View>

                <Text style={styles.difficulty}>Advanced</Text>

                <Board />

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
        paddingHorizontal: 20,
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
        fontSize: 21,
        color: '#aaa'
    }
});