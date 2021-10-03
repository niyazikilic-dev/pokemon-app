import React from "react";
import { useSelector } from "react-redux";
import LeftMenu from "./LeftMenu";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CaughtPokemons = () => {
  const { t } = useTranslation();
  const allCaughtPokemons = useSelector(
    (state) => state.pokemon.caughtPokemons
  );

  return (
    <div className="flex">
      <LeftMenu />
      <div className="flex-1">
        {allCaughtPokemons.length > 0 ? (
          <div className="pokemon-list-main">
            {allCaughtPokemons.map((pokemon, index) => (
              <PokemonCard
                isCaughtPokemonsPage={true}
                key={index}
                pokemon={pokemon}
              />
            ))}
          </div>
        ) : (
          <div className="empty-caught-pokemon-main">
            <img src="/img/pokeball.gif" alt="" />
            <span> {t("common:emptyCaughtPokemonDescription")}</span>
            <Link to="/">{t("common:home")}</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaughtPokemons;
