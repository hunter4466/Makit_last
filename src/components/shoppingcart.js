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
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  return (
    <div>
      { switchState.shoppingcart ? (
        <div className="shopping_cart_container">
          {
      data.ordercontent.length > 0
        ? (
          <div>
            <h1 className="cart_header_title">Mis productos</h1>
            {data.ordercontent.map((eh) => (
              <button className="cart_prod_btn" key={`${eh.header}${miniIdGenerator()}`} type="button" onClick={() => { handleEditClick(eh); }}>
                <h1 className="cart_prod_btn_title">{capitalizeFirstLetter(eh.header)}</h1>
                {eh.content.map((ec) => (
                  <div key={capitalizeFirstLetter(ec.header)}>
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
                <footer className="cart_prod_btn_footer">
                  <p className="cart_prod_btn_modify">Edita aquí</p>
                  <p className="cart_prod_btn_price">{`S/ ${eh.price}`}</p>
                </footer>
              </button>
            ))}
            <h1 className="shopping_cart_total_title">Total</h1>
            <h2 className="shopping_cart_total_price">{`S/ ${parseFloat(data.orderproductsamount).toFixed(2)}`}</h2>
            <button className="shopping_cart_first_send_btn" type="button" onClick={() => { sendOrderStepOne(); }}>Enviar pedido</button>
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
