import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from "./Components/PokemonList";
import CaughtPokemons from "./Components/CaughtPokemons";
import PokemonDetail from "./Components/PokemonDetail";
import { useDispatch } from "react-redux";
import { localStorageCaughtPokemons } from "./action/pokemon";
import NotFoundPage from "./Components/NotFoundPage";

const Routers = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!localStorage.getItem("caughtPokemons")) {
      localStorage.setItem("caughtPokemons", JSON.stringify([]));
    } else {
      const cauhgtPokemons = JSON.parse(localStorage.getItem("caughtPokemons"));
      dispatch(localStorageCaughtPokemons(cauhgtPokemons));
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="main ">
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route path="/caught-pokemons">
            <CaughtPokemons />
          </Route>
          <Route path="/pokemon/:id">
            <PokemonDetail />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routers;
