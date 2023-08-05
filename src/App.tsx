import React from "react";
import Search from "./components/Search";
import PokemonItem from "./components/PokemonItem";
import SearchHistory from "./components/SearchHistory";
import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.wrapper}>
            <Search />
            <PokemonItem />
            <SearchHistory />
        </div>
    );
}

export default App;
