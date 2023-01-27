import {View, Text, StyleSheet, FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGrid from "../components/categoryGrid";

function CategoriesScreen({children}) {

    function renderCategoryItem(title, color) {
        return (
            <CategoryGrid color={color} title={title}/>
        )
    }

    return (
        <View style={styles.rootContainer}>
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    renderCategoryItem(item.title, item.color)
                )}
            />
        </View>
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    rootContainer: {
    },
})