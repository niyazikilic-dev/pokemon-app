import { GiElectric } from "react-icons/gi";
import { AiFillFire, AiFillBug } from "react-icons/ai";

import { FaLeaf } from "react-icons/fa";
import {
  GiGasMask,
  GiFluffyWing,
  GiGroundSprout,
  GiRock,
  GiPsychicWaves,
  GiSteelClaws,
} from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { CgPokemon } from "react-icons/cg";

const TypeIcon = ({ icon }) => {
  switch (icon) {
    case "grass":
      return (
        <span
          style={{ backgroundColor: "#43c194" }}
          className="pokemon-type-main"
        >
          <FaLeaf size={16} color={"#174c3a"} />
        </span>
      );
    case "poison":
      return (
        <span
          style={{ backgroundColor: "#a299f4" }}
          className="pokemon-type-main"
        >
          <GiGasMask size={16} color={"#38375c"} />
        </span>
      );
    case "fire":
      return (
        <span
          style={{ backgroundColor: "#d13833" }}
          className="pokemon-type-main"
        >
          <AiFillFire size={16} color={"#a1100b"} />
        </span>
      );
    case "water":
      return (
        <span
          style={{ backgroundColor: "#4a9ecf" }}
          className="pokemon-type-main"
        >
          <IoIosWater size={16} color={"#014166"} />
        </span>
      );
    case "flying":
      return (
        <span
          style={{ backgroundColor: "#e7e7e7" }}
          className="pokemon-type-main"
        >
          <GiFluffyWing size={16} color={"#979797"} />
        </span>
      );
    case "bug":
      return (
        <span
          style={{ backgroundColor: "#5f5f5f" }}
          className="pokemon-type-main"
        >
          <AiFillBug size={16} color={"#1f1f1f"} />
        </span>
      );
    case "ground":
      return (
        <span
          style={{ backgroundColor: "#8d7335" }}
          className="pokemon-type-main"
        >
          <GiGroundSprout size={16} color={"#533900"} />
        </span>
      );
    case "electric":
      return (
        <span
          style={{ backgroundColor: "#ddba67" }}
          className="pokemon-type-main"
        >
          <GiElectric size={16} color={"#f0dc78"} />
        </span>
      );
    case "normal":
      return (
        <span
          style={{ backgroundColor: "#dd7967" }}
          className="pokemon-type-main"
        >
          <CgPokemon size={16} color={"#aa2800"} />
        </span>
      );
    case "rock":
      return (
        <span
          style={{ backgroundColor: "#898989" }}
          className="pokemon-type-main"
        >
          <GiRock size={16} color={"#404040"} />
        </span>
      );
    case "psychic":
      return (
        <span
          style={{ backgroundColor: "#5f7bbb" }}
          className="pokemon-type-main"
        >
          <GiPsychicWaves size={16} color={"#032674"} />
        </span>
      );
    case "steel":
      return (
        <span
          style={{ backgroundColor: "#818181" }}
          className="pokemon-type-main"
        >
          <GiSteelClaws size={16} color={"#3e3e3e"} />
        </span>
      );
    default:
      return (
        <span
          style={{ backgroundColor: "#ddba67" }}
          className="pokemon-type-main"
        >
          <GiElectric size={16} color={"#f0dc78"} />
        </span>
      );
  }
};

export default TypeIcon;
