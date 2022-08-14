import React, { useRef } from "react";
import useMapbox from "./useMapbox";

export default function MapboxMap() {
  //const mapContainer = useRef(null);
  const mapRef = useRef();
  const map = useRef(null);
  const lng = 37.61192;
  const lat = 55.76199;
  const zoom = 3;

  useMapbox({ mapRef, lng, lat, zoom, map });

  return (
    <>
      <div ref={mapRef} id="map" className="map">
      </div>
    </>
  );
}
