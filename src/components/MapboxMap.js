import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl";

//mapboxgl.accessToken = REACT_APP_MAPBOX_API_KEY;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGltYWRlbSIsImEiOiJjbDYwd3Q3OW0wMWNrM2pwbnc5NGk2eGo2In0.GxFLHa7q2lhtP18ui867gQ";
//test apikey
console.log(process.env.REACT_APP_MAPBOX_API_KEY, "API KEY");

export default function MapboxMap(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(37.61192);
  const [lat, setLat] = useState(55.76199);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <>
      <div id="map">
        <div ref={mapContainer} className="map" />
      </div>
    </>
  );
}
