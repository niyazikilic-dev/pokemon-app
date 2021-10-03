import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { caughtPokemons, favoritePokemons } from "../action/pokemon";
import TypeIcon from "../helpers/TypeIcon";
import { useDispatch } from "react-redux";
import PokemonStat from "../helpers/PokemonStat";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon, isCaughtPokemonsPage = false }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div
        style={{ backgroundColor: pokemon.bgColor }}
        className="pokemon-list-items"
      >
        <div className="pokemon-header">
          <div className="pokemon-name-main">
            <span className="pokemon-name">{pokemon.name} </span>
            <div className="flex">
              {pokemon.types.map((type, index) => (
                <span key={index}>
                  <TypeIcon icon={type.type.name} />
                </span>
              ))}
            </div>
          </div>
          <div className="pokemon-id">
            #{String(pokemon.id).padStart(3, "0")}
          </div>
        </div>
        <div className="pokemon-list-img">
          <img
            className="pokemon-list-img-img"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt=""
          />
          <div
            className="poke-ball"
            onClick={(e) => {
              e.preventDefault();
              dispatch(caughtPokemons(pokemon, t));
            }}
          >
            <img className="poke-ball-img" src="../img/pokeball.gif" alt="" />
          </div>
          {isCaughtPokemonsPage && (
            <div
              className="favorite-pokemon"
              onClick={(e) => {
                e.preventDefault();
                dispatch(favoritePokemons(pokemon, t));
              }}
            >
              {pokemon.isFavorite ? (
                <AiFillStar color={"#ffbc18"} size={25} />
              ) : (
                <AiOutlineStar color={"#ffbc18"} size={25} />
              )}
            </div>
          )}
        </div>
        <div className="flex other-images">
          <img src={pokemon.sprites.front_default} alt="" />
          <img src={pokemon.sprites.back_default} alt="" />
          <img src={pokemon.sprites.front_shiny} alt="" />
          <img src={pokemon.sprites.back_shiny} alt="" />
        </div>

        <div className="pokemon-list-pokemon-info">
          <div className="pokemon-stats-main">
            {pokemon.stats.map((stat, index) => (
              <div key={index} className="stats-main">
                <PokemonStat key={index} stat={stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
