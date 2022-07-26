import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import MapboxMap from "./components/MapboxMap";
//import mapboxgl from "!mapbox-gl";
import "./index.css";

function App() {
  const [random, setRandom] = useState(Math.random());

  // const map = useRef(null);
  // const [lng, setLng] = useState(37.61192);
  // const [lat, setLat] = useState(55.76199);
  // const [zoom, setZoom] = useState(10);

  //  mapboxgl.accessToken =REACT_APP_MAPBOX_APIKEY;

  //   useEffect(() => {
  //     if (map.current) return; // initialize map only once
  //     map.current = new mapboxgl.Map({
  //       container: mapContainer.current,
  //       style: "mapbox://styles/mapbox/dark-v10",
  //       center: [lng, lat],
  //       zoom: zoom
  //     });
  //   });
  // <div ref={mapContainer} className="map" />

  return (
    <>
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <MapboxMap />
    </>
  );
}

render(<App />, document.querySelector("#root"));
