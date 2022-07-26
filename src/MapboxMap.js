import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

export default function MapboxMap(props) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGltYWRlbSIsImEiOiJjbDYwd3Q3OW0wMWNrM2pwbnc5NGk2eGo2In0.GxFLHa7q2lhtP18ui867gQ";

  useEffect(() => {
    if (props.map.current) return; // initialize map only once
    props.map.current = new mapboxgl.Map({
      container: props.mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [props.lng, props.lat],
      zoom: props.zoom
    });
    return <div ref={props.mapContainer} className="map" />;
  });
}
