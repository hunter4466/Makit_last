import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  modifypaymentmethod,
  switchaddresspicker,
  switchdeliverystatepicker,
  switchoverallview,
  switchpaymentpicker,
} from '../../../redux/cart/cart';

const Paymentpicker = () => {
  const dispatch = useDispatch();
  const deliverstate = useSelector((state) => state.cartSwitchReducer);
  const handleClick = (value) => {
    dispatch(modifypaymentmethod(value));
    dispatch(switchpaymentpicker(false));
    dispatch(switchoverallview(true));
  };
  const handleBackClick = () => {
    if (deliverstate.deliverystartpoint) {
      dispatch(switchaddresspicker(true));
      dispatch(switchpaymentpicker(false));
    } else {
      dispatch(switchdeliverystatepicker(true));
      dispatch(switchpaymentpicker(false));
    }
  };
  return (
    <div>
      <button type="button" onClick={() => { handleClick('Yape'); }}>Yape</button>
      <button type="button" onClick={() => { handleClick('Plin'); }}>Plin</button>
      <button type="button" onClick={() => { handleClick('PagoLink (VISA)'); }}>VISA (Pagolink)</button>
      <button type="button" onClick={() => { handleClick('PagoLink (Mastercard)'); }}>Mastercard (Pagolink)</button>
      <button type="button" onClick={() => { handleClick('PagoLink (Amex)'); }}>AMEX (Pagolink)</button>
      <button type="button" onClick={() => { handleClick('Transferencia BCP'); }}>Transferencia BCP</button>
      <button type="button" onClick={() => { handleClick('Transferencia BBVA'); }}>Transferencia BBVA</button>
      <button type="button" onClick={() => { handleBackClick(); }}>Volver</button>
    </div>
  );
};

export default Paymentpicker;
