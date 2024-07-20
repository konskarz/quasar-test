import{D as f,z as n,C as o,r as d,B as E,$ as L,x as S}from"./index-67220a76.js";import{h as I,u as K,l as Q,b as R,k as $,e as w}from"./use-dark-46c33416.js";const A=f({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const s=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:s.value},I(i.default))}}),P=f({name:"QItem",props:{...K,...Q,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:s}){const{proxy:{$q:c}}=E(),b=R(e,c),{hasLink:r,linkAttrs:q,linkClass:k,linkTag:h,navigateOnClick:y}=$(),u=d(null),l=d(null),v=n(()=>e.clickable===!0||r.value===!0||e.tag==="label"),a=n(()=>e.disable!==!0&&v.value===!0),g=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(b.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?k.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=n(()=>e.insetLevel===void 0?null:{["padding"+(c.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function B(t){a.value===!0&&(l.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===u.value?l.value.focus():document.activeElement===l.value&&u.value.focus()),y(t))}function C(t){if(a.value===!0&&L(t,[13,32])===!0){S(t),t.qKeyEvent=!0;const m=new MouseEvent("click",t);m.qKeyEvent=!0,u.value.dispatchEvent(m)}s("keyup",t)}function x(){const t=w(i.default,[]);return a.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:l})),t}return()=>{const t={ref:u,class:g.value,style:_.value,role:"listitem",onClick:B,onKeyup:C};return a.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,q.value)):v.value===!0&&(t["aria-disabled"]="true"),o(h.value,t,x())}}});export{P as Q,A as a};