import {
  GET_POKEMONS,
  GET_POKEMONS_LOADING,
  SET_POKEMON_CAUHGT,
  REMOVE_POKEMON_CAUHGT,
  SET_POKEMON_FAVORITE,
  REMOVE_POKEMON_FAVORITE,
  GET_POKEMON,
  BASE_URL,
  LOCALSTORAGE_CAUGHT_POKEMONS,
} from "./types";
import { toast } from "react-toastify";
import axios from "axios";
import { prominent } from "color.js";
import store from "../store";
import { setAlert } from "./alert";

export const getPokemons = (next) => async (dispatch) => {
  if (!!!next) {
    dispatch({
      type: GET_POKEMONS_LOADING,
      payload: true,
    });
  }

  try {
    let pokemonArr = [];
    let response = "";
    if (next) {
      response = await axios.get(next);
    } else {
      response = await axios.get(`${BASE_URL}/pokemon?limit=10`);
    }

    async function getPokemonById() {
      for (let index = 0; index < response.data.results.length; index++) {
        const responseDetail = await axios.get(
          response.data.results[index].url
        );

        const colors = await prominent(
          responseDetail.data.sprites.other["official-artwork"].front_default,
          { format: "hex" }
        );
        pokemonArr = [
          ...pokemonArr,
          {
            ...response.data.results[index],
            ...responseDetail.data,
            bgColor: colors[1],
          },
        ];
      }
    }

    await getPokemonById();

    dispatch({
      type: GET_POKEMONS,
      payload: { data: pokemonArr, next: response.data.next },
    });

    dispatch({
      type: GET_POKEMONS_LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: GET_POKEMONS_LOADING,
      payload: false,
    });

    toast.error(" Hatalı bir işlem yapıldı", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const localStorageCaughtPokemons = (data) => async (dispatch) => {
  try {
    dispatch({
      type: LOCALSTORAGE_CAUGHT_POKEMONS,
      payload: data,
    });
  } catch (error) {
    toast.error("Hatalı bir işlem yapıldı", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const caughtPokemons = (item, t) => async (dispatch) => {
  try {
    const allCaughtPokemons = store.getState().pokemon.caughtPokemons;
    const allCaughtPokemonsLocalStorage = JSON.parse(
      localStorage.getItem("caughtPokemons")
    );

    const findItem = allCaughtPokemons.find((cP) => cP.id === item.id);

    if (findItem) {
      dispatch({ type: REMOVE_POKEMON_CAUHGT, payload: item.id });
      dispatch(
        setAlert({
          text: t("common:releasedPokemon"),
          status: "info",
        })
      );

      const newArr = allCaughtPokemonsLocalStorage.filter(
        (cP) => cP.id !== item.id
      );
      localStorage.setItem("caughtPokemons", JSON.stringify(newArr));
    } else {
      dispatch({
        type: SET_POKEMON_CAUHGT,
        payload: { ...item, isFavorite: false },
      });
      dispatch(
        setAlert({
          text: t("common:caughtPokemon"),
          status: "success",
        })
      );

      const newArr = [
        ...allCaughtPokemonsLocalStorage,
        { ...item, isFavorite: false },
      ];
      localStorage.setItem("caughtPokemons", JSON.stringify(newArr));
    }
  } catch (error) {
    toast.error(" Hatalı bir işlem yapıldı", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const favoritePokemons = (item, t) => async (dispatch) => {
  try {
    const allCaughtPokemons = store.getState().pokemon.caughtPokemons;
    const allCaughtPokemonsLocalStorage = JSON.parse(
      localStorage.getItem("caughtPokemons")
    );

    const findItem = allCaughtPokemons.find((cP) => cP.id === item.id);

    if (findItem) {
      if (findItem.isFavorite) {
        dispatch({ type: REMOVE_POKEMON_FAVORITE, payload: item.id });
        dispatch(
          setAlert({
            text: t("common:removeFavoritePokemon"),
            status: "favorite",
          })
        );
        const newArr = allCaughtPokemonsLocalStorage.map((cP) =>
          cP.id === item.id ? { ...cP, isFavorite: false } : cP
        );
        localStorage.setItem("caughtPokemons", JSON.stringify(newArr));
      } else {
        dispatch({
          type: SET_POKEMON_FAVORITE,
          payload: item.id,
        });
        dispatch(
          setAlert({
            text: t("common:favoritePokemon"),
            status: "favorite",
          })
        );
        const newArr = allCaughtPokemonsLocalStorage.map((cP) =>
          cP.id === item.id ? { ...cP, isFavorite: true } : cP
        );
        localStorage.setItem("caughtPokemons", JSON.stringify(newArr));
      }
    }
  } catch (error) {
    toast.error(" Hatalı bir işlem yapıldı", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const getPokemon = (id, refresh) => async (dispatch) => {
  try {
    if (refresh) {
      dispatch({
        type: GET_POKEMON,
        payload: null,
      });
    } else {
      const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
      const colors = await prominent(
        response.data.sprites.other["official-artwork"].front_default,
        { format: "hex" }
      );
      dispatch({
        type: GET_POKEMON,
        payload: { ...response.data, bgColor: colors[1] },
      });
    }
  } catch (error) {
    toast.error(" Hatalı bir işlem yapıldı", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
