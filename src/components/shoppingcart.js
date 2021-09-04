import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const data = useSelector((state) => state.cartReducer);
  return (
    <div>
      {data.map((eh) => (
        <div key={eh.header}>
          <h1>{eh.header}</h1>
          {eh.content.map((ec) => (
            <div key={ec.header}>
              <h2>{ec.header}</h2>
              {ec.content.map((ecc) => (
                <h3 key={ecc.name}>
                  {ecc.name}
                  {' x '}
                  {ecc.quantity}
                </h3>
              ))}
            </div>
          ))}
          <footer>{eh.price}</footer>
        </div>
      ))}
    </div>
  );
};
export default ShoppingCart;
