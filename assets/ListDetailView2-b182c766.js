import{c as V,i as ue,b as Q,u as ae,a as oe,j as ce,k as de,e as pe,g as ve,Q as fe}from"./use-dark-b7a9b003.js";import{Q as me,a as he,b as X}from"./QPage-f896389f.js";import{Q as ge,a as _e}from"./QItem-b5440804.js";import{u as ye,i as xe,f as be,j as Y,s as G,k as Pe,e as Se}from"./QScrollArea-5a529058.js";import{c as f,h as m,g as j,b as C,G as qe,I as Ce,J as D,K as N,L as J,s as E,M,r as H,w as we,T as ke,n as Ve,N as Qe,x as y,y as L,z as d,A as v,O as B,P as k,_ as Te,v as Ae,Q as w,B as z,C as F,F as $e,D as De,R as Z,E as ee}from"./index-781f76b1.js";import{u as Be}from"./CommentsStore-75e860eb.js";const ze=V({name:"QAvatar",props:{...ye,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:n}){const r=xe(e),i=f(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),s=f(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const t=e.icon!==void 0?[m(be,{name:e.icon})]:void 0;return m("div",{class:i.value,style:r.value},[m("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},ue(n.default,t))])}}}),Le=V({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const r=f(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>m(e.tag,{class:r.value},Q(n.default))}}),Ie=V({name:"QCard",props:{...ae,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:r}}=j(),i=oe(e,r),s=f(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>m(e.tag,{class:s.value},Q(n.default))}});function Ne(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,i)=>{const s=parseFloat(r);s&&(n[i]=s)}),n}const Ee=ce({name:"touch-swipe",beforeMount(e,{value:n,arg:r,modifiers:i}){if(i.mouse!==!0&&C.has.touch!==!0)return;const s=i.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Ne(r),direction:Y(i),noop:qe,mouseStart(a){G(a,t)&&Ce(a)&&(D(t,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(G(a,t)){const u=a.target;D(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,u){C.is.firefox===!0&&N(e,!0);const _=J(a);t.event={x:_.left,y:_.top,time:Date.now(),mouse:u===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){E(a);return}const u=Date.now()-t.event.time;if(u===0)return;const _=J(a),x=_.left-t.event.x,p=Math.abs(x),b=_.top-t.event.y,c=Math.abs(b);if(t.event.mouse!==!0){if(p<t.sensitivity[1]&&c<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(p<t.sensitivity[2]&&c<t.sensitivity[2])return;const g=p/u,P=c/u;t.direction.vertical===!0&&p<c&&p<100&&P>t.sensitivity[0]&&(t.event.dir=b<0?"up":"down"),t.direction.horizontal===!0&&p>c&&c<100&&g>t.sensitivity[0]&&(t.event.dir=x<0?"left":"right"),t.direction.up===!0&&p<c&&b<0&&p<100&&P>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&p<c&&b>0&&p<100&&P>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&p>c&&x<0&&c<100&&g>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&p>c&&x>0&&c<100&&g>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(E(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Pe(),t.styleCleanup=T=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const S=()=>{document.body.classList.remove("no-pointer-events--children")};T===!0?setTimeout(S,50):S()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:u,distance:{x:p,y:c}})):t.end(a)},end(a){t.event!==void 0&&(M(t,"temp"),C.is.firefox===!0&&N(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&E(a),t.event=void 0)}};if(e.__qtouchswipe=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";D(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}C.has.touch===!0&&D(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const r=e.__qtouchswipe;r!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&r.end(),r.handler=n.value),r.direction=Y(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(M(n,"main"),M(n,"temp"),C.is.firefox===!0&&N(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Me(){const e=new Map;return{getCache:function(n,r){return e[n]===void 0?e[n]=r:e[n]},getCacheWithFn:function(n,r){return e[n]===void 0?e[n]=r():e[n]}}}const Fe={name:{required:!0},disable:Boolean},te={setup(e,{slots:n}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},Q(n.default))}},je={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ke=["update:modelValue","beforeTransition","transition"];function Oe(){const{props:e,emit:n,proxy:r}=j(),{getCacheWithFn:i}=Me();let s,t;const a=H(null),u=H(null);function _(o){const l=e.vertical===!0?"up":"left";q((r.$q.lang.rtl===!0?-1:1)*(o.direction===l?1:-1))}const x=f(()=>[[Ee,_,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),p=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),c=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),g=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),P=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),T=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);we(()=>e.modelValue,(o,l)=>{const h=A(o)===!0?I(o):-1;t!==!0&&U(h===-1?0:h<I(l)?-1:1),a.value!==h&&(a.value=h,n("beforeTransition",o,l),Ve(()=>{n("transition",o,l)}))});function S(){q(1)}function K(){q(-1)}function O(o){n("update:modelValue",o)}function A(o){return o!=null&&o!==""}function I(o){return s.findIndex(l=>l.props.name===o&&l.props.disable!==""&&l.props.disable!==!0)}function se(){return s.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function U(o){const l=o!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?p.value:b.value):null;u.value!==l&&(u.value=l)}function q(o,l=a.value){let h=l+o;for(;h>-1&&h<s.length;){const $=s[h];if($!==void 0&&$.props.disable!==""&&$.props.disable!==!0){U(o),t=!0,n("update:modelValue",$.props.name),setTimeout(()=>{t=!1});return}h+=o}e.infinite===!0&&s.length!==0&&l!==-1&&l!==s.length&&q(o,o===-1?s.length:-1)}function W(){const o=I(e.modelValue);return a.value!==o&&(a.value=o),!0}function R(){const o=A(e.modelValue)===!0&&W()&&s[a.value];return e.keepAlive===!0?[m(Qe,P.value,[m(T.value===!0?i(g.value,()=>({...te,name:g.value})):te,{key:g.value,style:c.value},()=>o)])]:[m("div",{class:"q-panel scroll",style:c.value,key:g.value,role:"tabpanel"},[o])]}function re(){if(s.length!==0)return e.animated===!0?[m(ke,{name:u.value},R)]:R()}function ie(o){return s=de(Q(o.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&A(l.props.name)===!0),s.length}function le(){return s}return Object.assign(r,{next:S,previous:K,goTo:O}),{panelIndex:a,panelDirectives:x,updatePanelsList:ie,updatePanelIndex:W,getPanelContent:re,getEnabledPanels:se,getPanels:le,isValidPanelName:A,keepAliveProps:P,needsUniqueKeepAliveWrapper:T,goToPanelByOffset:q,goToPanel:O,nextPanel:S,previousPanel:K}}const ne=V({name:"QTabPanel",props:Fe,setup(e,{slots:n}){return()=>m("div",{class:"q-tab-panel",role:"tabpanel"},Q(n.default))}}),Ue=V({name:"QTabPanels",props:{...je,...ae},emits:Ke,setup(e,{slots:n}){const r=j(),i=oe(e,r.proxy.$q),{updatePanelsList:s,getPanelContent:t,panelDirectives:a}=Oe(),u=f(()=>"q-tab-panels q-panel-parent"+(i.value===!0?" q-tab-panels--dark q-dark":""));return()=>(s(n),pe("div",{class:u.value},t(),"pan",e.swipeable,()=>a.value))}}),We={class:"gt-xs row no-wrap full-height"},Re={class:"col col-lg-4 col-xl-3"},Xe={class:"col"},Ye={__name:"ListDetailPage",props:{modelValue:{type:Object,default:null}},setup(e){const n=e,r=f(()=>n.modelValue?"detail":"list");function i(s,t){return{height:t-s+"px"}}return(s,t)=>(y(),L(me,{"style-fn":i},{default:d(()=>[v(Ue,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),animated:"","keep-alive":"",class:"xs full-height"},{default:d(()=>[v(ne,{name:"list",class:"q-pa-none"},{default:d(()=>[B(s.$slots,"list")]),_:3}),v(ne,{name:"detail",class:"q-pa-none"},{default:d(()=>[B(s.$slots,"detail")]),_:3})]),_:3},8,["modelValue"]),k("div",We,[k("div",Re,[B(s.$slots,"list")]),k("div",Xe,[B(s.$slots,"detail")])])]),_:3}))}};const Ge={class:"column no-wrap fit"},Je={class:"col-auto"},He={key:0,class:"q-py-md"},Ze={key:0,class:"flex flex-center fit"},et={__name:"ListDetailView2",setup(e){const n=Be();return(r,i)=>{const s=Ae("router-view");return y(),L(Ye,{modelValue:w(n).selected,"onUpdate:modelValue":i[0]||(i[0]=t=>w(n).selected=t)},{list:d(()=>[k("div",Ge,[k("div",Je,[v(fe,{class:"bg-accent text-white q-pl-lg"},{default:d(()=>[v(ve,null,{default:d(()=>[z("List")]),_:1})]),_:1})]),v(Se,{class:"col"},{default:d(()=>[w(n).data?(y(),F("div",He,[(y(!0),F($e,null,De(w(n).data,t=>(y(),L(he,{key:t.id,class:"intersection-item",once:""},{default:d(()=>[v(ge,{to:{name:"comment",params:{id:t.id}},exact:"",class:"q-px-lg"},{default:d(()=>[v(_e,null,{default:d(()=>[v(X,null,{default:d(()=>[z(ee(t.name),1)]),_:2},1024),v(X,{caption:""},{default:d(()=>[z(ee(t.email),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))])):Z("",!0)]),_:1})])]),detail:d(()=>[w(n).selected?Z("",!0):(y(),F("div",Ze,[v(Ie,{flat:"",class:"text-center text-grey",style:{"max-width":"250px"}},{default:d(()=>[v(ze,{size:"100px",icon:"info_outline"}),v(Le,null,{default:d(()=>[z("Select something first")]),_:1})]),_:1})])),(y(),L(s,{key:r.$route.path}))]),_:1},8,["modelValue"])}}},it=Te(et,[["__scopeId","data-v-efcef998"]]);export{it as default};