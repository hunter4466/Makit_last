import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerProducts, triggerStore } from '../../../redux/store/store';
import Storesecondary from './storesecondary';

const Storemain = () => {
  const [secStoreState, setSecStoreState] = useState(false);
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.storemainReducer);

  useEffect(() => {
    dispatch(triggerStore([]));
  }, []);
  const handleClick = (key) => {
    if (secStoreState) {
      setSecStoreState(false);
    } else {
      dispatch(triggerProducts(key));
      setSecStoreState(true);
    }
  };
  return (
    <div>
      {productData.map((data) => (
        <button type="button" key={data.nombre} onClick={() => handleClick(data.idcategorias)}>{data.nombre}</button>
      ))}
      <div>
        {secStoreState
          ? (
            <div>
              <Storesecondary />
              <button type="button" onClick={() => handleClick()}>Close Secondary</button>
            </div>
          ) : false}
      </div>
    </div>
  );
};
export default Storemain;
