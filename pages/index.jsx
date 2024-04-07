import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Numpad from '../components/numpad';
import { generatePuzzle } from '../utils/generator';
import SudokuGrid from '../components/grid';

export default function Game() {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const puzzle = generatePuzzle(30);

    // Timer
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
                    <Text style={styles.timer}>{hours < 1 ? null : hours + ':'} {minutes > 9 ? minutes : '0' + minutes} : {seconds > 9 ? seconds : '0' + seconds}</Text>
                    <Pressable onPress={() => { }}>
                        <Ionicons style={styles.refreshBtn} name='refresh-outline' size={32} />
                    </Pressable>
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