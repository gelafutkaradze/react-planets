import React from "react";
import "./index.css";
import { PlanetLayout } from "./planet-layout";
import {
  IconMars,
  IconMarsInternal,
  IconMarsStructure,
} from "../assets/planet-icons/mars";

const layoutProperties = [
  {
    icon: <IconMars />,
    name: "Overview",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet",
  },
  {
    icon: <IconMarsStructure />,
    name: "Internal Structure",
    description:
      "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
  },
  {
    icon: <IconMarsInternal />,
    name: "Surface Geology",
    description:
      "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of basalt, although parts are more silica-rich than typical basalt.",
  },
];

const planetProperties = [
  {
    name: "Rotation time",
    value: "1.03 days",
  },
  {
    name: "Revolution time",
    value: "1.88 years",
  },
  {
    name: "Radius",
    value: "3,389.5 km",
  },
  {
    name: "Average temp.",
    value: "−28°c",
  },
];

const MarsPage = () => {
  return (
    <PlanetLayout
      title="Mars"
      planetProperties={planetProperties}
      layoutProperties={layoutProperties}
      sourceWikipedia="https://en.wikipedia.org/wiki/Mercury_(planet)"
    />
  );
};

export default MarsPage;
