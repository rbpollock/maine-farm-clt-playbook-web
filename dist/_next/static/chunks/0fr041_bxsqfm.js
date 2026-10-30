(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46932,60140,31178,37806,21476,47414,74008,64978,72846,56420,62183,49862,e=>{let t,i,n,r=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","scaleZ","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],a=new Set([...r,"pathRotation"]),s=(e,t,i)=>i>t?t:i<e?e:i,o={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},l={...o,transform:e=>s(0,1,e)},u={...o,default:1},h=e=>Math.round(1e5*e)/1e5,c=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,d=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,m=(e,t)=>i=>!!("string"==typeof i&&d.test(i)&&i.startsWith(e)||t&&null!=i&&Object.prototype.hasOwnProperty.call(i,t)),p=(e,t,i)=>n=>{if("string"!=typeof n)return n;let[r,a,s,o]=n.match(c);return{[e]:parseFloat(r),[t]:parseFloat(a),[i]:parseFloat(s),alpha:void 0!==o?parseFloat(o):1}},f={...o,transform:e=>Math.round(s(0,255,e))},g={test:m("rgb","red"),parse:p("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:n=1})=>"rgba("+f.transform(e)+", "+f.transform(t)+", "+f.transform(i)+", "+h(l.transform(n))+")"},y=(e,t,i)=>{let n=e.substring(1+t*i,1+(t+1)*i);return i>1?n:n+n},v={test:m("#"),parse:function(e){let t=e.length>5?2:1,i=y(e,3,t);return{red:parseInt(y(e,0,t),16),green:parseInt(y(e,1,t),16),blue:parseInt(y(e,2,t),16),alpha:i?parseInt(i,16)/255:1}},transform:g.transform},w=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),b=w("deg"),T=w("%"),x=w("px"),_=w("vh"),k=w("vw"),S={...T,parse:e=>T.parse(e)/100,transform:e=>T.transform(100*e)},C={test:m("hsl","hue"),parse:p("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:n=1})=>"hsla("+Math.round(e)+", "+T.transform(h(t))+", "+T.transform(h(i))+", "+h(l.transform(n))+")"},A={test:e=>g.test(e)||v.test(e)||C.test(e),parse:e=>g.test(e)?g.parse(e):C.test(e)?C.parse(e):v.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?g.transform(e):C.transform(e),getAnimatableNone:e=>{let t=A.parse(e);return t.alpha=0,A.transform(t)}},P=new RegExp(c.source),M=RegExp(/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu.source,"i"),E="number",D="color",L=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;function I(e){let t=e.toString(),i=[],n={color:[],number:[],var:[]},r=[],a=0,s=t.replace(L,e=>(A.test(e)?(n.color.push(a),r.push(D),i.push(A.parse(e))):e.startsWith("var(")?(n.var.push(a),r.push("var"),i.push(e)):(n.number.push(a),r.push(E),i.push(parseFloat(e))),++a,"${}")).split("${}");return{values:i,split:s,indexes:n,types:r}}function R({split:e,types:t}){let i=e.length;return n=>{let r="";for(let a=0;a<i;a++)if(r+=e[a],void 0!==n[a]){let e=t[a];e===E?r+=h(n[a]):e===D?r+=A.transform(n[a]):r+=n[a]}return r}}let F={test:function(e){return isNaN(e)&&"string"==typeof e&&(P.test(e)||M.test(e))},parse:function(e){return I(e).values},createTransformer:function(e){return R(I(e))},getAnimatableNone:function(e){let t=I(e);return R(t)(t.values.map((e,i)=>((e,t)=>"number"==typeof e?t?.trim().endsWith("/")?e:0:"number"==typeof e?0:A.test(e)?A.getAnimatableNone(e):e)(e,t.split[i])))}},V=new Set(["brightness","contrast","saturate","opacity"]);function N(e){let[t,i]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[n]=i.match(c)||[];if(!n)return e;let r=i.replace(n,""),a=+!!V.has(t);return n!==i&&(a*=100),t+"("+a+r+")"}let j=/\b([a-z-]*)\(.*?\)/gu,O={...F,getAnimatableNone:e=>{let t=e.match(j);return t?t.map(N).join(" "):e}},B={...F,getAnimatableNone:e=>{let t=F.parse(e);return F.createTransformer(e)(t.map(e=>"number"==typeof e?0:"object"==typeof e?{...e,alpha:1}:e))}},W={...o,transform:Math.round},q={rotate:b,pathRotation:b,rotateX:b,rotateY:b,rotateZ:b,scale:u,scaleX:u,scaleY:u,scaleZ:u,skew:b,skewX:b,skewY:b,distance:x,translateX:x,translateY:x,translateZ:x,x:x,y:x,z:x,perspective:x,transformPerspective:x,opacity:l,originX:S,originY:S,originZ:x},$={borderWidth:x,borderTopWidth:x,borderRightWidth:x,borderBottomWidth:x,borderLeftWidth:x,borderRadius:x,borderTopLeftRadius:x,borderTopRightRadius:x,borderBottomRightRadius:x,borderBottomLeftRadius:x,width:x,maxWidth:x,height:x,maxHeight:x,top:x,right:x,bottom:x,left:x,inset:x,insetBlock:x,insetBlockStart:x,insetBlockEnd:x,insetInline:x,insetInlineStart:x,insetInlineEnd:x,padding:x,paddingTop:x,paddingRight:x,paddingBottom:x,paddingLeft:x,paddingBlock:x,paddingBlockStart:x,paddingBlockEnd:x,paddingInline:x,paddingInlineStart:x,paddingInlineEnd:x,margin:x,marginTop:x,marginRight:x,marginBottom:x,marginLeft:x,marginBlock:x,marginBlockStart:x,marginBlockEnd:x,marginInline:x,marginInlineStart:x,marginInlineEnd:x,fontSize:x,backgroundPositionX:x,backgroundPositionY:x,...q,zIndex:W,fillOpacity:l,strokeOpacity:l,numOctaves:W},U={...$,color:A,backgroundColor:A,outlineColor:A,fill:A,stroke:A,borderColor:A,borderTopColor:A,borderRightColor:A,borderBottomColor:A,borderLeftColor:A,filter:O,WebkitFilter:O,mask:B,WebkitMask:B},z=e=>U[e],H=()=>({translate:0,scale:1,origin:0,originPoint:0}),G=()=>({x:H(),y:H()}),X=()=>({min:0,max:0}),Y=()=>({x:X(),y:X()}),K=e=>!!(e&&e.getVelocity),Z=new Set(["width","height","top","left","right","bottom",...r]),J=[o,x,T,b,k,_,{test:e=>"auto"===e,parse:e=>e}],Q=e=>J.find(t=>t.test(e));var ee=e.i(47167);let et=e=>t=>"string"==typeof t&&t.startsWith(e),ei=et("--"),en=et("var(--"),er=e=>!!en(e)&&ea.test(e.split("/*")[0].trim()),ea=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function es(e){return"string"==typeof e&&e.split("/*")[0].includes("var(--")}let eo=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function el(e,t,i=1){let[n,r]=function(e){let t=eo.exec(e);if(!t)return[,];let[,i,n,r]=t;return[`--${i??n}`,r]}(e);if(!n)return;let a=window.getComputedStyle(t).getPropertyValue(n);if(a){let e=a.trim();return/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)?parseFloat(e):e}return er(r)?el(r,t,i+1):r}let eu=new Set([O,B]);function eh(e,t){let i=z(e);return eu.has(i)||(i=F),i.getAnimatableNone?i.getAnimatableNone(t):void 0}let ec=e=>180*e/Math.PI,ed=e=>ep(ec(Math.atan2(e[1],e[0]))),em={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scaleZ:()=>1,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:ed,rotateZ:ed,skewX:e=>ec(Math.atan(e[1])),skewY:e=>ec(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ep=e=>((e%=360)<0&&(e+=360),e),ef=e=>Math.hypot(e[0],e[1]),eg=e=>Math.hypot(e[4],e[5]),ey={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ef,scaleY:eg,scaleZ:e=>Math.hypot(e[8],e[9],e[10]),scale:e=>(ef(e)+eg(e))/2,rotateX:e=>ep(ec(Math.atan2(e[6],e[5]))),rotateY:e=>ep(ec(Math.atan2(-e[2],e[0]))),rotateZ:ed,rotate:ed,skewX:e=>ec(Math.atan(e[4])),skewY:e=>ec(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ev(e){return+!!e.includes("scale")}function ew(e,t){if(!e||"none"===e)return ev(t);let i=e.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);if(!i)return ev(t);let n=(i[1]?ey:em)[t],r=i[2].split(",").map(e=>parseFloat(e));return"function"==typeof n?n(r):r[n]}let eb=e=>e===o||e===x,eT=new Set(["x","y","z"]),ex=r.filter(e=>!eT.has(e)),e_=new Set(["bottom","right"]);function ek(e,t,i,n,r,a){let s=parseFloat(e);if(!isNaN(s))return s;let{min:o,max:l}=t()[i],u=l-o;return"border-box"===a?u:u-parseFloat(n)-parseFloat(r)}let eS=({transform:e})=>ew(e,"x"),eC=({transform:e})=>ew(e,"y"),eA={width:({width:e,paddingLeft:t="0",paddingRight:i="0",boxSizing:n},r)=>ek(e,r,"x",t,i,n),height:({height:e,paddingTop:t="0",paddingBottom:i="0",boxSizing:n},r)=>ek(e,r,"y",t,i,n),top:({top:e})=>parseFloat(e),left:({left:e})=>parseFloat(e),bottom:({top:e},t)=>{let{y:i}=t();return parseFloat(e)+(i.max-i.min)},right:({left:e},t)=>{let{x:i}=t();return parseFloat(e)+(i.max-i.min)},x:eS,y:eC,translateX:eS,translateY:eC},eP=e=>e,eM={},eE=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function eD(e,t,i={delta:0,timestamp:0,isProcessing:!1}){let n=!1,r=!0,a=()=>n=!0,s=eE.reduce((e,t)=>(e[t]=function(e){let t,i=new Set,n=new Set,r=!1,a=!1,s=new Set,o={delta:0,timestamp:0,isProcessing:!1};function l(i){s.has(i)&&(n.add(i),e()),(t=i)(o)}let u={schedule:(e,a=!1,o=!1)=>{let l=o&&r,u=l?i:n;return a&&s.add(e),l&&e!==t&&u.delete(e),u.add(e),e},cancel:e=>{n.delete(e),s.delete(e)},process:e=>{if(o=e,r){a=!0;return}r=!0;let s=i;i=n,n=s,i.forEach(l),i.clear(),t=void 0,r=!1,a&&(a=!1,u.process(e))}};return u}(a),e),{}),{setup:o,read:l,resolveKeyframes:u,preUpdate:h,update:c,preRender:d,render:m,postRender:p}=s,f=()=>{let a=eM.useManualTiming,s=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(s-i.timestamp,40),1)),i.timestamp=s,i.isProcessing=!0,o.process(i),l.process(i),u.process(i),h.process(i),c.process(i),d.process(i),m.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(f))};return{schedule:eE.reduce((t,a)=>{let o=s[a];return t[a]=(t,a=!1,s=!1)=>(!n&&(n=!0,r=!0,i.isProcessing||e(f)),o.schedule(t,a,s)),t},{}),cancel:e=>{for(let t=0;t<eE.length;t++)s[eE[t]].cancel(e)},state:i,steps:s}}let eL={delta:0,timestamp:0,isProcessing:!1},{schedule:eI,cancel:eR,steps:eF}=eD("u">typeof requestAnimationFrame?requestAnimationFrame:eP,!0,eL),eV=new Set,eN=!1,ej=!1,eO=!1;function eB(){if(ej){let e=[],t=new Set,i=new Set;eV.forEach(n=>{n.needsMeasurement&&(e.push(n),t.add(n.element),e_.has(n.name)&&i.add(n.element))});let n=new Map;i.forEach(e=>{let t,i=(t=[],ex.forEach(i=>{let n=e.getValue(i);if(void 0!==n){let e=n.get(),r=+!!i.startsWith("scale");if(e===r)return;t.push([i,e]),n.set(r)}}),t);i.length&&(n.set(e,i),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,i])=>{e.getValue(t)?.set(i)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}ej=!1,eN=!1,eV.forEach(e=>e.complete(eO)),eV.clear()}function eW(){eV.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ej=!0)})}class eq{constructor(e,t,i,n,r,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=n,this.element=r,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(eV.add(this),eN||(eN=!0,eI.read(eW),eI.resolveKeyframes(eB))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:i,motionValue:n}=this;if(null===e[0]){let r=n?.get(),a=e[e.length-1];if(void 0!==r)e[0]=r;else if(i&&t){let n=function(e,t,i){if("string"==typeof e){if(/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)||/^0[^.\s]+$/u.test(e))return parseFloat(e);if(!F.test(e)&&F.test(i))return eh(t,i)}return e??void 0}(i.readValue(t,a),t,a);void 0!==n&&(e[0]=n)}void 0===e[0]&&(e[0]=a),n&&void 0===r&&n.set(e[0])}for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),eV.delete(this)}cancel(){"scheduled"===this.state&&(eV.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}let e$=new Set(["auto","none","0"]);class eU extends eq{constructor(){super(...arguments),this.isAsync=!0}scheduleResolve(){if(this.canReadNow()&&(this.readKeyframes(),!this.needsMeasurement))return this.complete();super.scheduleResolve()}canReadNow(){let{unresolvedKeyframes:e,element:t,motionValue:i}=this,n=e[0]??i?.get();if(!t?.current||void 0===n)return!1;for(let t=0;t<e.length;t++)if(es(t?e[t]:n))return!1;return!0}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:i}=this;if(!t?.current)return;super.readKeyframes();for(let i=0;i<e.length;i++){let n=e[i];if("string"==typeof n&&er(n=n.trim())){let r=el(n,t.current);void 0!==r&&(e[i]=r),i===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Z.has(i)||2!==e.length)return;let[n,r]=e;if("number"==typeof n&&"number"==typeof r)return;let a=Q(n),s=Q(r);if(es(n)!==es(r)&&eA[i]){this.needsMeasurement=!0;return}if(a!==s)if(eb(a)&&eb(s))for(let t=0;t<e.length;t++){let i=e[t];"string"==typeof i&&(e[t]=parseFloat(i))}else eA[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,i=[];for(let t=0;t<e.length;t++)(null===e[t]||function(e){if("number"==typeof e)return 0===e;if(null===e)return!0;return"none"===e||"0"===e||/^0[^.\s]+$/u.test(e)}(e[t]))&&i.push(t);i.length&&function(e,t,i){let n,r=0;for(;r<e.length&&!n;){let t=e[r];"string"==typeof t&&!e$.has(t)&&function(e){let t=e.toString();return P.test(t)||M.test(t)}(t)&&(n=e[r]),r++}if(n&&i)for(let r of t)e[r]!==n&&(e[r]=eh(i,n))}(e,i,t)}measure(){let{element:e,name:t}=this;return eA[t](window.getComputedStyle(e.current),()=>e.measureViewportBox())}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:i}=this;if(!e?.current)return;"height"===i&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),t[0]=this.measuredOrigin;let n=t[t.length-1];void 0!==n&&this.motionValue?.jump(n,!1)}measureEndState(){let{element:e,unresolvedKeyframes:t}=this;if(!e?.current)return;this.motionValue?.jump(this.measuredOrigin,!1);let i=t.length-1,n=t[i];t[i]=this.measure(),null!==n&&void 0===this.finalKeyframe&&(this.finalKeyframe=n),this.resolveNoneKeyframes()}}let ez=e=>1e3*e;function eH(e,t){-1===e.indexOf(t)&&e.push(t)}function eG(e,t){let i=e.indexOf(t);i>-1&&e.splice(i,1)}class eX{constructor(){this.subscriptions=[]}add(e){return eH(this.subscriptions,e),()=>this.remove(e)}remove(e){eG(this.subscriptions,e)}notify(e,t,i){let n=this.subscriptions.length;if(n)if(1===n)this.subscriptions[0](e,t,i);else for(let r=0;r<n;r++){let n=this.subscriptions[r];n&&n(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function eY(e,t,i){t.startsWith("--")?e.style.setProperty(t,i):e.style[t]=i}let eK={};function eZ(e,t){let i,n=()=>(void 0===i&&(i=e()),i);return()=>eK[t]??n()}let eJ=eZ(()=>void 0!==window.ScrollTimeline,"scrollTimeline"),eQ=e=>null!==e;function e0(e,{repeat:t,repeatType:i="loop"},n,r=1){let a=e.filter(eQ),s=r<0||t&&"loop"!==i&&t%2==1?0:a.length-1;return s&&void 0!==n?n:a[s]}class e1{constructor(){this.isResolved=!1}get finished(){return this._finished||(this._finished=this.isResolved?Promise.resolve():new Promise(e=>{this._resolve=e})),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){this.isResolved=!0,this._resolve?.()}then(e,t){return this.finished.then(e,t)}}function e2(){t=void 0}let e5={now:()=>(void 0===t&&e5.set(eL.isProcessing||eM.useManualTiming?eL.timestamp:performance.now()),t),set:e=>{t=e,queueMicrotask(e2)}};function e3(e,t){return{kind:e,animation:t,timestamp:e5.now(),frameTimestamp:eL.timestamp,frameIsProcessing:eL.isProcessing}}function e4(e,t,i){let n=globalThis.__MOTION_INSPECT__;if(n)try{n({...e3("animation-start",e),options:i?{...t,...i}:t})}catch{}}let e8=e=>Array.isArray(e)&&"number"==typeof e[0],e9=eZ(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return!1}return!0},"linearEasing"),e6=(e,t,i=10)=>{let n="",r=Math.max(Math.round(t/i),2);for(let t=0;t<r;t++)n+=Math.round(1e4*e(t/(r-1)))/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},e7=([e,t,i,n])=>`cubic-bezier(${e}, ${t}, ${i}, ${n})`,te={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:e7([0,.65,.55,1]),circOut:e7([.55,0,1,.45]),backIn:e7([.31,.01,.66,-.59]),backOut:e7([.33,1.53,.69,.99])};function tt(e){return"function"==typeof e&&"applyToOptions"in e}class ti extends e1{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:i,keyframes:n,pseudoElement:r,allowFlatten:a=!1,finalKeyframe:s,onComplete:o}=e;this.isPseudoElement=!!r,this.allowFlatten=a,this.options=e,ee.default;let l=function({type:e,...t}){return tt(e)&&e9()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}(e);this.animation=function(e,t,i,{delay:n=0,duration:r=300,repeat:a=0,repeatType:s="loop",ease:o="easeOut",times:l}={},u){let h={[t]:i};l&&(h.offset=l);let c=function e(t,i){if(t)return"function"==typeof t?e9()?e6(t,i):"ease-out":e8(t)?e7(t):Array.isArray(t)?t.map(t=>e(t,i)||te.easeOut):te[t]}(o,r);Array.isArray(c)&&(h.easing=c);let d={delay:n,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:a+1,direction:"reverse"===s?"alternate":"normal"};return u&&(d.pseudoElement=u),e.animate(h,d)}(t,i,n,l,r),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){let e=e0(n,this.options,s,this.speed);this.updateMotionValue?.(e),eY(t,i,e),this.animation.cancel()}o?.(),this.notifyFinished()},e4(this,e,l)}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(e){}}stop(){this.isStopped||(this.isStopped=!0,"idle"!==this.state&&null===this.finishedTime&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||(this.animation.onfinish=null,this.cancel())))}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){return Number(this.animation.effect?.getComputedTiming?.().duration||0)/1e3}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+e/1e3}get time(){return(Number(this.animation.currentTime)||0)/1e3}set time(e){let t=null!==this.finishedTime;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ez(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,onAttach:t,observe:i}){return(this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&eJ())?(this.animation.timeline=e,t?.(this.animation),eP):i(this)}}let tn=new Set(["opacity","clipPath","filter","transform"]),tr=new WeakMap,{schedule:ta}=eD(queueMicrotask,!1);e.s(["f",0,ta],60140);let ts=(e,t)=>t?1e3/t*e:0,to;class tl{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=e5.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.dirty(),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=e5.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=!isNaN(parseFloat(this.current)))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){var i;return"change"===e?this.onChangeSubscribe(t):((i=this.events)[e]||(i[e]=new eX)).add(t)}onChangeSubscribe(e){let{events:t}=this;return t.change||this.changeSubscriber?(t.change||(t.change=new eX,t.change.add(this.changeSubscriber),this.changeSubscriber=void 0),t.change.add(e)):this.changeSubscriber=e,()=>{this.changeSubscriber===e?this.changeSubscriber=void 0:t.change?.remove(e),this.stopIfUnobserved()}}stopIfUnobserved(){eI.read(()=>{this.changeSubscriber||this.events.change?.getSize()||this.stop()})}clearListeners(){for(let e in this.changeSubscriber=void 0,this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){t&&(this.updatedAt=e5.now(),this.stop()),this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stopPassiveEffect?.()}dirty(){let{current:e,changeSubscriber:t}=this;t?t(e):this.events.change?.notify(e)}addDependent(e){(this.dependents||(this.dependents=new Set)).add(e)}removeDependent(e){this.dependents?.delete(e)}get(){to?.push(this);let e=this.animation?.liveValue?.();return void 0===e?this.current:e}getCurrent(){return this.current}getPrevious(){return this.prev}getVelocity(){let e=e5.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return ts(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{let i;this.hasAnimated=!0;let n=!1;i=e(()=>{n=!0,this.events.animationComplete?.notify(),this.animation===i&&(this.animation=void 0),t()}),n||(this.animation=i),this.events.animationStart?.notify()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel?.notify()),this.animation=void 0}isAnimating(){return!!this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect?.()}}function tu(e,t){return new tl(e,t)}let th=new WeakMap;function tc(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}function td(e){return"string"==typeof e||Array.isArray(e)}let tm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tp=["initial"].concat(tm);function tf(e){if(tc(e.animate))return!0;for(let t=0;t<tp.length;t++)if(td(e[tp[t]]))return!0;return!1}function tg(e){return!!(tf(e)||e.variants)}let ty={current:null},tv={current:!1},tw="u">typeof window,tb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],tT={};class tx{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:n,skipAnimations:r,blockInitialAnimation:a,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=eq,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=e5.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,eI.render(this.render,!1,!0))};let{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=t.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=n,this.skipAnimationsConfig=r,this.options=o,this.blockInitialAnimation=!!a,this.isControllingVariants=tf(t),this.isVariantNode=tg(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:h,...c}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in c){let t=c[e];void 0!==l[e]&&K(t)&&t.set(l[e])}}mount(e){if(this.hasBeenMounted&&!this.presenceContext?.keepValuesOnRemount)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];if(this.current=e,th.set(e,this),this.projection?.instance||this.projection?.mount(e),this.isVariantNode&&!this.isControllingVariants){let e=this;do e=!1!==e.props.inherit&&e.parent;while(e&&!e.isVariantNode)if(e){let{variantChildren:t}=e;t.add(this),this.removeFromVariantTree=()=>t.delete(this)}}this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),"never"===this.reducedMotionConfig?this.shouldReduceMotion=!1:"always"===this.reducedMotionConfig?this.shouldReduceMotion=!0:(tv.current||function(){if(tv.current=!0,tw)if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ty.current=e.matches;e.addEventListener("change",t),t()}else ty.current=!1}(),this.shouldReduceMotion=ty.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){for(let e in this.projection?.unmount(),eR(this.notifyUpdate),eR(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree?.(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),(this.enteringChildren||(this.enteringChildren=new Set)).add(e)}removeChild(e){this.children.delete(e),this.enteringChildren?.delete(e)}bindToMotionValue(e,t){let i;if(this.valueSubscriptions.get(e)?.(),t.accelerate&&tn.has(e)&&this.current instanceof HTMLElement){let{factory:i,keyframes:n,times:r,ease:a,duration:s}=t.accelerate,o=new ti({element:this.current,name:e,keyframes:n,times:r,ease:a,duration:ez(s)}),l=i(o);this.valueSubscriptions.set(e,()=>{l(),o.cancel()});return}let n=a.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&eI.preRender(this.notifyUpdate),n&&(this.projection&&(this.projection.isTransformDirty=!0),tr.get(this.current)?.check()),this.scheduleRender()});"u">typeof window&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i?.()})}sortNodePosition(e){return this.current&&e.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in tT){let t=tT[e];if(!t)continue;let{isEnabled:i,Feature:n}=t;if(!this.features[e]&&n&&i(this.props)&&(this.features[e]=new n(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Y()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){let{transformTemplate:i,onUpdate:n}=this.props;(e.transformTemplate||i)&&this.scheduleRender(),(e.transformTemplate&&!i||e.onUpdate&&!n)&&tr.get(this.current)?.demote(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<tb.length;t++){let i=tb[t];this.propEventSubscriptions[i]?.(),delete this.propEventSubscriptions[i];let n=e["on"+i];n&&(this.propEventSubscriptions[i]=this.on(i,n))}this.prevMotionValues=function(e,t,i){for(let n in t){let r=t[n],a=i[n];if(K(r))e.addValue(n,r);else if(K(a))e.addValue(n,tu(r,{owner:e}));else if(a!==r)if(e.hasValue(n)){let t=e.getValue(n);!0===t.liveStyle?t.jump(r):t.hasAnimated||t.set(r)}else{let t=e.getStaticValue(n);e.addValue(n,tu(void 0!==t?t:r,{owner:e}))}}for(let n in i)void 0===t[n]&&e.removeValue(n);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue?.()}getProps(){return this.props}getVariant(e){return this.props.variants?.[e]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}addValue(e,t){let i=this.values.get(e);if(t!==i){i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t);let n=t.get();void 0!==n&&(this.latestValues[e]=n)}}removeValue(e){this.values.delete(e),this.valueSubscriptions.get(e)?.(),this.valueSubscriptions.delete(e),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){let i=this.props.values?.[e];return i||void 0===(i=this.values.get(e))&&void 0!==t&&(i=tu(t??this.getDefaultValue?.(e),{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];if(null!=i){let n,r;"string"==typeof i&&(n=i,/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n)||(r=i,/^0[^.\s]+$/u.test(r)))?i=parseFloat(i):"number"!=typeof i&&!F.test(i)&&F.test(t)&&(i=eh(e,t)),this.setBaseTarget(e,K(i)?i.get():i)}return K(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}on(e,t){return(this.events[e]||(this.events[e]=new eX)).add(t)}notify(e,...t){this.events[e]?.notify(...t)}scheduleRenderMicrotask(){ta.render(this.render)}}class t_ extends tx{constructor(){super(...arguments),this.KeyframeResolver=eU}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){let i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;K(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}function tk(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}let tS=(e,t)=>t&&"number"==typeof e?t.transform(e):e,tC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},tA=r.length,tP={},tM=(e,t,i=tS(t,q[e]))=>(tP[e]||(tP[e]=(tC[e]||e)+"("))+i+")",tE=(e,t)=>("number"==typeof t?t:parseFloat(t))===+!!e.startsWith("scale");function tD(e,t,i){let{style:n,vars:s,transformOrigin:o}=e,l=!1,u=!1;for(let e in t){let i=t[e];if(a.has(e)){l=!0;continue}if(ei(e)){s[e]=i;continue}{let t=tS(i,$[e]);e.startsWith("origin")?(u=!0,o[e]=t):n[e]=t}}if(!t.transform&&(l||i?n.transform=function(e,t,i){let n="";for(let a=0;a<tA;a++){let s=r[a],o=e[s];if(void 0===o)continue;let l=i&&(t[s]=tS(o,$[s]));tE(s,o)||(n+=tM(s,o,l||void 0)+" ")}let a=e.pathRotation;return a&&(n+=tM("rotate",a)),n=n.trim(),i?i(t,n):n||"none"}(t,e.transform,i):n.transform&&(n.transform="none")),u){let{originX:e="50%",originY:t="50%",originZ:i=0}=o;n.transformOrigin=`${e} ${t} ${i}`}}let tL={offset:"stroke-dashoffset",array:"stroke-dasharray"},tI={offset:"strokeDashoffset",array:"strokeDasharray"},tR=["transform","opacity","clipPath","filter","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function tF(e,{attrX:t,attrY:i,attrScale:n,pathLength:r,pathSpacing:a=1,pathOffset:s=0,...o},l,u,h){if(tD(e,o,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:c,style:d}=e;for(let e of tR)void 0!==c[e]&&(d[e]=c[e],delete c[e]);(d.transform||c.transformOrigin)&&(d.transformOrigin=c.transformOrigin??"50% 50%",delete c.transformOrigin),d.transform&&(d.transformBox=h?.transformBox??"fill-box",delete c.transformBox),void 0!==t&&(c.x=t),void 0!==i&&(c.y=i),void 0!==n&&(c.scale=n),void 0!==r&&function(e,t,i=1,n=0,r=!0){e.pathLength=1;let a=r?tL:tI;e[a.offset]=`${-n}`,e[a.array]=`${t} ${i}`}(c,r,a,s,!1)}let tV=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),tN=e=>"string"==typeof e&&"svg"===e.toLowerCase();function tj(e,{style:t,vars:i},n,r){let a,s=e.style;for(a in t)s[a]=t[a];for(a in r?.applyProjectionStyles(s,n),i)s.setProperty(a,i[a])}let tO={};function tB(e,{layout:t,layoutId:i}){return a.has(e)||e.startsWith("origin")||(t||void 0!==i)&&(!!tO[e]||"opacity"===e)}function tW(e,t,i){let n=e.style,r=t?.style,a={};if(!n)return a;for(let t in n)(K(n[t])||r&&K(r[t])||tB(t,e)||i?.getValue(t)?.liveStyle!==void 0)&&(a[t]=n[t]);return a}function tq(e,t,i){let n=tW(e,t,i);for(let i in e)"children"!==i&&(K(e[i])||K(t[i]))&&(n[-1!==r.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]);return n}class t$ extends t_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Y}getBaseTargetFromProps(e,t){return a.has(t)?super.getBaseTargetFromProps(e,t)??ev(t):e[t]}getDefaultValue(e){return a.has(e)?this.latestValues[e]??ev(e):void 0}readValueFromInstance(e,t){if(a.has(t)){let e=z(t);return e&&e.default||0}if(tR.includes(t)){let i=getComputedStyle(e)[t];if("string"==typeof i&&i)return i.trim()}return t=tV.has(t)?t:tk(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return tq(e,t,i)}build(e,t,i){tF(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,n){for(let i in tj(e,t,void 0,n),t.attrs)e.setAttribute(tV.has(i)?i:tk(i),t.attrs[i])}mount(e){this.isSVGTag=tN(e.tagName),super.mount(e)}}function tU({top:e,left:t,right:i,bottom:n}){return{x:{min:t,max:i},y:{min:e,max:n}}}let tz=(e,t,i)=>e+(t-e)*i;function tH(e){return void 0===e||1===e}function tG({scale:e,scaleX:t,scaleY:i}){return!tH(e)||!tH(t)||!tH(i)}let tX=["rotate","rotateX","rotateY","rotateZ","skewX","skewY"];function tY(e){return tG(e)||tZ(e)||tK(e)}function tK(e){return e.z||e.rotate||e.rotateX||e.rotateY||e.rotateZ||e.skewX||e.skewY}function tZ(e){var t,i;return(t=e.x)&&"0%"!==t||(i=e.y)&&"0%"!==i}function tJ(e,t,i,n,r){return void 0!==r&&(e=n+r*(e-n)),n+i*(e-n)+t}function tQ(e,t=0,i=1,n,r){e.min=tJ(e.min,t,i,n,r),e.max=tJ(e.max,t,i,n,r)}function t0(e,{x:t,y:i}){tQ(e.x,t.translate,t.scale,t.originPoint),tQ(e.y,i.translate,i.scale,i.originPoint)}function t1(e,t){e.min+=t,e.max+=t}function t2(e,t,i,n,r=.5){let a=tz(e.min,e.max,r);tQ(e,t,i,a,n)}function t5(e,t){return"string"==typeof e?parseFloat(e)/100*(t.max-t.min):e}function t3(e,t,i){let n=i??e;t2(e.x,t5(t.x,n.x),t.scaleX,t.scale,t.originX),t2(e.y,t5(t.y,n.y),t.scaleY,t.scale,t.originY)}function t4(e,t){return tU(function(e,t){if(!t)return e;let i=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}class t8 extends t_{constructor(){super(...arguments),this.type="html",this.renderInstance=tj}mount(e){super.mount(e)}readValueFromInstance(e,t){if(a.has(t))return this.projection?.isProjecting?ev(t):((e,t)=>{let{transform:i="none"}=getComputedStyle(e);return ew(i,t)})(e,t);{let i=window.getComputedStyle(e),n=(ei(t)?i.getPropertyValue(t):i[t])||0;return"string"==typeof n?n.trim():n}}measureInstanceViewportBox(e,{transformPagePoint:t}){return t4(e,t)}build(e,t,i){tD(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return tW(e,t,i)}}var t9=e.i(71645);let t6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function t7(e){if("string"!=typeof e||e.includes("-"));else if(t6.indexOf(e)>-1||/[A-Z]/u.test(e))return!0;return!1}var ie=e.i(18050);let it={current:void 0},ii=(0,t9.createContext)({});e.s(["f",0,ii],31178);let ir=(0,t9.createContext)({strict:!1}),ia=(0,t9.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});e.s(["f",0,ia],37806);let is=(0,t9.createContext)({});function io(e){return Array.isArray(e)?e.join(" "):e}let il=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function iu(e,t,i){for(let n in t)K(t[n])||tB(n,i)||(e[n]=t[n])}let ih=()=>({...il(),attrs:{}}),ic=new Set(["animate","exit","variants","initial","style","values","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function id(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ic.has(e)}function im(e){return K(e)?e.get():e}function ip(e,t,i,n){let r=t=>{let r;return"function"==typeof t?t(void 0!==i?i:e.custom,...(r=[{},{}],n?.values.forEach((e,t)=>{r[0][t]=e.get(),r[1][t]=e.getVelocity()}),r)):t};return"string"==typeof(t=r(t))&&(t=e.variants&&e.variants[t]),r(t)}let ig=(0,t9.createContext)(null);function iy(e){let t=(0,t9.useRef)(null);return null===t.current&&(t.current=e()),t.current}e.s(["f",0,ig],21476),e.s(["f",0,iy],47414);let iv=e=>(t,i)=>{let n=(0,t9.useContext)(is),r=(0,t9.useContext)(ig),a=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t},i,n,r){return{latestValues:function(e,t,i,n){let r={},a=n(e,{});for(let e in a)r[e]=im(a[e]);let{initial:s,animate:o}=e,l=tf(e),u=tg(e);t&&u&&!l&&!1!==e.inherit&&(void 0===s&&(s=t.initial),void 0===o&&(o=t.animate));let h=!!i&&!1===i.initial,c=(h=h||!1===s)?o:s;if(c&&"boolean"!=typeof c&&!tc(c)){let t=Array.isArray(c)?c:[c];for(let i=0;i<t.length;i++){let n=ip(e,t[i]);if(n){let{transitionEnd:e,transition:t,...i}=n;for(let e in i){let t=i[e];if(Array.isArray(t)){let e=h?t.length-1:0;t=t[e]}null!==t&&(r[e]=t)}for(let t in e)r[t]=e[t]}}}return r}(i,n,r,e),renderState:t()}})(e,t,n,r);return i?a():iy(a)},iw=iv({scrapeMotionValuesFromProps:tW,createRenderState:il}),ib=iv({scrapeMotionValuesFromProps:tq,createRenderState:ih}),iT={animation:["variants",...tm],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ix=!1;function i_(){return!function(){if(ix)return;let e={};for(let t in iT)e[t]={isEnabled:e=>iT[t].some(t=>!!e[t])};tT=e,ix=!0}(),tT}let ik=Symbol.for("motionComponentSymbol"),iS="data-framer-appear-id",iC=(0,t9.createContext)({}),iA="u">typeof window?t9.useLayoutEffect:t9.useEffect;function iP(e,{forwardMotionProps:t=!1,type:i}={},n,r){n&&function(e){let t=i_();for(let i in e)t[i]={...t[i],...e[i]};tT=t}(n);let a=i?"svg"===i:t7(e),s=a?ib:iw;function o(i,n){var o;let l,u,h,c=function({layoutId:e}){let t=(0,t9.useContext)(ii).id;return t&&void 0!==e?t+"-"+e:e}(i);iy(()=>!!it.current?.sharedNodes.get(c)?.lead&&i.initial)&&(i={...i,initial:!1});let d={...(0,t9.useContext)(ia),...i,layoutId:c},{isStatic:m,isValidProp:p}=d,f=function(e){let{initial:t,animate:i}=function(e,t){if(tf(e)){let{initial:t,animate:i}=e;return{initial:!1===t||td(t)?t:void 0,animate:td(i)?i:void 0}}return!1!==e.inherit?t:{}}(e,(0,t9.useContext)(is));return(0,t9.useMemo)(()=>({initial:t,animate:i}),[io(t),io(i)])}(i),g=s(i,m);if(!m&&"u">typeof window){(0,t9.useContext)(ir).strict;let t=function(e){let{drag:t,layout:i}=i_();if(!t&&!i)return{};let n={...t,...i};return{MeasureLayout:n.MeasureLayout,isEnabled:t?.isEnabled(e)||i?.isEnabled(e),ProjectionNode:n.ProjectionNode}}(d);f.visualElement=function(e,t,i,n,r,a){let{visualElement:s}=(0,t9.useContext)(is),o=(0,t9.useContext)(ir),l=(0,t9.useContext)(ig),u=(0,t9.useContext)(ia),h=u.reducedMotion,c=u.skipAnimations,d=(0,t9.useRef)(null),m=(0,t9.useRef)(!1);n=n||o.renderer,!d.current&&n&&(d.current=n(e,{visualState:t,parent:s,props:i,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:h,skipAnimations:c,isSVG:a}),m.current&&d.current&&(d.current.manuallyAnimateOnMount=!0));let p=d.current,f=(0,t9.useContext)(iC);p&&!p.projection&&r&&("html"===p.type||"svg"===p.type)&&r.create(p,i,f),(0,t9.useInsertionEffect)(()=>{p&&p.props!==i&&p.update(i,l)});let g=i[iS],y=(0,t9.useRef)(!!g&&"u">typeof window&&!window.MotionHandoffIsComplete?.(g)&&window.MotionHasOptimisedAnimation?.(g));return iA(()=>{m.current&&p&&(p.animationState?.animateChanges(),p.enteringChildren=void 0)},[]),iA(()=>{m.current=!0,p&&(window.MotionIsMounted=!0,p.updateFeatures(),p.scheduleRenderMicrotask(),y.current&&p.animationState&&p.animationState.animateChanges())}),(0,t9.useEffect)(()=>{p&&(!y.current&&p.animationState&&p.animationState.animateChanges(),y.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(g)}),y.current=!1),p.enteringChildren=void 0)}),p}(e,g,d,r,t.ProjectionNode,a),(t.isEnabled||f.visualElement?.projection?.options.layoutId)&&(l=t.MeasureLayout)}return(0,ie.jsxs)(is.Provider,{value:f,children:[l&&f.visualElement?(0,ie.jsx)(l,{visualElement:f.visualElement,...d}):null,function(e,t,i,{latestValues:n},r,a=!1,s,o){let l=(s??t7(e)?function(e,t,i,n){let r=(0,t9.useMemo)(()=>{let i=ih();return tF(i,t,tN(n),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){let t={};return iu(t,e.style,e),{...r,style:{...t,...r.style}}}return r}:function(e,t){let i,n,r={},a=(i=e.style||{},iu(n={},i,e),Object.assign(n,function({transformTemplate:e},t){return(0,t9.useMemo)(()=>{let i=il();return tD(i,t,e),Object.assign({},i.vars,i.style)},[t])}(e,t)),n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=a,r})(t,n,r,e),u=function(e,t,i,n){let r={};for(let a in e)("values"!==a||"object"!=typeof e.values)&&!K(e[a])&&((a.startsWith("on")?!id(a):n?.(a)??!id(a))||!0===i&&id(a)||!t&&!id(a)||e.draggable&&a.startsWith("onDrag"))&&(r[a]=e[a]);return r}(t,"string"==typeof e,a,o),h=e!==t9.Fragment?{...u,...l,ref:i}:{},{children:c}=t,d=(0,t9.useMemo)(()=>K(c)?c.get():c,[c]);return(0,t9.createElement)(e,{...h,children:d})}(e,i,(o=f.visualElement,u=(0,t9.useRef)(n),(0,t9.useInsertionEffect)(()=>{u.current=n}),h=(0,t9.useRef)(null),(0,t9.useCallback)(e=>{e&&g.onMount?.(e),o&&(e?o.mount(e):o.unmount());let t=u.current;if("function"==typeof t)if(e){let i=t(e);"function"==typeof i&&(h.current=i)}else h.current?(h.current(),h.current=null):t(e);else t&&(t.current=e)},[o])),g,m,t,a,p)]})}o.displayName=`motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;let l=(0,t9.forwardRef)(o);return l[ik]=e,l}e.s(["f",0,iA],74008);class iM{constructor(e){this.isMounted=!1,this.node=e}update(){}}function iE(e,t,i){return ip(e.getProps(),t,i,e)}let iD=(e,t)=>"exit"===t?e.presenceContext?.custom:void 0;function iL(e,t){if(e?.inherit&&t){let{inherit:i,...n}=e;return{...t,...n}}return e}function iI(e,t){let i=e?.[t]??e?.default??e;return i!==e?iL(i,e):i}function iR(e,t){let i=e.getValue("willChange");if(K(i)&&i.add)return i.add(t);if(!i&&eM.WillChange){let i=new eM.WillChange("auto");e.addValue("willChange",i),i.add(t)}}let iF=(...e)=>e.reduce((e,t)=>i=>t(e(i)));function iV(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function iN(e,t){return i=>i>0?t:e}let ij=(e,t,i)=>{let n=e*e,r=i*(t*t-n)+n;return r<0?0:Math.sqrt(r)},iO=[v,g,C];function iB(e){let t=iO.find(t=>t.test(e));if(!t)return!1;let i=t.parse(e);return t===C&&(i=function({hue:e,saturation:t,lightness:i,alpha:n}){e/=360,i/=100;let r=0,a=0,s=0;if(t/=100){let n=i<.5?i*(1+t):i+t-i*t,o=2*i-n;r=iV(o,n,e+1/3),a=iV(o,n,e),s=iV(o,n,e-1/3)}else r=a=s=i;return{red:Math.round(255*r),green:Math.round(255*a),blue:Math.round(255*s),alpha:n}}(i)),i}let iW=(e,t)=>{let i=iB(e),n=iB(t);if(!i||!n)return iN(e,t);let r={...i};return e=>(r.red=ij(i.red,n.red,e),r.green=ij(i.green,n.green,e),r.blue=ij(i.blue,n.blue,e),r.alpha=tz(i.alpha,n.alpha,e),g.transform(r))},iq=new Set(["none","hidden"]);function i$(e,t){return i=>tz(e,t,i)}function iU(e){return"number"==typeof e?i$:"string"==typeof e?er(e)?iN:A.test(e)?iW:iG:Array.isArray(e)?iz:"object"==typeof e?A.test(e)?iW:iH:iN}function iz(e,t){let i=[...e],n=i.length,r=e.map((e,i)=>iU(e)(e,t[i]));return e=>{for(let t=0;t<n;t++)i[t]=r[t](e);return i}}function iH(e,t){let i={...e,...t},n={};for(let r in i)void 0!==e[r]&&void 0!==t[r]&&(n[r]=iU(e[r])(e[r],t[r]));return e=>{for(let t in n)i[t]=n[t](e);return i}}let iG=(e,t)=>{let i=I(e),n=I(t);if(!(i.indexes.var.length===n.indexes.var.length&&i.indexes.color.length===n.indexes.color.length&&i.indexes.number.length>=n.indexes.number.length))return iN(e,t);if(iq.has(e)&&!n.values.length||iq.has(t)&&!i.values.length)return iq.has(e)?i=>i<=0?e:t:i=>i>=1?t:e;return iF(iz(function(e,t){let i=[],n={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){let a=t.types[r],s=e.indexes[a][n[a]],o=e.values[s]??0;i[r]=o,n[a]++}return i}(i,n),n.values),R(n))},iX=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function iY(e,t,i){if("number"==typeof e&&"number"==typeof t&&"number"==typeof i)return tz(e,t,i);if("string"==typeof e&&"string"==typeof t){let i=function(e,t){let i=iX.exec(e);if(!i)return;let n=iX.exec(t);if(!n||i[2]!==n[2])return;let r=i[2],a=parseFloat(i[1]),s=parseFloat(n[1]);return e=>h(tz(a,s,e))+r}(e,t);if(i)return i}return iU(e)(e,t)}let iK=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>eI.update(t,e),stop:()=>eR(t),now:()=>eL.isProcessing?eL.timestamp:e5.now()}};function iZ(e,t=50,i=2e4,n){let r=0,a=e.next(r);for(n?.push(a.value);!a.done&&r<i;)r+=t,a=e.next(r),n?.push(a.value);return r>=i?1/0:r}let iJ=e=>e<0?1/Math.max(1+e,.05):Math.max(1-e,.05);function iQ(e,t){if(!(e>1))return 1;let i=Math.sqrt(e*e-1),n=e-i,r=e+i,a=2*i*Math.exp(-t)*(1+t);return i1(e=>r*Math.exp(-n*e)-n*Math.exp(-r*e)-a,e=>Math.exp(-r*e)-Math.exp(-n*e),t)/t}function i0(e,t){return e*Math.sqrt(1-t*t)}function i1(e,t,i){let n=i;for(let i=1;i<12;i++)n-=e(n)/t(n);return n}let i2=(e,t)=>(t?e>=0:e>0)&&e<1/0;function i5(e,t){if(i2(e,t))return e}function i3(e=.3,t=.3){let i,n,r,a="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e,o=a.keyframes[0],l=a.keyframes[a.keyframes.length-1],u={done:!1,value:o},{stiffness:h,damping:c,mass:d,duration:m,isResolvedFromDuration:p,isTimeDefined:f}=function(e){let t=i5(e.stiffness),i=i5(e.damping,!0),n=i5(e.mass),r={...e,stiffness:t??100,damping:i??10,mass:n??1,isResolvedFromDuration:!1,isTimeDefined:(t??i??n)===void 0&&(void 0!==e.duration||void 0!==e.bounce)};if(r.isTimeDefined){if(e.visualDuration){let t=iJ(e.bounce||0),i=2*Math.PI/(1.2*e.visualDuration)*iQ(t,2*Math.PI/1.2);r.stiffness=i*i,r.damping=2*t*Math.sqrt(r.stiffness)}else Object.assign(r,function({duration:e=800,bounce:t=.3}){let i,n,r=iJ(t);e=s(.01,10,e/1e3),r<1?(i=t=>{let i=t*r,n=i*e;return .001-i/i0(t,r)*Math.exp(-n)},n=t=>{let n=t*r*e,a=r*r*t*t*e,s=Math.exp(-n),o=i0(t*t,r);return-((-i(t)+.001>0?-1:1)*a)*s/o}):(i=t=>-.001+Math.exp(-t*e)*(t*e+1),n=t=>-(e*e*t*Math.exp(-t*e)));let a=i1(i,n,5/e),o=a*iQ(r,a*e),l=o*o;return{stiffness:l,damping:2*r*Math.sqrt(l),duration:ez(e)}}(r)),r.isResolvedFromDuration=!0;i2(r.stiffness)&&i2(r.damping,!0)||(r.stiffness=100,r.damping=10)}return r}({...a}),g=e=>f?0:-(e/1e3),y=c/(2*Math.sqrt(h*d)),v=Math.sqrt(h/d)/1e3,w=y*v,b={target:l,delta:l-o,velocity:g(a.velocity||0)||0,restSpeed:0,restDelta:0},T=()=>{let e=5>Math.abs(b.delta);b.restSpeed=a.restSpeed||(e?.01:2),b.restDelta=a.restDelta||(e?.005:.5)};if(T(),y<1){let e=i0(v,y),t={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};r=()=>{t.A=(b.velocity+w*b.delta)/e,t.sinC=w*t.A+b.delta*e,t.cosC=w*b.delta-t.A*e};let a=i=>{i!==t.t&&(t.t=i,t.env=Math.exp(-w*i),t.sin=Math.sin(e*i),t.cos=Math.cos(e*i))};i=e=>(a(e),b.target-t.env*(t.A*t.sin+b.delta*t.cos)),n=e=>(a(e),t.env*(t.sinC*t.sin+t.cosC*t.cos))}else if(1===y){i=e=>b.target-Math.exp(-v*e)*(b.delta+(b.velocity+v*b.delta)*e);let e={C:0};r=()=>{e.C=b.velocity+v*b.delta},n=t=>Math.exp(-v*t)*(v*e.C*t-b.velocity)}else{let e=v*Math.sqrt(y*y-1),t=w-e,a=w+e,s=e<1||f?1/0:300/e,o=(e,t)=>Math.exp(t>s?(w-e)*s-w*t:-e*t),l={S:0,F:0};r=()=>{let t=(b.velocity+w*b.delta)/e;l.S=(b.delta+t)/2,l.F=(b.delta-t)/2},i=e=>b.target-l.S*o(t,e)-l.F*o(a,e),n=e=>t*l.S*o(t,e)+a*l.F*o(a,e)}r();let x=p&&m||null,_={calculatedDuration:x,retarget:(e,t)=>{b.target=e[e.length-1],b.delta=b.target-e[0],b.velocity=g(t),a.restSpeed&&a.restDelta||T(),_.calculatedDuration=x,u.done=!1,r()},velocity:e=>ez(n(e)),next:e=>{let t=i(e);return p?u.done=e>=m:u.done=Math.abs(ez(n(e)))<=b.restSpeed&&Math.abs(b.target-t)<=b.restDelta,u.value=u.done?b.target:t,u},toString:()=>{let e=Math.min(iZ(_),2e4),t=e6(t=>_.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return _}let i4=Object.assign(i3,{applyToOptions:e=>{let t=function(e,t=100,i){let{keyframes:n,velocity:r}=e,a=n&&n[n.length-1]-n[0],s=i({...e,velocity:r&&a?r*t/a:r,keyframes:[0,t]}),o=Math.min(iZ(s),2e4);return{type:"keyframes",ease:e=>s.next(o*e).value/t,duration:o/1e3}}(e,100,i3);return e.ease=t.ease,e.duration=ez(t.duration),e.type="keyframes",e}});function i8({keyframes:e,velocity:t=0,power:i=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:a=500,modifyTarget:s,min:o,max:l,restDelta:u=.5,restSpeed:h}){let c,d,m=e[0],p={done:!1,value:m},f=i*t,g=m+f,y=s?s(g):g;y!==g&&(f=y-m);let v=e=>-f*Math.exp(-e/n),w=e=>{let t=v(e);p.done=Math.abs(t)<=u,p.value=p.done?y:e?y+t:m},b=e=>{let t;if((t=p.value)<o||t>l){var i;c=e,d=i4({keyframes:[p.value,(i=p.value,void 0===o?l:void 0===l||Math.abs(o-i)<Math.abs(l-i)?o:l)],velocity:-v(e)/n*1e3,damping:r,stiffness:a,restDelta:u,restSpeed:h})}};return b(0),{calculatedDuration:null,next:e=>{let t=!1;return(d||void 0!==c||(t=!0,w(e),b(e)),void 0!==c&&e>=c)?d.next(e-c):(t||w(e),p)}}}let i9=(e,t,i)=>e*(3*(1-e)*((1-e)*t+e*i)+e*e);function i6(e,t,i,n){return e===t&&i===n?eP:r=>{let a=0,s=1,o=r;for(let t=0;;t++){o>=a&&o<=s||(o=(a+s)/2);let n=i9(o,e,i)-r;if(n*n<1e-28||40===t)break;n>0?s=o:a=o,o-=1e-7*n/(i9(o+1e-7,e,i)-r-n)}return i9(o,t,n)}}let i7=i6(.42,0,1,1),ne=i6(0,0,.58,1),nt=i6(.42,0,.58,1),ni=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,nn=e=>t=>1-e(1-t),nr=i6(.33,1.53,.69,.99),na=nn(nr),ns=ni(na),no=e=>e>=1?1:(e*=2)<1?.5*na(e):.5*(2-Math.pow(2,-10*(e-1))),nl=e=>1-Math.sin(Math.acos(e)),nu=nn(nl),nh=ni(nl),nc={linear:eP,easeIn:i7,easeInOut:nt,easeOut:ne,circIn:nl,circInOut:nh,circOut:nu,backIn:na,backInOut:ns,backOut:nr,anticipate:no},nd=e=>{if(e8(e)){ee.default;let[t,i,n,r]=e;return i6(t,i,n,r)}return"string"==typeof e?(ee.default,nc[e]):e},nm=(e,t,i)=>{let n=t-e;return n?(i-e)/n:1};function np(e){let t=[0];return!function(e,t){let i=e[e.length-1];for(let n=1;n<=t;n++){let r=nm(0,t,n);e.push(tz(i,1,r))}}(t,e.length-1),t}function nf({duration:e=300,keyframes:t,times:i,ease:n="easeInOut",mixer:r}){var a;let o="number"==typeof t[0]?void 0:r,l=Array.isArray(n)&&"number"!=typeof n[0]?n.map(nd):nd(n)||nt,u={done:!1,value:t[0]};if(!o&&2===t.length&&!Array.isArray(l)&&(!i||2!==i.length||0===i[0]&&1===i[1])){let[i,n]=t,r=i===n?void 0:(eM.mix||iY)(i,n);return{calculatedDuration:e,next:t=>(u.value=r?r(l(e>0?s(0,1,t/e):1)):n,u.done=t>=e,u)}}let h=function(e,t,{clamp:i=!0,ease:n,mixer:r}={}){let a=e.length;if(1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let l=function(e,t,i){let n=[],r=eM.mix||iY,a=e.length-1;for(let s=0;s<a;s++){let a=i?.(e[s],e[s+1])||r(e[s],e[s+1]);t&&(a=iF(Array.isArray(t)?t[s]||eP:t,a)),n.push(a)}return n}(t,n,r),u=l.length,h=i=>{if(o&&i<e[0])return t[0];let n=0;if(u>1)for(;n<e.length-2&&!(i<e[n+1]);n++);let r=nm(e[n],e[n+1],i);return l[n](r)};return i?t=>h(s(e[0],e[a-1],t)):h}((a=i&&i.length===t.length?i:np(t),a.map(t=>t*e)),t,{ease:Array.isArray(l)?l:t.map(()=>l||nt).splice(0,t.length-1),mixer:o});return{calculatedDuration:e,next:t=>(u.value=h(t),u.done=t>=e,u)}}let ng={decay:i8,inertia:i8,tween:nf,keyframes:nf,spring:i4};function ny(e){"string"==typeof e.type&&(e.type=ng[e.type])}let nv=(e,t)=>t-e>40&&!eM.useManualTiming?t:e,nw=e=>e/100,nb=e=>Math.round(1e4*e)/1e4;class nT extends e1{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==e5.now()&&this.tick(e5.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause(),e4(this,this.options)}initAnimation(){let{options:e}=this;ny(e);let{type:t=nf,repeat:i=0,repeatDelay:n=0,repeatType:r,velocity:a=0}=e,{keyframes:s}=e,o=t||nf;this.mixKeyframes=void 0,o!==nf&&"number"!=typeof s[0]&&(this.mixKeyframes=iF(nw,e.mixer?.(s[0],s[1])||iY(s[0],s[1])),s=[0,100]);let l=o(s===e.keyframes?e:{...e,keyframes:s});"mirror"===r&&(this.mirroredGenerator=o({...e,keyframes:[...s].reverse(),velocity:-a})),null===l.calculatedDuration&&(l.calculatedDuration=iZ(l));let{calculatedDuration:u}=l;this.calculatedDuration=u,this.resolvedDuration=u+n,this.totalDuration=this.resolvedDuration*(i+1)-n,this.generator=l}updateTime(e){this.currentTime=this.holdTime??Math.round(e-this.startTime)*this.playbackSpeed}tick(e,t=!1){let{generator:i,totalDuration:n,calculatedDuration:r}=this;if(null===this.startTime)return i.next(0);let{delay:a=0,keyframes:s,type:o,onUpdate:l,finalKeyframe:u}=this.options;this.startTime===this.pendingStartTime&&(this.startTime=nv(this.startTime,e)),this.pendingStartTime=void 0,this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-n/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let h=this.currentTime-a*(this.playbackSpeed>=0?1:-1),c=this.playbackSpeed>=0?h<0:h>n;this.currentTime=Math.max(h,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=n);let d=this.generate(this.currentTime,c),{done:m}=d;c||(m=this.playbackSpeed>=0?r<1/0?this.currentTime>=n:m:this.currentTime<=0);let p=null===this.holdTime&&("finished"===this.state||"running"===this.state&&m);return p&&o!==i8&&(d.value=e0(s,this.options,u,this.speed)),l&&l(d.value),p&&this.finish(),d}at(e){return this.holdTime??nb((e-this.startTime)*this.playbackSpeed)}sampleAt(e,t){let{options:i,totalDuration:n}=this,r=this.at(e)-(i.delay||0);return r>=n&&i.type!==i8?e0(i.keyframes,i,t?void 0:i.finalKeyframe):this.generate(Math.max(r,0),r<0).value}generate(e,t){let i,{generator:n,totalDuration:r,mixKeyframes:a,mirroredGenerator:o,resolvedDuration:l}=this,{keyframes:u,repeat:h,repeatType:c,repeatDelay:d}=this.options,m=e,p=n;if(h){let t=Math.min(e,r)/l,i=Math.floor(t),n=t%1;!n&&t>=1&&(n=1),1===n&&i--,(i=Math.min(i,h+1))%2&&("reverse"===c?(n=1-n,d&&(n-=d/l)):"mirror"===c&&(p=o)),m=s(0,1,n)*l}return t?(this.delayState.value=u[0],i=this.delayState):i=p.next(m),a&&!t&&(i.value=a(i.value)),i}get duration(){return this.calculatedDuration/1e3}get iterationDuration(){return this.duration+(this.options.delay??0)/1e3}get time(){return this.currentTime/1e3}set time(e){e=ez(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){return function(e,t,i=0){var n,r;let a;return t<=0?i:e.velocity?e.velocity(t):(n=t=>e.next(t).value,r=e.next(t).value,ts(r-n(a=Math.max(t-5,0)),t-a))}(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(e5.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=this.currentTime/1e3)}play(){if(this.isStopped)return;let{driver:e=iK,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();let i=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=i):null!==this.holdTime?this.startTime=i-this.holdTime/(this.playbackSpeed||1):this.startTime||(this.startTime=t??(this.pendingStartTime=i)),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(e5.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.driver?.stop(),this.driver=void 0,this.startTime=this.holdTime=null}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}let nx={anticipate:no,backInOut:ns,circInOut:nh};class n_ extends ti{constructor(e){"string"==typeof e.ease&&e.ease in nx&&(e.ease=nx[e.ease]),ny(e),super(e),void 0!==e.startTime&&!1!==e.autoplay&&(this.startTime=e.startTime),this.options=e}elapsed(){return"running"===this.state?(e5.now()-this.startTime)*this.speed:1e3*this.time}sample(e){if(!this.sampler){let{motionValue:e,onUpdate:t,onComplete:i,onPlay:n,onStop:r,element:a,...s}=this.options;this.sampler=new nT({...s,autoplay:!1}),this.sampler.stop()}return this.sampler.sample(Math.max(0,e)).value}liveValue(){let{state:e}=this;if("running"===e||"paused"===e)return this.sample(this.elapsed())}updateMotionValue(e){let{motionValue:t,element:i,name:n}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);let{speed:r}=this,a=this.elapsed(),o="running"===this.state&&r?s(0,10,a):0,l=this.sample(a);i&&n&&eY(i,n,l),t.setWithVelocity(this.sample(a-o*Math.sign(r)),l,o/Math.abs(r||1))}}let nk=(e,t)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(F.test(e)||"0"===e)&&!e.startsWith("url("));function nS(e){e.duration=0,e.type="keyframes"}let nC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,nA=({mixer:e,keyframes:t})=>e&&"number"!=typeof t[0]&&t.some((i,n)=>n&&e(t[n-1],i)),nP=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),nM=()=>!eM.useManualTiming&&Object.hasOwnProperty.call(Element.prototype,"animate"),nE=(e,t)=>.001>=Math.abs(e-t),nD=(e,t)=>e-t,nL=(e,t,i)=>np(Array(i+1)).map(i=>tz(e,t,i)),nI=({state:e})=>"idle"===e||"finished"===e,nR=(e,t)=>e.latestValues?e.latestValues[t]:e.getValue(t)?.get();class nF extends nT{constructor(e){let t,i=e.motionValue.owner.current,{driver:n=iK}=e,r=function(e){let t=e.motionValue.owner,{onUpdate:i,transformTemplate:n}=t.getProps();return!e.isHandoff&&!i&&!e.hasOnUpdate&&!n&&"inertia"!==e.type&&"none"===(nR(t,"transform")||"none")&&!nR(t,"pathRotation")&&!t.projection?.isProjecting()&&!nA(e)}(e);e.driver=e=>{let r=n(e);return{js:r,now:r.now,start:(e=!0)=>{let t=tr.get(i);!t||t.isJS?r.start(e):t.schedule(!1,!e)},stop:()=>{r.stop();let e=tr.get(i);e&&!e.isFinishing&&e.release(t)}}},super(e),t=this,this.canAccelerate=r;let{stop:a}=this;this.stop=()=>{this.isAccelerated()&&this.sync(),a()}}get group(){let e;return e=this.options.motionValue.owner.current,tr.get(e)}get js(){return this.driver?.js}get name(){return this.options.name}timing(){let{startTime:e,speed:t,totalDuration:i}=this,{delay:n=0,repeatType:r}=this.options;return null!==this.holdTime?[1/0,0]:1/0===i?[e+n/t,this.resolvedDuration*("loop"===r?1:2)/t||1]:[e+(n+i)/t,0]}isAccelerated(){let{group:e,state:t}=this;return e?.tracks.has(this)&&!e.isJS&&this.canAccelerate&&("running"===t||"paused"===t)}liveValue(){return this.isAccelerated()?this.sampleAt(e5.now()):void 0}tween(){let{keyframes:e,type:t,ease:i,times:n,repeat:r,delay:a=0}=this.options,s=e8(i)?e7(i):/^(linear|ease(In|Out|InOut))$/.test(i)&&te[i];if(s&&!r&&!n&&2===e.length&&t===nf&&null===this.holdTime){let e=this.startTime+a/this.speed;return[e,e+this.resolvedDuration/this.speed,s]}}boundaries(e,t){let{startTime:i,speed:n,resolvedDuration:r,options:a}=this,{delay:s=0,repeat:o=0,repeatDelay:l=0,repeatType:u,times:h,keyframes:c,type:d}=a,m=(d||nf)===nf?h||np(c):[0,1],p=i+s/n,f=[];if(null!==this.holdTime||!(r>0))return f;for(let i=Math.max(0,Math.floor((e-p)*n/r));i<=o;i++){let a=p+i*r/n;if(a>t)break;for(let s of m){let o=a+(i%2&&u&&"loop"!==u?1-s:s)*(r-l)/n;o>e&&o<t&&f.push(o)}}return f}numberAt(e){return parseFloat(this.sampleAt(e,!0))}sync(){let e=e5.now();this.options.motionValue.setWithVelocity(this.sampleAt(e-10,!0),this.sampleAt(e,!0),10)}play(){var e;let t,i,n,a,s,o,l,u,h,c,d,m,p,f,g,y,v,w,b,T,x,_,k,S;this.isStopped||((this.group||(t=(e=this.options.motionValue.owner).current,i=new Set,n=new Map,a={},s=[],o=new Map,l=[],u=!1,h=!1,c=!1,d=!1,m=-1/0,p=e=>{for(let t of i)if(t.name===e)return!0},f=(t,i)=>{let o={};for(let l of void 0===t?r:s){let r=n.get(l),s=void 0===t?nR(e,l):r?r.sampleAt(i>t&&!r.timing()[1]?i:t):a[l];void 0!==s&&(o[l]=s)}return o},g=(e,t)=>{let i="";for(let n in e){let r=e[n];t&&tE(n,r)||(i+=tM(n,r)+" ")}return(t?i.trim():i)||"none"},y=(e=f())=>{t.style.transform=g(e,!0)},v=(e=!0)=>{e&&y(),l.forEach(({animation:e})=>e.cancel()),l=[]},w=(e,i)=>new Animation(new KeyframeEffect(t,e,i)),b=(e,t,i=1/0)=>{let n={animation:e,offset:t,end:i};e.startTime=e5.now()+t,i<1/0&&(e.onfinish=()=>{n.isDone=!0,l.some(e=>1/0===e.end)&&(e.cancel(),l=l.filter(e=>e!==n)),S.schedule(!1)}),e.oncancel=()=>l.includes(n)&&S.demote(),l.push(n)},T=(e,t,i)=>{let n=(t,i)=>Math.abs(e(i)-e(t)),r=n(t,i);for(;i-t>.01;){let e=(t+i)/2;n(t,e)>n(e,i)?i=e:t=e}return n(t,i)>r/2?[t,i]:[]},x=(e,t,i,n,r={fill:"both"},a)=>{let s=e.flatMap(e=>e.boundaries(t,i)),o=n||((e,t,i,n)=>{let r,a,s=Math.min(200,Math.max(2,Math.ceil((i-t)/10)));if(4*n.length>s)return;let o=nL(t,i,s).concat(n).sort(nD);for(let i of e){let e=i.numberAt(t),n=o.map(t=>i.numberAt(t)-e),s=n[n.length-1],l=n.some(e=>.001*Math.abs(e)>Math.abs(s))?0:s,u=n.map(e=>l?e/l:e);if(l&&!r)r=u,a=t=>(i.numberAt(t)-e)/l;else if(u.some((e,t)=>!nE(e,l&&r[t])))return}if(!r||r.every((e,n)=>nE(e,nm(t,i,o[n]))))return"linear";let l=[],u=(e,n=a(e))=>l.push(nb(n)+" "+nb(100*nm(t,i,e))+"%");return r.forEach((e,t)=>{t&&Math.abs(e-r[t-1])>.2&&T(a,o[t-1],o[t]).forEach(e=>u(e)),u(o[t],e)}),"linear("+l+")"})(e,t,i,s),l=o?[t,i]:((e,t,i,n)=>{let r=[t],a=(t,i,n)=>{if(i-t<1||e.every(e=>!(Math.abs(e.numberAt((t+i)/2)-(e.numberAt(t)+e.numberAt(i))/2)>(e.name.startsWith("scale")?.001:.1))))r.push(i);else if(n<4)a(t,(t+i)/2,n+1),a((t+i)/2,i,n+1);else{for(let n of e)r.push(...T(e=>n.numberAt(e),t,i));r.push(i)}},s=nL(t,i,Math.ceil((i-t)/100));for(let e of n)s.push(e,Math.min(e+.01,i));let o=t;for(let e of s.sort(nD))e>o&&a(o,e,0),o=e;return r.sort(nD)})(e,t,i,s),u=l.map(e=>g(f(e,a))),h={transform:u};return o||(h.offset=l.map(e=>nm(t,i,e))),u.every(e=>e===u[0])&&(y(f(t,a)),h=null),w(h,{...r,duration:i-t,easing:o||"linear"})},_=()=>!i.size&&(c=!0,tr.get(t)===S&&tr.delete(t),S.isJS||v(),!0),k=()=>{let t=e5.now();if(S.isJS||(S.isFinishing=!0,i.forEach(i=>{let[n,r]=i.timing();"running"===i.state&&i.speed>0&&!r&&n<=t+1&&(i.complete(),a[i.name]=nR(e,i.name),o.has(i)||(u=!0))}),S.isFinishing=!1),h=!1,c||(i.forEach(e=>nI(e)&&i.delete(e)),_()))return;for(let e of i)if(!e.canAccelerate)return S.demote(!0);S.isJS&&(S.isJS=!1,u=!0,i.forEach(e=>e.js?.stop()));let p=u,f=d;if(u=d=!1,p||!(e=>{let t,n=0;for(let r of i){let i=o.get(r);if(!i)return!1;let[a,s,l]=i,u=r.at(e),h=1/0===r.timing()[0];if(l){if(h&&u===a)continue;return!1}let c=(u-a)/s,d=h?0:r.speed/s;if(void 0===t)t=c,n=d;else if(Math.abs(c-t)>1||d!==n)return!1}if(void 0===t)return!0;if(!l.length)return!1;for(let{offset:e,end:i,isDone:n}of l){let r=t-e;if(i<1/0&&(n?r<i-1:r<0||r>=i))return!1}for(let{animation:i,offset:r,isDone:a}of l){if(a)continue;let s=t-r;n&&i.updatePlaybackRate&&"running"===i.playState&&20>Math.abs(Number(i.currentTime)-s)?i.playbackRate!==n&&i.updatePlaybackRate(n):n?(i.playbackRate=n,i.startTime=e-s/n):(i.startTime=null,i.currentTime=s)}return!0})(t)){if(f){if(t-m<100)return S.demote();m=t}if(!(t=>{let u=t,h=0,c=0,d=[],m=[],p=new Set;for(let e of(n.clear(),o=new Map,i)){n.set(e.name,e);let[i,r]=e.timing(),a=1/0===i;if(o.set(e,[e.at(t),e.speed,a]),a){e.sync();continue}if(e.speed<0)return;if(r){if(h){let e=(i-c)/r;if(Math.abs(r-h)>1||Math.abs(e-Math.round(e))*h>1)return}else h=r,c=i;m.push(e)}else p.add(i);d.push(e),u=Math.max(u,i)}a={},s=r.filter(t=>{if(n.has(t))return!0;let i=a[t]=nR(e,t);return void 0!==i&&!tE(t,i)}),v(!1);let f=!h&&(e=>{let t;for(let i of e){let e=i.tween();if(!e||t?.some((t,i)=>i<2?Math.abs(e[i]-t)>1:e[i]!==t))return;t=e}return t})(d);try{if(f&&f[1]>t){let[e,i,n]=f;b(x(d,e,i,n),e-t,i-e)}else u>t&&(b(x(d,t,u),0,u-t),p.forEach(e=>e<u-1&&b(w(null,{duration:e-t}),0,e-t)));if(h){let e=c+Math.floor((u-c)/h)*h;b(x(m,e,e+h,void 0,{iterations:1/0,iterationStart:(u-e)/h,fill:"forwards"},u),u-t)}}catch{return}return l.length||v(),!0})(t))return S.demote()}},S={tracks:i,isJS:!1,isFinishing:!1,schedule(e,t){!c&&(u||(u=e),d||(d=!!t),h||(h=!0,eL.isProcessing?eI.render(k,!1,!0):queueMicrotask(k)))},release(e){nI(e)&&i.delete(e),_()||S.schedule(!0)},check(){if(!S.isJS){for(let t in a)if(nR(e,t)!==a[t]&&!p(t))return S.schedule(!0,!0)}},demote(e){if(!S.isJS&&!c)return i.forEach(t=>{t.isAccelerated()&&t.sync(),e||(t.canAccelerate=!1)}),S.isJS=!0,o=new Map,v(),i.forEach(e=>"running"===e.state&&e.js?.start()),!0}},tr.set(t,S),S)).tracks.add(this),super.play())}pause(){super.pause(),this.isAccelerated()&&(this.sync(),this.group.schedule(!1))}complete(){super.complete();let{group:e}=this;e&&!e.isJS&&this.canAccelerate&&this.tick(e5.now())}get time(){return this.isAccelerated()?s(0,this.totalDuration,this.at(e5.now())-(this.options.delay||0))/1e3:super.time}set time(e){super.time=e,this.isAccelerated()&&this.sync()}attachTimeline(e){return this.canAccelerate=!1,this.group?.demote(!0),super.attachTimeline(e)}}class nV extends e1{constructor(e){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=e5.now();let{keyframes:t,name:i,motionValue:n,element:r}=e;e.autoplay??(e.autoplay=!0),e.delay??(e.delay=0),e.type??(e.type="keyframes"),e.repeat??(e.repeat=0),e.repeatDelay??(e.repeatDelay=0),e.repeatType??(e.repeatType="loop");let a=r?.KeyframeResolver||eq;this.keyframeResolver=new a(t,(t,i,n)=>this.onKeyframesResolved(t,i,e,!n),i,n,r),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,i,n){let a;this.keyframeResolver=void 0;let{name:s,type:o,velocity:l,delay:u,isHandoff:h,onUpdate:c}=i;this.resolvedAt=e5.now();let d=function(e,t,i,n){let r=e[0];if(null===r)return!1;if("display"===t||"visibility"===t)return!0;let a=e[e.length-1],s=nk(r,t),o=nk(a,t);return!!s&&!!o&&(function(e){let t=e[0];if(1===e.length)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}(e)||("spring"===i||tt(i))&&n)}(e,s,o,l);d||((eM.instantAnimations||!u)&&c?.(e0(e,i,t)),e[0]=e[e.length-1],nS(i),i.repeat=0);let{onComplete:m}=i;i.finalKeyframe=t,i.keyframes=e,i.onComplete=()=>{m?.(),this.notifyFinished()};let p=d&&!h&&function(e){let{motionValue:t,name:i,repeatDelay:n,repeatType:r,damping:a,type:s,keyframes:o}=e;if(!i||!(tn.has(i)||nP.has(i)))return!1;let l=t?.owner?.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;let{onUpdate:u,transformTemplate:h}=t.owner.getProps();return nM()&&(tn.has(i)||nP.has(i)&&function(e){for(let t=0;t<e.length;t++)if("string"==typeof e[t]&&nC.test(e[t]))return!0;return!1}(o))&&("transform"!==i||!h)&&!u&&!n&&"mirror"!==r&&0!==a&&"inertia"!==s&&!nA(e)}(i),f=!p&&(({name:e,motionValue:t})=>e&&r.includes(e)&&t?.owner?.current instanceof HTMLElement&&nM()&&e9())(i);if(n&&(p||f||this.resolvedAt!==this.createdAt)&&(i.startTime??(i.startTime=nv(this.createdAt,this.resolvedAt))),p){i.element=i.motionValue?.owner?.current;try{a=new n_(i)}catch{a=new nT(i)}}else a=f?new nF(i):new nT(i);this.pendingTimeline&&(this.stopTimeline=a.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=a}get finished(){return this._animation?this._animation.finished:super.finished}then(e,t){return this.finished.finally(e).then(()=>{})}liveValue(){return this._animation?.liveValue?.()}get animation(){return this._animation||(this.keyframeResolver?.resume(),eO=!0,eW(),eB(),eO=!1),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation?.cancel(),this.keyframeResolver?.cancel()}}let nN={type:"spring",stiffness:500,damping:25,restSpeed:10},nj={type:"keyframes",duration:.8},nO={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},nB=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed","out","mixer"]),nW=(e,t,i,n={},r,s)=>o=>{let l=iI(n,e)||{},u=l.delay||n.delay||0,{elapsed:h=0}=n;h-=ez(u);let c={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-h,onUpdate:e=>{t.set(e),l.onUpdate&&l.onUpdate(e)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:s?void 0:r,hasOnUpdate:!!l.onUpdate};!function(e){for(let t in e)if(!nB.has(t))return!0;return!1}(l)&&Object.assign(c,((e,{keyframes:t})=>t.length>2?nj:a.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===t[1]?2*Math.sqrt(550):30,restSpeed:10}:nN:nO)(e,c)),c.duration&&(c.duration=ez(c.duration)),c.repeatDelay&&(c.repeatDelay=ez(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let d=!1;if(!1!==c.type&&(0!==c.duration||c.repeatDelay)||(nS(c),0===c.delay&&(d=!0)),(eM.instantAnimations||eM.skipAnimations||r?.shouldSkipAnimations||l.skipAnimations)&&(d=!0,nS(c),c.delay=0),c.allowFlatten=!l.type&&!l.ease,d&&!s&&void 0!==t.get()){let e=e0(c.keyframes,l);if(void 0!==e)return void eI.update(()=>{c.onUpdate(e),c.onComplete()})}return l.isSync?new nT(c):new nV(c)},nq="u">typeof window;function n$(e,t,{delay:i=0,transitionOverride:n,type:r}={}){let{transition:a,transitionEnd:s,...o}=t,l=e.getDefaultTransition();a=a?iL(a,l):l;let u=a?.reduceMotion,h=a?.skipAnimations;n&&(a=n);let c=[],d=r&&e.animationState?.getState()[r],m=a?.path;for(let t in m&&(m.animateValues?m.animateValues(t=>e.getValue(t,e.latestValues[t]??0),o,a,i,c):m.animateVisualElement?.(e,o,a,i,c)),o){let n=e.getValue(t,e.latestValues[t]??null),r=o[t];if(void 0===r||d&&function({protectedKeys:e,needsAnimating:t},i){let n=i in e&&!t[i];return t[i]=!1,n}(d,t))continue;let s={delay:i,...iI(d?.out[t]||a||{},t)};h&&(s.skipAnimations=!0);let l=n.get();if(void 0!==l&&!n.isAnimating()&&!Array.isArray(r)&&r===l&&!s.velocity){eI.update(()=>n.set(r));continue}let m=!1;if(nq&&window.MotionHandoffAnimation){let i=e.props[iS];if(i){let e=window.MotionHandoffAnimation(i,t,eI);null!==e&&(s.startTime=e,m=!0)}}iR(e,t);let p=u??e.shouldReduceMotion;n.start(nW(t,n,r,p&&Z.has(t)?{type:!1}:s,e,m));let f=n.animation;f&&c.push(f)}if(s){let t=()=>eI.update(()=>{s&&function(e,t){let{transitionEnd:i={},transition:n={},...r}=iE(e,t)||{};for(let t in r={...r,...i}){var a;let i=Array.isArray(a=r[t])?a[a.length-1]||0:a;e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,tu(i))}}(e,s)});c.length?Promise.all(c).then(t):t()}return c}function nU(e,t,i,n=0,r=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),s=e.size,o=(s-1)*n;return"function"==typeof i?i(a,s):1===r?a*n:o-a*n}function nz(e,t,i={}){let n=iE(e,t,iD(e,i.type)),r=i.transitionOverride||(n?.transition??(e.getDefaultTransition()||{})),a=()=>Promise.all(n?n$(e,n,i):[]),s=(n=0)=>{let{variantChildren:a}=e,{delayChildren:s=0,staggerChildren:o,staggerDirection:l}=r,u=[];return a?.forEach(e=>{e.notify("AnimationStart",t),u.push(nz(e,t,{...i,delay:n+("function"==typeof s?0:s)+nU(a,e,s,o,l)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(u)},{when:o}=r;return o?"beforeChildren"===o?a().then(()=>s()):s().then(a):Promise.all([a(),s(i.delay)])}function nH(e,t){if(!Array.isArray(t))return!1;let i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}let nG=[...tm].reverse(),nX=e=>e?.out===!0?e:e?.out;function nY(){let e={};for(let t of tm)e[t]={isActive:"animate"===t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{},out:{}};return e}let nK=0;function nZ(e,t,i,n={passive:!0}){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i,n)}let nJ=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function nQ(e){return{point:{x:e.pageX,y:e.pageY}}}function n0(e,t,i,n){return nZ(e,t,e=>nJ(e)&&i(e,nQ(e)),n)}function n1(e){return e.max-e.min}function n2(e,t,i,n=.5){e.origin=n,e.originPoint=tz(t.min,t.max,e.origin),e.scale=n1(i)/n1(t),e.translate=tz(i.min,i.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function n5(e,t,i,n){n2(e.x,t.x,i.x,n?.originX),n2(e.y,t.y,i.y,n?.originY)}function n3(e,t,i,n=0){e.min=(n?tz(i.min,i.max,n):i.min)+t.min,e.max=e.min+n1(t)}function n4(e,t,i,n=0){let r=n?tz(i.min,i.max,n):i.min;e.min=t.min-r,e.max=e.min+n1(t)}function n8(e,t,i,n){n4(e.x,t.x,i.x,n?.x),n4(e.y,t.y,i.y,n?.y)}function n9(e){return[e("x"),e("y")]}let n6={};function n7(e){return n6.current?.add(e),e}let re=e=>n6.current?n6.current.bind(e):e,rt=e=>"object"==typeof e&&null!==e;function ri(e){return rt(e)&&"ownerSVGElement"in e}function rn(e,t,i){if(null==e)return[];if(e instanceof EventTarget)return[e];if("string"==typeof e){let n=t?t.current:n6.current?.root||document,r=i?.[e]??n.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e).filter(e=>null!=e)}let rr=new WeakMap,ra=(e,t,i)=>(n,r)=>r&&r[0]?r[0][e+"Size"]:ri(n)&&"getBBox"in n?n.getBBox()[t]:n[i],rs=ra("inline","width","offsetWidth"),ro=ra("block","height","offsetHeight");function rl({target:e,borderBoxSize:t}){rr.get(e)?.forEach(i=>{i(e,{get width(){return rs(e,t)},get height(){return ro(e,t)}})})}function ru(e){e.forEach(rl)}let rh=new Set;function rc(e,t){let r;return n7("function"==typeof e?(rh.add(e),n||(n=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};rh.forEach(t=>t(e))},window.addEventListener("resize",n)),()=>{rh.delete(e),rh.size||"function"!=typeof n||(window.removeEventListener("resize",n),n=void 0)}):(!i&&"u">typeof ResizeObserver&&(i=new ResizeObserver(ru)),(r=rn(e)).forEach(e=>{let n=rr.get(e);n||(n=new Set,rr.set(e,n)),n.add(t),i?.observe(e)}),()=>{r.forEach(e=>{let n=rr.get(e);n?.delete(t),n?.size||i?.unobserve(e)})}))}let rd=(e,t)=>Math.abs(e-t),rm=new Set(["auto","scroll"]);class rp{constructor(e,t,{transformPagePoint:i,contextWindow:n=window,dragSnapToOrigin:r=!1,distanceThreshold:a=3,element:s}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{var e,t;if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.hasPendingMove=!1,this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=rg(this.lastRawMoveEventInfo,this.transformPagePoint));let i=rv(this.lastMoveEventInfo,this.history),n=null!==this.startEvent,r=(e=i.offset,t={x:0,y:0},Math.sqrt(rd(e.x,t.x)**2+rd(e.y,t.y)**2)>=this.distanceThreshold);if(!n&&!r)return;let{point:a}=i;this.history.push({...a,timestamp:e5.now()});let{onStart:s,onMove:o}=this.handlers;n||(s?.(this.lastMoveEvent,i),this.startEvent=this.lastMoveEvent),o?.(this.lastMoveEvent,i)},this.handlePointerMove=(e,t)=>{this.handleScroll(window),this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=rg(t,this.transformPagePoint),this.hasPendingMove=!0,eI.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.hasPendingMove&&this.updatePoint(),this.end();let{onEnd:i,onSessionEnd:n,resumeAnimation:r}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&r?.(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=rv("pointercancel"===e.type?this.lastMoveEventInfo:rg(t,this.transformPagePoint),this.history);this.startEvent&&i?.(e,a),n?.(e,a)},!nJ(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=a,this.contextWindow=n||window;let o=rg(nQ(e),this.transformPagePoint),{point:l}=o;this.history=[{...l,timestamp:e5.now()}];let{onSessionStart:u}=t;u&&u(e,rv(o,this.history));let h={passive:!0,capture:!0};this.removeListeners=iF(n0(this.contextWindow,"pointermove",this.handlePointerMove,h),n0(this.contextWindow,"pointerup",this.handlePointerUp,h),n0(this.contextWindow,"pointercancel",this.handlePointerUp,h)),s&&this.startScrollTracking(s)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(rm.has(e.overflowX)||rm.has(e.overflowY))&&this.scrollPositions.set(t,rf(t)),t=t.parentElement}this.scrollPositions.set(window,rf(window)),this.removeScrollListeners=iF(nZ(window,"scroll",this.onElementScroll,{capture:!0}),nZ(window,"scroll",this.onWindowScroll,{}))}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let i=e===window,n=rf(e),r={x:n.x-t.x,y:n.y-t.y};(0!==r.x||0!==r.y)&&(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(e,n),eI.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners?.(),this.removeScrollListeners?.(),this.scrollPositions.clear(),eR(this.updatePoint)}}let rf=e=>e===window?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop};function rg(e,t){return t?{point:t(e.point)}:e}function ry(e,t){return{x:e.x-t.x,y:e.y-t.y}}function rv({point:e},t){return{point:e,delta:ry(e,rw(t)),offset:ry(e,t[0]),velocity:function(e){if(e.length<2)return{x:0,y:0};let t=e.length-1,i=null,n=rw(e);for(;t>=0&&(i=e[t],!(n.timestamp-i.timestamp>ez(.1)));)t--;if(!i)return{x:0,y:0};i===e[0]&&e.length>2&&n.timestamp-i.timestamp>2*ez(.1)&&(i=e[1]);let r=(n.timestamp-i.timestamp)/1e3;if(0===r)return{x:0,y:0};let a={x:(n.x-i.x)/r,y:(n.y-i.y)/r};return 1/0===a.x&&(a.x=0),1/0===a.y&&(a.y=0),a}(t)}}function rw(e){return e[e.length-1]}let rb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),rT=new Set(["INPUT","SELECT","TEXTAREA"]),rx={x:!1,y:!1};function r_(e,t,i){return{min:void 0!==t?e.min+t:void 0,max:void 0!==i?e.max+i-(e.max-e.min):void 0}}function rk(e,t){let i=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,n]=[n,i]),{min:i,max:n}}function rS(e,t,i){return{min:rC(e,t),max:rC(e,i)}}function rC(e,t){return"number"==typeof e?e:e[t]||0}function rA(e){let t="";for(let i of e.path){i.scroll=void 0,i.updateScroll();let{scroll:n}=i;i!==e.root&&n&&(t+=n.offset.x+","+n.offset.y+",")}return t}let rP=new WeakMap;class rM{constructor(e,t=()=>e.getProps()){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Y(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e,this.readProps=t}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){if(this.visualElement.presenceContext?.isPresent===!1)return;let n=e=>{t&&this.snapToCursor(e),this.stopAnimation()},r=(e,t)=>{let{drag:i,dragConstraints:n,dragPropagation:r,onDragStart:a}=this.getProps();if(i&&!r&&(this.openDragLock?.(),this.openDragLock=function(e){if("x"===e||"y"===e)if(rx[e])return null;else return rx[e]=!0,()=>{rx[e]=!1};return rx.x||rx.y?null:(rx.x=rx.y=!0,()=>{rx.x=rx.y=!1})}(i),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints();let{projection:s}=this.visualElement;s&&(s.isAnimationBlocked=!0,s.target=void 0),n9(e=>{let t=this.getAxisMotionValue(e).get()||0;if(er(t)&&(t=el(t,this.visualElement.current)||0),x.test(t))t=parseFloat(t);else if(T.test(t)){let i=s?.layout?.layoutBox[e];i&&(t=n1(i)*(parseFloat(t)/100))}this.originPoint[e]=t}),this.point="function"==typeof n&&n(this),a&&eI.update(()=>a(e,t),!1,!0),iR(this.visualElement,"transform"),this.visualElement.animationState?.setActive("whileDrag",!0)},a=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:i,dragDirectionLock:n,onDirectionLock:r,onDrag:a}=this.getProps();if(!i&&!this.openDragLock)return;let{offset:s}=t;if(n&&null===this.currentDirection){if(this.currentDirection=function(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}(s),null===this.currentDirection)return;r&&r(this.currentDirection)}this.updateAxis("x",s),this.updateAxis("y",s),this.point&&this.point.move(),this.visualElement.render(),a&&eI.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},o=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints||this.point)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new rp(e,{onSessionStart:n,onStart:r,onMove:a,onSessionEnd:s,resumeAnimation:o},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:i,contextWindow:this.visualElement.current?.ownerDocument.defaultView,element:this.visualElement.current})}stop(e,t,i){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!r||!n)return;let{velocity:s}=r;this.startAnimation(s,i);let{onDragEnd:o}=this.getProps();o&&eI.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession(),!this.getProps().dragPropagation&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t?.setActive("whileDrag",!1)}endPanSession(){this.panSession?.end(),this.panSession=void 0}updateAxis(e,t){let{drag:i}=this.readProps();if(!t||!rI(e,i,this.currentDirection))return;let n=this.getAxisMotionValue(e),r=this.originPoint[e]+t[e],a=this.constraints&&this.constraints[e];a&&(r=function(e,{min:t,max:i},n){return void 0!==t&&e<t?e=n?tz(t,e,n.min):Math.max(e,t):void 0!==i&&e>i&&(e=n?tz(i,e,n.max):Math.min(e,i)),e}(r,a,this.elastic[e])),this.point?this.point[e]=r:n.set(r)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),{projection:i}=this.visualElement,n=i&&(i.layout||i.measure(!1)),r=this.constraints;rE(e)?this.constraints&&this.scroll===rA(i)||(this.constraints=this.resolveRefConstraints()):e&&n&&"object"==typeof e?this.constraints=function(e,{top:t,left:i,bottom:n,right:r}){return{x:r_(e.x,i,r),y:r_(e.y,t,n)}}(n.layoutBox,e):this.constraints=!1,this.elastic=function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:rS(e,"left","right"),y:rS(e,"top","bottom")}}(t),r!==this.constraints&&!rE(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&n9(e=>{var t,i;let r;!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=(t=n.layoutBox[e],i=this.constraints[e],r={},void 0!==i.min&&(r.min=i.min-t.min),void 0!==i.max&&(r.max=i.max-t.min),r))})}resolveRefConstraints(){var e,t;let{dragConstraints:i,onMeasureDragConstraints:n}=this.getProps();if(!rE(i))return!1;let r=rD(i),{projection:a}=this.visualElement;if(!a||!a.layout)return!1;this.scroll=rA(a);let s=function(e,t,i){let n=t4(e,i),{scroll:r}=t;return r&&(t1(n.x,r.offset.x),t1(n.y,r.offset.y)),n}(r,a.root,this.visualElement.getTransformPagePoint()),o=(e=a.layout.layoutBox,t=a.removeElementScroll(s),{x:rk(e.x,t.x),y:rk(e.y,t.y)});if(n){let e=n(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=tU(e))}return o}startAnimation(e,t){let{drag:i,dragMomentum:n,dragElastic:r,dragTransition:a,dragSnapToOrigin:s,onDragTransitionEnd:o}=this.getProps(),l={bounceStiffness:r?200:1e6,bounceDamping:r?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...a},u=r=>n&&!(this.point&&s)&&rI(r,t||i,this.currentDirection)?e[r]:0;if(this.point&&!s)return this.point.release({x:u("x"),y:u("y")},l).then(o);let h=this.constraints||{};return Promise.all(n9(e=>{if(!rI(e,t||i,this.currentDirection))return;let n=h[e]||{};(!0===s||s===e)&&(n={min:0,max:0});let r={type:"inertia",velocity:u(e),...l,...n};return this.startAxisValueAnimation(e,r)})).then(o)}startAxisValueAnimation(e,t){let i=this.getAxisMotionValue(e);return iR(this.visualElement,e),i.start(nW(e,i,0,t,this.visualElement,!1))}stopAnimation(){n9(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.readProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor({clientX:e,clientY:t}){let{drag:i}=this.getProps(),n={x:e,y:t},r=this.visualElement.getTransformPagePoint()?.(n)||n,a=this.visualElement.measureViewportBox();n9(e=>{if(!rI(e,i,this.currentDirection))return;let t=this.getAxisMotionValue(e),{min:n,max:s}=a[e];t.set((t.get()||0)+r[e]-tz(n,s,.5))})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!rE(t)||!i||!this.constraints)return;this.stopAnimation();let n=this.constraints,r={x:0,y:0};n9(e=>{var t,i;let a,o,l,u=this.getAxisMotionValue(e).get();r[e]=(t={min:u,max:u},i=n[e],a=.5,o=n1(t),(l=n1(i))>o?a=nm(i.min,i.max-o,t.min):o>l&&(a=nm(t.min,t.max-l,i.min)),s(0,1,a))});let{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root?.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),n9(t=>{let i=this.getAxisMotionValue(t);if(!rI(t,e,null)||!i.get())return;let{min:n,max:a}=this.constraints[t];i.set(tz(n,a,r[t]))}),this.visualElement.render()}addListeners(){let e;if(!this.visualElement.current)return;rP.set(this.visualElement,this);let t=this.visualElement.current,i=n0(t,"pointerdown",e=>{let{drag:i,dragListener:n=!0}=this.getProps(),r=e.target,a=r!==t&&(rT.has(r.tagName)||!0===r.isContentEditable);i&&n&&!a&&this.start(e)}),n=()=>{var i,n,r;let a,s,{dragConstraints:o}=this.getProps(),l=rE(o)&&rD(o);l&&(this.constraints=this.resolveRefConstraints(),e||(i=t,n=l,a=rc(i,rL(r=()=>this.scalePositionWithinConstraints())),s=rc(n,rL(r)),e=()=>{a(),s()}))},{projection:r}=this.visualElement,a=r.addEventListener("measure",n);r.layout||(r.root?.updateScroll(),r.updateLayout()),eI.read(n);let s=nZ(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(n9(t=>{if(!rI(t,this.getProps().drag,this.currentDirection))return;let i=this.getAxisMotionValue(t);this.originPoint[t]+=e[t].translate,i.set(i.get()+e[t].translate)}),this.visualElement.render())});return()=>{s(),i(),a(),o(),e?.()}}getProps(){let e=this.readProps(),{dragElastic:t=.35,dragMomentum:i=!0}=e;return{...e,dragElastic:t,dragMomentum:i}}}function rE(e){return!!e&&"object"==typeof e&&("current"in e||"nodeType"in e)}let rD=e=>"current"in e?e.current:e;function rL(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function rI(e,t,i){return(!0===t||t===e)&&(null===i||i===e)}let rR=e=>(t,i)=>{e&&eI.update(()=>e(t,i),!1,!0)},rF={hasAnimatedSinceResize:!0,hasEverUpdated:!1};var rV=t9;function rN(e=!0){let t=(0,t9.useContext)(ig);if(null===t)return[!0,null];let{isPresent:i,onExitComplete:n,register:r}=t,a=(0,t9.useId)();(0,t9.useEffect)(()=>{if(e)return r(a)},[e]);let s=(0,t9.useCallback)(()=>e&&n&&n(a),[a,n,e]);return!i&&n?[!1,s]:[!0]}e.s(["f",0,rN],64978);let rj=!1,rO=({layout:e,layoutDependency:t,layoutAnchor:i})=>({layout:e,layoutDependency:t,layoutAnchor:i,animationType:"string"==typeof e?e:"both"}),rB=(e,t)=>{let{snapshot:i}=e,n=e.getStack();n?.remove(e);let r=n?.lead;if(n?.prevLead===e&&r.resumeFrom===e&&(r.resumeFrom=r.currentAnimation=e.resumingFrom=void 0),e.options.layoutId=t,!t){e.needsShow=!0;return}return e.root.registerSharedNode(t,e),()=>{let{resumeFrom:t}=e;t?.isPresent!==!1&&e.getStack().members.includes(t)&&(t.hide(),e.resumeFrom=void 0,e.snapshot=i)}};class rW extends rV.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:n}=this.props,{projection:r}=e;r&&(t.group?.add(r),n&&i?.register?.(r),rj&&r.root.didUpdate(),r.options.layoutId!==n&&rB(r,n)?.(),r.addEventListener("animationComplete",()=>this.safeToRemove()),r.setOptions({...r.options,...rO(this.props),onExitComplete:()=>this.safeToRemove()})),rF.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,layoutId:i,visualElement:n,drag:r,isPresent:a}=this.props,{projection:s}=n;return s&&(s.isPresent=a,this.takeOver=e.layoutId!==i?(s.willUpdate(),rB(s,i)):void 0,s.setOptions({...s.options,...rO(this.props)}),rj=!0,r||e.layoutDependency!==t||void 0===t||e.isPresent!==a?s.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?s.promote():s.relegate()||eI.postRender(()=>{s.getStack()?.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(this.takeOver?.(),e.root.didUpdate(),ta.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:n}=e;rj=!0,n&&(n.scheduleCheckAfterUnmount(),t.group?.remove(n),i?.deregister?.(n))}safeToRemove(){this.props.safeToRemove?.()}render(){return null}}function rq(e){let[t,i]=rN(),n=(0,rV.useContext)(ii);return(0,ie.jsx)(rW,{...e,layoutGroup:n,switchLayoutGroup:(0,rV.useContext)(iC),isPresent:t,safeToRemove:i})}let r$,rU=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],rz=e=>"number"==typeof e?e:parseFloat(e),rH=rU.length,rG=e=>"number"==typeof e||x.test(e);function rX(e,t){return void 0!==e[t]?e[t]:e.borderRadius}let rY=rZ(0,.5,nu),rK=rZ(.5,.95,eP);function rZ(e,t,i){return n=>n<e?0:n>t?1:i(nm(e,t,n))}function rJ(e,t){e.min=t.min,e.max=t.max}function rQ(e,t){rJ(e.x,t.x),rJ(e.y,t.y)}function r0(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function r1(e,t,i,n,r){return e-=t,e=n+1/i*(e-n),void 0!==r&&(e=n+1/r*(e-n)),e}function r2(e,t,[i,n,r],a,s){!function(e,t=0,i=1,n=.5,r,a=e,s=e){if(T.test(t)&&(t=parseFloat(t),t=tz(s.min,s.max,t/100)-s.min),"number"!=typeof t)return;let o=tz(a.min,a.max,n);e===a&&(o-=t),e.min=r1(e.min,t,i,o,r),e.max=r1(e.max,t,i,o,r)}(e,t[i],t[n],t[r],t.scale,a,s)}let r5=["x","scaleX","originX"],r3=["y","scaleY","originY"];function r4(e,t,i,n){r2(e.x,t,r5,i?.x,n?.x),r2(e.y,t,r3,i?.y,n?.y)}let r8=e=>"u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),r9=r8("applewebkit/")&&!r8("chrome/")?Math.round:eP;function r6(e){e.min=r9(e.min),e.max=r9(e.max)}function r7(e){return 0===e.translate&&1===e.scale}function ae(e){return r7(e.x)&&r7(e.y)}function at(e,t){return e.min===t.min&&e.max===t.max}function ai(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function an(e,t){return ai(e.x,t.x)&&ai(e.y,t.y)}function ar(e){return n1(e.x)/n1(e.y)}function aa(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class as{constructor(){this.members=[]}add(e){eH(this.members,e);for(let t=this.members.length-1;t>=0;t--){let i=this.members[t];if(i===e||i===this.lead||i===this.prevLead)continue;let n=i.instance;n&&!1!==n.isConnected||i.snapshot||(eG(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(eG(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(!1!==e.isPresent&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();let{layoutDependency:n}=i.options,{layoutDependency:r}=e.options;(void 0===n||n!==r)&&(e.resumeFrom=i,t&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),!1===e.options.crossfade&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}function ao(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}let al={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e)if(!x.test(e))return e;else e=parseFloat(e);let i=ao(e,t.target.x),n=ao(e,t.target.y);return`${i}% ${n}%`}},au={borderRadius:Object.assign({},al,{applyTo:rU.slice()}),borderTopLeftRadius:al,borderTopRightRadius:al,borderBottomLeftRadius:al,borderBottomRightRadius:al,boxShadow:{correct:(e,{treeScale:t,projectionDelta:i})=>{let n=F.parse(e);if(n.length>5)return e;let r=F.createTransformer(e),a=+("number"!=typeof n[0]),s=i.x.scale*t.x,o=i.y.scale*t.y;n[0+a]/=s,n[1+a]/=o;let l=tz(s,o,.5);return"number"==typeof n[2+a]&&(n[2+a]/=l),"number"==typeof n[3+a]&&(n[3+a]/=l),r(n)}}},ah=(e,t)=>e.depth-t.depth;class ac{constructor(){this.children=[],this.isDirty=!1}add(e){eH(this.children,e),this.isDirty=!0}remove(e){eG(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ah),this.isDirty=!1,this.children.forEach(e)}}let ad=["z","skew","skewZ"],am=0;function ap(e,t,i,n){let{latestValues:r}=t;r[e]&&(i[e]=r[e],t.setStaticValue(e,0),n&&(n[e]=0))}let af=e=>e.instance&&tr.get(e.instance)?.demote()&&e.resetSkewAndRotation();function ag({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:n,resetTransform:r}){return Object.assign(tO,{...au,...tO}),class{static create(e,t,i){var n;let{layoutId:r,layout:a,drag:s,dragConstraints:o,layoutScroll:l,layoutRoot:u,layoutAnchor:h,layoutCrossfade:c}=t,d=e.projection=new this(e.latestValues,t["data-framer-portal-id"]?void 0:function e(t){if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)}(e.parent));d.setOptions({layoutId:r,layout:a,alwaysMeasureLayout:!!s||o&&(n=o)&&"object"==typeof n&&Object.prototype.hasOwnProperty.call(n,"current"),visualElement:e,animationType:"string"==typeof a?a:"both",initialPromotionConfig:i,crossfade:c,layoutScroll:l,layoutRoot:u,layoutAnchor:h});let m=d.getStack()?.lead;m&&!d.root.isUpdateBlocked()&&(m.willUpdate(),m.scheduleCheckAfterUnmount())}constructor(e={},i=t?.()){this.id=am++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(aw),this.nodes.forEach(aM),this.nodes.forEach(aE),this.nodes.forEach(ab),r$?.()},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new ac)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new eX),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){this.eventHandlers.get(e)?.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=ri(t)&&!(ri(t)&&"svg"===t.tagName),this.instance=t;let{layoutId:i,layout:n,visualElement:r}=this.options;if(r&&!r.current&&r.mount(t),this.root.nodes.add(this),this.parent?.children.add(this),this.root.hasTreeAnimated&&(n||i)&&(this.isLayoutDirty=!0),e){let i,n=0,r=()=>this.root.updateBlockedByResize=!1;eI.read(()=>{n=window.innerWidth}),e(t,()=>{let e=window.innerWidth;if(e!==n){var t;let a,s;n=e,this.root.updateBlockedByResize=!0,i?.(),t=r,a=e5.now(),t=re(t),s=({timestamp:e})=>{let i=e-a;i>=250&&(eR(s),t(i-250))},eI.setup(s,!0),i=n7(()=>eR(s)),rF.hasAnimatedSinceResize&&(rF.hasAnimatedSinceResize=!1,this.nodes.forEach(aP))}})}i&&this.root.registerSharedNode(i,this),this.addLayoutListener()}addLayoutListener(){let{layoutId:e,layout:t,visualElement:i,animate:n}=this.options;this.instance&&!this.hasLayoutListener&&!1!==n&&i&&(e||t)&&(this.hasLayoutListener=!0,this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isAnimationBlocked){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||aF,{onLayoutAnimationStart:s,onLayoutAnimationComplete:o}=i.getProps(),l=!this.targetLayout||!an(this.targetLayout,r),u=!t&&n;if(this.options.layoutRoot||this.resumeFrom||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...iI(a,"layout"),onPlay:s,onComplete:o};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,u,t.path)}else t||aP(this),this.isLead()&&this.options.onExitComplete?.();this.targetLayout=r}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),this.getStack()?.remove(this),this.parent?.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),this.hasLayoutListener=!1,eR(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes?.forEach(aD),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void this.options.onExitComplete?.();if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function e(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;let{visualElement:i}=t.options;if(!i)return;let n=i.props[iS];if(window.MotionHasOptimisedAnimation(n,"transform")){let{layout:e,layoutId:i}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",eI,!(e||i))}let{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&e(r)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;af(this),this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,af(t),("string"==typeof t.latestValues.x||"string"==typeof t.latestValues.y)&&(t.isLayoutDirty=!0),t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1),t.isAnimationBlocked&&(t.dragSnapshot||(t.dragSnapshot=t.measure()),this.dragAncestor=t)}let{layoutId:t,layout:i}=this.options;if(void 0===t&&!i)return;let n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(a_),this.nodes.forEach(ax);return}if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(ak);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(aS),this.nodes.forEach(aC),this.nodes.forEach(aA),this.nodes.forEach(ay),this.nodes.forEach(av)):this.nodes.forEach(ak),this.clearAllSnapshots();let e=e5.now();eL.delta=s(0,1e3/60,e-eL.timestamp),eL.timestamp=e,eL.isProcessing=!0,eF.update.process(eL),eF.preRender.process(eL),eF.render.process(eL),eL.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ta.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(aT),this.sharedNodes.forEach((e,t)=>e.members.length?e.removeLeadSnapshot():this.sharedNodes.delete(t))}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,eI.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){eI.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||n1(this.snapshot.measuredBox.x)||n1(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected||(this.layoutCorrected=Y()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t?.notify("LayoutMeasure",this.layout.layoutBox,e?.layoutBox)}updateScroll(e="measure"){let{scroll:t,instance:r}=this,{animationId:a}=this.root;if(this.options.layoutScroll&&r&&!(t&&t.animationId===a&&t.phase===e)){let s=n(r);this.scroll={animationId:a,phase:e,isRoot:s,offset:i(r),wasRoot:t?t.isRoot:s}}}resetTransform(){if(!r)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout;e&&af(this);let t=this.projectionDelta&&!ae(this.projectionDelta),i=this.getTransformTemplate(),n=i?i(this.latestValues,""):void 0,a=n!==this.prevTransformTemplateValue;e&&this.instance&&(t||tY(this.latestValues)||a)&&(r(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let i=this.measurePageBox(),n=this.removeElementScroll(i);return e&&(n=this.removeTransform(n)),r6((t=n).x),r6(t.y),{animationId:this.root.animationId,measuredBox:i,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Y();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(aj))){let{scroll:e}=this.root;e&&(t1(t.x,e.offset.x),t1(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Y();if(rQ(t,e),this.scroll?.wasRoot)return t;for(let i=0;i<this.path.length;i++){let n=this.path[i],{scroll:r,options:a}=n;n!==this.root&&r&&a.layoutScroll&&(r.wasRoot&&rQ(t,e),t1(t.x,r.offset.x),t1(t.y,r.offset.y))}return t}applyTransform(e,t=!1,i,n,r=0){let a=i||Y();rQ(a,e);for(let e=r;e<this.path.length;e++){let i=this.path[e];!t&&i.options.layoutScroll&&i.scroll&&i!==i.root&&(t1(a.x,-i.scroll.offset.x),t1(a.y,-i.scroll.offset.y)),tY(i.latestValues)&&t3(a,i.latestValues,i.layout?.layoutBox)}return!n&&tY(this.latestValues)&&t3(a,this.latestValues,this.layout?.layoutBox),a}removeTransform(e){let t=Y();rQ(t,e);for(let e=0;e<this.path.length;e++){let i,n=this.path[e];tY(n.latestValues)&&(n.instance&&(tG(n.latestValues)&&n.updateSnapshot(),rQ(i=Y(),n.measurePageBox())),r4(t,n.latestValues,n.snapshot?.layoutBox,i))}return tY(this.latestValues)&&r4(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade},this.addLayoutListener()}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==eL.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);let i=!!this.resumingFrom||this!==t;if(!(e||i&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:n,layoutId:r}=this.options;if(!this.layout||!(n||r))return;this.resolvedRelativeTargetAt=eL.timestamp;let a=this.getClosestProjectingParent();if(this.targetDelta||this.relativeTarget||(!1!==this.options.layoutAnchor&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),this.relativeTarget||this.targetDelta){if(this.target||(this.target=Y(),this.targetWithTransforms=Y()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target){var s,o,l,u;this.forceRelativeParentToResolveTarget(),s=this.target,o=this.relativeTarget,l=this.relativeParent.target,u=this.options.layoutAnchor||void 0,n3(s.x,o.x,l.x,u?.x),n3(s.y,o.y,l.y,u?.y)}else this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target,!0):rQ(this.target,this.layout.layoutBox),t0(this.target,this.targetDelta)):rQ(this.target,this.layout.layoutBox);this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,!1!==this.options.layoutAnchor&&a&&(!a.resumingFrom==!this.resumingFrom||a.options.layoutRoot&&!a.resumingFrom)&&!a.options.layoutScroll&&a.target&&1!==this.animationProgress?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),r$?.(1)}}getClosestProjectingParent(){if(!(!this.parent||tG(this.parent.latestValues)||tZ(this.parent.latestValues)))if(this.parent.isProjecting())return this.parent;else return this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,i){this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),n8(this.relativeTargetOrigin,t,i,this.options.layoutAnchor||void 0),rQ(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,i=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(i=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===eL.timestamp&&(i=!1),i)return;let{layout:n,layoutId:r}=this.options;if(this.isTreeAnimating=!!(this.parent?.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(n||r))return;rQ(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,s=this.treeScale.y;!function(e,t,i,n=!1){let r,a,s=i.length;if(s){t.x=t.y=1;for(let o=0;o<s;o++)a=(r=i[o]).projectionDelta,r.options.visualElement?.props.style?.display!=="contents"&&(!0===n&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(t1(e.x,-r.scroll.offset.x),t1(e.y,-r.scroll.offset.y)),a&&(t.x*=a.x.scale,t.y*=a.y.scale,t0(e,a)),n&&(n.path?.[o]||n)!==r&&tY(r.latestValues)&&t3(e,r.latestValues,r.layout?.layoutBox));t.x<1.0000000000001&&t.x>.999999999999&&(t.x=1),t.y<1.0000000000001&&t.y>.999999999999&&(t.y=1)}}(this.layoutCorrected,this.treeScale,this.path,t&&(!e.relativeTarget||!!e.relativeParent.resumingFrom||e.relativeParent)),e.layout&&!e.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Y());let{target:o}=e;if(!o){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(r0(this.prevProjectionDelta.x,this.projectionDelta.x),r0(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),n5(this.projectionDelta,this.layoutCorrected,o,this.latestValues),this.treeScale.x===a&&this.treeScale.y===s&&aa(this.projectionDelta.x,this.prevProjectionDelta.x)&&aa(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",o)),r$?.(2)}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){this.options.visualElement?.scheduleRender(),e&&this.getStack()?.scheduleRender(),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=G(),this.projectionDelta=G(),this.projectionDeltaWithTransform=G()}setAnimationOrigin(e,t=!1,i){let n,r=this.snapshot,a=r?r.latestValues:{},s={...this.latestValues},o=G();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let l=Y(),u=r?.source!==this.layout?.source,h=this.getStack(),c=!h||h.members.length<=1,d=!!(u&&!c&&!0===this.options.crossfade&&!this.path.some(aR));this.animationProgress=0;let m=i?.interpolateProjection(e);this.mixTargetDelta=t=>{let i=t/1e3,r=m?.(i);if(aL(o.x,e.x,i),aL(o.y,e.y,i),r&&(o.x.translate=r.x,o.y.translate=r.y),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var h,p,f,g,y,v;n8(l,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),f=this.relativeTarget,g=this.relativeTargetOrigin,y=l,v=i,aI(f.x,g.x,y.x,v),aI(f.y,g.y,y.y,v),n&&(h=this.relativeTarget,p=n,at(h.x,p.x)&&at(h.y,p.y))&&(this.isProjectionDirty=!1),n||(n=Y()),rQ(n,this.relativeTarget)}u&&(this.animationValues=s,function(e,t,i,n,r,a){r?(e.opacity=tz(0,i.opacity??1,rY(n)),e.opacityExit=tz(t.opacity??1,0,rK(n))):a&&(e.opacity=tz(t.opacity??1,i.opacity??1,n));for(let r=0;r<rH;r++){let a=rU[r],s=rX(t,a),o=rX(i,a);(void 0!==s||void 0!==o)&&(s||(s=0),o||(o=0),0===s||0===o||rG(s)===rG(o)?(e[a]=Math.max(tz(rz(s),rz(o),n),0),(T.test(o)||T.test(s))&&(e[a]+="%")):e[a]=o)}for(let r=0;r<tX.length;r++){let a=tX[r];(t[a]||i[a])&&(e[a]=tz(t[a]||0,i[a]||0,n))}}(s,a,this.latestValues,i,d,c)),r?.rotate!==void 0&&(this.animationValues||(this.animationValues=s),this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=i},this.mixTargetDelta(1e3*!!this.options.layoutRoot)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(eR(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=eI.update(()=>{var t,i,n;let r;rF.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=tu(0)),this.motionValue.jump(0,!1),this.currentAnimation=(t=this.motionValue,i=[0,1e3],n={...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}},(r=K(t)?t:tu(t)).start(nW("",r,i,n)),r.animation),function(e,t){let i=globalThis.__MOTION_INSPECT__;if(i)try{i({...e3("layout-animation-start",e),node:t})}catch{}}(this.currentAnimation,this),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta?.(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,layout:i,latestValues:n}=e,{target:r}=e;if(t&&r&&i){if(this!==e&&this.layout&&i&&aN(this.options.animationType,this.layout.layoutBox,i.layoutBox)){let{layoutBox:e}=this.layout,t=r;aV((r=this.target||Y()).x,t.x,e.x),aV(r.y,t.y,e.y)}rQ(t,r),t3(t,n),n5(this.projectionDeltaWithTransform,this.layoutCorrected,t,n)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new as),this.sharedNodes.get(e).add(t);let i=t.options.initialPromotionConfig;t.promote({transition:i?.transition,preserveFollowOpacity:i?.shouldPreserveFollowOpacity?i.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:i}={}){this.getStack()?.promote(this,i),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){return this.getStack()?.relegate(this)||!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let{latestValues:t}=e;if(!tK(t))return;let i={};for(let t=0;t<ad.length;t++)ap(ad[t],e,i,this.animationValues);for(let t=0;t<tX.length;t++)ap(tX[t],e,i,this.animationValues);for(let t in e.render(),i)e.setStaticValue(t,i[t]),this.animationValues&&(this.animationValues[t]=i[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;let i=this.getLead();if(!this.isVisible&&i!==this){e.visibility="hidden";return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=im(t?.pointerEvents)||"",e.transform=n?n(this.latestValues,""):"none";return}if(!this.projectionDelta||!this.layout||!i.target){(this.options.layoutId||this.needsShow)&&(this.needsShow=!1,e.visibility="",e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=im(t?.pointerEvents)||""),this.hasProjected&&!tY(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1);return}e.visibility="";let r=i.animationValues||i.latestValues;this.applyTransformsToTarget();let a=function(e,t,i){let n="",r=e.x.translate/t.x,a=e.y.translate/t.y,s=i?.z||0;if((r||a||s)&&(n=`translate3d(${r}px, ${a}px, ${s}px) `),(1!==t.x||1!==t.y)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),i){let{transformPerspective:e}=i;e&&(n=`perspective(${e}px) ${n}`);for(let e=0;e<tX.length;e++){let t=tX[e],r=i[t];r&&(n+=`${t}(${r}deg) `),!e&&i.pathRotation&&(n+=`rotate(${i.pathRotation}deg) `)}}let o=e.x.scale*t.x,l=e.y.scale*t.y;return(1!==o||1!==l)&&(n+=`scale(${o}, ${l})`),n||"none"}(this.projectionDeltaWithTransform,this.treeScale,r);n&&(a=n(r,a)),e.transform=a;let{x:s,y:o}=this.projectionDelta;for(let t in e.transformOrigin=`${100*s.origin}% ${100*o.origin}% 0`,i.animationValues?e.opacity=i===this?r.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:e.opacity=i===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0,tO){if(void 0===r[t])continue;let{correct:n,applyTo:s,isCSSVariable:o}=tO[t],l="none"===a?r[t]:n(r[t],i);if(s){let t=s.length;for(let i=0;i<t;i++)e[s[i]]=l}else o?this.options.visualElement.renderState.vars[t]=l:e[t]=l}this.options.layoutId&&(e.pointerEvents=i===this?im(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=this.dragSnapshot=this.dragAncestor=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(ax),this.root.sharedNodes.clear()}}}function ay(e){e.updateLayout(),function(e){let{snapshot:t,dragAncestor:i}=e,n=i?.isAnimationBlocked&&i.layout;if(!t||!n||e.resumeFrom||e.isAnimationBlocked)return;let r=i.dragSnapshot;n9(e=>t1(t.layoutBox[e],n.layoutBox[e].min-r.layoutBox[e].min))}(e)}function av(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){let{layoutBox:i,measuredBox:n}=e.layout,{animationType:r}=e.options,a=t.source!==e.layout.source,s=(n,a)=>{if("size"===r)n9(e=>{let t=n1(n[e]);n[e].min=a[e].min,n[e].max=n[e].min+t});else if("x"===r||"y"===r){let e="x"===r?"y":"x";rJ(n[e],a[e])}else aN(r,t.layoutBox,i)&&n9(t=>{let i=n1(a[t]);n[t].max=n[t].min+i,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[t].max=e.relativeTarget[t].min+i)})},o=a?t.measuredBox:t.layoutBox;s(o,i);let l=G();n5(l,i,t.layoutBox);let u=G();n5(u,a?e.applyTransform(n,!0):i,o);let h=!ae(l),c=!1,d=e.getClosestProjectingParent();if((!e.resumeFrom||d?.options.layoutRoot&&e.resumeFrom.path.includes(d))&&d&&!d.resumeFrom){let{snapshot:n,layout:r}=d;if(n&&r){let o=e.options.layoutAnchor||void 0,l=Y();n8(l,a?e.resumeFrom.applyTransform(t.layoutBox,!0,void 0,!0,d.depth+1):t.layoutBox,n.layoutBox,o);let u=Y();n8(u,i,r.layoutBox,o),a&&s(l,u),an(l,u)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=u,e.relativeTargetOrigin=l,e.relativeParent=d)}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:u,layoutDelta:l,hasLayoutChanged:h,hasRelativeLayoutChanged:c})}else e.isLead()&&e.options.onExitComplete?.();e.options.transition=void 0}function aw(e){r$?.(0),e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ab(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function aT(e){e.clearSnapshot()}function ax(e){e.clearMeasurements()}function a_(e){e.isLayoutDirty=!0,e.updateLayout()}function ak(e){e.isLayoutDirty=!1}function aS(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.dragSnapshot||e.layout,e.isLayoutDirty=!0)}function aC(e){e.relativeTarget&&e.relativeParent?.isLayoutDirty&&(e.currentAnimation?e.isLayoutDirty=!0:(e.targetDelta=void 0,e.removeRelativeTarget()))}function aA(e){let{visualElement:t}=e.options;t?.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function aP(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function aM(e){e.resolveTargetDelta()}function aE(e){e.calcProjection()}function aD(e){e.resetSkewAndRotation()}function aL(e,t,i){e.translate=tz(t.translate,0,i),e.scale=tz(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function aI(e,t,i,n){e.min=tz(t.min,i.min,n),e.max=tz(t.max,i.max,n)}function aR(e){return e.animationValues?.opacityExit!==void 0}let aF={duration:.45,ease:[.4,0,.1,1]};function aV(e,t,i){e.max=n1(i)+(e.min=t.min)}function aN(e,t,i){return"position"===e||"preserve-aspect"===e&&!(.2>=Math.abs(ar(t)-ar(i)))}function aj(e){return e!==e.root&&e.scroll?.wasRoot}let aO=ag({attachResizeListener:(e,t)=>nZ(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),aB=ag({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!it.current){let e=new aO({});e.mount(window),e.setOptions({layoutScroll:!0}),it.current=e}return it.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position});function aW(e,t){let i=rn(e),n=new AbortController;return[i,{passive:!0,...t,signal:n.signal},n7(()=>n.abort())]}function aq(e,t,i,n){let{props:r}=e,a="while"+i;e.animationState&&r[a]&&e.animationState.setActive(a,"Start"===n);let s=r["on"+i+n];s&&eI.postRender(()=>s(t,nQ(t)))}function a$(e){return rt(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}e.s(["f",0,a$],72846);let aU=(e,t)=>!!t&&(e===t||aU(e,t.parentElement)),az=new WeakSet;function aH(e){return t=>{"Enter"===t.key&&e(t)}}function aG(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function aX(e){return nJ(e)&&!(rx.x||rx.y)}let aY=new WeakSet;function aK(e,t,i){e.current instanceof HTMLButtonElement&&e.current.disabled||aq(e,t,"Tap",i)}let aZ=new WeakMap,aJ=new WeakMap,aQ=e=>{let t=aZ.get(e.target);t&&t(e)},a0=e=>{e.forEach(aQ)},a1={some:0,all:1},a2=function(e,t){if("u"<typeof Proxy)return iP;let i=new Map,n=(i,n)=>iP(i,n,e,t);return new Proxy((e,t)=>n(e,t),{get:(r,a)=>"create"===a?n:(i.has(a)||i.set(a,iP(a,void 0,e,t)),i.get(a))})}(Object.assign({},{animation:{Feature:class extends iM{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:i})=>(function(e,t,i={}){return e.notify("AnimationStart",t),(Array.isArray(t)?Promise.all(t.map(t=>nz(e,t,i))):"string"==typeof t?nz(e,t,i):Promise.all(n$(e,iE(e,t,i.custom),i))).then(()=>{e.notify("AnimationComplete",t)})})(e,t,i))),i=nY(),n=!0,r=!1;function a(a){let{props:s,parent:o,manuallyAnimateOnMount:l}=e,{initial:u}=s,h=n||r,c=[],d=(t=u)=>"boolean"!=typeof t&&iE(e,Array.isArray(t)?t[0]:t,e.presenceContext?.custom)||void 0,m=new Map,p={},f=1/0,g=e;do g=!1!==g.props.inherit&&g.parent;while(g&&!g.isControllingVariants)let y=h&&nX(d(u??(g&&g.props.initial))?.transition);if(nG.forEach((t,n)=>{var r,u;let d,v=i[t],w=s[t],b=g&&g.props[t],T=void 0!==w?w:td(b)||!1===b?b:void 0,x=td(T),_=t===a?v.isActive:null,k=x&&void 0===w&&!(h&&l);if(v.protectedKeys={...p},!v.isActive&&null===_||!T&&!v.prevProp||tc(T)||"boolean"==typeof T)return;if(!1===_&&(f=n),"exit"===t&&v.isActive&&!0!==_){p={...p,...v.prevResolvedValues};return}let S=(r=v.prevProp,"string"==typeof(u=T)?u!==r:!!Array.isArray(u)&&!nH(u,r)),C=S||x&&(_&&!k||n>f),A=!1,P=Array.isArray(T)?T:[T],M={};if(!1!==_)for(let i of P){let{transition:n,transitionEnd:r,...a}=iE(e,i,iD(e,t))||{};M={...M,...a,...r},d=nX(n)||d}let{prevResolvedValues:E}=v;for(let t in{...E,...M}){let i;if(t in p)continue;let n=M[t],r=E[t],a=Array.isArray(n)&&Array.isArray(r)?!nH(n,r)||S:n!==r;if(a&&null==n)m.has(t)||m.set(t,v.prevOut);else if(a||void 0!==n&&m.has(t)){C=!0,i=m.get(t)||y,m.delete(t)&&(A=!0),v.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)}else v.protectedKeys[t]=!0;v.out[t]=i}if(v.prevProp=T,v.prevResolvedValues=M,v.prevOut=d,v.isActive&&(p={...p,...M}),C&&(!(k&&S)||A))for(let i of P){let n={type:t};if("string"==typeof i&&h&&l&&o?.enteringChildren){let t=iE(o,i)?.transition?.delayChildren;n.delay=nU(o.enteringChildren,e,t)}c.push({animation:i,options:n})}}),m.size){let t={},i=d(),n=i?.transition;m.forEach((r,a)=>{r&&(n={...n||e.getDefaultTransition(),[a]:r});let o=e.getValue(a);o&&(o.liveStyle=!0);let l=i&&!Array.isArray(u)?i[a]:void 0,h=e.getBaseTargetFromProps(s,a);t[a]=(void 0!==l?l:void 0===h||K(h)?void 0===e.initialValues[a]?e.baseTarget[a]:void 0:h)??null}),n&&(t.transition=n),c.push({animation:t})}let v=h&&e.blockInitialAnimation||n&&!l&&(!1===s.initial||s.initial===s.animate);return n=r=!1,!v&&c.length?t(c):Promise.resolve()}return{animateChanges:a,setActive:function(t,n){if(i[t].isActive===n)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,n)),i[t].isActive=n;let r=a(t);for(let e in i)i[e].protectedKeys={};return r},setAnimateFunction:i=>{t=i(e)},getState:()=>i,reset:()=>{i=nY(),r=!0}}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();tc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){this.node.getProps().animate!==this.node.prevProps?.animate&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends iM{constructor(){super(...arguments),this.id=nK++}update(){let{presenceContext:e,prevPresenceContext:t,animationState:i}=this.node;if(!e||!i)return;let{isPresent:n,onExitComplete:r}=e,a=t?.isPresent;if(n===a)return;if(n&&!1===a){if(!0===this.exit){let{initial:e}=this.node.getProps();if(e&&!Array.isArray(e)){let{transition:t,transitionEnd:i,...n}=iE(this.node,e)||{};for(let e in n)this.node.getValue(e)?.jump(n[e])}this.node.blockInitialAnimation=!1,i.reset(),i.animateChanges()}else i.setActive("exit",!1);this.exit=void 0;return}let s=this.exit=i.setActive("exit",!n);r&&!n&&s.then(()=>{this.exit===s&&(this.exit=!0,r(this.id))})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id,this.node))}unmount(){}}}},{inView:{Feature:class extends iM{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var e;let t;this.stopObserver?.();let{viewport:i={}}=this.node.getProps(),{root:n,margin:r,amount:a="some",once:s}=i,o={root:n?n.current:void 0,rootMargin:r,threshold:"number"==typeof a?a:a1[a]},l=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,s&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:i,onViewportLeave:n}=this.node.getProps(),r=t?i:n;r&&r(e)};this.stopObserver=(e=this.node.current,t=function({root:e,...t}){let i=e||document;aJ.has(i)||aJ.set(i,{});let n=aJ.get(i),r=JSON.stringify(t);return n[r]||(n[r]=new IntersectionObserver(a0,{root:e,...t})),n[r]}(o),aZ.set(e,l),t.observe(e),()=>{aZ.delete(e),t.unobserve(e)})}mount(){this.startObserver()}update(){if("u"<typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}},tap:{Feature:class extends iM{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:i}=this.node.props;this.unmount=function(e,t,i={}){t=re(t);let[n,r,a]=aW(e,i),s=e=>{let n=e.currentTarget;if(!aX(e)||aY.has(e))return;az.add(n),i.stopPropagation&&aY.add(e);let a=t(n,e),s={...r,capture:!0},o=(e,t)=>{window.removeEventListener("pointerup",l,s),window.removeEventListener("pointercancel",u,s),az.has(n)&&az.delete(n),aX(e)&&"function"==typeof a&&a(e,{success:t})},l=e=>{o(e,n===window||n===document||i.useGlobalTarget||aU(n,e.target))},u=e=>{o(e,!1)};window.addEventListener("pointerup",l,s),window.addEventListener("pointercancel",u,s)};return n.forEach(e=>{((i.useGlobalTarget?window:e).addEventListener("pointerdown",s,r),a$(e))&&(e.addEventListener("focus",()=>{let t,i,n;return t=!1,i=aH(()=>{az.has(e)||(t=!0,aG(e,"down"))}),n=aH(()=>{t&&(t=!1,aG(e,"up"))}),void(e.addEventListener("keydown",i,r),e.addEventListener("keyup",n,r),e.addEventListener("blur",()=>{e.removeEventListener("keydown",i),e.removeEventListener("keyup",n),t&&aG(e,"cancel")},{...r,once:!0}))},r),rb.has(e.tagName)||!0===e.isContentEditable||e.hasAttribute("tabindex")||(e.tabIndex=0))}),a}(e,(e,t)=>(aK(this.node,t,"Start"),(e,{success:t})=>aK(this.node,e,t?"":"Cancel")),{useGlobalTarget:t,stopPropagation:i?.tap===!1})}unmount(){}}},focus:{Feature:class extends iM{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=iF(nZ(this.node.current,"focus",()=>this.onFocus()),nZ(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends iM{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,i={}){t=re(t);let[n,r,a]=aW(e,i);return n.forEach(e=>{let i,n=!1,a=!1,s=t=>{i&&(i(t),i=void 0),e.removeEventListener("pointerleave",l)},o=e=>{n=!1,window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),a&&(a=!1,s(e))},l=e=>{if("touch"!==e.pointerType){if(n){a=!0;return}s(e)}};e.addEventListener("pointerenter",n=>{if("touch"===n.pointerType||rx.x||rx.y)return;a=!1;let s=t(e,n);"function"==typeof s&&(i=s,e.addEventListener("pointerleave",l,r))},r),e.addEventListener("pointerdown",()=>{n=!0,window.addEventListener("pointerup",o,r),window.addEventListener("pointercancel",o,r)},r)}),a}(e,(e,t)=>(aq(this.node,t,"Hover","Start"),e=>aq(this.node,e,"Hover","End"))))}unmount(){}}}},{pan:{Feature:class extends iM{constructor(){super(...arguments),this.removePointerDownListener=eP}onPointerDown(e){this.session=new rp(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:this.node.current?.ownerDocument.defaultView})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:n}=this.node.getProps();return{onSessionStart:rR(e),onStart:rR(t),onMove:rR(i),onEnd:(e,t)=>{delete this.session,n&&eI.postRender(()=>n(e,t))}}}mount(){this.removePointerDownListener=n0(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session?.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session?.end()}}},drag:{Feature:class extends iM{constructor(e){super(e),this.removeGroupControls=eP,this.removeListeners=eP,this.controls=new rM(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||eP}update(){let{dragControls:e,drag:t}=this.node.getProps(),{dragControls:i,drag:n}=this.node.prevProps||{};e!==i&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls))),n&&!t&&this.controls.stop(void 0,void 0,n)}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},ProjectionNode:aB,MeasureLayout:rq}},{layout:{ProjectionNode:aB,MeasureLayout:rq}}),(e,t)=>t.isSVG??t7(e)?new t$(t):new t8(t,{allowProjection:e!==t9.Fragment}));e.s(["f",0,a2],46932);var a5=e.i(5014);function a3(e,t=[],i=[]){let n,r="string"==typeof e?function(e,t,i=[]){if(null==t)throw Error("[lucide]: iconNode is required when icon name is used");return{name:e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),size:24,node:t,...i.length>0?{aliases:i}:{}}}(e,t,i):e,a=(0,t9.forwardRef)(({className:e,...t},i)=>(0,t9.createElement)(a5.default,{ref:i,icon:r,className:e,...t}));return r.name&&(a.displayName=(n=(e=>{let t="",i=!1;for(let n of e){if("-"===n||"_"===n||n<=" "){i=t.length>0;continue}0===t.length?t+=n.toLowerCase():t+=i?n.toUpperCase():n,i=!1}return t})(r.name)).charAt(0).toUpperCase()+n.slice(1)),a}e.s(["f",0,a3],56420);let a4={name:"tree-pine",size:24,node:[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]};a4.node;let a8=a3(a4);e.s(["f",0,a8],62183);let a9={name:"map",size:24,node:[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]};a9.node;let a6=a3(a9);e.s(["f",0,a6],49862)},5014,e=>{var t=e.i(71645);let i=(...e)=>e.filter((e,t,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===t).join(" ").trim(),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},r=(0,t.createContext)({}),a=(0,t.forwardRef)(({color:e,size:a,width:s,height:o,strokeWidth:l,absoluteStrokeWidth:u,nonScalingStroke:h,className:c="",children:d,iconNode:m=[],icon:p={node:m,aliases:[],size:24},...f},g)=>{let{size:y=24,strokeWidth:v=2,absoluteStrokeWidth:w=!1,nonScalingStroke:b=!1,color:T="currentColor",className:x=""}=(0,t.useContext)(r)??{},_=!!d||(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(f),[k,S,C=[]]=function(e,t={}){return function(e,t={}){let r=t.attributeNames??{},a=e=>r[e]??e,s=e.size??e.width??n.width,o=e.size??e.height??n.height,l=e.aliases?.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>`lucide-${e}`)??[],u=[...e.name?[`lucide-${e.name}`]:[],...l],h=t.className?.split(" ").filter(Boolean)??[],c=!1===t.includeDefaultClasses?i(...h):i("lucide",...u,...h),d=t.absoluteStrokeWidth?Number(t.strokeWidth??n["stroke-width"])*Number(e.size??e.width??n.width)/Number(t.size??t.width??n.width):t.strokeWidth??n["stroke-width"];return["svg",{...Object.entries(n).reduce((e,[t,i])=>(e[a(t)]=i,e),{}),..."color"in t&&t.color&&{[a("stroke")]:t.color},..."size"in t&&null!=t.size&&{[a("width")]:t.size,[a("height")]:t.size},..."width"in t&&null!=t.width&&{[a("width")]:t.width},..."height"in t&&null!=t.height&&{[a("height")]:t.height},[a("stroke-width")]:d,...c&&{[a("class")]:c},[a("viewBox")]:`0 0 ${s} ${o}`,...!1===t.hasA11yProp?{[a("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(e=>{let[i,n,r]=e,s=t.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...n}:n;return r?[i,s,r]:[i,s]})]}(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}(p,{color:e??T,width:s??a??y,height:o??a??y,strokeWidth:l??v,absoluteStrokeWidth:u??w,nonScalingStroke:h??b,className:i(x,c),hasA11yProp:_,attributes:f});return(0,t.createElement)(k,{ref:g,...S},[...C.map(([e,i])=>(0,t.createElement)(e,i)),...Array.isArray(d)?d:[d]])});e.s(["default",0,a],5014)},56423,e=>{var t=e.i(56420);let i={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};i.node;let n=(0,t.f)(i);e.s(["f",0,n],56423)},13285,e=>{var t=e.i(56420);let i={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};i.node;let n=(0,t.f)(i);e.s(["f",0,n],13285)},22016,(e,t,i)=>{e.i(47167),Object.defineProperty(i,"__esModule",{value:!0});var n={default:function(){return y},useLinkStatus:function(){return w}};for(var r in n)Object.defineProperty(i,r,{enumerable:!0,get:n[r]});let a=e.r(90809),s=e.r(18050),o=a._(e.r(71645)),l=e.r(95057),u=e.r(8372),h=e.r(18581),c=e.r(18967),d=e.r(5550),m=e.r(88540),p=e.r(91949),f=e.r(73668),g=e.r(9396);function y(t){var i;let n,r,a,[y,w]=(0,o.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,o.useRef)(null),{href:T,as:x,children:_,prefetch:k=null,passHref:S,replace:C,shallow:A,scroll:P,onClick:M,onMouseEnter:E,onTouchStart:D,legacyBehavior:L=!1,onNavigate:I,transitionTypes:R,ref:F,unstable_dynamicOnHover:V,...N}=t;n=_,L&&("string"==typeof n||"number"==typeof n)&&(n=(0,s.jsx)("a",{children:n}));let j=o.default.useContext(u.AppRouterContext),O=!1!==k,B=!1===k?"none":!0===k?"full":"auto",W="none"!==B?"auto"===B?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,q="string"==typeof(i=x||T)?i:(0,l.formatUrl)(i);if(L){if(n?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");r=o.default.Children.only(n)}let $=L?r&&"object"==typeof r&&r.ref:F,U,z=o.default.useCallback(e=>(null!==j&&(b.current=(0,p.mountLinkInstance)(e,q,j,W,O,w,U)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[O,q,j,W,w,U]),H={ref:(0,h.useMergedRef)(z,$),onClick(t){L||"function"!=typeof M||M(t),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!j||t.defaultPrevented||function(t,i,n,r,a,s,o,l="none"){if("u">typeof window){let u,{nodeName:h}=t.currentTarget;if("A"===h.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(i)){r&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{navigate:c}=e.r(32916);c(i,r?"replace":"push",!1===a?m.ScrollBehavior.NoScroll:m.ScrollBehavior.Default,n.current,o,l)}}(t,q,b,C,P,I,R,B)},onMouseEnter(e){L||"function"!=typeof E||E(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),j&&O&&(0,p.onNavigationIntent)(e.currentTarget,!0===V)},onTouchStart:function(e){L||"function"!=typeof D||D(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),j&&O&&(0,p.onNavigationIntent)(e.currentTarget,!0===V)}};return(0,c.isAbsoluteUrl)(q)?H.href=q:L&&!S&&("a"!==r.type||"href"in r.props)||(H.href=(0,d.addBasePath)(q)),a=L?o.default.cloneElement(r,H):(0,s.jsx)("a",{...N,...H,children:n}),(0,s.jsx)(v.Provider,{value:y,children:a})}let v=(0,o.createContext)(p.IDLE_LINK_STATUS),w=()=>(0,o.useContext)(v);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},18581,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return r}});let n=e.r(71645);function r(e,t){let i=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=i.current;e&&(i.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(i.current=a(e,n)),t&&(r.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},95057,(e,t,i)=>{e.i(47167),Object.defineProperty(i,"__esModule",{value:!0});var n={formatUrl:function(){return o},formatWithValidation:function(){return u},urlObjectKeys:function(){return l}};for(var r in n)Object.defineProperty(i,r,{enumerable:!0,get:n[r]});let a=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:i}=e,n=e.protocol||"",r=e.pathname||"",o=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:i&&(u=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let h=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||s.test(n))&&!1!==u?(u="//"+(u||""),r&&"/"!==r[0]&&(r="/"+r)):u||(u=""),o&&"#"!==o[0]&&(o="#"+o),h&&"?"!==h[0]&&(h="?"+h),r=r.replace(/[?#]/g,encodeURIComponent),h=h.replace("#","%23"),`${n}${u}${r}${h}${o}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return o(e)}},73668,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(18967),r=e.r(52817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,r.hasBasePath)(i.pathname)}catch(e){return!1}}},18967,(e,t,i)=>{e.i(47167),Object.defineProperty(i,"__esModule",{value:!0});var n={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return T},MissingStaticPage:function(){return b},NormalizeError:function(){return v},PageNotFoundError:function(){return w},SP:function(){return f},ST:function(){return g},WEB_VITALS:function(){return a},execOnce:function(){return s},getDisplayName:function(){return c},getLocationOrigin:function(){return u},getURL:function(){return h},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return x}};for(var r in n)Object.defineProperty(i,r,{enumerable:!0,get:n[r]});let a=["CLS","FCP","INP","LCP","TTFB"];function s(e){let t,i=!1;return(...n)=>(i||(i=!0,t=e(...n)),t)}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&o.test(e)};function u(){let{protocol:e,hostname:t,port:i}=window.location;return`${e}//${t}${i?":"+i:""}`}function h(){let{href:e}=window.location,t=u();return e.substring(t.length)}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let i=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(i&&d(i))return n;if(!n)throw Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`);return n}let f="u">typeof performance,g=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class v extends Error{}class w extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class T extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},21995,e=>{let t=[{id:"01-overview-and-principles",label:"01 Overview & Principles",content:`# 01 — Overview & Principles

## The model in one paragraph

A community land trust (CLT) or mission-aligned nonprofit purchases and permanently holds the farm's land. A multi-stakeholder cooperative leases the land and operates the farm, cafe, apothecary, events, housing, and related improvements under a long-term ground lease. This keeps land affordable and community-governed forever, while giving operators secure tenure and democratic control over their work.

## Why this model for a Maine farm

Maine has one of the oldest farming traditions in the United States and one of the oldest average farmer populations. Land speculation, developer pressure, and the simple math of retirement-age owners without succession plans put extraordinary pressure on working farms.

The CLT + cooperative model:
- **Removes land from the speculative market** permanently
- **Preserves affordability** for future operators
- **Builds democratic governance** into daily operations
- **Keeps economic value circulating locally** through patronage rather than extraction
- **Maintains community access** to food, gathering spaces, and cultural programming
- **Aligns with Maine's cooperative tradition** — Papermakers Union, Lobster Co-op, Farmington's EV Charging Co-op, and others

## Why CLTs matter in a multicrisis

We are not facing one crisis. We face a polycrisis — climate destabilization, deepening inequality, housing insecurity, racial injustice, democratic erosion, and volatile food systems — that reinforces itself. Each shock widens the cracks the next shock travels through. Community land trusts are not a panacea, but they are a proven intervention that addresses several fault lines at once.

### Land speculation is an inequality engine
When land is treated as a financial asset, its price is decoupled from its social or productive value. The more unequal a society becomes, the more capital seeks land as a store of value, the more expensive land becomes, and the harder it is for farmers, workers, and communities to access it. This is true in Portland, in rural Maine, and in global cities. A CLT permanently removes land from that cycle.

### Climate resilience requires long-term stewardship
A 99-year ground lease forces the question: what will this land look like in 2125? The CLT model rewards soil health, biodiversity, and carbon sequestration because the community holding the land has no incentive to extract maximum short-term value and sell. The cooperative operating the land has secure tenure, which means it can invest in perennial crops, water systems, and building efficiency without fear of a landlord selling out from under it.

### Housing and food security are land questions
You cannot solve housing affordability by treating symptoms. If the land underneath affordable housing is owned speculatively, the affordability expires when the subsidy does. CLTs preserve affordability in perpetuity. The same logic applies to farms: when farmland is converted to estate housing or industrial agriculture, the local food infrastructure is destroyed. The CLT keeps both housing and food production possible.

### Local ownership distributes wealth
In a conventional sale, a farm's economic value is extracted by the seller and any outside investors. Under a CLT + cooperative model, surplus from operations circulates to worker-owners and the local community through patronage, wages, and reinvestment. The wealth stays in the county rather than flowing to distant shareholders.

### Democratic practice at a small scale
At a time when many people feel powerless over the institutions that shape their lives, cooperatives and CLTs offer direct, accountable governance. One member, one vote is not abstract — it is practiced in board meetings, annual assemblies, and budget votes. This builds the civic muscle that larger democratic systems depend on.

### Reckoning with land theft
The community land trust movement has deep roots in the civil rights struggle. New Communities Inc. (Georgia, 1969) was the first CLT in the United States, founded by Black farmers as a response to systemic land dispossession. The CLT model can be — and in many places is being — used to return land to indigenous and Black communities, not as charity but as structural repair. In Maine, where Wabanaki peoples stewarded these lands for millennia before European colonization, this principle must be operational: any CLT claiming to steward land should consider how its structure can support, rather than appropriate, indigenous land relationships.

### When systems fail, communities that own their land endure
The COVID-19 pandemic, supply chain disruptions, and extreme weather events have shown that centralized systems are brittle. Communities with local food production, mutual aid networks, and control over their physical spaces fared better. A farm held in community trust can pivot to emergency food distribution, host displaced neighbors, or adapt its business model because the decision-makers live nearby and the land cannot be sold out from under them.

A CLT does not solve the multicrisis. But it removes one piece of land from its logic, one farm at a time. That is a real and cumulative good.

## Core principles

### 1. Land is a commons, not a commodity
The CLT holds land in trust for the community. The ground lease caps resale value, restricts speculative transfer, and ensures the land serves agricultural and community purposes in perpetuity.

### 2. Operators have secure tenure + democratic voice
The cooperative is not a tenant-at-will. It holds a long-term ground lease (typically 99 years, renewable) and governs operations democratically — one member, one vote, or another agreed democratic formula.

### 3. Stewardship over extraction
Financial returns are limited. Member shares are limited-equity. Surplus, when it exists, is distributed as patronage or reinvested. The goal is durable stewardship, not wealth accumulation.

### 4. Community benefit is the bottom line
The farm serves the community through food access, jobs, cultural programming, ecological practices, and gathering space. These benefits are documented and protected in the CLT's ground lease and the cooperative's articles.

### 5. Consent and co-creation with indigenous communities
Where the farm's stewardship practices draw on or affect Wabanaki lands, waters, or knowledge, engagement must be co-created with consent — not extracted, appropriated, or performative. This principle is operational, not decorative.

### 6. Transparency builds trust
Decisions, finances, and risks are communicated plainly. The FAQ is honest about what is unknown. The capital stack uses conservative assumptions. The timeline acknowledges uncertainty.

### 7. Start small, learn, adapt
This is not a blueprint to execute perfectly. It is a scaffold to climb. Each phase produces a clear go/no-go decision point. Walking away cleanly is better than closing on bad terms.

## The capital stack at a glance

| Source | Typical % | Character |
|---|---|---|
| Seller financing | 20–40% | Patient, builds lender confidence, demonstrates owner commitment |
| CDFI loan(s) | 30–50% | Senior or subordinate debt; sized to cash flow |
| Member / community capital | 5–15% | Limited-equity shares, community notes, donations |
| Grants / PRIs | 5–15% | Pre-development, technical assistance, mission-aligned investment |

Specific Maine and Northeast CDFIs:
- **CFNE** (Cooperative Fund of New England) — cooperative lending specialist
- **CEI** (Coastal Enterprises, Inc.) — farm, food, and rural focus
- **Genesis Community Loan Fund** — northern New England, mission-aligned

## When this model fits

- The owner is open to non-market sale terms and understands the stewardship mission
- There is existing community goodwill and operator capacity
- The farm has multiple revenue streams (farm products, cafe, events, housing, wellness)
- The purchase price is financeable under conservative cash-flow assumptions
- A core group is willing to form a steering committee and do the work

## When this model does NOT fit

- The owner needs a fast, all-cash, market-rate sale
- There is no operator group ready to step in
- The business is deeply unprofitable with no path to break-even
- There is significant environmental contamination or unresolvable legal title issues
- The community is divided or there is active opposition to the project

## The phases at a glance

| Phase | Timeline | Core question |
|---|---|---|
| 1. Exploration & Feasibility | 4–8 weeks | Should we do this? |
| 2. Structure & Formation | 8–12+ weeks | How will we be organized? |
| 3. Financing & Due Diligence | 12–20+ weeks | Can we afford this? |
| 4. Closing & Transition | 4–8 weeks | Are we ready to close? |
| 5. Stabilization & Growth | Ongoing | Are we thriving? |

Each phase is detailed in [03 - Transition Playbook](03-transition-playbook.md).

## A note on "the farm"

This playbook intentionally uses "the farm" as a generic placeholder. Any farm applying this model will need to fill in:
- Working name of the farm and the new entities
- Specific acreage, structures, and amenities
- Actual purchase price and financing terms
- Revenue streams and cost structures
- Community demographics and relationships

The principles remain the same. The details must be rooted in the specific farm's reality.
`},{id:"02-funder-brief",label:"02 Funder Brief",content:`# 02 — Funder Brief

This is a one-page overview for community development financial institutions (CDFIs), foundations, program-related investment (PRI) officers, and mission-aligned lenders. Adapt the bracketed sections to the specific farm.

---

## Community Land Trust + Cooperative Acquisition of a Maine Farm

### Overview

[The farm] is a [medicinal herb / diversified vegetable / livestock / pick-your-own] farm with onsite [cafe / apothecary / farm store], cultural programming space, [list amenities: e.g., yurt, performance area, fire pit, cob oven, community sauna], parking, and [housing description: e.g., a two-family residence] in [County], Maine.

The current owner is willing to sell; the discussed price is approximately $[XXX,000].

The surrounding community has strong goodwill; [key operator / apothecary owner / long-time farm manager] is convening a transition process to preserve the farm's mission, affordability, and community access.

### Proposed Structure

- **Land**: Held permanently by a community land trust (CLT) or land-back-aligned nonprofit to remove land from speculation and preserve affordability and stewardship.
- **Operations**: A multi-stakeholder cooperative operates the farm, [cafe / apothecary], events, and related improvements under a long-term ground lease.
- **Housing**: Documented occupancy via CLT home lease or a small housing co-op.
- **Auxiliary structures**: Ownership and operating rights for [sauna / shared amenities / outbuildings] to be resolved via purchase, license/lease, or separate cooperative before closing.

### Capital Stack (Target)

| Source | Share | Notes |
|---|---|---|
| Seller financing | 20–40% | Amortized over 5–10+ years; improves lender appetite and affordability |
| CDFI loan(s) | 30–50% | Senior or subordinate debt sized to cash flow |
| Member / community capital | 5–15% | Limited-equity member shares; community notes or donations where lawful |
| Grants / PRIs | 5–15% | Pre-development, technical assistance, mission-aligned investment |

Likely CDFI partners: CFNE, CEI, Genesis Community Loan Fund.

### Use of Funds

1. Acquisition of land and improvements: $[XXX,000]
2. Closing, legal, title, appraisal, survey, and environmental costs: $[XX,000]
3. Immediate repairs, deferred maintenance, and working capital / operating reserves: $[XX,000]
4. Entity formation, governance setup, and initial compliance: $[X,000]

### Community Benefits

- **Permanent affordability and non-speculative land stewardship** via CLT
- **Local jobs, fair labor practices, and worker voice** through cooperative governance
- **Continued community access** to farm products, [cafe / apothecary], cultural events, and wellness offerings
- **Ecological stewardship** through [permaculture / regenerative / organic] practices maintained under community governance
- **Potential for Wabanaki-informed stewardship and relationship-building**, only if co-created with consent

### Funding Needs & Fit

- **Technical assistance and pre-development grants** to support feasibility, legal, and governance work
- **Patient capital (PRIs / low-interest loans)** for the CLT landholder and/or cooperative operator
- **Gap financing** tied to job creation or community benefit, where available
- **Funders seeking durable community ownership, food systems, cultural resilience, and climate-aligned land use**

### Next Steps

1. Complete feasibility memo and capital-stack worksheet with conservative cash-flow assumptions
2. Engage CDI, CFNE, CMBA, Land in Common, and Maine Farmland Trust for technical assistance and referrals
3. Resolve [auxiliary structure] ownership / operating rights in writing before closing
4. Obtain lender / partner commitments and negotiate purchase-and-sale terms, including seller financing where available

### Contact

[Name] | [Title/Role]
[Phone] | [Email]
[Farm website or project page]

---

## Tips for using this brief

- **Lead with relationship, not transaction.** Call the funder first. Send this after you have spoken.
- **Customize the community benefits section** for each funder's priorities (jobs, food access, climate, arts).
- **Bring a steering committee member** to any funder meeting — not just the finance lead.
- **Be honest about risks.** A funder who trusts your honesty is more valuable than one who trusts your optimism.
`},{id:"03-transition-playbook",label:"03 Transition Playbook",content:`# 03 — Transition Playbook

The step-by-step roadmap for moving a Maine farm from private ownership to community land trust + cooperative stewardship.

---

## Phase 1 — Exploration & Feasibility
**Duration: 4–8 weeks**  
**Core question: Should we do this?**

### Week 1–2: Convene & listen

- [ ] Identify 3–5 people willing to form a steering committee. Aim for diversity of skills: operations, finance, communications, community relationships, legal/governance.
- [ ] Schedule an initial conversation with the owner. Confirm their openness to a non-market sale, their timeline, and their price expectations.
- [ ] Hold the first community listening session. Purpose: understand what the community values, fears, and hopes for. This is not a decision-making meeting. It is an information-gathering meeting.
- [ ] Document the listening session: who attended, what was said, what themes emerged, what questions came up. Share the summary publicly within 48 hours.
- [ ] Draft a simple project name and a one-sentence mission statement. This will evolve, but you need something to call yourselves.

### Week 2–4: Preliminary financial & legal review

- [ ] Gather financial documents from the owner (if they are willing): tax returns, profit & loss statements, rent rolls, utility costs, equipment lists, outstanding liens or judgments.
- [ ] Research comparable sales in the area for the land and the improvements. This is not an appraisal — it is a reality check.
- [ ] Do a walk-through with a contractor or builder to identify immediate repair needs and deferred maintenance. Get a rough estimate. Add 30% for surprises.
- [ ] Contact the town office to check: zoning, current use status, any code violations, septic system records, well records, permitted uses for farm retail / cafe / events / housing.
- [ ] Contact the [Maine Farmland Trust](https://mainefarmlandtrust.org) to inquire about farmland protection tools, easement options, and their network of advisors.
- [ ] If the farm uses any shared structures (sauna, outbuildings, equipment) whose ownership is unclear, document the current arrangement and begin conversations with anyone who has a stake.

### Week 4–6: Feasibility memo

- [ ] Complete a light feasibility memo covering:
  - Description of the property and its current uses
  - Revenue streams and their seasonal or cyclical nature
  - Operating costs (real, estimated, and unknown)
  - Purchase price and closing costs
  - Repair and deferred maintenance estimate
  - Preliminary capital stack (best guess)
  - Cash-flow projection for Year 1 (conservative — assume things go wrong)
  - Major risks and unknowns
  - Go / no-go recommendation
- [ ] The memo does not need to be perfect. It needs to be honest.
- [ ] Share the memo with the steering committee. Debate it. If the committee cannot agree on a go / no-go, the answer is no-go until clarity emerges.

### Week 6–8: Decision & next steps

- [ ] If the decision is **go**: Draft a non-binding letter of intent with the owner. Include a 60–90 day exploration window, a target price range, and a commitment to bring back a clear recommendation with proposed terms.
- [ ] If the decision is **no-go**: Communicate this clearly to the owner and the community. Thank them. Document why. The group may reassemble for a different property or dissolve. Either outcome is a success if it was honest.
- [ ] If the decision is **go with conditions**: List the conditions explicitly (e.g., "go if seller financing is at least 30%," "go if the sauna ownership is resolved in writing").
- [ ] Begin conversations with [CDI](https://cdi.coop) for cooperative formation technical assistance and [Land in Common](https://landincommon.org) for CLT structure guidance.

---

## Phase 2 — Structure & Formation
**Duration: 8–12+ weeks**  
**Core question: How will we be organized?**

### Entity formation

This phase usually requires a lawyer experienced in cooperatives and/or community land trusts in Maine. Budget $3,000–$8,000 for legal formation. Some organizations (CDI, MFT) can recommend attorneys or provide templates.

#### The Community Land Trust (CLT) or nonprofit landholder

- [ ] Choose entity type: Maine nonprofit corporation (501(c)(3) or 501(c)(2) title-holding corporation) or a community land trust.
- [ ] Define the CLT's mission, geographic focus, and community base.
- [ ] Recruit an initial board of 5–9 people. Aim for community representation, financial expertise, and at least one person with real estate or land-use experience.
- [ ] Draft bylaws including: board composition and election, ground lease terms, resale formula, stewardship responsibilities, conflict of interest policy.
- [ ] File articles of incorporation with the Maine Secretary of State.
- [ ] Apply for federal tax exemption (Form 1023 or 1023-EZ) if seeking 501(c)(3) status. This can take 3–6 months. Start early.

Note: A 501(c)(2) title-holding corporation is simpler and faster to form if the primary purpose is holding land for an existing 501(c)(3). A CLT has additional requirements under the National CLT Network standards.

#### The Cooperative

- [ ] Choose cooperative type: Maine cooperative corporation or LLC with cooperative governance provisions.
- [ ] Identify initial member classes: worker members, consumer members, producer members, community supporter members. Not all need to exist on Day 1.
- [ ] Draft articles of incorporation and bylaws covering: membership requirements, voting rights, board election, patronage distribution, dispute resolution, dissolution.
- [ ] Set initial membership share price. Use a sliding scale if possible. Typical range: $100–$1,000 per share. Document payment plans.
- [ ] File articles with the Maine Secretary of State.
- [ ] Apply for federal tax exemption or tax treatment as a cooperative under Subchapter T (if applicable).

#### The relationship between entities

- [ ] Draft the ground lease: 99 years, renewable. Define: rent (often 1–3% of land value annually or a nominal fee), permitted uses, maintenance responsibilities, resale restrictions, default and cure, dispute resolution, and conditions for lease termination.
- [ ] The ground lease should be reviewed by an attorney familiar with CLT ground leases.
- [ ] The cooperative should have a right of first refusal if the CLT ever considers selling (which CLTs almost never do, but the provision protects against edge cases).

### Governance setup

- [ ] Adopt steering committee charter (see [05 - Governance Templates](05-governance-templates.md)).
- [ ] Hold first CLT board meeting: adopt bylaws, elect officers, approve ground lease in principle, authorize legal engagement.
- [ ] Hold first cooperative member meeting: adopt bylaws, elect initial board, set membership share price and payment terms, approve engagement with the project.
- [ ] Open membership process publicly. Set clear criteria, timeline, and orientation sessions.
- [ ] Create decision-making protocols: what decisions require member vote, what decisions can the board make, what decisions require supermajority.
- [ ] Establish a conflict of interest disclosure process. Every board member and steering committee member should disclose financial and relational ties to the project.

### Communications

- [ ] Launch a simple website or newsletter. Include: what is happening, what the model is, how to get involved, meeting dates, contact information.
- [ ] Publish meeting minutes or summaries within 48 hours of every steering committee or board meeting.
- [ ] Respond to community questions promptly. Silence breeds rumor.

---

## Phase 3 — Financing & Due Diligence
**Duration: 12–20+ weeks**  
**Core question: Can we afford this?**

### Capital stack assembly

- [ ] Finalize capital stack worksheet (see [06 - Capital Stack Guide](06-capital-stack-guide.md) and templates).
- [ ] **Seller financing**: Negotiate terms with the owner. Typical: 20–40% of purchase price, 3–6% interest, amortized over 5–10 years, with balloon or refinance option. Document in a promissory note.
- [ ] **CDFI engagement**: Apply to CFNE, CEI, Genesis, and any other relevant CDFI. Each will require: financial projections, business plan, entity documents, board bios, and personal financial statements from guarantors (if required).
- [ ] **Member capital campaign**: Set target. Host information sessions. Provide clear documents on what membership means, what the risks are, and what the limits on returns are. Do not oversell.
- [ ] **Grants / PRIs**: Research foundations active in food systems, land access, rural development, and cooperative development in Maine. Applications often take 6–12 weeks. Start early.

### Due diligence

- [ ] **Appraisal**: Order a full appraisal from a state-certified appraiser. The lender will require this. If the appraisal comes in below the purchase price, renegotiate or walk away.
- [ ] **Title search**: Hire a title company or attorney to search the chain of title. Look for: liens, easements, boundary disputes, unresolved probate issues, mineral rights reservations.
- [ ] **Survey**: Order a boundary survey if one does not exist or is outdated. This is critical if any structures are near property lines.
- [ ] **Environmental**: If the property has former uses that could have contaminated soil (e.g., auto repair, dry cleaning, orchards with legacy pesticide use), order a Phase I Environmental Site Assessment. Budget $2,000–$4,000.
- [ ] **Septic & well**: Have the septic system inspected and the well water tested for potability and contaminants. In Maine, this is often required by lenders and may be required for any food-service operation.
- [ ] **Building inspections**: Structural, electrical, plumbing, and roof inspections for all buildings. Document code compliance for the cafe, housing, and any public structures.
- [ ] **Insurance quotes**: Obtain quotes for property, liability, workers compensation, and directors & officers insurance. Some lenders require proof of insurance before closing.

### Finalizing the deal

- [ ] Draft purchase and sale agreement. Include: purchase price, deposit amount, financing contingencies, inspection contingencies, closing date, and what happens if financing falls through.
- [ ] Resolve any outstanding issues with auxiliary structures (sauna, outbuildings, shared equipment) in writing before closing (see [10 - Auxiliary Structures](10-auxiliary-structures.md)).
- [ ] If there are tenants or licensees on the property, determine: will their agreements transfer? Will they be terminated? Are there statutory protections (e.g., Maine's tenancy laws, mobile home park protections)?
- [ ] Obtain lender commitment letters. Review covenants, conditions, and reporting requirements carefully.
- [ ] Finalize the closing statement (HUD-1 or equivalent). Allocate closing costs between buyer and seller.

---

## Phase 4 — Closing & Transition
**Duration: 4–8 weeks**  
**Core question: Are we ready to close?**

### Pre-closing checklist

- [ ] Final walk-through 24–48 hours before closing
- [ ] Confirm all inspection contingencies have been satisfied or waived
- [ ] Confirm financing is in place and funds are ready to wire
- [ ] Confirm title insurance is ordered
- [ ] Review and sign all loan documents
- [ ] Review and sign the deed, ground lease, and any other transfer documents
- [ ] Confirm the seller has provided all required disclosures
- [ ] Confirm the septic system and well tests are satisfactory
- [ ] Transfer or set up utilities
- [ ] Obtain certificates of insurance

### Closing day

- [ ] Sign documents at the closing attorney's office or via remote closing
- [ ] Wire or deliver funds
- [ ] Record the deed with the county registry of deeds
- [ ] Record the ground lease (or a memorandum of lease) with the registry of deeds
- [ ] Receive keys and access to all buildings, equipment, and records

### Immediate post-closing (Week 1–2)

- [ ] Change locks and access codes
- [ ] Notify the town of the ownership change
- [ ] Notify the post office, utilities, vendors, and insurance carriers
- [ ] Take possession of financial records, equipment lists, and any operational handbooks
- [ ] Meet with all employees, tenants, and regular vendors to introduce the new ownership structure and answer questions
- [ ] Hold a public community meeting to announce the closing, introduce the cooperative board, and outline immediate priorities

### Transition operations (Month 1–3)

- [ ] Ensure continuity of farm operations, cafe service, and event programming
- [ ] Assess what is working and what needs immediate attention
- [ ] Address any deferred maintenance that was identified in inspections
- [ ] Begin recruiting and orienting new cooperative members
- [ ] Establish regular board and member meeting schedules
- [ ] Implement basic bookkeeping and financial reporting systems
- [ ] Open a business bank account for the cooperative (separate from the CLT)

---

## Phase 5 — Stabilization & Growth
**Duration: Ongoing**  
**Core question: Are we thriving?**

### Year 1 priorities

- [ ] Stabilize core revenue streams before expanding
- [ ] Build membership to a sustainable base
- [ ] Establish transparent financial reporting: monthly reports to members, annual report to community
- [ ] Develop or maintain relationships with local farms, food hubs, restaurants, and retailers
- [ ] Ensure compliance with all permits, licenses, and labor laws
- [ ] Hold an annual member meeting: elect board, review finances, set priorities
- [ ] Conduct a 12-month operational review: what worked, what didn't, what to change

### Ongoing governance

- [ ] Board meets monthly or bimonthly
- [ ] Member meetings quarterly
- [ ] Annual financial audit or review by an independent accountant
- [ ] Annual strategic planning session
- [ ] Conflict resolution processes are accessible and used before conflicts escalate

### Community accountability

- [ ] Publish an annual community report: stewardship activities, ecological practices, jobs created, events held, food distributed
- [ ] Maintain the listening practice: hold at least one community listening session per year
- [ ] Review the ground lease terms periodically with the CLT board and the cooperative board
- [ ] If Wabanaki stewardship relationships were established, maintain them with ongoing consent and reciprocity

---

## Decision gates

At the end of each phase, the steering committee or board should take a formal vote:

- **Proceed to next phase**
- **Pause and address conditions**
- **No-go — wind down gracefully**

A no-go is not a failure. It is a success if it prevents the group from taking on unmanageable debt, governance chaos, or a broken community relationship. The playbook can be used again for another property.
`},{id:"04-member-faq",label:"04 Member Faq",content:`# 04 — Member FAQ

Plain-language answers for community members, potential cooperative members, and neighbors.

---

## What is happening?

The current owner wants to sell the farm, [cafe / apothecary], and related community assets. A group of operators and community members is exploring a community-ownership model so the place can remain affordable, mission-aligned, and locally stewarded.

## What is the proposed ownership model?

- **Land** would be held permanently by a community land trust (CLT) or similar nonprofit, removing it from speculation.
- **A cooperative** would operate the farm, [cafe / apothecary], events, and related improvements under a long-term ground lease.
- **Housing** would have documented occupancy via a CLT lease or a small housing co-op.
- **[Auxiliary structures]** ownership and operating rights will be resolved in writing before any purchase.

## Why a land trust and cooperative?

- This structure keeps land permanently affordable and community-governed while giving operators secure tenure and clear responsibilities.
- It aligns with Maine's cooperative tradition and the community's values around stewardship, fair work, and long-term resilience.
- CDFIs and mission-aligned funders are familiar with this model in Maine and the Northeast.

## How can I participate?

- Attend open information sessions and listening gatherings.
- Join a working group (farm, [cafe], events, governance, fundraising, communications) if you have time and skills.
- Express non-binding interest in membership when the cooperative opens its membership process.
- Support through donations or spreading the word, where appropriate.

## What does membership mean?

- Members have a voice in major cooperative decisions (e.g., electing the board, approving major changes).
- Members typically contribute a share (often with sliding-scale or payment-plan options).
- Membership is not a guarantee of profit, property ownership, or specific access rights. Details will be in the bylaws and membership agreement.

## Is this an investment? Will I get financial returns?

Not in the conventional sense. Member shares are typically limited-equity and focused on stewardship, not profit. Any patronage or surplus distribution would follow cooperative rules and legal constraints. Do not expect market-rate financial returns. This is primarily a community-stewardship model.

## What are the main risks?

- **Financing risk**: The deal must be affordable under conservative cash-flow assumptions. If the group cannot secure enough financing, the deal will not close.
- **Operational risk**: Seasonality, staffing, and maintenance needs can strain cash flow.
- **Legal / permit risk**: Zoning, food service, events, [sauna], septic, well, and housing compliance must all be resolved.
- **Governance risk**: Volunteer capacity and decision-making overload can burn people out if the structure is not clear.

## What is the timeline?

| Phase | Duration |
|---|---|
| Exploration and feasibility | 4–8 weeks |
| Structure, financing, and legal formation | 8–12+ weeks |
| Closing and transition | Depends on due diligence, lender processes, and seller cooperation |

## How will decisions be made?

- A small steering committee is guiding the exploration phase.
- If the cooperative forms, members will have democratic input (e.g., one member, one vote or another agreed democratic formula).
- The CLT would have its own board and governance process focused on land stewardship and affordability.

## What about [the sauna / auxiliary structures]?

Ownership, utilities, insurance, access, and removal rights must be documented before closing. Options include cooperative purchase, a license/lease with the current owner, or a separate cooperative with a site lease. See [10 - Auxiliary Structures](10-auxiliary-structures.md).

## Will the farm, [cafe], and events continue?

The goal is continuity and strengthening of core offerings: farm products, [cafe / apothecary], [yoga / cultural events], and community gatherings. Specific programming will depend on member priorities, staffing, and finances.

## How can I stay informed?

- Sign up for updates via the contact form or email list when available.
- Attend scheduled community sessions and check posted minutes/summaries.
- Contact the steering committee with questions. Avoid sharing unconfirmed details as fact.

## What if this doesn't work out?

That is a real possibility, and it would not be a failure. If the group determines that the deal is not financially viable, the governance is not ready, or the community is not aligned, the right choice is to walk away cleanly. We will communicate honestly at every step.

## I have more questions. Who do I contact?

[Name] | [Email] | [Phone]  
[Project website or mailing list signup]
`},{id:"05-governance-templates",label:"05 Governance Templates",content:`# 05 — Governance Templates

Ready-to-adapt templates for steering committees, cooperative bylaws, and decision-making protocols.

---

## Steering Committee Charter

### Purpose
The steering committee guides the exploration and formation of a community land trust + cooperative ownership transition for [the farm]. The committee makes recommendations, not binding decisions, until formal entities are created.

### Membership
- 3–7 members
- At least one person with financial literacy
- At least one person with community relationships / communication skills
- At least one person with operations or farm business experience
- Strive for diversity: age, background, gender, role in the community

### Term
Steering committee members serve until the cooperative and CLT are formally established and boards are elected. Expected duration: 6–12 months.

### Decision-making
- Consensus is the goal. If consensus cannot be reached, the committee votes.
- Each member has one vote.
- Decisions are documented in writing and shared with the broader community within 48 hours.

### Responsibilities
- Convene community listening sessions
- Manage communications and answer public questions
- Coordinate feasibility analysis
- Engage legal, accounting, and funder relationships
- Make a formal go/no-go recommendation at the end of Phase 1

### Limitations
- The steering committee cannot commit the group to a purchase.
- The steering committee cannot borrow money or sign contracts on behalf of future entities.
- The steering committee cannot make promises about jobs, housing, or financial returns to individuals.

### Meeting rhythm
- Weekly during Phase 1 (Exploration)
- Biweekly during Phase 2 (Formation)
- As needed during Phase 3 (Financing)

### Communication
- Meeting summaries are posted publicly within 48 hours
- All members respond to community inquiries within 48 hours
- Disagreements within the committee are not aired publicly

---

## Cooperative Bylaws Framework

This is a framework, not a final document. Engage a cooperative attorney to draft final bylaws.

### Name and purpose
- Name: [The Farm] Cooperative
- Purpose: To operate [the farm] and its related businesses democratically, sustainably, and for the benefit of its members and the broader community.

### Membership
- **Open membership**: Any person who supports the cooperative's purpose and pays the membership share may apply.
- **Membership share**: $[amount], with sliding scale / payment plan available.
- **Member classes** (optional, adapt as needed):
  - Worker members: work in the cooperative's operations
  - Consumer members: purchase goods or services from the cooperative
  - Community supporter members: join to support the mission without operational involvement
- **Voting**: One member, one vote. No person may hold more than one membership share.

### Board of directors
- 5–9 directors elected by members at the annual meeting
- Staggered terms (e.g., 2-year terms, half elected each year)
- At least one director must be a worker member if worker members exist
- No more than 40% of the board may be paid employees of the cooperative
- Officers: President, Secretary, Treasurer (minimum)

### Meetings
- Annual member meeting: held within 90 days of the fiscal year end
- Special meetings: may be called by the board or by petition of [10]% of members
- Quorum: [25]% of members (adjust based on expected membership size)

### Patronage and surplus
- Net surplus, if any, is allocated to members based on patronage.
- A portion (e.g., 20–50%) may be retained as unallocated reserves.
- Surplus is distributed only after all operating expenses, debt service, and reserves are met.
- No member may receive more than 8% return on their share capital (compliance with federal cooperative tax rules).

### Dissolution
- If the cooperative dissolves, assets are distributed to another cooperative or nonprofit with a similar mission. No member receives a share of assets beyond the return of their membership share at par value.

---

## CLT Board Structure

### Composition
- 5–9 trustees
- One-third elected by cooperative members
- One-third elected by the surrounding community
- One-third appointed by the founding board or mission-aligned organizations
- Maximum two consecutive terms

### Responsibilities
- Steward the land in perpetuity
- Enforce the ground lease terms
- Ensure affordability protections are maintained
- Approve any amendments to the ground lease
- Hold the cooperative accountable to community benefit commitments

### Ground lease oversight
- Review the cooperative's compliance with lease terms annually
- Conduct a site visit annually
- Maintain a reserve fund for land stewardship and re-leasing if needed

---

## Decision-Making Protocol

### What requires a full member vote
- Election and removal of board members
- Amendments to bylaws
- Major asset purchases or sales (over $[threshold])
- Changes to the cooperative's core purpose or membership classes
- Mergers or dissolution
- Ground lease amendments (requires CLT board approval as well)

### What the board decides
- Annual budget and strategic plan
- Hiring and firing of management
- Contracts and leases under $[threshold]
- Day-to-day operational policies

### What management decides
- Daily scheduling and staffing
- Vendor relationships under $[threshold]
- Customer service and programming decisions

### Conflict resolution
- Step 1: Direct conversation between the parties
- Step 2: Mediation by a neutral third party agreed upon by both parties
- Step 3: Binding arbitration if mediation fails (optional — some cooperatives prefer non-binding processes)

### Transparency
- Board meeting minutes are shared with members within 7 days
- Financial reports are shared quarterly
- Strategic decisions include a written rationale
- Members may request information from the board in writing; the board responds within 14 days
`},{id:"06-capital-stack-guide",label:"06 Capital Stack Guide",content:`# 06 — Capital Stack Guide

How to finance a Maine farm transition through a Community Land Trust + Cooperative structure.

---

## The capital stack concept

The capital stack is the layering of different funding sources — each with its own risk, return, and legal characteristics — to assemble enough money to purchase the farm. A well-structured stack shares risk appropriately and ensures that each funder or investor is comfortable with their position.

### Visual model

\`\`\`
Grants / PRIs          ← Most patient, lowest return, highest mission-alignment
Member capital         ← Patient, limited return, strong community signal
Seller financing       ← Moderately patient, builds lender confidence
CDFI loan(s)           ← Least patient (but still patient capital), senior position
\`\`\`

Seniority matters: if the deal fails, senior lenders (CDFIs with collateral) are paid first. Subordinate or patient capital (seller, members, grants) absorbs loss first. This is why CDFIs often require seller financing or member capital — it proves that others have skin in the game.

---

## Financing sources

### Seller financing

The current owner acts as a lender, holding a mortgage or promissory note for part of the purchase price.

- **Typical share**: 20–40% of purchase price
- **Terms**: 3–6% interest, amortized over 5–10+ years, sometimes with a balloon payment requiring refinancing
- **Why it matters**: Demonstrates the owner's confidence in the project's viability. Reduces the cash needed at closing. Improves the debt-service-coverage ratio that CDFIs care about.
- **Negotiation tips**:
  - Frame it as legacy preservation, not charity.
  - Offer a competitive interest rate — not zero, not market-rate for a risky project, but fair.
  - Document everything in a promissory note prepared by an attorney.
  - Offer the seller a seat on the CLT board or an advisory role if they want continued involvement.

### CDFI loans

Community Development Financial Institutions are mission-driven lenders that fill gaps left by conventional banks.

**Cooperative Fund of New England (CFNE)**
- Based in Boston, active throughout New England
- Specializes in cooperative lending
- Loan size: typically $50,000–$500,000
- Requirements: cooperative with democratic governance, viable business plan, collateral or guarantees
- Timeline: 2–4 months from application to closing

**Coastal Enterprises, Inc. (CEI)**
- Based in Wiscasset, Maine
- Strong focus on farms, food systems, fisheries, and rural enterprises
- Offers both loans and technical assistance
- Loan size: wide range, from small working capital to real estate
- Often participates alongside other lenders

**Genesis Community Loan Fund**
- Serves northern New England
- Mission-aligned, patient capital
- Often works with first-time borrowers and nontraditional structures

**What CDFIs typically require**
- Audited or reviewed financial statements (or, for new entities, pro forma projections)
- Business plan with 3-year projections
- Personal financial statements and tax returns of guarantors (if personal guarantees are required)
- Entity documents (articles, bylaws, board resolutions)
- Appraisal and title insurance
- Proof of other capital commitments (seller financing, member shares, grants)
- Debt-service coverage ratio typically ≥ 1.15x

### Member / community capital

Capital raised directly from the people who will be members, neighbors, or supporters of the farm.

- **Typical share**: $100–$1,000 per share
- **Legal structure**: Membership shares in the cooperative (Maine cooperative corporation law) or community investment notes (if properly structured under securities law)
- **Why it matters**: Demonstrates community commitment. Provides non-extractive capital. Builds the membership base.
- **Securities law note**: In Maine, offerings to members of a cooperative or to a small number of non-accredited investors may be exempt from federal or state securities registration under the intrastate or cooperative exemptions. Consult a securities attorney before raising capital from non-members.
- **Tips**:
  - Use a sliding scale and payment plans.
  - Do not promise returns. Be explicit about the risks.
  - Document everything in a membership agreement.
  - Hold information sessions where people can ask hard questions.

### Grants and Program-Related Investments (PRIs)

- **Pre-development / technical assistance grants**: For feasibility studies, legal formation, architectural plans, environmental assessments
  - Sources: Maine Farmland Trust, NoVo Foundation, USDA NRCS, municipal economic development funds
- **Program-Related Investments (PRIs)**: Foundations make loans or equity investments that further their charitable mission, often at below-market rates
  - Sources: Local community foundations, state housing/farm funds, national foundations active in food and land
- **Gap financing**: Some funders offer subordinate loans or loan guarantees to fill the gap between what CDFIs will lend and what the project needs

---

## Capital stack worksheet

Use this to model your deal. Adapt the line items for your farm.

| Source | Amount | % of total | Terms / notes | Secured by | Status |
|---|---|---|---|---|---|
| Purchase price | | 100% | | | Confirmed / estimated |
| **Seller financing** | | | Interest rate: ___%; Term: ___ years | Mortgage on property | |
| **CDFI loan 1 (senior)** | | | Lender: ___; Rate: ___%; Term: ___ years | Mortgage + UCC on equipment | |
| **CDFI loan 2 (subordinate)** | | | Lender: ___; Rate: ___%; Term: ___ years | Subordinate mortgage | |
| **Member shares** | | | Share price: $___; Target members: ___ | None | |
| **Community notes / donations** | | | | None | |
| **Grants** | | | Funder: ___; Purpose: ___ | None | |
| **PRIs** | | | Funder: ___; Rate: ___% | None or subordinate | |
| **Other** | | | | | |
| **Total capital** | | | | | |
| **Gap or surplus** | | | | | |

**Non-purchase costs to include**
- Closing costs: 2–5% of purchase price
- Immediate repairs / deferred maintenance: obtain contractor estimate
- Working capital reserve: 3–6 months of operating expenses
- Legal and formation costs: $5,000–$15,000
- Appraisal, survey, title, environmental: $5,000–$10,000
- Insurance (first year): obtain quote

---

## Cash-flow stress test

Before finalizing the capital stack, model these scenarios:

- **Base case**: Revenue and expenses as projected
- **Stress case**: Revenue down 20%, expenses up 15% (delayed repairs, bad weather, supply chain issues)
- **Disaster case**: Revenue down 40%, major equipment failure, loss of key revenue stream

If the cooperative cannot make debt payments in the stress case, the stack is too aggressive. Renegotiate with the seller, seek more grants, reduce the purchase price, or walk away.

---

## Lender conversations: what to bring

When meeting with a CDFI or other lender, bring:

1. One-page farm description and mission statement
2. Historical financials (if available) or 3-year pro forma projections
3. Capital stack worksheet (even if preliminary)
4. Entity documents (or a letter from your attorney confirming formation timeline)
5. Appraisal (if available) or comparable sales analysis
6. Resumes or bios of key people (steering committee, proposed board)
7. Letter of intent from the seller (if you have one)
8. List of what you still need to figure out (honesty builds trust)

---

## Red flags for financiers

Avoid these patterns — they signal a project that has not done its homework:

- **No seller financing or member capital**: If the owner and the community will not invest, why should a lender?
- **Overly optimistic projections**: Revenue growing 50% year-over-year with no explanation.
- **Vague governance**: "We'll figure out the bylaws later."
- **Hidden conflicts**: Steering committee member stands to personally benefit from the sale.
- **No plan for auxiliary structures**: "The sauna — we'll deal with that after closing."
`},{id:"07-legal-checklist-maine",label:"07 Legal Checklist Maine",content:`# 07 — Legal Checklist (Maine)

A checklist of legal and regulatory issues specific to Maine farm transitions. This is not a substitute for an attorney. It is a tool to help you ask the right questions.

---

## Entity formation

- [ ] File Articles of Incorporation with the Maine Secretary of State (nonprofit or cooperative corporation)
- [ ] Obtain federal Employer Identification Number (EIN) from the IRS
- [ ] Apply for 501(c)(3) tax exemption (if forming a CLT nonprofit) — allow 3–6 months
- [ ] Register with the Maine Attorney General's office (charitable solicitation registration, if applicable)
- [ ] File annual reports with the Secretary of State (required for all corporations)
- [ ] Adopt bylaws and hold organizational meetings
- [ ] Open bank accounts for each entity (CLT and cooperative should have separate accounts)

## Real estate

- [ ] Purchase and Sale Agreement: include financing contingencies, inspection contingencies, and deadlines
- [ ] Title search: confirm clean title, identify easements, liens, covenants, and encumbrances
- [ ] Title insurance: obtain an owner's policy and a lender's policy
- [ ] Boundary survey: confirm acreage and identify encroachments
- [ ] Deed: specify warranty deed or quitclaim deed (warranty preferred)
- [ ] Ground lease: 99-year term, renewable; define rent, permitted uses, maintenance, default, and cure
- [ ] Record deed and ground lease (or memorandum of lease) with the County Registry of Deeds
- [ ] Current Use / Tree Growth / Farmland classification: if the property is enrolled in Maine's Current Use tax program, understand the obligations and potential rollback taxes if use changes
- [ ] Conservation easement: if one exists, review its terms; if one is being created, ensure it aligns with the CLT's mission

## Zoning and land use

- [ ] Confirm zoning district and permitted uses for: agriculture, retail (farm stand / cafe), events, housing
- [ ] Check for site plan review or special use permit requirements
- [ ] Review shoreland zoning if the property is within 250 feet of water
- [ ] Check deed restrictions or homeowners association rules
- [ ] Confirm parking requirements for cafe and events
- [ ] Check sign ordinances
- [ ] Verify whether any structures are non-conforming and what their legal status is

## Housing

- [ ] If providing housing: confirm compliance with Maine's Residential Rental Property registration and code requirements
- [ ] Check whether any units are subject to rent control (unlikely in rural Maine, but verify)
- [ ] Review Maine's tenant protections and notice requirements
- [ ] If forming a housing cooperative: ensure compliance with fair housing laws and cooperative housing regulations
- [ ] Mobile home: if any structure is a mobile home, Maine has specific statutes (Title 10, Chapter 953) governing notice, sale, and park closures

## Food service and retail

- [ ] Maine Food Code: obtain a food establishment license from the Maine Department of Health and Human Services (DHHS) or municipal health officer
- [ ] If selling prepared food: comply with缅因州食品服务法规
- [ ] If selling alcohol: obtain liquor license from the Maine Bureau of Alcoholic Beverages & Lottery Operations (if applicable)
- [ ] Cottage food operation: if any products are produced under Maine's cottage food law, ensure labeling and sales channel compliance
- [ ] Weights and measures: if selling by weight, register scales with the Maine Department of Agriculture
- [ ] Farm stand / farmers market: verify any municipal permits or licenses required

## Events and gatherings

- [ ] Assembly occupancy permit: if hosting regular events, may need approval from the local fire marshal or building inspector
- [ ] Noise ordinances: review municipal noise restrictions, especially for evening events
- [ ] Temporary event permits: some towns require permits for events over a certain size
- [ ] Insurance for events: general liability must cover event-related claims; some insurers require advance notice for large events

## Sauna and wellness structures

- [ ] Building code: confirm whether the sauna is classified as an accessory structure or a commercial wellness facility
- [ ] Electrical and plumbing permits: if the sauna has wiring or plumbing, ensure permits were pulled and inspections completed
- [ ] Zoning: confirm accessory structure size limits and setbacks
- [ ] Insurance: wellness structures carry distinct liability risks; obtain proper coverage
- [ ] Liability waivers: if members or guests use the sauna, consider requiring signed waivers
- [ ] Ownership transfer: see [10 - Auxiliary Structures](10-auxiliary-structures.md)

## Environmental

- [ ] Septic system: inspect and pump; verify capacity for anticipated use (including events and housing); obtain inspection report
- [ ] Well water: test for potability (bacteria, nitrates, arsenic) and any contaminants relevant to prior land use
- [ ] Phase I Environmental Site Assessment: if there is any reason to suspect contamination (former auto shop, orchard with legacy pesticides, dump site), order a Phase I from a certified environmental professional
- [ ] Wetlands: verify whether any portion of the property is mapped as wetland or vernal pool habitat
- [ ] Stormwater: ensure compliance with Maine DEP stormwater management requirements if any construction is planned
- [ ] Pesticide / herbicide history: if transitioning to organic or regenerative practices, document prior chemical use

## Labor and employment

- [ ] If the cooperative will have employees: register with Maine DOL, obtain workers' compensation insurance, and comply with wage and hour laws
- [ ] Worker classification: distinguish between cooperative members who work as owner-operators and employees who are not members
- [ ] Family and Medical Leave Act: if you will have 15+ employees, Maine's FMLA requirements apply
- [ ] Workers' compensation: required in Maine for most employers; obtain quotes before closing

## Insurance

- [ ] Property insurance: covers buildings, equipment, and inventory
- [ ] General liability: covers injuries on the property, product liability, and event-related claims
- [ ] Directors & Officers (D&O) insurance: protects board members from liability related to governance decisions
- [ ] Workers' compensation: as noted above
- [ ] Umbrella policy: provides additional liability coverage above the primary policies
- [ ] Review all policies annually; update coverage as operations expand or change

## Tax

- [ ] Real estate taxes: confirm current assessment and whether the property receives any abatements or exemptions
- [ ] Current Use / Tree Growth / Farmland: if enrolled, understand the obligations and potential penalties for withdrawal
- [ ] Sales tax: if selling taxable goods (non-food items, prepared meals, alcohol), obtain a sales tax permit from Maine Revenue Services
- [ ] Employment taxes: if you have employees, register for unemployment insurance and withholding
- [ ] Property tax exemption: if the CLT is a 501(c)(3), apply for property tax exemption from the municipality (not automatic; must be applied for)

## Contracts and agreements

- [ ] Ground lease (CLT → cooperative): see real estate section
- [ ] Promissory note (seller financing): document all terms in writing
- [ ] Loan agreements (CDFIs): review covenants, reporting requirements, and default provisions carefully
- [ ] Vendor contracts: review existing supply, service, and equipment contracts; determine which will transfer
- [ ] Employment contracts: if any employees are transferring, review their contracts and Maine's notice requirements
- [ ] Membership agreement: each cooperative member must sign an agreement describing their rights, obligations, and the limited nature of returns

## Indigenous engagement

- [ ] If the farm is located on or near Wabanaki territory (which includes most of Maine), consider whether the CLT's stewardship model can include Wabanaki input, partnership, or co-management
- [ ] Engage with Wabanaki leaders early and with humility
- [ ] Do not claim indigenous practices without explicit consent and partnership
- [ ] Consider whether a portion of the land or proceeds can support Wabanaki food sovereignty initiatives

---

## Professional team

You will need:

- **Real estate attorney** familiar with CLTs, cooperatives, and Maine property law
- **Tax advisor** (CPA or attorney) familiar with nonprofit and cooperative tax treatment
- **Insurance broker** familiar with farms, food service, events, and cooperative structures
- **CDFI loan officer** (from CFNE, CEI, or Genesis) engaged early
- **Optional**: environmental consultant, surveyor, engineer, architect

Budget $8,000–$20,000 for legal and professional fees during formation and closing.
`},{id:"08-community-engagement",label:"08 Community Engagement",content:`# 08 — Community Engagement

How to listen, communicate, and build trust with the community during a farm transition.

---

## Listening sessions

The first and most important community engagement tool is the listening session — not a presentation, not a pitch, but a structured opportunity for community members to say what they value, fear, and hope for.

### Format
- 90 minutes
- 15–30 participants (if more people come, hold multiple sessions)
- Facilitated by a neutral party (not the owner, not someone who stands to benefit from the sale)
- Ground rules: one person speaks at a time, no decisions are made in this room, all perspectives are welcome

### Questions to ask
1. What does this farm mean to you personally?
2. What do you want to see continue?
3. What worries you about a change in ownership?
4. What would make you feel confident in a new ownership model?
5. What do you need to know that you don't know yet?
6. Who else should be in this conversation?

### Documentation
- Take notes on flip chart paper visible to everyone
- Assign a note-taker who is not the facilitator
- Produce a one-page summary within 48 hours
- Post the summary publicly (email list, website, physical posting at the farm if appropriate)
- Do not quote individuals by name without consent

### Frequency
- Phase 1: 2–3 listening sessions
- Phase 2: 1 session per month or per major milestone
- Phase 3: Quarterly updates
- Ongoing: Annual community report and listening session

---

## One-page handout

Use this at listening sessions, farmers markets, community board postings, and email outreach.

\`\`\`
COMMUNITY OWNERSHIP EXPLORATION
[Farm name or working name]

What is happening?
The current owner plans to sell. A group of community members is exploring
a community land trust + cooperative model to keep the farm affordable,
mission-driven, and locally governed.

What does that mean?
- Land would be owned permanently by a community trust (no speculation)
- Farm operations would be run by a cooperative (democratic, local)
- Housing and community spaces would remain accessible

What does NOT change?
- [List continuing operations: e.g., farm stand, cafe hours, events]
- [Any existing community access that will be preserved]

What might change?
- [List honest possibilities: e.g., membership opportunities, new programs,
  possible price adjustments, governance structure]

What happens next?
- [Date of next listening session / community meeting]
- [How to sign up for updates]

This is an exploration. No decisions have been made. Your voice matters.

Contact: [Name] | [Email] | [Phone]
Website / mailing list: [URL]
\`\`\`

---

## Communications timeline

### Phase 1: Exploration
- Announce the exploration publicly within 2 weeks of the steering committee's first meeting
- Publish listening session dates
- Launch a simple email list or website
- Respond to all inquiries within 48 hours

### Phase 2: Formation
- Announce the decision to proceed (or not) with a clear rationale
- Introduce the CLT board and cooperative steering committee
- Share entity formation documents (summaries, not full legal text)
- Hold membership information sessions

### Phase 3: Financing
- Provide updates on fundraising progress (without revealing confidential lender terms)
- Celebrate milestones: seller financing secured, CDFI application submitted, first member shares sold
- Be honest about setbacks: "We applied to [CDFI] and they need us to improve our cash-flow projection. We are working on it."

### Phase 4: Closing
- Announce the closing date
- Introduce the formal cooperative board
- Hold a community celebration
- Share immediate priorities and open questions

### Phase 5: Ongoing
- Monthly or quarterly updates via email or newsletter
- Annual member meeting (open to members, summarized for community)
- Annual community report
- Annual listening session

---

## Managing rumors and conflict

### If rumors spread
- Address them quickly and publicly
- State what is true, what is false, and what is unknown
- Never blame individuals for spreading rumors; people fill information vacuums

### If community conflict emerges
- Acknowledge the conflict openly
- Offer a facilitated conversation (not a debate)
- Ensure that people who disagree feel heard, even if the group ultimately proceeds
- If a significant portion of the community opposes the project, pause and assess whether the opposition reflects a fatal flaw in the plan or a communication breakdown

### If the owner and the community have different timelines
- Be transparent about the owner's needs (e.g., "The owner needs to close by [date] for personal reasons")
- If the community needs more time, negotiate an extension or a bridge arrangement
- Never pressure the community to move faster than they are ready

---

## Digital tools

You do not need expensive tools. Use what the community already uses.

- **Email list**: Google Groups, Mailchimp (free tier), or a simple BCC list
- **Website**: A single page with contact info, meeting dates, and documents. WordPress, Wix, or a free GitHub Pages site work fine.
- **Documents**: Google Drive or Dropbox shared folder with public access to non-sensitive documents
- **Meetings**: In-person preferred for listening sessions. Zoom as backup for people who cannot attend.
- **Social media**: Use the farm's existing social media presence. If it does not have one, the cooperative should create one after formation.

---

## Sign-up form template

Use this to collect contact information and interests at listening sessions and online.

\`\`\`
NAME: ________________________________
EMAIL: ________________________________
PHONE: ________________________________
TOWN: ________________________________

I am interested in (check all that apply):
□ Attending listening sessions
□ Joining a working group (farm / cafe / events / governance / fundraising / communications)
□ Becoming a cooperative member when membership opens
□ Donating or investing
□ Volunteering
□ Receiving email updates only

Questions or concerns:
________________________________
________________________________

[Submit]
\`\`\`
`},{id:"09-email-templates",label:"09 Email Templates",content:`# 09 — Email Templates

Ready-to-adapt emails for key moments in the transition process.

---

## To the owner: Initial outreach

**Subject:** Exploring a community ownership path for [the farm]

Dear [Owner Name],

I am writing to explore whether you would be open to a community ownership transition for [the farm]. A group of us who care about the farm's future — [farm workers / neighbors / regular customers / community members] — are interested in whether a community land trust + cooperative model could preserve the farm's mission, keep it affordable, and keep it in the community.

This model has been used successfully for farm transitions in Maine and across the Northeast. It typically involves:
- A community land trust purchasing and permanently holding the land
- A cooperative operating the farm and its businesses under a long-term lease
- The community sharing in governance and stewardship

This is an exploration, not a commitment. We understand you may have your own timeline, financial needs, and hopes for the property's future. We want to learn what matters to you.

Would you be open to a conversation? I am happy to meet at your convenience.

Thank you for your time and for everything you have built.

[Your Name]
[Your Role / Relationship to the Farm]
[Phone] | [Email]

---

## To the owner: Proposal and next steps

**Subject:** Community ownership exploration — draft plan and next steps

Hi [Owner Name],

Thank you for being open to exploring a community ownership path for [the farm]. As discussed, I have put together a short working plan that outlines how a land trust + cooperative structure could work, what the phases and timeline look like, and where we still need to resolve details.

Attached are:
- Farm Co-op Transition Plan — full working plan with templates and checklists
- Funder Brief — one-page overview for funders and lenders
- Member FAQ — plain-language FAQ for community members
- Community Session Handout — one-page handout for listening sessions

**High-level summary:**
- Proposed structure: a community land trust holds the land permanently; a multi-stakeholder cooperative operates the farm and related businesses under a long-term ground lease.
- Capital stack (target): seller financing (20–40%), CDFI loan(s), member/community capital, and grants/PRIs for pre-development and the land trust.
- Next 60–90 days: form a steering committee, complete a feasibility memo, engage CDI/CFNE/CEI for technical assistance, and resolve any ownership questions about auxiliary structures in writing before any purchase.

If you are comfortable, I would like to propose a 60–90 day non-binding exploration window so we can test feasibility, talk to lenders, and bring you a clear go/no-go recommendation with proposed terms. I am happy to walk through any part of this on a call.

Thank you again for considering this path.

[Your Name]
[Title/Role]
[Phone] | [Email]

---

## To community members: Launch announcement

**Subject:** [The farm]'s future — community ownership exploration

Dear neighbors and friends,

[The farm] is at a crossroads. The current owner plans to sell, and a group of us is exploring a community land trust + cooperative ownership model to keep the farm affordable, mission-driven, and locally governed.

**What this means:**
- The land would be owned permanently by a community trust
- The farm and its businesses would be run by a cooperative (democratic, local)
- The community would have a voice in stewardship and operations

**What this does NOT mean (yet):**
- No decisions have been made
- We are not asking for money right now
- We are not promising anything we cannot guarantee

**What happens next:**
We are holding listening sessions to hear from the community. This is your chance to ask questions, share concerns, and tell us what you value about [the farm].

- [Date, time, location of first listening session]
- [Date, time, location of second listening session]
- Sign up for updates: [email list or website]

Your voice matters. Whether you are a regular customer, a neighbor, a former worker, or someone who has never visited, we want to hear from you.

Looking forward to seeing you there.

[Name]
[Role, e.g., Steering Committee Member]
[Contact info]

---

## To funders / CDFIs

**Subject:** Community land trust + cooperative farm transition in [County], Maine

Dear [Funder Name],

I am writing on behalf of a group exploring the community ownership transition of [the farm], a [medicinal herb / diversified vegetable / livestock / pick-your-own] farm with [cafe / apothecary], cultural programming, and [housing / community amenities] in [County], Maine.

We are pursuing a community land trust + cooperative structure:
- A CLT or mission-aligned nonprofit would purchase and permanently hold the land
- A multi-stakeholder cooperative would operate the farm and its businesses under a 99-year ground lease
- The model prioritizes permanent affordability, democratic governance, and local wealth retention

**Funding needs:**
- Pre-development / technical assistance grants for feasibility, legal formation, and governance setup
- Patient capital (PRIs or low-interest loans) for the CLT landholder and/or cooperative operator
- Gap financing tied to community benefit

**Why this fits [funder's mission]:**
[Customize: e.g., "CFNE's focus on cooperative lending," "CEI's farm and food systems work," "Maine Farmland Trust's commitment to land access"]

I would welcome the opportunity to discuss this project and learn about your application process. I have attached a one-page funder brief and am happy to provide additional materials on request.

Thank you for your work supporting durable community ownership.

[Your Name]
[Title/Role]
[Phone] | [Email]
[Project website, if available]

---

## To professionals (attorney, accountant, consultant)

**Subject:** Seeking [legal / accounting / governance] support for a Maine farm CLT + cooperative

Dear [Name],

I am part of a group exploring the transition of [the farm] in [County], Maine to community land trust + cooperative ownership. We are seeking [legal / accounting / consulting] support and were referred to you by [referral source, if any].

**Project status:**
- [Phase: e.g., early exploration / feasibility / formation / financing]
- [Key details: e.g., purchase price approximately $XXX,000, 4-person steering committee, owner open to seller financing]

**Services needed:**
[Customize: e.g., "Cooperative and nonprofit formation," "CDFI loan application support," "Ground lease drafting," "Tax structuring for a cooperative with limited-equity shares"]

**Timeline:**
[Desired start date and any hard deadlines]

We are a volunteer-driven group with limited funds. If you offer sliding-scale rates, pro bono work, or payment plans for community projects, we would be grateful. We are also happy to apply for grants that cover professional fees.

Thank you for considering this request. I am available for a call at your convenience.

[Your Name]
[Role]
[Phone] | [Email]

---

## To members: Membership opens

**Subject:** Membership is now open for [Farm Cooperative Name]

Dear [Name],

Thank you for your patience and support during the formation of [Farm Cooperative Name]. We are now opening membership.

**What membership means:**
- One vote in cooperative elections and major decisions
- A share of any surplus distributed as patronage (not guaranteed)
- The ability to serve on the board and working groups
- Access to member meetings and financial reports

**Membership share:** $[amount] (sliding scale / payment plan available)

**What membership does NOT mean:**
- Ownership of land or buildings — the CLT holds the land in trust
- Guaranteed financial return — this is stewardship, not investment
- A job — employment is separate from membership

**How to join:**
1. Complete the membership application: [link or form]
2. Attend a membership orientation session: [dates]
3. Pay your membership share (or arrange a payment plan)
4. Sign the membership agreement

**Next orientation sessions:**
- [Date, time, location / Zoom link]
- [Date, time, location / Zoom link]

We are building something together. Your voice matters.

[Name]
[Board President / Membership Coordinator]
[Contact info]

---

## To the community: Annual report excerpt

**Subject:** [Farm name] — year one community report

Dear neighbors,

[Farm name] has completed its first year of community ownership. Here is what we have done together:

**By the numbers:**
- [X] cooperative members
- [X] acres cultivated
- [X] pounds of food distributed
- [X] events hosted
- [X] people employed
- [X] dollars in local purchasing

**Major accomplishments:**
- [e.g., "Launched the farm share program"]
- [e.g., "Completed barn roof repairs"]
- [e.g., "Hosted 12 community gatherings"]

**Challenges:**
- [e.g., "We underestimated winter heating costs and are addressing insulation"]
- [e.g., "We need more members to break even next year"]

**This year:**
- [Top 3 priorities]

**Listening session:**
[Date, time, location] — come tell us what you think.

Thank you for being part of this.

[Name]
[Board President]
[Contact info]
`},{id:"10-auxiliary-structures",label:"10 Auxiliary Structures",content:`# 10 — Auxiliary Structures

How to handle existing structures — saunas, outbuildings, shared equipment, and amenities — whose ownership or operating rights are unclear.

---

## The problem

Many farms have structures that were built informally: a community sauna, a shared workshop, a neighbor's shed, a borrowed tractor, a leased solar array. These arrangements often worked because the owner was the owner, and informal trust was enough. When the land transfers to a CLT and operations transfer to a cooperative, informality becomes liability.

The rule: **Every structure, asset, and arrangement connected to the farm must be documented in writing before closing.**

If it is not documented, assume it is a problem.

---

## Inventory

Create a master list of every structure and asset that is not obviously owned by the seller or clearly part of the purchase:

| Structure / Asset | Location | Current user | Who paid to build it? | Who maintains it? | Utilities? | Insurance? | Documented? |
|---|---|---|---|---|---|---|---|
| Community sauna | Near pond | Community | Unknown / owner + volunteers | Volunteers | Wood stove, no electric | None | No |
| Shared tractor | Barn | Neighbor (Bill) | Bill | Bill | N/A | On Bill's policy | Handshake |
| Yurt platform | North field | Event coordinator | Owner | Volunteers | None | None | No |
| Cob oven | Near cafe | Cafe staff | Owner + volunteers | Volunteers | None | None | No |

For each item that is undocumented, choose one of the resolutions below.

---

## Resolution options

### Option A: Include in the purchase

The structure is treated as part of the real estate and transfers with the land.

- **When to use**: The owner built it, paid for it, and wants to sell it.
- **Action**: Include it in the purchase agreement. Ensure it is covered by the appraisal. Document any transferable warranties or manuals.
- **Risk**: If the structure was built without permits or does not meet code, the new owner inherits the liability.

### Option B: License or lease agreement

The current user retains ownership but gets a formal right to use the land and structure.

- **When to use**: A neighbor or community member built the structure and wants to keep using it, or the owner wants to retain personal use of a specific asset.
- **Action**: Draft a license or lease that specifies: duration, permitted uses, maintenance responsibilities, insurance requirements, utility responsibilities, access rights, and termination conditions.
- **Key terms**:
  - **License** = revocable, short-term, less formal. Use for simple, low-value arrangements.
  - **Lease** = longer-term, more formal, harder to terminate. Use for significant structures or investments.
- **Risk**: A poorly drafted agreement can create a tenancy or prescriptive rights. Have an attorney review.

### Option C: Separate cooperative or entity

The structure is owned and operated by its own cooperative, corporation, or association, which leases the land from the farm cooperative or the CLT.

- **When to use**: A structure has its own community of users, revenue model, or governance needs (e.g., a sauna co-op with 20 regular members and its own fee structure).
- **Action**:
  1. Form a separate entity (cooperative, nonprofit, or LLC)
  2. The entity purchases or receives ownership of the structure
  3. The entity leases the land under the structure from the farm cooperative or CLT
  4. The entity manages its own membership, fees, maintenance, and insurance
- **Benefit**: Limits liability. Gives users democratic control. Simplifies accounting.
- **Risk**: Adds complexity. Requires separate governance, bookkeeping, and tax compliance.

### Option D: Remove or decommission

The structure is demolished, relocated, or left to decay.

- **When to use**: The structure is unsafe, unwanted by the new owners, or its ownership is so disputed that no resolution is possible.
- **Action**: Obtain written agreement from anyone with a claim. Hire a contractor for removal. Document before-and-after condition.
- **Risk**: Emotional conflict if the structure has community meaning. Never remove something without notice and a chance for the community to respond.

---

## Sauna-specific considerations

Saunas are common on Maine farms and often built informally. They carry distinct risks:

### Building and zoning
- Was the sauna built with proper permits?
- Does it meet setback requirements?
- If it has a wood stove, was the stove permitted and inspected?
- If it has electrical or plumbing, were permits pulled?
- If it is near water, does it comply with shoreland zoning?

### Liability
- Saunas involve heat, water, and slippery surfaces. Injury risk is real.
- General liability insurance must explicitly cover sauna use.
- Consider requiring signed liability waivers for users, especially if the sauna is open to the public or unaccompanied guests.

### Ownership and access
- Who owns the sauna structure itself?
- Who owns the stove, benches, and accessories?
- Who has keys or access?
- Is there a fee to use it? Who collects the fee?
- What are the hours of use?
- Who is responsible for cleaning, restocking wood, and maintenance?

### Utilities
- Who pays for electricity, water, or wood?
- Is the sauna on a separate meter?
- If wood is harvested from the property, who manages that resource?

### Resolution path

1. **Inventory** the sauna's physical components, permits, and current arrangements
2. **Survey** the regular users: what do they want? Are they willing to pay? To serve on a board?
3. **Choose a resolution**: include, license/lease, separate co-op, or remove
4. **Document the agreement** in writing before closing
5. **Obtain proper insurance** and post clear use rules

---

## Shared equipment and tools

### Rules of thumb
- If equipment is essential to farm operations, it should be owned by the farm cooperative or clearly leased with a maintenance agreement.
- If equipment is personally owned by a worker or neighbor, document the loan or lease.
- Create an equipment inventory with: owner, value, condition, maintenance schedule, and replacement plan.

### Sample equipment loan agreement

\`\`\`
EQUIPMENT LOAN AGREEMENT

Owner: [Name]
Borrower: [Farm Cooperative Name]
Equipment: [Description, make, model, serial number]
Loan period: [Start date] to [End date] or ongoing with 30-day notice
Maintenance: Borrower is responsible for routine maintenance (oil, filters, cleaning).
              Owner is responsible for major repairs.
Insurance: Borrower will list the equipment on its property insurance policy.
Return: Equipment will be returned in the same condition, normal wear excepted.
Termination: Either party may terminate with 30 days' written notice.

Signed: _________________ Date: _________ (Owner)
Signed: _________________ Date: _________ (Borrower)
\`\`\`

---

## Documentation checklist

Before closing, every auxiliary structure should have:

- [ ] A clear statement of who owns it
- [ ] A written agreement (purchase, lease, license, or removal) signed by all parties
- [ ] Proof of permits and inspections (if required)
- [ ] Insurance coverage documented
- [ ] Utility responsibilities assigned
- [ ] Maintenance and repair responsibilities assigned
- [ ] A dispute resolution clause
- [ ] Access rules (who can use it, when, under what conditions)
- [ ] A liability waiver (if appropriate)

---

## Sample site lease for auxiliary structure

\`\`\`
SITE LEASE AGREEMENT

Landlord: [CLT or Farm Cooperative Name]
Tenant: [Separate entity or individual name]
Property: [Address and description of land under the structure]
Structure: [Description of the structure]

Term: [99 years / 50 years / 10 years, renewable], commencing [date]
Rent: $[amount] per year, adjusted every [5] years by [CPI / fixed %]
Permitted use: [Specific use, e.g., "community sauna and wellness space"]

Maintenance: Tenant is responsible for all maintenance, repairs, and improvements.
Utilities: Tenant pays all utility costs.
Insurance: Tenant will maintain general liability insurance of at least $1,000,000 per occurrence.
Access: Tenant may use [specific roads / paths] for access. Hours of operation: [times].
Compliance: Tenant will comply with all applicable laws, codes, and permits.
Assignment: Tenant may not assign or sublease without Landlord's written consent.
Default: If Tenant fails to pay rent or maintain insurance for 30 days, Landlord may terminate.

Signed: _________________ Date: _________ (Landlord)
Signed: _________________ Date: _________ (Tenant)
\`\`\`

**Have an attorney review and adapt this template for your specific situation.**
`}],i=[{id:"capital-stack-worksheet",label:"Capital Stack Worksheet",content:`# Capital Stack Worksheet — [Farm Name]

Fill in this worksheet to model your financing. Be conservative.

---

## Purchase and project costs

| Line item | Amount | Notes |
|---|---|---|
| Purchase price | $ | Agreed price or best estimate |
| Closing costs (2–5%) | $ | Legal, title, recording |
| Appraisal | $ | |
| Survey | $ | |
| Environmental assessment | $ | Phase I if needed |
| Immediate repairs / deferred maintenance | $ | Get contractor estimate + 30% buffer |
| Working capital reserve (3–6 months) | $ | Core operating expenses |
| Entity formation and legal fees | $ | Budget $5,000–$15,000 |
| Insurance (first year) | $ | Obtain quotes |
| Other: _________________ | $ | |
| **Total project cost** | $ | |

---

## Capital sources

| Source | Amount | % of total | Terms / notes | Secured by | Committed? | Date needed |
|---|---|---|---|---|---|---|
| Seller financing | $ | | Interest: ___%; Term: ___ years | Mortgage on property | Yes / No / Pending | |
| CDFI loan 1 (senior) | $ | | Lender: ___; Rate: ___%; Term: ___ years | Mortgage + UCC | Yes / No / Pending | |
| CDFI loan 2 (subordinate) | $ | | Lender: ___; Rate: ___%; Term: ___ years | Subordinate mortgage | Yes / No / Pending | |
| Member shares | $ | | Share price: $___; Target members: ___ | None | Yes / No / Pending | |
| Community notes / donations | $ | | | None | Yes / No / Pending | |
| Grants | $ | | Funder: ___; Purpose: ___ | None | Yes / No / Pending | |
| PRIs | $ | | Funder: ___; Rate: ___% | None or subordinate | Yes / No / Pending | |
| Other | $ | | | | Yes / No / Pending | |
| **Total capital** | $ | | | | | |
| **Gap or surplus** | $ | | Gap = need more; Surplus = excess | | | |

---

## Debt service coverage

This is the ratio lenders care about most: can the cooperative make its loan payments?

**Annual debt service** (principal + interest on all loans): $________

**Projected annual net operating income** (revenue minus operating expenses, before debt service): $________

**Debt service coverage ratio (DSCR)** = Net operating income \xf7 Annual debt service = ________

Lenders typically want DSCR ≥ 1.15x. Aim for 1.25x or higher to be safe.

---

## Cash-flow stress test

| Scenario | Year 1 revenue | Year 1 expenses | Net income | Can we pay debt? |
|---|---|---|---|---|
| Base case (as projected) | $ | $ | $ | Yes / No |
| Stress case (-20% revenue, +15% expenses) | $ | $ | $ | Yes / No |
| Disaster case (-40% revenue, major failure) | $ | $ | $ | Yes / No |

If the stress case fails, the deal is too risky. Renegotiate or walk away.

---

## Lender conversation tracker

| Lender | Contact | Date contacted | Materials sent | Response | Next step |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
`},{id:"community-session-handout",label:"Community Session Handout",content:`# Community Session Handout — [Farm Name]

Print this one-page handout for listening sessions, farmers markets, and community postings.

---

# COMMUNITY OWNERSHIP EXPLORATION
## [Farm Name or Working Name]

### What is happening?
The current owner plans to sell. A group of community members is exploring a community land trust + cooperative model to keep the farm affordable, mission-driven, and locally governed.

### What does that mean?
- **Land** would be owned permanently by a community trust (no speculation)
- **Farm operations** would be run by a cooperative (democratic, local)
- **Housing and community spaces** would remain accessible

### What does NOT change?
- [List continuing operations]
- [Any existing community access that will be preserved]

### What might change?
- [List honest possibilities: membership opportunities, new programs, possible price adjustments, governance structure]

### What happens next?
- **Next listening session:** [Date, time, location]
- **Sign up for updates:** [Email list or website]

---

This is an **exploration**. No decisions have been made. Your voice matters.

**Contact:** [Name] | [Email] | [Phone]
**Website / mailing list:** [URL]
`},{id:"funder-brief-blank",label:"Funder Brief Blank",content:`# Funder Brief — [Farm Name]

Adapt this template by filling in the bracketed sections.

---

## Community Land Trust + Cooperative Acquisition of a Maine Farm

### Overview

[The farm] is a [describe farm type: e.g., medicinal herb and diversified vegetable] farm with onsite [cafe / apothecary / farm store], cultural programming space, [list amenities], parking, and [housing description] in [County], Maine.

The current owner is willing to sell; the discussed price is approximately $[XXX,000].

The surrounding community has strong goodwill; [key operator] is convening a transition process to preserve the farm's mission, affordability, and community access.

### Proposed Structure

- **Land**: Held permanently by a community land trust (CLT) or land-back-aligned nonprofit to remove land from speculation and preserve affordability and stewardship.
- **Operations**: A multi-stakeholder cooperative operates the farm, [cafe / apothecary], events, and related improvements under a long-term ground lease.
- **Housing**: Documented occupancy via CLT home lease or a small housing co-op.
- **Auxiliary structures**: Ownership and operating rights for [sauna / shared amenities / outbuildings] to be resolved via purchase, license/lease, or separate cooperative before closing.

### Capital Stack (Target)

| Source | Share | Notes |
|---|---|---|
| Seller financing | 20–40% | Amortized over 5–10+ years |
| CDFI loan(s) | 30–50% | Senior or subordinate debt sized to cash flow |
| Member / community capital | 5–15% | Limited-equity member shares; community notes or donations where lawful |
| Grants / PRIs | 5–15% | Pre-development, technical assistance, mission-aligned investment |

Likely CDFI partners: CFNE, CEI, Genesis Community Loan Fund.

### Use of Funds

1. Acquisition of land and improvements: $[XXX,000]
2. Closing, legal, title, appraisal, survey, and environmental costs: $[XX,000]
3. Immediate repairs, deferred maintenance, and working capital / operating reserves: $[XX,000]
4. Entity formation, governance setup, and initial compliance: $[X,000]

### Community Benefits

- Permanent affordability and non-speculative land stewardship via CLT
- Local jobs, fair labor practices, and worker voice through cooperative governance
- Continued community access to farm products, [cafe / apothecary], cultural events, and wellness offerings
- Ecological stewardship through [permaculture / regenerative / organic] practices maintained under community governance
- Potential for Wabanaki-informed stewardship and relationship-building, only if co-created with consent

### Funding Needs & Fit

- Technical assistance and pre-development grants to support feasibility, legal, and governance work
- Patient capital (PRIs / low-interest loans) for the CLT landholder and/or cooperative operator
- Gap financing tied to job creation or community benefit, where available
- Funders seeking durable community ownership, food systems, cultural resilience, and climate-aligned land use

### Next Steps

1. Complete feasibility memo and capital-stack worksheet with conservative cash-flow assumptions
2. Engage CDI, CFNE, CMBA, Land in Common, and Maine Farmland Trust for technical assistance and referrals
3. Resolve auxiliary structure ownership / operating rights in writing before closing
4. Obtain lender / partner commitments and negotiate purchase-and-sale terms, including seller financing where available

### Contact

[Name] | [Title/Role]
[Phone] | [Email]
[Farm website or project page]
`},{id:"member-faq-blank",label:"Member Faq Blank",content:`# Member FAQ — [Farm Name]

Adapt this template by filling in the bracketed sections.

---

## What is happening?

The current owner wants to sell the farm, [cafe / apothecary], and related community assets. A group of operators and community members is exploring a community-ownership model so the place can remain affordable, mission-aligned, and locally stewarded.

## What is the proposed ownership model?

- **Land** would be held permanently by a community land trust (CLT) or similar nonprofit, removing it from speculation.
- **A cooperative** would operate the farm, [cafe / apothecary], events, and related improvements under a long-term ground lease.
- **Housing** would have documented occupancy via a CLT lease or a small housing co-op.
- **[Auxiliary structures]** ownership and operating rights will be resolved in writing before any purchase.

## Why a land trust and cooperative?

- This structure keeps land permanently affordable and community-governed while giving operators secure tenure and clear responsibilities.
- It aligns with Maine's cooperative tradition and the community's values around stewardship, fair work, and long-term resilience.
- CDFIs and mission-aligned funders are familiar with this model in Maine and the Northeast.

## How can I participate?

- Attend open information sessions and listening gatherings.
- Join a working group (farm, [cafe], events, governance, fundraising, communications) if you have time and skills.
- Express non-binding interest in membership when the cooperative opens its membership process.
- Support through donations or spreading the word, where appropriate.

## What does membership mean?

- Members have a voice in major cooperative decisions (e.g., electing the board, approving major changes).
- Members typically contribute a share (often with sliding-scale or payment-plan options).
- Membership is not a guarantee of profit, property ownership, or specific access rights. Details will be in the bylaws and membership agreement.

## Is this an investment? Will I get financial returns?

Not in the conventional sense. Member shares are typically limited-equity and focused on stewardship, not profit. Any patronage or surplus distribution would follow cooperative rules and legal constraints. Do not expect market-rate financial returns. This is primarily a community-stewardship model.

## What are the main risks?

- **Financing risk**: The deal must be affordable under conservative cash-flow assumptions. If the group cannot secure enough financing, the deal will not close.
- **Operational risk**: Seasonality, staffing, and maintenance needs can strain cash flow.
- **Legal / permit risk**: Zoning, food service, events, [sauna], septic, well, and housing compliance must all be resolved.
- **Governance risk**: Volunteer capacity and decision-making overload can burn people out if the structure is not clear.

## What is the timeline?

| Phase | Duration |
|---|---|
| Exploration and feasibility | 4–8 weeks |
| Structure, financing, and legal formation | 8–12+ weeks |
| Closing and transition | Depends on due diligence, lender processes, and seller cooperation |

## How will decisions be made?

- A small steering committee is guiding the exploration phase.
- If the cooperative forms, members will have democratic input (e.g., one member, one vote or another agreed democratic formula).
- The CLT would have its own board and governance process focused on land stewardship and affordability.

## What about [the sauna / auxiliary structures]?

Ownership, utilities, insurance, access, and removal rights must be documented before closing. Options include cooperative purchase, a license/lease with the current owner, or a separate cooperative with a site lease.

## Will the farm, [cafe], and events continue?

The goal is continuity and strengthening of core offerings: farm products, [cafe / apothecary], [yoga / cultural events], and community gatherings. Specific programming will depend on member priorities, staffing, and finances.

## How can I stay informed?

- Sign up for updates via the contact form or email list when available.
- Attend scheduled community sessions and check posted minutes/summaries.
- Contact the steering committee with questions. Avoid sharing unconfirmed details as fact.

## What if this doesn't work out?

That is a real possibility, and it would not be a failure. If the group determines that the deal is not financially viable, the governance is not ready, or the community is not aligned, the right choice is to walk away cleanly. We will communicate honestly at every step.

## I have more questions. Who do I contact?

[Name] | [Email] | [Phone]
[Project website or mailing list signup]
`},{id:"steering-committee-charter",label:"Steering Committee Charter",content:`# Steering Committee Charter — [Farm Name]

Adapt and adopt this charter at your first steering committee meeting.

---

## Purpose

The steering committee guides the exploration and formation of a community land trust + cooperative ownership transition for [the farm]. The committee makes recommendations, not binding decisions, until formal entities are created.

## Membership

- **Size**: 3–7 members
- **Qualities sought**:
  - At least one person with financial literacy
  - At least one person with community relationships and communication skills
  - At least one person with operations or farm business experience
  - Diversity of age, background, gender, and role in the community
- **Current members**:
  1. [Name] — [Role / expertise]
  2. [Name] — [Role / expertise]
  3. [Name] — [Role / expertise]
  4. [Name] — [Role / expertise]
  5. [Name] — [Role / expertise]

## Term

Steering committee members serve until the cooperative and CLT are formally established and boards are elected. Expected duration: 6–12 months.

## Decision-making

- Consensus is the goal.
- If consensus cannot be reached after 2 meetings of discussion, the committee votes.
- Each member has one vote.
- Decisions are documented in writing and shared with the broader community within 48 hours.
- Meetings require [50]% of members present for a quorum.

## Responsibilities

- [ ] Convene community listening sessions
- [ ] Manage communications and answer public questions
- [ ] Coordinate feasibility analysis
- [ ] Engage legal, accounting, and funder relationships
- [ ] Make a formal go/no-go recommendation at the end of Phase 1

## Limitations

- The steering committee **cannot** commit the group to a purchase.
- The steering committee **cannot** borrow money or sign contracts on behalf of future entities.
- The steering committee **cannot** make promises about jobs, housing, or financial returns to individuals.

## Meeting rhythm

- Phase 1 (Exploration): Weekly
- Phase 2 (Formation): Biweekly
- Phase 3 (Financing): As needed

## Communication

- Meeting summaries are posted publicly within 48 hours
- All members respond to community inquiries within 48 hours
- Disagreements within the committee are not aired publicly

## Adoption

This charter was adopted by unanimous vote on [date].

Signed:

_________________________ Date: _________
_________________________ Date: _________
_________________________ Date: _________
_________________________ Date: _________
_________________________ Date: _________
`}];e.s(["d",0,t,"X",0,[{id:"phase-1",title:"1. Exploration & Feasibility",duration:"4–8 weeks",question:"Should we do this?",color:"#2dd4bf"},{id:"phase-2",title:"2. Structure & Formation",duration:"8–12+ weeks",question:"How will we be organized?",color:"#38bdf8"},{id:"phase-3",title:"3. Financing & Due Diligence",duration:"12–20+ weeks",question:"Can we afford this?",color:"#818cf8"},{id:"phase-4",title:"4. Closing & Transition",duration:"4–8 weeks",question:"Are we ready to close?",color:"#c084fc"},{id:"phase-5",title:"5. Stabilization & Growth",duration:"Ongoing",question:"Are we thriving?",color:"#f472b6"}],"g",0,i])}])})();