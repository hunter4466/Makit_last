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
    <div>
      {switchState.loading1State ? <div className="loading_screen"><h1>Cargando..</h1></div> : (
        <div>
          {parentState
            ? (
              <div className="store_main_container">
                {productData.map((data) => (
                  <button className="main_menu_btn" type="button" key={data.nombre} onClick={() => handleClick(data.idcategorias)}>
                    {data.nombre}
                    <div className="button_bg" />
                  </button>
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
      )}
    </div>
  );
};
export default Storemain;
