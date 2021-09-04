import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  const handleAddProductToCart = () => {
    dispatch(resetStore());
    dispatch(buildProduct(productBuild));
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
              type="button"
              onClick={() => {
                handleClick2(data, data.name);
              }}
            >
              {data.name}
            </button>
          </div>
        ))}
        <Link to="/shop" type="button" onClick={() => handleAddProductToCart()}>Agregar al carrito</Link>
        <button type="button" onClick={() => handleBackBtn()}>Volver</button>
      </div>
    </div>
  );
};
export default Storepicker;
