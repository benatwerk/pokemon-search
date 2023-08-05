import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import styles from "./PokemonItem.module.scss";

function PokemonItem() {
    const pokemon = useSelector((state: RootState) => state.pokemon);

    return (
        <div className={styles.wrapper}>
            {pokemon.status === "loading" && <div>PokéLoading...</div>}

            {pokemon.status === "failed" && (
                <div>
                    Oh no! You have a Pika Pika PokéError: "{pokemon.error}"
                    Attacked you!
                </div>
            )}

            {pokemon.status === "succeeded" && pokemon.data && (
                <>
                    <h2>
                        <img
                            src={pokemon.data.sprites.front_default}
                            alt={pokemon.data.name}
                        />
                        {pokemon.data.name}
                    </h2>
                    <section className={styles.cards}>
                        <section className={styles.general}>
                            <h3>General</h3>
                            <dl>
                                <dt>Height:</dt>
                                <dd>{pokemon.data.height}</dd>
                                <dt>Weight:</dt>
                                <dd>{pokemon.data.weight}</dd>
                                <dt>Gender:</dt>
                                <dd>
                                    {pokemon.data.gender_rate > 4
                                        ? "Female"
                                        : "Male"}
                                </dd>
                                <dt>Abilities:</dt>
                                <dd>
                                    <ul>
                                        {pokemon.data.abilities.map(
                                            (ability, index) => (
                                                <li key={index}>
                                                    {ability.ability.name}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </dd>
                            </dl>
                        </section>
                        <section>
                            <h3>Types</h3>
                            <dl>
                                {pokemon.data.types.map((type, index) => (
                                    <div key={index}>
                                        <dd>{type.type.name}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>
                        <section>
                            <h3>Stats</h3>
                            <dl>
                                {pokemon.data.stats.map((stat, index) => (
                                    <div key={index}>
                                        <dt>{stat.stat.name}:</dt>
                                        <dd>{stat.base_stat}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>

                        <section>
                            <h3>Moves</h3>
                            <dl>
                                {pokemon.data.moves
                                    .slice(0, 10)
                                    .map((move, index) => (
                                        <div key={index}>
                                            <dt>Move {index + 1}:</dt>
                                            <dd>{move.move.name}</dd>
                                        </div>
                                    ))}
                            </dl>
                        </section>
                    </section>
                </>
            )}
        </div>
    );
}

export default PokemonItem;
