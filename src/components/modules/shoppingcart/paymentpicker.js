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
    <div className="payment_section_container">
      <h1 className="payment_title">Selecciona un medio de pago</h1>
      <button className="payment_btn" type="button" onClick={() => { handleClick('Yape'); }}>Yape</button>
      <button className="payment_btn" type="button" onClick={() => { handleClick('Plin'); }}>Plin</button>
      <button className="payment_btn" type="button" onClick={() => { handleClick('PagoLink (VISA)'); }}>VISA (Pagolink)</button>
      <button className="payment_btn" type="button" onClick={() => { handleClick('PagoLink (Mastercard)'); }}>Mastercard (Pagolink)</button>
      <button className="payment_btn" type="button" onClick={() => { handleClick('PagoLink (Amex)'); }}>AMEX (Pagolink)</button>
      <button className="payment_btn" type="button" onClick={() => { handleClick('Transferencia BCP'); }}>Transferencia BCP</button>
      <button className="payment_btn" type="button" onClick={() => { handleClick('Transferencia BBVA'); }}>Transferencia BBVA</button>
      <button className="back-btn" type="button" onClick={() => { handleBackClick(); }}>Volver</button>
    </div>
  );
};

export default Paymentpicker;
