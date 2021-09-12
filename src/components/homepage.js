/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const HomePage = () => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  })
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    console.log(results);
  };

  return (
    <div>
      <Link to="/store"> Toca aquí y empieza tu pedido ya mismo!</Link>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({
          getInputProps, suggestions, getSuggestionItemProps, loading,
        }) => (
          <div>
            <p>
              Latitude:
              {coordinates.lat}
            </p>
            <p>
              Longitude:
              {coordinates.lng}
            </p>
            <iframe title="My Adress" id="em_map" src={`https://www.google.com/maps/d/u/0/embed?mid=1Cxx3AkFIooxPPzxtmM-rmo0w_egA51RS&ll=${coordinates.lat}%2C${coordinates.lng}&z=14`} width="300" height="250" />
            <input {...getInputProps({ placeholder: 'Type address' })} />
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                }
              return (
                <div {...getSuggestionItemProps(
                suggestion,
                { style },
                )}
                >
                  {suggestion.description}
                </div>
)
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

    </div>
  );
};
export default HomePage;
// https://maps.googleapis.com/maps/api/js?key=AIzaSyA4gO4y4GUGVf3deiUQkiHdGsD2LcIVAoc&libraries=places&callback=initMap&channel=GMPSB_addressselection_v1_cAB
