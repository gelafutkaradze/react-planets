import React from "react";
import "./index.css";
import { PlanetLayout } from "./planet-layout";
import {
  IconEarth,
  IconEarthInternal,
  IconEarthStructure,
} from "../assets/planet-icons/earth";

const layoutProperties = [
  {
    icon: <IconEarth />,
    name: "Overview",
    description:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
  },
  {
    icon: <IconEarthStructure />,
    name: "Internal Structure",
    description:
      "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
  },
  {
    icon: <IconEarthInternal />,
    name: "Surface Geology",
    description:
      "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
  },
];

const planetProperties = [
  {
    name: "Rotation time",
    value: "0.99 days",
  },
  {
    name: "Revolution time",
    value: "365.26 days",
  },
  {
    name: "Radius",
    value: "6,371 km",
  },
  {
    name: "Average temp.",
    value: "16°c",
  },
];

const EarthPage = () => {
  return (
    <PlanetLayout
      title="Earth"
      planetProperties={planetProperties}
      layoutProperties={layoutProperties}
      sourceWikipedia="https://en.wikipedia.org/wiki/Mercury_(planet)"
    />
  );
};

export default EarthPage;
