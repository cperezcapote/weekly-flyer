(function(e){function t(t){for(var r,a,o=t[0],s=t[1],u=t[2],f=0,p=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/weekly-flyer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1771:function(e,t,n){var r={"./bacon.jpg":"9031","./cerial.jpg":"93b6","./css/main.css":"5aea","./dairy.jpg":"7b0d","./flyer-banner.jpg":"4f45","./grocery.jpg":"99f7","./logo.png":"cf05","./meat.jpg":"c16d","./menu.jpg":"b986","./points.jpg":"6a54","./raspberries.jpg":"9962"};function i(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=c,e.exports=i,i.id="1771"},2228:function(e,t,n){},3091:function(e,t,n){"use strict";n("d22e")},"3b04":function(e,t,n){},4204:function(e,t,n){"use strict";n("3b04")},"4f45":function(e,t,n){e.exports=n.p+"img/flyer-banner.6903125e.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("WeeklyFlyer")],1)},c=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flyer-container"},[n("Header"),n("ProductList")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("Banner"),n("Navbar")],1)},u=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar"},[r("img",{staticClass:"responsive",attrs:{src:n("b986")}})])}],p={name:"Navbar"},d=p,g=(n("3091"),n("2877")),m=Object(g["a"])(d,l,f,!1,null,"785cdf30",null),b=m.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"banner"},[r("img",{staticClass:"responsive",attrs:{alt:"Flyer Banner",src:n("4f45")}})])}],y={name:"Banner"},_=y,h=(n("c9af"),Object(g["a"])(_,v,j,!1,null,"1ba6e06c",null)),x=h.exports,O={name:"Header",components:{Navbar:b,Banner:x}},P=O,w=(n("eb08"),Object(g["a"])(P,s,u,!1,null,"674d0432",null)),C=w.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"product-lit"},[n("MainProduct"),e._l(e.products,(function(e){return n("Product",{key:"product-"+e.id,attrs:{img:e.img}})}))],2)},$=[],k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-product"},[r("div",{staticClass:"img-ctn"},[r("img",{staticClass:"responsive",attrs:{src:n("c16d")}})])])}],F={name:"MainProduct"},S=F,N=(n("4204"),Object(g["a"])(S,k,M,!1,null,"2df118b0",null)),B=N.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"product"},[r("div",{staticClass:"img-ctn"},[r("img",{staticClass:"responsive",attrs:{src:n("1771")("./"+e.img)}})])])},W=[],H={name:"Product",props:{img:String}},L=H,D=(n("ff11"),Object(g["a"])(L,T,W,!1,null,"12d2a238",null)),J=D.exports,U={name:"WeeklyFlyer",components:{MainProduct:B,Product:J},data:function(){return{products:[{id:1,img:"raspberries.jpg"},{id:2,img:"points.jpg"},{id:3,img:"cerial.jpg"},{id:4,img:"bacon.jpg"},{id:5,img:"grocery.jpg"},{id:6,img:"dairy.jpg"}]}}},A=U,q=(n("92e5"),Object(g["a"])(A,E,$,!1,null,null,null)),z=q.exports,G={name:"WeeklyFlyer",components:{Header:C,ProductList:z}},I=G,K=(n("6621"),Object(g["a"])(I,a,o,!1,null,"07ab9dc5",null)),Q=K.exports,R={name:"App",components:{WeeklyFlyer:Q}},V=R,X=(n("f23a"),Object(g["a"])(V,i,c,!1,null,"57e25cf0",null)),Y=X.exports;n("5aea"),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Y)}}).$mount("#app")},"5aea":function(e,t,n){},6621:function(e,t,n){"use strict";n("2228")},"6a54":function(e,t,n){e.exports=n.p+"img/points.a8fd6628.jpg"},"7b0d":function(e,t,n){e.exports=n.p+"img/dairy.50b6df5e.jpg"},8759:function(e,t,n){},9031:function(e,t,n){e.exports=n.p+"img/bacon.42801a40.jpg"},"92e5":function(e,t,n){"use strict";n("baaa")},"93b6":function(e,t,n){e.exports=n.p+"img/cerial.1477b208.jpg"},9962:function(e,t,n){e.exports=n.p+"img/raspberries.608eaabc.jpg"},"99f7":function(e,t,n){e.exports=n.p+"img/grocery.5266f9e7.jpg"},a701:function(e,t,n){},b986:function(e,t,n){e.exports=n.p+"img/menu.43e8b164.jpg"},baaa:function(e,t,n){},bdf2:function(e,t,n){},c16d:function(e,t,n){e.exports=n.p+"img/meat.64993632.jpg"},c9af:function(e,t,n){"use strict";n("8759")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d22e:function(e,t,n){},eb08:function(e,t,n){"use strict";n("bdf2")},ed58:function(e,t,n){},f23a:function(e,t,n){"use strict";n("a701")},ff11:function(e,t,n){"use strict";n("ed58")}});
//# sourceMappingURL=app.f500e0b9.js.map