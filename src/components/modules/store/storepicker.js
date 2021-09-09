import React from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  opentItemPicker,
  resetStore,
  setItemHeader,
  switchItemPicker,
  switchSecondaryState,
  switchStorePicker,
} from '../../../redux/store/store';
import { buildProduct } from '../../../redux/cart/cart';

const Storepicker = () => {
  const dispatch = useDispatch();
  const pickerData = useSelector((state) => state.storePickerReducer);
  const productBuild = useSelector(((state) => state.productBuildReducer));
  const handleClick2 = (info, header) => {
    dispatch(switchStorePicker(false));
    dispatch(setItemHeader(header));
    dispatch(opentItemPicker(info));
    dispatch(switchItemPicker(true));
  };
  const checkAll = (array) => {
    for (let i = 0; i < array.length; i += 1) {
      if (!array[i].completed) {
        return false;
      }
    }
    return true;
  };
  const handleAddProductToCart = () => {
    if (checkAll(pickerData.content)) {
      dispatch(resetStore());
      dispatch(buildProduct(productBuild));
      return (<Redirect push to="/store" />);
    }
    return false;
  };
  const handleBackBtn = () => {
    dispatch(switchStorePicker(false));
    dispatch(switchSecondaryState(true));
  };
  return (
    <div className="store_picker_container">
      <div>
        <div>StorePicker</div>
        {pickerData.content.map((data) => (
          <div key={data.name}>
            <button
              className={data.completed ? 'completed_btn' : 'uncompleted_btn'}
              type="button"
              onClick={() => {
                handleClick2(data, data.name);
              }}
            >
              {data.name}
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddProductToCart()}>Agregar al carrito</button>
        <button type="button" onClick={() => handleBackBtn()}>Volver</button>
      </div>
    </div>
  );
};
export default Storepicker;
