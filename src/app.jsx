import React from "react";
import { Route, Routes } from "react-router-dom";
import MercuryPage from "./planets/mercury";
import VenusPage from "./planets/venus";
import HomePage from "./planets/home";
import EarthPage from "./planets/earth";
import MarsPage from "./planets/mars";
import JupiterPage from "./planets/jupiter";
import SaturnPage from "./planets/saturn";
import UranusPage from "./planets/uranus";
import NeptunePage from "./planets/neptune";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mercury" element={<MercuryPage />} />
      <Route path="/venus" element={<VenusPage />} />
      <Route path="/earth" element={<EarthPage />} />
      <Route path="/mars" element={<MarsPage />} />
      <Route path="/jupiter" element={<JupiterPage />} />
      <Route path="/saturn" element={<SaturnPage />} />
      <Route path="/uranus" element={<UranusPage />} />
      <Route path="/neptune" element={<NeptunePage />} />
    </Routes>
  );
};
