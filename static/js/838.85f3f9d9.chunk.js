"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[838],{838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(791),c=r(689),o=r(282),n=r(184);const s=()=>{const[e,t]=(0,a.useState)([]),{id:r}=(0,c.UO)();return(0,a.useEffect)((()=>{(async()=>{try{const e=await o.rQ("movie/".concat(r,"/reviews"));t(e)}catch(e){console.error("Something went wrong, please try again",e)}})()}),[r]),e&&0!==e.length?(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:e.map((e=>{let{author:t,content:r,id:a}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Author: ",t]}),(0,n.jsx)("p",{children:r})]},a)}))})}):(0,n.jsx)("div",{children:(0,n.jsx)("h2",{children:"No reviews for this movie"})})}},282:(e,t,r)=>{r.d(t,{Bm:()=>o,rQ:()=>c});var a=r(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";const c=async(e,t)=>{try{return(await a.Z.get(e,{params:{...t,api_key:"6167a2fbe619d64566c427d4bc6ed1cb"}})).data}catch(r){throw console.error("Error fetching data from ".concat(e,":"),r),new Error("Failed to fetch data")}},o=e=>c("movie/".concat(e))}}]);
//# sourceMappingURL=838.85f3f9d9.chunk.js.map