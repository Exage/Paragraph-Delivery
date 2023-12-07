function DT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function OT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uy={exports:{}},Zl={},jy={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),LT=Symbol.for("react.portal"),bT=Symbol.for("react.fragment"),VT=Symbol.for("react.strict_mode"),MT=Symbol.for("react.profiler"),UT=Symbol.for("react.provider"),jT=Symbol.for("react.context"),FT=Symbol.for("react.forward_ref"),$T=Symbol.for("react.suspense"),BT=Symbol.for("react.memo"),zT=Symbol.for("react.lazy"),Fp=Symbol.iterator;function HT(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var Fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$y=Object.assign,By={};function Ki(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||Fy}Ki.prototype.isReactComponent={};Ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zy(){}zy.prototype=Ki.prototype;function kd(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||Fy}var Nd=kd.prototype=new zy;Nd.constructor=kd;$y(Nd,Ki.prototype);Nd.isPureReactComponent=!0;var $p=Array.isArray,Hy=Object.prototype.hasOwnProperty,xd={current:null},Wy={key:!0,ref:!0,__self:!0,__source:!0};function qy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hy.call(e,r)&&!Wy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xo,type:t,key:s,ref:o,props:i,_owner:xd.current}}function WT(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function qT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bp=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qT(""+t.key):e.toString(36)}function Ma(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case LT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+rc(o,0):r,$p(i)?(n="",t!=null&&(n=t.replace(Bp,"$&/")+"/"),Ma(i,e,n,"",function(u){return u})):i!=null&&(Dd(i)&&(i=WT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$p(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+rc(s,a);o+=Ma(s,e,n,l,i)}else if(l=HT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+rc(s,a++),o+=Ma(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(t,e,n){if(t==null)return t;var r=[],i=0;return Ma(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},Ua={transition:null},GT={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:xd};K.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!Dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Ki;K.Fragment=bT;K.Profiler=MT;K.PureComponent=kd;K.StrictMode=VT;K.Suspense=$T;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GT;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$y({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hy.call(e,l)&&!Wy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xo,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:jT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UT,_context:t},t.Consumer=t};K.createElement=qy;K.createFactory=function(t){var e=qy.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:FT,render:t}};K.isValidElement=Dd;K.lazy=function(t){return{$$typeof:zT,_payload:{_status:-1,_result:t},_init:KT}};K.memo=function(t,e){return{$$typeof:BT,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return it.current.useCallback(t,e)};K.useContext=function(t){return it.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return it.current.useDeferredValue(t)};K.useEffect=function(t,e){return it.current.useEffect(t,e)};K.useId=function(){return it.current.useId()};K.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return it.current.useMemo(t,e)};K.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};K.useRef=function(t){return it.current.useRef(t)};K.useState=function(t){return it.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return it.current.useTransition()};K.version="18.2.0";jy.exports=K;var w=jy.exports;const Ky=OT(w),QT=DT({__proto__:null,default:Ky},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YT=w,XT=Symbol.for("react.element"),JT=Symbol.for("react.fragment"),ZT=Object.prototype.hasOwnProperty,e1=YT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t1={key:!0,ref:!0,__self:!0,__source:!0};function Gy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ZT.call(e,r)&&!t1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:XT,type:t,key:s,ref:o,props:i,_owner:e1.current}}Zl.Fragment=JT;Zl.jsx=Gy;Zl.jsxs=Gy;Uy.exports=Zl;var d=Uy.exports,Jc={},Qy={exports:{}},It={},Yy={exports:{}},Xy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var H=D.length;D.push(B);e:for(;0<H;){var ge=H-1>>>1,Ce=D[ge];if(0<i(Ce,B))D[ge]=B,D[H]=Ce,H=ge;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],H=D.pop();if(H!==B){D[0]=H;e:for(var ge=0,Ce=D.length,ra=Ce>>>1;ge<ra;){var pr=2*(ge+1)-1,nc=D[pr],mr=pr+1,ia=D[mr];if(0>i(nc,H))mr<Ce&&0>i(ia,nc)?(D[ge]=ia,D[mr]=H,ge=mr):(D[ge]=nc,D[pr]=H,ge=pr);else if(mr<Ce&&0>i(ia,H))D[ge]=ia,D[mr]=H,ge=mr;else break e}}return B}function i(D,B){var H=D.sortIndex-B.sortIndex;return H!==0?H:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,m=!1,v=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=D)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(D){if(_=!1,y(D),!v)if(n(l)!==null)v=!0,Zr(S);else{var B=n(u);B!==null&&ss(E,B.startTime-D)}}function S(D,B){v=!1,_&&(_=!1,g(k),k=-1),m=!0;var H=f;try{for(y(B),h=n(l);h!==null&&(!(h.expirationTime>B)||D&&!dt());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,f=h.priorityLevel;var Ce=ge(h.expirationTime<=B);B=t.unstable_now(),typeof Ce=="function"?h.callback=Ce:h===n(l)&&r(l),y(B)}else r(l);h=n(l)}if(h!==null)var ra=!0;else{var pr=n(u);pr!==null&&ss(E,pr.startTime-B),ra=!1}return ra}finally{h=null,f=H,m=!1}}var I=!1,P=null,k=-1,W=5,j=-1;function dt(){return!(t.unstable_now()-j<W)}function fr(){if(P!==null){var D=t.unstable_now();j=D;var B=!0;try{B=P(!0,D)}finally{B?z():(I=!1,P=null)}}else I=!1}var z;if(typeof p=="function")z=function(){p(fr)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,na=Bt.port2;Bt.port1.onmessage=fr,z=function(){na.postMessage(null)}}else z=function(){T(fr,0)};function Zr(D){P=D,I||(I=!0,z())}function ss(D,B){k=T(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Zr(S))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var H=f;f=B;try{return D()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=f;f=D;try{return B()}finally{f=H}},t.unstable_scheduleCallback=function(D,B,H){var ge=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ge+H:ge):H=ge,D){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=H+Ce,D={id:c++,callback:B,priorityLevel:D,startTime:H,expirationTime:Ce,sortIndex:-1},H>ge?(D.sortIndex=H,e(u,D),n(l)===null&&D===n(u)&&(_?(g(k),k=-1):_=!0,ss(E,H-ge))):(D.sortIndex=Ce,e(l,D),v||m||(v=!0,Zr(S))),D},t.unstable_shouldYield=dt,t.unstable_wrapCallback=function(D){var B=f;return function(){var H=f;f=B;try{return D.apply(this,arguments)}finally{f=H}}}})(Xy);Yy.exports=Xy;var n1=Yy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=w,wt=n1;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zy=new Set,qs={};function Hr(t,e){Ni(t,e),Ni(t+"Capture",e)}function Ni(t,e){for(qs[t]=e,t=0;t<e.length;t++)Zy.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,r1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zp={},Hp={};function i1(t){return Zc.call(Hp,t)?!0:Zc.call(zp,t)?!1:r1.test(t)?Hp[t]=!0:(zp[t]=!0,!1)}function s1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o1(t,e,n,r){if(e===null||typeof e>"u"||s1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function Ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,Ld);$e[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,Ld);$e[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,Ld);$e[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function bd(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o1(e,n,i,r)&&(n=null),r||i===null?i1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),si=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),Ud=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),nv=Symbol.for("react.offscreen"),Wp=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=Wp&&t[Wp]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,ic;function ws(t){if(ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ic=e&&e[1]||""}return`
`+ic+t}var sc=!1;function oc(t,e){if(!t||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ws(t):""}function a1(t){switch(t.tag){case 5:return ws(t.type);case 16:return ws("Lazy");case 13:return ws("Suspense");case 19:return ws("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case si:return"Portal";case eh:return"Profiler";case Vd:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tv:return(t.displayName||"Context")+".Consumer";case ev:return(t._context.displayName||"Context")+".Provider";case Md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ud:return e=t.displayName||null,e!==null?e:rh(t.type)||"Memo";case Nn:e=t._payload,t=t._init;try{return rh(t(e))}catch{}}return null}function l1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rh(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u1(t){var e=rv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=u1(t))}function iv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ih(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sv(t,e){e=e.checked,e!=null&&bd(t,"checked",e,!1)}function sh(t,e){sv(t,e);var n=tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Es=Array.isArray;function _i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Es(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function ov(t,e){var n=tr(e.value),r=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c1=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(t){c1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ks[e]=ks[t]})});function uv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ks.hasOwnProperty(t)&&ks[t]?(""+e).trim():e+"px"}function cv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var h1=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(t,e){if(e){if(h1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,wi=null,Ei=null;function Yp(t){if(t=Lo(t)){if(typeof dh!="function")throw Error(C(280));var e=t.stateNode;e&&(e=iu(e),dh(t.stateNode,t.type,e))}}function hv(t){wi?Ei?Ei.push(t):Ei=[t]:wi=t}function dv(){if(wi){var t=wi,e=Ei;if(Ei=wi=null,Yp(t),e)for(t=0;t<e.length;t++)Yp(e[t])}}function fv(t,e){return t(e)}function pv(){}var ac=!1;function mv(t,e,n){if(ac)return t(e,n);ac=!0;try{return fv(t,e,n)}finally{ac=!1,(wi!==null||Ei!==null)&&(pv(),dv())}}function Gs(t,e){var n=t.stateNode;if(n===null)return null;var r=iu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var fh=!1;if(yn)try{var as={};Object.defineProperty(as,"passive",{get:function(){fh=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{fh=!1}function d1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ns=!1,rl=null,il=!1,ph=null,f1={onError:function(t){Ns=!0,rl=t}};function p1(t,e,n,r,i,s,o,a,l){Ns=!1,rl=null,d1.apply(f1,arguments)}function m1(t,e,n,r,i,s,o,a,l){if(p1.apply(this,arguments),Ns){if(Ns){var u=rl;Ns=!1,rl=null}else throw Error(C(198));il||(il=!0,ph=u)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xp(t){if(Wr(t)!==t)throw Error(C(188))}function g1(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xp(i),t;if(s===r)return Xp(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function yv(t){return t=g1(t),t!==null?vv(t):null}function vv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vv(t);if(e!==null)return e;t=t.sibling}return null}var _v=wt.unstable_scheduleCallback,Jp=wt.unstable_cancelCallback,y1=wt.unstable_shouldYield,v1=wt.unstable_requestPaint,ye=wt.unstable_now,_1=wt.unstable_getCurrentPriorityLevel,Fd=wt.unstable_ImmediatePriority,wv=wt.unstable_UserBlockingPriority,sl=wt.unstable_NormalPriority,w1=wt.unstable_LowPriority,Ev=wt.unstable_IdlePriority,eu=null,Xt=null;function E1(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:S1,T1=Math.log,I1=Math.LN2;function S1(t){return t>>>=0,t===0?32:31-(T1(t)/I1|0)|0}var ua=64,ca=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ts(a):(s&=o,s!==0&&(r=Ts(s)))}else o=n&~i,o!==0?r=Ts(o):s!==0&&(r=Ts(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vt(e),i=1<<n,r|=t[n],e&=~i;return r}function A1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=A1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tv(){var t=ua;return ua<<=1,!(ua&4194240)&&(ua=64),t}function lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vt(e),t[e]=n}function C1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sv,Bd,Av,Rv,Cv,gh=!1,ha=[],zn=null,Hn=null,Wn=null,Qs=new Map,Ys=new Map,Dn=[],P1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zp(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Lo(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function k1(t,e,n,r,i){switch(e){case"focusin":return zn=ls(zn,t,e,n,r,i),!0;case"dragenter":return Hn=ls(Hn,t,e,n,r,i),!0;case"mouseover":return Wn=ls(Wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qs.set(s,ls(Qs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ys.set(s,ls(Ys.get(s)||null,t,e,n,r,i)),!0}return!1}function Pv(t){var e=_r(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=gv(n),e!==null){t.blockedOn=e,Cv(t.priority,function(){Av(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hh=r,n.target.dispatchEvent(r),hh=null}else return e=Lo(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function em(t,e,n){ja(t)&&n.delete(e)}function N1(){gh=!1,zn!==null&&ja(zn)&&(zn=null),Hn!==null&&ja(Hn)&&(Hn=null),Wn!==null&&ja(Wn)&&(Wn=null),Qs.forEach(em),Ys.forEach(em)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,N1)))}function Xs(t){function e(i){return us(i,t)}if(0<ha.length){us(ha[0],t);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zn!==null&&us(zn,t),Hn!==null&&us(Hn,t),Wn!==null&&us(Wn,t),Qs.forEach(e),Ys.forEach(e),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)Pv(n),n.blockedOn===null&&Dn.shift()}var Ti=Rn.ReactCurrentBatchConfig,al=!0;function x1(t,e,n,r){var i=J,s=Ti.transition;Ti.transition=null;try{J=1,zd(t,e,n,r)}finally{J=i,Ti.transition=s}}function D1(t,e,n,r){var i=J,s=Ti.transition;Ti.transition=null;try{J=4,zd(t,e,n,r)}finally{J=i,Ti.transition=s}}function zd(t,e,n,r){if(al){var i=yh(t,e,n,r);if(i===null)vc(t,e,r,ll,n),Zp(t,r);else if(k1(i,t,e,n,r))r.stopPropagation();else if(Zp(t,r),e&4&&-1<P1.indexOf(t)){for(;i!==null;){var s=Lo(i);if(s!==null&&Sv(s),s=yh(t,e,n,r),s===null&&vc(t,e,r,ll,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vc(t,e,r,null,n)}}var ll=null;function yh(t,e,n,r){if(ll=null,t=jd(r),t=_r(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_1()){case Fd:return 1;case wv:return 4;case sl:case w1:return 16;case Ev:return 536870912;default:return 16}default:return 16}}var jn=null,Hd=null,Fa=null;function Nv(){if(Fa)return Fa;var t,e=Hd,n=e.length,r,i="value"in jn?jn.value:jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fa=i.slice(t,1<r?1-r:void 0)}function $a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function tm(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?da:tm,this.isPropagationStopped=tm,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=St(Gi),Oo=ue({},Gi,{view:0,detail:0}),O1=St(Oo),uc,cc,cs,tu=ue({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(uc=t.screenX-cs.screenX,cc=t.screenY-cs.screenY):cc=uc=0,cs=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:cc}}),nm=St(tu),L1=ue({},tu,{dataTransfer:0}),b1=St(L1),V1=ue({},Oo,{relatedTarget:0}),hc=St(V1),M1=ue({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=St(M1),j1=ue({},Gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F1=St(j1),$1=ue({},Gi,{data:0}),rm=St($1),B1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H1[t])?!!e[t]:!1}function qd(){return W1}var q1=ue({},Oo,{key:function(t){if(t.key){var e=B1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qd,charCode:function(t){return t.type==="keypress"?$a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K1=St(q1),G1=ue({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=St(G1),Q1=ue({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qd}),Y1=St(Q1),X1=ue({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),J1=St(X1),Z1=ue({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eI=St(Z1),tI=[9,13,27,32],Kd=yn&&"CompositionEvent"in window,xs=null;yn&&"documentMode"in document&&(xs=document.documentMode);var nI=yn&&"TextEvent"in window&&!xs,xv=yn&&(!Kd||xs&&8<xs&&11>=xs),sm=String.fromCharCode(32),om=!1;function Dv(t,e){switch(t){case"keyup":return tI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ov(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ai=!1;function rI(t,e){switch(t){case"compositionend":return Ov(e);case"keypress":return e.which!==32?null:(om=!0,sm);case"textInput":return t=e.data,t===sm&&om?null:t;default:return null}}function iI(t,e){if(ai)return t==="compositionend"||!Kd&&Dv(t,e)?(t=Nv(),Fa=Hd=jn=null,ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xv&&e.locale!=="ko"?null:e.data;default:return null}}var sI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sI[t.type]:e==="textarea"}function Lv(t,e,n,r){hv(r),e=ul(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,Js=null;function oI(t){Wv(t,0)}function nu(t){var e=ci(t);if(iv(e))return t}function aI(t,e){if(t==="change")return e}var bv=!1;if(yn){var dc;if(yn){var fc="oninput"in document;if(!fc){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),fc=typeof lm.oninput=="function"}dc=fc}else dc=!1;bv=dc&&(!document.documentMode||9<document.documentMode)}function um(){Ds&&(Ds.detachEvent("onpropertychange",Vv),Js=Ds=null)}function Vv(t){if(t.propertyName==="value"&&nu(Js)){var e=[];Lv(e,Js,t,jd(t)),mv(oI,e)}}function lI(t,e,n){t==="focusin"?(um(),Ds=e,Js=n,Ds.attachEvent("onpropertychange",Vv)):t==="focusout"&&um()}function uI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Js)}function cI(t,e){if(t==="click")return nu(e)}function hI(t,e){if(t==="input"||t==="change")return nu(e)}function dI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:dI;function Zs(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zc.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,e){var n=cm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cm(n)}}function Mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uv(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fI(t){var e=Uv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mv(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hm(n,s);var o=hm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pI=yn&&"documentMode"in document&&11>=document.documentMode,li=null,vh=null,Os=null,_h=!1;function dm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||li==null||li!==nl(r)||(r=li,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Zs(Os,r)||(Os=r,r=ul(vh,"onSelect"),0<r.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=li)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},pc={},jv={};yn&&(jv=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function ru(t){if(pc[t])return pc[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jv)return pc[t]=e[n];return t}var Fv=ru("animationend"),$v=ru("animationiteration"),Bv=ru("animationstart"),zv=ru("transitionend"),Hv=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){Hv.set(t,e),Hr(e,[t])}for(var mc=0;mc<fm.length;mc++){var gc=fm[mc],mI=gc.toLowerCase(),gI=gc[0].toUpperCase()+gc.slice(1);ar(mI,"on"+gI)}ar(Fv,"onAnimationEnd");ar($v,"onAnimationIteration");ar(Bv,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(zv,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function pm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,m1(r,e,void 0,t),t.currentTarget=null}function Wv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;pm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;pm(i,a,u),s=l}}}if(il)throw t=ph,il=!1,ph=null,t}function te(t,e){var n=e[Sh];n===void 0&&(n=e[Sh]=new Set);var r=t+"__bubble";n.has(r)||(qv(e,t,2,!1),n.add(r))}function yc(t,e,n){var r=0;e&&(r|=4),qv(n,t,r,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[pa]){t[pa]=!0,Zy.forEach(function(n){n!=="selectionchange"&&(yI.has(n)||yc(n,!1,t),yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,yc("selectionchange",!1,e))}}function qv(t,e,n,r){switch(kv(e)){case 1:var i=x1;break;case 4:i=D1;break;default:i=zd}n=i.bind(null,e,n,t),i=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_r(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}mv(function(){var u=s,c=jd(n),h=[];e:{var f=Hv.get(t);if(f!==void 0){var m=Wd,v=t;switch(t){case"keypress":if($a(n)===0)break e;case"keydown":case"keyup":m=K1;break;case"focusin":v="focus",m=hc;break;case"focusout":v="blur",m=hc;break;case"beforeblur":case"afterblur":m=hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=b1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Y1;break;case Fv:case $v:case Bv:m=U1;break;case zv:m=J1;break;case"scroll":m=O1;break;case"wheel":m=eI;break;case"copy":case"cut":case"paste":m=F1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=im}var _=(e&4)!==0,T=!_&&t==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=Gs(p,g),E!=null&&_.push(to(p,E,y)))),T)break;p=p.return}0<_.length&&(f=new m(f,v,null,n,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==hh&&(v=n.relatedTarget||n.fromElement)&&(_r(v)||v[vn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?_r(v):null,v!==null&&(T=Wr(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=nm,E="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=im,E="onPointerLeave",g="onPointerEnter",p="pointer"),T=m==null?f:ci(m),y=v==null?f:ci(v),f=new _(E,p+"leave",m,n,c),f.target=T,f.relatedTarget=y,E=null,_r(c)===u&&(_=new _(g,p+"enter",v,n,c),_.target=y,_.relatedTarget=T,E=_),T=E,m&&v)t:{for(_=m,g=v,p=0,y=_;y;y=ei(y))p++;for(y=0,E=g;E;E=ei(E))y++;for(;0<p-y;)_=ei(_),p--;for(;0<y-p;)g=ei(g),y--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=ei(_),g=ei(g)}_=null}else _=null;m!==null&&mm(h,f,m,_,!1),v!==null&&T!==null&&mm(h,T,v,_,!0)}}e:{if(f=u?ci(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var S=aI;else if(am(f))if(bv)S=hI;else{S=uI;var I=lI}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=cI);if(S&&(S=S(t,u))){Lv(h,S,n,c);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&oh(f,"number",f.value)}switch(I=u?ci(u):window,t){case"focusin":(am(I)||I.contentEditable==="true")&&(li=I,vh=u,Os=null);break;case"focusout":Os=vh=li=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,dm(h,n,c);break;case"selectionchange":if(pI)break;case"keydown":case"keyup":dm(h,n,c)}var P;if(Kd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ai?Dv(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(xv&&n.locale!=="ko"&&(ai||k!=="onCompositionStart"?k==="onCompositionEnd"&&ai&&(P=Nv()):(jn=c,Hd="value"in jn?jn.value:jn.textContent,ai=!0)),I=ul(u,k),0<I.length&&(k=new rm(k,t,null,n,c),h.push({event:k,listeners:I}),P?k.data=P:(P=Ov(n),P!==null&&(k.data=P)))),(P=nI?rI(t,n):iI(t,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(c=new rm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}Wv(h,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gs(t,n),s!=null&&r.unshift(to(t,s,i)),s=Gs(t,e),s!=null&&r.push(to(t,s,i))),t=t.return}return r}function ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Gs(n,s),l!=null&&o.unshift(to(n,l,a))):i||(l=Gs(n,s),l!=null&&o.push(to(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vI=/\r\n?/g,_I=/\u0000|\uFFFD/g;function gm(t){return(typeof t=="string"?t:""+t).replace(vI,`
`).replace(_I,"")}function ma(t,e,n){if(e=gm(e),gm(t)!==e&&n)throw Error(C(425))}function cl(){}var wh=null,Eh=null;function Th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,wI=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,EI=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(t){return ym.resolve(null).then(t).catch(TI)}:Ih;function TI(t){setTimeout(function(){throw t})}function _c(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xs(e)}function qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),qt="__reactFiber$"+Qi,no="__reactProps$"+Qi,vn="__reactContainer$"+Qi,Sh="__reactEvents$"+Qi,II="__reactListeners$"+Qi,SI="__reactHandles$"+Qi;function _r(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vm(t);t!==null;){if(n=t[qt])return n;t=vm(t)}return e}t=n,n=t.parentNode}return null}function Lo(t){return t=t[qt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function iu(t){return t[no]||null}var Ah=[],hi=-1;function lr(t){return{current:t}}function re(t){0>hi||(t.current=Ah[hi],Ah[hi]=null,hi--)}function ee(t,e){hi++,Ah[hi]=t.current,t.current=e}var nr={},Ye=lr(nr),ut=lr(!1),xr=nr;function xi(t,e){var n=t.type.contextTypes;if(!n)return nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function hl(){re(ut),re(Ye)}function _m(t,e,n){if(Ye.current!==nr)throw Error(C(168));ee(Ye,e),ee(ut,n)}function Kv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,l1(t)||"Unknown",i));return ue({},n,r)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,xr=Ye.current,ee(Ye,t),ee(ut,ut.current),!0}function wm(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Kv(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,re(ut),re(Ye),ee(Ye,t)):re(ut),ee(ut,n)}var cn=null,su=!1,wc=!1;function Gv(t){cn===null?cn=[t]:cn.push(t)}function AI(t){su=!0,Gv(t)}function ur(){if(!wc&&cn!==null){wc=!0;var t=0,e=J;try{var n=cn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cn=null,su=!1}catch(i){throw cn!==null&&(cn=cn.slice(t+1)),_v(Fd,ur),i}finally{J=e,wc=!1}}return null}var di=[],fi=0,fl=null,pl=0,At=[],Rt=0,Dr=null,hn=1,dn="";function gr(t,e){di[fi++]=pl,di[fi++]=fl,fl=t,pl=e}function Qv(t,e,n){At[Rt++]=hn,At[Rt++]=dn,At[Rt++]=Dr,Dr=t;var r=hn;t=dn;var i=32-Vt(r)-1;r&=~(1<<i),n+=1;var s=32-Vt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hn=1<<32-Vt(e)+i|n<<i|r,dn=s+t}else hn=1<<s|n<<i|r,dn=t}function Qd(t){t.return!==null&&(gr(t,1),Qv(t,1,0))}function Yd(t){for(;t===fl;)fl=di[--fi],di[fi]=null,pl=di[--fi],di[fi]=null;for(;t===Dr;)Dr=At[--Rt],At[Rt]=null,dn=At[--Rt],At[Rt]=null,hn=At[--Rt],At[Rt]=null}var yt=null,pt=null,se=!1,bt=null;function Yv(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,pt=qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:hn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,pt=null,!0):!1;default:return!1}}function Rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(se){var e=pt;if(e){var n=e;if(!Em(t,e)){if(Rh(t))throw Error(C(418));e=qn(n.nextSibling);var r=yt;e&&Em(t,e)?Yv(r,n):(t.flags=t.flags&-4097|2,se=!1,yt=t)}}else{if(Rh(t))throw Error(C(418));t.flags=t.flags&-4097|2,se=!1,yt=t}}}function Tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function ga(t){if(t!==yt)return!1;if(!se)return Tm(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Th(t.type,t.memoizedProps)),e&&(e=pt)){if(Rh(t))throw Xv(),Error(C(418));for(;e;)Yv(t,e),e=qn(e.nextSibling)}if(Tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pt=qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pt=null}}else pt=yt?qn(t.stateNode.nextSibling):null;return!0}function Xv(){for(var t=pt;t;)t=qn(t.nextSibling)}function Di(){pt=yt=null,se=!1}function Xd(t){bt===null?bt=[t]:bt.push(t)}var RI=Rn.ReactCurrentBatchConfig;function Ot(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ml=lr(null),gl=null,pi=null,Jd=null;function Zd(){Jd=pi=gl=null}function ef(t){var e=ml.current;re(ml),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ii(t,e){gl=t,Jd=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lt=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(Jd!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(gl===null)throw Error(C(308));pi=t,gl.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var wr=null;function tf(t){wr===null?wr=[t]:wr.push(t)}function Jv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tf(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xn=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,tf(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function Ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$d(t,n)}}function Im(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yl(t,e,n,r){var i=t.updateQueue;xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,h,f):v,f==null)break e;h=ue({},h,f);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=h}}function Sm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var e_=new Jy.Component().refs;function kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ou={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Qn(t),s=gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Kn(t,s,i),e!==null&&(Mt(e,t,i,r),Ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Qn(t),s=gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kn(t,s,i),e!==null&&(Mt(e,t,i,r),Ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=Qn(t),i=gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Kn(t,i,r),e!==null&&(Mt(e,t,r,n),Ba(e,t,r))}};function Am(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,s):!0}function t_(t,e,n){var r=!1,i=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=ct(e)?xr:Ye.current,r=e.contextTypes,s=(r=r!=null)?xi(t,i):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ou,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ou.enqueueReplaceState(e,e.state,null)}function Nh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=e_,nf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=ct(e)?xr:Ye.current,i.context=xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ou.enqueueReplaceState(i,i.state,null),yl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===e_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cm(t){var e=t._init;return e(t._payload)}function n_(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Yn(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,E){return p===null||p.tag!==6?(p=Cc(y,g.mode,E),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,E){var S=y.type;return S===oi?c(g,p,y.props.children,E,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nn&&Cm(S)===p.type)?(E=i(p,y.props),E.ref=hs(g,p,y),E.return=g,E):(E=Ga(y.type,y.key,y.props,null,g.mode,E),E.ref=hs(g,p,y),E.return=g,E)}function u(g,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Pc(y,g.mode,E),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function c(g,p,y,E,S){return p===null||p.tag!==7?(p=Rr(y,g.mode,E,S),p.return=g,p):(p=i(p,y),p.return=g,p)}function h(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Cc(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oa:return y=Ga(p.type,p.key,p.props,null,g.mode,y),y.ref=hs(g,null,p),y.return=g,y;case si:return p=Pc(p,g.mode,y),p.return=g,p;case Nn:var E=p._init;return h(g,E(p._payload),y)}if(Es(p)||os(p))return p=Rr(p,g.mode,y,null),p.return=g,p;ya(g,p)}return null}function f(g,p,y,E){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(g,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oa:return y.key===S?l(g,p,y,E):null;case si:return y.key===S?u(g,p,y,E):null;case Nn:return S=y._init,f(g,p,S(y._payload),E)}if(Es(y)||os(y))return S!==null?null:c(g,p,y,E,null);ya(g,y)}return null}function m(g,p,y,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(p,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case oa:return g=g.get(E.key===null?y:E.key)||null,l(p,g,E,S);case si:return g=g.get(E.key===null?y:E.key)||null,u(p,g,E,S);case Nn:var I=E._init;return m(g,p,y,I(E._payload),S)}if(Es(E)||os(E))return g=g.get(y)||null,c(p,g,E,S,null);ya(p,E)}return null}function v(g,p,y,E){for(var S=null,I=null,P=p,k=p=0,W=null;P!==null&&k<y.length;k++){P.index>k?(W=P,P=null):W=P.sibling;var j=f(g,P,y[k],E);if(j===null){P===null&&(P=W);break}t&&P&&j.alternate===null&&e(g,P),p=s(j,p,k),I===null?S=j:I.sibling=j,I=j,P=W}if(k===y.length)return n(g,P),se&&gr(g,k),S;if(P===null){for(;k<y.length;k++)P=h(g,y[k],E),P!==null&&(p=s(P,p,k),I===null?S=P:I.sibling=P,I=P);return se&&gr(g,k),S}for(P=r(g,P);k<y.length;k++)W=m(P,g,k,y[k],E),W!==null&&(t&&W.alternate!==null&&P.delete(W.key===null?k:W.key),p=s(W,p,k),I===null?S=W:I.sibling=W,I=W);return t&&P.forEach(function(dt){return e(g,dt)}),se&&gr(g,k),S}function _(g,p,y,E){var S=os(y);if(typeof S!="function")throw Error(C(150));if(y=S.call(y),y==null)throw Error(C(151));for(var I=S=null,P=p,k=p=0,W=null,j=y.next();P!==null&&!j.done;k++,j=y.next()){P.index>k?(W=P,P=null):W=P.sibling;var dt=f(g,P,j.value,E);if(dt===null){P===null&&(P=W);break}t&&P&&dt.alternate===null&&e(g,P),p=s(dt,p,k),I===null?S=dt:I.sibling=dt,I=dt,P=W}if(j.done)return n(g,P),se&&gr(g,k),S;if(P===null){for(;!j.done;k++,j=y.next())j=h(g,j.value,E),j!==null&&(p=s(j,p,k),I===null?S=j:I.sibling=j,I=j);return se&&gr(g,k),S}for(P=r(g,P);!j.done;k++,j=y.next())j=m(P,g,k,j.value,E),j!==null&&(t&&j.alternate!==null&&P.delete(j.key===null?k:j.key),p=s(j,p,k),I===null?S=j:I.sibling=j,I=j);return t&&P.forEach(function(fr){return e(g,fr)}),se&&gr(g,k),S}function T(g,p,y,E){if(typeof y=="object"&&y!==null&&y.type===oi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oa:e:{for(var S=y.key,I=p;I!==null;){if(I.key===S){if(S=y.type,S===oi){if(I.tag===7){n(g,I.sibling),p=i(I,y.props.children),p.return=g,g=p;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nn&&Cm(S)===I.type){n(g,I.sibling),p=i(I,y.props),p.ref=hs(g,I,y),p.return=g,g=p;break e}n(g,I);break}else e(g,I);I=I.sibling}y.type===oi?(p=Rr(y.props.children,g.mode,E,y.key),p.return=g,g=p):(E=Ga(y.type,y.key,y.props,null,g.mode,E),E.ref=hs(g,p,y),E.return=g,g=E)}return o(g);case si:e:{for(I=y.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Pc(y,g.mode,E),p.return=g,g=p}return o(g);case Nn:return I=y._init,T(g,p,I(y._payload),E)}if(Es(y))return v(g,p,y,E);if(os(y))return _(g,p,y,E);ya(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=Cc(y,g.mode,E),p.return=g,g=p),o(g)):n(g,p)}return T}var Oi=n_(!0),r_=n_(!1),bo={},Jt=lr(bo),ro=lr(bo),io=lr(bo);function Er(t){if(t===bo)throw Error(C(174));return t}function rf(t,e){switch(ee(io,e),ee(ro,t),ee(Jt,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}re(Jt),ee(Jt,e)}function Li(){re(Jt),re(ro),re(io)}function i_(t){Er(io.current);var e=Er(Jt.current),n=lh(e,t.type);e!==n&&(ee(ro,t),ee(Jt,n))}function sf(t){ro.current===t&&(re(Jt),re(ro))}var oe=lr(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ec=[];function of(){for(var t=0;t<Ec.length;t++)Ec[t]._workInProgressVersionPrimary=null;Ec.length=0}var za=Rn.ReactCurrentDispatcher,Tc=Rn.ReactCurrentBatchConfig,Or=0,ae=null,Ie=null,ke=null,_l=!1,Ls=!1,so=0,CI=0;function Be(){throw Error(C(321))}function af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function lf(t,e,n,r,i,s){if(Or=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,za.current=t===null||t.memoizedState===null?xI:DI,t=n(r,i),Ls){s=0;do{if(Ls=!1,so=0,25<=s)throw Error(C(301));s+=1,ke=Ie=null,e.updateQueue=null,za.current=OI,t=n(r,i)}while(Ls)}if(za.current=wl,e=Ie!==null&&Ie.next!==null,Or=0,ke=Ie=ae=null,_l=!1,e)throw Error(C(300));return t}function uf(){var t=so!==0;return so=0,t}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ae.memoizedState=ke=t:ke=ke.next=t,ke}function xt(){if(Ie===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=ke===null?ae.memoizedState:ke.next;if(e!==null)ke=e,Ie=t;else{if(t===null)throw Error(C(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ke===null?ae.memoizedState=ke=t:ke=ke.next=t}return ke}function oo(t,e){return typeof e=="function"?e(t):e}function Ic(t){var e=xt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Or&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,Lr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ft(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,Lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sc(t){var e=xt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function s_(){}function o_(t,e){var n=ae,r=xt(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,cf(u_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,ao(9,l_.bind(null,n,r,i,e),void 0,null),Ne===null)throw Error(C(349));Or&30||a_(n,e,i)}return i}function a_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l_(t,e,n,r){e.value=n,e.getSnapshot=r,c_(e)&&h_(t)}function u_(t,e,n){return n(function(){c_(e)&&h_(t)})}function c_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function h_(t){var e=_n(t,1);e!==null&&Mt(e,t,1,-1)}function Pm(t){var e=Wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=NI.bind(null,ae,t),[e.memoizedState,t]}function ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function d_(){return xt().memoizedState}function Ha(t,e,n,r){var i=Wt();ae.flags|=t,i.memoizedState=ao(1|e,n,void 0,r===void 0?null:r)}function au(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&af(r,o.deps)){i.memoizedState=ao(e,n,s,r);return}}ae.flags|=t,i.memoizedState=ao(1|e,n,s,r)}function km(t,e){return Ha(8390656,8,t,e)}function cf(t,e){return au(2048,8,t,e)}function f_(t,e){return au(4,2,t,e)}function p_(t,e){return au(4,4,t,e)}function m_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g_(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,m_.bind(null,e,t),n)}function hf(){}function y_(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function __(t,e,n){return Or&21?(Ft(n,e)||(n=Tv(),ae.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=n)}function PI(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Tc.transition;Tc.transition={};try{t(!1),e()}finally{J=n,Tc.transition=r}}function w_(){return xt().memoizedState}function kI(t,e,n){var r=Qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},E_(t))T_(e,n);else if(n=Jv(t,e,n,r),n!==null){var i=rt();Mt(n,t,r,i),I_(n,e,r)}}function NI(t,e,n){var r=Qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(E_(t))T_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ft(a,o)){var l=e.interleaved;l===null?(i.next=i,tf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Jv(t,e,i,r),n!==null&&(i=rt(),Mt(n,t,r,i),I_(n,e,r))}}function E_(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function T_(t,e){Ls=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$d(t,n)}}var wl={readContext:Nt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},xI={readContext:Nt,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,m_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=Wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kI.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:Pm,useDebugValue:hf,useDeferredValue:function(t){return Wt().memoizedState=t},useTransition:function(){var t=Pm(!1),e=t[0];return t=PI.bind(null,t[1]),Wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Wt();if(se){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ne===null)throw Error(C(349));Or&30||a_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,km(u_.bind(null,r,s,t),[t]),r.flags|=2048,ao(9,l_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wt(),e=Ne.identifierPrefix;if(se){var n=dn,r=hn;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DI={readContext:Nt,useCallback:y_,useContext:Nt,useEffect:cf,useImperativeHandle:g_,useInsertionEffect:f_,useLayoutEffect:p_,useMemo:v_,useReducer:Ic,useRef:d_,useState:function(){return Ic(oo)},useDebugValue:hf,useDeferredValue:function(t){var e=xt();return __(e,Ie.memoizedState,t)},useTransition:function(){var t=Ic(oo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:w_,unstable_isNewReconciler:!1},OI={readContext:Nt,useCallback:y_,useContext:Nt,useEffect:cf,useImperativeHandle:g_,useInsertionEffect:f_,useLayoutEffect:p_,useMemo:v_,useReducer:Sc,useRef:d_,useState:function(){return Sc(oo)},useDebugValue:hf,useDeferredValue:function(t){var e=xt();return Ie===null?e.memoizedState=t:__(e,Ie.memoizedState,t)},useTransition:function(){var t=Sc(oo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:o_,useId:w_,unstable_isNewReconciler:!1};function bi(t,e){try{var n="",r=e;do n+=a1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LI=typeof WeakMap=="function"?WeakMap:Map;function S_(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tl||(Tl=!0,$h=r),xh(t,e)},n}function A_(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xh(t,e),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=GI.bind(null,t,e,n),e.then(t,t))}function xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Kn(n,e,1))),n.lanes|=1),t)}var bI=Rn.ReactCurrentOwner,lt=!1;function tt(t,e,n,r){e.child=t===null?r_(e,null,n,r):Oi(e,t.child,n,r)}function Om(t,e,n,r,i){n=n.render;var s=e.ref;return Ii(e,i),r=lf(t,e,n,r,s,i),n=uf(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(se&&n&&Qd(e),e.flags|=1,tt(t,e,r,i),e.child)}function Lm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,R_(t,e,s,r,i)):(t=Ga(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(o,r)&&t.ref===e.ref)return wn(t,e,i)}return e.flags|=1,t=Yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function R_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zs(s,r)&&t.ref===e.ref)if(lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(lt=!0);else return e.lanes=t.lanes,wn(t,e,i)}return Dh(t,e,n,r,i)}function C_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(gi,ft),ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(gi,ft),ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(gi,ft),ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(gi,ft),ft|=r;return tt(t,e,i,n),e.child}function P_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dh(t,e,n,r,i){var s=ct(n)?xr:Ye.current;return s=xi(e,s),Ii(e,i),n=lf(t,e,n,r,s,i),r=uf(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(se&&r&&Qd(e),e.flags|=1,tt(t,e,n,i),e.child)}function bm(t,e,n,r,i){if(ct(n)){var s=!0;dl(e)}else s=!1;if(Ii(e,i),e.stateNode===null)Wa(t,e),t_(e,n,r),Nh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nt(u):(u=ct(n)?xr:Ye.current,u=xi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rm(e,o,r,u),xn=!1;var f=e.memoizedState;o.state=f,yl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ut.current||xn?(typeof c=="function"&&(kh(e,n,c,r),l=e.memoizedState),(a=xn||Am(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Zv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ot(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nt(l):(l=ct(n)?xr:Ye.current,l=xi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Rm(e,o,r,l),xn=!1,f=e.memoizedState,o.state=f,yl(e,r,o,i);var v=e.memoizedState;a!==h||f!==v||ut.current||xn?(typeof m=="function"&&(kh(e,n,m,r),v=e.memoizedState),(u=xn||Am(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Oh(t,e,n,r,s,i)}function Oh(t,e,n,r,i,s){P_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wm(e,n,!1),wn(t,e,s);r=e.stateNode,bI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oi(e,t.child,null,s),e.child=Oi(e,null,a,s)):tt(t,e,a,s),e.memoizedState=r.state,i&&wm(e,n,!0),e.child}function k_(t){var e=t.stateNode;e.pendingContext?_m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_m(t,e.context,!1),rf(t,e.containerInfo)}function Vm(t,e,n,r,i){return Di(),Xd(i),e.flags|=256,tt(t,e,n,r),e.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function N_(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(oe,i&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cu(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bh(n),e.memoizedState=Lh,t):df(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return VI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yn(a,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lh,r}return s=t.child,t=s.sibling,r=Yn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function df(t,e){return e=cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function va(t,e,n,r){return r!==null&&Xd(r),Oi(e,t.child,null,n),t=df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ac(Error(C(422))),va(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=cu({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oi(e,t.child,null,o),e.child.memoizedState=bh(o),e.memoizedState=Lh,s);if(!(e.mode&1))return va(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Ac(s,r,void 0),va(t,e,o,r)}if(a=(o&t.childLanes)!==0,lt||a){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),Mt(r,t,i,-1))}return vf(),r=Ac(Error(C(421))),va(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pt=qn(i.nextSibling),yt=e,se=!0,bt=null,t!==null&&(At[Rt++]=hn,At[Rt++]=dn,At[Rt++]=Dr,hn=t.id,dn=t.overflow,Dr=e),e=df(e,r.children),e.flags|=4096,e)}function Mm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function Rc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function x_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mm(t,n,e);else if(t.tag===19)Mm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rc(e,!0,n,null,s);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function MI(t,e,n){switch(e.tag){case 3:k_(e),Di();break;case 5:i_(e);break;case 1:ct(e.type)&&dl(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?N_(t,e,n):(ee(oe,oe.current&1),t=wn(t,e,n),t!==null?t.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return x_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,C_(t,e,n)}return wn(t,e,n)}var D_,Vh,O_,L_;D_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vh=function(){};O_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Er(Jt.current);var s=null;switch(n){case"input":i=ih(t,i),r=ih(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=ah(t,i),r=ah(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cl)}uh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};L_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ds(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UI(t,e,n){var r=e.pendingProps;switch(Yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(e),null;case 1:return ct(e.type)&&hl(),ze(e),null;case 3:return r=e.stateNode,Li(),re(ut),re(Ye),of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bt!==null&&(Hh(bt),bt=null))),Vh(t,e),ze(e),null;case 5:sf(e);var i=Er(io.current);if(n=e.type,t!==null&&e.stateNode!=null)O_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return ze(e),null}if(t=Er(Jt.current),ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[no]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Is.length;i++)te(Is[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":qp(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Gp(r,s),te("invalid",r)}uh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,a,t),i=["children",""+a]):qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":aa(r),Kp(r,s,!0);break;case"textarea":aa(r),Qp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[no]=r,D_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ch(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Is.length;i++)te(Is[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":qp(t,r),i=ih(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),te("invalid",t);break;case"textarea":Gp(t,r),i=ah(t,r),te("invalid",t);break;default:i=r}uh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ks(t,l):typeof l=="number"&&Ks(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&bd(t,s,l,o))}switch(n){case"input":aa(t),Kp(t,r,!1);break;case"textarea":aa(t),Qp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_i(t,!!r.multiple,s,!1):r.defaultValue!=null&&_i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ze(e),null;case 6:if(t&&e.stateNode!=null)L_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Er(io.current),Er(Jt.current),ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return ze(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&pt!==null&&e.mode&1&&!(e.flags&128))Xv(),Di(),e.flags|=98560,s=!1;else if(s=ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[qt]=e}else Di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ze(e),s=!1}else bt!==null&&(Hh(bt),bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?Ae===0&&(Ae=3):vf())),e.updateQueue!==null&&(e.flags|=4),ze(e),null);case 4:return Li(),Vh(t,e),t===null&&eo(e.stateNode.containerInfo),ze(e),null;case 10:return ef(e.type._context),ze(e),null;case 17:return ct(e.type)&&hl(),ze(e),null;case 19:if(re(oe),s=e.memoizedState,s===null)return ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ds(s,!1);else{if(Ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,ds(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>Vi&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return ze(e),null}else 2*ye()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),e):(ze(e),null);case 22:case 23:return yf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ft&1073741824&&(ze(e),e.subtreeFlags&6&&(e.flags|=8192)):ze(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function jI(t,e){switch(Yd(e),e.tag){case 1:return ct(e.type)&&hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Li(),re(ut),re(Ye),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sf(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return Li(),null;case 10:return ef(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var _a=!1,qe=!1,FI=typeof WeakSet=="function"?WeakSet:Set,x=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function Mh(t,e,n){try{n()}catch(r){he(t,e,r)}}var Um=!1;function $I(t,e){if(wh=al,t=Uv(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eh={focusedElem:t,selectionRange:n},al=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,T=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ot(e.type,_),T);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){he(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=Um,Um=!1,v}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mh(e,n,s)}i=i.next}while(i!==r)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b_(t){var e=t.alternate;e!==null&&(t.alternate=null,b_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[no],delete e[Sh],delete e[II],delete e[SI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V_(t){return t.tag===5||t.tag===3||t.tag===4}function jm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}var Le=null,Lt=!1;function Pn(t,e,n){for(n=n.child;n!==null;)M_(t,e,n),n=n.sibling}function M_(t,e,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:qe||mi(n,e);case 6:var r=Le,i=Lt;Le=null,Pn(t,e,n),Le=r,Lt=i,Le!==null&&(Lt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Lt?(t=Le,n=n.stateNode,t.nodeType===8?_c(t.parentNode,n):t.nodeType===1&&_c(t,n),Xs(t)):_c(Le,n.stateNode));break;case 4:r=Le,i=Lt,Le=n.stateNode.containerInfo,Lt=!0,Pn(t,e,n),Le=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mh(n,e,o),i=i.next}while(i!==r)}Pn(t,e,n);break;case 1:if(!qe&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,e,a)}Pn(t,e,n);break;case 21:Pn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Pn(t,e,n),qe=r):Pn(t,e,n);break;default:Pn(t,e,n)}}function Fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FI),e.forEach(function(r){var i=YI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Lt=!1;break e;case 3:Le=a.stateNode.containerInfo,Lt=!0;break e;case 4:Le=a.stateNode.containerInfo,Lt=!0;break e}a=a.return}if(Le===null)throw Error(C(160));M_(s,o,i),Le=null,Lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){he(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U_(e,t),e=e.sibling}function U_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),zt(t),r&4){try{bs(3,t,t.return),lu(3,t)}catch(_){he(t,t.return,_)}try{bs(5,t,t.return)}catch(_){he(t,t.return,_)}}break;case 1:Dt(e,t),zt(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(Dt(e,t),zt(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var i=t.stateNode;try{Ks(i,"")}catch(_){he(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sv(i,s),ch(a,o);var u=ch(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?cv(i,h):c==="dangerouslySetInnerHTML"?lv(i,h):c==="children"?Ks(i,h):bd(i,c,h,u)}switch(a){case"input":sh(i,s);break;case"textarea":ov(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?_i(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?_i(i,!!s.multiple,s.defaultValue,!0):_i(i,!!s.multiple,s.multiple?[]:"",!1))}i[no]=s}catch(_){he(t,t.return,_)}}break;case 6:if(Dt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){he(t,t.return,_)}}break;case 3:if(Dt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(_){he(t,t.return,_)}break;case 4:Dt(e,t),zt(t);break;case 13:Dt(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mf=ye())),r&4&&Fm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||c,Dt(e,t),qe=u):Dt(e,t),zt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(h=x=c;x!==null;){switch(f=x,m=f.child,f.tag){case 0:case 11:case 14:case 15:bs(4,f,f.return);break;case 1:mi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){he(r,n,_)}}break;case 5:mi(f,f.return);break;case 22:if(f.memoizedState!==null){Bm(h);continue}}m!==null?(m.return=f,x=m):Bm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uv("display",o))}catch(_){he(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){he(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dt(e,t),zt(t),r&4&&Fm(t);break;case 21:break;default:Dt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V_(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ks(i,""),r.flags&=-33);var s=jm(t);Fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=jm(t);jh(t,a,o);break;default:throw Error(C(161))}}catch(l){he(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BI(t,e,n){x=t,j_(t)}function j_(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_a;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=_a;var u=qe;if(_a=o,(qe=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?zm(i):l!==null?(l.return=o,x=l):zm(i);for(;s!==null;)x=s,j_(s),s=s.sibling;x=i,_a=a,qe=u}$m(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):$m(t)}}function $m(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||lu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Xs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}qe||e.flags&512&&Uh(e)}catch(f){he(e,e.return,f)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Bm(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function zm(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){he(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){he(e,i,l)}}var s=e.return;try{Uh(e)}catch(l){he(e,s,l)}break;case 5:var o=e.return;try{Uh(e)}catch(l){he(e,o,l)}}}catch(l){he(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var zI=Math.ceil,El=Rn.ReactCurrentDispatcher,ff=Rn.ReactCurrentOwner,kt=Rn.ReactCurrentBatchConfig,Y=0,Ne=null,Ee=null,Ue=0,ft=0,gi=lr(0),Ae=0,lo=null,Lr=0,uu=0,pf=0,Vs=null,ot=null,mf=0,Vi=1/0,un=null,Tl=!1,$h=null,Gn=null,wa=!1,Fn=null,Il=0,Ms=0,Bh=null,qa=-1,Ka=0;function rt(){return Y&6?ye():qa!==-1?qa:qa=ye()}function Qn(t){return t.mode&1?Y&2&&Ue!==0?Ue&-Ue:RI.transition!==null?(Ka===0&&(Ka=Tv()),Ka):(t=J,t!==0||(t=window.event,t=t===void 0?16:kv(t.type)),t):1}function Mt(t,e,n,r){if(50<Ms)throw Ms=0,Bh=null,Error(C(185));Do(t,n,r),(!(Y&2)||t!==Ne)&&(t===Ne&&(!(Y&2)&&(uu|=n),Ae===4&&On(t,Ue)),ht(t,r),n===1&&Y===0&&!(e.mode&1)&&(Vi=ye()+500,su&&ur()))}function ht(t,e){var n=t.callbackNode;R1(t,e);var r=ol(t,t===Ne?Ue:0);if(r===0)n!==null&&Jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jp(n),e===1)t.tag===0?AI(Hm.bind(null,t)):Gv(Hm.bind(null,t)),EI(function(){!(Y&6)&&ur()}),n=null;else{switch(Iv(r)){case 1:n=Fd;break;case 4:n=wv;break;case 16:n=sl;break;case 536870912:n=Ev;break;default:n=sl}n=K_(n,F_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F_(t,e){if(qa=-1,Ka=0,Y&6)throw Error(C(327));var n=t.callbackNode;if(Si()&&t.callbackNode!==n)return null;var r=ol(t,t===Ne?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sl(t,r);else{e=r;var i=Y;Y|=2;var s=B_();(Ne!==t||Ue!==e)&&(un=null,Vi=ye()+500,Ar(t,e));do try{qI();break}catch(a){$_(t,a)}while(1);Zd(),El.current=s,Y=i,Ee!==null?e=0:(Ne=null,Ue=0,e=Ae)}if(e!==0){if(e===2&&(i=mh(t),i!==0&&(r=i,e=zh(t,i))),e===1)throw n=lo,Ar(t,0),On(t,r),ht(t,ye()),n;if(e===6)On(t,r);else{if(i=t.current.alternate,!(r&30)&&!HI(i)&&(e=Sl(t,r),e===2&&(s=mh(t),s!==0&&(r=s,e=zh(t,s))),e===1))throw n=lo,Ar(t,0),On(t,r),ht(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:yr(t,ot,un);break;case 3:if(On(t,r),(r&130023424)===r&&(e=mf+500-ye(),10<e)){if(ol(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ih(yr.bind(null,t,ot,un),e);break}yr(t,ot,un);break;case 4:if(On(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Vt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zI(r/1960))-r,10<r){t.timeoutHandle=Ih(yr.bind(null,t,ot,un),r);break}yr(t,ot,un);break;case 5:yr(t,ot,un);break;default:throw Error(C(329))}}}return ht(t,ye()),t.callbackNode===n?F_.bind(null,t):null}function zh(t,e){var n=Vs;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=ot,ot=n,e!==null&&Hh(e)),t}function Hh(t){ot===null?ot=t:ot.push.apply(ot,t)}function HI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function On(t,e){for(e&=~pf,e&=~uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vt(e),r=1<<n;t[n]=-1,e&=~r}}function Hm(t){if(Y&6)throw Error(C(327));Si();var e=ol(t,0);if(!(e&1))return ht(t,ye()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var r=mh(t);r!==0&&(e=r,n=zh(t,r))}if(n===1)throw n=lo,Ar(t,0),On(t,e),ht(t,ye()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,ot,un),ht(t,ye()),null}function gf(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(Vi=ye()+500,su&&ur())}}function br(t){Fn!==null&&Fn.tag===0&&!(Y&6)&&Si();var e=Y;Y|=1;var n=kt.transition,r=J;try{if(kt.transition=null,J=1,t)return t()}finally{J=r,kt.transition=n,Y=e,!(Y&6)&&ur()}}function yf(){ft=gi.current,re(gi)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wI(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hl();break;case 3:Li(),re(ut),re(Ye),of();break;case 5:sf(r);break;case 4:Li();break;case 13:re(oe);break;case 19:re(oe);break;case 10:ef(r.type._context);break;case 22:case 23:yf()}n=n.return}if(Ne=t,Ee=t=Yn(t.current,null),Ue=ft=e,Ae=0,lo=null,pf=uu=Lr=0,ot=Vs=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wr=null}return t}function $_(t,e){do{var n=Ee;try{if(Zd(),za.current=wl,_l){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_l=!1}if(Or=0,ke=Ie=ae=null,Ls=!1,so=0,ff.current=null,n===null||n.return===null){Ae=1,lo=e,Ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=xm(o);if(m!==null){m.flags&=-257,Dm(m,o,a,s,e),m.mode&1&&Nm(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Nm(s,u,e),vf();break e}l=Error(C(426))}}else if(se&&a.mode&1){var T=xm(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Dm(T,o,a,s,e),Xd(bi(l,a));break e}}s=l=bi(l,a),Ae!==4&&(Ae=2),Vs===null?Vs=[s]:Vs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=S_(s,l,e);Im(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Gn===null||!Gn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=A_(s,a,e);Im(s,E);break e}}s=s.return}while(s!==null)}H_(n)}catch(S){e=S,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function B_(){var t=El.current;return El.current=wl,t===null?wl:t}function vf(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ne===null||!(Lr&268435455)&&!(uu&268435455)||On(Ne,Ue)}function Sl(t,e){var n=Y;Y|=2;var r=B_();(Ne!==t||Ue!==e)&&(un=null,Ar(t,e));do try{WI();break}catch(i){$_(t,i)}while(1);if(Zd(),Y=n,El.current=r,Ee!==null)throw Error(C(261));return Ne=null,Ue=0,Ae}function WI(){for(;Ee!==null;)z_(Ee)}function qI(){for(;Ee!==null&&!y1();)z_(Ee)}function z_(t){var e=q_(t.alternate,t,ft);t.memoizedProps=t.pendingProps,e===null?H_(t):Ee=e,ff.current=null}function H_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jI(n,e),n!==null){n.flags&=32767,Ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,Ee=null;return}}else if(n=UI(n,e,ft),n!==null){Ee=n;return}if(e=e.sibling,e!==null){Ee=e;return}Ee=e=t}while(e!==null);Ae===0&&(Ae=5)}function yr(t,e,n){var r=J,i=kt.transition;try{kt.transition=null,J=1,KI(t,e,n,r)}finally{kt.transition=i,J=r}return null}function KI(t,e,n,r){do Si();while(Fn!==null);if(Y&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C1(t,s),t===Ne&&(Ee=Ne=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,K_(sl,function(){return Si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=J;J=1;var a=Y;Y|=4,ff.current=null,$I(t,n),U_(n,t),fI(Eh),al=!!wh,Eh=wh=null,t.current=n,BI(n),v1(),Y=a,J=o,kt.transition=s}else t.current=n;if(wa&&(wa=!1,Fn=t,Il=i),s=t.pendingLanes,s===0&&(Gn=null),E1(n.stateNode),ht(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tl)throw Tl=!1,t=$h,$h=null,t;return Il&1&&t.tag!==0&&Si(),s=t.pendingLanes,s&1?t===Bh?Ms++:(Ms=0,Bh=t):Ms=0,ur(),null}function Si(){if(Fn!==null){var t=Iv(Il),e=kt.transition,n=J;try{if(kt.transition=null,J=16>t?16:t,Fn===null)var r=!1;else{if(t=Fn,Fn=null,Il=0,Y&6)throw Error(C(331));var i=Y;for(Y|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:bs(8,c,s)}var h=c.child;if(h!==null)h.return=c,x=h;else for(;x!==null;){c=x;var f=c.sibling,m=c.return;if(b_(c),c===u){x=null;break}if(f!==null){f.return=m,x=f;break}x=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,x=g;break e}x=s.return}}var p=t.current;for(x=p;x!==null;){o=x;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,x=y;else e:for(o=p;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(S){he(a,a.return,S)}if(a===o){x=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,x=E;break e}x=a.return}}if(Y=i,ur(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(eu,t)}catch{}r=!0}return r}finally{J=n,kt.transition=e}}return!1}function Wm(t,e,n){e=bi(n,e),e=S_(t,e,1),t=Kn(t,e,1),e=rt(),t!==null&&(Do(t,1,e),ht(t,e))}function he(t,e,n){if(t.tag===3)Wm(t,t,n);else for(;e!==null;){if(e.tag===3){Wm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){t=bi(n,t),t=A_(e,t,1),e=Kn(e,t,1),t=rt(),e!==null&&(Do(e,1,t),ht(e,t));break}}e=e.return}}function GI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(Ue&n)===n&&(Ae===4||Ae===3&&(Ue&130023424)===Ue&&500>ye()-mf?Ar(t,0):pf|=n),ht(t,e)}function W_(t,e){e===0&&(t.mode&1?(e=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):e=1);var n=rt();t=_n(t,e),t!==null&&(Do(t,e,n),ht(t,n))}function QI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W_(t,n)}function YI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),W_(t,n)}var q_;q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return lt=!1,MI(t,e,n);lt=!!(t.flags&131072)}else lt=!1,se&&e.flags&1048576&&Qv(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wa(t,e),t=e.pendingProps;var i=xi(e,Ye.current);Ii(e,n),i=lf(null,e,r,t,i,n);var s=uf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,dl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nf(e),i.updater=ou,e.stateNode=i,i._reactInternals=e,Nh(e,r,t,n),e=Oh(null,e,r,!0,s,n)):(e.tag=0,se&&s&&Qd(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JI(r),t=Ot(r,t),i){case 0:e=Dh(null,e,r,t,n);break e;case 1:e=bm(null,e,r,t,n);break e;case 11:e=Om(null,e,r,t,n);break e;case 14:e=Lm(null,e,r,Ot(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Dh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),bm(t,e,r,i,n);case 3:e:{if(k_(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Zv(t,e),yl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=bi(Error(C(423)),e),e=Vm(t,e,r,n,i);break e}else if(r!==i){i=bi(Error(C(424)),e),e=Vm(t,e,r,n,i);break e}else for(pt=qn(e.stateNode.containerInfo.firstChild),yt=e,se=!0,bt=null,n=r_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){e=wn(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return i_(e),t===null&&Ch(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Th(r,i)?o=null:s!==null&&Th(r,s)&&(e.flags|=32),P_(t,e),tt(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return N_(t,e,n);case 4:return rf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oi(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Om(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(ml,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!ut.current){e=wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=gn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ph(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ii(e,n),i=Nt(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=Ot(r,e.pendingProps),i=Ot(r.type,i),Lm(t,e,r,i,n);case 15:return R_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Wa(t,e),e.tag=1,ct(r)?(t=!0,dl(e)):t=!1,Ii(e,n),t_(e,r,i),Nh(e,r,i,n),Oh(null,e,r,!0,t,n);case 19:return x_(t,e,n);case 22:return C_(t,e,n)}throw Error(C(156,e.tag))};function K_(t,e){return _v(t,e)}function XI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new XI(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JI(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Md)return 11;if(t===Ud)return 14}return 2}function Yn(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return Rr(n.children,i,s,e);case Vd:o=8,i|=8;break;case eh:return t=Pt(12,n,e,i|2),t.elementType=eh,t.lanes=s,t;case th:return t=Pt(13,n,e,i),t.elementType=th,t.lanes=s,t;case nh:return t=Pt(19,n,e,i),t.elementType=nh,t.lanes=s,t;case nv:return cu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ev:o=10;break e;case tv:o=9;break e;case Md:o=11;break e;case Ud:o=14;break e;case Nn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function cu(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=nv,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lc(0),this.expirationTimes=lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wf(t,e,n,r,i,s,o,a,l){return t=new ZI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),t}function eS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G_(t){if(!t)return nr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(ct(n))return Kv(t,n,e)}return e}function Q_(t,e,n,r,i,s,o,a,l){return t=wf(n,r,!0,t,i,s,o,a,l),t.context=G_(null),n=t.current,r=rt(),i=Qn(n),s=gn(r,i),s.callback=e??null,Kn(n,s,i),t.current.lanes=i,Do(t,i,r),ht(t,r),t}function hu(t,e,n,r){var i=e.current,s=rt(),o=Qn(i);return n=G_(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kn(i,e,o),t!==null&&(Mt(t,i,o,s),Ba(t,i,o)),o}function Al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ef(t,e){qm(t,e),(t=t.alternate)&&qm(t,e)}function tS(){return null}var Y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tf(t){this._internalRoot=t}du.prototype.render=Tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));hu(t,e,null,null)};du.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){hu(null,t,null,null)}),e[vn]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dn.length&&e!==0&&e<Dn[n].priority;n++);Dn.splice(n,0,t),n===0&&Pv(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Km(){}function nS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Al(o);s.call(u)}}var o=Q_(e,r,t,0,null,!1,!1,"",Km);return t._reactRootContainer=o,t[vn]=o.current,eo(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Al(l);a.call(u)}}var l=wf(t,0,!1,null,null,!1,!1,"",Km);return t._reactRootContainer=l,t[vn]=l.current,eo(t.nodeType===8?t.parentNode:t),br(function(){hu(e,l,n,r)}),l}function pu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Al(o);a.call(l)}}hu(e,o,t,i)}else o=nS(n,e,t,i,r);return Al(o)}Sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&($d(e,n|1),ht(e,ye()),!(Y&6)&&(Vi=ye()+500,ur()))}break;case 13:br(function(){var r=_n(t,1);if(r!==null){var i=rt();Mt(r,t,1,i)}}),Ef(t,1)}};Bd=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=rt();Mt(e,t,134217728,n)}Ef(t,134217728)}};Av=function(t){if(t.tag===13){var e=Qn(t),n=_n(t,e);if(n!==null){var r=rt();Mt(n,t,e,r)}Ef(t,e)}};Rv=function(){return J};Cv=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=iu(r);if(!i)throw Error(C(90));iv(r),sh(r,i)}}}break;case"textarea":ov(t,n);break;case"select":e=n.value,e!=null&&_i(t,!!n.multiple,e,!1)}};fv=gf;pv=br;var rS={usingClientEntryPoint:!1,Events:[Lo,ci,iu,hv,dv,gf]},fs={findFiberByHostInstance:_r,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iS={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yv(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||tS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{eu=Ea.inject(iS),Xt=Ea}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(C(200));return eS(t,e,null,n)};It.createRoot=function(t,e){if(!If(t))throw Error(C(299));var n=!1,r="",i=Y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wf(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,eo(t.nodeType===8?t.parentNode:t),new Tf(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=yv(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return br(t)};It.hydrate=function(t,e,n){if(!fu(e))throw Error(C(200));return pu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!If(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Y_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Q_(e,null,t,1,n??null,i,!1,s,o),t[vn]=e.current,eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new du(e)};It.render=function(t,e,n){if(!fu(e))throw Error(C(200));return pu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!fu(t))throw Error(C(40));return t._reactRootContainer?(br(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};It.unstable_batchedUpdates=gf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fu(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return pu(t,e,n,!1,r)};It.version="18.2.0-next-9e3b772b8-20220608";function X_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X_)}catch(t){console.error(t)}}X_(),Qy.exports=It;var sS=Qy.exports,Gm=sS;Jc.createRoot=Gm.createRoot,Jc.hydrateRoot=Gm.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uo.apply(this,arguments)}var $n;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($n||($n={}));const Qm="popstate";function oS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=qr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Wh("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Rl(s))}function r(i,s){mu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return lS(e,n,r,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aS(){return Math.random().toString(36).substr(2,8)}function Ym(t,e){return{usr:t.state,key:t.key,idx:e}}function Wh(t,e,n,r){return n===void 0&&(n=null),uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qr(e):e,{state:n,key:e&&e.key||r||aS()})}function Rl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=$n.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(uo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=$n.Pop;let T=c(),g=T==null?null:T-u;u=T,l&&l({action:a,location:_.location,delta:g})}function f(T,g){a=$n.Push;let p=Wh(_.location,T,g);n&&n(p,T),u=c()+1;let y=Ym(p,u),E=_.createHref(p);try{o.pushState(y,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(T,g){a=$n.Replace;let p=Wh(_.location,T,g);n&&n(p,T),u=c();let y=Ym(p,u),E=_.createHref(p);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(T){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof T=="string"?T:Rl(T);return le(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let _={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qm,h),l=T,()=>{i.removeEventListener(Qm,h),l=null}},createHref(T){return e(i,T)},createURL:v,encodeLocation(T){let g=v(T);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(T){return o.go(T)}};return _}var Xm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xm||(Xm={}));function uS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?qr(e):e,i=co(r.pathname||"/",n);if(i==null)return null;let s=J_(t);cS(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=_S(s[a],ES(i));return o}function J_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),J_(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:yS(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Z_(s.path))i(s,o,l)}),e}function Z_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Z_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function cS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hS=/^:\w+$/,dS=3,fS=2,pS=1,mS=10,gS=-2,Jm=t=>t==="*";function yS(t,e){let n=t.split("/"),r=n.length;return n.some(Jm)&&(r+=gS),e&&(r+=fS),n.filter(i=>!Jm(i)).reduce((i,s)=>i+(hS.test(s)?dS:s===""?pS:mS),r)}function vS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _S(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=qh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Xn([i,c.pathname]),pathnameBase:AS(Xn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Xn([i,c.pathnameBase]))}return s}function qh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:f,isOptional:m}=c;if(f==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[h];return m&&!v?u[f]=void 0:u[f]=TS(v||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ES(t){try{return decodeURI(t)}catch(e){return mu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function TS(t,e){try{return decodeURIComponent(t)}catch(n){return mu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function co(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function IS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?qr(t):t;return{pathname:n?n.startsWith("/")?n:SS(n,e):e,search:RS(r),hash:CS(i)}}function SS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sf(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Af(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=qr(t):(i=uo({},t),le(!i.pathname||!i.pathname.includes("?"),kc("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),kc("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),kc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=IS(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xn=t=>t.join("/").replace(/\/\/+/g,"/"),AS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function PS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const e0=["post","put","patch","delete"];new Set(e0);const kS=["get",...e0];new Set(kS);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cl.apply(this,arguments)}const gu=w.createContext(null),t0=w.createContext(null),Kr=w.createContext(null),yu=w.createContext(null),on=w.createContext({outlet:null,matches:[],isDataRoute:!1}),n0=w.createContext(null);function NS(t,e){let{relative:n}=e===void 0?{}:e;Yi()||le(!1);let{basename:r,navigator:i}=w.useContext(Kr),{hash:s,pathname:o,search:a}=vu(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Xn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Yi(){return w.useContext(yu)!=null}function Gr(){return Yi()||le(!1),w.useContext(yu).location}function r0(t){w.useContext(Kr).static||w.useLayoutEffect(t)}function i0(){let{isDataRoute:t}=w.useContext(on);return t?WS():xS()}function xS(){Yi()||le(!1);let t=w.useContext(gu),{basename:e,navigator:n}=w.useContext(Kr),{matches:r}=w.useContext(on),{pathname:i}=Gr(),s=JSON.stringify(Sf(r).map(l=>l.pathnameBase)),o=w.useRef(!1);return r0(()=>{o.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Af(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Xn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const DS=w.createContext(null);function OS(t){let e=w.useContext(on).outlet;return e&&w.createElement(DS.Provider,{value:t},e)}function s0(){let{matches:t}=w.useContext(on),e=t[t.length-1];return e?e.params:{}}function vu(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.useContext(on),{pathname:i}=Gr(),s=JSON.stringify(Sf(r).map(o=>o.pathnameBase));return w.useMemo(()=>Af(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function LS(t,e){return bS(t,e)}function bS(t,e,n){Yi()||le(!1);let{navigator:r}=w.useContext(Kr),{matches:i}=w.useContext(on),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Gr(),u;if(e){var c;let _=typeof e=="string"?qr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||le(!1),u=_}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",m=uS(t,{pathname:f}),v=FS(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Xn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Xn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?w.createElement(yu.Provider,{value:{location:Cl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$n.Pop}},v):v}function VS(){let t=HS(),e=PS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,s)}const MS=w.createElement(VS,null);class US extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(on.Provider,{value:this.props.routeContext},w.createElement(n0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jS(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(gu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(on.Provider,{value:e},r)}function FS(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||le(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||MS);let f=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=h:l.route.Component?v=w.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,w.createElement(jS,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(US,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var o0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(o0||{}),Pl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pl||{});function $S(t){let e=w.useContext(gu);return e||le(!1),e}function BS(t){let e=w.useContext(t0);return e||le(!1),e}function zS(t){let e=w.useContext(on);return e||le(!1),e}function a0(t){let e=zS(),n=e.matches[e.matches.length-1];return n.route.id||le(!1),n.route.id}function HS(){var t;let e=w.useContext(n0),n=BS(Pl.UseRouteError),r=a0(Pl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function WS(){let{router:t}=$S(o0.UseNavigateStable),e=a0(Pl.UseNavigateStable),n=w.useRef(!1);return r0(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Cl({fromRouteId:e},s)))},[t,e])}function Et(t){let{to:e,replace:n,state:r,relative:i}=t;Yi()||le(!1);let{matches:s}=w.useContext(on),{pathname:o}=Gr(),a=i0(),l=Af(e,Sf(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return w.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function qS(t){return OS(t.context)}function Ht(t){le(!1)}function KS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$n.Pop,navigator:s,static:o=!1}=t;Yi()&&le(!1);let a=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=qr(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:m="default"}=r,v=w.useMemo(()=>{let _=co(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:f,key:m},navigationType:i}},[a,u,c,h,f,m,i]);return v==null?null:w.createElement(Kr.Provider,{value:l},w.createElement(yu.Provider,{children:n,value:v}))}function GS(t){let{children:e,location:n}=t;return LS(Kh(e),n)}new Promise(()=>{});function Kh(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,Kh(r.props.children,s));return}r.type!==Ht&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Kh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kl.apply(this,arguments)}function l0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function QS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YS(t,e){return t.button===0&&(!e||e==="_self")&&!QS(t)}const XS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],JS=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ZS=w.createContext({isTransitioning:!1}),eA="startTransition",Zm=QT[eA];function tA(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=oS({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=w.useCallback(h=>{u&&Zm?Zm(()=>l(h)):l(h)},[l,u]);return w.useLayoutEffect(()=>o.listen(c),[o,c]),w.createElement(KS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const nA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ho=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,f=l0(e,XS),{basename:m}=w.useContext(Kr),v,_=!1;if(typeof u=="string"&&rA.test(u)&&(v=u,nA))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),S=co(E.pathname,m);E.origin===y.origin&&S!=null?u=S+E.search+E.hash:_=!0}catch{}let T=NS(u,{relative:i}),g=sA(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(y){r&&r(y),y.defaultPrevented||g(y)}return w.createElement("a",kl({},f,{href:v||T,onClick:_||s?r:p,ref:n,target:l}))}),Rf=w.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,h=l0(e,JS),f=vu(l,{relative:h.relative}),m=Gr(),v=w.useContext(t0),{navigator:_}=w.useContext(Kr),T=v!=null&&oA(f)&&u===!0,g=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,p=m.pathname,y=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(p=p.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase());let E=p===g||!o&&p.startsWith(g)&&p.charAt(g.length)==="/",S=y!=null&&(y===g||!o&&y.startsWith(g)&&y.charAt(g.length)==="/"),I={isActive:E,isPending:S,isTransitioning:T},P=E?r:void 0,k;typeof s=="function"?k=s(I):k=[s,E?"active":null,S?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let W=typeof a=="function"?a(I):a;return w.createElement(ho,kl({},h,{"aria-current":P,className:k,ref:n,style:W,to:l,unstable_viewTransition:u}),typeof c=="function"?c(I):c)});var Gh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gh||(Gh={}));var eg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(eg||(eg={}));function iA(t){let e=w.useContext(gu);return e||le(!1),e}function sA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=i0(),u=Gr(),c=vu(t,{relative:o});return w.useCallback(h=>{if(YS(h,n)){h.preventDefault();let f=r!==void 0?r:Rl(u)===Rl(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function oA(t,e){e===void 0&&(e={});let n=w.useContext(ZS);n==null&&le(!1);let{basename:r}=iA(Gh.useViewTransitionState),i=vu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=co(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=co(n.nextLocation.pathname,r)||n.nextLocation.pathname;return qh(i.pathname,o)!=null||qh(i.pathname,s)!=null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},c0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new lA;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uA=function(t){const e=u0(t);return c0.encodeByteArray(e,!0)},Nl=function(t){return uA(t).replace(/\./g,"")},h0=function(t){try{return c0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=()=>cA().__FIREBASE_DEFAULTS__,dA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&h0(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return hA()||dA()||fA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},d0=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},f0=t=>{const e=d0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},p0=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},m0=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Nl(JSON.stringify(n)),Nl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function gA(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _A(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wA(){try{return typeof indexedDB=="object"}catch{return!1}}function EA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TA,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new an(i,a,r)}}function IA(t,e){return t.replace(SA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SA=/\{\$([^}]+)}/g;function AA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tg(s)&&tg(o)){if(!xl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function RA(t,e){const n=new CA(t,e);return n.subscribe.bind(n)}class CA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nc),i.error===void 0&&(i.error=Nc),i.complete===void 0&&(i.complete=Nc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xA(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NA(t){return t===vr?void 0:t}function xA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const OA={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},LA=G.INFO,bA={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},VA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cf{constructor(e){this.name=e,this._logLevel=LA,this._logHandler=VA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const MA=(t,e)=>e.some(n=>t instanceof n);let ng,rg;function UA(){return ng||(ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jA(){return rg||(rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y0=new WeakMap,Qh=new WeakMap,v0=new WeakMap,xc=new WeakMap,Pf=new WeakMap;function FA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&y0.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function $A(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||v0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BA(t){Yh=t(Yh)}function zA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dc(this),e,...n);return v0.set(r,e.sort?e.sort():[e]),Jn(r)}:jA().includes(t)?function(...e){return t.apply(Dc(this),e),Jn(y0.get(this))}:function(...e){return Jn(t.apply(Dc(this),e))}}function HA(t){return typeof t=="function"?zA(t):(t instanceof IDBTransaction&&$A(t),MA(t,UA())?new Proxy(t,Yh):t)}function Jn(t){if(t instanceof IDBRequest)return FA(t);if(xc.has(t))return xc.get(t);const e=HA(t);return e!==t&&(xc.set(t,e),Pf.set(e,t)),e}const Dc=t=>Pf.get(t);function WA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jn(o.result),l.oldVersion,l.newVersion,Jn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const qA=["get","getKey","getAll","getAllKeys","count"],KA=["put","add","delete","clear"],Oc=new Map;function ig(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Oc.set(e,s),s}BA(t=>({...t,get:(e,n,r)=>ig(e,n)||t.get(e,n,r),has:(e,n)=>!!ig(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xh="@firebase/app",sg="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Cf("@firebase/app"),YA="@firebase/app-compat",XA="@firebase/analytics-compat",JA="@firebase/analytics",ZA="@firebase/app-check-compat",eR="@firebase/app-check",tR="@firebase/auth",nR="@firebase/auth-compat",rR="@firebase/database",iR="@firebase/database-compat",sR="@firebase/functions",oR="@firebase/functions-compat",aR="@firebase/installations",lR="@firebase/installations-compat",uR="@firebase/messaging",cR="@firebase/messaging-compat",hR="@firebase/performance",dR="@firebase/performance-compat",fR="@firebase/remote-config",pR="@firebase/remote-config-compat",mR="@firebase/storage",gR="@firebase/storage-compat",yR="@firebase/firestore",vR="@firebase/firestore-compat",_R="firebase",wR="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="[DEFAULT]",ER={[Xh]:"fire-core",[YA]:"fire-core-compat",[JA]:"fire-analytics",[XA]:"fire-analytics-compat",[eR]:"fire-app-check",[ZA]:"fire-app-check-compat",[tR]:"fire-auth",[nR]:"fire-auth-compat",[rR]:"fire-rtdb",[iR]:"fire-rtdb-compat",[sR]:"fire-fn",[oR]:"fire-fn-compat",[aR]:"fire-iid",[lR]:"fire-iid-compat",[uR]:"fire-fcm",[cR]:"fire-fcm-compat",[hR]:"fire-perf",[dR]:"fire-perf-compat",[fR]:"fire-rc",[pR]:"fire-rc-compat",[mR]:"fire-gcs",[gR]:"fire-gcs-compat",[yR]:"fire-fst",[vR]:"fire-fst-compat","fire-js":"fire-js",[_R]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map,Zh=new Map;function TR(t,e){try{t.container.addComponent(e)}catch(n){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(Zh.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Zh.set(e,t);for(const n of Dl.values())TR(n,t);return!0}function wu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zn=new Vo("app","Firebase",IR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=wR;function _0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=p0()),!n)throw Zn.create("no-options");const s=Dl.get(i);if(s){if(xl(n,s.options)&&xl(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new DA(i);for(const l of Zh.values())o.addComponent(l);const a=new SR(n,r,o);return Dl.set(i,a),a}function kf(t=Jh){const e=Dl.get(t);if(!e&&t===Jh&&p0())return _0();if(!e)throw Zn.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let i=(r=ER[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(a.join(" "));return}Mr(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="firebase-heartbeat-database",RR=1,fo="firebase-heartbeat-store";let Lc=null;function w0(){return Lc||(Lc=WA(AR,RR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fo)}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function CR(t){try{return await(await w0()).transaction(fo).objectStore(fo).get(E0(t))}catch(e){if(e instanceof an)Vr.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(n.message)}}}async function og(t,e){try{const r=(await w0()).transaction(fo,"readwrite");await r.objectStore(fo).put(e,E0(t)),await r.done}catch(n){if(n instanceof an)Vr.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vr.warn(r.message)}}}function E0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=1024,kR=30*24*60*60*1e3;class NR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ag();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=kR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ag(),{heartbeatsToSend:r,unsentEntries:i}=xR(this._heartbeatsCache.heartbeats),s=Nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ag(){return new Date().toISOString().substring(0,10)}function xR(t,e=PR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wA()?EA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lg(t){return Nl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t){Mr(new rr("platform-logger",e=>new GA(e),"PRIVATE")),Mr(new rr("heartbeat",e=>new NR(e),"PRIVATE")),Zt(Xh,sg,t),Zt(Xh,sg,"esm2017"),Zt("fire-js","")}OR("");function Nf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function T0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LR=T0,I0=new Vo("auth","Firebase",T0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Cf("@firebase/auth");function bR(t,...e){Ol.logLevel<=G.WARN&&Ol.warn(`Auth (${Qr}): ${t}`,...e)}function Qa(t,...e){Ol.logLevel<=G.ERROR&&Ol.error(`Auth (${Qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw xf(t,...e)}function vt(t,...e){return xf(t,...e)}function VR(t,e,n){const r=Object.assign(Object.assign({},LR()),{[e]:n});return new Vo("auth","Firebase",r).create(e,{appName:t.name})}function xf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return I0.create(t,...e)}function L(t,e,...n){if(!t)throw xf(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qa(e),new Error(e)}function Tn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function S0(){return ug()==="http:"||ug()==="https:"}function ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S0()||yA()||"connection"in navigator)?navigator.onLine:!0}function UR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=mA()||vA()}get(){return MR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new Mo(3e4,6e4);function Cn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ln(t,e,n,r,i={}){return R0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),A0.fetch()(C0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function R0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jR),e);try{const i=new $R(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ss(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ss(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ss(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ss(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw VR(t,c,u);En(t,c)}}catch(i){if(i instanceof an)throw i;En(t,"network-request-failed",{message:String(i)})}}async function Eu(t,e,n,r,i={}){const s=await ln(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}function C0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Df(t.config,i):`${t.config.apiScheme}://${i}`}class $R{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),FR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ss(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){return t!==void 0&&t.getResponse!==void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t){return(await ln(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zR(t,e){return ln(t,"POST","/v1/accounts:delete",e)}async function HR(t,e){return ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WR(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=Of(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Us(bc(i.auth_time)),issuedAtTime:Us(bc(i.iat)),expirationTime:Us(bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function Of(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=h0(n);return i?JSON.parse(i):(Qa("Failed to decode base64 JWT payload"),null)}catch(i){return Qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qR(t){const e=Of(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&KR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t){var e;const n=t.auth,r=await t.getIdToken(),i=await po(t,HR(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?XR(s.providerUserInfo):[],a=YR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new P0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function QR(t){const e=Te(t);await Ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function XR(t){return t.map(e=>{var{providerId:n}=e,r=Nf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(t,e){const n=await R0(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=C0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZR(t,e){return ln(t,"POST","/v2/accounts:revokeToken",Cn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mo;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new P0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WR(this,e)}reload(){return QR(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await po(this,zR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:S,providerData:I,stsTokenManager:P}=n;L(y&&P,e,"internal-error");const k=mo.fromJSON(this.name,P);L(typeof y=="string",e,"internal-error"),kn(h,e.name),kn(f,e.name),L(typeof E=="boolean",e,"internal-error"),L(typeof S=="boolean",e,"internal-error"),kn(m,e.name),kn(v,e.name),kn(_,e.name),kn(T,e.name),kn(g,e.name),kn(p,e.name);const W=new Cr({uid:y,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:S,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:k,createdAt:g,lastLoginAt:p});return I&&Array.isArray(I)&&(W.providerData=I.map(j=>Object.assign({},j))),T&&(W._redirectEventId=T),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new mo;i.updateFromServerResponse(n);const s=new Cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ll(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function pn(t){Tn(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k0.type="NONE";const dg=k0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(pn(dg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pn(dg);const o=Ya(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Cr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ai(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ai(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(L0(e))return"Blackberry";if(b0(e))return"Webos";if(Lf(e))return"Safari";if((e.includes("chrome/")||x0(e))&&!e.includes("edge/"))return"Chrome";if(O0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function N0(t=Xe()){return/firefox\//i.test(t)}function Lf(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x0(t=Xe()){return/crios\//i.test(t)}function D0(t=Xe()){return/iemobile/i.test(t)}function O0(t=Xe()){return/android/i.test(t)}function L0(t=Xe()){return/blackberry/i.test(t)}function b0(t=Xe()){return/webos/i.test(t)}function Tu(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eC(t=Xe()){var e;return Tu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tC(){return _A()&&document.documentMode===10}function V0(t=Xe()){return Tu(t)||O0(t)||b0(t)||L0(t)||/windows phone/i.test(t)||D0(t)}function nC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t,e=[]){let n;switch(t){case"Browser":n=fg(Xe());break;case"Worker":n=`${fg(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,e={}){return ln(t,"GET","/v2/passwordPolicy",Cn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=6;class oC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new rC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Te(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iC(this),n=new oC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ji(t){return Te(t)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=RA(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function U0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lC().appendChild(r)})}function j0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t,e){const n=wu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xl(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function cC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hC(t,e,n){const r=Ji(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=F0(e),{host:o,port:a}=dC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fC()}function F0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dC(t){const e=F0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mg(o)}}}function mg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e){return Eu(t,"POST","/v1/accounts:signInWithIdp",Cn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="http://localhost";class Ur extends bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:pC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e){return ln(t,"POST","/v1/accounts:sendVerificationCode",Cn(t,e))}async function gC(t,e){return Eu(t,"POST","/v1/accounts:signInWithPhoneNumber",Cn(t,e))}async function yC(t,e){const n=await Eu(t,"POST","/v1/accounts:signInWithPhoneNumber",Cn(t,e));if(n.temporaryProof)throw Ss(t,"account-exists-with-different-credential",n);return n}const vC={USER_NOT_FOUND:"user-not-found"};async function _C(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Eu(t,"POST","/v1/accounts:signInWithPhoneNumber",Cn(t,n),vC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends bf{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new js({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new js({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return gC(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return yC(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _C(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new js({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends $0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Uo{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ur._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Uo{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Uo{constructor(){super("twitter.com")}static credential(e,n){return Ur._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cr._fromIdTokenResponse(e,r,i),o=gg(r);return new Mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gg(r);return new Mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bl(e,n,r,i)}}function B0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,s,e,r):s})}async function wC(t,e,n=!1){const r=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await po(t,B0(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Of(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(t,e,n=!1){const r="signIn",i=await B0(t,r,e),s=await Mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function TC(t,e){return z0(Ji(t),e)}function IC(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function SC(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function AC(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function RC(t){return Te(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t,e){return ln(t,"POST","/v2/accounts/mfaEnrollment:start",Cn(t,e))}const Vl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vl,"1"),this.storage.removeItem(Vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(){const t=Xe();return Lf(t)||Tu(t)}const kC=1e3,NC=10;class W0 extends H0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=PC()&&nC(),this.fallbackToPolling=V0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W0.type="LOCAL";const xC=W0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0 extends H0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}q0.type="SESSION";const K0=q0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Iu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await DC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Vf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return window}function LC(t){_e().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){return typeof _e().WorkerGlobalScope<"u"&&typeof _e().importScripts=="function"}async function bC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MC(){return Mf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="firebaseLocalStorageDb",UC=1,Ml="firebaseLocalStorage",Q0="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Su(t,e){return t.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function jC(){const t=indexedDB.deleteDatabase(G0);return new jo(t).toPromise()}function td(){const t=indexedDB.open(G0,UC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ml,{keyPath:Q0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ml)?e(r):(r.close(),await jC(),e(await td()))})})}async function yg(t,e,n){const r=Su(t,!0).put({[Q0]:e,value:n});return new jo(r).toPromise()}async function FC(t,e){const n=Su(t,!1).get(e),r=await new jo(n).toPromise();return r===void 0?null:r.value}function vg(t,e){const n=Su(t,!0).delete(e);return new jo(n).toPromise()}const $C=800,BC=3;class Y0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(MC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bC(),!this.activeServiceWorker)return;this.sender=new OC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await td();return await yg(e,Vl,"1"),await vg(e,Vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Su(i,!1).getAll();return new jo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y0.type="LOCAL";const zC=Y0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){return ln(t,"POST","/v2/accounts/mfaSignIn:start",Cn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=500,qC=6e4,Ta=1e12;class KC{constructor(e){this.auth=e,this.counter=Ta,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new GC(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Ta;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Ta;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Ta;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class GC{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;L(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=QC(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},qC)},WC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function QC(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=j0("rcb"),YC=new Mo(3e4,6e4),XC="https://www.google.com/recaptcha/api.js?";class JC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=_e().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return L(ZC(n),e,"argument-error"),this.shouldResolveImmediately(n)&&cg(_e().grecaptcha)?Promise.resolve(_e().grecaptcha):new Promise((r,i)=>{const s=_e().setTimeout(()=>{i(vt(e,"network-request-failed"))},YC.get());_e()[Vc]=()=>{_e().clearTimeout(s),delete _e()[Vc];const a=_e().grecaptcha;if(!a||!cg(a)){i(vt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${XC}?${Xi({onload:Vc,render:"explicit",hl:n})}`;U0(o).catch(()=>{clearTimeout(s),i(vt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=_e().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ZC(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class eP{async load(e){return new KC(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="recaptcha",tP={theme:"light",type:"image"};class nP{constructor(e,n,r=Object.assign({},tP)){this.parameters=r,this.type=X0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ji(e),this.isInvisible=this.parameters.size==="invisible",L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;L(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new eP:new JC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){L(!this.parameters.sitekey,this.auth,"argument-error"),L(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=_e()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){L(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){L(S0()&&!Mf(),this.auth,"internal-error"),await rP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await BR(this.auth);L(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return L(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function rP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=js._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function sP(t,e,n){const r=Ji(t),i=await oP(r,e,Te(n));return new iP(i,s=>TC(r,s))}async function oP(t,e,n){var r;const i=await n.verify();try{L(typeof i=="string",t,"argument-error"),L(n.type===X0,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return L(o.type==="enroll",t,"internal-error"),(await CC(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{L(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return L(a,t,"missing-multi-factor-info"),(await HC(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await mC(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t,e){return e?pn(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lP(t){return z0(t.auth,new Uf(t),t.bypassAuthState)}function uP(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),EC(n,new Uf(t),t.bypassAuthState)}async function cP(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),wC(n,new Uf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lP;case"linkViaPopup":case"linkViaRedirect":return cP;case"reauthViaPopup":case"reauthViaRedirect":return uP;default:En(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=new Mo(2e3,1e4);class yi extends J0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Vf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hP.get())};e()}}yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="pendingRedirect",Xa=new Map;class fP extends J0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await pP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pP(t,e){const n=yP(e),r=gP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mP(t,e){Xa.set(t._key(),e)}function gP(t){return pn(t._redirectPersistence)}function yP(t){return Ya(dP,t.config.apiKey,t.name)}async function vP(t,e,n=!1){const r=Ji(t),i=aP(r,e),o=await new fP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=10*60*1e3;class wP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Z0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_P&&this.cachedEventUids.clear(),this.cachedEventUids.has(_g(e))}saveEventToCache(e){this.cachedEventUids.add(_g(e)),this.lastProcessedEventTime=Date.now()}}function _g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Z0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e={}){return ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SP=/^https?/;async function AP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TP(t);for(const n of e)try{if(RP(n))return}catch{}En(t,"unauthorized-domain")}function RP(t){const e=ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SP.test(n))return!1;if(IP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=new Mo(3e4,6e4);function wg(){const t=_e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PP(t){return new Promise((e,n)=>{var r,i,s;function o(){wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wg(),n(vt(t,"network-request-failed"))},timeout:CP.get()})}if(!((i=(r=_e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_e().gapi)===null||s===void 0)&&s.load)o();else{const a=j0("iframefcb");return _e()[a]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},U0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ja=null,e})}let Ja=null;function kP(t){return Ja=Ja||PP(t),Ja}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=new Mo(5e3,15e3),xP="__/auth/iframe",DP="emulator/auth/iframe",OP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bP(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Df(e,DP):`https://${t.config.authDomain}/${xP}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},i=LP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xi(r).slice(1)}`}async function VP(t){const e=await kP(t),n=_e().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:bP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),a=_e().setTimeout(()=>{s(o)},NP.get());function l(){_e().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UP=500,jP=600,FP="_blank",$P="http://localhost";class Eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BP(t,e,n,r=UP,i=jP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=x0(u)?FP:n),N0(u)&&(e=e||$P,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(eC(u)&&a!=="_self")return zP(e||"",a),new Eg(null);const h=window.open(e||"",a,c);L(h,t,"popup-blocked");try{h.focus()}catch{}return new Eg(h)}function zP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="__/auth/handler",WP="emulator/auth/handler",qP=encodeURIComponent("fac");async function Tg(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(e instanceof $0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",AA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Uo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${qP}=${encodeURIComponent(l)}`:"";return`${KP(t)}?${Xi(a).slice(1)}${u}`}function KP({config:t}){return t.emulator?Df(t,WP):`https://${t.authDomain}/${HP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="webStorageSupport";class GP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K0,this._completeRedirectFn=vP,this._overrideRedirectResult=mP}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Tg(e,n,r,ed(),i);return BP(e,o,Vf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Tg(e,n,r,ed(),i);return LC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VP(e),r=new wP(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mc];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return V0()||Lf()||Tu()}}const QP=GP;var Ig="@firebase/auth",Sg="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function JP(t){Mr(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M0(t)},u=new aC(r,i,s,l);return cC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new rr("auth-internal",e=>{const n=Ji(e.getProvider("auth").getImmediate());return(r=>new YP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Ig,Sg,XP(t)),Zt(Ig,Sg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=5*60,ek=m0("authIdTokenMaxAge")||ZP;let Ag=null;const tk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ek)return;const i=n==null?void 0:n.token;Ag!==i&&(Ag=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nk(t=kf()){const e=wu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uC(t,{popupRedirectResolver:QP,persistence:[zC,xC,K0]}),r=m0("authTokenSyncURL");if(r){const s=tk(r);SC(n,s,()=>s(n.currentUser)),IC(n,o=>s(o))}const i=d0("auth");return i&&hC(n,`http://${i}`),n}JP("Browser");var rk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,jf=jf||{},M=rk||self;function Au(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ik(t){return Object.prototype.hasOwnProperty.call(t,Uc)&&t[Uc]||(t[Uc]=++sk)}var Uc="closure_uid_"+(1e9*Math.random()>>>0),sk=0;function ok(t,e,n){return t.call.apply(t.bind,arguments)}function ak(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ge=ok:Ge=ak,Ge.apply(null,arguments)}function Ia(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function De(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function cr(){this.s=this.s,this.o=this.o}var lk=0;cr.prototype.s=!1;cr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lk!=0)&&ik(this)};cr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ew=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ff(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Rg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Au(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var uk=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M.addEventListener("test",()=>{},e),M.removeEventListener("test",()=>{},e)}catch{}return t}();function go(t){return/^[\s\xa0]*$/.test(t)}function Ru(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return Ru().indexOf(t)!=-1}function $f(t){return $f[" "](t),t}$f[" "]=function(){};function ck(t,e){var n=nN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var hk=Kt("Opera"),Ui=Kt("Trident")||Kt("MSIE"),tw=Kt("Edge"),nd=tw||Ui,nw=Kt("Gecko")&&!(Ru().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),dk=Ru().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function rw(){var t=M.document;return t?t.documentMode:void 0}var rd;e:{var jc="",Fc=function(){var t=Ru();if(nw)return/rv:([^\);]+)(\)|;)/.exec(t);if(tw)return/Edge\/([\d\.]+)/.exec(t);if(Ui)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dk)return/WebKit\/(\S+)/.exec(t);if(hk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fc&&(jc=Fc?Fc[1]:""),Ui){var $c=rw();if($c!=null&&$c>parseFloat(jc)){rd=String($c);break e}}rd=jc}var id;if(M.document&&Ui){var Cg=rw();id=Cg||parseInt(rd,10)||void 0}else id=void 0;var fk=id;function yo(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nw){e:{try{$f(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yo.$.h.call(this)}}De(yo,Qe);var pk={2:"touch",3:"pen",4:"mouse"};yo.prototype.h=function(){yo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $o="closure_listenable_"+(1e6*Math.random()|0),mk=0;function gk(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++mk,this.fa=this.ia=!1}function Cu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function yk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function iw(t){const e={};for(const n in t)e[n]=t[n];return e}const Pg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Pg.length;s++)n=Pg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Pu(t){this.src=t,this.g={},this.h=0}Pu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=od(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gk(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function sd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ew(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Cu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function od(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var zf="closure_lm_"+(1e6*Math.random()|0),Bc={};function ow(t,e,n,r,i){if(r&&r.once)return lw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ow(t,e[s],n,r,i);return null}return n=qf(n),t&&t[$o]?t.O(e,n,Fo(r)?!!r.capture:!!r,i):aw(t,e,n,!1,r,i)}function aw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Fo(i)?!!i.capture:!!i,a=Wf(t);if(a||(t[zf]=a=new Pu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)uk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(cw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vk(){function t(n){return e.call(t.src,t.listener,n)}const e=_k;return t}function lw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)lw(t,e[s],n,r,i);return null}return n=qf(n),t&&t[$o]?t.P(e,n,Fo(r)?!!r.capture:!!r,i):aw(t,e,n,!0,r,i)}function uw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)uw(t,e[s],n,r,i);else r=Fo(r)?!!r.capture:!!r,n=qf(n),t&&t[$o]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=od(s,n,r,i),-1<n&&(Cu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=od(e,n,r,i)),(n=-1<t?e[t]:null)&&Hf(n))}function Hf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[$o])sd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wf(e))?(sd(n,t),n.h==0&&(n.src=null,e[zf]=null)):Cu(t)}}}function cw(t){return t in Bc?Bc[t]:Bc[t]="on"+t}function _k(t,e){if(t.fa)t=!0;else{e=new yo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Hf(t),t=n.call(r,e)}return t}function Wf(t){return t=t[zf],t instanceof Pu?t:null}var zc="__closure_events_fn_"+(1e9*Math.random()>>>0);function qf(t){return typeof t=="function"?t:(t[zc]||(t[zc]=function(e){return t.handleEvent(e)}),t[zc])}function xe(){cr.call(this),this.i=new Pu(this),this.S=this,this.J=null}De(xe,cr);xe.prototype[$o]=!0;xe.prototype.removeEventListener=function(t,e,n,r){uw(this,t,e,n,r)};function je(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var i=e;e=new Qe(r,t),sw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Sa(o,r,!0,e)&&i}if(o=e.g=t,i=Sa(o,r,!0,e)&&i,i=Sa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Sa(o,r,!1,e)&&i}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Cu(n[r]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Sa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&sd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Kf=M.JSON.stringify;class wk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ek(){var t=Gf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Tk{constructor(){this.h=this.g=null}add(e,n){const r=hw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var hw=new wk(()=>new Ik,t=>t.reset());class Ik{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Sk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ak(t){M.setTimeout(()=>{throw t},0)}let vo,_o=!1,Gf=new Tk,dw=()=>{const t=M.Promise.resolve(void 0);vo=()=>{t.then(Rk)}};var Rk=()=>{for(var t;t=Ek();){try{t.h.call(t.g)}catch(n){Ak(n)}var e=hw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_o=!1};function ku(t,e){xe.call(this),this.h=t||1,this.g=e||M,this.j=Ge(this.qb,this),this.l=Date.now()}De(ku,xe);N=ku.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),je(this,"tick"),this.ga&&(Qf(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){ku.$.N.call(this),Qf(this),delete this.g};function Yf(t,e,n){if(typeof t=="function")n&&(t=Ge(t,n));else if(t&&typeof t.handleEvent=="function")t=Ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function fw(t){t.g=Yf(()=>{t.g=null,t.i&&(t.i=!1,fw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ck extends cr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fw(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(t){cr.call(this),this.h=t,this.g={}}De(wo,cr);var kg=[];function pw(t,e,n,r){Array.isArray(n)||(n&&(kg[0]=n.toString()),n=kg);for(var i=0;i<n.length;i++){var s=ow(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function mw(t){Bf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hf(e)},t),t.g={}}wo.prototype.N=function(){wo.$.N.call(this),mw(this)};wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nu(){this.g=!0}Nu.prototype.Ea=function(){this.g=!1};function Pk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kk(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function vi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xk(t,n)+(r?" "+r:"")})}function Nk(t,e){t.info(function(){return"TIMEOUT: "+e})}Nu.prototype.info=function(){};function xk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kf(n)}catch{return e}}var Yr={},Ng=null;function xu(){return Ng=Ng||new xe}Yr.Ta="serverreachability";function gw(t){Qe.call(this,Yr.Ta,t)}De(gw,Qe);function Eo(t){const e=xu();je(e,new gw(e))}Yr.STAT_EVENT="statevent";function yw(t,e){Qe.call(this,Yr.STAT_EVENT,t),this.stat=e}De(yw,Qe);function nt(t){const e=xu();je(e,new yw(e,t))}Yr.Ua="timingevent";function vw(t,e){Qe.call(this,Yr.Ua,t),this.size=e}De(vw,Qe);function Bo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var Du={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_w={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xf(){}Xf.prototype.h=null;function xg(t){return t.h||(t.h=t.i())}function ww(){}var zo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jf(){Qe.call(this,"d")}De(Jf,Qe);function Zf(){Qe.call(this,"c")}De(Zf,Qe);var ad;function Ou(){}De(Ou,Xf);Ou.prototype.g=function(){return new XMLHttpRequest};Ou.prototype.i=function(){return{}};ad=new Ou;function Ho(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new wo(this),this.P=Dk,t=nd?125:void 0,this.V=new ku(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ew}function Ew(){this.i=null,this.g="",this.h=!1}var Dk=45e3,ld={},Ul={};N=Ho.prototype;N.setTimeout=function(t){this.P=t};function ud(t,e,n){t.L=1,t.v=bu(In(e)),t.s=n,t.S=!0,Tw(t,null)}function Tw(t,e){t.G=Date.now(),Wo(t),t.A=In(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Nw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ew,t.g=Xw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ck(Ge(t.Pa,t,t.g),t.O)),pw(t.U,t.g,"readystatechange",t.nb),e=t.I?iw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Eo(),Pk(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&Gt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=Gt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||nd||this.g&&(this.h.h||this.g.ja()||bg(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Eo(3):Eo(2)),Lu(this);var n=this.g.da();this.ca=n;t:if(Iw(this)){var r=bg(this.g);t="";var i=r.length,s=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),Fs(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kk(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var u=a;break t}}u=null}if(n=u)vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cd(this,n);else{this.i=!1,this.o=3,nt(12),Tr(this),Fs(this);break e}}this.S?(Sw(this,c,o),nd&&this.i&&c==3&&(pw(this.U,this.V,"tick",this.mb),this.V.start())):(vi(this.j,this.m,o,null),cd(this,o)),c==4&&Tr(this),this.i&&!this.J&&(c==4?Kw(this.l,this):(this.i=!1,Wo(this)))}else Zk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Tr(this),Fs(this)}}}catch{}finally{}};function Iw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Sw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=Ok(t,n),i==Ul){e==4&&(t.o=4,nt(14),r=!1),vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ld){t.o=4,nt(15),vi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vi(t.j,t.m,i,null),cd(t,i);Iw(t)&&i!=Ul&&i!=ld&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sp(e),e.M=!0,nt(11))):(vi(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),Fs(t))}N.mb=function(){if(this.g){var t=Gt(this.g),e=this.g.ja();this.C<e.length&&(Lu(this),Sw(this,t,e),this.i&&t!=4&&Wo(this))}};function Ok(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ul:(n=Number(e.substring(n,r)),isNaN(n)?ld:(r+=1,r+n>e.length?Ul:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,Tr(this)};function Wo(t){t.Y=Date.now()+t.P,Aw(t,t.P)}function Aw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bo(Ge(t.lb,t),e)}function Lu(t){t.B&&(M.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Nk(this.j,this.A),this.L!=2&&(Eo(),nt(17)),Tr(this),this.o=2,Fs(this)):Aw(this,this.Y-t)};function Fs(t){t.l.H==0||t.J||Kw(t.l,t)}function Tr(t){Lu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qf(t.V),mw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function cd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hd(n.i,t))){if(!t.K&&hd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)$l(n),Uu(n);else break e;ip(n),nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bo(Ge(n.ib,n),6e3));if(1>=Ow(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ir(n,11)}else if((t.K||n.g==t)&&$l(n),!go(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ep(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ne(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Yw(r,r.J?r.pa:null,r.Y),o.K){Lw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Lu(a),Wo(a)),r.g=o}else Ww(r);0<n.j.length&&ju(n)}else u[0]!="stop"&&u[0]!="close"||Ir(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ir(n,7):rp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Eo(4)}catch{}}function Lk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Au(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function bk(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Au(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Rw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Au(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=bk(t),r=Lk(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Cw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pr){this.h=t.h,jl(this,t.j),this.s=t.s,this.g=t.g,Fl(this,t.m),this.l=t.l;var e=t.i,n=new To;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Dg(this,n),this.o=t.o}else t&&(e=String(t).match(Cw))?(this.h=!1,jl(this,e[1]||"",!0),this.s=As(e[2]||""),this.g=As(e[3]||"",!0),Fl(this,e[4]),this.l=As(e[5]||"",!0),Dg(this,e[6]||"",!0),this.o=As(e[7]||"")):(this.h=!1,this.i=new To(null,this.h))}Pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rs(e,Og,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rs(e,Og,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rs(n,n.charAt(0)=="/"?jk:Uk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rs(n,$k)),t.join("")};function In(t){return new Pr(t)}function jl(t,e,n){t.j=n?As(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Dg(t,e,n){e instanceof To?(t.i=e,Bk(t.i,t.h)):(n||(e=Rs(e,Fk)),t.i=new To(e,t.h))}function ne(t,e,n){t.i.set(e,n)}function bu(t){return ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function As(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Mk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Mk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Og=/[#\/\?@]/g,Uk=/[#\?:]/g,jk=/[#\?]/g,Fk=/[#\?@]/g,$k=/#/g;function To(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hr(t){t.g||(t.g=new Map,t.h=0,t.i&&Vk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=To.prototype;N.add=function(t,e){hr(this),this.i=null,t=Zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Pw(t,e){hr(t),e=Zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function kw(t,e){return hr(t),e=Zi(t,e),t.g.has(e)}N.forEach=function(t,e){hr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){hr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){hr(this);let e=[];if(typeof t=="string")kw(this,t)&&(e=e.concat(this.g.get(Zi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return hr(this),this.i=null,t=Zi(this,t),kw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Nw(t,e,n){Pw(t,e),0<n.length&&(t.i=null,t.g.set(Zi(t,e),Ff(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bk(t,e){e&&!t.j&&(hr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Pw(this,r),Nw(this,i,n))},t)),t.j=e}var zk=class{constructor(t,e){this.g=t,this.map=e}};function xw(t){this.l=t||Hk,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hk=10;function Dw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ow(t){return t.h?1:t.g?t.g.size:0}function hd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ep(t,e){t.g?t.g.add(e):t.h=e}function Lw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}xw.prototype.cancel=function(){if(this.i=bw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ff(t.i)}var Wk=class{stringify(t){return M.JSON.stringify(t,void 0)}parse(t){return M.JSON.parse(t,void 0)}};function qk(){this.g=new Wk}function Kk(t,e,n){const r=n||"";try{Rw(t,function(i,s){let o=i;Fo(i)&&(o=Kf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Gk(t,e){const n=new Nu;if(M.Image){const r=new Image;r.onload=Ia(Aa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ia(Aa,n,r,"TestLoadImage: error",!1,e),r.onabort=Ia(Aa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ia(Aa,n,r,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Aa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function qo(t){this.l=t.ec||null,this.j=t.ob||!1}De(qo,Xf);qo.prototype.g=function(){return new Vu(this.l,this.j)};qo.prototype.i=function(t){return function(){return t}}({});function Vu(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Vu,xe);var tp=0;N=Vu.prototype;N.open=function(t,e){if(this.readyState!=tp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Io(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||M).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ko(this)),this.readyState=tp};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Io(this)),this.g&&(this.readyState=3,Io(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Vw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ko(this):Io(this),this.readyState==3&&Vw(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Ko(this))};N.Ya=function(t){this.g&&(this.response=t,Ko(this))};N.ka=function(){this.g&&Ko(this)};function Ko(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Io(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Io(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Qk=M.JSON.parse;function fe(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Mw,this.L=this.M=!1}De(fe,xe);var Mw="",Yk=/^https?$/i,Xk=["POST","PUT"];N=fe.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ad.g(),this.C=this.u?xg(this.u):xg(ad),this.g.onreadystatechange=Ge(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Lg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=ew(Xk,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fw(this),0<this.B&&((this.L=Jk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ge(this.ua,this)):this.A=Yf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Lg(this,s)}};function Jk(t){return Ui&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof jf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function Lg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Uw(t),Mu(t)}function Uw(t){t.F||(t.F=!0,je(t,"complete"),je(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Mu(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mu(this,!0)),fe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?jw(this):this.kb())};N.kb=function(){jw(this)};function jw(t){if(t.h&&typeof jf<"u"&&(!t.C[1]||Gt(t)!=4||t.da()!=2)){if(t.v&&Gt(t)==4)Yf(t.La,0,t);else if(je(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Cw)[1]||null;!i&&M.self&&M.self.location&&(i=M.self.location.protocol.slice(0,-1)),r=!Yk.test(i?i.toLowerCase():"")}n=r}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var s=2<Gt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Uw(t)}}finally{Mu(t)}}}}function Mu(t,e){if(t.g){Fw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=r}catch{}}}function Fw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Gt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Qk(e)}};function bg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Mw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Zk(t){const e={};t=(t.g&&2<=Gt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(go(t[r]))continue;var n=Sk(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}yk(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $w(t){let e="";return Bf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function np(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$w(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ne(t,e,n))}function ps(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bw(t){this.Ga=0,this.j=[],this.l=new Nu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ps("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ps("baseRetryDelayMs",5e3,t),this.hb=ps("retryDelaySeedMs",1e4,t),this.eb=ps("forwardChannelMaxRetries",2,t),this.xa=ps("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new xw(t&&t.concurrentRequestLimit),this.Ja=new qk,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Bw.prototype;N.ra=8;N.H=1;function rp(t){if(zw(t),t.H==3){var e=t.W++,n=In(t.I);if(ne(n,"SID",t.K),ne(n,"RID",e),ne(n,"TYPE","terminate"),Go(t,n),e=new Ho(t,t.l,e),e.L=2,e.v=bu(In(n)),n=!1,M.navigator&&M.navigator.sendBeacon)try{n=M.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&M.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Wo(e)}Qw(t)}function Uu(t){t.g&&(sp(t),t.g.cancel(),t.g=null)}function zw(t){Uu(t),t.u&&(M.clearTimeout(t.u),t.u=null),$l(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function ju(t){if(!Dw(t.i)&&!t.m){t.m=!0;var e=t.Na;vo||dw(),_o||(vo(),_o=!0),Gf.add(e,t),t.C=0}}function eN(t,e){return Ow(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bo(Ge(t.Na,t,e),Gw(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ho(this,this.l,t);let s=this.s;if(this.U&&(s?(s=iw(s),sw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hw(this,i,e),n=In(this.I),ne(n,"RID",t),ne(n,"CVER",22),this.F&&ne(n,"X-HTTP-Session-Id",this.F),Go(this,n),s&&(this.O?e="headers="+encodeURIComponent(String($w(s)))+"&"+e:this.o&&np(n,this.o,s)),ep(this.i,i),this.bb&&ne(n,"TYPE","init"),this.P?(ne(n,"$req",e),ne(n,"SID","null"),i.aa=!0,ud(i,n,null)):ud(i,n,e),this.H=2}}else this.H==3&&(t?Vg(this,t):this.j.length==0||Dw(this.i)||Vg(this))};function Vg(t,e){var n;e?n=e.m:n=t.W++;const r=In(t.I);ne(r,"SID",t.K),ne(r,"RID",n),ne(r,"AID",t.V),Go(t,r),t.o&&t.s&&np(r,t.o,t.s),n=new Ho(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Hw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ep(t.i,n),ud(n,r,e)}function Go(t,e){t.na&&Bf(t.na,function(n,r){ne(e,r,n)}),t.h&&Rw({},function(n,r){ne(e,r,n)})}function Hw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ge(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Kk(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Ww(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vo||dw(),_o||(vo(),_o=!0),Gf.add(e,t),t.A=0}}function ip(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bo(Ge(t.Ma,t),Gw(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,qw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Bo(Ge(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Uu(this),qw(this))};function sp(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function qw(t){t.g=new Ho(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=In(t.wa);ne(e,"RID","rpc"),ne(e,"SID",t.K),ne(e,"AID",t.V),ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ne(e,"TO",t.qa),ne(e,"TYPE","xmlhttp"),Go(t,e),t.o&&t.s&&np(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=bu(In(e)),n.s=null,n.S=!0,Tw(n,t)}N.ib=function(){this.v!=null&&(this.v=null,Uu(this),ip(this),nt(19))};function $l(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function Kw(t,e){var n=null;if(t.g==e){$l(t),sp(t),t.g=null;var r=2}else if(hd(t.i,e))n=e.F,Lw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=xu(),je(r,new vw(r,n)),ju(t)}else Ww(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&eN(t,e)||r==2&&ip(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ir(t,5);break;case 4:Ir(t,10);break;case 3:Ir(t,6);break;default:Ir(t,2)}}}function Gw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ir(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ge(t.pb,t);n||(n=new Pr("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||jl(n,"https"),bu(n)),Gk(n.toString(),r)}else nt(2);t.H=0,t.h&&t.h.za(e),Qw(t),zw(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function Qw(t){if(t.H=0,t.ma=[],t.h){const e=bw(t.i);(e.length!=0||t.j.length!=0)&&(Rg(t.ma,e),Rg(t.ma,t.j),t.i.i.length=0,Ff(t.j),t.j.length=0),t.h.ya()}}function Yw(t,e,n){var r=n instanceof Pr?In(n):new Pr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Fl(r,r.m);else{var i=M.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pr(null);r&&jl(s,r),e&&(s.g=e),i&&Fl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ne(r,n,e),ne(r,"VER",t.ra),Go(t,r),r}function Xw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new fe(new qo({ob:!0})):new fe(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function Jw(){}N=Jw.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Bl(){if(Ui&&!(10<=Number(fk)))throw Error("Environmental error: no available transport.")}Bl.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){xe.call(this),this.g=new Bw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!go(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new es(this)}De(Tt,xe);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Yw(t,null,t.Y),ju(t)};Tt.prototype.close=function(){rp(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kf(t),t=n);e.j.push(new zk(e.fb++,t)),e.H==3&&ju(e)};Tt.prototype.N=function(){this.g.h=null,delete this.j,rp(this.g),delete this.g,Tt.$.N.call(this)};function Zw(t){Jf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(Zw,Jf);function eE(){Zf.call(this),this.status=1}De(eE,Zf);function es(t){this.g=t}De(es,Jw);es.prototype.Ba=function(){je(this.g,"a")};es.prototype.Aa=function(t){je(this.g,new Zw(t))};es.prototype.za=function(t){je(this.g,new eE)};es.prototype.ya=function(){je(this.g,"b")};function tN(){this.blockSize=-1}function $t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De($t,tN);$t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}$t.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Hc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Hc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Hc(this,r),i=0;break}}this.h=i,this.i+=e};$t.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Z(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var nN={};function op(t){return-128<=t&&128>t?ck(t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function Qt(t){if(isNaN(t)||!isFinite(t))return Ci;if(0>t)return Ve(Qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=dd;return new Z(e,0)}function tE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ve(tE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qt(Math.pow(e,8)),r=Ci,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Qt(Math.pow(e,s)),r=r.R(s).add(Qt(o))):(r=r.R(n),r=r.add(Qt(o)))}return r}var dd=4294967296,Ci=op(0),fd=op(1),Mg=op(16777216);N=Z.prototype;N.ea=function(){if(Ct(this))return-Ve(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:dd+r)*e,e*=dd}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(mn(this))return"0";if(Ct(this))return"-"+Ve(this).toString(t);for(var e=Qt(Math.pow(t,6)),n=this,r="";;){var i=Hl(n,e).g;n=zl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,mn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function mn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ct(t){return t.h==-1}N.X=function(t){return t=zl(this,t),Ct(t)?-1:mn(t)?0:1};function Ve(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Z(n,~t.h).add(fd)}N.abs=function(){return Ct(this)?Ve(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function zl(t,e){return t.add(Ve(e))}N.R=function(t){if(mn(this)||mn(t))return Ci;if(Ct(this))return Ct(t)?Ve(this).R(Ve(t)):Ve(Ve(this).R(t));if(Ct(t))return Ve(this.R(Ve(t)));if(0>this.X(Mg)&&0>t.X(Mg))return Qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ra(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ra(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ra(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ra(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Z(n,0)};function Ra(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ms(t,e){this.g=t,this.h=e}function Hl(t,e){if(mn(e))throw Error("division by zero");if(mn(t))return new ms(Ci,Ci);if(Ct(t))return e=Hl(Ve(t),e),new ms(Ve(e.g),Ve(e.h));if(Ct(e))return e=Hl(t,Ve(e)),new ms(Ve(e.g),e.h);if(30<t.g.length){if(Ct(t)||Ct(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fd,r=e;0>=r.X(t);)n=Ug(n),r=Ug(r);var i=ti(n,1),s=ti(r,1);for(r=ti(r,2),n=ti(n,2);!mn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ti(r,1),n=ti(n,1)}return e=zl(t,i.R(e)),new ms(i,e)}for(i=Ci;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Qt(n),o=s.R(e);Ct(o)||0<o.X(t);)n-=r,s=Qt(n),o=s.R(e);mn(s)&&(s=fd),i=i.add(s),t=zl(t,o)}return new ms(i,t)}N.gb=function(t){return Hl(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Z(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Z(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Z(n,this.h^t.h)};function Ug(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Z(n,t.h)}function ti(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Z(i,t.h)}Bl.prototype.createWebChannel=Bl.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;Du.NO_ERROR=0;Du.TIMEOUT=8;Du.HTTP_ERROR=6;_w.COMPLETE="complete";ww.EventType=zo;zo.OPEN="a";zo.CLOSE="b";zo.ERROR="c";zo.MESSAGE="d";xe.prototype.listen=xe.prototype.O;fe.prototype.listenOnce=fe.prototype.P;fe.prototype.getLastError=fe.prototype.Sa;fe.prototype.getLastErrorCode=fe.prototype.Ia;fe.prototype.getStatus=fe.prototype.da;fe.prototype.getResponseJson=fe.prototype.Wa;fe.prototype.getResponseText=fe.prototype.ja;fe.prototype.send=fe.prototype.ha;fe.prototype.setWithCredentials=fe.prototype.Oa;$t.prototype.digest=$t.prototype.l;$t.prototype.reset=$t.prototype.reset;$t.prototype.update=$t.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=Qt;Z.fromString=tE;var rN=function(){return new Bl},iN=function(){return xu()},Wc=Du,sN=_w,oN=Yr,jg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},aN=qo,Ca=ww,lN=fe,uN=$t,Pi=Z;const Fg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Cf("@firebase/firestore");function gs(){return jr.logLevel}function O(t,...e){if(jr.logLevel<=G.DEBUG){const n=e.map(ap);jr.debug(`Firestore (${ts}): ${t}`,...n)}}function Sn(t,...e){if(jr.logLevel<=G.ERROR){const n=e.map(ap);jr.error(`Firestore (${ts}): ${t}`,...n)}}function ji(t,...e){if(jr.logLevel<=G.WARN){const n=e.map(ap);jr.warn(`Firestore (${ts}): ${t}`,...n)}}function ap(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw Sn(e),new Error(e)}function ie(t,e){t||U()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class hN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dN{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new nE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new We(e)}}class fN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new fN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.R=n.token,new mN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function Fi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new Re(0,0))}static max(){return new F(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends So{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const vN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends So{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return vN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(de.fromString(e))}static fromName(e){return new V(de.fromString(e).popFirst(5))}static empty(){return new V(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new de(e.slice()))}}function _N(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new ir(i,V.empty(),e)}function wN(t){return new ir(t.readTime,t.key,-1)}class ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ir(F.min(),V.empty(),-1)}static max(){return new ir(F.max(),V.empty(),-1)}}function EN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==TN)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}lp._e=-1;function Fu(t){return t==null}function Wl(t){return t===0&&1/t==-1/0}function SN(t){return typeof t=="number"&&Number.isInteger(t)&&!Wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bg(this.data.getIterator())}getIteratorFrom(e){return new Bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class Bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new mt([])}unionWith(e){let n=new Fe(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sE("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const AN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(ie(!!t),typeof t=="string"){let e=0;const n=AN.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cp(t){const e=t.mapValue.fields.__previous_value__;return up(e)?cp(e):e}function Ao(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?up(t)?4:CN(t)?9007199254740991:10:U()}function rn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=sr(i.timestampValue),a=sr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?Wl(o)===Wl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fi(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if($g(o)!==$g(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!rn(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function Co(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),l=we(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return zg(t.timestampValue,e.timestampValue);case 4:return zg(Ao(t),Ao(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fr(s),l=Fr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=X(a[u],l[u]);if(c!==0)return c}return X(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(we(s.latitude),we(o.latitude));return a!==0?a:X(we(s.longitude),we(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=$i(a[u],l[u]);if(c)return c}return X(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ka.mapValue&&o===ka.mapValue)return 0;if(s===ka.mapValue)return 1;if(o===ka.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=X(l[h],c[h]);if(f!==0)return f;const m=$i(a[l[h]],u[c[h]]);if(m!==0)return m}return X(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function zg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=sr(t),r=sr(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function Bi(t){return pd(t)}function pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pd(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function md(t){return!!t&&"integerValue"in t}function hp(t){return!!t&&"arrayValue"in t}function Hg(t){return!!t&&"nullValue"in t}function Wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Za(t){return!!t&&"mapValue"in t}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Za(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=Me.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$s(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Za(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Za(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new at($s(this.value))}}function oE(t){const e=[];return Xr(t.fields,(n,r)=>{const i=new Me([n]);if(Za(r)){const s=oE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ke(e,0,F.min(),F.min(),F.min(),at.empty(),0)}static newFoundDocument(e,n,r,i){return new Ke(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Ke(e,2,n,F.min(),F.min(),at.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,F.min(),F.min(),at.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n){this.position=e,this.inclusive=n}}function qg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function PN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{}class Se extends aE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NN(e,n,r):n==="array-contains"?new ON(e,r):n==="in"?new LN(e,r):n==="not-in"?new bN(e,r):n==="array-contains-any"?new VN(e,r):new Se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xN(e,r):new DN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends aE{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new sn(e,n)}matches(e){return lE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function lE(t){return t.op==="and"}function uE(t){return kN(t)&&lE(t)}function kN(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function gd(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(uE(t))return t.filters.map(e=>gd(e)).join(",");{const e=t.filters.map(n=>gd(n)).join(",");return`${t.op}(${e})`}}function cE(t,e){return t instanceof Se?function(r,i){return i instanceof Se&&r.op===i.op&&r.field.isEqual(i.field)&&rn(r.value,i.value)}(t,e):t instanceof sn?function(r,i){return i instanceof sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&cE(o,i.filters[a]),!0):!1}(t,e):void U()}function hE(t){return t instanceof Se?function(n){return`${n.field.canonicalString()} ${n.op} ${Bi(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(hE).join(" ,")+"}"}(t):"Filter"}class NN extends Se{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class xN extends Se{constructor(e,n){super(e,"in",n),this.keys=dE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DN extends Se{constructor(e,n){super(e,"not-in",n),this.keys=dE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class ON extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hp(n)&&Co(n.arrayValue,this.value)}}class LN extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class bN extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class VN extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Gg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MN(t,e,n,r,i,s,o)}function dp(t){const e=$(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bi(r)).join(",")),e.ce=n}return e.ce}function fp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kg(t.startAt,e.startAt)&&Kg(t.endAt,e.endAt)}function yd(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function UN(t,e,n,r,i,s,o,a){return new $u(t,e,n,r,i,s,o,a)}function pp(t){return new $u(t)}function Qg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jN(t){return t.collectionGroup!==null}function Bs(t){const e=$(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Fe(Me.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Kl(s,r))}),n.has(Me.keyField().canonicalString())||e.le.push(new Kl(Me.keyField(),r))}return e.le}function en(t){const e=$(t);return e.he||(e.he=FN(e,Bs(t))),e.he}function FN(t,e){if(t.limitType==="F")return Gg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Kl(i.field,s)});const n=t.endAt?new ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ql(t.startAt.position,t.startAt.inclusive):null;return Gg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vd(t,e,n){return new $u(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bu(t,e){return fp(en(t),en(e))&&t.limitType===e.limitType}function fE(t){return`${dp(en(t))}|lt:${t.limitType}`}function ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hE(i)).join(", ")}]`),Fu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bi(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function zu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Bs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=qg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Bs(r),i)||r.endAt&&!function(o,a,l){const u=qg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Bs(r),i))}(t,e)}function $N(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pE(t){return(e,n)=>{let r=!1;for(const i of Bs(t)){const s=BN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BN(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?$i(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return iE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=new ce(V.comparator);function An(){return zN}const mE=new ce(V.comparator);function Cs(...t){let e=mE;for(const n of t)e=e.insert(n.key,n);return e}function gE(t){let e=mE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return zs()}function yE(){return zs()}function zs(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const HN=new ce(V.comparator),WN=new Fe(V.comparator);function q(...t){let e=WN;for(const n of t)e=e.add(n);return e}const qN=new Fe(X);function KN(){return qN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wl(e)?"-0":e}}function _E(t){return{integerValue:""+t}}function GN(t,e){return SN(e)?_E(e):vE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this._=void 0}}function QN(t,e,n){return t instanceof Gl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&up(s)&&(s=cp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof zi?EE(t,e):t instanceof Po?TE(t,e):function(i,s){const o=wE(i,s),a=Yg(o)+Yg(i.Ie);return md(o)&&md(i.Ie)?_E(a):vE(i.serializer,a)}(t,e)}function YN(t,e,n){return t instanceof zi?EE(t,e):t instanceof Po?TE(t,e):n}function wE(t,e){return t instanceof Ql?function(r){return md(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Gl extends Hu{}class zi extends Hu{constructor(e){super(),this.elements=e}}function EE(t,e){const n=IE(e);for(const r of t.elements)n.some(i=>rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Po extends Hu{constructor(e){super(),this.elements=e}}function TE(t,e){let n=IE(e);for(const r of t.elements)n=n.filter(i=>!rn(i,r));return{arrayValue:{values:n}}}class Ql extends Hu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Yg(t){return we(t.integerValue||t.doubleValue)}function IE(t){return hp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n){this.field=e,this.transform=n}}function JN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof zi&&i instanceof zi||r instanceof Po&&i instanceof Po?Fi(r.elements,i.elements,rn):r instanceof Ql&&i instanceof Ql?rn(r.Ie,i.Ie):r instanceof Gl&&i instanceof Gl}(t.transform,e.transform)}class ZN{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function el(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wu{}function SE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new RE(t.key,tn.none()):new Xo(t.key,t.data,tn.none());{const n=t.data,r=at.empty();let i=new Fe(Me.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new dr(t.key,r,new mt(i.toArray()),tn.none())}}function ex(t,e,n){t instanceof Xo?function(i,s,o){const a=i.value.clone(),l=Jg(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(i,s,o){if(!el(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Jg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(AE(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof Xo?function(s,o,a,l){if(!el(s.precondition,o))return a;const u=s.value.clone(),c=Zg(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof dr?function(s,o,a,l){if(!el(s.precondition,o))return a;const u=Zg(s.fieldTransforms,l,o),c=o.data;return c.setAll(AE(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return el(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function tx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wE(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function Xg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fi(r,i,(s,o)=>JN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xo extends Wu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class dr extends Wu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function AE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jg(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YN(o,a,n[i]))}return r}function Zg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QN(s,o,e))}return r}class RE extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nx extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ex(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=SE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&Fi(this.mutations,e.mutations,(n,r)=>Xg(n,r))&&Fi(this.baseMutations,e.baseMutations,(n,r)=>Xg(n,r))}}class mp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=function(){return HN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new mp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,Q;function ox(t){switch(t){default:return U();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function CE(t){if(t===void 0)return Sn("GRPC error has no .code"),R.UNKNOWN;switch(t){case ve.OK:return R.OK;case ve.CANCELLED:return R.CANCELLED;case ve.UNKNOWN:return R.UNKNOWN;case ve.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ve.INTERNAL:return R.INTERNAL;case ve.UNAVAILABLE:return R.UNAVAILABLE;case ve.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ve.NOT_FOUND:return R.NOT_FOUND;case ve.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ve.ABORTED:return R.ABORTED;case ve.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ve.DATA_LOSS:return R.DATA_LOSS;default:return U()}}(Q=ve||(ve={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=new Pi([4294967295,4294967295],0);function ey(t){const e=ax().encode(t),n=new uN;return n.update(e),new Uint8Array(n.digest())}function ty(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pi([n,r],0),new Pi([i,s],0)]}class gp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ps(`Invalid padding: ${n}`);if(r<0)throw new Ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Pi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Pi.fromNumber(r)));return i.compare(lx)===1&&(i=new Pi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=ey(e),[r,i]=ty(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=ey(e),[r,i]=ty(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qu(F.min(),i,new ce(X),An(),q())}}class Jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jo(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class PE{constructor(e,n){this.targetId=e,this.fe=n}}class kE{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ny{constructor(){this.ge=0,this.pe=iy(),this.ye=Je.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=q(),n=q(),r=q();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new Jo(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=iy()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class ux{constructor(e){this.Le=e,this.ke=new Map,this.qe=An(),this.Qe=ry(),this.Ke=new ce(X)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(yd(s))if(r===0){const o=new V(s.path);this.We(n,o,Ke.newNoDocument(o,F.min()))}else ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Fr(r).toUint8Array()}catch(l){if(l instanceof sE)return ji("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new gp(o,i,s)}catch(l){return ji(l instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&yd(a.target)){const l=new V(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Ke.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=q();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new qu(e,n,this.Ke,this.qe,r);return this.qe=An(),this.Qe=ry(),this.Ke=new ce(X),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new ny,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Fe(X),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new ny),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ry(){return new ce(V.comparator)}function iy(){return new ce(V.comparator)}const cx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dx=(()=>({and:"AND",or:"OR"}))();class fx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _d(t,e){return t.useProto3Json||Fu(e)?e:{value:e}}function Yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function px(t,e){return Yl(t,e.toTimestamp())}function nn(t){return ie(!!t),F.fromTimestamp(function(n){const r=sr(n);return new Re(r.seconds,r.nanos)}(t))}function yp(t,e){return function(r){return new de(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function xE(t){const e=de.fromString(t);return ie(bE(e)),e}function wd(t,e){return yp(t.databaseId,e.path)}function qc(t,e){const n=xE(e);if(n.get(1)!==t.databaseId.projectId)throw new b(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(DE(n))}function Ed(t,e){return yp(t.databaseId,e)}function mx(t){const e=xE(t);return e.length===4?de.emptyPath():DE(e)}function Td(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DE(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sy(t,e,n){return{name:wd(t,e),fields:n.value.mapValue.fields}}function gx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ie(c===void 0||typeof c=="string"),Je.fromBase64String(c||"")):(ie(c===void 0||c instanceof Uint8Array),Je.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?R.UNKNOWN:CE(u.code);return new b(c,u.message||"")}(o);n=new kE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qc(t,r.document.name),s=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):F.min(),a=new at({mapValue:{fields:r.document.fields}}),l=Ke.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new tl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qc(t,r.document),s=r.readTime?nn(r.readTime):F.min(),o=Ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new tl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qc(t,r.document),s=r.removedTargetIds||[];n=new tl([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sx(i,s),a=r.targetId;n=new PE(a,o)}}return n}function yx(t,e){let n;if(e instanceof Xo)n={update:sy(t,e.key,e.value)};else if(e instanceof RE)n={delete:wd(t,e.key)};else if(e instanceof dr)n={update:sy(t,e.key,e.data),updateMask:Rx(e.fieldMask)};else{if(!(e instanceof nx))return U();n={verify:wd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ql)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:px(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function vx(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?nn(i.updateTime):nn(s);return o.isEqual(F.min())&&(o=nn(s)),new ZN(o,i.transformResults||[])}(n,e))):[]}function _x(t,e){return{documents:[Ed(t,e.path)]}}function wx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ed(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ed(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return LE(sn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ri(h.field),direction:Ix(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=_d(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Ex(t){let e=mx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const f=OE(h);return f instanceof sn&&uE(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(v){return new Kl(ii(v.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Fu(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,m=h.values||[];return new ql(m,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,m=h.values||[];return new ql(m,f)}(n.endAt)),UN(e,i,o,s,a,"F",l,u)}function Tx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ii(n.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ii(n.unaryFilter.field);return Se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(n.unaryFilter.field);return Se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(n.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return Se.create(ii(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>OE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function Ix(t){return cx[t]}function Sx(t){return hx[t]}function Ax(t){return dx[t]}function ri(t){return{fieldPath:t.canonicalString()}}function ii(t){return Me.fromServerFormat(t.fieldPath)}function LE(t){return t instanceof Se?function(n){if(n.op==="=="){if(Wg(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NAN"}};if(Hg(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wg(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NAN"}};if(Hg(n.value))return{unaryFilter:{field:ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(n.field),op:Sx(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(i=>LE(i));return r.length===1?r[0]:{compositeFilter:{op:Ax(n.op),filters:r}}}(t):U()}function Rx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.ut=e}}function Px(t){const e=Ex({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(){this.on=new Nx}addToCollectionParentIndex(e,n){return this.on.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(ir.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class Nx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Hi(0)}static Nn(){return new Hi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(){this.changes=new ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Hs(r.mutation,i,mt.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Cs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=An();const o=zs(),a=function(){return zs()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof dr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Hs(c.mutation,u,c.mutation.getFieldMask(),Re.now())):o.set(u.key,mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Dx(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=zs();let i=new ce((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||mt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=yE();c.forEach(f=>{if(!s.has(f)){const m=SE(n.get(f),r.get(f));m!==null&&h.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Sr());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:gE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=Cs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Cs();return this.indexManager.getCollectionParents(e,s).next(a=>A.forEach(a,l=>{const u=function(h,f){return new $u(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Ke.newInvalidDocument(c)))});let a=Cs();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Hs(c.mutation,u,mt.empty(),Re.now()),zu(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Px(i.bundledQuery),readTime:nn(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(){this.overlays=new ce(V.comparator),this.lr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ce((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Sr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Sr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ix(n,r));let s=this.lr.get(n);s===void 0&&(s=q(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.hr=new Fe(Pe.Pr),this.Ir=new Fe(Pe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Pe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new V(new de([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new V(new de([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=q();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return V.comparator(e.key,n.key)||X(e.gr,n.gr)}static Tr(e,n){return X(e.gr,n.gr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Fe(Pe.Pr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(X);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new V(s),0);let a=new Fe(X);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),A.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Pe(n,0),i=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.Cr=e,this.docs=function(){return new ce(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ke.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||EN(wN(c),r)<=0||(i.has(c.key)||zu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ux(this)}getSize(e){return A.resolve(this.size)}}class Ux extends xx{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.persistence=e,this.Fr=new ns(n=>dp(n),fp),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Mr=0,this.Or=new vp,this.targetCount=0,this.Nr=Hi.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Hi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.kn(n),A.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n){this.Br={},this.overlays={},this.Lr=new lp(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new jx(this),this.indexManager=new kx,this.remoteDocumentCache=function(i){return new Mx(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Cx(n),this.Kr=new Lx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Vx(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new $x(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class $x extends IN{constructor(e){super(),this.currentSequenceNumber=e}}class _p{constructor(e){this.persistence=e,this.Gr=new vp,this.zr=null}static jr(e){return new _p(e)}get Hr(){if(this.zr)return this.zr;throw U()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const i=V.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Bx;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(gs()<=G.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(gs()<=G.DEBUG&&O("QueryEngine","Query:",ni(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(gs()<=G.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):A.resolve())}zi(e,n){if(Qg(n))return A.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vd(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,vd(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return Qg(n)||i.isEqual(F.min())?A.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?A.resolve(null):(gs()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ni(n)),this.Xi(e,o,n,_N(i,-1)).next(a=>a))})}Yi(e,n){let r=new Fe(pE(e));return n.forEach((i,s)=>{zu(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return gs()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",ni(n)),this.Gi.getDocumentsMatchingQuery(e,n,ir.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ce(X),this.ns=new ns(s=>dp(s),fp),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ox(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function Wx(t,e,n,r){return new Hx(t,e,n,r)}async function VE(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function qx(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let m=A.resolve();return f.forEach(v=>{m=m.next(()=>c.getEntry(l,v)).next(_=>{const T=u.docVersions.get(v);ie(T!==null),_.version.compareTo(T)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ME(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Kx(t,e){const n=$(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let m=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Je.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(_,T,g){return _.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,m,c)&&a.push(n.qr.updateTargetData(s,m))});let l=An(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Gx(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(F.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function Gx(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function Qx(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Yx(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Id(t,e,n){const r=$(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function oy(t,e,n){const r=$(t);let i=F.min(),s=q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=$(l),f=h.ns.get(c);return f!==void 0?A.resolve(h.ts.get(f)):h.qr.getTargetData(u,c)}(r,o,en(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:q())).next(a=>(Xx(r,$N(e),a),{documents:a,ls:s})))}function Xx(t,e,n){let r=t.rs.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class ay{constructor(){this.activeTargetIds=KN()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jx{constructor(){this.eo=new ay,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new ay,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na=null;function Kc(){return Na===null?Na=function(){return 268435456+Math.round(2147483648*Math.random())}():Na++,"0x"+Na.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class nD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Kc(),l=this.So(n,r);O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ji("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=eD[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Kc();return new Promise((o,a)=>{const l=new lN;l.setWithCredentials(!0),l.listenOnce(sN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wc.NO_ERROR:const c=l.getResponseJson();O(He,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Wc.TIMEOUT:O(He,`RPC '${e}' ${s} timed out`),a(new b(R.DEADLINE_EXCEEDED,"Request time out"));break;case Wc.HTTP_ERROR:const h=l.getStatus();if(O(He,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const v=function(T){const g=T.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(g)>=0?g:R.UNKNOWN}(m.status);a(new b(v,m.message))}else a(new b(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(R.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O(He,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(He,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Kc(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rN(),a=iN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new aN({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(He,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,m=!1;const v=new tD({co:T=>{m?O(He,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(f||(O(He,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),O(He,`RPC '${e}' stream ${i} sending:`,T),h.send(T))},lo:()=>h.close()}),_=(T,g,p)=>{T.listen(g,y=>{try{p(y)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,Ca.EventType.OPEN,()=>{m||O(He,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Ca.EventType.CLOSE,()=>{m||(m=!0,O(He,`RPC '${e}' stream ${i} transport closed`),v.Ro())}),_(h,Ca.EventType.ERROR,T=>{m||(m=!0,ji(He,`RPC '${e}' stream ${i} transport errored:`,T),v.Ro(new b(R.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ca.EventType.MESSAGE,T=>{var g;if(!m){const p=T.data[0];ie(!!p);const y=p,E=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(E){O(He,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let I=function(W){const j=ve[W];if(j!==void 0)return CE(j)}(S),P=E.message;I===void 0&&(I=R.INTERNAL,P="Unknown error status: "+S+" with message "+E.message),m=!0,v.Ro(new b(I,P)),h.close()}else O(He,`RPC '${e}' stream ${i} received:`,p),v.Vo(p)}}),_(a,oN.STAT_EVENT,T=>{T.stat===jg.PROXY?O(He,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===jg.NOPROXY&&O(He,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function Gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return new fx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new UE(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new b(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rD extends jE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=gx(this.serializer,e),r=function(s){if(!("targetChange"in s))return F.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?nn(o.readTime):F.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Td(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=yd(l)?{documents:_x(s,l)}:{query:wx(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=NE(s,o.resumeToken);const u=_d(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=Yl(s,o.snapshotVersion.toTimestamp());const u=_d(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Tx(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Td(this.serializer),n.removeTarget=e,this.e_(n)}}class iD extends jE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=vx(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.I_(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Td(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yx(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new b(R.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(R.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(R.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class oD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Sn(n),this.f_=!1):O("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Jr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=$(l);u.C_.add(4),await Zo(u),u.M_.set("Unknown"),u.C_.delete(4),await Gu(u)}(this))})}),this.M_=new oD(r,i)}}async function Gu(t){if(Jr(t))for(const e of t.v_)await e(!0)}async function Zo(t){for(const e of t.v_)await e(!1)}function FE(t,e){const n=$(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Ip(n)?Tp(n):rs(n).Ho()&&Ep(n,e))}function $E(t,e){const n=$(t),r=rs(n);n.D_.delete(e),r.Ho()&&BE(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Jr(n)&&n.M_.set("Unknown"))}function Ep(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}rs(t).u_(e)}function BE(t,e){t.x_.Oe(e),rs(t).c_(e)}function Tp(t){t.x_=new ux({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),rs(t).start(),t.M_.g_()}function Ip(t){return Jr(t)&&!rs(t).jo()&&t.D_.size>0}function Jr(t){return $(t).C_.size===0}function zE(t){t.x_=void 0}async function lD(t){t.D_.forEach((e,n)=>{Ep(t,e)})}async function uD(t,e){zE(t),Ip(t)?(t.M_.w_(e),Tp(t)):t.M_.set("Unknown")}async function cD(t,e,n){if(t.M_.set("Online"),e instanceof kE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xl(t,r)}else if(e instanceof tl?t.x_.$e(e):e instanceof PE?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(F.min()))try{const r=await ME(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(Je.EMPTY_BYTE_STRING,c.snapshotVersion)),BE(s,l);const h=new Bn(c.target,l,u,c.sequenceNumber);Ep(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Xl(t,r)}}async function Xl(t,e,n){if(!Yo(e))throw e;t.C_.add(1),await Zo(t),t.M_.set("Offline"),n||(n=()=>ME(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Gu(t)})}function HE(t,e){return e().catch(n=>Xl(t,n,e))}async function Qu(t){const e=$(t),n=or(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;hD(e);)try{const i=await Qx(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,dD(e,i)}catch(i){await Xl(e,i)}WE(e)&&qE(e)}function hD(t){return Jr(t)&&t.b_.length<10}function dD(t,e){t.b_.push(e);const n=or(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function WE(t){return Jr(t)&&!or(t).jo()&&t.b_.length>0}function qE(t){or(t).start()}async function fD(t){or(t).E_()}async function pD(t){const e=or(t);for(const n of t.b_)e.P_(n.mutations)}async function mD(t,e,n){const r=t.b_.shift(),i=mp.from(r,e,n);await HE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qu(t)}async function gD(t,e){e&&or(t).h_&&await async function(r,i){if(function(o){return ox(o)&&o!==R.ABORTED}(i.code)){const s=r.b_.shift();or(r).Yo(),await HE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qu(r)}}(t,e),WE(t)&&qE(t)}async function uy(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Jr(n);n.C_.add(3),await Zo(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Gu(n)}async function yD(t,e){const n=$(t);e?(n.C_.delete(2),await Gu(n)):e||(n.C_.add(2),await Zo(n),n.M_.set("Unknown"))}function rs(t){return t.O_||(t.O_=function(n,r,i){const s=$(n);return s.A_(),new rD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:lD.bind(null,t),Io:uD.bind(null,t),a_:cD.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Ip(t)?Tp(t):t.M_.set("Unknown")):(await t.O_.stop(),zE(t))})),t.O_}function or(t){return t.N_||(t.N_=function(n,r,i){const s=$(n);return s.A_(),new iD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:fD.bind(null,t),Io:gD.bind(null,t),T_:pD.bind(null,t),I_:mD.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Qu(t)):(await t.N_.stop(),t.b_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ap(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),Yo(t))return new b(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.B_=new ce(V.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):U():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Wi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Wi(e,n,ki.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(){this.k_=void 0,this.listeners=[]}}class _D{constructor(){this.queries=new ns(e=>fE(e),Bu),this.onlineState="Unknown",this.q_=new Set}}async function wD(t,e){const n=$(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vD),i)try{s.k_=await n.onListen(r)}catch(o){const a=Ap(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&Rp(n)}async function ED(t,e){const n=$(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function TD(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Rp(n)}function ID(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Rp(t){t.q_.forEach(e=>{e.next()})}class SD{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.key=e}}class GE{constructor(e){this.key=e}}class AD{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=q(),this.mutatedKeys=q(),this._a=pE(e),this.aa=new ki(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new cy,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),m=zu(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;f&&m?f.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),T=!0):this.ha(f,m)||(r.track({type:2,doc:m}),T=!0,(l&&this._a(m,l)>0||u&&this._a(m,u)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),T=!0):f&&!m&&(r.track({type:1,doc:f}),T=!0,(l||u)&&(a=!0)),T&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,c)=>function(f,m){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return v(f)-v(m)}(u.type,c.type)||this._a(u.doc,c.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,s.length!==0||l?{snapshot:new Wi(this.query,e.aa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new cy,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=q(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new GE(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new KE(r))}),n}da(e){this.ia=e.ls,this.oa=q();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Wi.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class RD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CD{constructor(e){this.key=e,this.Ra=!1}}class PD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ns(a=>fE(a),Bu),this.fa=new Map,this.ga=new Set,this.pa=new ce(V.comparator),this.ya=new Map,this.wa=new vp,this.Sa={},this.ba=new Map,this.Da=Hi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function kD(t,e){const n=jD(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await Yx(n.localStore,en(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ND(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&FE(n.remoteStore,o)}return i}async function ND(t,e,n,r,i){t.va=(h,f,m)=>async function(_,T,g,p){let y=T.view.ca(g);y.Zi&&(y=await oy(_.localStore,T.query,!1).then(({documents:I})=>T.view.ca(I,y)));const E=p&&p.targetChanges.get(T.targetId),S=T.view.applyChanges(y,_.isPrimaryClient,E);return dy(_,T.targetId,S.Ta),S.snapshot}(t,h,f,m);const s=await oy(t.localStore,e,!0),o=new AD(e,s.ls),a=o.ca(s.documents),l=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);dy(t,n,u.Ta);const c=new RD(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function xD(t,e){const n=$(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Bu(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Id(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$E(n.remoteStore,r.targetId),Sd(n,r.targetId)}).catch(Qo)):(Sd(n,r.targetId),await Id(n.localStore,r.targetId,!0))}async function DD(t,e,n){const r=FD(t);try{const i=await function(o,a){const l=$(o),u=Re.now(),c=a.reduce((m,v)=>m.add(v.key),q());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=An(),_=q();return l.ss.getEntries(m,c).next(T=>{v=T,v.forEach((g,p)=>{p.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,v)).next(T=>{h=T;const g=[];for(const p of a){const y=tx(p,h.get(p.key).overlayedDocument);y!=null&&g.push(new dr(p.key,y,oE(y.value.mapValue),tn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,g,a)}).next(T=>{f=T;const g=T.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(m,T.batchId,g)})}).then(()=>({batchId:f.batchId,changes:gE(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new ce(X)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ea(r,i.changes),await Qu(r.remoteStore)}catch(i){const s=Ap(i,"Failed to persist write");n.reject(s)}}async function QE(t,e){const n=$(t);try{const r=await Kx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?ie(o.Ra):i.removedDocuments.size>0&&(ie(o.Ra),o.Ra=!1))}),await ea(n,r,e)}catch(r){await Qo(r)}}function hy(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=$(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&Rp(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OD(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new ce(V.comparator);o=o.insert(s,Ke.newNoDocument(s,F.min()));const a=q().add(s),l=new qu(F.min(),new Map,new ce(X),o,a);await QE(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),Cp(r)}else await Id(r.localStore,e,!1).then(()=>Sd(r,e,n)).catch(Qo)}async function LD(t,e){const n=$(t),r=e.batch.batchId;try{const i=await qx(n.localStore,e);XE(n,r,null),YE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,i)}catch(i){await Qo(i)}}async function bD(t,e,n){const r=$(t);try{const i=await function(o,a){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ie(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);XE(r,e,n),YE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ea(r,i)}catch(i){await Qo(i)}}function YE(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function XE(t,e,n){const r=$(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Sd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||JE(t,r)})}function JE(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&($E(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Cp(t))}function dy(t,e,n){for(const r of n)r instanceof KE?(t.wa.addReference(r.key,e),VD(t,r)):r instanceof GE?(O("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||JE(t,r.key)):U()}function VD(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(O("SyncEngine","New document in limbo: "+n),t.ga.add(r),Cp(t))}function Cp(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new V(de.fromString(e)),r=t.Da.next();t.ya.set(r,new CD(n)),t.pa=t.pa.insert(n,r),FE(t.remoteStore,new Bn(en(pp(n.path)),r,"TargetPurposeLimboResolution",lp._e))}}async function ea(t,e,n){const r=$(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=wp.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=$(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(u,f=>A.forEach(f.ki,m=>c.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>A.forEach(f.qi,m=>c.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Yo(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const m=c.ts.get(f),v=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(v);c.ts=c.ts.insert(f,_)}}}(r.localStore,s))}async function MD(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await VE(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new b(R.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(n,r._s)}}function UD(t,e){const n=$(t),r=n.ya.get(e);if(r&&r.Ra)return q().add(r.key);{let i=q();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function jD(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=QE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OD.bind(null,e),e.Va.a_=TD.bind(null,e.eventManager),e.Va.Fa=ID.bind(null,e.eventManager),e}function FD(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bD.bind(null,e),e}class fy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Wx(this.persistence,new zx,e.initialUser,this.serializer)}createPersistence(e){return new Fx(_p.jr,this.serializer)}createSharedClientState(e){return new Jx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $D{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MD.bind(null,this.syncEngine),await yD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _D}()}createDatastore(e){const n=Ku(e.databaseInfo.databaseId),r=function(s){return new nD(s)}(e.databaseInfo);return function(s,o,a,l){return new sD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new aD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>hy(this.syncEngine,n,0),function(){return ly.D()?new ly:new Zx}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new PD(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=$(n);O("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Zo(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=rE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ap(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await VE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WD(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>uy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>uy(e.remoteStore,s)),t._onlineComponents=e}function HD(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function WD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!HD(n))throw n;ji("Error using user provided cache. Falling back to memory cache: "+n),await Qc(t,new fy)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Qc(t,new fy);return t._offlineComponents}async function ZE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await py(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await py(t,new $D))),t._onlineComponents}function qD(t){return ZE(t).then(e=>e.syncEngine)}async function KD(t){const e=await ZE(t),n=e.eventManager;return n.onListen=kD.bind(null,e.syncEngine),n.onUnlisten=xD.bind(null,e.syncEngine),n}function GD(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new BD({next:f=>{o.enqueueAndForget(()=>ED(s,h));const m=f.docs.has(a);!m&&f.fromCache?u.reject(new b(R.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&l&&l.source==="server"?u.reject(new b(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new SD(pp(a.path),c,{includeMetadataChanges:!0,J_:!0});return wD(s,h)}(await KD(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t,e,n){if(!n)throw new b(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YD(t,e,n,r){if(e===!0&&r===!0)throw new b(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gy(t){if(!V.isDocumentKey(t))throw new b(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function Br(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pp(t);throw new b(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cN;switch(r.type){case"firstParty":return new pN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=my.get(n);r&&(O("ComponentProvider","Removing Datastore"),my.delete(n),r.terminate())}(this),Promise.resolve()}}function XD(t,e,n,r={}){var i;const s=(t=Br(t,kp))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=We.MOCK_USER;else{a=g0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new We(u)}t._authCredentials=new hN(new nE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Np(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ko(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class ko extends Np{constructor(e,n,r){super(e,n,pp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new V(e))}withConverter(e){return new ko(this.firestore,e,this._path)}}function Ut(t,e,...n){if(t=Te(t),arguments.length===1&&(e=rE.newId()),QD("doc","path",e),t instanceof kp){const r=de.fromString(e,...n);return gy(r),new _t(t,null,new V(r))}{if(!(t instanceof _t||t instanceof ko))throw new b(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return gy(r),new _t(t.firestore,t instanceof ko?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new UE(this,"async_queue_retry"),this.iu=()=>{const n=Gc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new er;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Yo(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Sn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Sp.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&U()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Yu extends kp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new JD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nT(this),this._firestoreClient.terminate()}}function ZD(t,e){const n=typeof t=="object"?t:kf(),r=typeof t=="string"?t:e||"(default)",i=wu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=f0("firestore");s&&XD(i,...s)}return i}function tT(t){return t._firestoreClient||nT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new RN(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,eT(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qi(Je.fromBase64String(e))}catch(n){throw new b(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qi(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=/^__.*__$/;class tO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xo(e,this.data,n,this.fieldTransforms)}}class rT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Zu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Jl(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(iT(this.Iu)&&eO.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class nO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ku(e)}pu(e,n,r,i=!1){return new Zu({Iu:e,methodName:n,gu:r,path:Me.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sT(t){const e=t._freezeSettings(),n=Ku(t._databaseId);return new nO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rO(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Dp("Data must be an object, but it was:",o,r);const a=oT(r,o);let l,u;if(s.merge)l=new mt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=Ad(e,h,n);if(!o.contains(f))throw new b(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);lT(c,f)||c.push(f)}l=new mt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new tO(new at(a),l,u)}class ec extends Ju{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}function iO(t,e,n){return new Zu({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class sO extends Ju{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=iO(this,e,!0),r=this.yu.map(s=>ta(s,n)),i=new zi(r);return new XN(e.path,i)}isEqual(e){return this===e}}function oO(t,e,n,r){const i=t.pu(1,e,n);Dp("Data must be an object, but it was:",i,r);const s=[],o=at.empty();Xr(r,(l,u)=>{const c=Op(e,l,n);u=Te(u);const h=i.Ru(c);if(u instanceof ec)s.push(c);else{const f=ta(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new mt(s);return new rT(o,a,i.fieldTransforms)}function aO(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Ad(e,r,n)],l=[i];if(s.length%2!=0)throw new b(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Ad(e,s[f])),l.push(s[f+1]);const u=[],c=at.empty();for(let f=a.length-1;f>=0;--f)if(!lT(u,a[f])){const m=a[f];let v=l[f];v=Te(v);const _=o.Ru(m);if(v instanceof ec)u.push(m);else{const T=ta(v,_);T!=null&&(u.push(m),c.set(m,T))}}const h=new mt(u);return new rT(c,h,o.fieldTransforms)}function ta(t,e){if(aT(t=Te(t)))return Dp("Unsupported field value:",e,t),oT(t,e);if(t instanceof Ju)return function(r,i){if(!iT(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ta(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:Yl(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yl(i.serializer,s)}}if(r instanceof xp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qi)return{bytesValue:NE(i.serializer,r._byteString)};if(r instanceof _t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Pp(r)}`)}(t,e)}function oT(t,e){const n={};return iE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(t,(r,i)=>{const s=ta(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function aT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof xp||t instanceof qi||t instanceof _t||t instanceof Ju)}function Dp(t,e,n){if(!aT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Pp(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Ad(t,e,n){if((e=Te(e))instanceof Xu)return e._internalPath;if(typeof e=="string")return Op(t,e);throw Jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const lO=new RegExp("[~\\*/\\[\\]]");function Op(t,e,n){if(e.search(lO)>=0)throw Jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xu(...e.split("."))._internalPath}catch{throw Jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(R.INVALID_ARGUMENT,a+t+l)}function lT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uO extends uT{data(){return super.data()}}function cT(t,e){return typeof e=="string"?Op(t,e):e instanceof Xu?e._internalPath:e._delegate._internalPath}class cO{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new xp(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ao(e));default:return null}}convertTimestamp(e){const n=sr(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);ie(bE(r));const i=new Ro(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||Sn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hT extends uT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fO(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fO extends hT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){t=Br(t,_t);const e=Br(t.firestore,Yu);return GD(tT(e),t._key).then(n=>gO(e,t,n))}class pO extends cO{constructor(e){super(),this.firestore=e}convertBytes(e){return new qi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function kr(t,e,n){t=Br(t,_t);const r=Br(t.firestore,Yu),i=hO(t.converter,e,n);return dT(r,[rO(sT(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tn.none())])}function mO(t,e,n,...r){t=Br(t,_t);const i=Br(t.firestore,Yu),s=sT(i);let o;return o=typeof(e=Te(e))=="string"||e instanceof Xu?aO(s,"updateDoc",t._key,e,n,r):oO(s,"updateDoc",t._key,e),dT(i,[o.toMutation(t._key,tn.exists(!0))])}function dT(t,e){return function(r,i){const s=new er;return r.asyncQueue.enqueueAndForget(async()=>DD(await qD(r),i,s)),s.promise}(tT(t),e)}function gO(t,e,n){const r=n.docs.get(e._key),i=new pO(t);return new hT(t,i,e._key,r,new dO(n.hasPendingWrites,n.fromCache),e.converter)}function yO(...t){return new sO("arrayUnion",t)}(function(e,n=!0){(function(i){ts=i})(Qr),Mr(new rr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Yu(new dN(r.getProvider("auth-internal")),new gN(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new b(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Zt(Fg,"4.3.2",e),Zt(Fg,"4.3.2","esm2017")})();var vO="firebase",_O="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(vO,_O,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="firebasestorage.googleapis.com",pT="storageBucket",wO=2*60*1e3,EO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends an{constructor(e,n,r=0){super(Yc(e),`Firebase Storage: ${n} (${Yc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function Yc(t){return"storage/"+t}function Lp(){const t="An unknown error occurred, please check the error payload for server response.";return new me(pe.UNKNOWN,t)}function TO(t){return new me(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function IO(t){return new me(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function SO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new me(pe.UNAUTHENTICATED,t)}function AO(){return new me(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function RO(t){return new me(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function CO(){return new me(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PO(){return new me(pe.CANCELED,"User canceled the upload/download.")}function kO(t){return new me(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function NO(t){return new me(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xO(){return new me(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pT+"' property when initializing the app?")}function DO(){return new me(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OO(){return new me(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LO(t){return new me(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Rd(t){return new me(pe.INVALID_ARGUMENT,t)}function mT(){return new me(pe.APP_DELETED,"The Firebase app was deleted.")}function bO(t){return new me(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ws(t,e){return new me(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ys(t){throw new me(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gt.makeFromUrl(e,n)}catch{return new gt(e,"")}if(r.path==="")return r;throw NO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},_=n===fT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${T}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:m,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const S=y[E],I=S.regex.exec(e);if(I){const P=I[S.indices.bucket];let k=I[S.indices.path];k||(k=""),r=new gt(P,k),S.postModify(r);break}}if(r==null)throw kO(e);return r}}class VO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(m,l())},T)}function f(){s&&clearTimeout(s)}function m(T,...g){if(u){f();return}if(T){f(),c.call(null,T,...g);return}if(l()||o){f(),c.call(null,T,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(T){v||(v=!0,f(),!u&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function UO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(t){return t!==void 0}function FO(t){return typeof t=="object"&&!Array.isArray(t)}function bp(t){return typeof t=="string"||t instanceof String}function vy(t){return Vp()&&t instanceof Blob}function Vp(){return typeof Blob<"u"&&!gA()}function _y(t,e,n,r){if(r<e)throw Rd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Rd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function gT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nr||(Nr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,r,i,s,o,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new xa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nr.NO_ERROR,l=s.getStatus();if(!a||$O(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Nr.ABORT;r(!1,new xa(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new xa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());jO(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Lp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?mT():PO();o(l)}else{const l=CO();o(l)}};this.canceled_?n(!1,new xa(!1,null,!0)):this.backoffId_=MO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function HO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function KO(t,e,n,r,i,s,o=!0){const a=gT(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return WO(u,e),zO(u,n),HO(u,s),qO(u,r),new BO(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function QO(...t){const e=GO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Vp())return new Blob(t);throw new me(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function YO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){if(typeof atob>"u")throw LO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xc{constructor(e,n){this.data=e,this.contentType=n||null}}function JO(t,e){switch(t){case Yt.RAW:return new Xc(yT(e));case Yt.BASE64:case Yt.BASE64URL:return new Xc(vT(t,e));case Yt.DATA_URL:return new Xc(e2(e),t2(e))}throw Lp()}function yT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ZO(t){let e;try{e=decodeURIComponent(t)}catch{throw Ws(Yt.DATA_URL,"Malformed data URL.")}return yT(e)}function vT(t,e){switch(t){case Yt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ws(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Yt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ws(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XO(e)}catch(i){throw i.message.includes("polyfill")?i:Ws(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class _T{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ws(Yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=n2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function e2(t){const e=new _T(t);return e.base64?vT(Yt.BASE64,e.rest):ZO(e.rest)}function t2(t){return new _T(t).contentType}function n2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){let r=0,i="";vy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(vy(this.data_)){const r=this.data_,i=YO(r,e,n);return i===null?null:new Un(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Un(r,!0)}}static getBlob(...e){if(Vp()){const n=e.map(r=>r instanceof Un?r.data_:r);return new Un(QO.apply(null,n))}else{const n=e.map(o=>bp(o)?JO(Yt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Un(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){let e;try{e=JSON.parse(t)}catch{return null}return FO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function i2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ET(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(t,e){return e}class Ze{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||s2}}let Da=null;function o2(t){return!bp(t)||t.length<2?t:ET(t)}function TT(){if(Da)return Da;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(s,o){return o2(o)}const n=new Ze("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ze("size");return i.xform=r,t.push(i),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Da=t,Da}function a2(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new gt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function l2(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return a2(r,t),r}function IT(t,e,n){const r=wT(e);return r===null?null:l2(t,r,n)}function u2(t,e,n,r){const i=wT(e);if(i===null||!bp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),m=Mp(f,n,r),v=gT({alt:"media",token:u});return m+v})[0]}function c2(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ST{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){if(!t)throw Lp()}function h2(t,e){function n(r,i){const s=IT(t,i,e);return AT(s!==null),s}return n}function d2(t,e){function n(r,i){const s=IT(t,i,e);return AT(s!==null),u2(s,i,t.host,t._protocol)}return n}function RT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=AO():i=SO():n.getStatus()===402?i=IO(t.bucket):n.getStatus()===403?i=RO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function f2(t){const e=RT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=TO(t.path)),s.serverResponse=i.serverResponse,s}return n}function p2(t,e,n){const r=e.fullServerUrl(),i=Mp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ST(i,s,d2(t,n),o);return a.errorHandler=f2(e),a}function m2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function g2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=m2(null,e)),r}function y2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let E=0;E<2;E++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=g2(e,r,i),c=c2(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=Un.getBlob(h,r,f);if(m===null)throw DO();const v={name:u.fullPath},_=Mp(s,t.host,t._protocol),T="POST",g=t.maxUploadRetryTime,p=new ST(_,T,h2(t,n),g);return p.urlParams=v,p.headers=o,p.body=m.uploadData(),p.errorHandler=RT(e),p}class v2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Nr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Nr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Nr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ys("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ys("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ys("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ys("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ys("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _2 extends v2{initXhr(){this.xhr_.responseType="text"}}function CT(){return new _2}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this._service=e,n instanceof gt?this._location=n:this._location=gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zr(e,n)}get root(){const e=new gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ET(this._location.path)}get storage(){return this._service}get parent(){const e=r2(this._location.path);if(e===null)return null;const n=new gt(this._location.bucket,e);return new zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bO(e)}}function w2(t,e,n){t._throwIfRoot("uploadBytes");const r=y2(t.storage,t._location,TT(),new Un(e,!0),n);return t.storage.makeRequestWithTokens(r,CT).then(i=>({metadata:i,ref:t}))}function E2(t){t._throwIfRoot("getDownloadURL");const e=p2(t.storage,t._location,TT());return t.storage.makeRequestWithTokens(e,CT).then(n=>{if(n===null)throw OO();return n})}function T2(t,e){const n=i2(t._location.path,e),r=new gt(t._location.bucket,n);return new zr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t){return/^[A-Za-z]+:\/\//.test(t)}function S2(t,e){return new zr(t,e)}function PT(t,e){if(t instanceof Up){const n=t;if(n._bucket==null)throw xO();const r=new zr(n,n._bucket);return e!=null?PT(r,e):r}else return e!==void 0?T2(t,e):t}function A2(t,e){if(e&&I2(e)){if(t instanceof Up)return S2(t,e);throw Rd("To use ref(service, url), the first argument must be a Storage instance.")}else return PT(t,e)}function wy(t,e){const n=e==null?void 0:e[pT];return n==null?null:gt.makeFromBucketSpec(n,t)}function R2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:g0(i,t.app.options.projectId))}class Up{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=fT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wO,this._maxUploadRetryTime=EO,this._requests=new Set,i!=null?this._bucket=gt.makeFromBucketSpec(i,this._host):this._bucket=wy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,e):this._bucket=wy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new VO(mT());{const o=KO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ey="@firebase/storage",Ty="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="storage";function C2(t,e,n){return t=Te(t),w2(t,e,n)}function P2(t){return t=Te(t),E2(t)}function k2(t,e){return t=Te(t),A2(t,e)}function N2(t=kf(),e){t=Te(t);const r=wu(t,kT).getImmediate({identifier:e}),i=f0("storage");return i&&x2(r,...i),r}function x2(t,e,n,r={}){R2(t,e,n,r)}function D2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Up(n,r,i,e,Qr)}function O2(){Mr(new rr(kT,D2,"PUBLIC").setMultipleInstances(!0)),Zt(Ey,Ty,""),Zt(Ey,Ty,"esm2017")}O2();const L2={apiKey:"AIzaSyASoisDyyDyyNM23ypRAsBkn6B6ZyXmAmc",authDomain:"paragraph-delivery.firebaseapp.com",projectId:"paragraph-delivery",storageBucket:"paragraph-delivery.appspot.com",messagingSenderId:"712240151592",appId:"1:712240151592:web:e30fe167745da6f5edc91d"},jp=_0(L2),No=nk(jp),jt=ZD(jp),b2=N2(jp);const V2="/Paragraph-Delivery/assets/item-bg-coffee-6ecc0763.jpg",M2="/Paragraph-Delivery/assets/item-bg-beverages-2e678329.jpg",U2="/Paragraph-Delivery/assets/item-bg-desserts-ca0bb1fc.jpg",j2="/Paragraph-Delivery/assets/item-bg-food-d95b554e.jpg",Cd=[{id:"coffee",name:"Зерновой кофе",singleProduct:!0,url:V2},{id:"beverages",name:"Напитки",singleProduct:!1,url:M2},{id:"desserts",name:"Десерты",singleProduct:!1,url:U2},{id:"food",name:"Еда",singleProduct:!1,url:j2}];const is=({text:t="Loading..."})=>d.jsx("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"5.2rem"},children:t}),F2=({loading:t,setLoading:e,isAuth:n,setIsAuth:r,isRegister:i,setIsRegister:s,userData:o})=>t?d.jsx(is,{text:"Load Home"}):n?i?d.jsx("div",{className:"home",children:d.jsx("div",{className:"home-wrapper",children:d.jsxs("div",{className:"home-items",children:[Cd.map((a,l)=>d.jsx("div",{className:"home-item",children:d.jsxs(ho,{to:a.singleProduct?`/product/${a.id}`:`/products/${a.id}`,className:"home-item-link",children:[d.jsx("div",{className:"home-item-photo",children:d.jsx("img",{src:a.url})}),d.jsx("div",{className:"home-item-text",children:a.name})]})},l)),d.jsx(qS,{})]})})}):(console.log("Not Register"),d.jsx(Et,{to:"/register"})):(console.log("Not Auth"),d.jsx(Et,{to:"/auth"})),$2=({loading:t,setLoading:e,isAuth:n,isRegister:r})=>{const[i,s]=w.useState(""),[o,a]=w.useState(""),[l,u]=w.useState(!0),[c,h]=w.useState(!1),[f,m]=w.useState(!1),[v,_]=w.useState(!1);w.useState(!1);const T=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new nP(No,"recaptcha-container",{size:"invisible"})),window.recaptchaVerifier.render()},g=y=>{y.preventDefault(),m(!0),T();const E=window.recaptchaVerifier;sP(No,i,E).then(S=>{u(!1),h(!0),window.confirmationResult=S}).catch(S=>{console.error("Error during sign-in with phone number:",S.code,S.message)}).finally(()=>{m(!1)})},p=y=>{y.preventDefault(),_(!0),o.length===6&&window.confirmationResult.confirm(o).then(S=>{console.log(S),e(!0)}).catch(S=>{console.error("Error During verify OTP",S.message),_(!1)})};return n&&!r?d.jsx(Et,{to:"/register"}):n&&r?d.jsx(Et,{to:"/"}):t?d.jsx(is,{}):d.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:[l&&d.jsxs("form",{onSubmit:g,style:{display:"flex",flexDirection:"column",width:"30rem",fontSize:"3.2rem"},children:[d.jsx("h1",{children:"Join Us"}),d.jsx("input",{type:"text",disabled:f,value:i,onChange:y=>s(y.target.value),style:{marginBottom:"1rem"}}),d.jsx("button",{type:"submit",disabled:f,children:"Request"})]}),c&&d.jsxs("form",{onSubmit:p,style:{display:"flex",flexDirection:"column",width:"30rem",fontSize:"3.2rem"},children:[d.jsx("h1",{children:"Type Code"}),d.jsx("input",{type:"text",disabled:v,value:o,onChange:y=>a(y.target.value),style:{marginBottom:"1rem"}}),d.jsx("button",{type:"submit",disabled:v,children:"Request"})]})]})},B2=({loading:t,isAuth:e,isRegister:n,setIsRegister:r,uid:i,setUserData:s,auth:o})=>{const[a,l]=w.useState(""),[u,c]=w.useState(!1),h=async()=>{try{const m={uid:i,name:a,isAdmin:!1,bag:[],phoneNumber:o.currentUser.phoneNumber,address:""};await kr(Ut(jt,"users",i),m),console.log("Document written"),s(m),localStorage.setItem("isRegister",!0),r(!0)}catch(m){console.error("Error adding document: ",m)}finally{c(!1)}},f=m=>{m.preventDefault(),c(!0),h()};return t?d.jsx(is,{text:"Load Register"}):!e&&!n?d.jsx(Et,{to:"/auth"}):e&&n?d.jsx(Et,{to:"/"}):d.jsx("div",{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:d.jsxs("form",{onSubmit:f,style:{display:"flex",flexDirection:"column",width:"30rem",fontSize:"3.2rem"},children:[d.jsx("h1",{children:"Type Name"}),d.jsx("input",{type:"text",disabled:u,value:a,onChange:m=>l(m.target.value),style:{marginBottom:"1rem"}}),d.jsx("button",{type:"submit",disabled:u,children:"Request"})]})})};const z2=({userData:t,setUserData:e,bagItem:n,bagItemPos:r,setGlobalCost:i,uid:s,placeholder:o})=>{const{name:a,imageUrl:l,price:u}=n.item;let[c,h]=w.useState(n.factor);const[f,m]=w.useState(!1),[v,_]=w.useState([u[0],u[1]]),T=w.useRef(!0);w.useEffect(()=>(T.current&&(p(),g(c)),()=>{T.current=!1}),[]);const g=I=>{const P=((+u[0]+ +u[1]*.01)*I).toFixed(2);i(k=>(+k+ +P).toFixed(2))},p=()=>{const k=((+u[0]+ +u[1]*.01)*c).toFixed(2).toString().split(".");k[1]||(k[1]="00"),k[1].length<2&&(k[1]=`${k[1]}0`),_(k)},y=async()=>{m(!0),c+=1;const I=Ut(jt,"users",s);t.bag[r].factor=c,e(t),await kr(I,t),h(c),p(),g(1),m(!1)},E=async()=>{if(m(!0),c-=1,c<=0)S(n.item.uuid);else{const I=Ut(jt,"users",s);t.bag[r].factor=c,e(t),await kr(I,t),h(c),p(),g(-1)}m(!1)},S=async I=>{const P=Ut(jt,"users",s),k=t.bag.filter(j=>j.item.uuid!==I),W={...t,bag:k};g(-1),e(W),await kr(P,W)};return d.jsxs("div",{className:"bag-item",children:[d.jsx("div",{className:"bag-item-photo",children:d.jsx("img",{src:l})}),d.jsxs("div",{className:"bag-item-body",children:[d.jsx("h1",{className:"bag-item-body-title",children:a}),d.jsxs("div",{className:f?"bag-title-price bag-item-body-controls bag-item-body-controls-disabled":"bag-title-price bag-item-body-controls",children:[d.jsx("button",{className:"bag-item-body-controls-btn bag-item-body-controls-btn-increment",onClick:y,disabled:f,children:"+"}),d.jsx("div",{className:"bag-item-body-controls-factor",children:c}),d.jsx("button",{className:"bag-item-body-controls-btn bag-item-body-controls-btn-decrement",onClick:E,disabled:f,children:"-"})]}),d.jsxs("div",{className:"bag-title bag-item-body-price",children:[d.jsx("div",{className:"price-title",children:"Цена: "}),d.jsxs("div",{style:{wordBreak:"break-word"},children:[v[0]&&d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"bag-title-price",children:v[0]})," "]}),"руб. ",v[1]&&d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"bag-title-price",children:v[1]})," "]}),"коп."]})]})]})]})},H2=()=>d.jsxs("div",{className:"bag-item",children:[d.jsx("div",{className:"bag-item-photo bag-item-photo-placeholder"}),d.jsxs("div",{className:"bag-item-body",children:[d.jsxs("div",{className:"bag-title-price bag-item-body-controls",children:[d.jsx("button",{className:"bag-item-body-controls-btn bag-item-body-controls-btn-increment",children:"+"}),d.jsx("div",{className:"bag-item-body-controls-factor",children:"0"}),d.jsx("button",{className:"bag-item-body-controls-btn bag-item-body-controls-btn-decrement",children:"-"})]}),d.jsxs("div",{className:"bag-title bag-item-body-price",children:["Цена: ",d.jsx("span",{className:"bag-title-price",children:"0"})," руб. ",d.jsx("span",{className:"bag-title-price",children:"00"})," коп."]})]})]}),W2=({userData:t,setUserData:e,globalCost:n,setGlobalCost:r,uid:i})=>{const s=()=>[window.innerWidth,window.innerHeight],[o,a]=w.useState(s());w.useEffect(()=>{function u(){a(s())}return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}},[]);const l=()=>{let u=3,c=t.bag.length,h=c%u,f=h===0?0:u-h;o[0]<=1310&&(u=2,h=c%u,f=h===0?0:u-h),o[0]<=910&&(u=0,h=c%u,f=h===0?0:u-h);const m=t.bag.map((v,_)=>d.jsx(z2,{userData:t,setUserData:e,bagItem:v,bagItemPos:_,globalCost:n,setGlobalCost:r,uid:i},v.item.uuid));for(let v=0;v<f;v++)m.push(d.jsx(H2,{}));return m};return d.jsx("div",{className:"bag-items",children:l()})},q2=[{name:"ул. Абрикосовая",area:"Пугачёво"},{name:"ул. Августовская",area:"Новые Задворцы"},{name:"пер. Авиационный",area:"Граевка"},{name:"ул. Автолюбителей",area:"Новые Задворцы"},{name:"ул. Автомобилистов",area:"Дубровка"},{name:"ул. Адамковская",area:"Адамково"},{name:"ул. Алая",area:"Новые Задворцы"},{name:"ул. Александровская",area:"Гершоны"},{name:"ул. Аркадьевская",area:"Аркадия"},{name:"ул. Армейская",area:"Юго-Запад"},{name:"ул. Аэродромная",area:"Лысая Гора"},{name:"ул. Базановой",area:"Граевка"},{name:"ул. Баррикадная",area:"Центр"},{name:"ул. Барсукова",area:"Южный"},{name:"ул. Бархатная",area:"Берёзовка"},{name:"ул. Бауманская",area:"Речица"},{name:"ул. Беговая",area:"Котельня-Боярская"},{name:"ул. Белинского",area:"Киевка"},{name:"ул. Белова",area:"Центр"},{name:"ул. Беловежская",area:"Лысая Гора"},{name:"ул. Белоозёрская",area:"Дубровка"},{name:"ул. Белорусская",area:"Лысая Гора"},{name:"ул. Белорусская 1-я",area:"Лысая Гора"},{name:"ул. Белорусская 2-я",area:"Лысая Гора"},{name:"пер. Белорусский",area:"Лысая Гора"},{name:"ул. Береговая",area:"Волынка"},{name:"ул. Березинская",area:"Гершоны"},{name:"ул. Берёзовая",area:"Гершоны"},{name:"ул. Берёзовская",area:"Берёзовка"},{name:"пер. Берёзовский",area:"Берёзовка"},{name:"пр. Берёзовский",area:"Берёзовка"},{name:"ул. Берестейская",area:"Берёзовка"},{name:"ул. Берестовая",area:"Вычулки"},{name:"ул. Бернадская",area:"Бернады"},{name:"ул. Бехтерева",area:"Козловичи"},{name:"пер. Бехтерева 1-й",area:"Козловичи"},{name:"пер. Бехтерева 2-й",area:"Козловичи"},{name:"пер. Бехтерева 3-й",area:"Козловичи"},{name:"пр. Бехтерева",area:"Козловичи"},{name:"ул. Благовещенская",area:"Аркадия, Гершоны"},{name:"ул. Боброва",area:"Граевка"},{name:"ул. Богданчука",area:"Тришин"},{name:"ул. Борисовская",area:"Берёзовка"},{name:"ул. Боровая",area:"Плоска"},{name:"пер. Боровой 1-й",area:"Плоска"},{name:"пер. Боровой 2-й",area:"Плоска"},{name:"ул. Бородинская",area:"Киевка"},{name:"ул. Ботаническая",area:"Аркадия"},{name:"ул. Братская",area:"Гершоны"},{name:"пер. Брестский",area:"Вычулки"},{name:"пер. Брестских Дивизий",area:"Граевка"},{name:"ул. Брестских Дивизий",area:"Граевка"},{name:"ул. Брусничная",area:"Новые Задворцы"},{name:"пер. Брусничный",area:"Новые Задворцы"},{name:"ул. Будённого",area:"Центр"},{name:"ул. Бульварная",area:"Берёзовка"},{name:"пер. Бульварный",area:"Берёзовка"},{name:"ул. Бытко",area:"Южный"}],K2=({setShowEdit:t,userData:e,setUserData:n,uid:r})=>{const[i,s]=w.useState(!1),[o,a]=w.useState([]),[l,u]=w.useState(""),[c,h]=w.useState(""),[f,m]=w.useState(""),[v,_]=w.useState(i),T=I=>{const P=I.target.value;u(P),_(P.trim()!==""&&c.trim()!=="");const k=q2.filter(W=>W.name.toLowerCase().includes(P.toLowerCase()));a(P===""?[]:k)},g=I=>{u(I),a([]),_(l.trim()!==""&&c.trim()!=="")},p=I=>{const P=I.target.value;h(P),_(l.trim()!==""&&c.trim()!=="")},y=()=>{t(!1),_(!1),s(!1),a([]),u(""),h(""),m("")},E=async()=>{s(!0),_(!1);const I=Ut(jt,"users",r),P=f?`${l} ${c}, кв.${f}`:`${l} ${c}`,k={...e,address:P};n(k),await kr(I,k),y()},S=I=>{I.target.classList.contains("bag-header-search-edit-overlay")&&!i&&y()};return d.jsx("div",{className:"bag-header-search-edit-overlay",onClick:S,children:d.jsx("div",{className:"container",children:d.jsxs("div",{className:"bag-header-search-edit",children:[d.jsxs("form",{className:"bag-header-search-form",children:[d.jsx("label",{className:"bag-header-search-form-title",htmlFor:"bag-header-search-input-address",children:"Адреса*:"}),d.jsx("div",{className:"bag-header-search-inputs-address",children:d.jsxs("div",{className:"bag-header-search-inputs",children:[d.jsx("input",{type:"text",placeholder:"Ваш Адрес",id:"bag-header-search-input-address",className:"input bag-header-search-input bag-header-search-input-address",value:l,onChange:T,disabled:i}),o.length!=0&&d.jsx("div",{className:"bag-header-search-results",children:d.jsx("div",{className:"bag-header-search-results-items",children:o.slice(0,15).map((I,P)=>d.jsx("button",{className:"bag-header-search-results-item",onClick:()=>g(I.name),children:I.name},P))})})]})}),d.jsx("label",{className:"bag-header-search-form-title",htmlFor:"bag-header-search-input-house",children:"Дом*:"}),d.jsx("div",{className:"bag-header-search-inputs-house",children:d.jsx("div",{className:"bag-header-search-inputs",children:d.jsx("input",{type:"text",placeholder:"Дом",id:"bag-header-search-input-house",className:"input bag-header-search-input bag-header-search-input-house",value:c,onChange:p,disabled:i})})}),d.jsx("label",{className:"bag-header-search-form-title",htmlFor:"bag-header-search-input-flat",children:"Кв.:"}),d.jsx("div",{className:"bag-header-search-inputs-flat",children:d.jsx("div",{className:"bag-header-search-inputs",children:d.jsx("input",{type:"text",placeholder:"Дом",id:"bag-header-search-input-flat",className:"input bag-header-search-input bag-header-search-input-flat",value:f,onChange:I=>m(I.target.value),disabled:i})})}),d.jsxs("div",{className:"bag-header-search-form-controls",children:[d.jsx("button",{onClick:E,className:"btn",disabled:!v,children:"V"}),d.jsx("button",{onClick:y,className:"btn",disabled:i,children:"X"})]})]}),d.jsx("span",{className:"bag-header-search-edit-span",children:"* - обязательно для заполнения"})]})})})},G2=({userData:t,setUserData:e,uid:n})=>{const[r,i]=w.useState(!1);return d.jsxs("div",{className:"bag-header-search",children:[d.jsxs("h1",{onClick:()=>i(!0),className:"bag-header-title bag-header-title-clickable",children:[d.jsx("span",{className:"bag-header-title bag-header-title-underline",children:"Ваш адрес:"}),d.jsx("span",{className:"bag-header-address",children:t.address!==""?t.address:"Не Указан"})]}),r&&d.jsx(K2,{setShowEdit:i,userData:t,setUserData:e,uid:n})]})},NT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPASURBVHgB1ZlLbE1RFIZ/1aj3W4QW9U4lhHhEjASJAQMkzCTCRAQDMySIoTBhIkE0JsRAMJcybNSraJNWe/vwpg+qTYq21upZJ3f15u69dp/3+pI/e9191tlnnX32WWfvfQHgBKmN1CNqIJ1FFnMPyWC1riALGU0qJeWSKkgvSVNFG0iPSfXIclaSOhD18k38J5QgCjiBLCPHUf9OygLSBGQRuY76V+p4ETI3jrtIzSGO+5E+c2RCf0nFpAW+gIuyJFitWtJk15BoVfYL0kPYzCYdFvsuqdLju5G0XezrpA8e352ktaSFiD5yTj4hurNihLEQyd44ZPieVb6Fhm8eqVF8y3I8jm1SrkMYPcqebfjq6340fDsRTReYPF/ApVJOQxg/lF1g+Oo2f8OmUMp6X8AJKeeSZsKmhdQu9jiEBdABmwkSA9PoC/i9shcjjO9S5hp+k+IAYDNP2eW+gKuUHRpwPI7nGn6jpPwKG33tSl/A1Y6TfMTjeJ7hN13KLtisVnbzKMO5G1Fv8PBogM0KRFNTzjCvPX6bpOQbfAs/C0j5YlvxogbZ86Wr44Csl4NnbYvEroLNDBFTjb65WbNMyiaRjyWI8nYCAVyVi8ZDw+ICkj2S7/DJVz7nYNMtvrf4R47hHKc2DnY+bHSacj093U4r/BQg2VE8+TEDrlH2Iti0KXuswydP2XXws0TZvUPSCvipspfCRqcp1xPRPW/1sM7nvXMOK2Dd4GrYfFb2HIePqz4dy5Td+7StgPlTG89Vp8BG52pX2/plbIGfIhVHo69RTZx21gf4dip7ksNHj23fWpGH4D6xy+JKKw8zvOJYRZpFOmD4TlX2VvR9CWP00NqF9PALfkT9voF+cBGZ/cKdRz85gMwEymlsT2owIUPim7JPkx5geOFgeWJfl+5gSMB6NtUOe3Y1rIRkCZ5kx29/SKbICkqQnASFfECGjZAZGLOF9Ehs7u3bGLn9Nv5g3EFygRvMGWQutR3DANlLeoaRDZaH4SYMAv60NkljX0g7EK27jpN+Sj2v52Y5VK2COYVozrtb2uI6nnAtVf7jMUg2qwseTDl2RR1Lt/szUx0vTjl2VB3bBgchaS0VvauTuq9Qq+zRac6dqOyKlGNvlD0GQ8hyJHvivqrnG0lI/S/0XVnE8ONtER/e5dd/RxSrdtdgiClRjZcj+repVtVd8pyrF6oJOfeJqnuOYaAQyd5MVfxfn4sp4pPu3DrY+8UDhveAr8lFeMuUe/gc3BN3DQ+Xk4iyyR9Eq5rL8N9oL/8AYITBWKZLhuAAAAAASUVORK5CYII=",Q2=({loading:t,userData:e,setUserData:n,isAuth:r,isRegister:i,uid:s})=>{const[o,a]=w.useState("0.00"),[l,u]=w.useState([0,0]),[c,h]=w.useState(e.address);return w.useEffect(()=>{const f=o.split(".");u(f)},[o]),r?i?t?d.jsx(is,{}):d.jsx("div",{className:"bag-bg",children:d.jsx("div",{className:"container bag-container",children:d.jsxs("div",{className:"bag",children:[d.jsxs("div",{className:"bag-header",children:[d.jsx(G2,{addressTitle:c,setUserData:n,userData:e,uid:s}),d.jsxs("h1",{className:"bag-header-title",children:[d.jsx("img",{src:NT,className:"bag-header-title-icon"}),d.jsx("span",{className:"bag-header-title bag-header-title-underline",children:"Моя корзина"})]})]}),d.jsx("div",{className:"bag-body",children:d.jsx(W2,{userData:e,setUserData:n,globalCost:o,setGlobalCost:a,uid:s})}),d.jsxs("div",{className:"bag-footer",children:[d.jsxs("div",{className:"bag-title bag-footer-title",children:[d.jsx("div",{children:"Вся сумма к оплате : "}),d.jsxs("div",{children:[d.jsx("span",{className:"bag-title-price bag-footer-title-price",children:l[0]}),"  руб.  ",d.jsx("span",{className:"bag-title-price bag-footer-title-price",children:l[1]}),"  коп"]})]}),d.jsx("button",{className:"btn bag-footer-btn",children:"Заказать"})]})]})})}):(console.log("Not Register"),d.jsx(Et,{to:"/register"})):(console.log("Not Auth"),d.jsx(Et,{to:"/auth"}))},Y2=()=>d.jsx("div",{children:"Addresses"});const X2=({item:t,userData:e,setUserData:n,uid:r})=>{const[i,s]=w.useState(!1),[o,a]=w.useState(!1);w.useEffect(()=>{const u=()=>{e.bag.map(c=>{c.item.uuid===t.uuid&&a(!0)})};return()=>{u()}},[]);const l=async()=>{s(!0);const u=Ut(jt,"users",r),c={...e,bag:[...e.bag,{item:t,factor:1}]};await kr(u,c),n(c),s(!1),a(!0)};return d.jsx(d.Fragment,{children:o?d.jsxs(ho,{to:"/bag",className:"product-body-btn btn",disabled:i,children:[d.jsxs("div",{children:[d.jsxs("span",{children:[t.weight.number," ",t.weight.measure]}),"  /  ",d.jsxs("span",{children:[!!t.price[0]&&t.price[0],!!t.price[1]&&t.price[1],"  руб."]})]}),d.jsx("span",{children:"в корзине"})]}):d.jsx("button",{onClick:l,className:"product-body-btn btn",disabled:i,children:d.jsxs("div",{children:[d.jsxs("span",{children:[t.weight.number," ",t.weight.measure]}),"  /  ",d.jsxs("span",{children:[!!t.price[0]&&t.price[0],!!t.price[1]&&t.price[1],"  руб."]})]})})})},J2=({loading:t,setLoading:e,isAuth:n,setIsAuth:r,isRegister:i,setIsRegister:s,userData:o,setUserData:a,uid:l})=>{const u=s0(),[c,h]=w.useState(null);return w.useEffect(()=>{(async()=>{try{const m=Ut(jt,"products",u.productid),v=await tc(m);if(v.exists){const _=v.data();h(T=>({...T,..._}))}else console.log("Документ не найден")}catch(m){throw console.error("Ошибка при получении данных из Firestore:",m.message),m}})()},[]),n?i?d.jsx("div",{className:"container container-nopadding",children:d.jsx("div",{className:"product",children:c?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"product-side",children:d.jsx("div",{className:"container container-nopadding",children:d.jsxs("div",{className:"product-side-inner",children:[d.jsx("div",{className:"product-side-bg",children:d.jsx("img",{src:c.body.bgImage})}),d.jsx("div",{className:"product-side-text",children:d.jsxs("div",{className:"product-side-text-inner",children:[d.jsx("h1",{className:"product-side-title title",children:c.name}),d.jsxs("div",{className:"product-side-body",children:[d.jsx("p",{className:"product-side-body-consist",children:c.body.consist}),d.jsxs("p",{className:"product-side-body-description",children:["Описание:",d.jsx("br",{}),c.body.description]})]})]})})]})})}),d.jsxs("div",{className:"product-body",children:[d.jsx("div",{className:"product-body-preview",children:d.jsx("img",{src:c.previewImage})}),d.jsx("div",{className:"product-body-head",children:d.jsxs("div",{className:"product-body-head-inner",children:[d.jsx("h1",{className:"product-body-head-title",children:c.name}),d.jsxs("div",{className:"product-body-head-text",children:[d.jsx("p",{className:"product-body-head-text-consist",children:c.body.consist}),d.jsxs("p",{className:"product-body-head-text-description",children:["Описание: ",c.body.description]})]})]})}),d.jsx("div",{className:"product-body-products",children:c.product.map(f=>d.jsx(X2,{item:f,userData:o,setUserData:a,uid:l},f.uuid))})]})]}):d.jsx(is,{})})}):(console.log("Not Register"),d.jsx(Et,{to:"/register"})):(console.log("Not Auth"),d.jsx(Et,{to:"/auth"}))};const Z2=({item:t,userData:e,setUserData:n,uid:r})=>{const[i,s]=w.useState(!1),[o,a]=w.useState(!1);w.useEffect(()=>{const u=()=>{e.bag.map(c=>{c.item.uuid===t.uuid&&a(!0)})};return()=>{u()}},[]);const l=async()=>{s(!0);const u=Ut(jt,"users",r),c={...e,bag:[...e.bag,{item:t,factor:1}]};await kr(u,c),n(c),s(!1),a(!0)};return d.jsx("div",{className:"products-item",children:d.jsxs("div",{className:"products-item-body",children:[d.jsxs("div",{className:"products-item-side",children:[d.jsx("div",{className:"products-item-photo",children:t.imageUrl&&d.jsx("img",{src:t.imageUrl,alt:t.name})}),d.jsx("div",{className:"products-item-side-bottom",children:o?d.jsx(ho,{to:"/bag",className:"btn products-item-btn",disabled:i,children:"к корзине"}):d.jsx("button",{onClick:l,className:"btn products-item-btn",disabled:i,children:"в корзину"})})]}),d.jsxs("div",{className:"products-item-info",children:[d.jsx("h1",{className:"products-item-title",children:t.name}),d.jsxs("div",{className:"products-item-sub",children:[d.jsxs("span",{className:"products-item-weight",children:[t.weight.number," ",t.weight.measure]}),"  /  ",d.jsxs("span",{className:"products-item-price",children:[t.price[0]&&d.jsxs("span",{children:[t.price[0]," руб."]})," ",t.price[1]&&d.jsxs("span",{children:[t.price[1]," коп."]})]})]}),d.jsxs("div",{className:"products-item-description",children:[t.body.description&&d.jsxs("p",{children:["Описание: ",t.body.description]}),t.body.consist&&d.jsxs("p",{children:["Состав: ",t.body.consist]}),t.body.mfp&&d.jsxs("p",{children:["КБЖУ (в 100 гр.): ",t.body.mfp]})]}),d.jsx("div",{className:"products-item-bottom",children:o?d.jsx(ho,{to:"/bag",className:"btn products-item-btn-response products-item-btn ",disabled:i,children:"к корзине"}):d.jsx("button",{onClick:l,className:"btn products-item-btn",disabled:i,children:"в корзину"})})]})]})})},eL=({product:t,userData:e,setUserData:n,uid:r})=>d.jsxs("div",{className:"products-items",children:[d.jsx("div",{className:"products-items-head",children:d.jsx("h1",{className:"products-items-head-title title",children:t.name})}),d.jsx("div",{className:"products-items-body",children:t.product.map(i=>d.jsx(Z2,{item:i,userData:e,setUserData:n,uid:r},i.uuid))})]}),tL=({product:t,isSideLeft:e})=>{const n=w.useRef(),[r,i]=w.useState(0),s=()=>{const o=window.scrollY,a=document.documentElement.scrollHeight-window.innerHeight,l=n.current.clientHeight-window.innerHeight,u=o*l/a;i(u)};return w.useEffect(()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}),[]),d.jsx("div",{className:"products-sidebar",children:d.jsx("div",{className:"container container-nopadding",children:d.jsx("div",{className:e?"products-sidebar-photo sideLeft":"products-sidebar-photo",children:d.jsx("div",{className:"products-sidebar-photo-wrapper",children:d.jsx("img",{ref:n,src:t.sideImg,style:{transform:`translateY(-${r}px)`},alt:""})})})})})},nL=({setLoading:t,isAuth:e,isRegister:n,userData:r,setUserData:i,uid:s})=>{const o=s0(),[a,l]=w.useState(null),[u,c]=w.useState(!1);return w.useEffect(()=>{t(!0);const h=async()=>{try{const f=Ut(jt,"products",o.productid),m=await tc(f);if(m.exists){const v=m.data();l(v),c(v.isSideLeft)}else console.log("Документ не найден")}catch(f){throw console.error("Ошибка при получении данных из Firestore:",f.message),f}finally{t(!1)}};return()=>{h()}},[o.productid]),e?n?d.jsx(d.Fragment,{children:a?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"container container-nopadding",children:d.jsx("div",{className:u?"products sideLeft":"products",children:d.jsx(eL,{isSideLeft:u,product:a,userData:r,setUserData:i,uid:s})})}),d.jsx(tL,{product:a,isSideLeft:u})]}):d.jsx("div",{className:"container container-nopadding",children:d.jsx("div",{className:"products",children:d.jsx(is,{})})})}):(console.log("Not Register"),d.jsx(Et,{to:"/register"})):(console.log("Not Auth"),d.jsx(Et,{to:"/auth"}))};let Oa;const rL=new Uint8Array(16);function iL(){if(!Oa&&(Oa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Oa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Oa(rL)}const Oe=[];for(let t=0;t<256;++t)Oe.push((t+256).toString(16).slice(1));function sL(t,e=0){return Oe[t[e+0]]+Oe[t[e+1]]+Oe[t[e+2]]+Oe[t[e+3]]+"-"+Oe[t[e+4]]+Oe[t[e+5]]+"-"+Oe[t[e+6]]+Oe[t[e+7]]+"-"+Oe[t[e+8]]+Oe[t[e+9]]+"-"+Oe[t[e+10]]+Oe[t[e+11]]+Oe[t[e+12]]+Oe[t[e+13]]+Oe[t[e+14]]+Oe[t[e+15]]}const oL=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Iy={randomUUID:oL};function Sy(t,e,n){if(Iy.randomUUID&&!e&&!t)return Iy.randomUUID();t=t||{};const r=t.random||(t.rng||iL)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return sL(r)}function Pd(){return Pd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pd.apply(this,arguments)}function aL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var lL=w.useLayoutEffect,uL=function(e){var n=w.useRef(e);return lL(function(){n.current=e}),n},Ay=function(e,n){if(typeof e=="function"){e(n);return}e.current=n},cL=function(e,n){var r=w.useRef();return w.useCallback(function(i){e.current=i,r.current&&Ay(r.current,null),r.current=n,n&&Ay(n,i)},[n])},Ry={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},hL=function(e){Object.keys(Ry).forEach(function(n){e.style.setProperty(n,Ry[n],"important")})},Cy=hL,et=null,Py=function(e,n){var r=e.scrollHeight;return n.sizingStyle.boxSizing==="border-box"?r+n.borderSize:r-n.paddingSize};function dL(t,e,n,r){n===void 0&&(n=1),r===void 0&&(r=1/0),et||(et=document.createElement("textarea"),et.setAttribute("tabindex","-1"),et.setAttribute("aria-hidden","true"),Cy(et)),et.parentNode===null&&document.body.appendChild(et);var i=t.paddingSize,s=t.borderSize,o=t.sizingStyle,a=o.boxSizing;Object.keys(o).forEach(function(f){var m=f;et.style[m]=o[m]}),Cy(et),et.value=e;var l=Py(et,t);et.value=e,l=Py(et,t),et.value="x";var u=et.scrollHeight-i,c=u*n;a==="border-box"&&(c=c+i+s),l=Math.max(c,l);var h=u*r;return a==="border-box"&&(h=h+i+s),l=Math.min(h,l),[l,u]}var ky=function(){},fL=function(e,n){return e.reduce(function(r,i){return r[i]=n[i],r},{})},pL=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],mL=!!document.documentElement.currentStyle,gL=function(e){var n=window.getComputedStyle(e);if(n===null)return null;var r=fL(pL,n),i=r.boxSizing;if(i==="")return null;mL&&i==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var s=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),o=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:s,borderSize:o}},yL=gL;function xT(t,e,n){var r=uL(n);w.useLayoutEffect(function(){var i=function(o){return r.current(o)};if(t)return t.addEventListener(e,i),function(){return t.removeEventListener(e,i)}},[])}var vL=function(e){xT(window,"resize",e)},_L=function(e){xT(document.fonts,"loadingdone",e)},wL=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],EL=function(e,n){var r=e.cacheMeasurements,i=e.maxRows,s=e.minRows,o=e.onChange,a=o===void 0?ky:o,l=e.onHeightChange,u=l===void 0?ky:l,c=aL(e,wL),h=c.value!==void 0,f=w.useRef(null),m=cL(f,n),v=w.useRef(0),_=w.useRef(),T=function(){var y=f.current,E=r&&_.current?_.current:yL(y);if(E){_.current=E;var S=dL(E,y.value||y.placeholder||"x",s,i),I=S[0],P=S[1];v.current!==I&&(v.current=I,y.style.setProperty("height",I+"px","important"),u(I,{rowHeight:P}))}},g=function(y){h||T(),a(y)};return w.useLayoutEffect(T),vL(T),_L(T),w.createElement("textarea",Pd({},c,{onChange:g,ref:m}))},La=w.forwardRef(EL);const TL=t=>{const[e,n]=w.useState(!1),[r,i]=w.useState(""),[s,o]=w.useState(!1),[a,l]=w.useState(""),[u,c]=w.useState(""),[h,f]=w.useState(""),[m,v]=w.useState(""),[_,T]=w.useState(""),[g,p]=w.useState("00"),[y,E]=w.useState(""),[S,I]=w.useState("гр."),[P,k]=w.useState(null);w.useEffect(()=>((()=>{Cd.map(Bt=>{Bt.id===r&&(Bt.singleProduct?o(!0):o(!1))})})(),()=>{}),[r]);const W=async()=>{try{const z=Ut(jt,"products",r);if((await tc(z)).exists()){const na={name:a.trim(),body:{description:u.trim(),consist:h.trim(),mfp:m.trim()},uuid:Sy(),price:[_,g],weight:{number:+y,measure:S}};if(P){const Zr=k2(b2,`${r}/${r}-item-${Sy()}`);await C2(Zr,P);const ss=await P2(Zr);na.imageUrl=ss}await mO(z,{product:yO(na)}),console.log("Данные успешно добавлены в Firestore"),alert("Данные успешно добавлены в Firestore")}else console.log("Документ не существует!"),alert("Документ не существует!")}catch(z){console.error("Ошибка при добавлении данных в Firestore",z),alert("а при добавлении данных в Firestore")}finally{n(!1)}},j=z=>{z.preventDefault(),n(!0),W()},dt=z=>{const Bt=z.target.files[0];k(Bt)},fr=z=>{i(z.target.value)};return d.jsx("div",{className:"admin",children:d.jsx("div",{className:"container",children:d.jsxs("form",{onSubmit:j,children:[d.jsx("h1",{className:"admin-title",children:"Добавить товары"}),d.jsxs("div",{className:"admin-select-wrapper",children:[d.jsx("label",{htmlFor:"menu",className:"admin-select-label",children:"Выбрать категорию: "}),d.jsxs("select",{disabled:e,id:"menu",className:"admin-select",value:r,onChange:fr,children:[d.jsx("option",{value:"",disabled:!0,children:"ПРОДУКТЫ"}),Cd.map((z,Bt)=>d.jsx("option",{value:z.id,children:z.name},Bt))]})]}),d.jsx("hr",{}),r?d.jsxs(d.Fragment,{children:[s?d.jsx(d.Fragment,{children:d.jsxs("div",{className:"admin-inputs",children:[d.jsxs("h2",{style:{fontSize:"3.6rem"},children:["product /",r]}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"ИМЯ"}),d.jsx(La,{className:"input",minRows:5,disabled:e,value:m,onChange:z=>v(z.target.value)})]})]})}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"admin-inputs",children:[d.jsxs("h2",{style:{fontSize:"3.6rem"},children:["products/",r]}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"Название"}),d.jsx("input",{type:"text",className:"input",disabled:e,value:a,onChange:z=>l(z.target.value)})]}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"Информация"}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"Описание"}),d.jsx(La,{className:"input",minRows:5,disabled:e,value:u,onChange:z=>c(z.target.value)})]}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"Состав"}),d.jsx(La,{className:"input",minRows:5,disabled:e,value:h,onChange:z=>f(z.target.value)})]}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"КБЖУ"}),d.jsx(La,{className:"input",minRows:5,disabled:e,value:m,onChange:z=>v(z.target.value)})]})]})]}),d.jsxs("div",{className:"admin-inputs",children:[d.jsx("h1",{children:"Цена"}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"руб."}),d.jsx("input",{type:"text",className:"input",disabled:e,value:_,onChange:z=>T(z.target.value)})]}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"коп."}),d.jsx("input",{type:"text",className:"input",disabled:e,value:g,onChange:z=>p(z.target.value)})]})]}),d.jsxs("div",{className:"admin-inputs",children:[d.jsx("h1",{children:"Вес"}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"Число"}),d.jsx("input",{type:"text",className:"input",disabled:e,value:y,onChange:z=>E(z.target.value)})]}),d.jsx("div",{className:"admin-input",children:d.jsxs("select",{disabled:e,id:"menu",className:"admin-select",value:S,onChange:z=>I(z.target.value),children:[d.jsx("option",{value:"гр.",children:"гр."}),d.jsx("option",{value:"л.",children:"л."})]})})]}),d.jsxs("div",{className:"admin-input",children:[d.jsx("h1",{children:"Изображение"}),d.jsx("input",{disabled:e,type:"file",accept:"image/*",onChange:dt})]})]}),d.jsx("button",{disabled:e,className:"btn admin-btn",children:"Отправить"})]}):d.jsx("h1",{className:"title",children:"Выбери категорию"})]})})})},IL="_notFound_2nmf6_1",SL={notFound:IL},AL=(t,e)=>t?e?d.jsx("div",{className:SL.notFound,children:"404 :("}):(console.log("Not Register"),d.jsx(Navigate,{to:"/register"})):(console.log("Not Auth"),d.jsx(Navigate,{to:"/auth"}));const Ny="/Paragraph-Delivery/assets/logo-901bc74b.svg",xy="/Paragraph-Delivery/assets/logo-mobile-6815c560.svg",RL="_headerBack_qrwsh_1",CL="_headerBackBtn_qrwsh_9",Dy={headerBack:RL,headerBackBtn:CL},Oy=({closeBurger:t})=>d.jsx("div",{className:`header-link-wrapper ${Dy.headerBack}`,children:d.jsx(Rf,{to:"/",onClick:t,className:`header-link ${Dy.headerBackBtn}`,children:"Back"})}),PL="_headerUser_qp4gd_1",kL="_headerUserLogo_qp4gd_12",NL="_headerUserName_qp4gd_20",xL="_headerUserLabel_qp4gd_20",DL="_headerUserNamePlaceholder_qp4gd_25",OL="_headerUserLabelPlaceholder_qp4gd_25",vs={headerUser:PL,headerUserLogo:kL,headerUserName:NL,headerUserLabel:xL,headerUserNamePlaceholder:DL,headerUserLabelPlaceholder:OL},LL="/Paragraph-Delivery/assets/user-logo-08712a2f.png",Ly=({closeBurger:t,userData:e})=>{const n=()=>{RC(No).then(()=>{console.log("Sign Out Successful")}).catch(r=>console.log(r))};return d.jsxs("button",{onClick:n,className:vs.headerUser,children:[d.jsx("h3",{className:vs.headerUserLabel,children:"Выйти, "}),d.jsx("div",{className:vs.headerUserLogo,children:d.jsx("img",{src:LL})}),d.jsx("h3",{className:vs.headerUserName,children:e.name?e.name:d.jsx("span",{className:vs.headerUserNamePlaceholder})})]})},bL="_headerAddressBtn_1fzi6_1",VL="_headerAddressBtnLabel_1fzi6_12",ba={headerAddressBtn:bL,headerAddressBtnLabel:VL},ML="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUQSURBVHgB1ZltTBxFGMf/s8eL5S1YSq0WsNoXCtLEIm0KWqRioVwphWJ8q/ED2hhfEyyS1KYGE40oMTYkWmO0kaTlgzQI53EcCAFrTIMgYDFAaKlIqW2VClS48nK347NbMdrc3u3sXT/4u8zs7M4ze/+bPDPzzByDL5SVSejo2AwEptPdXkpxlCJvsJql9CPAWyBLTWiq/xY+wGCUnNwsan4AHA+CMZH3dAPyO2i0noABxAVnZkYhOPQTEroHvsDQAHn+JdjtI2LNRMjaeR8CTPUkdiX8Ap+AS8pBc32H3haSXkNkmdMhmdr9J1aB3QoT+bY5b4fuFrqscvJXg8snyfoO3AwYZLjkVDRZv/dm6r2Hc3JiaJC0iIiNioiAeVMKdMNJh2Q6gew9t3sz1eESAaWUrYJO0pMS0fdRJfpHRyEGj4XkrPBm5Vmw4gpgL0MnS4KCYC07hO/6BzBy+TcYYC927NrkycBLD7vehgCpCfEIDwnB1MwMjMMOeqrVFpyYGEQLQh4EuDY3r17z07aowg3BsBsFBcu1qrUFr1pdSINhCQToGT6H8at/Iio8HMX5u2AYx4LmNKctmLN7IchdK25D19CQWi4u2I2EuFgYwmTaplWlLZhhCwSQJAm1hw6g9GgVJqanERkaiuMlryIkOBjiyBs0v0ezDcc6CLBtQxLWx8TAKcsofKtcfbZxzd0oKSyAMJwtR0ZGgLsqbcEu+RYIkJa4Xr0m3RmHttN9qGppVe+LC/IQHBgIQcIphbmr0BYs0XIpwPS1WfWamnBdeHlNLSZnHKprZCcnQxAnoqOdcCtLCyZNQoCve3rV66MP3I+ggEAMnh+D5dT1ICx8ibAfX0RNzbS7Ck8+3AcBBsbGMEhp5bIoPLI1TX3W3Nv7d90FCMExrlXlaaXrgQAul4wjVptafv/ZItUVAiUTbJ1d6D47DCEY+0GryqTZaG38VcqfgwB9I6N4IiMdsdHLsGJpJJaGheFg1TFMORz6X8I5xW7O53HmjNtgRLuHGy09NBfr3gkoOObmUPRBpVp+OvMhWDo6Mfr7OAQ5DJtN0x09Bz8y1x2pLfJN30841tYOifal2ckbhdpS7/6ChQCPAZdnwfavOin/GIK89tnnFAjNYXuy4OrO2Yto/fKKJxPvAbwU9jqN2l8hwKU/JlRXiAgRiZ14NZosDd6svAtuqJ4gq2eo5IIAnD7nLl7Sa34e845X9Bjq2zXbLHbKa/WYKstwKcUPTpcL+yo/hC6YVILW1iu6TKGX/PxIzMl05KQeR2myc3MKFpwuNHfrnMY5voDd8hh0InaQYs59Elw6Dn/BcJmC9RS0N47pbaL/IEXBZq2m3NCZmFtk9q6IWAUxwQoL8n7qGqHAyC0MLbDXH4Yg4oJbrHTgwPfDNxx09LoPigcLIi5YodFylLqoGcZ5E/a6ERjAmGAV9gKtTFMQhbNT9IO9nvBoYYJRzg5OYE28i3xxu0ArJRJ7mCIxXXOuO3zoYWI2+AgJPqnbnuENisSG4APG/zJYxJyXQru/NnpTmJevGkBj/T0wMND+jW89rGCzdNEOodyLFYfJ9RR8FKvgu2CFsCAaROy0tgF7D1ZrN/yAfwTX1MzTqqXMq+6OBkYQyIVOQT1hfJa4keHBC1i7jvbzbOt/nnP2OBos/fAT/unhRYJNFTT4fv7nnqGClt8m+BH/Cq6rm4QsF6llTq7AFyrxv8Cc9ynMBbm4CfwFytJ/oLcOSegAAAAASUVORK5CYII=",by=({closeBurger:t})=>d.jsx("div",{className:`header-link-wrapper ${ba.headerAddress}`,children:d.jsxs(Rf,{to:"/addresses",onClick:t,className:`header-link ${ba.headerAddressBtn}`,children:[d.jsx("img",{className:ba.headerAddressBtnLogo,src:ML}),d.jsx("h3",{className:ba.headerAddressBtnLabel,children:"Адреса"})]})}),UL="_headerBag_1xs0y_1",jL="_headerBagBtn_1xs0y_9",FL="_headerBagBtnLogo_1xs0y_14",$L="_headerBagBtnLabel_1xs0y_18",BL="_active_1xs0y_27",Va={headerBag:UL,headerBagBtn:jL,headerBagBtnLogo:FL,headerBagBtnLabel:$L,active:BL},Vy=({closeBurger:t})=>d.jsx("div",{className:`header-link-wrapper ${Va.headerBag}`,children:d.jsxs(Rf,{to:"/bag",onClick:t,className:`header-link ${Va.headerBagBtn}`,children:[d.jsx("img",{className:Va.headerBagBtnLogo,src:NT}),d.jsx("h3",{className:Va.headerBagBtnLabel,children:"Корзина"})]})}),zL="_headerBurger_oylt6_1",HL="_headerBurgerBtn_oylt6_13",WL="_headerBurgerBtnOpen_oylt6_33",qL="_headerBurgerSpan_oylt6_43",_s={headerBurger:zL,headerBurgerBtn:HL,headerBurgerBtnOpen:WL,headerBurgerSpan:qL},My=({isBurgerOpen:t,toggleBurger:e})=>d.jsx("div",{className:_s.headerBurger,children:d.jsx("button",{className:t?`${_s.headerBurgerBtn} ${_s.headerBurgerBtnOpen}`:_s.headerBurgerBtn,onClick:e,children:d.jsx("span",{className:_s.headerBurgerSpan})})}),KL=({isBurgerOpen:t,toggleBurger:e,closeBurger:n,userData:r})=>{const[i,s]=w.useState(!1);w.useEffect(()=>{function a(){window.innerWidth>=916?s(!1):s(!0)}return window.addEventListener("resize",a),()=>{a(),window.removeEventListener("resize",a)}},[i]);const o=a=>{a.target.classList.contains("header-menu-overlay")&&n()};return i?d.jsxs(d.Fragment,{children:[d.jsx("header",{className:"header",children:d.jsx("div",{className:"container",children:d.jsxs("div",{className:"header-inner",children:[d.jsx("div",{className:"header-inner-left-side",children:d.jsx(Oy,{})}),d.jsxs("div",{className:"header-inner-logo",children:[d.jsx("img",{className:"header-inner-logo-desktop",src:Ny}),d.jsx("img",{className:"header-inner-logo-mobile",src:xy})]}),d.jsx("div",{className:"header-inner-right-side",children:d.jsx(My,{isBurgerOpen:t,toggleBurger:e})})]})})}),d.jsx("div",{className:t?"header-menu-overlay header-menu-overlay-open":"header-menu-overlay",onClick:a=>o(a),children:d.jsx("div",{className:"header-menu",children:d.jsxs("div",{className:"header-menu-inner",children:[d.jsx(by,{}),d.jsx(Vy,{}),d.jsx(Ly,{userData:r})]})})})]}):d.jsx("header",{className:"header",children:d.jsx("div",{className:"container",children:d.jsxs("div",{className:"header-inner",children:[d.jsxs("div",{className:"header-inner-left-side",children:[d.jsx(Oy,{}),d.jsx(Ly,{closeBurger:n,userData:r})]}),d.jsxs("div",{className:"header-inner-logo",children:[d.jsx("img",{className:"header-inner-logo-desktop",src:Ny}),d.jsx("img",{className:"header-inner-logo-mobile",src:xy})]}),d.jsxs("div",{className:"header-inner-right-side",children:[d.jsx(by,{closeBurger:n}),d.jsx(Vy,{closeBurger:n}),d.jsx(My,{isBurgerOpen:t,toggleBurger:e})]})]})})})},GL=({isAllowed:t,redirectPath:e="/",children:n})=>t?n||d.jsx(Outlet,{}):d.jsx(Et,{to:e,replace:!0});function QL(){const[t,e]=w.useState(!1),n=Gr(),[r,i]=w.useState(!0),[s,o]=w.useState(!!localStorage.getItem("isAuth")),[a,l]=w.useState(!!localStorage.getItem("isRegister")),[u,c]=w.useState(),[h,f]=w.useState(!1),[m,v]=w.useState({}),[_,T]=w.useState("");w.useEffect(()=>{const S=AC(No,I=>{I?(localStorage.setItem("isAuth",!0),o(!0),g(I.uid),T(I.uid)):(localStorage.setItem("isAuth",!1),localStorage.setItem("isRegister",!1),o(!1),l(!1),i(!1))});return()=>{S()}},[]);const g=async S=>{const I=Ut(jt,"users",S),P=await tc(I);P.exists()?(v(P.data()),f(P.data().isAdmin),localStorage.setItem("isRegister",!0),l(!0)):(localStorage.setItem("isRegister",!1),l(!1)),i(!1)},p=()=>{e(!t)},y=()=>{e(!1)},E=!["/auth","/register"].includes(n.pathname);return d.jsxs("div",{className:"App",children:[E&&d.jsx(KL,{isBurgerOpen:t,toggleBurger:p,closeBurger:y,userData:m}),d.jsxs(GS,{children:[d.jsx(Ht,{path:"/auth",element:d.jsx($2,{loading:r,setLoading:i,isAuth:s,setIsAuth:o,isRegister:a,setIsRegister:l,userData:m,setUserData:v,uid:_,setUid:T,setPhoneNumber:c})}),d.jsx(Ht,{path:"/register",element:d.jsx(B2,{loading:r,setLoading:i,isAuth:s,setIsAuth:o,isRegister:a,setIsRegister:l,userData:m,setUserData:v,uid:_,auth:No})}),d.jsx(Ht,{index:!0,element:d.jsx(F2,{loading:r,setLoading:i,isAuth:s,setIsAuth:o,isRegister:a,setIsRegister:l,userData:m})}),d.jsx(Ht,{path:"/bag",element:d.jsx(Q2,{loading:r,userData:m,setUserData:v,isAuth:s,isRegister:a,uid:_})}),d.jsx(Ht,{path:"/addresses",element:d.jsx(Y2,{isAuth:s,isRegister:a})}),d.jsx(Ht,{path:"/product/:productid",element:d.jsx(J2,{loading:r,setLoading:i,isAuth:s,setIsAuth:o,isRegister:a,setIsRegister:l,userData:m,setUserData:v,uid:_})}),d.jsx(Ht,{path:"/products/:productid",element:d.jsx(nL,{loading:r,setLoading:i,isAuth:s,setIsAuth:o,isRegister:a,setIsRegister:l,userData:m,setUserData:v,uid:_})}),d.jsx(Ht,{path:"admin",element:d.jsx(GL,{redirectPath:"/",isAllowed:h,children:d.jsx(TL,{loading:r})})}),d.jsx(Ht,{path:"*",element:d.jsx(AL,{userData:m,isAuth:s,isRegister:a})})]}),d.jsx("div",{id:"recaptcha-container",style:{display:"none"}})]})}Jc.createRoot(document.getElementById("root")).render(d.jsx(Ky.StrictMode,{children:d.jsx(tA,{children:d.jsx(QL,{})})}));
