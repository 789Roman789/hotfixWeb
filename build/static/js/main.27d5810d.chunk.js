(this["webpackJsonpkozodoi-club-hack"]=this["webpackJsonpkozodoi-club-hack"]||[]).push([[0],{169:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){},176:function(e,a,t){},177:function(e,a,t){"use strict";t.r(a);t(93),t(119),t(121),t(122),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(131),t(133),t(134),t(135),t(136),t(137),t(138),t(139),t(140),t(141),t(142),t(144),t(145),t(146),t(147),t(148),t(149),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160),t(161);var c=t(0),r=t.n(c),n=t(83),o=t.n(n),i=t(84),s=t.n(i),l=t(18),m=t(20),d=t(6),u=t(7),f=t(24),_=t.n(f),p=(t(169),function(e){var a=e.foodAreas,t=e.order;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"Home"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:"Home__fixed-content"},r.a.createElement("header",{className:"Home__header"},r.a.createElement("h1",{className:"Home__head"},r.a.createElement(d.b,{to:"/",className:"Home__logo"},e.name)),r.a.createElement(d.b,{to:"/",className:"Home__change-tz"},r.a.createElement("img",{className:"Home__edit",alt:"change-profile",src:_.a}))),r.a.createElement("ul",{className:"Home__tabs"},r.a.createElement("li",{className:"Home__tab Home__tab_active"},"\u0415\u0434\u0430"))),r.a.createElement("ul",{className:"Home__items"},e.items.map((function(e){return r.a.createElement("li",{className:"Home__item",key:e.id},r.a.createElement(d.b,{className:"Home__food-link",to:e.link},r.a.createElement("img",{alt:e.name,className:"Home__image",src:e.image}),r.a.createElement("h3",{className:"Home__food-name"},e.name),r.a.createElement("p",{className:"Home__food-type"},e.description)))}))))}))),0!==Object.keys(t).length&&r.a.createElement("footer",{className:"Footer"},r.a.createElement(d.b,{to:"/orders",className:"Footer__orders"},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))});p.defaultProps={foodAreas:[]};var E=p,g=t(35),N=t.n(g),h=(t(51),function(e){var a=e.item,t=e.order,n=e.onIncrementPosition,o=e.onDecrementPosition,i=e.area,s=Object(c.useMemo)((function(){var e=new Set((a.foods||[]).map((function(e){return e.id}))),c=Object.values(t).filter((function(a){var t=a.item.id;return e.has(t)})).reduce((function(e,a){var t=a.count,c=a.item.price;return e+parseInt(c)*parseInt(t)}),0);return N.a.formatNumber(c,0," ")}),[t,a]);return r.a.createElement("div",{className:"Place"},r.a.createElement("header",{className:"Place__header"},r.a.createElement("aside",{className:"Place__trz"},r.a.createElement("h1",{className:"Place__head"},r.a.createElement(d.b,{to:"/",className:"Place__logo"},i.name)),r.a.createElement(d.b,{to:"/edit",className:"Place__change-tz"},r.a.createElement("img",{alt:"change-profile",src:_.a})))),r.a.createElement("aside",{className:"Place__restoraunt"},r.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:a.image}),r.a.createElement("h2",{className:"Place__restoraunt-name"},a.name),r.a.createElement("p",{className:"Place__restoraunt-type"},a.description)),r.a.createElement("ul",{className:"Place__foods"},a.foods.map((function(e){return r.a.createElement("li",{className:"Place__food",key:e.id},r.a.createElement("div",{className:"Place__food-logo-wrapper"},r.a.createElement("img",{alt:"food logo",className:"Place__food-logo",src:e.image})),r.a.createElement("h3",{className:"Place__food-name"},e.name),r.a.createElement("p",{className:"Place__food-composition"},e.composition),r.a.createElement("div",{className:"Place__food-price"},r.a.createElement("span",{className:".Place__food-price-price"},"\u0426\u0435\u043d\u0430: ",e.price,"\xa0\xa0"),r.a.createElement("button",{className:"Place__food-button",onClick:function(){o({id:e.id,itemId:a.id,areaId:i.id})}},"-"),r.a.createElement("span",null,"\xa0",e.id in t?t[e.id].count:0,"\xa0"),r.a.createElement("button",{className:"Place__food-button",onClick:function(){n({id:e.id,itemId:a.id,areaId:i.id})}},"+")))}))),r.a.createElement("footer",{className:"Place__footer"},s>0?r.a.createElement(d.b,{to:"/basket/".concat(i.id,"/").concat(a.id),className:"Place__order"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 (",s,")"):r.a.createElement(d.b,{to:"/place/".concat(i.id,"/").concat(a.id),className:"Place__order"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 (",s,")")))});h.defaultProps={item:{},onIncrementPosition:function(){},onDecrementPosition:function(){}};var b=h,O=(t(174),t(86)),v=t.n(O),P=function(e){var a=e.checked,t=e.onToggle;return r.a.createElement("div",{className:"Checkbox"},r.a.createElement("input",{checked:a,onChange:t,type:"checkbox"}),r.a.createElement("img",{alt:"custom checkbox logo",src:v.a}))};P.defaultProps={onToggle:function(){}};var I=P,k=function(e){var a=e.match.params,t=a.areaId,n=a.itemId,o=e.foodAreas,i=e.order,s=e.addition,l=e.onAdditionChanged,u=Object(c.useState)(s[n].faster),f=Object(m.a)(u,2),p=f[0],E=f[1],g=Object(c.useState)(p?"":s[n].atime),h=Object(m.a)(g,2),b=h[0],O=h[1],v=Object(c.useState)(s[n].isSelf),P=Object(m.a)(v,2),k=P[0],S=P[1],y=o.filter((function(e){return e.id===t}))[0],j=y.items.filter((function(e){return e.id===n}))[0],A=Object(c.useMemo)((function(){var e=new Set((j.foods||[]).map((function(e){return e.id}))),a=Object.values(i).filter((function(a){var t=a.item.id;return e.has(t)})),t=a.reduce((function(e,a){var t=a.count,c=a.item;return e+parseInt(c.price)*parseInt(t)}),0);return[N.a.formatNumber(t,0," "),a]}),[i,j]),C=Object(m.a)(A,2),x=C[0],T=C[1];return r.a.createElement("div",{className:"Place"},r.a.createElement("header",{className:"Place__header"},r.a.createElement("aside",{className:"Place__trz"},r.a.createElement("h1",{className:"Place__head"},r.a.createElement(d.b,{to:"/",className:"Place__logo"},y.name)),r.a.createElement(d.b,{to:"/edit",className:"Place__change-tz"},r.a.createElement("img",{alt:"change-profile",src:_.a})))),r.a.createElement("aside",{className:"Place__restoraunt"},r.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:j.image}),r.a.createElement("h2",{className:"Place__restoraunt-name"},j.name),r.a.createElement("p",{className:"Place__restoraunt-type"},j.description)),r.a.createElement("div",{className:"Place__products-wrapper"},r.a.createElement("ul",{className:"Place__products"},T.map((function(e){var a=e.item,t=e.count;return r.a.createElement("li",{className:"Place__product",key:a.id},r.a.createElement("img",{className:"Place__product-logo",alt:"Ordered product logo",src:a.image}),r.a.createElement("h3",{className:"Place__product-name"},a.name),r.a.createElement("p",{className:"Place__product-price"},"\u0426\u0435\u043d\u0430: ",a.price),r.a.createElement("p",{className:"Place__product-count"},"x",t))}))),r.a.createElement(d.b,{className:"Place__change-product",onClick:function(){l({itemId:j.id,time:p?"":b,self:k,faster:p})},to:"/place/".concat(t,"/").concat(n)},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")),r.a.createElement("div",{className:"Place__choice"},r.a.createElement("h3",null,"\u0412\u0440\u0435\u043c\u044f:"),r.a.createElement("div",{className:"Place__choice-item"},r.a.createElement("span",null,"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435"),r.a.createElement(I,{checked:p,onToggle:function(){p?E(!1):(O(""),E(!0))}})),r.a.createElement("div",{className:"Place__choice-item"},r.a.createElement("span",null,"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c"),r.a.createElement("input",{value:b,onFocus:function(){E(!1)},onChange:function(e){E(!1),O(e.target.value)},onBlur:function(){if(b){/^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/.test(b)?E(!1):(E(!0),O(""))}else E(!0)}})),r.a.createElement("div",{className:"Place__choice-item"},r.a.createElement("h3",null,"\u0421 \u0441\u043e\u0431\u043e\u0439"),r.a.createElement(I,{checked:k,onToggle:function(){S(!0)}})),r.a.createElement("div",{className:"Place__choice-item"},r.a.createElement("h3",null,"\u041d\u0430 \u043c\u0435\u0441\u0442\u0435"),r.a.createElement(I,{checked:!k,onToggle:function(){S(!1)}}))),r.a.createElement("footer",{className:"Place__footer"},x>0?r.a.createElement(d.b,{to:"/order/".concat(y.id,"/").concat(j.id),onClick:function(){l({itemId:j.id,time:p?"":b,self:k,faster:p})},className:"Place__order"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",x):r.a.createElement(d.b,{to:"/basket/".concat(y.id,"/").concat(j.id),className:"Place__order"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c ",x)))};k.defaultProps={addition:{},onAdditionChanged:function(){}};var S=Object(u.f)(k),y=function(e){var a=e.match.params,t=a.areaId,c=a.itemId,n=e.history,o=e.foodAreas,i=e.setActiveOrder,s=o.filter((function(e){return e.id===t}))[0],l=s.items.filter((function(e){return e.id===c}))[0];return r.a.createElement("div",{className:"Place Place_order"},r.a.createElement("header",{className:"Place__header"},r.a.createElement("aside",{className:"Place__trz"},r.a.createElement("h1",{className:"Place__head"},r.a.createElement(d.b,{to:"/",className:"Place__logo"},s.name)),r.a.createElement(d.b,{to:"/edit",className:"Place__change-tz"},r.a.createElement("img",{alt:"change-profile",src:_.a})))),r.a.createElement("aside",{className:"Place__restoraunt"},r.a.createElement("img",{className:"Place__restoraunt-logo",alt:"Fastfood logo",src:l.image}),r.a.createElement("h2",{className:"Place__restoraunt-name"},l.name),r.a.createElement("p",{className:"Place__restoraunt-type"},l.description)),r.a.createElement("div",{className:"Place__order-body"},r.a.createElement("h3",{className:"Place__order-number-header"},"\u041d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430"),r.a.createElement("main",{className:"Place__order-number"},"7"),r.a.createElement("p",{className:"Place__order-number-header"},"\u0417\u0430\u043a\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437"),r.a.createElement("h3",{className:"Place__order-time"},"~ 15 \u043c\u0438\u043d\u0443\u0442")),r.a.createElement("footer",{className:"Place__footer"},r.a.createElement("div",{to:"/orders",className:"Place__order",onClick:function(){i({itemId:c}),setTimeout((function(){n.push("/orders")}),0)}},"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b")))};y.defaultProps={setActiveOrder:function(){}};var j=Object(u.f)(y),A=t(87),C=t.n(A),x=(t(175),function(e){var a=e.order,t=e.orderStatuses,n=e.foodAreas,o=e.setFinishedOrder,i=e.setActiveOrder,s=Object(c.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"===t[e]})).map((function(e){return e})),c=[],r=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(r.has(t.id)){var n={placeId:e.id,placeName:e.name,shopId:t.id,shopName:t.name,price:t.foods.reduce((function(e,t){if(t.id in a){var c=a[t.id],r=c.item.price,n=c.count;return e+parseInt(r)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};c.push(n)}}))})),c}),[a,t,n]),l=Object(c.useMemo)((function(){var e=Object.keys(t).filter((function(e){return"ACTIVE"!==t[e]})).map((function(e){return e})),c=[],r=new Set(e);return n.forEach((function(e){e.items.forEach((function(t){if(r.has(t.id)){var n={placeName:e.name,shopName:t.name,shopId:t.id,price:t.foods.reduce((function(e,t){if(t.id in a){var c=a[t.id],r=c.item.price,n=c.count;return e+parseInt(r)*parseInt(n)}return e}),0),link:"/order/".concat(e.id,"/").concat(t.id)};c.push(n)}}))})),c}),[a,t,n]);return r.a.createElement("div",{className:"Orders"},r.a.createElement("ul",{className:"Orders__active-orders"},s.map((function(e){return r.a.createElement("li",{className:"Orders__active-order",key:e.link},r.a.createElement("div",{className:"Orders__left"},r.a.createElement("h3",{className:"Orders__header"},e.placeName),r.a.createElement("p",{className:"Orders__shop-name"},e.shopName),r.a.createElement("p",{className:"Orders__price"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),r.a.createElement("div",{className:"Orders__time"},"~ 15 \u041c"),r.a.createElement(d.b,{className:"Orders__change",to:"/place/".concat(e.placeId,"/").concat(e.shopId)},"\u0418\u0437\u043c"),r.a.createElement("button",{className:"Orders__cancel",onClick:function(){o({itemId:e.shopId})}},"\u041e\u0442\u043c."))}))),r.a.createElement("ul",{className:"Orders__finished-orders"},l.map((function(e){return r.a.createElement("li",{className:"Orders__finished-order",key:e.link},r.a.createElement("div",{className:"Orders__left"},r.a.createElement("h3",{className:"Orders__header Orders__dark"},e.placeName),r.a.createElement("p",{className:"Orders__shop-name Orders__pink"},e.shopName),r.a.createElement("p",{className:"Orders__price Orders__pink"},"\u0421\u0443\u043c\u043c\u0430 ",e.price," - \u041e\u043f\u043b\u0430\u0447\u0435\u043d\u043e")),r.a.createElement("button",{className:"Orders__repeat",onClick:function(){i({itemId:e.shopId})}},r.a.createElement("img",{className:"Orders__refresh",alt:"repeat order",src:C.a})))}))))});x.defaultProps={setFinishedOrder:function(){},setActiveOrder:function(){}};var T=x,H=(t(176),t(88)),w=t.n(H),z=t(89),J=t.n(z),F=t(90),D=t.n(F),V=t(91),M=t.n(V),B=t(36),K=t.n(B),W=t(54),L=t.n(W),$=t(37),q=t.n($),G=t(55),Q=t.n(G),R=[{id:"pizikiva-gallery",name:'\u0422\u0420\u0426 "\u0418\u043c.\u041f\u044b\u0436\u0438\u043a\u043e\u0432\u0430"',items:[{id:"kfc",name:"KFC",link:"/place/pizikiva-gallery/kfc",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:w.a,foods:[{id:"classic",image:Q.a,name:"\u041a\u043b\u0430\u0441\u0441\u0438\u043a",price:150},{id:"fries",image:K.a,name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0444\u0440\u0438",price:50}]},{id:"burger-king",name:"Burger King",link:"/place/pizikiva-gallery/burger-king",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:J.a,foods:[{id:"OneTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 1",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:630,image:K.a},{id:"TwoTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 2",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:450,image:L.a},{id:"ThreeTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 3",composition:"\u0421\u043e\u0441\u0442\u0430\u0432: \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:800,image:q.a},{id:"FourthTowar",name:"\u0422\u043e\u0432\u0430\u0440 \u2116 4",composition:"\u0421\u043e\u0441\u0442\u0430\u0432 \u043f\u043e \u0413\u041e\u0421\u0422\u0443",price:600,image:Q.a}]},{id:"macdac",name:"McDonal's",link:"/place/pizikiva-gallery/macdac",description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",image:D.a,foods:[{id:"hamburger",image:L.a,name:"\u0413\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440",price:50},{id:"bigmac",image:q.a,name:"\u0411\u0438\u0433 \u043c\u0430\u043a",price:200}]},{id:"subway",name:"SubWay",link:"/place/pizikiva-gallery/subway",image:M.a,description:"\u0421\u0435\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f",foods:[{id:"melt-sub",image:q.a,name:"\u0421\u0430\u0431\u0432\u0435\u0439 \u043c\u0435\u043b\u0442",price:300},{id:"day-sub",image:K.a,name:"\u0421\u0430\u0431 \u0434\u043d\u044f",price:200}]}]}],U=R.reduce((function(e,a){return a.items.forEach((function(a){e[a.link]=a})),e}),{}),X=R.reduce((function(e,a){return a.items.forEach((function(a){a.foods.forEach((function(a){e[a.id]=a}))})),e}),{}),Y=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("orderStatuses")||"null")||{}),a=Object(m.a)(e,2),t=a[0],n=a[1],o=Object(c.useState)(JSON.parse(localStorage.getItem("orders")||"null")||{}),i=Object(m.a)(o,2),s=i[0],f=i[1],_=Object(c.useState)(JSON.parse(localStorage.getItem("additionD")||"null")||{}),p=Object(m.a)(_,2),g=p[0],N=p[1];return r.a.createElement(d.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(E,{foodAreas:R,order:s})),r.a.createElement(u.a,{path:"/order/:areaId/:itemId",exact:!0},r.a.createElement(j,{foodAreas:R,order:s,setActiveOrder:function(e){var a=e.itemId,c=Object(l.a)({},t);c[a]="ACTIVE",n(c),localStorage.setItem("orderStatuses",JSON.stringify(c))}})),r.a.createElement(u.a,{path:"/basket/:areaId/:itemId",exact:!0},r.a.createElement(S,{foodAreas:R,order:s,onAdditionChanged:function(e){var a=e.itemId,t=e.time,c=e.self,r=e.faster,n=Object(l.a)({},g);a in n?(n[a].atime=t,n[a].isSelf=c,n[a].faster=r):n[a]={atime:t,isSelf:c,faster:r},N(n),localStorage.setItem("additionD",JSON.stringify(n))},addition:g})),r.a.createElement(u.a,{path:"/orders",exact:!0},r.a.createElement(T,{order:s,orderStatuses:t,foodAreas:R,setFinishedOrder:function(e){var a=e.itemId,c=Object(l.a)({},t);c[a]="CANCELED",n(c),localStorage.setItem("orderStatuses",JSON.stringify(c))},setActiveOrder:function(e){var a=e.itemId,c=Object(l.a)({},t);c[a]="ACTIVE",n(c),localStorage.setItem("orderStatuses",JSON.stringify(c))}})),r.a.createElement(u.a,{path:"/place/:area/:place",render:function(e){return r.a.createElement(b,Object.assign({},e,{item:U[e.location.pathname],area:R[0],order:s,onIncrementPosition:function(e){var a=e.id,c=e.itemId,r=(e.areaId,Object(l.a)({},g));c in r||(r[c]={atime:"",isSelf:!0,faster:!0}),N(r),localStorage.setItem("additionD",JSON.stringify(r));var o=Object(l.a)({},s);a in o?o[a].count++:o[a]={item:X[a],count:1};var i=Object(l.a)({},t);0===Object.keys(i).length&&R.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in s){var t=e.id===c?"ACTIVE":"DONE";i[e.id]=t}}))}))}));var m=JSON.stringify(o);localStorage.setItem("orders",m),localStorage.setItem("orderStatuses",JSON.stringify(i)),f(o),n(i)},onDecrementPosition:function(e){var a=e.id,c=e.itemId,r=(e.areaId,Object(l.a)({},s));a in r&&(1===r[a].count?delete r[a]:r[a].count--);var o=Object(l.a)({},t);0===Object.keys(o).length&&R.forEach((function(e){e.items.forEach((function(e){e.foods.forEach((function(a){if(a.id in s){var t=e.id===c?"ACTIVE":"DONE";o[e.id]=t}}))}))}));var i=JSON.stringify(r);localStorage.setItem("orders",i),localStorage.setItem("orderStatuses",JSON.stringify(o)),f(r),n(o)}}))}})))};s.a.send("VKWebAppInit"),o.a.render(r.a.createElement(Y,null),document.getElementById("root"))},24:function(e,a,t){e.exports=t.p+"static/media/edit.751f84c2.svg"},36:function(e,a,t){e.exports=t.p+"static/media/1.dfc54362.png"},37:function(e,a,t){e.exports=t.p+"static/media/3.dbf82c38.png"},51:function(e,a,t){},54:function(e,a,t){e.exports=t.p+"static/media/2.20489759.png"},55:function(e,a,t){e.exports=t.p+"static/media/4.e671d539.png"},86:function(e,a,t){e.exports=t.p+"static/media/check-symbol.06277842.svg"},87:function(e,a,t){e.exports=t.p+"static/media/refresh-button.1198ed41.svg"},88:function(e,a,t){e.exports=t.p+"static/media/kfc.4fd2ba47.png"},89:function(e,a,t){e.exports=t.p+"static/media/burger.35bcd067.png"},90:function(e,a,t){e.exports=t.p+"static/media/mcdac.60464810.png"},91:function(e,a,t){e.exports=t.p+"static/media/sub.4eb05fdd.png"},92:function(e,a,t){e.exports=t(177)}},[[92,1,2]]]);
//# sourceMappingURL=main.27d5810d.chunk.js.map