import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Storepicker from './storepicker';
import { setProductHeader } from '../../../redux/store/store';
import { buildProduct } from '../../../redux/cart/cart';

const Storesecondary = () => {
  const [secStoreState, setSecStoreState] = useState(false);
  const secondaryData = useSelector((state) => state.storeSecondaryReducer);
  const productBuild = useSelector(((state) => state.productBuildReducer));
  const dispatch = useDispatch();
  const handleClick = (data) => {
    if (secStoreState) {
      setSecStoreState(false);
    } else {
      dispatch(setProductHeader(data));
      setSecStoreState(true);
    }
  };
  const handleAddProductToCart = () => {
    dispatch(buildProduct(productBuild));
  };
  return (
    <div>
      <div>StoreSecondary</div>
      {secondaryData.map((data) => (
        <button key={data.nombre} type="button" onClick={() => { handleClick({ id: data.idproductos, header: data.nombre }); }}>{data.nombre}</button>
      ))}
      {secStoreState
        ? (
          <div>
            <Storepicker />
            <button type="button" onClick={() => handleClick()}>Close Picker</button>
            <button type="button" onClick={() => handleAddProductToCart()}>Accept All</button>
          </div>
        ) : false}
    </div>
  );
};
export default Storesecondary;
