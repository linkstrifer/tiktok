import{o as x,p as y,q as m,t as S,r as i,_ as f,n as t,O as w,M as j,L as g,S as k}from"./components-depHuP0S.js";/**
 * @remix-run/react v2.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:e,...l}){let{isSpaMode:c}=x(),o=y(),u=m();S({getKey:e,storageKey:a});let d=i.useMemo(()=>{if(!e)return null;let s=e(o,u);return s!==o.key?s:null},[]);if(c)return null;let p=((s,h)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[h||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",f({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function O({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(j,{}),t.jsx(g,{})]}),t.jsxs("body",{children:[e,t.jsx(M,{}),t.jsx(k,{})]})]})}function R(){return t.jsx(w,{})}function _(){return t.jsx("p",{children:"Loading..."})}export{_ as HydrateFallback,O as Layout,R as default};