import React from 'react';
import { useDispatch } from 'react-redux';
import {
  modifiDeliveryStateAndValue,
  setdeliverystartpointswitch,
  switchaddresspicker,
  switchdeliverystatepicker,
  switchpaymentpicker,
  switchphonepicker,
} from '../../../redux/cart/cart';

const Deliverstatepicker = () => {
  const dispatch = useDispatch();
  const handleDeliveryClick = (auth) => {
    dispatch(switchdeliverystatepicker(false));
    if (auth) {
      dispatch(modifiDeliveryStateAndValue({ state: true, value: '4.90' }));
      dispatch(switchaddresspicker(true));
      dispatch(setdeliverystartpointswitch(true));
    } else {
      dispatch(setdeliverystartpointswitch(false));
      dispatch(modifiDeliveryStateAndValue({ state: false, value: '0' }));
      dispatch(switchpaymentpicker(true));
    }
  };
  const handleBackClick = () => {
    dispatch(switchdeliverystatepicker(false));
    dispatch(switchphonepicker(true));
  };
  return (
    <div>
      <h1>Donde deseas tu pedido?</h1>
      <button type="button" onClick={() => { handleDeliveryClick(true); }}>En mi domicilio (Delivery)</button>
      <button type="button" onClick={() => { handleDeliveryClick(false); }}>En el local (Recojo)</button>
      <button type="button" onClick={() => { handleBackClick(); }}>Volver</button>
    </div>
  );
};

export default Deliverstatepicker;
