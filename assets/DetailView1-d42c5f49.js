import{Q as a}from"./QBtn-2c51aaf6.js";import{Q as f,e as _}from"./use-dark-cac87016.js";import{b as k}from"./QScrollArea-7c5cc87f.js";import{u as v}from"./CommentsStore-96c3abac.js";import{M as b,J as o,k as d,t as u,I as s,q as t,n as r,L as g,s as h,v as l,F as x,u as y}from"./index-17298239.js";const Q={key:0,class:"column no-wrap fit"},w={class:"col-auto"},B={class:"q-py-md q-px-lg"},V={class:"text-h6"},D={__name:"DetailView1",props:{id:{type:String,required:!0}},setup(m){const n=parseInt(m.id),e=v();return n&&e.data&&(e.selected=e.getItem(n)),b(()=>e.selected=null),(p,c)=>o(e).selected!==null?(d(),u("div",Q,[s("div",w,[t(f,{class:"bg-accent text-white"},{default:r(()=>[t(a,{flat:"",round:"",icon:"arrow_back",class:"lt-sm",onClick:c[0]||(c[0]=i=>p.$router.back())}),t(_,null,{default:r(()=>[h("Detail")]),_:1}),t(a,{flat:"",round:"",icon:"delete"}),t(a,{flat:"",round:"",icon:"save"})]),_:1})]),t(k,{class:"col"},{default:r(()=>[s("div",B,[s("div",V,l(o(e).selected.name),1),s("p",null,l(o(e).selected.email),1),(d(),u(x,null,y(15,i=>s("p",{key:i},l(o(e).selected.body),1)),64))])]),_:1})])):g("",!0)}};export{D as default};
