import React from "react";
import { useDispatch, useSelector } from "react-redux";

import LeftMenu from "./LeftMenu";
import { useTranslation } from "react-i18next";
import Loading from "./Loading";
import { getPokemon } from "../action/pokemon";
import { useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const pokemon = useSelector((state) => state.pokemon.pokemon);
  let { id } = useParams();

  const [tab, setTab] = React.useState("about");

  React.useEffect(() => {
    dispatch(getPokemon(id, false));
  }, [id]);

  React.useEffect(() => {
    return () => {
      dispatch(getPokemon(id, true));
    };
  }, []);

  if (!pokemon) {
    return <Loading />;
  }

  return (
    <div className="flex">
      <LeftMenu />
      <div className="flex-1 pokemon-detail-main">
        <div>
          <PokemonCard pokemon={pokemon} />
        </div>
        <div>
          <div className="pokemon-info-tabs">
            <div
              onClick={() => {
                setTab("about");
              }}
              className={`tab ${tab === "about" ? "active" : ""}`}
            >
              {t("common:about")}
            </div>
            <div
              onClick={() => {
                setTab("abilities");
              }}
              className={`tab ${tab === "abilities" ? "active" : ""}`}
            >
              {t("common:abilities")}
            </div>

            <div
              onClick={() => {
                setTab("moves");
              }}
              className={`tab ${tab === "moves" ? "active" : ""}`}
            >
              {t("common:moves")}
            </div>
          </div>
          <div>
            {tab === "about" && (
              <div className="detail-info">
                <div className="flex mb-2">
                  <span>{t("common:weight")}</span>
                  <span>{pokemon.weight} </span>
                </div>
                <div className="flex mb-2">
                  <span>{t("common:height")}</span>
                  <span>{pokemon.height}</span>
                </div>
              </div>
            )}
            {tab === "abilities" && (
              <div className="flex abilities-main">
                {pokemon.abilities.map((ability) => (
                  <span>{ability.ability.name}</span>
                ))}
              </div>
            )}
            {tab === "moves" && (
              <div className="flex moves-main">
                {pokemon.moves.map((move) => (
                  <span>{move.move.name}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
