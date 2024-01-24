import React, { useState } from "react";
import { MainLayout } from "../components/main-layout";
import "./index.css";
import { Link } from "react-router-dom";
import { IconRedirect } from "../assets/icons/redirect";

export const PlanetLayout = ({
  planetProperties,
  layoutProperties,
  title,
  sourceWikipedia,
}) => {
  const [activeLayoutProperties, setActiveLayoutProperties] = useState(0);

  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="layout-grid">
          <div className="left-grid">
            {layoutProperties[activeLayoutProperties].icon}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              marginLeft: "20px",
            }}
          >
            <div className="right-grid">
              <h3 className="planet-title">{title}</h3>
              <p className="planet-description">
                {layoutProperties[activeLayoutProperties].description}
              </p>
              <p className="source-text">
                source :
                <span>
                  <Link to={sourceWikipedia} target="_blank">
                    <p className="wikipedia-text">wikipedia</p>
                  </Link>
                </span>
                <IconRedirect />
              </p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {layoutProperties.map((property, index) => {
                return (
                  <button
                    onClick={() => setActiveLayoutProperties(index)}
                    key={property.name}
                    className={`layout-switch-btn ${
                      index === activeLayoutProperties ? "active" : ""
                    }`}
                  >
                    <p style={{ opacity: "0.5" }}>0{index + 1}</p>
                    <p>{property.name}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            marginTop: "87px",
            marginLeft: "60px",
            marginRight: "60px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {planetProperties.map((property) => {
            return (
              <div key={property.name} className="layout-info-box">
                <p
                  style={{
                    fontSize: "11px",
                    opacity: "0.5",
                    fontFamily: "spartan",
                  }}
                >
                  {property.name}
                </p>
                <h5
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    fontFamily: "antonio",
                  }}
                >
                  {property.value}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};
