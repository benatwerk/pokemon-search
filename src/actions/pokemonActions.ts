import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemon = createAsyncThunk(
    "pokemon/fetchPokemon",
    async (pokemon: string, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            );
            if (!response.ok) {
                throw new Error("Server error!");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("An unknown error occurred");
        }
    }
);
