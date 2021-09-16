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
    dispatch(switchShoppingCart(true));
    dispatch(switchoverallview(false));
    whatsorder(data);
    sessionStorage.removeItem('cartInfo');
    dispatch(clearCart());
  };
  const handleBackConfirmationBtn = () => {
    setConfirmation(false);
  };
  return (
    <div>
      {data.ordercontent.map((eh) => (
        <div key={`${eh.header}${miniIdGenerator()}`}>
          <div>
            <h1>{eh.header}</h1>
            {eh.content.map((ec) => (
              <div key={ec.header}>
                <h2>{ec.header}</h2>
                {ec.content.map((ecc) => (
                  ecc.quantity > 0
                    ? (
                      <h3 key={ecc.name}>
                        {ecc.name}
                        {' x '}
                        {ecc.quantity}
                      </h3>
                    ) : ''
                ))}
              </div>
            ))}
            <footer>{eh.price}</footer>
          </div>
        </div>
      ))}
      <h1>Entrega:</h1>
      <p>{data.orderdeliverystate ? `Envío a ${data.orderaddress}, ${data.orderinneradress}, ${data.orderaddressref}` : 'Recojo en el local'}</p>
      <h1>Monto de compra</h1>
      <h2>{`S/ ${parseFloat(data.orderproductsamount).toFixed(2)}`}</h2>
      <h1>Delivery</h1>
      <h2>{`S/ ${parseFloat(data.orderdeliveryamount).toFixed(2)}`}</h2>
      <h1>Total</h1>
      <h2>{`S/ ${parseFloat(data.orderamounttotal).toFixed(2)}`}</h2>
      <button type="button" onClick={() => { sendOrderFinalStep(); }}>Enviar pedido</button>
      <button className="back-btn" type="button" onClick={() => { handleBackBtn(); }}>Volver</button>
      <button type="button" onClick={() => { handleBackToCartBtn(); }}>Volver al carro</button>
      {confirmation
        ? (
          <div>
            <h1>
              Estas listo para enviar tu pedido?
            </h1>
            <h2>
              Todos los items en el carro desaparecerán al enviar tu pedido
            </h2>
            <button type="button" onClick={() => { handleContinueConfirmationBtn(); }}>Aceptar</button>
            <button className="back-btn" type="button" onClick={() => { handleBackConfirmationBtn(); }}>Volver</button>
          </div>
        )
        : ''}
    </div>
  );
};
export default Overallview;
