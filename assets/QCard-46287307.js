import{u,k as i,c as q}from"./QScrollArea-d1b2e4bf.js";import{c,k as v,b as l,u as S,a as f}from"./use-dark-56d3d454.js";import{c as o,h as r,g}from"./index-98b4f3e1.js";const C=c({name:"QAvatar",props:{...u,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:a}){const t=i(e),n=o(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),s=o(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const d=e.icon!==void 0?[r(q,{name:e.icon})]:void 0;return r("div",{class:n.value,style:t.value},[r("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},v(a.default,d))])}}}),b=c({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const t=o(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>r(e.tag,{class:t.value},l(a.default))}}),y=c({name:"QCard",props:{...S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:t}}=g(),n=f(e,t),s=o(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>r(e.tag,{class:s.value},l(a.default))}});export{C as Q,b as a,y as b};