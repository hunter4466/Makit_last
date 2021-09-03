import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Itempicker from './storepicker_modules.js/itempicker';
import { opentItemPicker, setItemHeader, swithItemPicker } from '../../../redux/store/store';

const Storepicker = () => {
  const dispatch = useDispatch();
  const [secStoreState, setSecStoreState] = useState(false);
  const pickerData = useSelector((state) => state.storePickerReducer);
  const secStoreState2 = useSelector((state) => state.switchReducer);
  const handleClick = () => {
    if (secStoreState) {
      setSecStoreState(false);
    } else {
      setSecStoreState(true);
    }
  };
  const handleClick2 = (info, header) => {
    if (secStoreState2) {
      dispatch(swithItemPicker(false));
    } else {
      dispatch(setItemHeader(header));
      dispatch(opentItemPicker(info));
      dispatch(swithItemPicker(true));
    }
  };
  return (
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
      {secStoreState2
        ? (
          <div>
            <Itempicker />
            <button type="button" onClick={() => handleClick2()}>Close Item Picker</button>
          </div>
        ) : false}
      {secStoreState
        ? (
          <div>
            <Storepicker />
            <button type="button" onClick={() => handleClick()}>Close Picker</button>
          </div>
        ) : false}
    </div>
  );
};
export default Storepicker;
