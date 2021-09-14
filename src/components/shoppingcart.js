import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  switchShoppingCart,
  switchCartStorePicker,
  fillCartStorePicker,
  switchnamepicker,
  refreshcart,
} from '../redux/cart/cart';
import Cartitempicker from './modules/shoppingcart/cartitempicker';
import Cartstorepicker from './modules/shoppingcart/cartstorepicker';
import Namepicker from './modules/shoppingcart/namepicker';
import Phonepicker from './modules/shoppingcart/phonepicker';
import Deliverstatepicker from './modules/shoppingcart/deliverstatepicker';
import Addresspicker from './modules/shoppingcart/addresspicker';
import Paymentpicker from './modules/shoppingcart/paymentpicker';
import Overallview from './modules/shoppingcart/overallview';
import { miniIdGenerator } from './utilities/idgen';
// import whatsorder from './utilities/whatsorder';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartReducer); // data for send
  const switchState = useSelector((state) => state.cartSwitchReducer);
  useEffect(() => {
    dispatch(refreshcart());
  });
  const handleEditClick = (param) => {
    dispatch(fillCartStorePicker(param));
    dispatch(switchCartStorePicker(true));
    dispatch(switchShoppingCart(false));
  };
  const sendOrderStepOne = () => {
    dispatch(switchnamepicker(true));
    dispatch(switchShoppingCart(false));
  };
  return (
    <div>
      { switchState.shoppingcart ? (
        <div>
          {
      data.ordercontent.length > 0
        ? (
          <div>
            {data.ordercontent.map((eh) => (
              <div key={`${eh.header}${miniIdGenerator()}`}>
                <button type="button" onClick={() => { handleEditClick(eh); }}>
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
                </button>
              </div>
            ))}
            <h1>Monto de compra</h1>
            <h2>{`S/ ${parseFloat(data.orderproductsamount).toFixed(2)}`}</h2>
            <h1>Delivery</h1>
            <h2>{`S/ ${parseFloat(data.orderdeliveryamount).toFixed(2)}`}</h2>
            <h1>Total</h1>
            <h2>{`S/ ${parseFloat(data.orderamounttotal).toFixed(2)}`}</h2>
            <button type="button" onClick={() => { sendOrderStepOne(); }}>Enviar pedido</button>
          </div>

        ) : <Link to="/store"> Aun no tienes items en tu carrito, ingresa aquí y agrégalos ya mismo!</Link>
        }
        </div>
      ) : ''}
      {switchState.cartstorepicker ? <Cartstorepicker /> : ''}
      {switchState.cartitempicker ? <Cartitempicker /> : ''}
      {switchState.namepicker ? <Namepicker /> : ''}
      {switchState.phonepicker ? <Phonepicker /> : ''}
      {switchState.deliverystatepicker ? <Deliverstatepicker /> : ''}
      {switchState.addresspicker ? <Addresspicker /> : ''}
      {switchState.paymentpicker ? <Paymentpicker /> : ''}
      {switchState.overallview ? <Overallview /> : ''}
    </div>
  );
};
export default ShoppingCart;
