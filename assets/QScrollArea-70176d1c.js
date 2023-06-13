import{c as h,h as g,g as Y,Q as Je,S as se,J as F,M as I,U as X,L as G,r as C,s as P,V as ce,o as Q,k as de,d as J,T as Ze,q as et,a as Z,G as ge,n as ye,w as fe,W as tt,b as N,I as nt,K as le,X as it,j as lt,Y as ot}from"./index-caaa8f16.js";import{c as D,b as rt,f as A,k as je,n as at,o as ut,u as st,a as ct}from"./QItem-06262614.js";const ve={xs:18,sm:24,md:32,lg:38,xl:46},Ae={size:String};function De(e,t=ve){return h(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const Se="0 0 24 24",we=e=>e,oe=e=>`ionicons ${e}`,He={"mdi-":e=>`mdi ${e}`,"icon-":we,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":oe,"ion-ios":oe,"ion-logo":oe,"iconfont ":we,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},Ne={o_:"-outlined",r_:"-round",s_:"-sharp"},Fe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},dt=new RegExp("^("+Object.keys(He).join("|")+")"),ft=new RegExp("^("+Object.keys(Ne).join("|")+")"),ze=new RegExp("^("+Object.keys(Fe).join("|")+")"),vt=/^[Mm]\s?[-+]?\.?\d/,mt=/^img:/,ht=/^svguse:/,bt=/^ion-/,gt=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,qe=D({name:"QIcon",props:{...Ae,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=Y(),a=De(e),n=h(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=h(()=>{let r,i=e.name;if(i==="none"||!i)return{none:!0};if(l.iconMapFn!==null){const v=l.iconMapFn(i);if(v!==void 0)if(v.icon!==void 0){if(i=v.icon,i==="none"||!i)return{none:!0}}else return{cls:v.cls,content:v.content!==void 0?v.content:" "}}if(vt.test(i)===!0){const[v,p=Se]=i.split("|");return{svg:!0,viewBox:p,nodes:v.split("&&").map(u=>{const[b,S,q]=u.split("@@");return g("path",{style:S,d:b,transform:q})})}}if(mt.test(i)===!0)return{img:!0,src:i.substring(4)};if(ht.test(i)===!0){const[v,p=Se]=i.split("|");return{svguse:!0,src:v.substring(7),viewBox:p}}let d=" ";const c=i.match(dt);if(c!==null)r=He[c[1]](i);else if(gt.test(i)===!0)r=i;else if(bt.test(i)===!0)r=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(ze.test(i)===!0){r="notranslate material-symbols";const v=i.match(ze);v!==null&&(i=i.substring(6),r+=Fe[v[1]]),d=i}else{r="notranslate material-icons";const v=i.match(ft);v!==null&&(i=i.substring(2),r+=Ne[v[1]]),d=i}return{cls:r,content:d}});return()=>{const r={class:n.value,style:a.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?g(e.tag,r,rt(t.default)):o.value.img===!0?g("span",r,A(t.default,[g("img",{src:o.value.src})])):o.value.svg===!0?g("span",r,A(t.default,[g("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?g("span",r,A(t.default,[g("svg",{viewBox:o.value.viewBox},[g("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(r.class+=" "+o.value.cls),g(e.tag,r,A(t.default,[o.value.content])))}}}),pt={size:{type:[Number,String],default:"1em"},color:String};function yt(e){return{cSize:h(()=>e.size in ve?`${ve[e.size]}px`:e.size),classes:h(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const St=D({name:"QSpinner",props:{...pt,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:l}=yt(e);return()=>g("svg",{class:l.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function me(e,t){const l=e.style;for(const a in t)l[a]=t[a]}function wt(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Je(e);if(t)return t.$el||t}function zt(e,t=250){let l=!1,a;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),a=e.apply(this,arguments)),a}}function Ee(e,t,l,a){l.modifiers.stop===!0&&X(e);const n=l.modifiers.color;let o=l.modifiers.center;o=o===!0||a===!0;const r=document.createElement("span"),i=document.createElement("span"),d=G(e),{left:c,top:v,width:p,height:u}=t.getBoundingClientRect(),b=Math.sqrt(p*p+u*u),S=b/2,q=`${(p-b)/2}px`,y=o?q:`${d.left-c-S}px`,E=`${(u-b)/2}px`,O=o?E:`${d.top-v-S}px`;i.className="q-ripple__inner",me(i,{height:`${b}px`,width:`${b}px`,transform:`translate3d(${y},${O},0) scale3d(.2,.2,1)`,opacity:0}),r.className=`q-ripple${n?" text-"+n:""}`,r.setAttribute("dir","ltr"),r.appendChild(i),t.appendChild(r);const T=()=>{r.remove(),clearTimeout(M)};l.abort.push(T);let M=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${q},${E},0) scale3d(1,1,1)`,i.style.opacity=.2,M=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,M=setTimeout(()=>{r.remove(),l.abort.splice(l.abort.indexOf(T),1)},275)},250)},50)}function ke(e,{modifiers:t,value:l,arg:a}){const n=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:n.early===!0,stop:n.stop===!0,center:n.center===!0,color:n.color||a,keyCodes:[].concat(n.keyCodes||13)}}const qt=je({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const a={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(n){a.enabled===!0&&n.qSkipRipple!==!0&&n.type===(a.modifiers.early===!0?"pointerdown":"click")&&Ee(n,e,a,n.qKeyEvent===!0)},keystart:zt(n=>{a.enabled===!0&&n.qSkipRipple!==!0&&se(n,a.modifiers.keyCodes)===!0&&n.type===`key${a.modifiers.early===!0?"down":"up"}`&&Ee(n,e,a,!0)},300)};ke(a,t),e.__qripple=a,F(a,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&ke(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),I(t,"main"),delete e._qripple)}}),Xe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Et=Object.keys(Xe),kt={align:{type:String,validator:e=>Et.includes(e)}};function Ct(e){return h(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Xe[t]}`})}const Ce={none:0,xs:4,sm:8,md:16,lg:24,xl:32},_t={xs:8,sm:10,md:14,lg:20,xl:24},xt=["button","submit","reset"],Tt=/[^\s]\/[^\s]/,Mt=["flat","outline","push","unelevated"],Lt=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,$t={...Ae,...at,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Mt.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...kt.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Pt(e){const t=De(e,_t),l=Ct(e),{hasRouterLink:a,hasLink:n,linkTag:o,linkAttrs:r,navigateOnClick:i}=ut({fallbackTag:"button"}),d=h(()=>{const y=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},y,{padding:e.padding.split(/\s+/).map(E=>E in Ce?Ce[E]+"px":E).join(" "),minWidth:"0",minHeight:"0"}):y}),c=h(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=h(()=>e.disable!==!0&&e.loading!==!0),p=h(()=>v.value===!0?e.tabindex||0:-1),u=h(()=>Lt(e,"standard")),b=h(()=>{const y={tabindex:p.value};return n.value===!0?Object.assign(y,r.value):xt.includes(e.type)===!0&&(y.type=e.type),o.value==="a"?(e.disable===!0?y["aria-disabled"]="true":y.href===void 0&&(y.role="button"),a.value!==!0&&Tt.test(e.type)===!0&&(y.type=e.type)):e.disable===!0&&(y.disabled="",y["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(y,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),y}),S=h(()=>{let y;e.color!==void 0?e.flat===!0||e.outline===!0?y=`text-${e.textColor||e.color}`:y=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(y=`text-${e.textColor}`);const E=e.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${E}`+(y!==void 0?" "+y:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),q=h(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:S,style:d,innerClasses:q,attributes:b,hasLink:n,linkTag:o,navigateOnClick:i,isActionable:v}}const{passiveCapture:_}=J;let R=null,B=null,j=null;const Yt=D({name:"QBtn",props:{...$t,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:a}=Y(),{classes:n,style:o,innerClasses:r,attributes:i,hasLink:d,linkTag:c,navigateOnClick:v,isActionable:p}=Pt(e),u=C(null),b=C(null);let S=null,q,y=null;const E=h(()=>e.label!==void 0&&e.label!==null&&e.label!==""),O=h(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:d.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),T=h(()=>({center:e.round})),M=h(()=>{const f=Math.max(0,Math.min(100,e.percentage));return f>0?{transition:"transform 0.6s",transform:`translateX(${f-100}%)`}:{}}),ee=h(()=>{if(e.loading===!0)return{onMousedown:L,onTouchstart:L,onClick:L,onKeydown:L,onKeyup:L};if(p.value===!0){const f={onClick:H,onKeydown:V,onMousedown:ie};if(a.$q.platform.has.touch===!0){const w=e.onTouchstart!==void 0?"":"Passive";f[`onTouchstart${w}`]=ne}return f}return{onClick:P}}),te=h(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+n.value,style:o.value,...i.value,...ee.value}));function H(f){if(u.value!==null){if(f!==void 0){if(f.defaultPrevented===!0)return;const w=document.activeElement;if(e.type==="submit"&&w!==document.body&&u.value.contains(w)===!1&&w.contains(u.value)===!1){u.value.focus();const s=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",s,_),u.value!==null&&u.value.removeEventListener("blur",s,_)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",s,_),u.value.addEventListener("blur",s,_)}}v(f)}}function V(f){u.value!==null&&(l("keydown",f),se(f,[13,32])===!0&&B!==u.value&&(B!==null&&x(),f.defaultPrevented!==!0&&(u.value.focus(),B=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",k,!0),u.value.addEventListener("blur",k,_)),P(f)))}function ne(f){u.value!==null&&(l("touchstart",f),f.defaultPrevented!==!0&&(R!==u.value&&(R!==null&&x(),R=u.value,S=f.target,S.addEventListener("touchcancel",k,_),S.addEventListener("touchend",k,_)),q=!0,y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,q=!1},200)))}function ie(f){u.value!==null&&(f.qSkipRipple=q===!0,l("mousedown",f),f.defaultPrevented!==!0&&j!==u.value&&(j!==null&&x(),j=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",k,_)))}function k(f){if(u.value!==null&&!(f!==void 0&&f.type==="blur"&&document.activeElement===u.value)){if(f!==void 0&&f.type==="keyup"){if(B===u.value&&se(f,[13,32])===!0){const w=new MouseEvent("click",f);w.qKeyEvent=!0,f.defaultPrevented===!0&&ce(w),f.cancelBubble===!0&&X(w),u.value.dispatchEvent(w),P(f),f.qKeyEvent=!0}l("keyup",f)}x()}}function x(f){const w=b.value;f!==!0&&(R===u.value||j===u.value)&&w!==null&&w!==document.activeElement&&(w.setAttribute("tabindex",-1),w.focus()),R===u.value&&(S!==null&&(S.removeEventListener("touchcancel",k,_),S.removeEventListener("touchend",k,_)),R=S=null),j===u.value&&(document.removeEventListener("mouseup",k,_),j=null),B===u.value&&(document.removeEventListener("keyup",k,!0),u.value!==null&&u.value.removeEventListener("blur",k,_),B=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function L(f){P(f),f.qSkipRipple=!0}return Q(()=>{x(!0)}),Object.assign(a,{click:H}),()=>{let f=[];e.icon!==void 0&&f.push(g(qe,{name:e.icon,left:e.stack===!1&&E.value===!0,role:"img","aria-hidden":"true"})),E.value===!0&&f.push(g("span",{class:"block"},[e.label])),f=A(t.default,f),e.iconRight!==void 0&&e.round===!1&&f.push(g(qe,{name:e.iconRight,right:e.stack===!1&&E.value===!0,role:"img","aria-hidden":"true"}));const w=[g("span",{class:"q-focus-helper",ref:b})];return e.loading===!0&&e.percentage!==void 0&&w.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:M.value})])),w.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+r.value},f)),e.loading!==null&&w.push(g(Ze,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(St)])]:null)),de(g(c.value,te.value,w),[[qt,O.value,void 0,T.value]])}}});function Ot(){const e=C(!et.value);return e.value===!1&&Z(()=>{e.value=!0}),e}const Qe=typeof ResizeObserver<"u",_e=Qe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},xe=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let l=null,a,n={width:-1,height:-1};function o(d){d===!0||e.debounce===0||e.debounce==="0"?r():l===null&&(l=setTimeout(r,e.debounce))}function r(){if(l!==null&&(clearTimeout(l),l=null),a){const{offsetWidth:d,offsetHeight:c}=a;(d!==n.width||c!==n.height)&&(n={width:d,height:c},t("resize",n))}}const{proxy:i}=Y();if(Qe===!0){let d;const c=v=>{a=i.$el.parentNode,a?(d=new ResizeObserver(o),d.observe(a),r()):v!==!0&&ye(()=>{c(!0)})};return Z(()=>{c()}),Q(()=>{l!==null&&clearTimeout(l),d!==void 0&&(d.disconnect!==void 0?d.disconnect():a&&d.unobserve(a))}),ge}else{let v=function(){l!==null&&(clearTimeout(l),l=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",o,J.passive),c=void 0)},p=function(){v(),a&&a.contentDocument&&(c=a.contentDocument.defaultView,c.addEventListener("resize",o,J.passive),r())};const d=Ot();let c;return Z(()=>{ye(()=>{a=i.$el,a&&p()})}),Q(v),i.trigger=o,()=>{if(d.value===!0)return g("object",{style:_e.style,tabindex:-1,type:"text/html",data:_e.url,"aria-hidden":"true",onLoad:p})}}}}),Rt=[null,document,document.body,document.scrollingElement,document.documentElement];function Bt(e,t){let l=wt(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Rt.includes(l)?window:l}function Ye(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ve(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function We(e,t,l=0){const a=arguments[3]===void 0?performance.now():arguments[3],n=Ye(e);if(l<=0){n!==t&&he(e,t);return}requestAnimationFrame(o=>{const r=o-a,i=n+(t-n)/Math.max(r,l)*r;he(e,i),i!==t&&We(e,t,l-r,o)})}function Ke(e,t,l=0){const a=arguments[3]===void 0?performance.now():arguments[3],n=Ve(e);if(l<=0){n!==t&&be(e,t);return}requestAnimationFrame(o=>{const r=o-a,i=n+(t-n)/Math.max(r,l)*r;be(e,i),i!==t&&Ke(e,t,l-r,o)})}function he(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function be(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function Te(e,t,l){if(l){We(e,t,l);return}he(e,t)}function re(e,t,l){if(l){Ke(e,t,l);return}be(e,t)}let K;function Vt(){if(K!==void 0)return K;const e=document.createElement("p"),t=document.createElement("div");me(e,{width:"100%",height:"200px"}),me(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let a=e.offsetWidth;return l===a&&(a=t.clientWidth),t.remove(),K=l-a,K}function Wt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{passive:Me}=J,jt=["both","horizontal","vertical"],At=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>jt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,n,o;fe(()=>e.scrollTarget,()=>{d(),i()});function r(){a!==null&&a();const p=Math.max(0,Ye(n)),u=Ve(n),b={top:p-l.position.top,left:u-l.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const S=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";l.position={top:p,left:u},l.directionChanged=l.direction!==S,l.delta=b,l.directionChanged===!0&&(l.direction=S,l.inflectionPoint=l.position),t("scroll",{...l})}function i(){n=Bt(o,e.scrollTarget),n.addEventListener("scroll",c,Me),c(!0)}function d(){n!==void 0&&(n.removeEventListener("scroll",c,Me),n=void 0)}function c(p){if(p===!0||e.debounce===0||e.debounce==="0")r();else if(a===null){const[u,b]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];a=()=>{b(u),a=null}}}const{proxy:v}=Y();return fe(()=>v.$q.lang.rtl,r),Z(()=>{o=v.$el.parentNode,i()}),Q(()=>{a!==null&&a(),d()}),Object.assign(v,{trigger:c,getPosition:()=>l}),ge}}),pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Dt=Object.keys(pe);pe.all=!0;function Le(e){const t={};for(const l of Dt)e[l]===!0&&(t[l]=!0);return Object.keys(t).length===0?pe:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Ht=["INPUT","TEXTAREA"];function $e(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Ht.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Nt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),tt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ae(e,t,l){const a=G(e);let n,o=a.left-t.event.x,r=a.top-t.event.y,i=Math.abs(o),d=Math.abs(r);const c=t.direction;c.horizontal===!0&&c.vertical!==!0?n=o<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?n=r<0?"up":"down":c.up===!0&&r<0?(n="up",i>d&&(c.left===!0&&o<0?n="left":c.right===!0&&o>0&&(n="right"))):c.down===!0&&r>0?(n="down",i>d&&(c.left===!0&&o<0?n="left":c.right===!0&&o>0&&(n="right"))):c.left===!0&&o<0?(n="left",i<d&&(c.up===!0&&r<0?n="up":c.down===!0&&r>0&&(n="down"))):c.right===!0&&o>0&&(n="right",i<d&&(c.up===!0&&r<0?n="up":c.down===!0&&r>0&&(n="down")));let v=!1;if(n===void 0&&l===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};n=t.event.lastDir,v=!0,n==="left"||n==="right"?(a.left-=o,i=0,o=0):(a.top-=r,d=0,r=0)}return{synthetic:v,payload:{evt:e,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:a,direction:n,isFirst:t.event.isFirst,isFinal:l===!0,duration:Date.now()-t.event.time,distance:{x:i,y:d},offset:{x:o,y:r},delta:{x:a.left-t.event.lastX,y:a.top-t.event.lastY}}}}let Ft=0;const Pe=je({name:"touch-pan",beforeMount(e,{value:t,modifiers:l}){if(l.mouse!==!0&&N.has.touch!==!0)return;function a(o,r){l.mouse===!0&&r===!0?P(o):(l.stop===!0&&X(o),l.prevent===!0&&ce(o))}const n={uid:"qvtp_"+Ft++,handler:t,modifiers:l,direction:Le(l),noop:ge,mouseStart(o){$e(o,n)&&nt(o)&&(F(n,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),n.start(o,!0))},touchStart(o){if($e(o,n)){const r=o.target;F(n,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),n.start(o)}},start(o,r){if(N.is.firefox===!0&&le(e,!0),n.lastEvt=o,r===!0||l.stop===!0){if(n.direction.all!==!0&&(r!==!0||n.modifiers.mouseAllDir!==!0&&n.modifiers.mousealldir!==!0)){const c=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&ce(c),o.cancelBubble===!0&&X(c),Object.assign(c,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[n.uid]:o.qClonedBy.concat(n.uid)}),n.initialEvent={target:o.target,event:c}}X(o)}const{left:i,top:d}=G(o);n.event={x:i,y:d,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:i,lastY:d}},move(o){if(n.event===void 0)return;const r=G(o),i=r.left-n.event.x,d=r.top-n.event.y;if(i===0&&d===0)return;n.lastEvt=o;const c=n.event.mouse===!0,v=()=>{a(o,c);let b;l.preserveCursor!==!0&&l.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Nt(),n.styleCleanup=S=>{if(n.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),c===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};S!==void 0?setTimeout(()=>{q(),S()},50):q()}else S!==void 0&&S()}};if(n.event.detected===!0){n.event.isFirst!==!0&&a(o,n.event.mouse);const{payload:b,synthetic:S}=ae(o,n,!1);b!==void 0&&(n.handler(b)===!1?n.end(o):(n.styleCleanup===void 0&&n.event.isFirst===!0&&v(),n.event.lastX=b.position.left,n.event.lastY=b.position.top,n.event.lastDir=S===!0?void 0:b.direction,n.event.isFirst=!1));return}if(n.direction.all===!0||c===!0&&(n.modifiers.mouseAllDir===!0||n.modifiers.mousealldir===!0)){v(),n.event.detected=!0,n.move(o);return}const p=Math.abs(i),u=Math.abs(d);p!==u&&(n.direction.horizontal===!0&&p>u||n.direction.vertical===!0&&p<u||n.direction.up===!0&&p<u&&d<0||n.direction.down===!0&&p<u&&d>0||n.direction.left===!0&&p>u&&i<0||n.direction.right===!0&&p>u&&i>0?(n.event.detected=!0,n.move(o)):n.end(o,!0))},end(o,r){if(n.event!==void 0){if(I(n,"temp"),N.is.firefox===!0&&le(e,!1),r===!0)n.styleCleanup!==void 0&&n.styleCleanup(),n.event.detected!==!0&&n.initialEvent!==void 0&&n.initialEvent.target.dispatchEvent(n.initialEvent.event);else if(n.event.detected===!0){n.event.isFirst===!0&&n.handler(ae(o===void 0?n.lastEvt:o,n).payload);const{payload:i}=ae(o===void 0?n.lastEvt:o,n,!0),d=()=>{n.handler(i)};n.styleCleanup!==void 0?n.styleCleanup(d):d()}n.event=void 0,n.initialEvent=void 0,n.lastEvt=void 0}}};if(e.__qtouchpan=n,l.mouse===!0){const o=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";F(n,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}N.has.touch===!0&&F(n,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const l=e.__qtouchpan;l!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&l.end(),l.handler=t.value),l.direction=Le(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),I(t,"main"),I(t,"temp"),N.is.firefox===!0&&le(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchpan)}});function U(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}const Oe=["vertical","horizontal"],ue={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Re={prevent:!0,mouse:!0,mouseAllDir:!0},Be=e=>e>=250?50:Math.ceil(e/5),Kt=D({name:"QScrollArea",props:{...st,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:t,emit:l}){const a=C(!1),n=C(!1),o=C(!1),r={vertical:C(0),horizontal:C(0)},i={vertical:{ref:C(null),position:C(0),size:C(0)},horizontal:{ref:C(null),position:C(0),size:C(0)}},{proxy:d}=Y(),c=ct(e,d.$q);let v=null,p;const u=C(null),b=h(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));i.vertical.percentage=h(()=>{const s=i.vertical.size.value-r.vertical.value;if(s<=0)return 0;const m=U(i.vertical.position.value/s,0,1);return Math.round(m*1e4)/1e4}),i.vertical.thumbHidden=h(()=>(e.visible===null?o.value:e.visible)!==!0&&a.value===!1&&n.value===!1||i.vertical.size.value<=r.vertical.value+1),i.vertical.thumbStart=h(()=>i.vertical.percentage.value*(r.vertical.value-i.vertical.thumbSize.value)),i.vertical.thumbSize=h(()=>Math.round(U(r.vertical.value*r.vertical.value/i.vertical.size.value,Be(r.vertical.value),r.vertical.value))),i.vertical.style=h(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${i.vertical.thumbStart.value}px`,height:`${i.vertical.thumbSize.value}px`})),i.vertical.thumbClass=h(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(i.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),i.vertical.barClass=h(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(i.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),i.horizontal.percentage=h(()=>{const s=i.horizontal.size.value-r.horizontal.value;if(s<=0)return 0;const m=U(Math.abs(i.horizontal.position.value)/s,0,1);return Math.round(m*1e4)/1e4}),i.horizontal.thumbHidden=h(()=>(e.visible===null?o.value:e.visible)!==!0&&a.value===!1&&n.value===!1||i.horizontal.size.value<=r.horizontal.value+1),i.horizontal.thumbStart=h(()=>i.horizontal.percentage.value*(r.horizontal.value-i.horizontal.thumbSize.value)),i.horizontal.thumbSize=h(()=>Math.round(U(r.horizontal.value*r.horizontal.value/i.horizontal.size.value,Be(r.horizontal.value),r.horizontal.value))),i.horizontal.style=h(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[d.$q.lang.rtl===!0?"right":"left"]:`${i.horizontal.thumbStart.value}px`,width:`${i.horizontal.thumbSize.value}px`})),i.horizontal.thumbClass=h(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(i.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),i.horizontal.barClass=h(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(i.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const S=h(()=>i.vertical.thumbHidden.value===!0&&i.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),q=[[Pe,s=>{H(s,"vertical")},void 0,{vertical:!0,...Re}]],y=[[Pe,s=>{H(s,"horizontal")},void 0,{horizontal:!0,...Re}]];function E(){const s={};return Oe.forEach(m=>{const z=i[m];s[m+"Position"]=z.position.value,s[m+"Percentage"]=z.percentage.value,s[m+"Size"]=z.size.value,s[m+"ContainerSize"]=r[m].value}),s}const O=it(()=>{const s=E();s.ref=d,l("scroll",s)},0);function T(s,m,z){if(Oe.includes(s)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(s==="vertical"?Te:re)(u.value,m,z)}function M({height:s,width:m}){let z=!1;r.vertical.value!==s&&(r.vertical.value=s,z=!0),r.horizontal.value!==m&&(r.horizontal.value=m,z=!0),z===!0&&k()}function ee({position:s}){let m=!1;i.vertical.position.value!==s.top&&(i.vertical.position.value=s.top,m=!0),i.horizontal.position.value!==s.left&&(i.horizontal.position.value=s.left,m=!0),m===!0&&k()}function te({height:s,width:m}){i.horizontal.size.value!==m&&(i.horizontal.size.value=m,k()),i.vertical.size.value!==s&&(i.vertical.size.value=s,k())}function H(s,m){const z=i[m];if(s.isFirst===!0){if(z.thumbHidden.value===!0)return;p=z.position.value,n.value=!0}else if(n.value!==!0)return;s.isFinal===!0&&(n.value=!1);const $=ue[m],W=r[m].value,Ue=(z.size.value-W)/(W-z.thumbSize.value),Ie=s.distance[$.dist],Ge=p+(s.direction===$.dir?1:-1)*Ie*Ue;x(Ge,m)}function V(s,m){const z=i[m];if(z.thumbHidden.value!==!0){const $=s[ue[m].offset];if($<z.thumbStart.value||$>z.thumbStart.value+z.thumbSize.value){const W=$-z.thumbSize.value/2;x(W/r[m].value*z.size.value,m)}z.ref.value!==null&&z.ref.value.dispatchEvent(new MouseEvent(s.type,s))}}function ne(s){V(s,"vertical")}function ie(s){V(s,"horizontal")}function k(){a.value=!0,v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,a.value=!1},e.delay),e.onScroll!==void 0&&O()}function x(s,m){u.value[ue[m].scroll]=s}function L(){o.value=!0}function f(){o.value=!1}let w=null;return fe(()=>d.$q.lang.rtl,s=>{u.value!==null&&re(u.value,Math.abs(i.horizontal.position.value)*(s===!0?-1:1))}),lt(()=>{w={top:i.vertical.position.value,left:i.horizontal.position.value}}),ot(()=>{if(w===null)return;const s=u.value;s!==null&&(re(s,w.left),Te(s,w.top))}),Q(O.cancel),Object.assign(d,{getScrollTarget:()=>u.value,getScroll:E,getScrollPosition:()=>({top:i.vertical.position.value,left:i.horizontal.position.value}),getScrollPercentage:()=>({top:i.vertical.percentage.value,left:i.horizontal.percentage.value}),setScrollPosition:T,setScrollPercentage(s,m,z){T(s,m*(i[s].size.value-r[s].value)*(s==="horizontal"&&d.$q.lang.rtl===!0?-1:1),z)}}),()=>g("div",{class:b.value,onMouseenter:L,onMouseleave:f},[g("div",{ref:u,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[g("div",{class:"q-scrollarea__content absolute",style:S.value},A(t.default,[g(xe,{debounce:0,onResize:te})])),g(At,{axis:"both",onScroll:ee})]),g(xe,{debounce:0,onResize:M}),g("div",{class:i.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:ne}),g("div",{class:i.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:ie}),de(g("div",{ref:i.vertical.ref,class:i.vertical.thumbClass.value,style:i.vertical.style.value,"aria-hidden":"true"}),q),de(g("div",{ref:i.horizontal.ref,class:i.horizontal.thumbClass.value,style:i.horizontal.style.value,"aria-hidden":"true"}),y)])}});export{xe as Q,Pe as T,Ye as a,U as b,Vt as c,At as d,Yt as e,Kt as f,Ve as g,Wt as h,qe as i,Le as j,Nt as k,De as l,$e as s,Ae as u};