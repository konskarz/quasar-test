import{Q as w}from"./QBtn-ee66ee97.js";import{e as x,Q as h}from"./use-dark-56d3d454.js";import{b as v}from"./QScrollArea-d1b2e4bf.js";import{Q,a as k,b}from"./QCard-46287307.js";import{Q as g}from"./QDrawer-440eab1a.js";import{u as y}from"./CommentsStore-57d8b1bf.js";import{r as V,w as f,k as n,m as c,n as a,J as d,I as r,q as s,s as m,v as u,t as p,u as q,F as B}from"./index-98b4f3e1.js";const C={class:"q-pt-md"},S={class:"q-pt-xs q-px-lg"},D={class:"text-subtitle1"},T={key:1,class:"flex flex-center fit"},L={__name:"DetailView2",setup(N){const t=y(),l=V(!1);f(l,e=>{e||(t.selected=null)}),f(()=>t.selected,e=>l.value=!!e);function _(e){return e.gt.sm?(e.width-317)/2:e.sm?300:e.width}return(e,o)=>(n(),c(g,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=i=>l.value=i),side:"right",breakpoint:599,"show-if-above":"",width:_(e.$q.screen)},{default:a(()=>[d(t).selected?(n(),c(v,{key:0,class:"fit"},{default:a(()=>[r("div",C,[s(h,null,{default:a(()=>[s(w,{flat:"",round:"",icon:"arrow_back",class:"lt-sm",onClick:o[0]||(o[0]=i=>l.value=!1)}),s(x,null,{default:a(()=>[m("Detail")]),_:1})]),_:1})]),r("div",S,[r("div",D,u(d(t).selected.name),1),r("p",null,u(d(t).selected.email),1),(n(),p(B,null,q(15,i=>r("p",{key:i},u(d(t).selected.body),1)),64))])]),_:1})):(n(),p("div",T,[s(b,{flat:"",class:"text-center text-grey",style:{"max-width":"250px"}},{default:a(()=>[s(Q,{size:"100px",icon:"info_outline"}),s(k,null,{default:a(()=>[m("Select something first")]),_:1})]),_:1})]))]),_:1},8,["modelValue","width"]))}};export{L as default};
