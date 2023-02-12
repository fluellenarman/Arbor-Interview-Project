import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    GoogleMap,
    DirectionsRenderer,
    DirectionsService,
    useLoadScript,
} from  "@react-google-maps/api"
import usePlacesAutocomplete, {
  getGeocode
} from "use-places-autocomplete"
import './MyMapComp.css';

function MyMapsComp() {
  const [directions, setDirections] = useState(null);
  const [start, setStart] = useState("5466 Hollings St");
  const [end, setEnd] = useState("7000 Hollister Ave");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MY_MAP_KEY,
    libraries: ["places", "directions"]
  })
  const center = useMemo(() => ({ lat: 34, lng: 119 }), []);

  async function runGeocoding(address) {
    const coordinates = await getGeocode({ address });
    console.log(coordinates);
    return coordinates;
  }

  const onMapClick = useCallback(async (e) => {
    if (!start || !end) {
      const coordinates = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      const address = await getGeocode(coordinates);
      if (!start) {
        setStart(address);
      } else {
        setEnd(address);
      }
    }
  }, [start, end, setStart, setEnd]);

  useEffect(() => {
    if (isLoaded && start && end) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: start,
          destination: end,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [isLoaded, start, end, setDirections]);

  return (
    <div>MyMapsComp
      {isLoaded && (
        <GoogleMap 
          zoom={10} 
          center={center}
          mapContainerClassName="map-container"
          onClick={onMapClick}
        >
          {directions && (
            <DirectionsRenderer directions={directions} />
          )}
        </GoogleMap>
      )}
    </div>
  );
}

export default MyMapsComp
