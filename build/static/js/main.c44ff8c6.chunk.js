(this.webpackJsonpmakitappbeta=this.webpackJsonpmakitappbeta||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(2),a=n(16),i=n.n(a),d=n(9),u=n(4),s=n(18),l=n(22),p=n.n(l),j=n(25),h=n(10),b=n(26),f=n.n(b),O=n(0),m=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(d.b,{to:"/store",children:" Toca aqu\xed y empieza tu pedido ya mismo!"}),Object(O.jsx)(f.a,{value:n,onChange:c,onSelect:o,children:function(e){var t=e.getInputProps,n=e.suggestions,r=e.getSuggestionItemProps,c=e.loading;return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",Object(s.a)({},t({placeholder:"Type address"}))),Object(O.jsxs)("div",{children:[c?Object(O.jsx)("div",{children:"...loading"}):null,n.map((function(e){var t={backgroundColor:e.active?"#41b6e6":"#fff"};return Object(O.jsx)("div",Object(s.a)(Object(s.a)({},r(e,{style:t})),{},{children:e.description}))}))]})]})}})]})},v=n(12),y=function(){return function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return"".concat(e()+e(),"-").concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e()).concat(e()).concat(e())}()},x="REDUX/CART/APPEND_PRODUCT_TO_CART",R="REDUX/CART/SWITCH_SHOPPING_CART",E="REDUX/CART/SWITCH_CART_STORE_PICKER",S="REDUX/CART/SWITCH_CART_ITEM_PICKER",T="REDUX/CART/FILL_CART_STORE_PICKER",_="REDUX/CART/MODIFY_PRODUCT_FROM_CART",g="REDUX/CART/FILL_CART_ITEM_PICKER",C="REDUX/CART/RESET_CART_SWITCH",A="REDUX/CART/CART_STORE_REPLACEMENT_ACTION",I="REDUX/CART/MODIFY_DELIVERY_STATE_AND_VALUE",k=function(e){return{type:R,payload:e}},D=function(e){return{type:E,payload:e}},P=function(e){return{type:S,payload:e}},U={shoppingcart:!0,cartstorepicker:!1,cartitempicker:!1},N={ordercontent:[],customerid:null,customername:"Nombre Prueba",customerphone:null,code:"order_".concat(y()),orderaddress:"Calle Prueba 615",orderaddressref:"Referencia de prueba",orderproductsamount:null,orderamounttotal:null,orderdeliverystate:!1,orderdeliveryamount:0,paymentmethod:"PagoLink VISA",orderregisterdate:null,orderdeliverdate:!1,orderregistertime:null,orderdelivertime:null},X=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartItemPickerReducer})),n=Object(r.useState)(!1),c=Object(h.a)(n,2),a=c[0],i=c[1],d=Object(r.useState)(0),u=Object(h.a)(d,2),s=u[0],l=u[1],p=Object(r.useState)(!1),j=Object(h.a)(p,2),b=j[0],f=j[1];Object(r.useEffect)((function(){i(!0)}),[]);var m=function(n){if(a){for(var r=document.querySelectorAll("#sub_item_name"),c=document.querySelectorAll("#sub_item_description"),o=document.querySelectorAll(".".concat(n)),i=[],d=0;d<r.length;d+=1)i.push({name:r[d].innerHTML,quantity:parseInt(o[d].value,10),description:c[d].innerHTML,codename:o[d].id});var u={header:t.header,content:i,completed:!0,maxvalue:parseInt(t.maxvalue,10),factor:parseInt(t.factor,10)};e({type:A,payload:u}),e(P(!1)),e(D(!0))}else f(!0)};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["Elige tus"," ",t.header]}),t.content.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{id:"sub_item_name",children:e.name}),Object(O.jsx)("p",{id:"sub_item_description",children:e.description}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{className:"classident_".concat(t.header.split(" ").join("_")),id:e.codename,type:"number",defaultValue:e.quantity}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{type:"button",onClick:function(){!function(e,n){var r=document.getElementById(n),c=document.querySelectorAll(".".concat(e)),o=[];c.forEach((function(e){o.push(parseInt(e.value,10))}));var a=o.reduce((function(e,t){return e+t})),d=parseInt(t.maxvalue,10),u=parseInt(t.factor,10);a<d&&(l(s-u),r.value=parseInt(r.value,10)+u,d-a===u&&i(!0))}("classident_".concat(t.header.split(" ").join("_")),e.codename)},children:"Up"}),Object(O.jsx)("button",{type:"button",onClick:function(){!function(e){var n=document.getElementById(e),r=parseInt(t.factor,10);parseInt(n.value,10)>0&&(l(s+r),n.value=parseInt(n.value,10)-parseInt(t.factor,10),i(!1))}(e.codename)},children:"Down"})]})]})]},e.name)})),Object(O.jsx)("div",{children:a?"Completed":"Tienes ".concat(s," por escoger")}),b?Object(O.jsx)("div",{children:"Background"}):"",b?Object(O.jsx)("div",{onClick:function(){f(!1)},children:Object(O.jsx)("h1",{children:"Aun tienes items por escoger!"})}):"",Object(O.jsx)("button",{type:"button",onClick:function(){m("classident_".concat(t.header.split(" ").join("_")))},children:"Aceptar"}),Object(O.jsx)("button",{type:"button",onClick:function(){return e(P(!1)),void e(D(!0))},children:"Volver"})]})},w=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartStorePickerReducer})),n=function(t){e({type:g,payload:t}),e(D(!1)),e(P(!0))},r=function(){return function(e){for(var t=0;t<e.length;t+=1)if(!e[t].completed)return!1;return!0}(t.content)&&(e({type:_,payload:t}),e(D(!1)),e(k(!0))),!1};return Object(O.jsx)("div",{className:"store_picker_container",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"StorePicker"}),t.content.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:e.completed?"completed_btn":"uncompleted_btn",type:"button",onClick:function(){n(e)},children:e.header})},e.header)})),Object(O.jsx)("button",{type:"button",onClick:function(){return r()},children:"Terminar modificaciones"}),Object(O.jsx)("button",{type:"button",onClick:function(){return e(D(!1)),void e(k(!0))},children:"Volver"})]})})};function M(e){return e.charAt(0).toUpperCase()+e.slice(1)}var F=function(e){var t=[];t.push("Hola!%20Mi%20nombre%20es%20".concat(e.customername.split(" ").join("%20"),"!%0AEsta%20es%20mi%20orden%20para%20hoy:%0A")),e.ordercontent.forEach((function(e){t.push("%0A%20%20%20\ud83c\udf63%20".concat(M(e.header.split(" ").join("%20")),"%0A")),e.content.forEach((function(e){t.push("%0A%20%20%20%20%20%20-%20".concat(M(e.header.split(" ").join("%20")),"%0A")),e.content.forEach((function(e){e.quantity&&t.push("%20%20%20%20%20%20%20%20".concat(M(e.name.split(" ").join("%20")),"%20x%20").concat(e.quantity,"%0A"))}))})),t.push("%0A-------------------------------%0A")})),t.push("%0A%20Lo%20deseo%20para%20delivery%0A%20a%20la%20direcci\xf3n:%0A%20*%20".concat(e.orderaddress.split(" ").join("%20"),"%0A%20Referencia:%0A%20*%20").concat(e.orderaddressref.split(" ").join("%20"))),t.push("%0A%0A%20El%20monto%20total%20de%20mi%20orden%20es%20de%20S/%20".concat(e.orderamounttotal,"%0A%0A")),e.orderdeliverystate&&t.push("%20Incluido%20el%20recargo%20por%20env\xedo%20de%20S/%204.90%0A%0A"),t.push("%20Realizar\xe9%20el%20pago%20a%20trav\xe9s%20de:%20".concat(e.paymentmethod.split(" ").join("%20")));var n="https://api.whatsapp.com/send?phone=51994172125&text=".concat(t.reduce((function(e,t){return e+t})));window.open(n,"_blank").focus()},q=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cartReducer})),n=Object(o.c)((function(e){return e.cartSwitchReducer})),r=function(t){e({type:T,payload:t}),e(D(!0)),e(k(!1))};return Object(O.jsxs)("div",{children:[n.shoppingcart?Object(O.jsx)("div",{children:t.ordercontent.length>0?Object(O.jsxs)("div",{children:[t.ordercontent.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("button",{type:"button",onClick:function(){r(e)},children:[Object(O.jsx)("h1",{children:e.header}),e.content.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:e.header}),e.content.map((function(e){return e.quantity>0?Object(O.jsxs)("h3",{children:[e.name," x ",e.quantity]},e.name):""}))]},e.header)})),Object(O.jsx)("footer",{children:e.price})]})},"".concat(e.header).concat(function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return"".concat(e()+e(),"-").concat(e())}()))})),Object(O.jsx)("h1",{children:"Monto de compra"}),Object(O.jsx)("h2",{children:"S/ ".concat(parseFloat(t.orderproductsamount).toFixed(2))}),Object(O.jsx)("h1",{children:"Delivery"}),Object(O.jsx)("h2",{children:"S/ ".concat(parseFloat(t.orderdeliveryamount).toFixed(2))}),Object(O.jsx)("h1",{children:"Total"}),Object(O.jsx)("h2",{children:"S/ ".concat(parseFloat(t.orderamounttotal).toFixed(2))}),Object(O.jsx)("button",{type:"button",onClick:function(){F(t)},children:"Enviar pedido"})]}):Object(O.jsx)(d.b,{to:"/store",children:" Aun no tienes items en tu carrito, ingresa aqu\xed y agr\xe9galos ya mismo!"})}):"",n.cartstorepicker?Object(O.jsx)(w,{}):"",n.cartitempicker?Object(O.jsx)(X,{}):""]})},H="REDUX/STORE/STORE/GET_CATEGORIES",L="REDUX/STORE/STORE/TRIGGER_PRODUCTS",B="REDUX/STORE/STORE/UPD_STORE",V="REDUX/STORE/STORE/GET_PRODUCTS",W="REDUX/STORE/GET_PICKER",G="REDUX/STORE/SEND_ITEM_CONTENT",K="REDUX/STORE/APPEND_ITEM_TO_PRODUCT",Y="REDUX/STORE/BUILD_ITEM",z="REDUX/STORE/SET_ITEM_HEADER",J="REDUX/STORE/SET_PRODUCT_HEADER",Q="REDUX/STORE/SET_FINAL_PRODUCT_HEADER",Z="REDUX/STORE/CHANGE_COMPLETED_STATE",$="REDUX/STORE/SWITCH_PARENT_STATE",ee="REDUX/STORE/SWITCH_SECONDARY_STORE",te="REDUX/STORE/SWITCH_STORE_PICKER",ne="REDUX/STORE/SWITCH_ITEM_PICKER",re="REDUX/STORE/RESET_STORE",ce=!0,oe=[],ae=function(e){return{type:$,payload:e}},ie=function(e){return{type:ee,payload:e}},de=function(e){return{type:te,payload:e}},ue=function(e){return{type:ne,payload:e}},se=function(){return{type:re}},le={parentState:!0,secondaryStoreState:!1,storePickerState:!1,itemPickerState:!1},pe=function(){var e=Object(o.c)((function(e){return e.storeSecondaryReducer})),t=Object(o.b)(),n=function(e){t(ie(!1)),t(de(!0)),t({type:J,payload:e})};return Object(O.jsx)("div",{className:"store_secondary_container",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"StoreSecondary"}),e.map((function(e){return Object(O.jsx)("button",{type:"button",onClick:function(){n({id:e.idproductos,header:e.nombre,price:e.precio})},children:e.nombre},e.nombre)})),Object(O.jsx)("button",{type:"button",onClick:function(){t(se())},children:"Volver"})]})})},je=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.storePickerReducer})),n=Object(o.c)((function(e){return e.productBuildReducer})),r=function(t,n){e(de(!1)),e({type:z,payload:n}),e(function(e){return{type:G,payload:e}}(t)),e(ue(!0))},c=function(e){for(var t=0;t<e.length;t+=1)if(!e[t].completed)return!1;return!0},a=function(){return!!c(t.content)&&(e(se()),e({type:x,payload:n}),Object(O.jsx)(u.a,{push:!0,to:"/store"}))};return Object(O.jsx)("div",{className:"store_picker_container",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"StorePicker"}),t.content.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:e.completed?"completed_btn":"uncompleted_btn",type:"button",onClick:function(){r(e,e.name)},children:e.name})},e.name)})),c(t.content)?Object(O.jsx)(d.b,{to:"/shop",onClick:function(){return a()},children:"Agregar al carrito"}):Object(O.jsx)("button",{type:"button",onClick:function(){return a()},children:"Agregar al carrito"}),Object(O.jsx)("button",{type:"button",onClick:function(){return e(de(!1)),void e(ie(!0))},children:"Volver"})]})})},he=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.itemPickerReducer})),n=Object(o.c)((function(e){return e.productBuildReducer})),c=Object(r.useState)(!1),a=Object(h.a)(c,2),i=a[0],d=a[1],u=Object(r.useState)(parseInt(t.content.indexes.cantidad,10)),s=Object(h.a)(u,2),l=s[0],p=s[1],j=Object(r.useState)(!1),b=Object(h.a)(j,2),f=b[0],m=b[1];Object(r.useEffect)((function(){if(function(){var e=Object(v.a)(n.content);if(e.length>0)for(var r=0;r<e.length;r+=1)if(e[r].header===t.header)return!0;return!1}()){for(var e=document.querySelectorAll(".".concat(t.content.name.split(" ").join("_"))),r=Object(v.a)(n.content),c=[],o=0;o<r.length;o+=1)r[o].header===t.header&&(c=r[o].content);for(var a=0;a<e.length;a+=1)for(var i=0;i<c.length;i+=1)t.content.content[a].nombre===c[i].name&&(e[a].value=c[i].quantity);p(0),d(!0)}}),[]);var y=function(n){if(i){for(var r=document.querySelectorAll("#sub_item_name"),c=document.querySelectorAll("#sub_item_description"),o=document.querySelectorAll(".".concat(n)),a=[],d=0;d<r.length;d+=1)a.push({name:r[d].innerHTML,quantity:parseInt(o[d].value,10),description:c[d].innerHTML,codename:o[d].id});var u={header:t.header,content:a,completed:!0,maxvalue:parseInt(t.content.indexes.cantidad,10),factor:parseInt(t.content.indexes.factor,10)};e({type:Y,payload:u}),e(ue(!1)),e(de(!0)),e(function(e){return{type:Z,payload:e}}(t.header))}else m(!0)};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["Elige tus"," ",t.header]}),t.content.content.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{id:"sub_item_name",children:e.nombre}),Object(O.jsx)("p",{id:"sub_item_description",children:e.descripcion}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{className:t.content.name.split(" ").join("_"),id:e.codename,type:"number",defaultValue:0}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{type:"button",onClick:function(){!function(e,n){var r=document.getElementById(n),c=document.querySelectorAll(".".concat(e)),o=[];c.forEach((function(e){o.push(parseInt(e.value,10))}));var a=o.reduce((function(e,t){return e+t})),i=parseInt(t.content.indexes.cantidad,10),u=parseInt(t.content.indexes.factor,10);a<i&&(p(l-u),r.value=parseInt(r.value,10)+u,i-a===u&&d(!0))}(t.content.name.split(" ").join("_"),e.codename)},children:"Up"}),Object(O.jsx)("button",{type:"button",onClick:function(){!function(e){var n=document.getElementById(e),r=parseInt(t.content.indexes.factor,10);parseInt(n.value,10)>0&&(p(l+r),n.value=parseInt(n.value,10)-parseInt(t.content.indexes.factor,10),d(!1))}(e.codename)},children:"Down"})]})]})]},e.nombre)})),Object(O.jsx)("div",{children:i?"Completed":"Tienes ".concat(l," por escoger")}),f?Object(O.jsx)("div",{children:"Background"}):"",f?Object(O.jsx)("div",{onClick:function(){m(!1)},children:Object(O.jsx)("h1",{children:"Aun tienes items por escoger!"})}):"",Object(O.jsx)("button",{type:"button",onClick:function(){y(t.content.name.split(" ").join("_"))},children:"Aceptar"}),Object(O.jsx)("button",{type:"button",onClick:function(){return e(ue(!1)),void e(de(!0))},children:"Volver"})]})},be=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.storemainReducer})),n=Object(o.c)((function(e){return e.storeSwitchReducer})),c=[n.parentState,n.secondaryStoreState,n.storePickerState,n.itemPickerState],a=c[0],i=c[1],d=c[2],u=c[3];Object(r.useEffect)((function(){e({type:H,payload:[]}),e(ae(!0))}),[]);var s=function(t){e(ae(!1)),e({type:L,payload:t}),e(ie(!0))};return Object(O.jsxs)("div",{className:"store_main_container",children:[!!a&&Object(O.jsx)("div",{children:t.map((function(e){return Object(O.jsx)("button",{type:"button",onClick:function(){return s(e.idcategorias)},children:e.nombre},e.nombre)}))}),!!i&&Object(O.jsx)(pe,{}),!!d&&Object(O.jsx)(je,{}),!!u&&Object(O.jsx)(he,{})]})},fe=function(){return Object(O.jsx)("div",{id:"Products",children:Object(O.jsx)(be,{})})},Oe=function(){var e=Object(o.b)(),t=function(){e(se()),e({type:C})};return Object(O.jsxs)(d.a,{children:[Object(O.jsx)("div",{className:"hello",children:Object(O.jsx)("h1",{children:"Makit App"})}),Object(O.jsxs)("div",{className:"switch",children:[Object(O.jsx)("div",{className:"switch_header",children:Object(O.jsxs)("ul",{className:"nav-bar",children:[Object(O.jsx)("li",{className:"nav-bar-li",children:Object(O.jsx)(d.b,{onClick:function(){t()},to:"/home",children:"Home"})}),Object(O.jsx)("li",{className:"nav-bar-li",children:Object(O.jsx)(d.b,{onClick:function(){t()},to:"/store",children:"Store"})}),Object(O.jsx)("li",{className:"nav-bar-li",children:Object(O.jsx)(d.b,{onClick:function(){t()},to:"/shop",children:"Shoping Cart"})})]})}),Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{path:"/home",children:Object(O.jsx)(m,{})}),Object(O.jsx)(u.b,{path:"/store",children:Object(O.jsx)(fe,{})}),Object(O.jsx)(u.b,{path:"/shop",children:Object(O.jsx)(q,{})})]})]})]})},me=n(11),ve=n(28),ye=n.n(ve),xe=Object(me.b)({storeSwitchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,n={parentState:e.parentState,secondaryStoreState:e.secondaryStoreState,storePickerState:e.storePickerState,itemPickerState:e.itemPickerState};switch(t.type){case $:return n.parentState=t.payload,n;case ee:return n.secondaryStoreState=t.payload,n;case te:return n.storePickerState=t.payload,n;case ne:return n.itemPickerState=t.payload,n;case re:return le;default:return e}},storemainReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case H:return e;case B:return n;default:return e}},storeSecondaryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case L:return oe;case V:return n;default:return e}},storePickerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=e,c=e.content,o=function(e){for(var t=0;t<c.length;t+=1)c[t].name===e&&(c[t].completed=!0)};switch(t.type){case J:return{header:n.header,price:n.price,content:[]};case W:return r.content=n,{header:r.header,content:r.content,price:r.price};case Z:return o(t.payload),{header:r.header,content:c,price:r.price};default:return e}},itemPickerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case z:return{header:n,content:[]};case G:return{header:e.header,content:n};default:return e}},itemBuildReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=e,r=t.payload;switch(t.type){case Y:return n.content=r,n;default:return e}},productBuildReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=function(){var t=Object(v.a)(e.content);if(t.length>0)for(var r=0;r<t.length;r+=1)if(t[r].header===n.header)return!0;return!1},c=function(t){for(var n=Object(v.a)(e.content),r=0;r<n.length;r+=1)n[r].header===t.header&&(n[r].content=t.content);return n};switch(t.type){case Q:return{header:t.payload.header,price:t.payload.price,code:y(),content:[]};case K:return r()?{header:e.header,price:e.price,code:e.code,content:c(n)}:{header:e.header,price:e.price,code:e.code,content:[].concat(Object(v.a)(e.content),[n])};default:return e}},cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=e.ordercontent,r=e,c=function(e){for(var t=0,n=0;n<e.length;n+=1)t=parseFloat(t)+parseFloat(e[n].price);return t};switch(t.type){case x:return n.push(t.payload),r.ordercontent=n,r.orderproductsamount=c(n),r.orderamounttotal=c(n)+parseFloat(r.orderdeliveryamount),r;case _:return r.ordercontent=n.filter((function(e){return e.code!==t.payload.code})),r.ordercontent.push(t.payload),r;case I:return r.orderdeliverdate=!0,r.orderdeliveryamount=parseFloat(t.payload),r.orderamounttotal=c(n)+parseFloat(r.orderdeliveryamount),r;default:return e}},cartSwitchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n={shoppingcart:e.shoppingcart,cartstorepicker:e.cartstorepicker,cartitempicker:e.cartitempicker};switch(t.type){case R:return n.shoppingcart=t.payload,n;case E:return n.cartstorepicker=t.payload,n;case S:return n.cartitempicker=t.payload,n;case C:return U;default:return e}},cartStorePickerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=function(){for(var n=Object(v.a)(e.content),r=[],c=0;c<n.length;c+=1)n[c].header===t.payload.header?r.push(t.payload):r.push(n[c]);return r};switch(t.type){case T:return t.payload;case A:return{header:e.header,price:e.price,code:e.code,content:n()};default:return e}},cartItemPickerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}}}),Re=Object(me.c)(Object(me.a)((function(e){return function(t){return function(n){n.type===H&&ce&&(ce=!1,fetch("/getCategories",{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:B,payload:t})}))),t(n)}}})),Object(me.a)((function(e){return function(t){return function(n){n.type===L&&fetch("/getProdWithId/".concat(n.payload),{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:V,payload:t})})),t(n)}}})),Object(me.a)((function(e){return function(t){return function(n){n.type===J&&fetch("/getItemWithId/".concat(n.payload.id),{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:W,payload:t})})),t(n)}}})),Object(me.a)((function(e){return function(t){return function(n){var r;n.type===Y&&e.dispatch((r=n.payload,{type:K,payload:r})),t(n)}}})),Object(me.a)((function(e){return function(t){return function(n){var r;n.type===J&&e.dispatch((r={header:n.payload.header,price:n.payload.price},{type:Q,payload:r})),t(n)}}})),Object(me.a)(ye.a)),Ee=Object(me.d)(xe,void 0,Re);n(47),n(48),n(49);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(o.a,{store:Ee,children:Object(O.jsx)(Oe,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.c44ff8c6.chunk.js.map