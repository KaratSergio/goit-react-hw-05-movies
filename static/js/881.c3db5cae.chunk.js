"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{881:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(791),c=r(689),s=r(282),o=r(184);const i=()=>{const[e,t]=(0,a.useState)([]),{id:r}=(0,c.UO)();return(0,a.useEffect)((()=>{(async()=>{try{const{cast:e}=await s.rQ("movie/".concat(r,"/credits"));t(e)}catch(e){console.error("Something went wrong, please try again",e)}})()}),[r]),e&&0!==e.length?(0,o.jsx)("div",{children:(0,o.jsx)("div",{children:e.map((e=>{let{profile_path:t,name:r,character:a,id:c}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w200").concat(t):"",alt:r}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:r}),(0,o.jsxs)("p",{children:["Character: ",a]})]})]},c)}))})}):(0,o.jsx)("div",{children:(0,o.jsx)("h2",{children:"No credits information for this movie"})})}},282:(e,t,r)=>{r.d(t,{Bm:()=>s,rQ:()=>c});var a=r(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";const c=async(e,t)=>{try{return(await a.Z.get(e,{params:{...t,api_key:"6167a2fbe619d64566c427d4bc6ed1cb"}})).data}catch(r){throw console.error("Error fetching data from ".concat(e,":"),r),new Error("Failed to fetch data")}},s=e=>c("movie/".concat(e))}}]);
//# sourceMappingURL=881.c3db5cae.chunk.js.map