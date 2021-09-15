/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartStoreReplacementAction, switchCartItemPicker, switchCartStorePicker } from '../../../redux/cart/cart';
// import { switchCartItemPicker, switchCartStorePicker } from '../../../redux/cart/cart';

const Cartitempicker = () => {
  const dispatch = useDispatch();
  const itemData = useSelector((state) => state.cartItemPickerReducer);
  const [completedFields, setCompleted] = useState(false);
  const [itemsCounter, setCounter] = useState(0);
  const [uncompleteAlert, setUncAlert] = useState(false);

  useEffect(() => {
    setCompleted(true);
  }, []);

  const handleUpClick = (key, ref) => {
    const input = document.getElementById(ref);
    const allInput = document.querySelectorAll(`.${key}`);
    const allInputArray = [];
    allInput.forEach((e) => {
      allInputArray.push(parseInt(e.value, 10));
    });
    const sumValue = allInputArray.reduce((a, b) => a + b);
    const maxValue = parseInt(itemData.maxvalue, 10);
    const factor = parseInt(itemData.factor, 10);
    if (sumValue < maxValue) {
      setCounter(itemsCounter - factor);
      input.value = parseInt(input.value, 10) + factor;
      if (maxValue - sumValue === factor) {
        setCompleted(true);
      }
    }
  };
  const handleDownClick = (ref) => {
    const input = document.getElementById(ref);
    const factor = parseInt(itemData.factor, 10);
    if (parseInt(input.value, 10) > 0) {
      setCounter(itemsCounter + factor);
      input.value = parseInt(input.value, 10) - parseInt(itemData.factor, 10);
      setCompleted(false);
    }
  };
  const handleAddClick = (key) => {
    if (completedFields) {
      const nameTitle = document.querySelectorAll('#sub_item_name');
      const nameDescr = document.querySelectorAll('#sub_item_description');
      const quantityInput = document.querySelectorAll(`.${key}`);
      const nameTitleArray = [];
      for (let i = 0; i < nameTitle.length; i += 1) {
        nameTitleArray.push({
          name: nameTitle[i].innerHTML,
          quantity: parseInt(quantityInput[i].value, 10),
          description: nameDescr[i].innerHTML,
          codename: quantityInput[i].id,
        });
      }
      const objectForSend = {
        header: itemData.header,
        content: nameTitleArray,
        completed: true,
        maxvalue: parseInt(itemData.maxvalue, 10),
        factor: parseInt(itemData.factor, 10),
      };
      dispatch(cartStoreReplacementAction(objectForSend));
      dispatch(switchCartItemPicker(false));
      dispatch(switchCartStorePicker(true));
    } else {
      setUncAlert(true);
    }
  };
  const handleBackBtn = () => {
    dispatch(switchCartItemPicker(false));
    dispatch(switchCartStorePicker(true));
  };
  const importedPictures = (data) => {
    try {
      const photo = require(`../../../images/items/${data}.png`);
      return photo;
    } catch {
      return 'undefined';
    }
  };
  return (
    <div className="item_picker_main_container">
      <h1 className="item_picker_title">
        Elige tus
        {' '}
        {itemData.header}
      </h1>
      {itemData.content.map((innerdata) => (
        <div className="description_container" key={innerdata.name}>
          <div className="description_sub_container">
            <div className="description_img_container">
              <img src={`.${importedPictures(innerdata.codename).default}`} alt="preview" />
            </div>
            <div className="description_text_container">
              <h1 className="item_name" id="sub_item_name">
                {innerdata.name}
              </h1>
              <p className="item_description" id="sub_item_description">{innerdata.description}</p>
              <div className="select_btns_container">
                <button className="item_down_btn" type="button" onClick={() => { handleDownClick(innerdata.codename); }}> </button>
                <input disabled className={`item_input classident_${itemData.header.split(' ').join('_')}`} id={innerdata.codename} type="number" defaultValue={innerdata.quantity} />
                <button className="item_up_btn" type="button" onClick={() => { handleUpClick(`classident_${itemData.header.split(' ').join('_')}`, innerdata.codename); }}> </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {completedFields ? <div className="counter counter-true">Estás listo!</div> : (
        <div className="counter counter-false">
          Aun tienes
          {' '}
          {itemsCounter}
          {' '}
          items por escoger
        </div>
      )}
      {uncompleteAlert ? (<div>Background</div>) : ''}
      {uncompleteAlert ? (<div onClick={() => { setUncAlert(false); }}><h1>Aun tienes items por escoger!</h1></div>) : ''}
      <button className="accept_btn" type="button" onClick={() => { handleAddClick(`classident_${itemData.header.split(' ').join('_')}`); }}>Aceptar</button>
      <button className="back-btn_store" type="button" onClick={() => handleBackBtn()}>Volver</button>
    </div>
  );
};

export default Cartitempicker;
