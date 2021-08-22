import React, { useState, useEffect } from 'react';

const callBackendAPI = async () => {
  const response = await fetch('/getProducts');
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

const requestprodAPI = async (id) => {
  const response = await fetch(`/getProdWithId/${id}`);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body.data;
};

const Store = () => {
  const [CatProd, SetCatItems] = useState([]);
  const [ProdList, SetProdList] = useState([]);

  useEffect(() => {
    let mounted = true;
    callBackendAPI()
      .then((res) => {
        if (mounted) {
          SetCatItems(res.data.cat_prod);
        }
        return function cleanup() {
          mounted = false;
        };
      });
  });

  return (
    <div id="Products">
      <ul>
        {CatProd.map((array) => (<button type="button" onClick={async () => { requestprodAPI(array.idcategorias).then((res) => SetProdList(res)); }} key={array.nombre}>{array.nombre}</button>))}
      </ul>
      <div id="prod_list">
        {ProdList.map((array) => (<button type="button" key={array.nombre}>{array.nombre}</button>))}
      </div>
    </div>
  );
};

export default Store;
