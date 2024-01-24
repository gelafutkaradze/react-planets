import React from "react";
import "./index.css";
import { PlanetLayout } from "./planet-layout";
import {
  IconUranus,
  IconUranusInternal,
  IconUranusStructure,
} from "../assets/planet-icons/uranus";

const layoutProperties = [
  {
    icon: <IconUranus />,
    name: "Overview",
    description:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
  },
  {
    icon: <IconUranusStructure />,
    name: "Internal Structure",
    description:
      "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
  },
  {
    icon: <IconUranusInternal />,
    name: "Surface Geology",
    description:
      "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
  },
];

const planetProperties = [
  {
    name: "Rotation time",
    value: "17.2 hours",
  },
  {
    name: "Revolution time",
    value: "84 years",
  },
  {
    name: "Radius",
    value: "25,362 km",
  },
  {
    name: "Average temp.",
    value: "-195°c",
  },
];

const UranusPage = () => {
  return (
    <PlanetLayout
      title="Earth"
      planetProperties={planetProperties}
      layoutProperties={layoutProperties}
      sourceWikipedia="https://en.wikipedia.org/wiki/Mercury_(planet)"
    />
  );
};

export default UranusPage;
