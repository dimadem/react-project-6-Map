import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import MapboxMap from "./components/MapboxMap";
import Button from "./components/ui/Button";
//import mapboxgl from "!mapbox-gl";
import "./index.css";

function App() {
  const [random, setRandom] = useState(Math.random());

  return (
    <>
      <Button onSetRandom={() => setRandom(Math.random())} />
      <MapboxMap />
    </>
  );
}

render(<App />, document.querySelector("#root"));
