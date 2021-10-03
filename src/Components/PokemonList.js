import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../action/pokemon";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Lottie from "react-lottie";
import animationData from "../lottie/loading.json";
import PokemonCard from "./PokemonCard";
import LeftMenu from "./LeftMenu";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const loading = useSelector((state) => state.pokemon.loading);
  const next = useSelector((state) => state.pokemon.next);

  React.useEffect(() => {
    dispatch(getPokemons(null));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  const PageLoading = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <div className="loading-page-main">
        <div>
          <Lottie options={defaultOptions} height={100} width={100} />
        </div>
      </div>
    );
  };

  return (
    <div className="flex">
      <LeftMenu />
      <div className="flex-1">
        <InfiniteScroll
          dataLength={pokemons.length}
          next={() => {
            dispatch(getPokemons(next));
          }}
          hasMore={!!next}
          loader={<PageLoading />}
        >
          <div className="pokemon-list-main ">
            {pokemons.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default PokemonList;
