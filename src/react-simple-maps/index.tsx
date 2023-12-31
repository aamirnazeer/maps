import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import db from "./db.json";
import { Tooltip } from "react-tooltip";
import { PatternLines } from "@vx/pattern";

const fillColorFunc = (val: string | undefined) => {
  if (val === "member") {
    return "#ff7e00";
  } else if (val === "guest") {
    return "#00bdff";
  } else if (val === "newMember") {
    return "url('#lines')";
  } else {
    return "#e9eaec";
  }
};

const toolTipTemplate = ({
  name,
  population,
  gdp,
}: {
  name: string;
  population: string;
  gdp: string;
}) => {
  return `
  <div>
    <h3>${name}</h1>
    <p>Population: ${population}</p>
    <p>GDP: ${gdp}</p>
  </div>
  `;
};

export default function MapChart() {
  return (
    <>
      <ComposableMap
        style={{
          width: "100%",
        }}
        projection="geoMercator"
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 120,
          center: [0, 35],
        }}
      >
        <PatternLines
          id="lines"
          height={6}
          width={6}
          stroke="#ff7e00"
          strokeWidth={1}
          background="#F6F0E9"
          orientation={["diagonal"]}
        />
        <Geographies geography={db} stroke="#FFF" strokeWidth={0.5}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <a
                data-tooltip-id={
                  geo.properties.g20 === "member" ||
                  geo.properties.g20 === "guest"
                    ? "my-tooltip-data-html"
                    : ""
                }
                data-tooltip-html={toolTipTemplate(geo.properties)}
                data-tooltip-float={true}
                data-tooltip-variant="light"
              >
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColorFunc(geo.properties.g20)}
                  stroke="#000000"
                  strokeWidth={0.1}
                  style={{
                    default: {
                      // fill: '#D6D6DA',
                      outline: "none",
                    },
                    hover: {
                      // fill: '#F53',
                      outline: "none",
                      strokeWidth:
                        geo.properties.g20 !== undefined ? "0.2" : "",
                    },
                    pressed: {
                      // fill: '#E42',
                      outline: "none",
                    },
                  }}
                />
              </a>
            ))
          }
        </Geographies>
      </ComposableMap>
      <Tooltip id="my-tooltip-data-html" className="custom-tooltip" />
    </>
  );
}
