import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  switchParentState,
  switchSecondaryState,
  triggerProducts,
  triggerStore,
} from '../../../redux/store/store';
import Storesecondary from './storesecondary';
import Storepicker from './storepicker';
import Itempicker from './itempicker';

const Storemain = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.storemainReducer);
  const switchState = useSelector((state) => state.storeSwitchReducer);
  const [parentState,
    secondaryStoreState,
    storePickerState,
    itemPickerState] = [
    switchState.parentState,
    switchState.secondaryStoreState,
    switchState.storePickerState,
    switchState.itemPickerState,
  ];
  useEffect(() => {
    dispatch(triggerStore([]));
    dispatch(switchParentState(true));
  }, []);
  const handleClick = (key) => {
    dispatch(switchParentState(false));
    dispatch(triggerProducts(key));
    dispatch(switchSecondaryState(true));
  };
  return (
    <div className="store_main_container">
      {parentState
        ? (
          <div>
            {productData.map((data) => (
              <button type="button" key={data.nombre} onClick={() => handleClick(data.idcategorias)}>{data.nombre}</button>
            ))}
          </div>
        ) : false}

      {secondaryStoreState
        ? (
          <Storesecondary />
        ) : false}
      {storePickerState
        ? (
          <Storepicker />
        ) : false}
      {itemPickerState
        ? (
          <Itempicker />
        ) : false}
    </div>
  );
};
export default Storemain;
