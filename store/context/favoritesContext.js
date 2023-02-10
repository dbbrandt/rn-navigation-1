import {createContext, useState} from 'react';

export const FavoritesContext = createContext({
    favoriteMeals: [],
    setFavoriteMeals: () => {
    },
});

function FavoritesContextProvider({children}) {
    const [favoriteMeals, setFavoriteMeals] = useState([]);

    function addFavorite(mealId) {
        console.log(`addFavorite: ${mealId} favorites: ${favoriteMeals}`)
        setFavoriteMeals((previous) => [...previous, mealId]);
    }

    function removeFavorite(mealId) {
        console.log(`removeFavorite: ${mealId} favorites: ${favoriteMeals}`)
        setFavoriteMeals((previous) => previous.filter( (id) => id != mealId));
    }

    const value = {
        favoriteMeals: favoriteMeals,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}


export default FavoritesContextProvider;
