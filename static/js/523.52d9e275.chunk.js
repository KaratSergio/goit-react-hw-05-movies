"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[523],{871:(t,n,e)=>{e.d(n,{Z:()=>Z});var r,a,o,s,c,i=e(689),d=e(168),h=e(924);const p=h.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  gap: 40px 30px;\n  flex-wrap: wrap;\n"]))),l=h.ZP.div(a||(a=(0,d.Z)(["\n  width: 200px;  \n  text-align: center;\n"]))),m=h.ZP.a(o||(o=(0,d.Z)(["\n  color: #333;\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: #ff6347;\n  }\n"]))),x=h.ZP.img(s||(s=(0,d.Z)(["\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n"]))),f=h.ZP.h2(c||(c=(0,d.Z)(["\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: bold;\n"])));var g=e(184);const Z=t=>{let{movies:n}=t;const e=(0,i.TH)();return(0,g.jsx)(p,{children:n.map((t=>{let{title:n,id:r,poster_path:a}=t;return(0,g.jsx)(l,{children:(0,g.jsxs)(m,{href:"/movies/".concat(r),state:{from:e},children:[(0,g.jsx)(x,{src:a?"".concat("https://image.tmdb.org/t/p/w200").concat(a):"",alt:n}),(0,g.jsx)(f,{children:n})]})},r)}))})}},523:(t,n,e)=>{e.r(n),e.d(n,{default:()=>m});var r,a,o=e(791),s=e(282),c=e(871),i=e(168),d=e(924);const h=d.ZP.div(r||(r=(0,i.Z)(["\n  max-width: 1120px;\n  padding: 20px;\n"]))),p=d.ZP.h2(a||(a=(0,i.Z)(["\n  color: #333;\n  font-size: 24px;\n  margin-bottom: 20px;\n"])));var l=e(184);const m=()=>{const[t,n]=(0,o.useState)([]);(0,o.useEffect)((()=>{e()}),[]);const e=async()=>{try{const{results:t}=await s.rQ("trending/movie/day");n(t)}catch(t){console.error("Something went wrong, please try again",t)}};return(0,l.jsxs)(h,{children:[(0,l.jsx)(p,{children:"Trending movies"}),(0,l.jsx)(c.Z,{movies:t})]})}},282:(t,n,e)=>{e.d(n,{Bm:()=>o,rQ:()=>a});var r=e(294);r.Z.defaults.baseURL="https://api.themoviedb.org/3/";const a=async(t,n)=>{try{return(await r.Z.get(t,{params:{...n,api_key:"6167a2fbe619d64566c427d4bc6ed1cb"}})).data}catch(e){throw console.error("Error fetching data from ".concat(t,":"),e),new Error("Failed to fetch data")}},o=t=>a("movie/".concat(t))}}]);
//# sourceMappingURL=523.52d9e275.chunk.js.map