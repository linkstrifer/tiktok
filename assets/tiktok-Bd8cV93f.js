import{n as e,v as o,w as m,r as n}from"./components-1UiMdCvh.js";function l({name:s,url:r,image:a}){return e.jsxs("article",{className:"grid gap-4 grid-rows-subgrid row-span-2 items-start",children:[e.jsxs("div",{children:[e.jsx("picture",{className:"w-full aspect-square p-4 flex",children:e.jsx("img",{src:a,alt:s,className:"object-contain object-center transition-all h-full w-full"})}),e.jsx("h2",{className:"text-center text-lg m-0",children:s})]}),e.jsxs(o,{to:r,rel:"noopener noreferrer",target:"_blank",className:"p-4 rounded-xl bg-amber-400 text-black flex justify-center text-lg gap-2 items-center font-bold no-underline",children:[e.jsx("i",{className:"bi bi-amazon"}),"Amazon"]})]})}const d=()=>[{title:"Recomendaciones - LinkStrifer"},{name:"description",content:"LFGGGGGG!"}],c=[{name:"Earpads for Microsoft Xbox Wireless/Wired",url:"https://amzn.to/4cgeGnv",image:"images/81Es3VU46OL._AC_SL1500_.webp"},{name:"DJI Mic (2 TX + 1 RX + Charging Case)",url:"https://amzn.to/4b08Wgw",image:"images/71jTh1T3jGL._AC_SL1500_.webp"},{name:"Govee Smart Wi-Fi RGBIC LED Strip Lights & Light Bars",url:"https://amzn.to/459TMDP",image:"images/71rmgdAqy8L._AC_SL1500_.webp"},{name:"Xbox Series X",url:"https://amzn.to/4byOsfE",image:"images/51ojzJk77qL._SL1500_.webp"},{name:"Xbox Series S (1TB)",url:"https://amzn.to/4bUPgeP",image:"images/61hwaBMvOxL._SL1500_.webp"},{name:"WD_Black 1TB C50 Expansion Card, Officially Licensed for Xbox",url:"https://amzn.to/3WLgoIP",image:"images/71QxmOXxYVL._AC_SL1500_.webp"},{name:"BONAI AA AAA C D SC Battery Charger with Detection Function",url:"https://amzn.to/3UO7GGZ",image:"images/61DoH9nddCL._AC_SL1500_.webp"},{name:"Automatic Pet Feeder - Sureflap - SureFeed Microchip Pet Feeder - MPF001",url:"https://amzn.to/3WQ5VvD",image:"images/61nDt97BVSL._AC_SL1500_.webp"},{name:"One Piece Box Set: East Blue and Baroque Works, Volumes 1-23 (One Piece Box Sets) ",url:"https://amzn.to/4bt34gB",image:"images/81u8P2490RL._SL1500_.webp"},{name:"PowerA Solo Charging Stand for Xbox Series X|S",url:"https://amzn.to/3V1viIs",image:"images/61hr92++vkL._AC_SL1500_.webp"},{name:"8TB Seagate Game Drive Hub External HDD for Xbox",url:"https://amzn.to/3wRUedd",image:"images/51Q7SrJK5fL._AC_SL1500_.webp"}];function p(){const[s,r]=m(),a=s.get("search"),i=n.useMemo(()=>c.filter(t=>t.name.toLowerCase().includes((a==null?void 0:a.toLowerCase())??"")),[a]);return e.jsx("div",{className:"App",children:e.jsxs("section",{className:"p-8 max-w-4xl m-auto flex flex-col gap-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Recomendaciones"}),e.jsx("input",{type:"search",placeholder:"Buscar...",value:a??"",onChange:t=>r({search:t.target.value}),className:"w-full p-2 border border-gray-300 rounded-md mt-4"}),e.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 grid-rows-",children:i.map(t=>n.createElement(l,{...t,key:t.url}))})]})})}export{p as default,d as meta};