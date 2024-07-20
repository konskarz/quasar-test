import{z as g,D as H,C as p,B as R,u as Be,r as z,I as De,V as A,O as $,m as I,A as oe,W as X,a2 as ke,k as Fe,l as C,p as Ne,q as O,s as L,a1 as ne,a0 as j,v as Y,y as B,x as Xe,i as V,a3 as Ye,Y as Ve,a4 as Qe,Z as ie}from"./index-67220a76.js";import{h as We,f as _,u as Ie,b as Ue}from"./use-dark-46c33416.js";const Ke={xs:18,sm:24,md:32,lg:38,xl:46},Ze={size:String};function Ge(e,n=Ke){return g(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const re="0 0 24 24",le=e=>e,D=e=>`ionicons ${e}`,ye={"mdi-":e=>`mdi ${e}`,"icon-":le,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":le,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ze={o_:"-outlined",r_:"-round",s_:"-sharp"},Se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Je=new RegExp("^("+Object.keys(ye).join("|")+")"),et=new RegExp("^("+Object.keys(ze).join("|")+")"),ae=new RegExp("^("+Object.keys(Se).join("|")+")"),tt=/^[Mm]\s?[-+]?\.?\d/,ot=/^img:/,nt=/^svguse:/,it=/^ion-/,rt=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,yt=H({name:"QIcon",props:{...Ze,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:l}}=R(),s=Ge(e),o=g(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),i=g(()=>{let r,t=e.name;if(t==="none"||!t)return{none:!0};if(l.iconMapFn!==null){const d=l.iconMapFn(t);if(d!==void 0)if(d.icon!==void 0){if(t=d.icon,t==="none"||!t)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(tt.test(t)===!0){const[d,m=re]=t.split("|");return{svg:!0,viewBox:m,nodes:d.split("&&").map(b=>{const[h,y,E]=b.split("@@");return p("path",{style:y,d:h,transform:E})})}}if(ot.test(t)===!0)return{img:!0,src:t.substring(4)};if(nt.test(t)===!0){const[d,m=re]=t.split("|");return{svguse:!0,src:d.substring(7),viewBox:m}}let c=" ";const u=t.match(Je);if(u!==null)r=ye[u[1]](t);else if(rt.test(t)===!0)r=t;else if(it.test(t)===!0)r=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(ae.test(t)===!0){r="notranslate material-symbols";const d=t.match(ae);d!==null&&(t=t.substring(6),r+=Se[d[1]]),c=t}else{r="notranslate material-icons";const d=t.match(et);d!==null&&(t=t.substring(2),r+=ze[d[1]]),c=t}return{cls:r,content:c}});return()=>{const r={class:o.value,style:s.value,"aria-hidden":"true",role:"presentation"};return i.value.none===!0?p(e.tag,r,We(n.default)):i.value.img===!0?p(e.tag,r,_(n.default,[p("img",{src:i.value.src})])):i.value.svg===!0?p(e.tag,r,_(n.default,[p("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?p(e.tag,r,_(n.default,[p("svg",{viewBox:i.value.viewBox},[p("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(r.class+=" "+i.value.cls),p(e.tag,r,_(n.default,[i.value.content])))}}});function se(e,n){const l=e.style;for(const s in n)l[s]=n[s]}function lt(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=Be(e);if(n)return n.$el||n}function at(){const e=z(!De.value);return e.value===!1&&A(()=>{e.value=!0}),{isHydrated:e}}const we=typeof ResizeObserver<"u",ue=we===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},ce=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let l=null,s,o={width:-1,height:-1};function i(c){c===!0||e.debounce===0||e.debounce==="0"?r():l===null&&(l=setTimeout(r,e.debounce))}function r(){if(l!==null&&(clearTimeout(l),l=null),s){const{offsetWidth:c,offsetHeight:u}=s;(c!==o.width||u!==o.height)&&(o={width:c,height:u},n("resize",o))}}const{proxy:t}=R();if(t.trigger=i,we===!0){let c;const u=d=>{s=t.$el.parentNode,s?(c=new ResizeObserver(i),c.observe(s),r()):d!==!0&&oe(()=>{u(!0)})};return A(()=>{u()}),$(()=>{l!==null&&clearTimeout(l),c!==void 0&&(c.disconnect!==void 0?c.disconnect():s&&c.unobserve(s))}),I}else{let d=function(){l!==null&&(clearTimeout(l),l=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",i,X.passive),u=void 0)},m=function(){d(),s&&s.contentDocument&&(u=s.contentDocument.defaultView,u.addEventListener("resize",i,X.passive),r())};const{isHydrated:c}=at();let u;return A(()=>{oe(()=>{s=t.$el,s&&m()})}),$(d),()=>{if(c.value===!0)return p("object",{class:"q--avoid-card-border",style:ue.style,tabindex:-1,type:"text/html",data:ue.url,"aria-hidden":"true",onLoad:m})}}}}),st=[Element,String],ut=[null,document,document.body,document.scrollingElement,document.documentElement];function ct(e,n){let l=lt(n);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return ut.includes(l)?window:l}function Ee(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ce(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function _e(e,n,l=0){const s=arguments[3]===void 0?performance.now():arguments[3],o=Ee(e);if(l<=0){o!==n&&Q(e,n);return}requestAnimationFrame(i=>{const r=i-s,t=o+(n-o)/Math.max(r,l)*r;Q(e,t),t!==n&&_e(e,n,l-r,i)})}function qe(e,n,l=0){const s=arguments[3]===void 0?performance.now():arguments[3],o=Ce(e);if(l<=0){o!==n&&W(e,n);return}requestAnimationFrame(i=>{const r=i-s,t=o+(n-o)/Math.max(r,l)*r;W(e,t),t!==n&&qe(e,n,l-r,i)})}function Q(e,n){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n);return}e.scrollTop=n}function W(e,n){if(e===window){window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=n}function de(e,n,l){if(l){_e(e,n,l);return}Q(e,n)}function k(e,n,l){if(l){qe(e,n,l);return}W(e,n)}let x;function zt(){if(x!==void 0)return x;const e=document.createElement("p"),n=document.createElement("div");se(e,{width:"100%",height:"200px"}),se(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const l=e.offsetWidth;n.style.overflow="scroll";let s=e.offsetWidth;return l===s&&(s=n.clientWidth),n.remove(),x=l-s,x}function St(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const U={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},dt=Object.keys(U);U.all=!0;function ve(e){const n={};for(const l of dt)e[l]===!0&&(n[l]=!0);return Object.keys(n).length===0?U:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const vt=["INPUT","TEXTAREA"];function fe(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&vt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function ft(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ke.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function F(e,n,l){const s=Y(e);let o,i=s.left-n.event.x,r=s.top-n.event.y,t=Math.abs(i),c=Math.abs(r);const u=n.direction;u.horizontal===!0&&u.vertical!==!0?o=i<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?o=r<0?"up":"down":u.up===!0&&r<0?(o="up",t>c&&(u.left===!0&&i<0?o="left":u.right===!0&&i>0&&(o="right"))):u.down===!0&&r>0?(o="down",t>c&&(u.left===!0&&i<0?o="left":u.right===!0&&i>0&&(o="right"))):u.left===!0&&i<0?(o="left",t<c&&(u.up===!0&&r<0?o="up":u.down===!0&&r>0&&(o="down"))):u.right===!0&&i>0&&(o="right",t<c&&(u.up===!0&&r<0?o="up":u.down===!0&&r>0&&(o="down")));let d=!1;if(o===void 0&&l===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};o=n.event.lastDir,d=!0,o==="left"||o==="right"?(s.left-=i,t=0,i=0):(s.top-=r,c=0,r=0)}return{synthetic:d,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:s,direction:o,isFirst:n.event.isFirst,isFinal:l===!0,duration:Date.now()-n.event.time,distance:{x:t,y:c},offset:{x:i,y:r},delta:{x:s.left-n.event.lastX,y:s.top-n.event.lastY}}}}let ht=0;const he=Fe({name:"touch-pan",beforeMount(e,{value:n,modifiers:l}){if(l.mouse!==!0&&C.has.touch!==!0)return;function s(i,r){l.mouse===!0&&r===!0?Xe(i):(l.stop===!0&&j(i),l.prevent===!0&&ne(i))}const o={uid:"qvtp_"+ht++,handler:n,modifiers:l,direction:ve(l),noop:I,mouseStart(i){fe(i,o)&&Ne(i)&&(O(o,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),o.start(i,!0))},touchStart(i){if(fe(i,o)){const r=i.target;O(o,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),o.start(i)}},start(i,r){if(C.is.firefox===!0&&L(e,!0),o.lastEvt=i,r===!0||l.stop===!0){if(o.direction.all!==!0&&(r!==!0||o.modifiers.mouseAllDir!==!0&&o.modifiers.mousealldir!==!0)){const u=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&ne(u),i.cancelBubble===!0&&j(u),Object.assign(u,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[o.uid]:i.qClonedBy.concat(o.uid)}),o.initialEvent={target:i.target,event:u}}j(i)}const{left:t,top:c}=Y(i);o.event={x:t,y:c,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:c}},move(i){if(o.event===void 0)return;const r=Y(i),t=r.left-o.event.x,c=r.top-o.event.y;if(t===0&&c===0)return;o.lastEvt=i;const u=o.event.mouse===!0,d=()=>{s(i,u);let h;l.preserveCursor!==!0&&l.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ft(),o.styleCleanup=y=>{if(o.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),u===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{E(),y()},50):E()}else y!==void 0&&y()}};if(o.event.detected===!0){o.event.isFirst!==!0&&s(i,o.event.mouse);const{payload:h,synthetic:y}=F(i,o,!1);h!==void 0&&(o.handler(h)===!1?o.end(i):(o.styleCleanup===void 0&&o.event.isFirst===!0&&d(),o.event.lastX=h.position.left,o.event.lastY=h.position.top,o.event.lastDir=y===!0?void 0:h.direction,o.event.isFirst=!1));return}if(o.direction.all===!0||u===!0&&(o.modifiers.mouseAllDir===!0||o.modifiers.mousealldir===!0)){d(),o.event.detected=!0,o.move(i);return}const m=Math.abs(t),b=Math.abs(c);m!==b&&(o.direction.horizontal===!0&&m>b||o.direction.vertical===!0&&m<b||o.direction.up===!0&&m<b&&c<0||o.direction.down===!0&&m<b&&c>0||o.direction.left===!0&&m>b&&t<0||o.direction.right===!0&&m>b&&t>0?(o.event.detected=!0,o.move(i)):o.end(i,!0))},end(i,r){if(o.event!==void 0){if(B(o,"temp"),C.is.firefox===!0&&L(e,!1),r===!0)o.styleCleanup!==void 0&&o.styleCleanup(),o.event.detected!==!0&&o.initialEvent!==void 0&&o.initialEvent.target.dispatchEvent(o.initialEvent.event);else if(o.event.detected===!0){o.event.isFirst===!0&&o.handler(F(i===void 0?o.lastEvt:i,o).payload);const{payload:t}=F(i===void 0?o.lastEvt:i,o,!0),c=()=>{o.handler(t)};o.styleCleanup!==void 0?o.styleCleanup(c):c()}o.event=void 0,o.initialEvent=void 0,o.lastEvt=void 0}}};if(e.__qtouchpan=o,l.mouse===!0){const i=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";O(o,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}C.has.touch===!0&&O(o,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchpan;l!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&l.end(),l.handler=n.value),l.direction=ve(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),B(n,"main"),B(n,"temp"),C.is.firefox===!0&&L(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function P(e,n,l){return l<=n?n:Math.min(l,Math.max(n,e))}const{passive:me}=X,mt=["both","horizontal","vertical"],bt=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>mt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:st},emits:["scroll"],setup(e,{emit:n}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,o,i;V(()=>e.scrollTarget,()=>{c(),t()});function r(){s!==null&&s();const m=Math.max(0,Ee(o)),b=Ce(o),h={top:m-l.position.top,left:b-l.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const y=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";l.position={top:m,left:b},l.directionChanged=l.direction!==y,l.delta=h,l.directionChanged===!0&&(l.direction=y,l.inflectionPoint=l.position),n("scroll",{...l})}function t(){o=ct(i,e.scrollTarget),o.addEventListener("scroll",u,me),u(!0)}function c(){o!==void 0&&(o.removeEventListener("scroll",u,me),o=void 0)}function u(m){if(m===!0||e.debounce===0||e.debounce==="0")r();else if(s===null){const[b,h]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];s=()=>{h(b),s=null}}}const{proxy:d}=R();return V(()=>d.$q.lang.rtl,r),A(()=>{i=d.$el.parentNode,t()}),$(()=>{s!==null&&s(),c()}),Object.assign(d,{trigger:u,getPosition:()=>l}),I}}),be=["vertical","horizontal"],N={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},pe={prevent:!0,mouse:!0,mouseAllDir:!0},ge=e=>e>=250?50:Math.ceil(e/5),wt=H({name:"QScrollArea",props:{...Ie,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:n,emit:l}){const s=z(!1),o=z(!1),i=z(!1),r={vertical:z(0),horizontal:z(0)},t={vertical:{ref:z(null),position:z(0),size:z(0)},horizontal:{ref:z(null),position:z(0),size:z(0)}},{proxy:c}=R(),u=Ue(e,c.$q);let d=null,m;const b=z(null),h=g(()=>"q-scrollarea"+(u.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=g(()=>{const a=t.vertical.size.value-r.vertical.value;if(a<=0)return 0;const v=P(t.vertical.position.value/a,0,1);return Math.round(v*1e4)/1e4}),t.vertical.thumbHidden=g(()=>(e.visible===null?i.value:e.visible)!==!0&&s.value===!1&&o.value===!1||t.vertical.size.value<=r.vertical.value+1),t.vertical.thumbStart=g(()=>t.vertical.percentage.value*(r.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=g(()=>Math.round(P(r.vertical.value*r.vertical.value/t.vertical.size.value,ge(r.vertical.value),r.vertical.value))),t.vertical.style=g(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=g(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=g(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=g(()=>{const a=t.horizontal.size.value-r.horizontal.value;if(a<=0)return 0;const v=P(Math.abs(t.horizontal.position.value)/a,0,1);return Math.round(v*1e4)/1e4}),t.horizontal.thumbHidden=g(()=>(e.visible===null?i.value:e.visible)!==!0&&s.value===!1&&o.value===!1||t.horizontal.size.value<=r.horizontal.value+1),t.horizontal.thumbStart=g(()=>t.horizontal.percentage.value*(r.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=g(()=>Math.round(P(r.horizontal.value*r.horizontal.value/t.horizontal.size.value,ge(r.horizontal.value),r.horizontal.value))),t.horizontal.style=g(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[c.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=g(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=g(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const y=g(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),E=[[he,a=>{J(a,"vertical")},void 0,{vertical:!0,...pe}]],Te=[[he,a=>{J(a,"horizontal")},void 0,{horizontal:!0,...pe}]];function K(){const a={};return be.forEach(v=>{const f=t[v];a[v+"Position"]=f.position.value,a[v+"Percentage"]=f.percentage.value,a[v+"Size"]=f.size.value,a[v+"ContainerSize"]=r[v].value}),a}const Z=Ye(()=>{const a=K();a.ref=c,l("scroll",a)},0);function G(a,v,f){if(be.includes(a)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(a==="vertical"?de:k)(b.value,v,f)}function Me({height:a,width:v}){let f=!1;r.vertical.value!==a&&(r.vertical.value=a,f=!0),r.horizontal.value!==v&&(r.horizontal.value=v,f=!0),f===!0&&q()}function Oe({position:a}){let v=!1;t.vertical.position.value!==a.top&&(t.vertical.position.value=a.top,v=!0),t.horizontal.position.value!==a.left&&(t.horizontal.position.value=a.left,v=!0),v===!0&&q()}function xe({height:a,width:v}){t.horizontal.size.value!==v&&(t.horizontal.size.value=v,q()),t.vertical.size.value!==a&&(t.vertical.size.value=a,q())}function J(a,v){const f=t[v];if(a.isFirst===!0){if(f.thumbHidden.value===!0)return;m=f.position.value,o.value=!0}else if(o.value!==!0)return;a.isFinal===!0&&(o.value=!1);const w=N[v],M=r[v].value,Re=(f.size.value-M)/(M-f.thumbSize.value),Le=a.distance[w.dist],je=m+(a.direction===w.dir?1:-1)*Le*Re;te(je,v)}function ee(a,v){const f=t[v];if(f.thumbHidden.value!==!0){const w=a[N[v].offset];if(w<f.thumbStart.value||w>f.thumbStart.value+f.thumbSize.value){const M=w-f.thumbSize.value/2;te(M/r[v].value*f.size.value,v)}f.ref.value!==null&&f.ref.value.dispatchEvent(new MouseEvent(a.type,a))}}function Pe(a){ee(a,"vertical")}function Ae(a){ee(a,"horizontal")}function q(){s.value=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,s.value=!1},e.delay),e.onScroll!==void 0&&Z()}function te(a,v){b.value[N[v].scroll]=a}let S=null;function $e(){S!==null&&clearTimeout(S),S=setTimeout(()=>{S=null,i.value=!0},c.$q.platform.is.ios?50:0)}function He(){S!==null&&(clearTimeout(S),S=null),i.value=!1}let T=null;return V(()=>c.$q.lang.rtl,a=>{b.value!==null&&k(b.value,Math.abs(t.horizontal.position.value)*(a===!0?-1:1))}),Ve(()=>{T={top:t.vertical.position.value,left:t.horizontal.position.value}}),Qe(()=>{if(T===null)return;const a=b.value;a!==null&&(k(a,T.left),de(a,T.top))}),$(Z.cancel),Object.assign(c,{getScrollTarget:()=>b.value,getScroll:K,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:G,setScrollPercentage(a,v,f){G(a,v*(t[a].size.value-r[a].value)*(a==="horizontal"&&c.$q.lang.rtl===!0?-1:1),f)}}),()=>p("div",{class:h.value,onMouseenter:$e,onMouseleave:He},[p("div",{ref:b,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[p("div",{class:"q-scrollarea__content absolute",style:y.value},_(n.default,[p(ce,{debounce:0,onResize:xe})])),p(bt,{axis:"both",onScroll:Oe})]),p(ce,{debounce:0,onResize:Me}),p("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:Pe}),p("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:Ae}),ie(p("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),E),ie(p("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),Te)])}});export{wt as Q,he as T,Ge as a,yt as b,ft as c,ce as d,zt as e,bt as f,ve as g,Ce as h,Ee as i,St as j,P as k,Ke as l,se as m,fe as s,Ze as u};