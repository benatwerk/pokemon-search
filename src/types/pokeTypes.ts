export interface Move {
    move: {
        name: string;
    };
}

export interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface Sprites {
    front_default: string;
    front_shiny: string;
}

export interface Pokemon {
    abilities: Ability[];
    sprites: Sprites;
    name: string;
}

export interface Pokemon {
    name: string;
    height: number;
    weight: number;
    abilities: Ability[];
    types: Type[];
    stats: Stat[];
    moves: Move[];
    gender_rate: number;
}

export interface PokemonState {
    status: "idle" | "loading" | "succeeded" | "failed";
    data?: Pokemon | null;
    error?: string;
}
