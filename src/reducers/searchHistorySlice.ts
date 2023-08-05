import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchHistoryState {
    history: string[]; // array of search strings
}

const initialState: SearchHistoryState = {
    history: [],
};

const searchHistorySlice = createSlice({
    name: "searchHistory",
    initialState,
    reducers: {
        addSearch: (state, action: PayloadAction<string>) => {
            state.history = [...state.history, action.payload];
        },
        clearSearchHistory: (state) => {
            state.history = [];
        },
    },
});

export const { addSearch, clearSearchHistory } = searchHistorySlice.actions;

export default searchHistorySlice.reducer;
