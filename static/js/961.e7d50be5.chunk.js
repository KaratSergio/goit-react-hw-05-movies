"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{961:(e,r,t)=>{t.r(r),t.d(r,{MovieDetails:()=>o,default:()=>l});var s=t(791),a=t(689),n=t(87),c=t(282),i=t(184);const o=()=>{var e,r;const[t,o]=(0,s.useState)(null),{id:l}=(0,a.UO)(),d=null!==(e=null===(r=(0,a.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";if((0,s.useEffect)((()=>{(async()=>{try{const e=await(0,c.rQ)("movie/".concat(l));o(e)}catch(e){console.error("Something went wrong, please try again",e)}})()}),[l]),!t)return null;const{title:h,poster_path:j,release_date:x,vote_average:p,overview:v,genres:u}=t,m=(x||"").slice(0,4),f=isNaN(p)?0:Math.round(10*p);return(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{type:"button",children:(0,i.jsx)(n.rU,{to:d,children:"Go back"})}),(0,i.jsxs)("div",{children:[j&&(0,i.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w400").concat(j),alt:h}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{children:[h," (",m,")"]}),(0,i.jsxs)("p",{children:["User Score: ",(0,i.jsxs)("span",{children:[f,"%"]})]}),(0,i.jsx)("h2",{children:"Overview"}),(0,i.jsx)("p",{children:v}),(0,i.jsx)("h2",{children:"Genres"}),(0,i.jsx)("p",{children:u&&u.map((e=>e.name)).join(", ")}),(0,i.jsx)("h2",{children:"Additional Information"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(n.rU,{to:"cast",state:{from:d},children:"Cast"})}),(0,i.jsx)("li",{children:(0,i.jsx)(n.rU,{to:"reviews",state:{from:d},children:"Reviews"})})]})]})]}),(0,i.jsx)(s.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(a.j3,{})})]})},l=o},282:(e,r,t)=>{t.d(r,{rQ:()=>a});var s=t(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";const a=async(e,r)=>{try{return(await s.Z.get(e,{params:{...r,api_key:"6167a2fbe619d64566c427d4bc6ed1cb"}})).data}catch(t){throw console.error("Error fetching data from ".concat(e,":"),t),new Error("Failed to fetch data")}}}}]);
//# sourceMappingURL=961.e7d50be5.chunk.js.map