(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),r=a(5),s=a.n(r),o=(a(10),a(11),a(3)),n=(a(12),a(0));function d(e){var t=e.titles,a=e.visibles,c=Object(i.useState)(0),r=Object(o.a)(c,2),s=r[0],d=r[1],l=Object(i.useState)(0),u=Object(o.a)(l,2),j=u[0],b=u[1],p="".concat(s*(j-1),"px"),m="".concat(s*j,"px"),h=Object(i.useRef)(null);console.log("--------------------------------------"),console.log("aTagWidth: ",s),console.log("aTagIndex: ",j),console.log("trasnlateX, aTagWidth * aTagIndex: ",p),console.log("trasnlateX2, aTagWidth *(  aTagIndex + 1 ): ",m),console.log("--------------------------------------"),Object(i.useEffect)((function(){var e=h.current.firstChild.offsetWidth;d(e);var t=function(){var e=h.current.firstChild.offsetWidth;d(e)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),Object(i.useEffect)((function(){a.some((function(e){return!0===e}))&&b(a.indexOf(!0))}),[a]);var f=function(e){b(e.target.getAttribute("index"))};return Object(n.jsxs)("nav",{id:"menu",ref:h,children:[t.map((function(e,t){return Object(n.jsx)("a",{href:"#".concat(t+1),index:t+1,onClick:f,children:e},t)})),Object(n.jsx)("span",{className:"indicator",style:{width:s,left:p},id:"indicator"}),Object(n.jsx)("span",{className:"indicator2",style:{width:m},id:"indicator2"})]})}a(14);function l(e){var t=e.setRef;return Object(n.jsxs)("header",{ref:t,className:"hero",id:"hero",children:[Object(n.jsx)("h1",{children:"Julio Zeng"}),Object(n.jsx)("p",{children:"HTML \u2022 CSS \u2022 Javascript \u2022 React \u2022 Nodejs"})]})}a(15),a(16);function u(e){var t=e.data;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:t.title}),Object(n.jsx)("p",{children:t.description})]})}a(17);var j=a.p+"static/media/fixdropAddRecibo.4964aa3c.png",b=a.p+"static/media/bugTracker.90df9f5d.png",p=a.p+"static/media/posItemDark.b72bac1d.png",m=a(2);function h(e){var t,a=e.data,i="FixDrop"===(t=a.title)?j:"BugTracker"===t?b:"Sistema de POS e inventario"===t?p:"Creacion de Nft"===t?j:void 0;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"imgCard",children:[Object(n.jsx)("img",{src:i,alt:""}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)("a",{href:a.link,children:"link"}),Object(n.jsx)("a",{href:a.github,children:"Github"})]})]}),Object(n.jsx)("h1",{children:a.title}),Object(n.jsx)("span",{children:a.description}),Object(n.jsx)("section",{className:"caracteristicas",children:Object(n.jsx)("ul",{"aria-label":"Caracteristicas:",children:a.caracteristicas.map((function(e){return Object(n.jsx)("li",{children:e})}))})}),Object(n.jsx)("div",{className:"stack",children:a.stack.map((function(e){return"docker"===e?Object(n.jsx)(m.c,{size:"2.5em"}):"react"===e?Object(n.jsx)(m.l,{size:"2.5em"}):"bootstrap"===e?Object(n.jsx)(m.b,{size:"2.5em"}):"materialui"===e?Object(n.jsx)(m.g,{size:"2.5em"}):"apollo"===e?Object(n.jsx)(m.a,{size:"2.5em"}):"heroku"===e?Object(n.jsx)(m.f,{size:"2.5em"}):"firebase"===e?Object(n.jsx)(m.d,{size:"2.5em"}):"nodejs"===e?Object(n.jsx)(m.i,{size:"2.5em"}):"solidity"===e?Object(n.jsx)(m.m,{size:"2.5em"}):"graphql"===e?Object(n.jsx)(m.e,{size:"2.5em"}):"prisma"===e?Object(n.jsx)(m.k,{size:"2.5em"}):"mongodb"===e?Object(n.jsx)(m.h,{size:"2.5em"}):"postgresql"===e?Object(n.jsx)(m.j,{size:"2.5em"}):void 0}))})]})}a(18);function f(e){var t=e.data;return Object(n.jsxs)("div",{className:"projects",children:[Object(n.jsx)("h2",{children:"projects"}),Object(n.jsx)("div",{className:"container",children:t.projects.map((function(e){return Object(n.jsx)(h,{data:e})}))})]})}a(19);function O(e){e.data;return Object(n.jsx)("div",{children:"Contact Us"})}var g=function(e){var t=e.datas,a=e.setRefs;return Object(n.jsx)("section",{children:t.map((function(e,t){var i=t+1;return console.log("data",e.type),Object(n.jsxs)("div",{ref:a[t+1],className:"section ".concat(e.type),id:i,children:["About me"===e.type&&Object(n.jsx)(u,{data:e}),"Projects"===e.type&&Object(n.jsx)(f,{data:e}),"Contact us"===e.type&&Object(n.jsx)(O,{data:e})]},i)}))})},x=[{type:"About me",title:"Sobre mi",description:"Programacion autodidacta"},{type:"Projects",title:"Projecto",description:"proyecto que he hecho",projects:[{title:"BugTracker",description:"Primer peque\xf1o proyecto responsivo de tablero kamban para dar seguimiento estilo trello",caracteristicas:["React Hooks como useState, useEffect","multiple llamada a API con axios para CRUD con Express y MongoDb ","subir a un servidor con Heroku y gestionar desde terminal"],img:"",link:"https://bugtracker-mern.herokuapp.com/",github:"https://github.com/masiafrest/bugtracker-mern",stack:["react","boostrap","nodejs","heroku","mongodb"]},{title:"FixDrop",description:"Segundo Proyecto de un sistema para hacer y ver registro",caracteristicas:["Autenticacion de usuario para hacer recibo, borrar y editar","Creacion y validacion de formulario ","Estado guardado y persitido usando Redux y local storage","Multiplo llamada API a Firebase para CRUD","Implemetancion de scroll infinito"],img:"",link:"https://repairworkshop-48385.web.app/",github:"https://github.com/masiafrest/repairworkshop",stack:["react","materialui","firebase"]},{title:"Sistema de POS e inventario",description:"aplicacion totalmente responsivo para hacer registro de venta e inventario",caracteristicas:["implementacion de busqueda con autocompletado","React Hooks como useState, useEffect, useLocation y alguno Hooks propio","llamada a servidor con Grapqhl usando Apollo","uso de ORM como Prisma","base de dato y servidor persitente con docker","Autenticacion de usuario para hacer recibo, borrar y editar","Creacion y validacion de formulario ","Estado guardado y persitido usando Redux y local storage"],img:"https://via.placeholder.com/200",link:"localmente",github:"https://github.com/masiafrest/posNodeReact",stack:["docker","react","graphql","nodejs"]},{title:"Creacion de Nft",description:"aplicacion para mintear NFT en blockchain de ethereum",caracteristicas:["Creacion y deploy de contrato inteligente en la red de ethereum","acceder a metamask desde el navegador"],img:"https://via.placeholder.com/200",link:"localmente",github:"https://github.com/masiafrest/NFT-web3-BuildSpace",stack:["react","solidity"]}]},{type:"Contact us",title:"Contactame",description:"hello world"}];Array(5).fill(null).map((function(e,t){return{title:"Seccion ".concat(t+1),description:"hello world",github:"github",link:"link"}}));function v(e){var t=Object(i.useState)(null),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(i.useState)(!1),n=Object(o.a)(s,2),d=n[0],l=n[1];return console.log("visible:",d,"ref:",c),Object(i.useEffect)((function(){var t=new IntersectionObserver((function(e){var t=Object(o.a)(e,1)[0];l(t.isIntersecting)}),e);return c&&t.observe(c),function(){c&&t.unobserve(c)}}),[c,e]),[r,d]}var k={threshold:.5};var y=function(){var e=v(k),t=Object(o.a)(e,2),a=t[0],i=t[1],c=v(k),r=Object(o.a)(c,2),s=r[0],u=r[1],j=v({threshold:[.1]}),b=Object(o.a)(j,2),p=b[0],m=b[1],h=v(k),f=Object(o.a)(h,2),O=[a,s,p,f[0]],y=[i,u,m,f[1]];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{setRef:a}),Object(n.jsx)(d,{titles:x.map((function(e){return e.title})),visibles:y}),Object(n.jsx)(g,{datas:x,setRefs:O})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),i(e),c(e),r(e),s(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),C()}],[[20,1,2]]]);
//# sourceMappingURL=main.6054f09c.chunk.js.map