import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  modifyuserphone,
  switchdeliverystatepicker,
  switchnamepicker,
  switchphonepicker,
} from '../../../redux/cart/cart';
import storageAvailable from '../../utilities/localstorage';

const Phonepicker = () => {
  const [userphone, setUserPhone] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (auth) => {
    if (auth) {
      dispatch(switchphonepicker(false));
      dispatch(switchdeliverystatepicker(true));
      dispatch(modifyuserphone(userphone));
    } else {
      setUserPhone(false);
    }
  };
  const handleClick2 = () => {
    const phoneInput = document.getElementById('custom_phone_input');
    dispatch(switchphonepicker(false));
    dispatch(switchdeliverystatepicker(true));
    dispatch(modifyuserphone(phoneInput.value));
  };
  const handleChange = () => {
    const phoneInput = document.getElementById('custom_phone_input');
    if (storageAvailable('localStorage')) {
      localStorage.setItem('customPhone', JSON.stringify(phoneInput.value));
    }
  };
  useEffect(() => {
    if (localStorage.getItem('customPhone')) {
      setUserPhone(JSON.parse(localStorage.getItem('customPhone')));
    }
  }, []);
  const handleBackClick = () => {
    dispatch(switchphonepicker(false));
    dispatch(switchnamepicker(true));
  };
  return (
    <div>
      {userphone ? (
        <div className="question_frame">
          <h1 className="question_title">
            Tu teléfono es el
            {' '}
            {userphone}
            ?
          </h1>
          <button className="yes_no_btn" type="button" onClick={() => { handleClick(true); }}>Sí</button>
          <button className="yes_no_btn" type="button" onClick={() => { handleClick(false); }}>No</button>
          <button className="back-btn" type="button" onClick={() => { handleBackClick(); }}>Volver</button>
        </div>
      ) : (
        <div className="question_frame">
          <h1 className="question_title">Ingresa tu teléfono</h1>
          <input className="question_input" onChange={() => { handleChange(); }} type="number" maxLength="9" placeholder="Teléfono" id="custom_phone_input" />
          <button className="accept_btn" type="button" onClick={() => { handleClick2(); }}>Aceptar</button>
          <button className="back-btn" type="button" onClick={() => { handleBackClick(); }}>Volver</button>
        </div>
      )}
    </div>
  );
};

export default Phonepicker;
