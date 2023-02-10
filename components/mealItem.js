import { useContext } from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BooleanView from "./booleanView";
import BooleanMealData from "../data/BooleanMealData";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { MEALS } from '../data/dummy-data';
import { MealsContext } from "../components/mealsContext";


function MealItem({mealId}) {
    const mealData = MEALS.find((meal) => meal.id === mealId);
    const {overviewItems, dietaryItems} = BooleanMealData(mealData);
    const items = [...overviewItems, ...dietaryItems];
    const navigation = useNavigation();
    const context = useContext(MealsContext);

    function mealSelectionHandler() {
        const favoriteMeals = context.favoriteMeals;
        navigation.navigate('MealDetail', {mealId: mealData.id });
    }


    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{color: 'lightgrey'}}
                style={({pressed}) => pressed && styles.buttonPressed}
                onPress={mealSelectionHandler}
            >

                <View style={styles.contentOuterContainer}>
                    <Image style={styles.imageStyle} source={{uri: mealData.imageUrl}}/>
                    <Text style={styles.title}>{mealData.title}</Text>
                    <BooleanView itemList={items} style={styles.booleanText}/>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        borderRadius: 8,
        elevation: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 5},
        showRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10,
    },
    contentOuterContainer: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    imageStyle: {
        width: '100%',
        height: 200,
    },
    booleanText: {
        fontSize: 12,
    },
    buttonPressed: {
        opacity: 0.5,
    },
})