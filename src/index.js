import React from "react";
import { createRoot } from "react-dom/client";
import "./style/normalize.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./redux/reducer";
import thunk from "redux-thunk";
const store = createStore(reducer, compose(applyMiddleware(thunk)));
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App tab="home" />
    </React.StrictMode>
  </Provider>
);
