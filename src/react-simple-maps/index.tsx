import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
} from 'react-simple-maps';
import db from './db.json';
import { Tooltip } from 'react-tooltip';
import { useState } from 'react';

export default function MapChart() {
  const [zoomLevel, setZoomLevel] = useState(1);
  return (
    <>
      <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
      <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          rotate: [0, 0, 0],
          scale: 147,
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
          <Graticule stroke="#E4E5E6" strokeWidth={0.2} />
          <Geographies geography={db}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <a
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
                      geo.properties.G21Member === true ? '#dc3545' : '#ffffff'
                    }
                    stroke="#000000"
                    strokeWidth={0.1}
                    style={{
                      default: {
                        // fill: '#D6D6DA',
                        outline: 'none',
                      },
                      hover: {
                        // fill: '#F53',
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#E42',
                        outline: 'none',
                      },
                    }}
                  />
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
