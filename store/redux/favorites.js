import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteMeals: []
    },
    // With redux toolkit you can mutate state unlike plain redux because the toolkit takes care of it.
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteMeals.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.favoriteMeals.splice(state.favoriteMeals.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;