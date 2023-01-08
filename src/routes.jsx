import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./components/App";
import PokemonDetailPage from "./components/PokemonDetailPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route exact path="/card/:name" element={<PokemonDetailPage />} />
  </Routes>
);

export default AppRoutes;
