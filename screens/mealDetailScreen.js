import { useLayoutEffect } from 'react';
import {ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import BooleanView from "../components/booleanView";
import BooleanMealData from "../data/BooleanMealData";
import { MEALS } from '../data/dummy-data';
import {useEffect} from "react";
import IconButton from "../components/iconButton";


function MealDetailScreen({ route, navigation }) {
    const { mealId, favoriteMeals } = route.params;
    const mealData = MEALS.find((meal) => meal.id === mealId);
    const {overviewItems, dietaryItems} = BooleanMealData(mealData);

    function setHeaderIcon(selected) {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon='star' color={selected ? 'red' : 'white'} onPress={headerButtonPressHandler}/>
            }
        })
    }

    function headerButtonPressHandler() {
        if (favoriteMeals.includes(mealId)) {
            favoriteMeals.pop(mealId);
            setHeaderIcon(false);
        }
        else {
            favoriteMeals.push(mealId);
            setHeaderIcon(true);
        }
    }

    useEffect(() => {
        setHeaderIcon( favoriteMeals.includes(mealId))
        navigation.setOptions({
                title: mealData.title,
            }
    )}, [mealData, route, navigation]);

    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>{mealData.title}</Text>
                <Image style={styles.imageStyle} source={{uri: mealData.imageUrl}}/>
                <Text style={styles.textSection}>Overview:</Text>
                <BooleanView itemList={overviewItems}/>
                <Text style={styles.textSection}>Ingredients:</Text>
                <View style={styles.sectionContainer}>
                    {mealData.ingredients.map((ingredient, index) =>
                        <Text key={index} style={styles.sectionItem}>&bull; {ingredient}</Text>
                    )}
                </View>
                <Text style={styles.textSection}>Directions:</Text>
                <View style={styles.sectionContainer}>
                    {mealData.steps.map((direction, index) =>
                        <Text key={index} style={styles.sectionItem}>{index + 1}. {direction}</Text>
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
        width: '100%',
        height: 300,
        borderRadius: 8,
    }

})