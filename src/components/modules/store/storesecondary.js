import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetStore,
  setProductHeader,
  switchSecondaryState,
  switchStorePicker,
} from '../../../redux/store/store';

const Storesecondary = () => {
  const secondaryData = useSelector((state) => state.storeSecondaryReducer);
  const dispatch = useDispatch();
  const handleClick = (data) => {
    dispatch(switchSecondaryState(false));
    dispatch(setProductHeader(data));
    dispatch(switchStorePicker(true));
  };
  const HandleBackBtn = () => {
    dispatch(resetStore());
  };
  return (
    <div className="store_secondary_container">
      <div>
        <div>StoreSecondary</div>
        {secondaryData.map((data) => (
          <button key={data.nombre} type="button" onClick={() => { handleClick({ id: data.idproductos, header: data.nombre, price: data.precio }); }}>{data.nombre}</button>
        ))}
        <button type="button" onClick={() => { HandleBackBtn(); }}>Volver</button>
      </div>
    </div>
  );
};
export default Storesecondary;
