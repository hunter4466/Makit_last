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
    <div className="question_frame">
      <h1 className="question_title">Como deseas tu pedido?</h1>
      <button className="yes_no_btn" type="button" onClick={() => { handleDeliveryClick(true); }}>Delivery</button>
      <button className="yes_no_btn" type="button" onClick={() => { handleDeliveryClick(false); }}>Recojo</button>
      <button className="back-btn" type="button" onClick={() => { handleBackClick(); }}>Volver</button>
    </div>
  );
};

export default Deliverstatepicker;
