import React from "react";
import "./index.css";
import { PlanetLayout } from "./planet-layout";
import {
  IconMercury,
  IconMercuryInternal,
  IconMercuryStructure,
} from "../assets/planet-icons/mercury";

const layoutProperties = [
  {
    icon: <IconMercury />,
    name: "Overview",
    description:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
  },
  {
    icon: <IconMercuryStructure />,
    name: "Internal Structure",
    description:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
  },
  {
    icon: <IconMercuryInternal />,
    name: "Surface Geology",
    description:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
  },
];

const planetProperties = [
  {
    name: "Rotation time",
    value: "58.6 days",
  },
  {
    name: "Revolution time",
    value: "87.97 days",
  },
  {
    name: "Radius",
    value: "2,439.7 km",
  },
  {
    name: "Average temp.",
    value: "430°c",
  },
];

const MercuryPage = () => {
  return (
    <PlanetLayout
      title="Mercury"
      planetProperties={planetProperties}
      layoutProperties={layoutProperties}
      sourceWikipedia="https://en.wikipedia.org/wiki/Mercury_(planet)"
    />
  );
};

export default MercuryPage;
