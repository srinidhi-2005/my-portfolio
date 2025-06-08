import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-16, -2, 0],
        center: [78.4867, 17.3850],
        scale: 700
      }}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#1F1C2C"
        stroke="#E4DE82"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[78.4867, 17.3850]}
        dx={-90}
        dy={90}
        connectorProps={{
          stroke: "whitesmoke",
          strokeWidth: 1.5,
          strokeLinecap: "round"
        }}
      >
        <text x="7" y="16" textAnchor="end" alignmentBaseline="middle" fill="whitesmoke">
          {"Hyderabad, IN, Asia"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;