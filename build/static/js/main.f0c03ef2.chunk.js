(this.webpackJsonpmakitappbeta=this.webpackJsonpmakitappbeta||[]).push([[0],{44:function(e,t,n){var r={"./alitas_box.png":45,"./alitas_x_4.png":46,"./alitas_x_8.png":47};function c(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=o,e.exports=c,c.id=44},45:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/alitas_box.15a13a9f.png"},46:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/alitas_x_4.e5eb9a49.png"},47:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/alitas_x_8.0159423e.png"},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(2),a=n(16),i=n.n(a),d=n(11),u=n(4),s=n(0),l=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(d.b,{to:"/store",children:" Toca aqu\xed y empieza tu pedido ya mismo!"})})},p=n(12),j=function(){return function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return"".concat(e()+e(),"-").concat(e())}()},b=function(){return function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return"".concat(e()+e(),"-").concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e()).concat(e()).concat(e())}()},h="REDUX/CART/REFRESH_CART",f="REDUX/CART/APPEND_PRODUCT_TO_CART",O="REDUX/CART/MODIFY_PRODUCT_FROM_CART",m="REDUX/CART/MODIFY_DELIVERY_STATE_AND_VALUE",y="REDUX/CART/MODIFY_USER_NAME",v="REDUX/CART/MODIFY_ORDER_DELIVERY_STATE",x="REDUX/CART/MODIFY_USER_PHONE",_="REDUX/CART/MODIFY_USER_ADDRESS_AND_REF",E="REDUX/CART/MODIFY_PAYMENT_METHOD",S="REDUX/CART/CLEAR_CART",R="REDUX/CART/SWITCH_SHOPPING_CART",g="REDUX/CART/SWITCH_CART_STORE_PICKER",C="REDUX/CART/SWITCH_CART_ITEM_PICKER",T="REDUX/CART/SWITCH_NAME_PICKER",k="REDUX/CART/SWITCH_PHONE_PICKER",I="REDUX/CART/SWITCH_DELIVERY_STATE_PICKER",A="REDUX/CART/SWITCH_ADDRESS_PICKER",D="REDUX/CART/SWITCH_PAYMENT_PICKER",N="REDUX/CART/RESET_CART_SWITCH",P="REDUX/CART/SWITCH_OVERALL_VIEW",U="REDUX/CART/START_POINT_SWITCH",X="REDUX/CART/FILL_CART_STORE_PICKER",M="REDUX/CART/CART_STORE_REPLACEMENT_ACTION",F="REDUX/CART/FILL_CART_ITEM_PICKER",w=function(){return{type:h}},H=function(e){return{type:m,payload:e}},L=function(e){return{type:y,payload:e}},V=function(e){return{type:x,payload:e}},B=function(e){return{type:_,payload:e}},q=function(e){return{type:R,payload:e}},W=function(e){return{type:g,payload:e}},Y=function(e){return{type:T,payload:e}},K=function(e){return{type:k,payload:e}},G=function(e){return{type:I,payload:e}},J=function(e){return{type:A,payload:e}},z=function(e){return{type:D,payload:e}},Q=function(e){return{type:C,payload:e}},Z=function(e){return{type:U,payload:e}},$=function(e){return{type:P,payload:e}},ee={shoppingcart:!0,cartstorepicker:!1,cartitempicker:!1,namepicker:!1,phonepicker:!1,deliverystatepicker:!1,addresspicker:!1,paymentpicker:!1,overallview:!1,deliverystartpoint:!1},te=function(){return sessionStorage.getItem("cartInfo")?JSON.parse(sessionStorage.getItem("cartInfo")):{ordercontent:[],customerid:null,customername:"Not Defined",customerphone:null,code:"order_".concat(b()),orderaddress:"Not Defined",orderinneradress:"Not Defined",orderaddressref:"Not Defined",orderproductsamount:null,orderamounttotal:null,orderdeliverystate:!1,orderdeliveryamount:0,paymentmethod:"Not Defined",orderregisterdate:null,orderdeliverdate:!1,orderregistertime:null,orderdelivertime:null}},ne=n(5),re=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartItemPickerReducer})),n=Object(r.useState)(!1),c=Object(ne.a)(n,2),a=c[0],i=c[1],d=Object(r.useState)(0),u=Object(ne.a)(d,2),l=u[0],p=u[1],j=Object(r.useState)(!1),b=Object(ne.a)(j,2),h=b[0],f=b[1];Object(r.useEffect)((function(){i(!0)}),[]);var O=function(n){if(a){for(var r=document.querySelectorAll("#sub_item_name"),c=document.querySelectorAll("#sub_item_description"),o=document.querySelectorAll(".".concat(n)),i=[],d=0;d<r.length;d+=1)i.push({name:r[d].innerHTML,quantity:parseInt(o[d].value,10),description:c[d].innerHTML,codename:o[d].id});var u={header:t.header,content:i,completed:!0,maxvalue:parseInt(t.maxvalue,10),factor:parseInt(t.factor,10)};e({type:M,payload:u}),e(Q(!1)),e(W(!0))}else f(!0)};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Elige tus"," ",t.header]}),t.content.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{id:"sub_item_name",children:e.name}),Object(s.jsx)("p",{id:"sub_item_description",children:e.description}),Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{className:"classident_".concat(t.header.split(" ").join("_")),id:e.codename,type:"number",defaultValue:e.quantity}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{type:"button",onClick:function(){!function(e,n){var r=document.getElementById(n),c=document.querySelectorAll(".".concat(e)),o=[];c.forEach((function(e){o.push(parseInt(e.value,10))}));var a=o.reduce((function(e,t){return e+t})),d=parseInt(t.maxvalue,10),u=parseInt(t.factor,10);a<d&&(p(l-u),r.value=parseInt(r.value,10)+u,d-a===u&&i(!0))}("classident_".concat(t.header.split(" ").join("_")),e.codename)},children:"Up"}),Object(s.jsx)("button",{type:"button",onClick:function(){!function(e){var n=document.getElementById(e),r=parseInt(t.factor,10);parseInt(n.value,10)>0&&(p(l+r),n.value=parseInt(n.value,10)-parseInt(t.factor,10),i(!1))}(e.codename)},children:"Down"})]})]})]},e.name)})),Object(s.jsx)("div",{children:a?"Completed":"Tienes ".concat(l," por escoger")}),h?Object(s.jsx)("div",{children:"Background"}):"",h?Object(s.jsx)("div",{onClick:function(){f(!1)},children:Object(s.jsx)("h1",{children:"Aun tienes items por escoger!"})}):"",Object(s.jsx)("button",{type:"button",onClick:function(){O("classident_".concat(t.header.split(" ").join("_")))},children:"Aceptar"}),Object(s.jsx)("button",{type:"button",onClick:function(){return e(Q(!1)),void e(W(!0))},children:"Volver"})]})},ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartStorePickerReducer})),n=function(t){e({type:F,payload:t}),e(W(!1)),e(Q(!0))},r=function(){return function(e){for(var t=0;t<e.length;t+=1)if(!e[t].completed)return!1;return!0}(t.content)&&(e({type:O,payload:t}),e(W(!1)),e(q(!0))),!1};return Object(s.jsx)("div",{className:"store_picker_container",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"StorePicker"}),t.content.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:e.completed?"completed_btn":"uncompleted_btn",type:"button",onClick:function(){n(e)},children:e.header})},e.header)})),Object(s.jsx)("button",{type:"button",onClick:function(){return r()},children:"Terminar modificaciones"}),Object(s.jsx)("button",{type:"button",onClick:function(){return e(W(!1)),void e(q(!0))},children:"Volver"})]})})},oe=function(e){var t;try{t=window[e];var n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(r){return r instanceof DOMException&&(22===r.code||1014===r.code||"QuotaExceededError"===r.name||"NS_ERROR_DOM_QUOTA_REACHED"===r.name)&&t&&0!==t.length}},ae=function(){var e=Object(r.useState)(!1),t=Object(ne.a)(e,2),n=t[0],c=t[1],a=Object(o.b)(),i=function(e){e?(a(Y(!1)),a(K(!0)),a(L(n))):c(!1)};Object(r.useEffect)((function(){localStorage.getItem("customName")&&c(JSON.parse(localStorage.getItem("customName")))}),[]);var d=function(){a(Y(!1)),a(q(!0))};return Object(s.jsx)("div",{children:n?Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Tu nombre es"," ",n,"?"]}),Object(s.jsx)("button",{type:"button",onClick:function(){i(!0)},children:"S\xed"}),Object(s.jsx)("button",{type:"button",onClick:function(){i(!1)},children:"No"}),Object(s.jsx)("button",{type:"button",onClick:function(){d()},children:"Volver"})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Ind\xedcanos tu nombre"}),Object(s.jsx)("input",{onChange:function(){!function(){var e=document.getElementById("custom_name_input");oe("localStorage")&&localStorage.setItem("customName",JSON.stringify(e.value))}()},type:"text",maxLength:"50",placeholder:"Nombre",id:"custom_name_input"}),Object(s.jsx)("button",{type:"button",onClick:function(){!function(){var e=document.getElementById("custom_name_input");a(Y(!1)),a(K(!0)),a(L(e.value))}()},children:"Aceptar"}),Object(s.jsx)("button",{type:"button",onClick:function(){d()},children:"Volver"})]})})},ie=function(){var e=Object(r.useState)(!1),t=Object(ne.a)(e,2),n=t[0],c=t[1],a=Object(o.b)(),i=function(e){e?(a(K(!1)),a(G(!0)),a(V(n))):c(!1)};Object(r.useEffect)((function(){localStorage.getItem("customPhone")&&c(JSON.parse(localStorage.getItem("customPhone")))}),[]);var d=function(){a(K(!1)),a(Y(!0))};return Object(s.jsx)("div",{children:n?Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Tu tel\xe9fono es el"," ",n,"?"]}),Object(s.jsx)("button",{type:"button",onClick:function(){i(!0)},children:"S\xed"}),Object(s.jsx)("button",{type:"button",onClick:function(){i(!1)},children:"No"}),Object(s.jsx)("button",{type:"button",onClick:function(){d()},children:"Volver"})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Ingresa tu tel\xe9fono"}),Object(s.jsx)("input",{onChange:function(){!function(){var e=document.getElementById("custom_phone_input");oe("localStorage")&&localStorage.setItem("customPhone",JSON.stringify(e.value))}()},type:"number",maxLength:"9",placeholder:"Tel\xe9fono",id:"custom_phone_input"}),Object(s.jsx)("button",{type:"button",onClick:function(){!function(){var e=document.getElementById("custom_phone_input");a(K(!1)),a(G(!0)),a(V(e.value))}()},children:"Aceptar"}),Object(s.jsx)("button",{type:"button",onClick:function(){d()},children:"Volver"})]})})},de=function(){var e=Object(o.b)(),t=function(t){e(G(!1)),t?(e(H({state:!0,value:"4.90"})),e(J(!0)),e(Z(!0))):(e(Z(!1)),e(H({state:!1,value:"0"})),e(z(!0)))};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Donde deseas tu pedido?"}),Object(s.jsx)("button",{type:"button",onClick:function(){t(!0)},children:"En mi domicilio (Delivery)"}),Object(s.jsx)("button",{type:"button",onClick:function(){t(!1)},children:"En el local (Recojo)"}),Object(s.jsx)("button",{type:"button",onClick:function(){e(G(!1)),e(K(!0))},children:"Volver"})]})},ue=n(18),se=n(25),le=n.n(se),pe=function(){var e=Object(r.useState)(!1),t=Object(ne.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(ne.a)(a,2),d=i[0],u=i[1],l=Object(r.useState)({}),p=Object(ne.a)(l,2),b=p[0],h=p[1],f=Object(o.b)(),O=function(e){if(e){var t=document.getElementById("custom_address_input"),n=document.getElementById("interior_address_input"),r=document.getElementById("custom_reference_input");f(J(!1)),f(z(!0)),f(B({address:t.value,inneradress:n.value,reference:r.value})),oe("localStorage")&&localStorage.setItem("customAddress",JSON.stringify({address:t.value,inneradress:n.value,reference:r.value}))}else c(!1)};Object(r.useEffect)((function(){localStorage.getItem("customAddress")&&(c(!0),h(JSON.parse(localStorage.getItem("customAddress"))))}),[]);var m=function(){f(J(!1)),f(G(!0))};return Object(s.jsx)("div",{children:n?Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Confirmamos tu direcci\xf3n en:"," ",b.address,", ",b.inneradress,", ",b.reference,"? "]}),Object(s.jsx)("button",{type:"button",onClick:function(){!function(){var e=JSON.parse(localStorage.getItem("customAddress"));f(B({address:e.address,inneradress:e.inneradress,reference:e.reference})),f(J(!1)),f(z(!0))}()},children:"S\xed"}),Object(s.jsx)("button",{type:"button",onClick:function(){O(!1)},children:"No"}),Object(s.jsx)("button",{type:"button",onClick:function(){m()},children:"Volver"})]}):Object(s.jsx)("div",{children:Object(s.jsx)(le.a,{value:d,onChange:u,onSelect:function(e){u(e)},children:function(e){var t=e.getInputProps,n=e.suggestions,r=e.getSuggestionItemProps,c=e.loading;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"A donde lo enviamos?"}),Object(s.jsx)("input",Object(ue.a)({id:"custom_address_input"},t({placeholder:"Direcci\xf3n"}))),Object(s.jsx)("input",{id:"interior_address_input",type:"text",maxLength:"144",placeholder:"Interior (Ejemplo: Mz B Lote 1, dpto 102)"}),Object(s.jsx)("input",{id:"custom_reference_input",type:"text",maxLength:"144",placeholder:"Referencia"}),Object(s.jsxs)("div",{children:[c?Object(s.jsx)("div",{children:"...cargando"}):null,n.map((function(e){var t={backgroundColor:e.active?"#41b6e6":"#fff"};return Object(s.jsx)("div",Object(ue.a)(Object(ue.a)({},r(e,{style:t})),{},{children:e.description}),j())}))]}),Object(s.jsx)("button",{type:"button",onClick:function(){O(!0)},children:"Aceptar"}),Object(s.jsx)("button",{type:"button",onClick:function(){m()},children:"Volver"})]})}})})})},je=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartSwitchReducer})),n=function(t){e({type:E,payload:t}),e(z(!1)),e($(!0))};return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{type:"button",onClick:function(){n("Yape")},children:"Yape"}),Object(s.jsx)("button",{type:"button",onClick:function(){n("Plin")},children:"Plin"}),Object(s.jsx)("button",{type:"button",onClick:function(){n("PagoLink (VISA)")},children:"VISA (Pagolink)"}),Object(s.jsx)("button",{type:"button",onClick:function(){n("PagoLink (Mastercard)")},children:"Mastercard (Pagolink)"}),Object(s.jsx)("button",{type:"button",onClick:function(){n("PagoLink (Amex)")},children:"AMEX (Pagolink)"}),Object(s.jsx)("button",{type:"button",onClick:function(){n("Transferencia BCP")},children:"Transferencia BCP"}),Object(s.jsx)("button",{type:"button",onClick:function(){n("Transferencia BBVA")},children:"Transferencia BBVA"}),Object(s.jsx)("button",{type:"button",onClick:function(){t.deliverystartpoint?(e(J(!0)),e(z(!1))):(e(G(!0)),e(z(!1)))},children:"Volver"})]})};function be(e){return e.charAt(0).toUpperCase()+e.slice(1)}var he=function(e){var t=[];t.push("Hola!%20Mi%20nombre%20es%20".concat(e.customername.split(" ").join("%20"),"!%0AEsta%20es%20mi%20orden%20para%20hoy:%0A")),e.ordercontent.forEach((function(e){t.push("%0A%20%20%20\ud83c\udf63%20".concat(be(e.header.split(" ").join("%20")),"%0A")),e.content.forEach((function(e){t.push("%0A%20%20%20%20%20%20-%20".concat(be(e.header.split(" ").join("%20")),"%0A")),e.content.forEach((function(e){e.quantity&&t.push("%20%20%20%20%20%20%20%20".concat(be(e.name.split(" ").join("%20")),"%20x%20").concat(e.quantity,"%0A"))}))})),t.push("%0A-------------------------------%0A")})),e.orderdeliverystate?t.push("%0A%20Lo%20deseo%20para%20delivery%0A%20a%20la%20direcci\xf3n:%0A%20*%20".concat(e.orderaddress.split(" ").join("%20"),"%0A%20Referencia:%0A%20*%20").concat(e.orderaddressref.split(" ").join("%20"))):t.push("%0A%20Deseo%20recogerlo%20en%20el%20local."),t.push("%0A%0A%20El%20monto%20total%20de%20mi%20orden%20es%20de%20S/%20".concat(parseFloat(e.orderamounttotal).toFixed(2),"%0A%0A")),e.orderdeliverystate,t.push("%20Incluido%20el%20recargo%20por%20env\xedo%20de%20S/%204.90%0A%0A"),t.push("%20Realizar\xe9%20el%20pago%20a%20trav\xe9s%20de:%20".concat(e.paymentmethod.split(" ").join("%20")));var n="https://api.whatsapp.com/send?phone=51994172125&text=".concat(t.reduce((function(e,t){return e+t})));window.open(n,"_blank").focus()},fe=function(){var e=Object(r.useState)(!1),t=Object(ne.a)(e,2),n=t[0],c=t[1],a=Object(o.b)(),i=Object(o.c)((function(e){return e.cartReducer}));Object(r.useEffect)((function(){a(w())}));var d=function(){a(q(!0)),a($(!1)),he(i),sessionStorage.removeItem("cartInfo"),a({type:S})};return Object(s.jsxs)("div",{children:[i.ordercontent.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:e.header}),e.content.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:e.header}),e.content.map((function(e){return e.quantity>0?Object(s.jsxs)("h3",{children:[e.name," x ",e.quantity]},e.name):""}))]},e.header)})),Object(s.jsx)("footer",{children:e.price})]})},"".concat(e.header).concat(j()))})),Object(s.jsx)("h1",{children:"Entrega:"}),Object(s.jsx)("p",{children:i.orderdeliverystate?"Env\xedo a ".concat(i.orderaddress,", ").concat(i.orderinneradress,", ").concat(i.orderaddressref):"Recojo en el local"}),Object(s.jsx)("h1",{children:"Monto de compra"}),Object(s.jsx)("h2",{children:"S/ ".concat(parseFloat(i.orderproductsamount).toFixed(2))}),Object(s.jsx)("h1",{children:"Delivery"}),Object(s.jsx)("h2",{children:"S/ ".concat(parseFloat(i.orderdeliveryamount).toFixed(2))}),Object(s.jsx)("h1",{children:"Total"}),Object(s.jsx)("h2",{children:"S/ ".concat(parseFloat(i.orderamounttotal).toFixed(2))}),Object(s.jsx)("button",{type:"button",onClick:function(){c(!0)},children:"Enviar pedido"}),Object(s.jsx)("button",{type:"button",onClick:function(){a(z(!0)),a($(!1))},children:"Volver"}),Object(s.jsx)("button",{type:"button",onClick:function(){a(q(!0)),a($(!1))},children:"Volver al carro"}),n?Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Estas listo para enviar tu pedido?"}),Object(s.jsx)("h2",{children:"Todos los items en el carro desaparecer\xe1n al enviar tu pedido"}),Object(s.jsx)("button",{type:"button",onClick:function(){d()},children:"Aceptar"}),Object(s.jsx)("button",{type:"button",onClick:function(){c(!1)},children:"Volver"})]}):""]})},Oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartReducer})),n=Object(o.c)((function(e){return e.cartSwitchReducer}));Object(r.useEffect)((function(){e(w())}));var c=function(t){e({type:X,payload:t}),e(W(!0)),e(q(!1))};return Object(s.jsxs)("div",{children:[n.shoppingcart?Object(s.jsx)("div",{children:t.ordercontent.length>0?Object(s.jsxs)("div",{children:[t.ordercontent.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("button",{type:"button",onClick:function(){c(e)},children:[Object(s.jsx)("h1",{children:e.header}),e.content.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:e.header}),e.content.map((function(e){return e.quantity>0?Object(s.jsxs)("h3",{children:[e.name," x ",e.quantity]},e.name):""}))]},e.header)})),Object(s.jsx)("footer",{children:e.price})]})},"".concat(e.header).concat(j()))})),Object(s.jsx)("h1",{children:"Monto de compra"}),Object(s.jsx)("h2",{children:"S/ ".concat(parseFloat(t.orderproductsamount).toFixed(2))}),Object(s.jsx)("h1",{children:"Delivery"}),Object(s.jsx)("h2",{children:"S/ ".concat(parseFloat(t.orderdeliveryamount).toFixed(2))}),Object(s.jsx)("h1",{children:"Total"}),Object(s.jsx)("h2",{children:"S/ ".concat(parseFloat(t.orderamounttotal).toFixed(2))}),Object(s.jsx)("button",{type:"button",onClick:function(){e(Y(!0)),e(q(!1))},children:"Enviar pedido"})]}):Object(s.jsx)(d.b,{to:"/store",children:" Aun no tienes items en tu carrito, ingresa aqu\xed y agr\xe9galos ya mismo!"})}):"",n.cartstorepicker?Object(s.jsx)(ce,{}):"",n.cartitempicker?Object(s.jsx)(re,{}):"",n.namepicker?Object(s.jsx)(ae,{}):"",n.phonepicker?Object(s.jsx)(ie,{}):"",n.deliverystatepicker?Object(s.jsx)(de,{}):"",n.addresspicker?Object(s.jsx)(pe,{}):"",n.paymentpicker?Object(s.jsx)(je,{}):"",n.overallview?Object(s.jsx)(fe,{}):""]})},me="REDUX/STORE/STORE/GET_CATEGORIES",ye="REDUX/STORE/STORE/TRIGGER_PRODUCTS",ve="REDUX/STORE/STORE/UPD_STORE",xe="REDUX/STORE/STORE/GET_PRODUCTS",_e="REDUX/STORE/GET_PICKER",Ee="REDUX/STORE/SEND_ITEM_CONTENT",Se="REDUX/STORE/APPEND_ITEM_TO_PRODUCT",Re="REDUX/STORE/BUILD_ITEM",ge="REDUX/STORE/SET_ITEM_HEADER",Ce="REDUX/STORE/SET_PRODUCT_HEADER",Te="REDUX/STORE/SET_FINAL_PRODUCT_HEADER",ke="REDUX/STORE/CHANGE_COMPLETED_STATE",Ie="REDUX/STORE/SWITCH_PARENT_STATE",Ae="REDUX/STORE/SWITCH_SECONDARY_STORE",De="REDUX/STORE/SWITCH_STORE_PICKER",Ne="REDUX/STORE/SWITCH_ITEM_PICKER",Pe="REDUX/STORE/RESET_STORE",Ue="REDUX/STORE/SWITCH_LOADING_1",Xe="REDUX/STORE/SWITCH_LOADING_2",Me="REDUX/STORE/SWITCH_LOADING_3",Fe=!0,we=[],He=function(e){return{type:Ie,payload:e}},Le=function(e){return{type:Ae,payload:e}},Ve=function(e){return{type:De,payload:e}},Be=function(e){return{type:Ne,payload:e}},qe=function(){return{type:Pe}},We=function(e){return{type:Ue,payload:e}},Ye=function(e){return{type:Xe,payload:e}},Ke=function(e){return{type:Me,payload:e}},Ge={parentState:!0,secondaryStoreState:!1,storePickerState:!1,itemPickerState:!1,loading1State:!1,loading2State:!1,loading3State:!1},Je=function(){var e=Object(o.c)((function(e){return e.storeSecondaryReducer})),t=Object(o.c)((function(e){return e.storeSwitchReducer})),c=Object(o.b)(),a=function(e){c(Le(!1)),c(Ve(!0)),c({type:Ce,payload:e})},i=function(e){var t={};return e.keys().map((function(n){t[n.replace("./","").replace(".png","")]=e(n)})),t}(n(44));Object(r.useEffect)((function(){console.log(i)}),[]);return Object(s.jsx)("div",{children:t.loading2State?Object(s.jsx)("div",{className:"loading_screen",children:Object(s.jsx)("h1",{children:"Cargando..."})}):Object(s.jsx)("div",{className:"store_main_container",children:Object(s.jsxs)("div",{children:[e.map((function(e){return Object(s.jsxs)("button",{className:"secondary_menu_btn",type:"button",onClick:function(){a({id:e.idproductos,header:e.nombre,price:e.precio})},children:[Object(s.jsxs)("div",{className:"secondary_btn_info_container",children:[Object(s.jsx)("div",{className:"secondary_btn_info_name",children:e.nombre}),Object(s.jsx)("div",{className:"secondary_btn_info_description",children:e.descripcion}),Object(s.jsxs)("div",{className:"secondary_btn_info_price",children:["S/",e.precio]}),Object(s.jsx)("img",{alt:"preview",src:i[e.imgname]})]}),Object(s.jsx)("div",{className:"button_bg"})]},e.nombre)})),Object(s.jsx)("button",{type:"button",onClick:function(){c(qe())},children:"Volver"})]})})})},ze=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.storePickerReducer})),n=Object(o.c)((function(e){return e.productBuildReducer})),r=Object(o.c)((function(e){return e.storeSwitchReducer})),c=function(t,n){e(Ve(!1)),e({type:ge,payload:n}),e(function(e){return{type:Ee,payload:e}}(t)),e(Be(!0))},a=function(e){for(var t=0;t<e.length;t+=1)if(!e[t].completed)return!1;return!0},i=function(){return!!a(t.content)&&(e(qe()),e({type:f,payload:n}),Object(s.jsx)(u.a,{push:!0,to:"/store"}))};return Object(s.jsx)("div",{children:r.loading3State?Object(s.jsx)("div",{className:"loading_screen",children:Object(s.jsx)("h1",{children:"Cargando..."})}):Object(s.jsx)("div",{className:"store_picker_container",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"StorePicker"}),t.content.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:e.completed?"completed_btn":"uncompleted_btn",type:"button",onClick:function(){c(e,e.name)},children:e.name})},e.name)})),a(t.content)?Object(s.jsx)(d.b,{to:"/shop",onClick:function(){return i()},children:"Agregar al carrito"}):Object(s.jsx)("button",{type:"button",onClick:function(){return i()},children:"Agregar al carrito"}),Object(s.jsx)("button",{type:"button",onClick:function(){return e(Ve(!1)),void e(Le(!0))},children:"Volver"})]})})})},Qe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.itemPickerReducer})),n=Object(o.c)((function(e){return e.productBuildReducer})),c=Object(r.useState)(!1),a=Object(ne.a)(c,2),i=a[0],d=a[1],u=Object(r.useState)(parseInt(t.content.indexes.cantidad,10)),l=Object(ne.a)(u,2),j=l[0],b=l[1],h=Object(r.useState)(!1),f=Object(ne.a)(h,2),O=f[0],m=f[1];Object(r.useEffect)((function(){if(function(){var e=Object(p.a)(n.content);if(e.length>0)for(var r=0;r<e.length;r+=1)if(e[r].header===t.header)return!0;return!1}()){for(var e=document.querySelectorAll(".".concat(t.content.name.split(" ").join("_"))),r=Object(p.a)(n.content),c=[],o=0;o<r.length;o+=1)r[o].header===t.header&&(c=r[o].content);for(var a=0;a<e.length;a+=1)for(var i=0;i<c.length;i+=1)t.content.content[a].nombre===c[i].name&&(e[a].value=c[i].quantity);b(0),d(!0)}}),[]);var y=function(n){if(i){for(var r=document.querySelectorAll("#sub_item_name"),c=document.querySelectorAll("#sub_item_description"),o=document.querySelectorAll(".".concat(n)),a=[],d=0;d<r.length;d+=1)a.push({name:r[d].innerHTML,quantity:parseInt(o[d].value,10),description:c[d].innerHTML,codename:o[d].id});var u={header:t.header,content:a,completed:!0,maxvalue:parseInt(t.content.indexes.cantidad,10),factor:parseInt(t.content.indexes.factor,10)};e({type:Re,payload:u}),e(Be(!1)),e(Ve(!0)),e(function(e){return{type:ke,payload:e}}(t.header))}else m(!0)};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Elige tus"," ",t.header]}),t.content.content.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{id:"sub_item_name",children:e.nombre}),Object(s.jsx)("p",{id:"sub_item_description",children:e.descripcion}),Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{className:t.content.name.split(" ").join("_"),id:e.codename,type:"number",defaultValue:0}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{type:"button",onClick:function(){!function(e,n){var r=document.getElementById(n),c=document.querySelectorAll(".".concat(e)),o=[];c.forEach((function(e){o.push(parseInt(e.value,10))}));var a=o.reduce((function(e,t){return e+t})),i=parseInt(t.content.indexes.cantidad,10),u=parseInt(t.content.indexes.factor,10);a<i&&(b(j-u),r.value=parseInt(r.value,10)+u,i-a===u&&d(!0))}(t.content.name.split(" ").join("_"),e.codename)},children:"Up"}),Object(s.jsx)("button",{type:"button",onClick:function(){!function(e){var n=document.getElementById(e),r=parseInt(t.content.indexes.factor,10);parseInt(n.value,10)>0&&(b(j+r),n.value=parseInt(n.value,10)-parseInt(t.content.indexes.factor,10),d(!1))}(e.codename)},children:"Down"})]})]})]},e.nombre)})),Object(s.jsx)("div",{children:i?"Completed":"Tienes ".concat(j," por escoger")}),O?Object(s.jsx)("div",{children:"Background"}):"",O?Object(s.jsx)("div",{onClick:function(){m(!1)},children:Object(s.jsx)("h1",{children:"Aun tienes items por escoger!"})}):"",Object(s.jsx)("button",{type:"button",onClick:function(){y(t.content.name.split(" ").join("_"))},children:"Aceptar"}),Object(s.jsx)("button",{type:"button",onClick:function(){return e(Be(!1)),void e(Ve(!0))},children:"Volver"})]})},Ze=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.storemainReducer})),n=Object(o.c)((function(e){return e.storeSwitchReducer})),c=[n.parentState,n.secondaryStoreState,n.storePickerState,n.itemPickerState],a=c[0],i=c[1],d=c[2],u=c[3];Object(r.useEffect)((function(){e({type:me,payload:[]}),e(He(!0))}),[]);var l=function(t){e(He(!1)),e({type:ye,payload:t}),e(Le(!0))};return Object(s.jsx)("div",{children:n.loading1State?Object(s.jsx)("div",{className:"loading_screen",children:Object(s.jsx)("h1",{children:"Cargando.."})}):Object(s.jsxs)("div",{children:[!!a&&Object(s.jsx)("div",{className:"store_main_container",children:t.map((function(e){return Object(s.jsxs)("button",{className:"main_menu_btn",type:"button",onClick:function(){return l(e.idcategorias)},children:[e.nombre,Object(s.jsx)("div",{className:"button_bg"})]},e.nombre)}))}),!!i&&Object(s.jsx)(Je,{}),!!d&&Object(s.jsx)(ze,{}),!!u&&Object(s.jsx)(Qe,{})]})})},$e=function(){return Object(s.jsx)("div",{id:"Products",children:Object(s.jsx)(Ze,{})})},et=n.p+"static/media/home.0411d56b.svg",tt=n.p+"static/media/store.63843cda.svg",nt=n.p+"static/media/shopping_cart.c1e827fb.svg",rt=function(){var e=Object(o.b)(),t=function(){e(qe()),e({type:N})};return Object(s.jsx)(d.a,{children:Object(s.jsxs)("div",{className:"page_holder",children:[Object(s.jsxs)("div",{className:"navigator_bar",children:[Object(s.jsx)(d.c,{className:"nav_item",onClick:function(){t()},to:"/home",children:Object(s.jsx)("img",{alt:"home",src:et})}),Object(s.jsx)(d.c,{className:"nav_item",onClick:function(){t()},to:"/store",children:Object(s.jsx)("img",{alt:"home",src:tt})}),Object(s.jsx)(d.c,{className:"nav_item",onClick:function(){t()},to:"/shop",children:Object(s.jsx)("img",{alt:"home",src:nt})})]}),Object(s.jsxs)(u.d,{children:[Object(s.jsx)(u.b,{path:"/home",children:Object(s.jsx)(l,{})}),Object(s.jsx)(u.b,{path:"/store",children:Object(s.jsx)($e,{})}),Object(s.jsx)(u.b,{path:"/shop",children:Object(s.jsx)(Oe,{})})]})]})})},ct=n(10),ot=n(26),at=n.n(ot),it=Object(ct.b)({storeSwitchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0,n={parentState:e.parentState,secondaryStoreState:e.secondaryStoreState,storePickerState:e.storePickerState,itemPickerState:e.itemPickerState,loading1State:e.loading1State,loading2State:e.loading2State,loading3State:e.loading3State};switch(t.type){case Ie:return n.parentState=t.payload,n;case Ae:return n.secondaryStoreState=t.payload,n;case De:return n.storePickerState=t.payload,n;case Ne:return n.itemPickerState=t.payload,n;case Ue:return n.loading1State=t.payload,n;case Xe:return n.loading2State=t.payload,n;case Me:return n.loading3State=t.payload,n;case Pe:return Ge;default:return e}},storemainReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case me:return e;case ve:return n;default:return e}},storeSecondaryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case ye:return we;case xe:return n;default:return e}},storePickerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=e,c=e.content,o=function(e){for(var t=0;t<c.length;t+=1)c[t].name===e&&(c[t].completed=!0)};switch(t.type){case Ce:return{header:n.header,price:n.price,content:[]};case _e:return r.content=n,{header:r.header,content:r.content,price:r.price};case ke:return o(t.payload),{header:r.header,content:c,price:r.price};default:return e}},itemPickerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case ge:return{header:n,content:[]};case Ee:return{header:e.header,content:n};default:return e}},itemBuildReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,n=e,r=t.payload;switch(t.type){case Re:return n.content=r,n;default:return e}},productBuildReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=function(){var t=Object(p.a)(e.content);if(t.length>0)for(var r=0;r<t.length;r+=1)if(t[r].header===n.header)return!0;return!1},c=function(t){for(var n=Object(p.a)(e.content),r=0;r<n.length;r+=1)n[r].header===t.header&&(n[r].content=t.content);return n};switch(t.type){case Te:return{header:t.payload.header,price:t.payload.price,code:b(),content:[]};case Se:return r()?{header:e.header,price:e.price,code:e.code,content:c(n)}:{header:e.header,price:e.price,code:e.code,content:[].concat(Object(p.a)(e.content),[n])};default:return e}},cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te(),t=arguments.length>1?arguments[1]:void 0,n=e.ordercontent,r=e,c=function(e){for(var t=0,n=0;n<e.length;n+=1)t=parseFloat(t)+parseFloat(e[n].price);return t};switch(t.type){case h:return e;case S:return{ordercontent:[],customerid:e.customerid,customername:e.customername,customerphone:e.customerphone,code:e.code,orderaddress:e.orderaddress,orderinneradress:e.orderinneradress,orderaddressref:e.orderaddressref,orderproductsamount:e.orderproductsamount,orderamounttotal:e.orderamounttotal,orderdeliverystate:e.orderdeliverystate,orderdeliveryamount:e.orderdeliveryamount,paymentmethod:e.paymentmethod,orderregisterdate:e.orderregisterdate,orderdeliverdate:e.orderdeliverdate,orderregistertime:e.orderregistertime,orderdelivertime:e.orderdelivertime};case f:return n.push(t.payload),r.ordercontent=n,r.orderproductsamount=c(n),r.orderamounttotal=c(n)+parseFloat(r.orderdeliveryamount),r;case O:return r.ordercontent=n.filter((function(e){return e.code!==t.payload.code})),r.ordercontent.push(t.payload),r;case m:return r.orderdeliverystate=t.payload.state,r.orderdeliveryamount=parseFloat(t.payload.value),r.orderamounttotal=c(n)+parseFloat(r.orderdeliveryamount),r;case y:return r.customername=t.payload,r;case v:return r.orderdeliverystate=t.payload,r;case x:return r.customerphone=t.payload,r;case _:return r.orderaddress=t.payload.address,r.orderinneradress=t.payload.inneradress,r.orderaddressref=t.payload.reference,r;case E:return r.paymentmethod=t.payload,r;default:return e}},cartSwitchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,n={shoppingcart:e.shoppingcart,cartstorepicker:e.cartstorepicker,cartitempicker:e.cartitempicker,namepicker:e.namepicker,phonepicker:e.phonepicker,deliverystatepicker:e.deliverystatepicker,addresspicker:e.addresspicker,paymentpicker:e.paymentpicker,overallview:e.overallview,deliverystartpoint:e.deliverystartpoint};switch(t.type){case R:return n.shoppingcart=t.payload,n;case g:return n.cartstorepicker=t.payload,n;case C:return n.cartitempicker=t.payload,n;case T:return n.namepicker=t.payload,n;case k:return n.phonepicker=t.payload,n;case I:return n.deliverystatepicker=t.payload,n;case A:return n.addresspicker=t.payload,n;case D:return n.paymentpicker=t.payload,n;case P:return n.overallview=t.payload,n;case U:return n.deliverystartpoint=t.payload,n;case N:return ee;default:return e}},cartStorePickerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=function(){for(var n=Object(p.a)(e.content),r=[],c=0;c<n.length;c+=1)n[c].header===t.payload.header?r.push(t.payload):r.push(n[c]);return r};switch(t.type){case X:return t.payload;case M:return{header:e.header,price:e.price,code:e.code,content:n()};default:return e}},cartItemPickerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return t.payload;default:return e}}}),dt=Object(ct.c)(Object(ct.a)((function(e){return function(t){return function(n){n.type===me&&Fe&&(e.dispatch(We(!0)),Fe=!1,fetch("/getCategories",{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:ve,payload:t})}))),t(n)}}})),Object(ct.a)((function(e){return function(t){return function(n){n.type===ye&&(e.dispatch(Ye(!0)),fetch("/getProdWithId/".concat(n.payload),{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:xe,payload:t})}))),t(n)}}})),Object(ct.a)((function(e){return function(t){return function(n){n.type===Ce&&(e.dispatch(Ke(!0)),fetch("/getItemWithId/".concat(n.payload.id),{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:_e,payload:t})}))),t(n)}}})),Object(ct.a)((function(e){return function(t){return function(n){var r;n.type===Re&&e.dispatch((r=n.payload,{type:Se,payload:r})),t(n)}}})),Object(ct.a)((function(e){return function(t){return function(n){var r;n.type===Ce&&e.dispatch((r={header:n.payload.header,price:n.payload.price},{type:Te,payload:r})),t(n)}}})),Object(ct.a)((function(e){return function(t){return function(n){n.type===ve?e.dispatch(We(!1)):n.type===xe?e.dispatch(Ye(!1)):n.type===_e&&e.dispatch(Ke(!1)),t(n)}}})),Object(ct.a)((function(e){return function(t){return function(n){(function(){var e=!1;return[h,f,O,m,y,v,x,_,E].forEach((function(t){n.type===t&&(e=!0)})),e})()&&sessionStorage.setItem("cartInfo",JSON.stringify(e.getState().cartReducer)),t(n)}}})),Object(ct.a)(at.a)),ut=Object(ct.d)(it,void 0,dt);n(48),n(49),n(50);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(o.a,{store:ut,children:Object(s.jsx)(rt,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f0c03ef2.chunk.js.map