import React, { useEffect, useRef, useState } from "react";
import MapInit from "./External.hook";

export default function MapboxMap(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(37.61192);
  const [lat, setLat] = useState(55.76199);
  const [zoom, setZoom] = useState(3);

  MapInit({ mapContainer, lng, lat, zoom, map });

  return (
    <>
      <div id="map">
        <div ref={mapContainer} className="map" />
      </div>
    </>
  );
}
