import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchShoppingCart, switchCartStorePicker, fillCartStorePicker } from '../redux/cart/cart';
import Cartitempicker from './modules/shoppingcart/cartitempicker';
import Cartstorepicker from './modules/shoppingcart/cartstorepicker';
import { miniIdGenerator } from './utilities/idgen';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartReducer);
  const switchState = useSelector((state) => state.cartSwitchReducer);
  const handleEditClick = (param) => {
    dispatch(fillCartStorePicker(param));
    dispatch(switchCartStorePicker(true));
    dispatch(switchShoppingCart(false));
  };
  return (
    <div>
      {
      switchState.shoppingcart
        ? (
          <div>
            {data.ordercontent.map((eh) => (
              <div key={`${eh.header}${miniIdGenerator()}`}>
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
                <button type="button" onClick={() => { handleEditClick(eh); }}>Editar</button>
              </div>
            ))}
            <h1>Monto de compra</h1>
            <h2>{`S/ ${data.orderproductsamount}`}</h2>
            <h1>Delivery</h1>
            <h2>{`S/ ${data.orderproductsamount}`}</h2>
          </div>

        ) : ''
        }
      {switchState.cartstorepicker ? <Cartstorepicker /> : ''}
      {switchState.cartitempicker ? <Cartitempicker /> : ''}
    </div>
  );
};
export default ShoppingCart;
