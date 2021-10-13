import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { miniIdGenerator } from '../../utilities/idgen';
import {
  switchShoppingCart,
  refreshcart,
  switchpaymentpicker,
  switchoverallview,
  clearCart,
} from '../../../redux/cart/cart';
import whatsorder from '../../utilities/whatsorder';
// import whatsorder from './utilities/whatsorder';

const Overallview = () => {
  const [confirmation, setConfirmation] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartReducer); // data for send
  useEffect(() => {
    dispatch(refreshcart());
  });
  const sendOrderFinalStep = () => {
    setConfirmation(true);
  };
  const handleBackBtn = () => {
    dispatch(switchpaymentpicker(true));
    dispatch(switchoverallview(false));
  };
  const handleBackToCartBtn = () => {
    dispatch(switchShoppingCart(true));
    dispatch(switchoverallview(false));
  };
  const handleContinueConfirmationBtn = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append('Cookie', 'sid=s%3ANMiPqcSo-1AHqC0CcWimMAGPIaJRfu0T.HHZXlPZLG25%2BGReNLNFVeb1WeUd31nlzhAaWK6w4Ucw');

    const urlencoded = new URLSearchParams();
    urlencoded.append('info', JSON.stringify(data));

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    fetch('/send_order_to_db', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    dispatch(switchShoppingCart(true));
    dispatch(switchoverallview(false));
    whatsorder(data);
    sessionStorage.removeItem('cartInfo');
    dispatch(clearCart());
  };
  const handleBackConfirmationBtn = () => {
    setConfirmation(false);
  };
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  return (
    <div>
      <h1 className="cart_header_title">Mi orden</h1>
      {data.ordercontent.map((eh) => (
        <div className="overall_order_container" key={`${eh.header}${miniIdGenerator()}`}>
          <div>
            <h1 className="cart_prod_btn_title">{capitalizeFirstLetter(eh.header)}</h1>
            {eh.content.map((ec) => (
              <div key={ec.header}>
                <h2 className="cart_prod_btn_item">{capitalizeFirstLetter(ec.header)}</h2>
                {ec.content.map((ecc) => (
                  ecc.quantity > 0
                    ? (
                      <h3 className="cart_prod_btn_sub_item" key={ecc.name}>
                        {ecc.name}
                        {' x '}
                        {ecc.quantity}
                      </h3>
                    ) : ''
                ))}
              </div>
            ))}
            <footer className="cart_prod_btn_price">{eh.price}</footer>
          </div>
        </div>
      ))}
      <div className="overall_detail_container">
        <h1 className="overall_detail_header">Entrega:</h1>
        <p className="overall_detail_description">{data.orderdeliverystate ? `Envío a ${data.orderaddress}, ${data.orderinneradress}, ${data.orderaddressref}` : 'Recojo en el local'}</p>
        <h1 className="overall_detail_header">Monto de compra:</h1>
        <h2 className="overall_detail_description">{`S/ ${parseFloat(data.orderproductsamount).toFixed(2)}`}</h2>
        <h1 className="overall_detail_header">Delivery:</h1>
        <h2 className="overall_detail_description">{`S/ ${parseFloat(data.orderdeliveryamount).toFixed(2)}`}</h2>
        <h1 className="overall_detail_header">Total:</h1>
        <h2 className="overall_detail_description">{`S/ ${parseFloat(data.orderamounttotal).toFixed(2)}`}</h2>
        <h1 className="overall_detail_header">Medio de pago:</h1>
        <h2 className="overall_detail_description">{data.paymentmethod}</h2>
      </div>
      <button className="sendorderbtn" type="button" onClick={() => { sendOrderFinalStep(); }}>Enviar pedido</button>
      <button className="back-btn" type="button" onClick={() => { handleBackBtn(); }}>Volver</button>
      <button className="back_to_Cart_btn" type="button" onClick={() => { handleBackToCartBtn(); }}>Volver al carro</button>
      {confirmation
        ? (
          <div className="alert_bg">
            <div className="alert_inner_bg">
              <h1 className="alert_header">
                Estas listo para enviar tu pedido?
              </h1>
              <h2 className="alert_sub_header">
                Todos los items en el carro desaparecerán al enviar tu pedido
              </h2>
              <button className="yes_no_btn" type="button" onClick={() => { handleContinueConfirmationBtn(); }}>Aceptar</button>
              <button className="yes_no_btn" type="button" onClick={() => { handleBackConfirmationBtn(); }}>Volver</button>
            </div>
          </div>
        )
        : ''}
    </div>
  );
};
export default Overallview;
