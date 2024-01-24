import React from "react";
import "./index.css";
import { PlanetLayout } from "./planet-layout";
import {
  IconJupiter,
  IconJupiterInternal,
  IconJupiterStructure,
} from "../assets/planet-icons/jupiter";

const layoutProperties = [
  {
    icon: <IconJupiter />,
    name: "Overview",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
  },
  {
    icon: <IconJupiterStructure />,
    name: "Internal Structure",
    description:
      "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
  },
  {
    icon: <IconJupiterInternal />,
    name: "Surface Geology",
    description:
      "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
  },
];

const planetProperties = [
  {
    name: "Rotation time",
    value: "9.93 hours",
  },
  {
    name: "Revolution time",
    value: "11.86 years",
  },
  {
    name: "Radius",
    value: "69,911 km",
  },
  {
    name: "Average temp.",
    value: "-108°c",
  },
];

const JupiterPage = () => {
  return (
    <PlanetLayout
      title="Jupiter"
      planetProperties={planetProperties}
      layoutProperties={layoutProperties}
      sourceWikipedia="https://en.wikipedia.org/wiki/Mercury_(planet)"
    />
  );
};

export default JupiterPage;
