import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  modifyusername,
  switchnamepicker,
  switchphonepicker,
  switchShoppingCart,
} from '../../../redux/cart/cart';
import storageAvailable from '../../utilities/localstorage';

const Namepicker = () => {
  const [username, setUserName] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (auth) => {
    if (auth) {
      dispatch(switchnamepicker(false));
      dispatch(switchphonepicker(true));
      dispatch(modifyusername(username));
    } else {
      setUserName(false);
    }
  };
  const handleClick2 = () => {
    const nameInput = document.getElementById('custom_name_input');
    dispatch(switchnamepicker(false));
    dispatch(switchphonepicker(true));
    dispatch(modifyusername(nameInput.value));
  };
  const handleChange = () => {
    const nameInput = document.getElementById('custom_name_input');
    if (storageAvailable('localStorage')) {
      localStorage.setItem('customName', JSON.stringify(nameInput.value));
    }
  };
  useEffect(() => {
    if (localStorage.getItem('customName')) {
      setUserName(JSON.parse(localStorage.getItem('customName')));
    }
  }, []);
  const handleBackClick = () => {
    dispatch(switchnamepicker(false));
    dispatch(switchShoppingCart(true));
  };
  return (
    <div>
      {username ? (
        <div>
          <h1>
            Tu nombre es
            {' '}
            {username}
            ?
          </h1>
          <button type="button" onClick={() => { handleClick(true); }}>Sí</button>
          <button type="button" onClick={() => { handleClick(false); }}>No</button>
          <button type="button" onClick={() => { handleBackClick(); }}>Volver</button>
        </div>
      ) : (
        <div>
          <h1>Indícanos tu nombre</h1>
          <input onChange={() => { handleChange(); }} type="text" maxLength="50" placeholder="Nombre" id="custom_name_input" />
          <button type="button" onClick={() => { handleClick2(); }}>Aceptar</button>
          <button type="button" onClick={() => { handleBackClick(); }}>Volver</button>
        </div>
      )}
    </div>
  );
};

export default Namepicker;
