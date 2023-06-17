import{Q as I}from"./QBtn-93cfaa40.js";import{c as $,h as M,u as G,a as J,b as j,d as X,Q as W,e as Y}from"./use-dark-39f3279d.js";import{Q as T,g as P,a as Z,b as ee,c as te}from"./QScrollArea-32a0b54a.js";import{i as A,e as z,l as D,r as y,c as i,w as q,o as ae,h as m,g as L,p as K,a as le,b as oe,d as x,f as ne,j as re,k as F,m as N,n as v,q as u,s as U,t as ie,u as se,F as ue,v as ce}from"./index-9587388c.js";import{Q as de,a as E}from"./QItem-0f8684ae.js";import{Q as fe}from"./QDrawer-ec848053.js";const ve=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:c,emit:d}){const{proxy:{$q:o}}=L(),a=A(D,z);if(a===z)return console.error("QHeader needs to be child of QLayout"),z;const r=y(parseInt(e.heightHint,10)),n=y(!0),p=i(()=>e.reveal===!0||a.view.value.indexOf("H")>-1||o.platform.is.ios&&a.isContainer.value===!0),b=i(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return n.value===!0?r.value:0;const t=r.value-a.scroll.value.position;return t>0?t:0}),f=i(()=>e.modelValue!==!0||p.value===!0&&n.value!==!0),C=i(()=>e.modelValue===!0&&f.value===!0&&e.reveal===!0),B=i(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(f.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),H=i(()=>{const t=a.rows.value.top,g={};return t[0]==="l"&&a.left.space===!0&&(g[o.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),t[2]==="r"&&a.right.space===!0&&(g[o.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),g});function h(t,g){a.update("header",t,g)}function w(t,g){t.value!==g&&(t.value=g)}function V({height:t}){w(r,t),h("size",t)}function R(t){C.value===!0&&w(n,!0),d("focusin",t)}q(()=>e.modelValue,t=>{h("space",t),w(n,!0),a.animate()}),q(b,t=>{h("offset",t)}),q(()=>e.reveal,t=>{t===!1&&w(n,e.modelValue)}),q(n,t=>{a.animate(),d("reveal",t)}),q(a.scroll,t=>{e.reveal===!0&&w(n,t.direction==="up"||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)});const _={};return a.instances.header=_,e.modelValue===!0&&h("size",r.value),h("space",e.modelValue),h("offset",b.value),ae(()=>{a.instances.header===_&&(a.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const t=M(c.default,[]);return e.elevated===!0&&t.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(m(T,{debounce:0,onResize:V})),m("header",{class:B.value,style:H.value,onFocusin:R},t)}}}),me=$({name:"QList",props:{...G,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:c}){const d=L(),o=J(e,d.proxy.$q),a=i(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>m(e.tag,{class:a.value},j(c.default))}}),he=$({name:"QPageContainer",setup(e,{slots:c}){const{proxy:{$q:d}}=L(),o=A(D,z);if(o===z)return console.error("QPageContainer needs to be child of QLayout"),z;K(le,!0);const a=i(()=>{const r={};return o.header.space===!0&&(r.paddingTop=`${o.header.size}px`),o.right.space===!0&&(r[`padding${d.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(r.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(r[`padding${d.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),r});return()=>m("div",{class:"q-page-container",style:a.value},j(c.default))}}),ge=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:c,emit:d}){const{proxy:{$q:o}}=L(),a=y(null),r=y(o.screen.height),n=y(e.container===!0?0:o.screen.width),p=y({position:0,direction:"down",inflectionPoint:0}),b=y(0),f=y(oe.value===!0?0:P()),C=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),B=i(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),H=i(()=>f.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${f.value}px`}:null),h=i(()=>f.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${f.value}px`,width:`calc(100% + ${f.value}px)`}:null);function w(l){if(e.container===!0||document.qScrollPrevented!==!0){const s={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};p.value=s,e.onScroll!==void 0&&d("scroll",s)}}function V(l){const{height:s,width:Q}=l;let S=!1;r.value!==s&&(S=!0,r.value=s,e.onScrollHeight!==void 0&&d("scrollHeight",s),_()),n.value!==Q&&(S=!0,n.value=Q),S===!0&&e.onResize!==void 0&&d("resize",l)}function R({height:l}){b.value!==l&&(b.value=l,_())}function _(){if(e.container===!0){const l=r.value>b.value?P():0;f.value!==l&&(f.value=l)}}let t=null;const g={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:a,height:r,containerHeight:b,scrollbarWidth:f,totalWidth:i(()=>n.value+f.value),rows:i(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:p,animate(){t!==null?clearTimeout(t):document.body.classList.add("q-body--layout-animate"),t=setTimeout(()=>{t=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,s,Q){g[l][s]=Q}};if(K(D,g),P()>0){let Q=function(){l=null,s.classList.remove("hide-scrollbar")},S=function(){if(l===null){if(s.scrollHeight>o.screen.height)return;s.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(Q,300)},k=function(O){l!==null&&O==="remove"&&(clearTimeout(l),Q()),window[`${O}EventListener`]("resize",S)},l=null;const s=document.body;q(()=>e.container!==!0?"add":"remove",k),e.container!==!0&&k("add"),ne(()=>{k("remove")})}return()=>{const l=X(c.default,[m(Z,{onScroll:w}),m(T,{onResize:V})]),s=m("div",{class:C.value,style:B.value,ref:e.container===!0?void 0:a,tabindex:-1},l);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:a},[m(T,{onResize:R}),m("div",{class:"absolute-full",style:H.value},[m("div",{class:"scroll",style:h.value},[s])])]):s}}}),ze={__name:"MainLayout1",setup(e){const c=y(!1),d=[{to:"/",icon:"view_sidebar",label:"Detail drawer"},{to:"/list-detail",icon:"view_carousel",label:"Detail panel"},{to:"/feed-row",icon:"view_stream",label:"Feed row"},{to:"/feed-column",icon:"view_column",label:"Feed column"}];return(o,a)=>{const r=re("router-view");return F(),N(ge,{view:"hHh LpR fFf"},{default:v(()=>[u(ve,{reveal:"","reveal-offset":0},{default:v(()=>[u(W,null,{default:v(()=>[u(I,{flat:"",round:"",icon:"menu",class:"lt-md",onClick:a[0]||(a[0]=n=>c.value=!c.value)}),u(Y,null,{default:v(()=>[U("Vite App")]),_:1})]),_:1})]),_:1}),u(fe,{modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=n=>c.value=n),"show-if-above":""},{default:v(()=>[u(ee,{class:"fit"},{default:v(()=>[u(W,{class:"lt-md bg-primary text-white"},{default:v(()=>[u(I,{flat:"",round:"",dense:"",icon:"menu_open",onClick:a[1]||(a[1]=n=>c.value=!1)})]),_:1}),u(me,{class:"q-py-md"},{default:v(()=>[(F(),ie(ue,null,se(d,(n,p)=>u(de,{key:p,to:n.to,exact:""},{default:v(()=>[u(E,{avatar:""},{default:v(()=>[u(te,{name:n.icon},null,8,["name"])]),_:2},1024),u(E,null,{default:v(()=>[U(ce(n.label),1)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1})]),_:1})]),_:1},8,["modelValue"]),(F(),N(r,{key:o.$route.path,name:"detail"})),u(he,null,{default:v(()=>[u(r)]),_:1})]),_:1})}}};export{ze as default};
