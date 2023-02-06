import {StyleSheet, Text, View} from 'react-native';

function BooleanView({ itemList, style }) {
    return (
    <View style={styles.booleanSection}>
        {itemList.map((item) => <Text key={item} style={[styles.booleanItem, style]}>{item.toUpperCase()}</Text>)}
    </View>
    )
}

export default BooleanView;

const styles = StyleSheet.create({
    booleanSection: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
    },
    booleanItem: {
        margin: 4,
        padding: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'lightyellow',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 5},
        showRadius: 20,
        fontWeight: 'bold',
        color: '#585353',
        overflow: 'hidden',
    },
})