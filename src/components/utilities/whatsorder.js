const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const whatsorder = (order) => {
  const stringArray = [];
  stringArray.push(`Hola!%20Mi%20nombre%20es%20${order.customername.split(' ').join('%20')}!%20👋🏻😊%0AEsta%20es%20mi%20orden%20para%20hoy%20🍱:%0A`);
  order.ordercontent.forEach((elem) => {
    stringArray.push(`%0A%20%20%20🍣%20${capitalizeFirstLetter(elem.header.split(' ').join('%20'))}%0A`);
    elem.content.forEach((elemsub) => {
      stringArray.push(`%0A%20%20%20%20%20%20🥢%20${capitalizeFirstLetter(elemsub.header.split(' ').join('%20'))}%0A`);
      elemsub.content.forEach((elemsubsub) => {
        if (elemsubsub.quantity) { stringArray.push(`%20%20%20%20%20%20%20%20${capitalizeFirstLetter(elemsubsub.name.split(' ').join('%20'))}%20x%20${elemsubsub.quantity}%0A`); }
      });
    });
    stringArray.push('%0A-------------------------------%0A');
  });
  if (order.orderdeliverystate) {
    stringArray.push(`%0A%20Lo%20deseo%20para%20delivery%20🏍️%0A%20a%20la%20dirección:%0A%20*%20${order.orderaddress.split(' ').join('%20')}%0A%20Referencia:%0A%20*%20${order.orderaddressref.split(' ').join('%20')}`);
  } else { stringArray.push('%0A%20Deseo%20recogerlo%20en%20el%20local%20🏠'); }
  stringArray.push(`%0A%0A%20💰%20El%20monto%20total%20de%20mi%20orden%20es%20de%20S/%20${parseFloat(order.orderamounttotal).toFixed(2)}%0A%0A`);
  if (order.orderdeliveryamount > 0) { stringArray.push('%20Incluido%20el%20recargo%20por%20envío%20de%20S/%204.90%0A%0A'); } else { stringArray.push('%20Incluido%20el%20recargo%20por%20envío%20de%20S/%204.90%0A%0A'); }
  stringArray.push(`%20💳%20Realizaré%20el%20pago%20a%20través%20de:%20${order.paymentmethod.split(' ').join('%20')}`);
  stringArray.push(`%0A%0A%20📱%20Mi%20número%20de%20teléfono%20es%20el%20${order.customerphone}`);
  const urlPath = `https://api.whatsapp.com/send?phone=51994172125&text=${stringArray.reduce((a, b) => a + b)}`;
  window.location.href = urlPath;
};

export default whatsorder;
