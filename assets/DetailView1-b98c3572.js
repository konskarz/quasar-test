import{Q as u}from"./QBtn-ee66ee97.js";import{e as p,Q as f}from"./use-dark-56d3d454.js";import{b as _}from"./QScrollArea-d1b2e4bf.js";import{u as k}from"./CommentsStore-57d8b1bf.js";import{w as b,M as v,J as a,k as d,m as x,n as o,L as B,I as t,q as r,s as Q,v as l,t as g,u as q,F as w}from"./index-98b4f3e1.js";const y={class:"q-pt-md"},V={class:"q-pt-xs q-px-lg"},h={class:"text-subtitle1"},L={__name:"DetailView1",props:{id:{type:String,required:!0}},setup(m){const n=parseInt(m.id),e=k();if(n){const s=()=>e.selected=e.getItem(n);e.data?s():b(()=>e.data,()=>s())}return v(()=>e.selected=null),(s,c)=>a(e).selected?(d(),x(_,{key:0,class:"fit"},{default:o(()=>[t("div",y,[r(f,null,{default:o(()=>[r(u,{flat:"",round:"",icon:"arrow_back",class:"lt-sm",onClick:c[0]||(c[0]=i=>s.$router.back())}),r(p,null,{default:o(()=>[Q("Detail")]),_:1})]),_:1})]),t("div",V,[t("div",h,l(a(e).selected.name),1),t("p",null,l(a(e).selected.email),1),(d(),g(w,null,q(15,i=>t("p",{key:i},l(a(e).selected.body),1)),64))])]),_:1})):B("",!0)}};export{L as default};
