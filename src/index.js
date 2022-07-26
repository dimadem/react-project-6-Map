import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import "./index.css";
//import MapboxMap from "./MapboxMap";

function App() {
  const [random, setRandom] = useState(Math.random());

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(37.61192);
  const [lat, setLat] = useState(55.76199);
  const [zoom, setZoom] = useState(10);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGltYWRlbSIsImEiOiJjbDYwd3Q3OW0wMWNrM2pwbnc5NGk2eGo2In0.GxFLHa7q2lhtP18ui867gQ";

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <>
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div id="map">
        <div ref={mapContainer} className="map" />
      </div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
