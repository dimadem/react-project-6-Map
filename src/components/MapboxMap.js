import React, { useRef } from "react";
import useMapbox from "./useMapbox";

export default function MapboxMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 37.61192;
  const lat = 55.76199;
  const zoom = 3;

  useMapbox({ mapContainer, lng, lat, zoom, map });

  return (
    <>
      <div id="map">
        <div ref={mapContainer} className="map" />
      </div>
    </>
  );
}
