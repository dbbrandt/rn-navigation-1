import {View, Text, StyleSheet, Pressable, useWindowDimensions, Platform} from "react-native";

function CategoryGrid({color, title, columns, onPress}) {
    const {height, width} = useWindowDimensions();
    const boxMargin = 5;
    const landscapePadding = 50;
    const orientation = (width > height) ? 1 : 0;
    const boxSideSize = (width  / columns) - (boxMargin * columns) - (orientation * landscapePadding);
    return (
        <View style={[styles.gridItem,{width: boxSideSize, maxWidth: boxSideSize,
            height: boxSideSize, maxHeight: boxSideSize, margin: boxMargin}]}>
            <Pressable
                android_ripple={{ color: 'lightgrey'}}
                style={({pressed}) => !pressed ? styles.button : styles.buttonPressed}
                onPress={onPress}
            >
                <View style={[styles.innerItem, {backgroundColor: color}]}>
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
        // prevents Android ripple from ignoring border radius
        // This however hides the ios shodow.
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
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
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

})
