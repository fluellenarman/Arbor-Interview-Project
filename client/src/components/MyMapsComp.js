import React from 'react'
import { useState, useMemo,useCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer,
} from  "@react-google-maps/api"
function MyMapsComp() {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  const center= useMemo(() => ({lat: 43, lng: -80}), []);

  return (
    <div>MyMapsComp
      <GoogleMap 
        zoom={10} 
        center={center}
        mapContainerClassName="containerStyle"
      ></GoogleMap>
    </div>
  )
}

export default MyMapsComp