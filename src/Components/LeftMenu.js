import React from "react";
import { Link } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { CgPokemon } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const LeftMenu = () => {
  const { t, i18n } = useTranslation();

  const [mode, setMode] = React.useState("dark");
  const [isHamburger, setIsHamburger] = React.useState(false);
  let location = useLocation();
  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("dark-theme"))) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  function themeMode() {
    if (JSON.parse(localStorage.getItem("dark-theme"))) {
      document.querySelector("html").removeAttribute("data-theme");
      localStorage.setItem("dark-theme", false);
      setMode("light");
    } else {
      document.querySelector("html").setAttribute("data-theme", "dark");
      localStorage.setItem("dark-theme", true);
      setMode("dark");
    }
  }

  return (
    <>
      <div className="left-menu">
        <ul className="left-menu-list">
          <li>
            <span className="left-menu-icon">
              <AiOutlineHome size={20} />
            </span>

            <Link
              className={`${location.pathname === "/" ? "active" : ""}`}
              to="/"
            >
              {t("common:home")}
            </Link>
          </li>
          <li>
            <span className="left-menu-icon">
              <CgPokemon size={20} />
            </span>
            <Link
              className={`${
                location.pathname === "/caught-pokemons" ? "active" : ""
              }`}
              to="/caught-pokemons"
            >
              {" "}
              {t("common:caught")}{" "}
            </Link>
          </li>
          <li onClick={themeMode}>
            <span className="left-menu-icon">
              <HiMoon size={20} />
            </span>
            <span>
              {mode === "dark" ? t("common:lightTheme") : t("common:darkTheme")}
            </span>
          </li>

          <li className="left-menu-bottom">
            <span className="language-option">Dil Seçenekleri</span>
            <div className="flex">
              <div
                className={`${
                  i18n.language === "tr" ? "active" : ""
                } cursor-pointer flex items-center`}
                onClick={() => {
                  localStorage.setItem("lang", "tr");
                  i18n.changeLanguage("tr");
                }}
              >
                <span>
                  <img className="lang-img" src="../img/tr.svg" alt="" />
                </span>
                <span className="mr-1">TR</span>
              </div>
              <div
                className={`${
                  i18n.language === "en" ? "active" : ""
                } cursor-pointer flex items-center`}
                onClick={() => {
                  localStorage.setItem("lang", "en");
                  i18n.changeLanguage("en");
                }}
              >
                <span>
                  <img className="lang-img" src="../img/eng.png" alt="" />
                </span>
                <span className="mr-1">EN</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div onClick={() => setIsHamburger(true)} className="mobile-fab-button">
        <AiOutlineMenu />
      </div>
      <div
        className={`mobile-left-menu-main ${isHamburger ? "active" : "hidden"}`}
      >
        <div className="mobile-left-menu">
          <div onClick={() => setIsHamburger(false)} className="close-menu">
            <AiOutlineCloseCircle size={24} />
          </div>
          <ul className="left-menu-list">
            <li>
              <span className="left-menu-icon">
                <AiOutlineHome size={20} />
              </span>

              <Link
                className={`${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                {t("common:home")}
              </Link>
            </li>
            <li>
              <span className="left-menu-icon">
                <CgPokemon size={20} />
              </span>
              <Link
                className={`${
                  location.pathname === "/caught-pokemons" ? "active" : ""
                }`}
                to="/caught-pokemons"
              >
                {" "}
                {t("common:caught")}{" "}
              </Link>
            </li>
            <li onClick={themeMode}>
              <span className="left-menu-icon">
                <HiMoon size={20} />
              </span>
              <span>
                {mode === "dark"
                  ? t("common:lightTheme")
                  : t("common:darkTheme")}
              </span>
            </li>

            <li className="left-menu-bottom">
              <span className="language-option">Dil Seçenekleri</span>
              <div className="flex">
                <div
                  className={`${
                    i18n.language === "tr" ? "active" : ""
                  } cursor-pointer flex items-center`}
                  onClick={() => {
                    localStorage.setItem("lang", "tr");
                    i18n.changeLanguage("tr");
                  }}
                >
                  <span>
                    <img className="lang-img" src="../img/tr.svg" alt="" />
                  </span>
                  <span className="mr-1">TR</span>
                </div>
                <div
                  className={`${
                    i18n.language === "en" ? "active" : ""
                  } cursor-pointer flex items-center`}
                  onClick={() => {
                    localStorage.setItem("lang", "en");
                    i18n.changeLanguage("en");
                  }}
                >
                  <span>
                    <img className="lang-img" src="../img/eng.png" alt="" />
                  </span>
                  <span className="mr-1">EN</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
