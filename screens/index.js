import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

import Numpad from '../components/numpad';
import SudokuGrid from '../components/grid';
import { generatePuzzle } from '../utils/generator';
import { formatTime, level } from '../utils/helpers';
import { setDifficulty, setPuzzle } from '../store/puzzle/puzzleSlice';
import { colours, levels } from '../utils/constants';

export default function Game() {

    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const puzzle = useSelector(state => state.puzzle.puzzle);
    const difficulty = useSelector(state => state.puzzle.difficulty);

    const [gameLevel, setGameLevel] = useState(level(difficulty));

    const dispatch = useDispatch();

    // Update the level label when difficulty changes
    useEffect(() => {
        setGameLevel(level(difficulty));
    }, [difficulty]);

    // Generate puzzle and start timer
    useEffect(() => {
        dispatch(setPuzzle(generatePuzzle(difficulty)));
        toggleTimer();
    }, []);

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
        setIsRunning(true);
    };

    const handleDifficulty = (level) => {
        dispatch(setDifficulty(level))
        dispatch(setPuzzle(generatePuzzle(level)));
        resetTimer();
        setModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false} horizontal={false}>

                <View style={styles.header}>
                    <Text style={styles.timer}>{formatTime(seconds)}</Text>
                    <TouchableOpacity onPress={() => resetTimer}>
                        <Ionicons style={styles.refreshBtn} name='refresh-outline' size={32} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => setModalVisible(true)}><Text style={styles.difficulty}>{gameLevel}</Text></TouchableOpacity>

                <SudokuGrid puzzle={puzzle} />

                <Numpad />

            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => handleDifficulty(levels.easy)}>
                            <Text style={styles.modalText}>Easy</Text>
                        </TouchableOpacity>
                        <View style={styles.line}></View>
                        <TouchableOpacity onPress={() => handleDifficulty(levels.medium)}>
                            <Text style={styles.modalText}>Medium</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDifficulty(levels.hard)}>
                            <Text style={styles.modalText}>Hard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDifficulty(levels.expert)}>
                            <Text style={styles.modalText}>Expert</Text>
                        </TouchableOpacity>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: 'white',
    },
    contentContainer: {
        paddingVertical: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timer: {
        color: colours.dark,
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
        color: colours.darkGray
    },
    modalView: {
        alignSelf: 'center',
        width: '30%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 7,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 2,
        marginTop: 30
    },
    buttonOpen: {
        backgroundColor: colours.blue,
    },
    buttonClose: {
        backgroundColor: colours.dark,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Inter-Tight-Regular',
        fontSize: 19
    },
    modalText: {
        marginTop: 15,
        textAlign: 'center',
        fontFamily: 'Inter-Tight-Regular',
        fontSize: 19
    },
    line: {
        borderColor: colours.darkGray,
        borderWidth: 1
    }
});