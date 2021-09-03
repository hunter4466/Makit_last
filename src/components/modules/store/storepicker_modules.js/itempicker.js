import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildItem, swithItemPicker } from '../../../../redux/store/store';

const Itempicker = () => {
  const dispatch = useDispatch();
  const itemData = useSelector((state) => state.itemPickerReducer);

  const handleUpClick = (key, ref) => {
    const input = document.getElementById(ref);
    const allInput = document.querySelectorAll(`.${key}`);
    const allInputArray = [];
    allInput.forEach((e) => {
      allInputArray.push(parseInt(e.value, 10));
    });
    if (allInputArray.reduce((a, b) => a + b) < parseInt(itemData.content.indexes.cantidad, 10)) {
      input.value = parseInt(input.value, 10) + parseInt(itemData.content.indexes.factor, 10);
    }
  };

  const handleDownClick = (ref) => {
    const input = document.getElementById(ref);
    if (parseInt(input.value, 10) > 0) {
      input.value = parseInt(input.value, 10) - parseInt(itemData.content.indexes.factor, 10);
    }
  };
  const handleAddClick = (key) => {
    const nameTitle = document.querySelectorAll('#sub_item_name');
    const quantityInput = document.querySelectorAll(`.${key}`);
    const nameTitleArray = [];
    for (let i = 0; i < nameTitle.length; i += 1) {
      if (parseInt(quantityInput[i].value, 10) > 0) {
        nameTitleArray.push({
          name: nameTitle[i].innerHTML,
          quantity: parseInt(quantityInput[i].value, 10),
        });
      }
    }
    const objectForSend = {
      header: itemData.header,
      content: nameTitleArray,
    };
    dispatch(buildItem(objectForSend));
    dispatch(swithItemPicker(false));
  };
  return (
    <div>
      {itemData.content.content.map((innerdata) => (
        <div key={innerdata.nombre}>
          <h1 id="sub_item_name">{innerdata.nombre}</h1>
          <p>{innerdata.descripcion}</p>
          <div>
            <input className={itemData.content.name.split(' ').join('_')} id={innerdata.codename} type="number" defaultValue={0} />
            <div>
              <button type="button" onClick={() => { handleUpClick(itemData.content.name.split(' ').join('_'), innerdata.codename); }}>Up</button>
              <button type="button" onClick={() => { handleDownClick(innerdata.codename); }}>Down</button>
            </div>
          </div>
        </div>
      ))}
      <button type="button" onClick={() => { handleAddClick(itemData.content.name.split(' ').join('_')); }}>Aceptar</button>
    </div>
  );
};

export default Itempicker;
