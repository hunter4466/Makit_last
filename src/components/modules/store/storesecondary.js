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
import alitas_box from '../../../images/products/alitas_box.png';
import alitas_x_4 from '../../../images/products/alitas_x_4.png';
import alitas_x_8 from '../../../images/products/alitas_x_8.png';
import combinado from '../../../images/products/combinado.png';
import crispy_pickles_x_10 from '../../../images/products/crispy_pickles_x_10.png';
import doble_duo from '../../../images/products/doble_duo.png';
import duo_gohan from '../../../images/products/duo_gohan.png';
import duo_power from '../../../images/products/duo_power.png';
import duo from '../../../images/products/duo.png';
import entre_amigos from '../../../images/products/entre_amigos.png';
import familiar_1 from '../../../images/products/familiar_1.png';
import familiar_2 from '../../../images/products/familiar_2.png';
import familiar_3 from '../../../images/products/familiar_3.png';
import familiar_4 from '../../../images/products/familiar_4.png';
import gohan_rolls from '../../../images/products/gohan_rolls.png';
import gyosas_x_4 from '../../../images/products/gyosas_x_4.png';
import gyosas_x_8 from '../../../images/products/gyosas_x_8.png';
import mini_box from '../../../images/products/mini_box.png';
import ohashis from '../../../images/products/ohashis.png';
import salsa_adicional from '../../../images/products/salsa_adicional.png';
import tabla_sola from '../../../images/products/tabla_sola.png';
import trio from '../../../images/products/trio.png';

const images = {
  alitas_box,
  combinado,
  alitas_x_4,
  alitas_x_8,
  crispy_pickles_x_10,
  doble_duo,
  duo_gohan,
  duo_power,
  duo,
  entre_amigos,
  familiar_1,
  familiar_2,
  familiar_3,
  familiar_4,
  gohan_rolls,
  gyosas_x_4,
  gyosas_x_8,
  mini_box,
  ohashis,
  salsa_adicional,
  tabla_sola,
  trio,
};

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

  return (
    <div>
      {switchState.loading2State ? <div className="loading_screen"><h1>Cargando...</h1></div> : (
        <div className="store_main_container">
          <div>
            {secondaryData.map((data) => (
              <button key={data.nombre} className="secondary_menu_btn" type="button" onClick={() => { handleClick({ id: data.idproductos, header: data.nombre, price: data.precio }); }}>
                <div className="sec_men_preview_img_cont">
                  <img className="sec_men_preview_img" alt="preview" src={images[data.imgname]} />
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
