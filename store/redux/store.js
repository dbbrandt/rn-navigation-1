import { configureStore } from "@reduxjs/toolkit";
import favoritesReReducer from './favorites';

export const store = configureStore({
    reducer: {
        favorites: favoritesReReducer
    }
});

