import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchShoppingCart, switchCartStorePicker, fillCartStorePicker } from '../redux/cart/cart';
import Cartitempicker from './modules/shoppingcart/cartitempicker';
import Cartstorepicker from './modules/shoppingcart/cartstorepicker';
import { miniIdGenerator } from './utilities/idgen';
import whatsorder from './utilities/whatsorder';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartReducer);
  const switchState = useSelector((state) => state.cartSwitchReducer);
  const handleEditClick = (param) => {
    dispatch(fillCartStorePicker(param));
    dispatch(switchCartStorePicker(true));
    dispatch(switchShoppingCart(false));
  };
  const sendOrderStepOne = (order) => {
    whatsorder(order);
    // window.location.href = 'https://api.whatsapp.com/send?phone=51994172125&text=New%20order%20%F0%9F%9B%B5%20(Kitchen+J+%26+S)%0A(%23%20E3E61)%0A%0A%E2%96%AA1+x+Mysore+Sada+Dosa%0D%0A%E2%96%AA1+x+Masala+Dosa%0D%0A%0A*Payable:%20INR%20168.00*%0A%0A*Customer%20details*%0AAsdf%0Aasdf%0Aasdf%0Aasdf%0A****%0A%0A-----------------------------%0A(Message%20for%20Customer)%0A%0APayment%20options%20can%20be%20selected%20%0A%20when%20creating%20your%20own%20WhatsOrder%20page';
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
            <button type="button" onClick={() => { sendOrderStepOne(data); }}>Enviar pedido</button>
          </div>

        ) : <Link to="/store"> Aun no tienes items en tu carrito, ingresa aquí y agrégalos ya mismo!</Link>
        }
        </div>
      ) : ''}
      {switchState.cartstorepicker ? <Cartstorepicker /> : ''}
      {switchState.cartitempicker ? <Cartitempicker /> : ''}
    </div>
  );
};
export default ShoppingCart;
