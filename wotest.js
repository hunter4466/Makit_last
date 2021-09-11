const whatsorder = (order) => {
  const stringArray = [];
  stringArray.push(`Hola!%20Mi%20nombre%20es%20${order.customername}!%0AEsta%20es%20mi%20orden%20para%20hoy:%0A%0A`);
  order.ordercontent.forEach((elem) => {
    stringArray.push(`%20🍣%20${elem.header.split(' ').join('%20')}%0A`);
    elem.content.forEach((elemsub) => {
      stringArray.push(`%20%20*%20${elemsub.header.split(' ').join('%20')}%0A`);
      elemsub.content.forEach((elemsubsub) => {
        stringArray.push(`%20%20%20-%20${elemsubsub.name.split(' ').join('%20')}%20x%20${elemsubsub.quantity}%0A`);
      });
    });
  });
  window.location.href = `https://api.whatsapp.com/send?phone=51994172125&text=${stringArray.reduce((a, b) => a + b)}`;
};

export default whatsorder;
