import React from "react";
import "./index.css";
import { PlanetLayout } from "./planet-layout";
import {
  IconSaturn,
  IconSaturnInternal,
  IconSaturnStructure,
} from "../assets/planet-icons/saturn";

const layoutProperties = [
  {
    icon: <IconSaturn />,
    name: "Overview",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
  },
  {
    icon: <IconSaturnStructure />,
    name: "Internal Structure",
    description:
      "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
  },
  {
    icon: <IconSaturnInternal />,
    name: "Surface Geology",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
  },
];

const planetProperties = [
  {
    name: "Rotation time",
    value: "10.8 hours",
  },
  {
    name: "Revolution time",
    value: "29.46 years",
  },
  {
    name: "Radius",
    value: "58,232 km",
  },
  {
    name: "Average temp.",
    value: "-138°c",
  },
];

const SaturnPage = () => {
  return (
    <PlanetLayout
      title="Earth"
      planetProperties={planetProperties}
      layoutProperties={layoutProperties}
      sourceWikipedia="https://en.wikipedia.org/wiki/Mercury_(planet)"
    />
  );
};

export default SaturnPage;
