import React from 'react'
import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle, DirectionsService,
  MarkerClusterer, useLoadScript
} from "@react-google-maps/api"
import usePlacesAutocomplete, {
  getGeocode
} from "use-places-autocomplete"
import './MyMapComp.css';

function MyMapsComp() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MY_MAP_KEY,
    libraries: ["places"]
  });
  const center= useMemo(() => ({lat: 44, lng: -80}), []);
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Your code to use the Google Maps JavaScript API goes here
  // ...

  

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
    />
  );
}

export default MyMapsComp;
