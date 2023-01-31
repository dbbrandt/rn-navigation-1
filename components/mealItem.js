import {View, Text, StyleSheet, Image} from 'react-native';

function MealItem({mealData}) {
    function booleanItem(text) {
        return <Text style={styles.booleanItem}>{text}</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{mealData.title}</Text>
            <Image style={styles.imageStyle} source={{uri: mealData.imageUrl}}/>
            <Text style={styles.textSection}>Overview:</Text>
            <View style={styles.booleanSection}>
                <Text style={styles.booleanItem}>{mealData.affordability}</Text>
                <Text style={styles.booleanItem}>{mealData.complexity}</Text>
                <Text style={styles.booleanItem}>{mealData.duration} min.</Text>
            </View>
            <Text style={styles.textSection}>Ingredients:</Text>
            <View style={styles.sectionContainer}>
                {mealData.ingredients.map((ingredient) =>
                    <Text style={styles.sectionItem}>&bull; {ingredient}</Text>
                )}
            </View>
            <Text style={styles.textSection}>Directions:</Text>
            <View style={styles.sectionContainer}>
                {mealData.steps.map((direction, index) =>
                    <Text style={styles.sectionItem}>{index + 1}. {direction}</Text>
                )}
            </View>
            <Text style={styles.textSection}>Dietary:</Text>
            <View style={styles.booleanSection}>
                {mealData.isGlutenFree && <Text style={styles.booleanItem}>Glutne Free</Text>}
                {mealData.isVegan && <Text style={styles.booleanItem}>Vegan</Text>}
                {mealData.isVegetarian && <Text style={styles.booleanItem}>Vegetarian </Text>}
                {mealData.isLactoseFree && <Text style={styles.booleanItem}>Lactose Free</Text>}
            </View>
        </View>
    )

}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 5},
        showRadius: 8,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
    },
    textSection: {
        marginTop: 20,
        marginLeft: 5,
        color: 'darkblue',
        fontWeight: 'bold',
    },
    sectionContainer: {
        flex: 1,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        elevation: 2,
        backgroundColor: 'lightyellow',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 5},
        showRadius: 8,
        overflow: 'hidden',
    },
    sectionItem: {
        padding: 5,
        paddingLeft: 10,
    },
    booleanSection: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    booleanItem: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 20,
        elevation: 2,
        backgroundColor: 'lightyellow',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 5},
        showRadius: 20,
        fontWeight: 'bold',
        color: '#696363',
        overflow: 'hidden',
    },
    imageStyle: {
        height: 150,
        width: 150,
        margin: 10,
    }

})