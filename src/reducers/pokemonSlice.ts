import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Pokemon, PokemonState } from "../types/pokeTypes";

export const initialState: PokemonState = {
    status: "idle",
    data: null,
};

export const fetchPokemon = createAsyncThunk(
    "pokemon/fetchPokemon",
    async (pokemonName: string) => {
        const response = await axios.get<Pokemon>(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        return response.data;
    }
);

// This slice handles state for the pokemon data:
// loading status, pokemon data, and any errors from fetching the data
export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload; // pokemon data
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default pokemonSlice.reducer;
