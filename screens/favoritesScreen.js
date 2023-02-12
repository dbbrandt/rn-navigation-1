import { useContext, useEffect } from "react";
// import { useIsFocused } from '@react-navigation/native'
import {useSelector } from 'react-redux';
// import {FavoritesContext} from "../store/context/favoritesContext";

import {View, Text, FlatList, StyleSheet} from "react-native";
import MealItem from "../components/mealItem";

function FavoritesScreen({route, navigation}) {
    // const context = useContext(FavoritesContext);
    // const { favoriteMeals } = context;
    // const isFocused = useIsFocused();
    const favoriteMeals = useSelector((state) => state.favorites.favoriteMeals)
    let favoriteCount = favoriteMeals.length;

    function renderMealItem(itemData) {
        return <MealItem mealId={itemData.item} favoriteMeals={favoriteMeals}/>
    }

    useEffect(() => {
        favoriteCount = favoriteMeals.length;
    }, [favoriteMeals])

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>Showing {favoriteCount} favorite meals</Text>
            <FlatList data={favoriteMeals} keyExtractor={(item) => item} renderItem={renderMealItem}/>
        </View>
    )
}


export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countText: {
        backgroundColor: '#622a09',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 6,
    }
})
