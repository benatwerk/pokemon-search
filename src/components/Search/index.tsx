import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { fetchPokemon } from "../../actions/pokemonActions";
import { addSearch } from "../../reducers/searchHistorySlice";
import styles from "./Search.module.scss";

function Search() {
    const dispatch = useDispatch<AppDispatch>();
    const [input, setInput] = useState("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (input.trim() !== "") {
            dispatch(fetchPokemon(input.toLowerCase()));
            dispatch(addSearch(input.toLowerCase()));
            setInput("");
        }
    }

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Find a Pokemon"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;
