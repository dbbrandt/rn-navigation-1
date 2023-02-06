import {View, StyleSheet, FlatList, useWindowDimensions} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGrid from "../components/categoryGrid";

function CategoriesScreen({ route, navigation }) {
    const favoriteMeals = route.params.favoriteMeals;
    const {height, width} = useWindowDimensions();
    const columns = width > 600 ? 3 : 2;

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                title: itemData.item.title,
                color: itemData.item.color,
                favoriteMeals: favoriteMeals,
            });
        }

        return (
            <CategoryGrid color={itemData.item.color}
                          title={itemData.item.title}
                          columns={columns}
                          onPress={pressHandler}
            />
        )
    }

    return (
        <View style={styles.rootContainer}>
            <FlatList
                data={CATEGORIES}
                key={columns}
                numColumns={columns}
                keyExtractor={item => item.id}
                renderItem={renderCategoryItem}
            />
        </View>
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        padding: 10,
    },
})