import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./store";
import { BrowserRouter, Routes } from "react-router-dom";
import "./styles/style.scss";
import AppRoutes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);
