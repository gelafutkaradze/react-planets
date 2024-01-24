import React from "react";
import "./index.css";
import { PlanetLayout } from "./planet-layout";
import {
  IconNeptune,
  IconNeptuneInternal,
  IconNeptuneStructure,
} from "../assets/planet-icons/neptune";

const layoutProperties = [
  {
    icon: <IconNeptune />,
    name: "Overview",
    description:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
  },
  {
    icon: <IconNeptuneStructure />,
    name: "Internal Structure",
    description:
      "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
  },
  {
    icon: <IconNeptuneInternal />,
    name: "Surface Geology",
    description:
      "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
  },
];

const planetProperties = [
  {
    name: "Rotation time",
    value: "16.08 hours",
  },
  {
    name: "Revolution time",
    value: "164.79 years",
  },
  {
    name: "Radius",
    value: "24,622 km",
  },
  {
    name: "Average temp.",
    value: "-201°c",
  },
];

const NeptunePage = () => {
  return (
    <PlanetLayout
      title="Neptune"
      planetProperties={planetProperties}
      layoutProperties={layoutProperties}
      sourceWikipedia="https://en.wikipedia.org/wiki/Mercury_(planet)"
    />
  );
};

export default NeptunePage;
