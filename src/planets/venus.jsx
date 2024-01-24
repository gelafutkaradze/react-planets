import React from "react";
import "./index.css";
import { PlanetLayout } from "./planet-layout";
import {
  IconVenus,
  IconVenusInternal,
  IconVenusStructure,
} from "../assets/planet-icons/venus";

const layoutProperties = [
  {
    icon: <IconVenus />,
    name: "Overview",
    description:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
  },
  {
    icon: <IconVenusStructure />,
    name: "Internal Structure",
    description:
      "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
  },
  {
    icon: <IconVenusInternal />,
    name: "Surface Geology",
    description:
      "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
  },
];

const planetProperties = [
  {
    name: "Rotation time",
    value: "243 days",
  },
  {
    name: "Revolution time",
    value: "224.7 days",
  },
  {
    name: "Radius",
    value: "6,051.8 km",
  },
  {
    name: "Average temp.",
    value: "471°c",
  },
];

const VenusPage = () => {
  return (
    <PlanetLayout
      title="Venus"
      planetProperties={planetProperties}
      layoutProperties={layoutProperties}
      sourceWikipedia="https://en.wikipedia.org/wiki/Venus"
    />
  );
};

export default VenusPage;
