import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { fetchPokemon } from "../../actions/pokemonActions";
import styles from "./SearchHistory.module.scss";

function SearchHistory() {
    const dispatch = useDispatch<AppDispatch>();
    const searchHistory = useSelector(
        (state: RootState) => state.searchHistory
    );

    function handleClick(search: string) {
        dispatch(fetchPokemon(search));
    }

    if (!searchHistory.history.length) return null;
    return (
        <div className={styles.wrapper}>
            <h2>History:</h2>
            <ul>
                {searchHistory.history
                    .slice()
                    .reverse()
                    .map((search: string, index: number) => (
                        <li key={index} onClick={() => handleClick(search)}>
                            {search}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default SearchHistory;
