import{v as p,n as a,w as u,x as d,r as m}from"./components-depHuP0S.js";var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(i){(function(){var l={}.hasOwnProperty;function t(){for(var e="",r=0;r<arguments.length;r++){var o=arguments[r];o&&(e=s(e,n(o)))}return e}function n(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var o in e)l.call(e,o)&&e[o]&&(r=s(r,o));return r}function s(e,r){return r?e?e+" "+r:e+r:e}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(c);var g=c.exports;const x=p(g);function f({name:i,url:l,image:t,store:n="amazon"}){return a.jsxs("article",{className:"grid gap-4 grid-rows-subgrid row-span-2 items-start",children:[a.jsxs("div",{children:[a.jsx("picture",{className:"w-full aspect-square p-4 flex",children:a.jsx("img",{src:`${t}`,alt:i,className:"object-contain object-center transition-all h-full w-full"})}),a.jsx("h2",{className:"text-center text-lg m-0",children:i})]}),a.jsxs(u,{to:l,rel:"noopener noreferrer",target:"_blank",className:x("p-4 rounded-xl flex justify-center text-lg gap-2 items-center font-bold no-underline capitalize",{"bg-amber-400 text-black":n==="amazon","bg-blue-400 text-white":n==="steren"}),children:[n==="Amazon"?a.jsx("i",{className:"bi bi-amazon"}):null,n]})]})}const S=()=>[{title:"Recomendaciones - LinkStrifer"},{name:"description",content:"LFGGGGGG!"}],h=[{name:"Power bank, 24,000 mAh 80 Wh",url:"https://www.steren.com.co/estacion-de-poder-de-24-000-mah-y-80-w-v-portatil.html",image:"images/2uhjkdf72.webp",store:"steren"},{name:"Earpads for Microsoft Xbox Wireless/Wired",url:"https://amzn.to/4cgeGnv",image:"images/81Es3VU46OL._AC_SL1500_.webp"},{name:"DJI Mic (2 TX + 1 RX + Charging Case)",url:"https://amzn.to/4b08Wgw",image:"images/71jTh1T3jGL._AC_SL1500_.webp"},{name:"Govee Smart Wi-Fi RGBIC LED Strip Lights & Light Bars",url:"https://amzn.to/459TMDP",image:"images/71rmgdAqy8L._AC_SL1500_.webp"},{name:"Xbox Series X",url:"https://amzn.to/4byOsfE",image:"images/51ojzJk77qL._SL1500_.webp"},{name:"Xbox Series S (1TB)",url:"https://amzn.to/4bUPgeP",image:"images/61hwaBMvOxL._SL1500_.webp"},{name:"WD_Black 1TB C50 Expansion Card, Officially Licensed for Xbox",url:"https://amzn.to/3WLgoIP",image:"images/71QxmOXxYVL._AC_SL1500_.webp"},{name:"BONAI AA AAA C D SC Battery Charger with Detection Function",url:"https://amzn.to/3UO7GGZ",image:"images/61DoH9nddCL._AC_SL1500_.webp"},{name:"Automatic Pet Feeder - Sureflap - SureFeed Microchip Pet Feeder - MPF001",url:"https://amzn.to/3WQ5VvD",image:"images/61nDt97BVSL._AC_SL1500_.webp"},{name:"One Piece Box Set: East Blue and Baroque Works, Volumes 1-23 (One Piece Box Sets) ",url:"https://amzn.to/4bt34gB",image:"images/81u8P2490RL._SL1500_.webp"},{name:"PowerA Solo Charging Stand for Xbox Series X|S",url:"https://amzn.to/3V1viIs",image:"images/61hr92++vkL._AC_SL1500_.webp"},{name:"8TB Seagate Game Drive Hub External HDD for Xbox",url:"https://amzn.to/3wRUedd",image:"images/51Q7SrJK5fL._AC_SL1500_.webp"}];function w(){const[i,l]=d(),t=i.get("search"),n=m.useMemo(()=>h.filter(s=>s.name.toLowerCase().includes((t==null?void 0:t.toLowerCase())??"")),[t]);return a.jsx("div",{className:"App",children:a.jsxs("section",{className:"p-8 max-w-4xl m-auto flex flex-col gap-4",children:[a.jsx("h1",{className:"text-4xl font-bold",children:"Recomendaciones"}),a.jsx("input",{type:"search",placeholder:"Buscar...",value:t??"",onChange:s=>l({search:s.target.value}),className:"w-full p-2 border border-gray-300 rounded-md mt-4"}),a.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 grid-rows-",children:n.map(s=>m.createElement(f,{...s,key:s.url}))})]})})}export{w as default,S as meta};
