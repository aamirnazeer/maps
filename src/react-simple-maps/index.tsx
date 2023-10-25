import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';
import db from './db.json';
import { Tooltip } from 'react-tooltip';

const fillColorFunc = (val: string | undefined) => {
  if (val === 'member') {
    return '#ff7e00';
  } else if (val === 'guest') {
    return '#00bdff';
  } else {
    return '#e9eaec';
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
    <p>${name}</p>
    <p>Population: ${population}</p>
    <p>GDP: ${gdp}</p>
  </div>
  `;
};

export default function MapChart() {
  return (
    <>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          rotate: [0, 0, 0],
          scale: 60,
        }}
      >
        <Sphere stroke="#000000" strokeWidth={0.5} id="one" fill="#9bbff4" />
        <Graticule stroke="#E4E5E6" strokeWidth={0.2} />
        <Geographies geography={db}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <a
                data-tooltip-id={
                  geo.properties.g20 !== undefined ? 'my-tooltip-data-html' : ''
                }
                data-tooltip-html={toolTipTemplate(geo.properties)}
                data-tooltip-float={true}
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
      </ComposableMap>
      <Tooltip id="my-tooltip-data-html" className="custom-tooltip" />
    </>
  );
}
