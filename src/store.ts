import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./reducers/pokemonSlice";
import searchHistoryReducer from "./reducers/searchHistorySlice";

// This combines the reducers for different slices of state into a single store
// If you decide to add more state add it to the store here
export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        searchHistory: searchHistoryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
