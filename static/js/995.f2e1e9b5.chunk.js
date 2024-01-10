"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{874:(e,n,t)=>{t.d(n,{Z:()=>S});var r=t(689);const o=t.p+"static/media/Film.f09f5f74e99d6ec47c05.png";var a,i,s,c=t(168),d=t(924);const l=d.ZP.div(a||(a=(0,c.Z)(["\n  width: 150px;\n  height: 225px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid #fff;\n  border-radius: 8px;\n"]))),p=d.ZP.img(i||(i=(0,c.Z)(["\n  width: 150px;\n  height: 155px;\n"]))),h=d.ZP.p(s||(s=(0,c.Z)(["\n  font-size: 24px;\n  color: #ecdede;\n  margin-top: 15px;\n"])));var x=t(184);const u=()=>(0,x.jsxs)(l,{children:[(0,x.jsx)(p,{src:o,alt:"No Poster"}),(0,x.jsx)(h,{children:"No Poster"})]});var f,g,m,b,v,Z=t(87);const w=d.ZP.div(f||(f=(0,c.Z)(["\n  display: flex;\n  gap: 40px 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n  background: radial-gradient(circle at center, #114e79, #011);\n  box-shadow: 0 0 14px rgb(80, 123, 176);\n  padding: 20px;\n"]))),j=d.ZP.div(g||(g=(0,c.Z)(["\n  width: 150px;\n  text-align: center;\n"]))),y=(0,d.ZP)(Z.rU)(m||(m=(0,c.Z)(["\n  color: #ecdede;\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: #ff6347;\n  }\n"]))),P=d.ZP.img(b||(b=(0,c.Z)(["\n  max-width: 100%;\n  height: 225px;\n  border-radius: 8px;\n\n  &:hover {\n    box-shadow: 0 0 5px #ff6347;\n  }\n"]))),k=d.ZP.h2(v||(v=(0,c.Z)(["\n  margin-top: 10px;\n  font-size: 16px;\n  font-family: 'Helvetica Neue';\n  letter-spacing: 1px;\n  font-weight: 400;\n"]))),S=e=>{let{movies:n}=e;const t=(0,r.TH)();return(0,x.jsx)(w,{children:n.map((e=>{let{title:n,id:r,poster_path:o}=e;return(0,x.jsx)(j,{children:(0,x.jsxs)(y,{to:"/movies/".concat(r),state:{from:t},children:[o?(0,x.jsx)(P,{src:"".concat("https://image.tmdb.org/t/p/w200").concat(o),alt:n}):(0,x.jsx)(u,{}),(0,x.jsx)(k,{children:n})]})},r)}))})}},582:(e,n,t)=>{t.r(n),t.d(n,{Movies:()=>w,default:()=>j});var r,o,a,i,s=t(791),c=t(87),d=t(282),l=t(168),p=t(924);const h=p.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),x=p.ZP.label(o||(o=(0,l.Z)(["\n  color: #ecdede;\n"]))),u=p.ZP.input(a||(a=(0,l.Z)(["\n  height: 22px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n  padding-left: 8px;\n  margin-left: 8px;\n\n  &:hover {\n    border-color: #ff6347;\n    box-shadow: 0 0 5px #ff6347;\n  }\n"]))),f=p.ZP.button(i||(i=(0,l.Z)(["\n  height: 29px;\n  color: #ecdede;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  transition: color 0.3s ease;\n\n  &:hover {\n    background-color: #f86347;\n  }\n"])));var g=t(184);const m=e=>{let{value:n,onChange:t,onSubmit:r}=e;return(0,g.jsxs)(h,{onSubmit:r,children:[(0,g.jsxs)(x,{children:["Search movie:",(0,g.jsx)(u,{type:"text",name:"searchName",value:n,onChange:t,autoComplete:"off",autoFocus:!0,placeholder:"Movie name..."})]}),(0,g.jsx)(f,{type:"submit",children:(0,g.jsx)("span",{role:"img","aria-label":"Search",children:"\ud83d\udd0d"})})]})};var b,v=t(874);const Z=p.ZP.div(b||(b=(0,l.Z)(["\n  background: radial-gradient(circle at center, #114e79, #011);\n  box-shadow: 0 0 14px rgb(80, 123, 176);\n  padding: 20px;\n  height: 100vh;\n"]))),w=()=>{var e;const[n,t]=(0,s.useState)([]),[r,o]=(0,s.useState)(""),[a,i]=(0,c.lr)(),l=null!==(e=a.get("query"))&&void 0!==e?e:"",p=e=>{o(e.currentTarget.value.toLowerCase())};return(0,s.useEffect)((()=>{if(!l)return;(async()=>{try{const{results:e}=await d.rQ("search/movie",{query:l});t(e)}catch(e){console.error("Something went wrong, please try again",e)}})()}),[l]),(0,g.jsx)(Z,{children:(0,g.jsxs)("div",{children:[(0,g.jsxs)(m,{value:r,onChange:p,onSubmit:e=>{e.preventDefault(),i({query:r}),o("")},children:[(0,g.jsxs)("label",{children:["Search:",(0,g.jsx)("input",{type:"text",value:r,onChange:p})]}),(0,g.jsx)("button",{type:"submit",children:"Search"})]}),n.length>0&&(0,g.jsx)(v.Z,{movies:n})]})})},j=w},282:(e,n,t)=>{t.d(n,{rQ:()=>o});var r=t(294);r.Z.defaults.baseURL="https://api.themoviedb.org/3/";const o=async(e,n)=>{try{return(await r.Z.get(e,{params:{...n,api_key:"6167a2fbe619d64566c427d4bc6ed1cb"}})).data}catch(t){throw console.error("Error fetching data from ".concat(e,":"),t),new Error("Failed to fetch data")}}}}]);
//# sourceMappingURL=995.f2e1e9b5.chunk.js.map