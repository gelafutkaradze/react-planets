import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const links = [
  {
    name: "Mercury",
    path: "/mercury",
  },
  {
    name: "Venus",
    path: "/venus",
  },
  {
    name: "Earth",
    path: "/earth",
  },
  {
    name: "Mars",
    path: "/mars",
  },
  {
    name: "Jupiter",
    path: "/jupiter",
  },
  {
    name: "Saturn",
    path: "/saturn",
  },
  {
    name: "Uranus",
    path: "/uranus",
  },
  {
    name: "Neptune",
    path: "/neptune",
  },
];

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "28px" }}>THE PLANETS</h1>
          <div style={{ display: "flex", gap: "33px", alignItems: "center" }}>
            {links.map((link) => {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    textDecoration: "none",
                    color: "#fff",
                    opacity: "0.75",
                    textTransform: "uppercase",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
