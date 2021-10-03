import {
  GET_POKEMONS,
  GET_POKEMONS_LOADING,
  SET_POKEMON_CAUHGT,
  REMOVE_POKEMON_CAUHGT,
  SET_POKEMON_FAVORITE,
  REMOVE_POKEMON_FAVORITE,
  GET_POKEMON,
  LOCALSTORAGE_CAUGHT_POKEMONS,
} from "../action/types";

const initialState = {
  pokemons: [],
  loading: false,
  next: null,
  caughtPokemons: [],
  pokemon: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...payload.data],
        next: payload.next,
      };

    case GET_POKEMONS_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case GET_POKEMON:
      return {
        ...state,
        pokemon: payload,
      };

    case LOCALSTORAGE_CAUGHT_POKEMONS:
      return {
        ...state,
        caughtPokemons: [...state.caughtPokemons, ...payload],
      };

    case SET_POKEMON_CAUHGT:
      return {
        ...state,
        caughtPokemons: [...state.caughtPokemons, payload],
      };

    case REMOVE_POKEMON_CAUHGT:
      return {
        ...state,
        caughtPokemons: state.caughtPokemons.filter((cP) => cP.id !== payload),
      };

    case SET_POKEMON_FAVORITE:
      return {
        ...state,
        caughtPokemons: state.caughtPokemons.map((cP) =>
          cP.id === payload ? { ...cP, isFavorite: true } : cP
        ),
      };

    case REMOVE_POKEMON_FAVORITE:
      return {
        ...state,
        caughtPokemons: state.caughtPokemons.map((cP) =>
          cP.id === payload ? { ...cP, isFavorite: false } : cP
        ),
      };

    default:
      return state;
  }
}
