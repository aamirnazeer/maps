import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
  Annotation,
} from "react-simple-maps";
import db from "./db.json";
import { Tooltip } from "react-tooltip";
import { useState } from "react";

export default function MapChart() {
  const [zoomLevel, setZoomLevel] = useState(1);
  return (
    <>
      <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
      <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
      <ComposableMap
        // width={500}
        projection="geoMercator"
        projectionConfig={{
          rotate: [0, 0, 0],
          scale: 60,
        }}
      >
        <ZoomableGroup
          center={[0, 0]}
          zoom={zoomLevel}
          onMoveStart={({ coordinates, zoom }) => {
            console.log(coordinates, zoom);
          }}
        >
          <Sphere stroke="#000000" strokeWidth={0.5} id="one" fill="#9bbff4" />
          <Geographies geography={db}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <a
                  key={geo.id}
                  data-tooltip-id="tooltip"
                  data-tooltip-content={
                    geo.properties.data
                      ? geo.properties.data
                      : geo.properties.name
                  }
                  data-tooltip-float={true}
                >
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      geo.properties.G21Member
                        ? "#ff7e00"
                        : geo.properties.Guest
                        ? "#00bdff"
                        : "#e9eaec"
                    }
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
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                  {/* <Annotation
                    subject={[2.3522, 48.8566]}
                    dx={-50}
                    dy={-10}
                    connectorProps={{
                      stroke: "black",
                      strokeWidth: 1,
                      strokeLinecap: "round",
                    }}
                  >
                    <text
                      y="-8"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="black"
                      fontSize={6}
                    >
                      {"Paris"}
                    </text>
                  </Annotation> */}
                </a>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      <Tooltip id="tooltip" />
    </>
  );
}
