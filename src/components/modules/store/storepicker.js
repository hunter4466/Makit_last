/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const pickerData = useSelector((state) => state.storePickerReducer);
  const productBuild = useSelector(((state) => state.productBuildReducer));
  const switchState = useSelector((state) => state.storeSwitchReducer);
  const handleClick2 = (info, header) => {
    dispatch(switchStorePicker(false));
    dispatch(setItemHeader(header));
    dispatch(opentItemPicker(info));
    dispatch(switchItemPicker(true));
  };

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

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
    setAlert(true);
    return false;
  };
  const handleBackBtn = () => {
    dispatch(switchStorePicker(false));
    dispatch(switchSecondaryState(true));
  };
  return (
    <div>
      {switchState.loading3State ? <div className="loading_screen"><h1>Cargando...</h1></div> : (
        <div className="store_picker_main_container">
          <div className="store_picker_container">
            <div className="store_picker_title">Selecciona tus productos</div>
            {pickerData.content.map((data) => (
              <button
                key={data.name}
                className={data.completed ? 'completed_btn' : 'uncompleted_btn'}
                type="button"
                onClick={() => {
                  handleClick2(data, data.name);
                }}
              >
                {capitalizeFirstLetter(data.name)}
              </button>
            ))}
            {checkAll(pickerData.content) ? (<Link className="add-btn-active" to="/shop" onClick={() => handleAddProductToCart()}><p>Agregar al carrito</p></Link>) : (<button className="add-btn-unactive" type="button" onClick={() => handleAddProductToCart()}>Agregar al carrito</button>) }
            <button className="back-btn" type="button" onClick={() => handleBackBtn()}>Volver</button>

          </div>
          {alert ? (
            <div className="alert_bg" onClick={() => { setAlert(false); }}>
              <button className="alert_btn" type="button" onClick={() => { setAlert(false); }}>
                <p>Ups, parece que aun tienes items por escoger!...</p>
                <p>Toca para continuar escogiendo</p>
              </button>
            </div>
          ) : ''}
        </div>
      )}

    </div>
  );
};
export default Storepicker;
