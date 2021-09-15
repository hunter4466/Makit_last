/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
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
  const switchState = useSelector((state) => state.storeSwitchReducer);
  const dispatch = useDispatch();
  const handleClick = (data) => {
    dispatch(switchSecondaryState(false));
    dispatch(switchStorePicker(true));
    dispatch(setProductHeader(data));
  };

  const HandleBackBtn = () => {
    dispatch(resetStore());
  };
  const importedPictures = (data) => {
    try {
      const photo = require(`../../../images/products/${data}.png`);
      return photo;
    } catch {
      return 'undefined';
    }
  };
  return (
    <div>
      {switchState.loading2State ? <div className="loading_screen"><h1>Cargando...</h1></div> : (
        <div className="store_main_container">
          <div>
            {secondaryData.map((data) => (
              <button key={data.nombre} className="secondary_menu_btn" type="button" onClick={() => { handleClick({ id: data.idproductos, header: data.nombre, price: data.precio }); }}>
                <div className="sec_men_preview_img_cont">
                  <img className="sec_men_preview_img" alt="preview" src={`.${importedPictures(data.imgname).default}`} />
                </div>
                <div className="secondary_btn_info_container">
                  <div className="secondary_btn_info_name"><p className="product_data">{data.nombre}</p></div>
                  <div className="secondary_btn_info_description"><p className="product_data">{data.descripcion}</p></div>
                  <div className="secondary_btn_info_price">
                    <p className="product_data">
                      S/
                      {data.precio}
                    </p>
                  </div>
                </div>
              </button>
            ))}
            <button className="back-btn" type="button" onClick={() => { HandleBackBtn(); }}>Volver</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Storesecondary;
