(function(o,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(o=typeof globalThis!="undefined"?globalThis:o||self,n(o["vue3-marquee"]={},o.Vue))})(this,function(o,n){"use strict";var I="",$=(e,t)=>{const a=e.__vccOpts||e;for(const[r,u]of t)a[r]=u;return a};const k=n.defineComponent({props:{direction:{type:String,default:"normal"},duration:{type:Number,default:20},delay:{type:Number,default:0},loop:{type:Number,default:0},clone:{type:Boolean,default:!1},gradient:{type:Boolean,default:!1},gradientColor:{type:Array,default:[255,255,255]},gradientWidth:{type:String,default:"200px"},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1}},emits:["onComplete","onLoopComplete","onPause","onResume"],setup(e,{emit:t}){let a=n.ref(0),r=n.ref("100%"),u=n.ref(0),i=n.ref(0),l=n.ref(0),m=n.ref(0),c=n.ref(null),y=n.ref(!1),d=n.ref(null),s=n.ref(null);const f=async()=>{await v(),u.value++},v=async()=>{setInterval(()=>{if(r.value="0%",d.value!==null&&s.value!==null)if(d.value&&s.value)if("clientWidth"in d.value&&"clientWidth"in s.value){l.value=d.value.clientWidth,i.value=s.value.clientWidth;const C=Math.ceil(i.value/l.value);return a.value=isFinite(C)?C:0,a.value}else return r.value="100%",0;else return r.value="100%",0;else return r.value="100%",0},100)};n.watch(l,async()=>{e.clone&&f()}),n.watch(i,async()=>{e.clone&&f()});const V=()=>{e.pauseOnHover&&t("onPause")},b=()=>{e.pauseOnHover&&t("onResume")},E=()=>{e.pauseOnClick&&t("onPause")},W=()=>{e.pauseOnClick&&t("onResume")},N=n.computed(()=>({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--direction":`${e.direction}`,"--pauseOnHover":`${e.pauseOnHover?"paused":"running"}`,"--pauseOnClick":`${e.pauseOnClick?"paused":"running"}`,"--loops":`${e.loop===0?"infinite":e.loop}`,"--gradient-color":`rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 1), rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 0)`,"--gradient-width":`${e.gradientWidth}`,"--min-width":`${r.value}`})),H=n.computed(()=>!!e.gradient),p=async()=>{e.clone&&(await v(),f()),y.value=!0};return n.onMounted(async()=>{p(),c.value=setInterval(()=>{m.value++,e.loop!==0&&m.value===e.loop&&(t("onComplete"),clearInterval(c.value)),t("onLoopComplete")},e.duration*1e3)}),n.onBeforeUnmount(()=>{clearInterval(c.value)}),{ready:y,contentWidth:l,containerWidth:i,loopCounter:m,loopInterval:c,minWidth:r,marqueeContent:d,marqueeContainer:s,componentKey:u,showGradient:H,cloneAmount:a,ForcesUpdate:f,checkForClone:v,setupMarquee:p,getCurrentStyle:N,hoverStarted:V,hoverEnded:b,mouseDown:E,mouseUp:W}}}),q={class:"transparent-overlay",ref:"marqueeContainer"},O={key:0,class:"overlay"},B={class:"marquee",ref:"marqueeContent"},M={class:"marquee"};function S(e,t,a,r,u,i){return e.ready?(n.openBlock(),n.createElementBlock("div",{class:"vue3-marquee",style:n.normalizeStyle(e.getCurrentStyle),key:e.componentKey,onMouseenter:t[0]||(t[0]=(...l)=>e.hoverStarted&&e.hoverStarted(...l)),onMouseleave:t[1]||(t[1]=(...l)=>e.hoverEnded&&e.hoverEnded(...l)),onMousedown:t[2]||(t[2]=(...l)=>e.mouseDown&&e.mouseDown(...l)),onMouseup:t[3]||(t[3]=(...l)=>e.mouseUp&&e.mouseUp(...l))},[n.createElementVNode("div",q,null,512),e.showGradient?(n.openBlock(),n.createElementBlock("div",O)):n.createCommentVNode("",!0),n.createElementVNode("div",B,[n.renderSlot(e.$slots,"default")],512),n.createElementVNode("div",M,[n.renderSlot(e.$slots,"default")]),(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(e.cloneAmount,l=>(n.openBlock(),n.createElementBlock("div",{class:"marquee cloned",key:l},[n.renderSlot(e.$slots,"default")]))),128))],36)):n.createCommentVNode("",!0)}var g=$(k,[["render",S]]);function h(e,t){const a=Object.assign({},{name:"Vue3Marquee"},t);e.component(`${a.name}`,g)}const w={version:"3.1.2",install:h};o.Vue3Marquee=g,o.default=w,o.install=h,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});