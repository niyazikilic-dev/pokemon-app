import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "./Components/Alert";
import Routers from "./routers";

function App() {
  React.useEffect(() => {
    if (localStorage.getItem("dark-theme")) {
      const theme = JSON.parse(localStorage.getItem("dark-theme"));
      if (theme) {
        document.querySelector("html").setAttribute("data-theme", "dark");
      } else {
        document.querySelector("html").removeAttribute("data-theme");
      }
    } else {
      localStorage.setItem("dark-theme", false);
    }
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <Provider store={store}>
      <Routers />
      <ToastContainer />
      <Alert />
    </Provider>
  );
}

export default App;
