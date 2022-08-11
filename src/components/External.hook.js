import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGltYWRlbSIsImEiOiJjbDYwd3Q3OW0wMWNrM2pwbnc5NGk2eGo2In0.GxFLHa7q2lhtP18ui867gQ";
//test apikey
console.log(process.env.REACT_APP_MAPBOX_API_KEY, "API KEY");

export default function MapInit({ mapContainer, lng, lat, zoom, map }) {
  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [lng, lat],
      zoom: zoom,
      projection: "globe",
    });
  }, []);
}
