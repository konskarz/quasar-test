import{u,a as i,b as f}from"./QScrollArea-90095f9c.js";import{b as l,f as q,h as c,u as v,d as S}from"./use-dark-ef6167b3.js";import{y as o,B as r,A as g}from"./index-e5e6e312.js";const b=l({name:"QAvatar",props:{...u,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:a}){const t=i(e),n=o(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),s=o(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const d=e.icon!==void 0?[r(f,{name:e.icon})]:void 0;return r("div",{class:n.value,style:t.value},[r("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},q(a.default,d))])}}}),y=l({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const t=o(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>r(e.tag,{class:t.value},c(a.default))}}),C=l({name:"QCard",props:{...v,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:t}}=g(),n=S(e,t),s=o(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>r(e.tag,{class:s.value},c(a.default))}});export{b as Q,y as a,C as b};