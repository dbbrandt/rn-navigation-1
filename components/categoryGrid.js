import {View, Text, StyleSheet, Pressable, useWindowDimensions} from "react-native";

function CategoryGrid({color, title}) {
    const {height, width} = useWindowDimensions();
    const boxMargin = 5;
    const boxSideSize = width / 2 - (boxMargin * 2);

    function handleButtonPress() {
        console.log('Button Pressed');
        return styles.buttonPressed
    }

    return (
        <View style={[styles.gridItem,{backgroundColor: color, width: boxSideSize, height: boxSideSize, margin: boxMargin}]}>
            <Pressable
                android_ripple={{ color: 'grey'}}
                style={({pressed}) => !pressed ? styles.button : styles.buttonPressed}
            >
                <View style={styles.innerItem}>
                    <Text style={styles.categoryText}>{title}</Text>
                </View>
            </Pressable>
        </View>

    )
}

export default CategoryGrid;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 5,
        height: 150,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 5},
        showRadius: 8,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        flex: 1,
        opacity: 0.5,
    },
    innerItem: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 20,
    },

})
