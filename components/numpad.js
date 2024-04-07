import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Numpad() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Pressable onPress={() => { }}><Text style={styles.number}>1</Text></Pressable>
                <Text style={styles.number}>2</Text>
                <Text style={styles.number}>3</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.number}>4</Text>
                <Text style={styles.number}>5</Text>
                <Text style={styles.number}>6</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.number}>7</Text>
                <Text style={styles.number}>8</Text>
                <Text style={styles.number}>9</Text>
            </View>
            <Ionicons style={styles.btn} name='backspace-outline' size={32} />
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