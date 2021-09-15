/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  buildItem,
  changeCompletedState,
  switchItemPicker,
  switchStorePicker,
} from '../../../redux/store/store';

const Itempicker = () => {
  const dispatch = useDispatch();
  const itemData = useSelector((state) => state.itemPickerReducer);
  const productBuild = useSelector((state) => state.productBuildReducer);
  const [completedFields, setCompleted] = useState(false);
  const [itemsCounter, setCounter] = useState(parseInt(itemData.content.indexes.cantidad, 10));
  const [uncompleteAlert, setUncAlert] = useState(false);
  const tester = () => {
    const arrayToTest = [...productBuild.content];
    if (arrayToTest.length > 0) {
      for (let i = 0; i < arrayToTest.length; i += 1) {
        if (arrayToTest[i].header === itemData.header) {
          return true;
        }
      }
    }
    return false;
  };
  useEffect(() => {
    if (tester()) {
      const allInputs = document.querySelectorAll(`.${itemData.content.name.split(' ').join('_')}`);
      const arrayToSample = [...productBuild.content];
      let allPreviousValues = [];
      for (let i = 0; i < arrayToSample.length; i += 1) {
        if (arrayToSample[i].header === itemData.header) {
          allPreviousValues = arrayToSample[i].content;
        }
      }
      for (let x = 0; x < allInputs.length; x += 1) {
        for (let i = 0; i < allPreviousValues.length; i += 1) {
          if (itemData.content.content[x].nombre === allPreviousValues[i].name) {
            allInputs[x].value = allPreviousValues[i].quantity;
          }
        }
      }
      setCounter(0);
      setCompleted(true);
    }
  }, []);
  const handleUpClick = (key, ref) => {
    const input = document.getElementById(ref);
    const allInput = document.querySelectorAll(`.${key}`);
    const allInputArray = [];
    allInput.forEach((e) => {
      allInputArray.push(parseInt(e.value, 10));
    });
    const sumValue = allInputArray.reduce((a, b) => a + b);
    const maxValue = parseInt(itemData.content.indexes.cantidad, 10);
    const factor = parseInt(itemData.content.indexes.factor, 10);
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
    const factor = parseInt(itemData.content.indexes.factor, 10);
    if (parseInt(input.value, 10) > 0) {
      setCounter(itemsCounter + factor);
      input.value = parseInt(input.value, 10) - parseInt(itemData.content.indexes.factor, 10);
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
        maxvalue: parseInt(itemData.content.indexes.cantidad, 10),
        factor: parseInt(itemData.content.indexes.factor, 10),
      };
      dispatch(buildItem(objectForSend));
      dispatch(switchItemPicker(false));
      dispatch(switchStorePicker(true));
      dispatch(changeCompletedState(itemData.header));
    } else {
      setUncAlert(true);
    }
  };
  const handleBackBtn = () => {
    dispatch(switchItemPicker(false));
    dispatch(switchStorePicker(true));
  };
  return (
    <div>
      <h1>
        Elige tus
        {' '}
        {itemData.header}
      </h1>
      {itemData.content.content.map((innerdata) => (
        <div key={innerdata.nombre}>
          <h1 id="sub_item_name">
            {innerdata.nombre}
          </h1>
          <p id="sub_item_description">{innerdata.descripcion}</p>
          <div>
            <input className={itemData.content.name.split(' ').join('_')} id={innerdata.codename} type="number" defaultValue={0} />
            <div>
              <button type="button" onClick={() => { handleUpClick(itemData.content.name.split(' ').join('_'), innerdata.codename); }}>Up</button>
              <button type="button" onClick={() => { handleDownClick(innerdata.codename); }}>Down</button>
            </div>
          </div>
        </div>
      ))}
      <div>{completedFields ? 'Completed' : `Tienes ${itemsCounter} por escoger`}</div>
      {uncompleteAlert ? (<div>Background</div>) : ''}
      {uncompleteAlert ? (<div className="alert_bg" onClick={() => { setUncAlert(false); }}><button type="button" className="alert_btn">Aun tienes items por escoger! Toca aquí para volver</button></div>) : ''}
      <button type="button" onClick={() => { handleAddClick(itemData.content.name.split(' ').join('_')); }}>Aceptar</button>
      <button className="back-btn" type="button" onClick={() => handleBackBtn()}>Volver</button>
    </div>
  );
};

export default Itempicker;
