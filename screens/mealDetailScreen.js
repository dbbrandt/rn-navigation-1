import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import BooleanView from "../components/booleanView";
import BooleanMealData from "../data/BooleanMealData";


function MealDetailScreen({route}) {
    const mealData = route.params.mealData;
    const {overviewItems, dietaryItems} = BooleanMealData(mealData);
    // const overviewItems = mealBooleanLists.overViewItems;
    // const dietaryItems = mealBooleanLists.dietaryItems;
    // const overviewItems = [mealData.affordability, mealData.complexity, mealData.duration];
    // const dietaryItems = [];
    // if (mealData.isGlutenFree) dietaryItems.push('Gluten Free');
    // if (mealData.isVegan) dietaryItems.push('Vegan');
    // if (mealData.isVegetarian) dietaryItems.push('Vegetarian');
    // if (mealData.isLactoseFree) dietaryItems.push('Lactose Free');

    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>{mealData.title}</Text>
                <Image style={styles.imageStyle} source={{uri: mealData.imageUrl}}/>
                <Text style={styles.textSection}>Overview:</Text>
                <BooleanView itemList={overviewItems}/>
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
                <BooleanView itemList={dietaryItems}/>
            </View>
        </ScrollView>
    )

}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
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
    imageStyle: {
        height: 150,
        width: 150,
        margin: 10,
    }

})