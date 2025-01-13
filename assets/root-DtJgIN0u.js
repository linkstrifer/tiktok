import{o as y,p as x,q as f,t as m,r as i,_ as S,n as t,O as w,M as j,L as k,S as g}from"./components-depHuP0S.js";/**
 * @remix-run/react v2.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:e,...l}){let{isSpaMode:c}=y(),n=x(),u=f();m({getKey:e,storageKey:a});let d=i.useMemo(()=>{if(!e)return null;let s=e(n,u);return s!==n.key?s:null},[]);if(c)return null;let p=((s,h)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let o=JSON.parse(sessionStorage.getItem(s)||"{}")[h||window.history.state.key];typeof o=="number"&&window.scrollTo(0,o)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",S({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}const L="https://strifer.link/tiktok/assets/tailwind-Cpx8WZWT.css";function R(){return[{rel:"stylesheet",href:L}]}function _({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(j,{}),t.jsx(k,{})]}),t.jsxs("body",{children:[e,t.jsx(M,{}),t.jsx(g,{})]})]})}function b(){return t.jsx(w,{})}function v(){return t.jsx("p",{children:"Loading..."})}export{v as HydrateFallback,_ as Layout,b as default,R as links};
