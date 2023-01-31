import { useEffect } from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from "../components/mealItem";


function MealsOverviewScreen({ route, navigation }) {
    const { categoryId, color } = route.params;
    const meals = MEALS.filter((mealsItem) => mealsItem.categoryIds.includes(categoryId));

    function renderMealItem(itemData) {
        return <MealItem mealId={itemData.item.id}/>
    }

    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle,
            contentStyle: {
                backgroundColor: color,
            }
        }
    )}, [categoryId, navigation]);

    return (
        <View style={styles.container}>
            <FlatList data={meals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsOverviewScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    }
})