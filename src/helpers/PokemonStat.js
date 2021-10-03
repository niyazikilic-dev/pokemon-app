import { useTranslation } from "react-i18next";

const PokemonStat = ({ stat }) => {
  function widthCalc(value) {
    return (100 * value) / 150 + "%";
  }

  const { t } = useTranslation();

  switch (stat.stat.name) {
    case "hp":
      return (
        <div className="stat">
          <span> {t("common:hp")}</span>

          <span> {stat.base_stat}</span>
          <div className="stat-bar">
            <span
              style={{
                backgroundColor: "#7ee3bc",
                width: widthCalc(stat.base_stat),
              }}
              className="bar"
            ></span>
          </div>
        </div>
      );
    case "attack":
      return (
        <div className="stat">
          <span> {t("common:attack")}</span>
          <span> {stat.base_stat}</span>
          <div className="stat-bar">
            <span
              style={{
                backgroundColor: "#e2757c",
                width: widthCalc(stat.base_stat),
              }}
              className="bar"
            ></span>
          </div>
        </div>
      );
    case "defense":
      return (
        <div className="stat">
          <span> {t("common:defense")}</span>
          <span> {stat.base_stat}</span>
          <div className="stat-bar">
            <span
              style={{
                backgroundColor: "#facc87",
                width: widthCalc(stat.base_stat),
              }}
              className="bar"
            ></span>
          </div>
        </div>
      );
    case "special-attack":
      return (
        <div className="stat">
          <span> {t("common:specialAttack")}</span>
          <span> {stat.base_stat}</span>
          <div className="stat-bar">
            <span
              style={{
                backgroundColor: "#da8a8f",
                width: widthCalc(stat.base_stat),
              }}
              className="bar"
            ></span>
          </div>
        </div>
      );
    case "special-defense":
      return (
        <div className="stat">
          <span> {t("common:specialDefense")}</span>
          <span> {stat.base_stat}</span>
          <div className="stat-bar">
            <span
              style={{
                backgroundColor: "#f8d58e",
                width: widthCalc(stat.base_stat),
              }}
              className="bar"
            ></span>
          </div>
        </div>
      );

    case "speed":
      return (
        <div className="stat">
          <span> {t("common:speed")}</span>
          <span> {stat.base_stat}</span>
          <div className="stat-bar">
            <span
              style={{
                backgroundColor: "#8ab9ea",
                width: widthCalc(stat.base_stat),
              }}
              className="bar"
            ></span>
          </div>
        </div>
      );

    default:
      return <div></div>;
  }
};

export default PokemonStat;
