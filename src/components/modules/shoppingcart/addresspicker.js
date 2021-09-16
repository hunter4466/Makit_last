/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PlacesAutocomplete, {
} from 'react-places-autocomplete';
import {
  modifyaddressandref,
  switchaddresspicker,
  switchdeliverystatepicker,
  switchpaymentpicker,
} from '../../../redux/cart/cart';
import storageAvailable from '../../utilities/localstorage';
import { miniIdGenerator } from '../../utilities/idgen';

const Addresspicker = () => {
  const [useradressactive, setActiveUserAdress] = useState(false);
  const [useraddress, setUserAddress] = useState('');
  const [userSavedAddress, setUserSavedAddress] = useState({});
  const dispatch = useDispatch();
  const handleSelect = (value) => {
    setUserAddress(value);
  };
  const handleClick = (auth) => {
    if (auth) {
      const addressInput = document.getElementById('custom_address_input');
      const interiorAddressInput = document.getElementById('interior_address_input');
      const refInput = document.getElementById('custom_reference_input');
      dispatch(switchaddresspicker(false));
      dispatch(switchpaymentpicker(true));
      dispatch(modifyaddressandref({
        address: addressInput.value,
        inneradress: interiorAddressInput.value,
        reference: refInput.value,
      }));
      if (storageAvailable('localStorage')) {
        localStorage.setItem('customAddress', JSON.stringify({
          address: addressInput.value,
          inneradress: interiorAddressInput.value,
          reference: refInput.value,
        }));
      }
    } else {
      setActiveUserAdress(false);
    }
  };
  const handleNextClick = () => {
    const values = JSON.parse(localStorage.getItem('customAddress'));
    dispatch(modifyaddressandref({
      address: values.address,
      inneradress: values.inneradress,
      reference: values.reference,
    }));
    dispatch(switchaddresspicker(false));
    dispatch(switchpaymentpicker(true));
  };
  useEffect(() => {
    if (localStorage.getItem('customAddress')) {
      setActiveUserAdress(true);
      setUserSavedAddress(JSON.parse(localStorage.getItem('customAddress')));
    }
  }, []);
  const handleBackBtn = () => {
    dispatch(switchaddresspicker(false));
    dispatch(switchdeliverystatepicker(true));
  };
  return (
    <div>
      {useradressactive ? (
        <div className="question_frame">
          <h1 className="question_title">
            Confirmamos tu dirección en:
            {' '}
            {userSavedAddress.address}
            {', '}
            {userSavedAddress.inneradress}
            {', '}
            {userSavedAddress.reference}
            {'? '}
          </h1>
          <button className="yes_no_btn" type="button" onClick={() => { handleNextClick(); }}>Sí</button>
          <button className="yes_no_btn" type="button" onClick={() => { handleClick(false); }}>No</button>
          <button className="back-btn" type="button" onClick={() => { handleBackBtn(); }}>Volver</button>
        </div>
      ) : (
        <div>
          <PlacesAutocomplete
            value={useraddress}
            onChange={setUserAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps, suggestions, getSuggestionItemProps, loading,
            }) => (
              <div className="question_frame">
                <h1 className="question_title">A donde lo enviamos?</h1>
                <textarea className="address_text_area" id="custom_address_input" {...getInputProps({ placeholder: 'Dirección' })} />
                <div>
                  {loading ? <div>...cargando</div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                    };
                    return (
                      <div
                        className="suggestion_list"
                        key={miniIdGenerator()}
                        {...getSuggestionItemProps(
                          suggestion,
                          { style },
                        )}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
                <input className="address_input" id="interior_address_input" type="text" maxLength="144" placeholder="Interior (Ejemplo: Mz B Lote 1, dpto 102)" />
                <textarea className="address_input" id="custom_reference_input" type="text" maxLength="144" placeholder="Referencia" />
                <button className="accept_btn" type="button" onClick={() => { handleClick(true); }}>Aceptar</button>
                <button className="back-btn" type="button" onClick={() => { handleBackBtn(); }}>Volver</button>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      )}
    </div>
  );
};

export default Addresspicker;
