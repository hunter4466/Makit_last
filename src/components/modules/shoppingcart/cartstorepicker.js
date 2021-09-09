import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fillCartItemPicker,
  modifyProductFromCart,
  switchCartItemPicker,
  switchCartStorePicker,
  switchShoppingCart,
} from '../../../redux/cart/cart';

const Cartstorepicker = () => {
  const dispatch = useDispatch();
  const pickerData = useSelector((state) => state.cartStorePickerReducer);
  const handleClick = (info) => {
    dispatch(fillCartItemPicker(info));
    dispatch(switchCartStorePicker(false));
    dispatch(switchCartItemPicker(true));
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
      dispatch(modifyProductFromCart());
    }
    return false;
  };
  const handleBackBtn = () => {
    dispatch(switchCartStorePicker(false));
    dispatch(switchShoppingCart(true));
  };
  return (
    <div className="store_picker_container">
      <div>
        <div>StorePicker</div>
        {pickerData.content.map((data) => (
          <div key={data.header}>
            <button
              className={data.completed ? 'completed_btn' : 'uncompleted_btn'}
              type="button"
              onClick={() => {
                handleClick(data);
              }}
            >
              {data.header}
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddProductToCart()}>Termianr modificaciones</button>
        <button type="button" onClick={() => handleBackBtn()}>Volver</button>
      </div>
    </div>
  );
};
export default Cartstorepicker;
