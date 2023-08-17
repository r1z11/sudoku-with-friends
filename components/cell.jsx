import { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Cell({ number, backgroundColor, index }) {

    const [selected, setSelected] = useState(false)
    const [bgColor, setBgColor] = useState(backgroundColor)

    const select = () => {
        // highlight cell
        setSelected(!selected)
        selected ? setBgColor("#ccc") : setBgColor("#fff");
    }

    const isCornerCell = () => {
        if (index) {
            const indexStr = JSON.stringify(index)

            switch (indexStr) {
                case '[0,0]':
                    return true;
                case '[0,8]':
                    return true;
                case '[8,0]':
                    return true;
                case '[8,8]':
                    return true;
                default: return false;
            }
        }
    }

    const isTopLeft = () => {
        if (index) {
            const indexStr = JSON.stringify(index)
            if (indexStr == '[0,0]') return true;
            else return false;
        }
    }

    const isTopRight = () => {
        if (index) {
            const indexStr = JSON.stringify(index)
            if (indexStr == '[0,8]') return true;
            else return false;
        }
    }

    const isBottomLeft = () => {
        if (index) {
            const indexStr = JSON.stringify(index)
            if (indexStr == '[8,0]') return true;
            else return false;
        }
    }

    const isBottomRight = () => {
        if (index) {
            const indexStr = JSON.stringify(index)
            if (indexStr == '[8,8]') return true;
            else return false;
        }
    }

    // Round the corner if it's a corner cell
    const setBorderRadius = () => {
        if (isCornerCell()) {
            if (isTopLeft()) {
                return { borderTopLeftRadius: 7 }
            }
            if (isTopRight()) {
                return { borderTopRightRadius: 7 }
            }
            if (isBottomLeft()) {
                return { borderBottomLeftRadius: 7 }
            }
            if (isBottomRight()) {
                return { borderBottomRightRadius: 7 }
            }
        } else
        return {};
    }

    // Make cell darker if it's part of the dark zones
    const isDarker = () => {
        if (index) {
            const indexStr = JSON.stringify(index)

            if (index[0] == 3 || index[0] == 4 || index[0] == 5 || index[1] == 3 || index[1] == 4 || index[1] == 5) {
                setBgColor("#eee")
            }
            if (index[0] == index[1] || indexStr == '[3,4]' || indexStr == '[3,5]' || indexStr == '[4,3]' || indexStr == '[4,5]' || indexStr == '[5,3]' || indexStr == '[5,4]') {
                setBgColor("#fff")
            }
        }
    }

    useEffect(() => {
        isDarker();
    }, []);

    return (
        <Pressable style={{ ...styles.container, backgroundColor: bgColor, ...setBorderRadius() }} onPress={() => select()}>
            {number == 0 ? null : <Text style={styles.number}>{number}</Text>}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS == 'web' ? 35 : ((windowWidth - 40) * .11),
        height: Platform.OS == 'web' ? 35 : ((windowHeight / 2) * .11),
        borderColor: '#aaa',
        borderWidth: 0.5,
    },
    number: {
        fontFamily: 'Inter-Tight-Regular',
        fontSize: 19
    }
});