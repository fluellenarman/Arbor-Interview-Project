import React from 'react'
import { useState, useMemo,useCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer, useLoadScript
} from  "@react-google-maps/api"
import './MyMapComp.css';



function MyMapsComp() {
  

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MY_MAP_KEY,
  })
  const center= useMemo(() => ({lat: 43, lng: -80}), []);

  if (!isLoaded) return <div>Loading...</div>;
  
  
  return (
    <div>MyMapsComp
      <GoogleMap 
        zoom={10} 
        center={center}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </div>
  )
}

export default MyMapsComp