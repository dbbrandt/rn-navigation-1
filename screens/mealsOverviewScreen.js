import { View, FlatList, StyleSheet } from "react-native";
import { MEALS } from '../data/dummy-data';
import MealItem from "../components/mealItem";


function MealsOverviewScreen({ route }) {
    const { categoryId, color } = route.params;
    const meals = MEALS.filter((mealsItem) => mealsItem.categoryIds.includes(categoryId));

    function renderMealItem(itemData) {
        return <MealItem mealData={itemData.item}/>
    }

    return (
        <View style={[styles.container, {backgroundColor: color}]}>
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