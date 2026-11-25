var jf=Object.defineProperty;var Sf=(i,u,o)=>u in i?jf(i,u,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[u]=o;var ra=(i,u,o)=>Sf(i,typeof u!="symbol"?u+"":u,o);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))d(h);new MutationObserver(h=>{for(const f of h)if(f.type==="childList")for(const y of f.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&d(y)}).observe(document,{childList:!0,subtree:!0});function o(h){const f={};return h.integrity&&(f.integrity=h.integrity),h.referrerPolicy&&(f.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?f.credentials="include":h.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(h){if(h.ep)return;h.ep=!0;const f=o(h);fetch(h.href,f)}})();var la={exports:{}},Zr={},ia={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc;function kf(){if(nc)return je;nc=1;var i=Symbol.for("react.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),y=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),I=Symbol.iterator;function V(j){return j===null||typeof j!="object"?null:(j=I&&j[I]||j["@@iterator"],typeof j=="function"?j:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function _(j,L,ie){this.props=j,this.context=L,this.refs=R,this.updater=ie||K}_.prototype.isReactComponent={},_.prototype.setState=function(j,L){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,L,"setState")},_.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function ce(){}ce.prototype=_.prototype;function te(j,L,ie){this.props=j,this.context=L,this.refs=R,this.updater=ie||K}var Ce=te.prototype=new ce;Ce.constructor=te,A(Ce,_.prototype),Ce.isPureReactComponent=!0;var Se=Array.isArray,ke=Object.prototype.hasOwnProperty,Te={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function F(j,L,ie){var oe,he={},ve=null,_e=null;if(L!=null)for(oe in L.ref!==void 0&&(_e=L.ref),L.key!==void 0&&(ve=""+L.key),L)ke.call(L,oe)&&!P.hasOwnProperty(oe)&&(he[oe]=L[oe]);var me=arguments.length-2;if(me===1)he.children=ie;else if(1<me){for(var Le=Array(me),ze=0;ze<me;ze++)Le[ze]=arguments[ze+2];he.children=Le}if(j&&j.defaultProps)for(oe in me=j.defaultProps,me)he[oe]===void 0&&(he[oe]=me[oe]);return{$$typeof:i,type:j,key:ve,ref:_e,props:he,_owner:Te.current}}function ge(j,L){return{$$typeof:i,type:j.type,key:L,ref:j.ref,props:j.props,_owner:j._owner}}function ne(j){return typeof j=="object"&&j!==null&&j.$$typeof===i}function Ne(j){var L={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ie){return L[ie]})}var fe=/\/+/g;function Pe(j,L){return typeof j=="object"&&j!==null&&j.key!=null?Ne(""+j.key):L.toString(36)}function Ie(j,L,ie,oe,he){var ve=typeof j;(ve==="undefined"||ve==="boolean")&&(j=null);var _e=!1;if(j===null)_e=!0;else switch(ve){case"string":case"number":_e=!0;break;case"object":switch(j.$$typeof){case i:case u:_e=!0}}if(_e)return _e=j,he=he(_e),j=oe===""?"."+Pe(_e,0):oe,Se(he)?(ie="",j!=null&&(ie=j.replace(fe,"$&/")+"/"),Ie(he,L,ie,"",function(ze){return ze})):he!=null&&(ne(he)&&(he=ge(he,ie+(!he.key||_e&&_e.key===he.key?"":(""+he.key).replace(fe,"$&/")+"/")+j)),L.push(he)),1;if(_e=0,oe=oe===""?".":oe+":",Se(j))for(var me=0;me<j.length;me++){ve=j[me];var Le=oe+Pe(ve,me);_e+=Ie(ve,L,ie,Le,he)}else if(Le=V(j),typeof Le=="function")for(j=Le.call(j),me=0;!(ve=j.next()).done;)ve=ve.value,Le=oe+Pe(ve,me++),_e+=Ie(ve,L,ie,Le,he);else if(ve==="object")throw L=String(j),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return _e}function qe(j,L,ie){if(j==null)return j;var oe=[],he=0;return Ie(j,oe,"","",function(ve){return L.call(ie,ve,he++)}),oe}function ae(j){if(j._status===-1){var L=j._result;L=L(),L.then(function(ie){(j._status===0||j._status===-1)&&(j._status=1,j._result=ie)},function(ie){(j._status===0||j._status===-1)&&(j._status=2,j._result=ie)}),j._status===-1&&(j._status=0,j._result=L)}if(j._status===1)return j._result.default;throw j._result}var pe={current:null},$={transition:null},Z={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:$,ReactCurrentOwner:Te};function W(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:qe,forEach:function(j,L,ie){qe(j,function(){L.apply(this,arguments)},ie)},count:function(j){var L=0;return qe(j,function(){L++}),L},toArray:function(j){return qe(j,function(L){return L})||[]},only:function(j){if(!ne(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},je.Component=_,je.Fragment=o,je.Profiler=h,je.PureComponent=te,je.StrictMode=d,je.Suspense=x,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,je.act=W,je.cloneElement=function(j,L,ie){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var oe=A({},j.props),he=j.key,ve=j.ref,_e=j._owner;if(L!=null){if(L.ref!==void 0&&(ve=L.ref,_e=Te.current),L.key!==void 0&&(he=""+L.key),j.type&&j.type.defaultProps)var me=j.type.defaultProps;for(Le in L)ke.call(L,Le)&&!P.hasOwnProperty(Le)&&(oe[Le]=L[Le]===void 0&&me!==void 0?me[Le]:L[Le])}var Le=arguments.length-2;if(Le===1)oe.children=ie;else if(1<Le){me=Array(Le);for(var ze=0;ze<Le;ze++)me[ze]=arguments[ze+2];oe.children=me}return{$$typeof:i,type:j.type,key:he,ref:ve,props:oe,_owner:_e}},je.createContext=function(j){return j={$$typeof:y,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:f,_context:j},j.Consumer=j},je.createElement=F,je.createFactory=function(j){var L=F.bind(null,j);return L.type=j,L},je.createRef=function(){return{current:null}},je.forwardRef=function(j){return{$$typeof:p,render:j}},je.isValidElement=ne,je.lazy=function(j){return{$$typeof:N,_payload:{_status:-1,_result:j},_init:ae}},je.memo=function(j,L){return{$$typeof:w,type:j,compare:L===void 0?null:L}},je.startTransition=function(j){var L=$.transition;$.transition={};try{j()}finally{$.transition=L}},je.unstable_act=W,je.useCallback=function(j,L){return pe.current.useCallback(j,L)},je.useContext=function(j){return pe.current.useContext(j)},je.useDebugValue=function(){},je.useDeferredValue=function(j){return pe.current.useDeferredValue(j)},je.useEffect=function(j,L){return pe.current.useEffect(j,L)},je.useId=function(){return pe.current.useId()},je.useImperativeHandle=function(j,L,ie){return pe.current.useImperativeHandle(j,L,ie)},je.useInsertionEffect=function(j,L){return pe.current.useInsertionEffect(j,L)},je.useLayoutEffect=function(j,L){return pe.current.useLayoutEffect(j,L)},je.useMemo=function(j,L){return pe.current.useMemo(j,L)},je.useReducer=function(j,L,ie){return pe.current.useReducer(j,L,ie)},je.useRef=function(j){return pe.current.useRef(j)},je.useState=function(j){return pe.current.useState(j)},je.useSyncExternalStore=function(j,L,ie){return pe.current.useSyncExternalStore(j,L,ie)},je.useTransition=function(){return pe.current.useTransition()},je.version="18.3.1",je}var tc;function fa(){return tc||(tc=1,ia.exports=kf()),ia.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function Nf(){if(rc)return Zr;rc=1;var i=fa(),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,h=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function y(p,x,w){var N,I={},V=null,K=null;w!==void 0&&(V=""+w),x.key!==void 0&&(V=""+x.key),x.ref!==void 0&&(K=x.ref);for(N in x)d.call(x,N)&&!f.hasOwnProperty(N)&&(I[N]=x[N]);if(p&&p.defaultProps)for(N in x=p.defaultProps,x)I[N]===void 0&&(I[N]=x[N]);return{$$typeof:u,type:p,key:V,ref:K,props:I,_owner:h.current}}return Zr.Fragment=o,Zr.jsx=y,Zr.jsxs=y,Zr}var lc;function Cf(){return lc||(lc=1,la.exports=Nf()),la.exports}var l=Cf(),E=fa(),oi={},sa={exports:{}},Sn={},aa={exports:{}},oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ic;function Ef(){return ic||(ic=1,(function(i){function u($,Z){var W=$.length;$.push(Z);e:for(;0<W;){var j=W-1>>>1,L=$[j];if(0<h(L,Z))$[j]=Z,$[W]=L,W=j;else break e}}function o($){return $.length===0?null:$[0]}function d($){if($.length===0)return null;var Z=$[0],W=$.pop();if(W!==Z){$[0]=W;e:for(var j=0,L=$.length,ie=L>>>1;j<ie;){var oe=2*(j+1)-1,he=$[oe],ve=oe+1,_e=$[ve];if(0>h(he,W))ve<L&&0>h(_e,he)?($[j]=_e,$[ve]=W,j=ve):($[j]=he,$[oe]=W,j=oe);else if(ve<L&&0>h(_e,W))$[j]=_e,$[ve]=W,j=ve;else break e}}return Z}function h($,Z){var W=$.sortIndex-Z.sortIndex;return W!==0?W:$.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var y=Date,p=y.now();i.unstable_now=function(){return y.now()-p}}var x=[],w=[],N=1,I=null,V=3,K=!1,A=!1,R=!1,_=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ce($){for(var Z=o(w);Z!==null;){if(Z.callback===null)d(w);else if(Z.startTime<=$)d(w),Z.sortIndex=Z.expirationTime,u(x,Z);else break;Z=o(w)}}function Se($){if(R=!1,Ce($),!A)if(o(x)!==null)A=!0,ae(ke);else{var Z=o(w);Z!==null&&pe(Se,Z.startTime-$)}}function ke($,Z){A=!1,R&&(R=!1,ce(F),F=-1),K=!0;var W=V;try{for(Ce(Z),I=o(x);I!==null&&(!(I.expirationTime>Z)||$&&!Ne());){var j=I.callback;if(typeof j=="function"){I.callback=null,V=I.priorityLevel;var L=j(I.expirationTime<=Z);Z=i.unstable_now(),typeof L=="function"?I.callback=L:I===o(x)&&d(x),Ce(Z)}else d(x);I=o(x)}if(I!==null)var ie=!0;else{var oe=o(w);oe!==null&&pe(Se,oe.startTime-Z),ie=!1}return ie}finally{I=null,V=W,K=!1}}var Te=!1,P=null,F=-1,ge=5,ne=-1;function Ne(){return!(i.unstable_now()-ne<ge)}function fe(){if(P!==null){var $=i.unstable_now();ne=$;var Z=!0;try{Z=P(!0,$)}finally{Z?Pe():(Te=!1,P=null)}}else Te=!1}var Pe;if(typeof te=="function")Pe=function(){te(fe)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,qe=Ie.port2;Ie.port1.onmessage=fe,Pe=function(){qe.postMessage(null)}}else Pe=function(){_(fe,0)};function ae($){P=$,Te||(Te=!0,Pe())}function pe($,Z){F=_(function(){$(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){A||K||(A=!0,ae(ke))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return V},i.unstable_getFirstCallbackNode=function(){return o(x)},i.unstable_next=function($){switch(V){case 1:case 2:case 3:var Z=3;break;default:Z=V}var W=V;V=Z;try{return $()}finally{V=W}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,Z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var W=V;V=$;try{return Z()}finally{V=W}},i.unstable_scheduleCallback=function($,Z,W){var j=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?j+W:j):W=j,$){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=W+L,$={id:N++,callback:Z,priorityLevel:$,startTime:W,expirationTime:L,sortIndex:-1},W>j?($.sortIndex=W,u(w,$),o(x)===null&&$===o(w)&&(R?(ce(F),F=-1):R=!0,pe(Se,W-j))):($.sortIndex=L,u(x,$),A||K||(A=!0,ae(ke))),$},i.unstable_shouldYield=Ne,i.unstable_wrapCallback=function($){var Z=V;return function(){var W=V;V=Z;try{return $.apply(this,arguments)}finally{V=W}}}})(oa)),oa}var sc;function If(){return sc||(sc=1,aa.exports=Ef()),aa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function Tf(){if(ac)return Sn;ac=1;var i=fa(),u=If();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,h={};function f(e,n){y(e,n),y(e+"Capture",n)}function y(e,n){for(h[e]=n,e=0;e<n.length;e++)d.add(n[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},I={};function V(e){return x.call(I,e)?!0:x.call(N,e)?!1:w.test(e)?I[e]=!0:(N[e]=!0,!1)}function K(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,n,t,r){if(n===null||typeof n>"u"||K(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function R(e,n,t,r,s,a,c){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=c}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];_[n]=new R(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var ce=/[\-:]([a-z])/g;function te(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ce,te);_[n]=new R(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ce,te);_[n]=new R(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ce,te);_[n]=new R(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ce(e,n,t,r){var s=_.hasOwnProperty(n)?_[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(A(n,t,s,r)&&(t=null),r||s===null?V(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,r=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Se=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Te=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),Ne=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),Ie=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),$=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,j;function L(e){if(j===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);j=n&&n[1]||""}return`
`+j+e}var ie=!1;function oe(e,n){if(!e||ie)return"";ie=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(T){var r=T}Reflect.construct(e,[],n)}else{try{n.call()}catch(T){r=T}e.call(n.prototype)}else{try{throw Error()}catch(T){r=T}e()}}catch(T){if(T&&r&&typeof T.stack=="string"){for(var s=T.stack.split(`
`),a=r.stack.split(`
`),c=s.length-1,m=a.length-1;1<=c&&0<=m&&s[c]!==a[m];)m--;for(;1<=c&&0<=m;c--,m--)if(s[c]!==a[m]){if(c!==1||m!==1)do if(c--,m--,0>m||s[c]!==a[m]){var g=`
`+s[c].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=c&&0<=m);break}}}finally{ie=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?L(e):""}function he(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ve(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case Te:return"Portal";case ge:return"Profiler";case F:return"StrictMode";case Pe:return"Suspense";case Ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ne:return(e.displayName||"Context")+".Consumer";case ne:return(e._context.displayName||"Context")+".Provider";case fe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qe:return n=e.displayName||null,n!==null?n:ve(e.type)||"Memo";case ae:n=e._payload,e=e._init;try{return ve(e(n))}catch{}}return null}function _e(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(n);case 8:return n===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ze(e){var n=Le(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(c){r=""+c,a.call(this,c)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function In(e){e._valueTracker||(e._valueTracker=ze(e))}function Ue(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Le(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function b(e,n){var t=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function k(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=me(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function H(e,n){n=n.checked,n!=null&&Ce(e,"checked",n,!1)}function ye(e,n){H(e,n);var t=me(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ee(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ee(e,n.type,me(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xe(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ee(e,n,t){(n!=="number"||Tn(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ln=Array.isArray;function Be(e,n,t,r){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&r&&(e[t].defaultSelected=!0)}else{for(t=""+me(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function Dn(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Et(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(o(92));if(ln(t)){if(1<t.length)throw Error(o(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:me(t)}}function Wn(e,n){var t=me(n.value),r=me(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function M(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function U(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Q(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?U(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var G,we=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,s)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(G=G||document.createElement("div"),G.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=G.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function se(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var de={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(de).forEach(function(e){Qe.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),de[n]=de[e]})});function yn(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||de.hasOwnProperty(e)&&de[e]?(""+n).trim():n+"px"}function on(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,s=yn(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,s):e[t]=s}}var De=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(e,n){if(n){if(De[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function Ft(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gi=null;function vi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xi=null,Ut=null,Ht=null;function ga(e){if(e=Or(e)){if(typeof xi!="function")throw Error(o(280));var n=e.stateNode;n&&(n=kl(n),xi(e.stateNode,e.type,n))}}function va(e){Ut?Ht?Ht.push(e):Ht=[e]:Ut=e}function xa(){if(Ut){var e=Ut,n=Ht;if(Ht=Ut=null,ga(e),n)for(e=0;e<n.length;e++)ga(n[e])}}function wa(e,n){return e(n)}function ja(){}var wi=!1;function Sa(e,n,t){if(wi)return e(n,t);wi=!0;try{return wa(e,n,t)}finally{wi=!1,(Ut!==null||Ht!==null)&&(ja(),xa())}}function gr(e,n){var t=e.stateNode;if(t===null)return null;var r=kl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,n,typeof t));return t}var ji=!1;if(p)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ji=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ji=!1}function Ec(e,n,t,r,s,a,c,m,g){var T=Array.prototype.slice.call(arguments,3);try{n.apply(t,T)}catch(D){this.onError(D)}}var xr=!1,nl=null,tl=!1,Si=null,Ic={onError:function(e){xr=!0,nl=e}};function Tc(e,n,t,r,s,a,c,m,g){xr=!1,nl=null,Ec.apply(Ic,arguments)}function Pc(e,n,t,r,s,a,c,m,g){if(Tc.apply(this,arguments),xr){if(xr){var T=nl;xr=!1,nl=null}else throw Error(o(198));tl||(tl=!0,Si=T)}}function It(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ka(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Na(e){if(It(e)!==e)throw Error(o(188))}function Rc(e){var n=e.alternate;if(!n){if(n=It(e),n===null)throw Error(o(188));return n!==e?null:e}for(var t=e,r=n;;){var s=t.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){t=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===t)return Na(s),e;if(a===r)return Na(s),n;a=a.sibling}throw Error(o(188))}if(t.return!==r.return)t=s,r=a;else{for(var c=!1,m=s.child;m;){if(m===t){c=!0,t=s,r=a;break}if(m===r){c=!0,r=s,t=a;break}m=m.sibling}if(!c){for(m=a.child;m;){if(m===t){c=!0,t=a,r=s;break}if(m===r){c=!0,r=a,t=s;break}m=m.sibling}if(!c)throw Error(o(189))}}if(t.alternate!==r)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:n}function Ca(e){return e=Rc(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ea(e);if(n!==null)return n;e=e.sibling}return null}var Ia=u.unstable_scheduleCallback,Ta=u.unstable_cancelCallback,_c=u.unstable_shouldYield,Lc=u.unstable_requestPaint,Ke=u.unstable_now,bc=u.unstable_getCurrentPriorityLevel,ki=u.unstable_ImmediatePriority,Pa=u.unstable_UserBlockingPriority,rl=u.unstable_NormalPriority,Mc=u.unstable_LowPriority,Ra=u.unstable_IdlePriority,ll=null,Gn=null;function Ac(e){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:Oc,Bc=Math.log,Dc=Math.LN2;function Oc(e){return e>>>=0,e===0?32:31-(Bc(e)/Dc|0)|0}var il=64,sl=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,c=t&268435455;if(c!==0){var m=c&~s;m!==0?r=wr(m):(a&=c,a!==0&&(r=wr(a)))}else c=t&~s,c!==0?r=wr(c):a!==0&&(r=wr(a));if(r===0)return 0;if(n!==0&&n!==r&&(n&s)===0&&(s=r&-r,a=n&-n,s>=a||s===16&&(a&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-On(n),s=1<<t,r|=e[t],n&=~s;return r}function $c(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-On(a),m=1<<c,g=s[c];g===-1?((m&t)===0||(m&r)!==0)&&(s[c]=$c(m,n)):g<=n&&(e.expiredLanes|=m),a&=~m}}function Ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _a(){var e=il;return il<<=1,(il&4194240)===0&&(il=64),e}function Ci(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function jr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-On(n),e[n]=t}function Fc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-On(t),a=1<<s;n[s]=0,r[s]=-1,e[s]=-1,t&=~a}}function Ei(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-On(t),s=1<<r;s&n|e[r]&n&&(e[r]|=n),t&=~s}}var Me=0;function La(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ba,Ii,Ma,Aa,Ba,Ti=!1,ol=[],st=null,at=null,ot=null,Sr=new Map,kr=new Map,ut=[],Uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Da(e,n){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Sr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(n.pointerId)}}function Nr(e,n,t,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},n!==null&&(n=Or(n),n!==null&&Ii(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Hc(e,n,t,r,s){switch(n){case"focusin":return st=Nr(st,e,n,t,r,s),!0;case"dragenter":return at=Nr(at,e,n,t,r,s),!0;case"mouseover":return ot=Nr(ot,e,n,t,r,s),!0;case"pointerover":var a=s.pointerId;return Sr.set(a,Nr(Sr.get(a)||null,e,n,t,r,s)),!0;case"gotpointercapture":return a=s.pointerId,kr.set(a,Nr(kr.get(a)||null,e,n,t,r,s)),!0}return!1}function Oa(e){var n=Tt(e.target);if(n!==null){var t=It(n);if(t!==null){if(n=t.tag,n===13){if(n=ka(t),n!==null){e.blockedOn=n,Ba(e.priority,function(){Ma(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ul(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ri(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);gi=r,t.target.dispatchEvent(r),gi=null}else return n=Or(t),n!==null&&Ii(n),e.blockedOn=t,!1;n.shift()}return!0}function $a(e,n,t){ul(e)&&t.delete(n)}function Vc(){Ti=!1,st!==null&&ul(st)&&(st=null),at!==null&&ul(at)&&(at=null),ot!==null&&ul(ot)&&(ot=null),Sr.forEach($a),kr.forEach($a)}function Cr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ti||(Ti=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Vc)))}function Er(e){function n(s){return Cr(s,e)}if(0<ol.length){Cr(ol[0],e);for(var t=1;t<ol.length;t++){var r=ol[t];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&Cr(st,e),at!==null&&Cr(at,e),ot!==null&&Cr(ot,e),Sr.forEach(n),kr.forEach(n),t=0;t<ut.length;t++)r=ut[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(t=ut[0],t.blockedOn===null);)Oa(t),t.blockedOn===null&&ut.shift()}var Vt=Se.ReactCurrentBatchConfig,cl=!0;function Wc(e,n,t,r){var s=Me,a=Vt.transition;Vt.transition=null;try{Me=1,Pi(e,n,t,r)}finally{Me=s,Vt.transition=a}}function Gc(e,n,t,r){var s=Me,a=Vt.transition;Vt.transition=null;try{Me=4,Pi(e,n,t,r)}finally{Me=s,Vt.transition=a}}function Pi(e,n,t,r){if(cl){var s=Ri(e,n,t,r);if(s===null)qi(e,n,r,dl,t),Da(e,r);else if(Hc(s,e,n,t,r))r.stopPropagation();else if(Da(e,r),n&4&&-1<Uc.indexOf(e)){for(;s!==null;){var a=Or(s);if(a!==null&&ba(a),a=Ri(e,n,t,r),a===null&&qi(e,n,r,dl,t),a===s)break;s=a}s!==null&&r.stopPropagation()}else qi(e,n,r,null,t)}}var dl=null;function Ri(e,n,t,r){if(dl=null,e=vi(r),e=Tt(e),e!==null)if(n=It(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ka(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return dl=e,null}function za(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bc()){case ki:return 1;case Pa:return 4;case rl:case Mc:return 16;case Ra:return 536870912;default:return 16}default:return 16}}var ct=null,_i=null,fl=null;function Fa(){if(fl)return fl;var e,n=_i,t=n.length,r,s="value"in ct?ct.value:ct.textContent,a=s.length;for(e=0;e<t&&n[e]===s[e];e++);var c=t-e;for(r=1;r<=c&&n[t-r]===s[a-r];r++);return fl=s.slice(e,1<r?1-r:void 0)}function hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Ua(){return!1}function kn(e){function n(t,r,s,a,c){this._reactName=t,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(t=e[m],this[m]=t?t(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ml:Ua,this.isPropagationStopped=Ua,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=kn(Wt),Ir=W({},Wt,{view:0,detail:0}),qc=kn(Ir),bi,Mi,Tr,pl=W({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(bi=e.screenX-Tr.screenX,Mi=e.screenY-Tr.screenY):Mi=bi=0,Tr=e),bi)},movementY:function(e){return"movementY"in e?e.movementY:Mi}}),Ha=kn(pl),Qc=W({},pl,{dataTransfer:0}),Kc=kn(Qc),Yc=W({},Ir,{relatedTarget:0}),Ai=kn(Yc),Xc=W({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Jc=kn(Xc),Zc=W({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ed=kn(Zc),nd=W({},Wt,{data:0}),Va=kn(nd),td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function id(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ld[e])?!!n[e]:!1}function Bi(){return id}var sd=W({},Ir,{key:function(e){if(e.key){var n=td[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bi,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ad=kn(sd),od=W({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=kn(od),ud=W({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bi}),cd=kn(ud),dd=W({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),fd=kn(dd),hd=W({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),md=kn(hd),pd=[9,13,27,32],Di=p&&"CompositionEvent"in window,Pr=null;p&&"documentMode"in document&&(Pr=document.documentMode);var yd=p&&"TextEvent"in window&&!Pr,Ga=p&&(!Di||Pr&&8<Pr&&11>=Pr),qa=" ",Qa=!1;function Ka(e,n){switch(e){case"keyup":return pd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ya(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function gd(e,n){switch(e){case"compositionend":return Ya(n);case"keypress":return n.which!==32?null:(Qa=!0,qa);case"textInput":return e=n.data,e===qa&&Qa?null:e;default:return null}}function vd(e,n){if(Gt)return e==="compositionend"||!Di&&Ka(e,n)?(e=Fa(),fl=_i=ct=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ga&&n.locale!=="ko"?null:n.data;default:return null}}var xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xd[e.type]:n==="textarea"}function Ja(e,n,t,r){va(r),n=wl(n,"onChange"),0<n.length&&(t=new Li("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Rr=null,_r=null;function wd(e){go(e,0)}function yl(e){var n=Xt(e);if(Ue(n))return e}function jd(e,n){if(e==="change")return n}var Za=!1;if(p){var Oi;if(p){var $i="oninput"in document;if(!$i){var eo=document.createElement("div");eo.setAttribute("oninput","return;"),$i=typeof eo.oninput=="function"}Oi=$i}else Oi=!1;Za=Oi&&(!document.documentMode||9<document.documentMode)}function no(){Rr&&(Rr.detachEvent("onpropertychange",to),_r=Rr=null)}function to(e){if(e.propertyName==="value"&&yl(_r)){var n=[];Ja(n,_r,e,vi(e)),Sa(wd,n)}}function Sd(e,n,t){e==="focusin"?(no(),Rr=n,_r=t,Rr.attachEvent("onpropertychange",to)):e==="focusout"&&no()}function kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(_r)}function Nd(e,n){if(e==="click")return yl(n)}function Cd(e,n){if(e==="input"||e==="change")return yl(n)}function Ed(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Ed;function Lr(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var s=t[r];if(!x.call(n,s)||!$n(e[s],n[s]))return!1}return!0}function ro(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lo(e,n){var t=ro(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ro(t)}}function io(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?io(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function so(){for(var e=window,n=Tn();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Tn(e.document)}return n}function zi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Id(e){var n=so(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&io(t.ownerDocument.documentElement,t)){if(r!==null&&zi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=lo(t,a);var c=lo(t,r);s&&c&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(c.node,c.offset)):(n.setEnd(c.node,c.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Td=p&&"documentMode"in document&&11>=document.documentMode,qt=null,Fi=null,br=null,Ui=!1;function ao(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ui||qt==null||qt!==Tn(r)||(r=qt,"selectionStart"in r&&zi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&Lr(br,r)||(br=r,r=wl(Fi,"onSelect"),0<r.length&&(n=new Li("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=qt)))}function gl(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qt={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Hi={},oo={};p&&(oo=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function vl(e){if(Hi[e])return Hi[e];if(!Qt[e])return e;var n=Qt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in oo)return Hi[e]=n[t];return e}var uo=vl("animationend"),co=vl("animationiteration"),fo=vl("animationstart"),ho=vl("transitionend"),mo=new Map,po="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dt(e,n){mo.set(e,n),f(n,[e])}for(var Vi=0;Vi<po.length;Vi++){var Wi=po[Vi],Pd=Wi.toLowerCase(),Rd=Wi[0].toUpperCase()+Wi.slice(1);dt(Pd,"on"+Rd)}dt(uo,"onAnimationEnd"),dt(co,"onAnimationIteration"),dt(fo,"onAnimationStart"),dt("dblclick","onDoubleClick"),dt("focusin","onFocus"),dt("focusout","onBlur"),dt(ho,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_d=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function yo(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Pc(r,n,void 0,e),e.currentTarget=null}function go(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],s=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var c=r.length-1;0<=c;c--){var m=r[c],g=m.instance,T=m.currentTarget;if(m=m.listener,g!==a&&s.isPropagationStopped())break e;yo(s,m,T),a=g}else for(c=0;c<r.length;c++){if(m=r[c],g=m.instance,T=m.currentTarget,m=m.listener,g!==a&&s.isPropagationStopped())break e;yo(s,m,T),a=g}}}if(tl)throw e=Si,tl=!1,Si=null,e}function Oe(e,n){var t=n[Zi];t===void 0&&(t=n[Zi]=new Set);var r=e+"__bubble";t.has(r)||(vo(n,e,2,!1),t.add(r))}function Gi(e,n,t){var r=0;n&&(r|=4),vo(t,e,r,n)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[xl]){e[xl]=!0,d.forEach(function(t){t!=="selectionchange"&&(_d.has(t)||Gi(t,!1,e),Gi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xl]||(n[xl]=!0,Gi("selectionchange",!1,n))}}function vo(e,n,t,r){switch(za(n)){case 1:var s=Wc;break;case 4:s=Gc;break;default:s=Pi}t=s.bind(null,n,t,e),s=void 0,!ji||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function qi(e,n,t,r,s){var a=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var m=r.stateNode.containerInfo;if(m===s||m.nodeType===8&&m.parentNode===s)break;if(c===4)for(c=r.return;c!==null;){var g=c.tag;if((g===3||g===4)&&(g=c.stateNode.containerInfo,g===s||g.nodeType===8&&g.parentNode===s))return;c=c.return}for(;m!==null;){if(c=Tt(m),c===null)return;if(g=c.tag,g===5||g===6){r=a=c;continue e}m=m.parentNode}}r=r.return}Sa(function(){var T=a,D=vi(t),O=[];e:{var B=mo.get(e);if(B!==void 0){var q=Li,X=e;switch(e){case"keypress":if(hl(t)===0)break e;case"keydown":case"keyup":q=ad;break;case"focusin":X="focus",q=Ai;break;case"focusout":X="blur",q=Ai;break;case"beforeblur":case"afterblur":q=Ai;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Kc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=cd;break;case uo:case co:case fo:q=Jc;break;case ho:q=fd;break;case"scroll":q=qc;break;case"wheel":q=md;break;case"copy":case"cut":case"paste":q=ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Wa}var J=(n&4)!==0,Ye=!J&&e==="scroll",S=J?B!==null?B+"Capture":null:B;J=[];for(var v=T,C;v!==null;){C=v;var z=C.stateNode;if(C.tag===5&&z!==null&&(C=z,S!==null&&(z=gr(v,S),z!=null&&J.push(Br(v,z,C)))),Ye)break;v=v.return}0<J.length&&(B=new q(B,X,null,t,D),O.push({event:B,listeners:J}))}}if((n&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",B&&t!==gi&&(X=t.relatedTarget||t.fromElement)&&(Tt(X)||X[Jn]))break e;if((q||B)&&(B=D.window===D?D:(B=D.ownerDocument)?B.defaultView||B.parentWindow:window,q?(X=t.relatedTarget||t.toElement,q=T,X=X?Tt(X):null,X!==null&&(Ye=It(X),X!==Ye||X.tag!==5&&X.tag!==6)&&(X=null)):(q=null,X=T),q!==X)){if(J=Ha,z="onMouseLeave",S="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(J=Wa,z="onPointerLeave",S="onPointerEnter",v="pointer"),Ye=q==null?B:Xt(q),C=X==null?B:Xt(X),B=new J(z,v+"leave",q,t,D),B.target=Ye,B.relatedTarget=C,z=null,Tt(D)===T&&(J=new J(S,v+"enter",X,t,D),J.target=C,J.relatedTarget=Ye,z=J),Ye=z,q&&X)n:{for(J=q,S=X,v=0,C=J;C;C=Kt(C))v++;for(C=0,z=S;z;z=Kt(z))C++;for(;0<v-C;)J=Kt(J),v--;for(;0<C-v;)S=Kt(S),C--;for(;v--;){if(J===S||S!==null&&J===S.alternate)break n;J=Kt(J),S=Kt(S)}J=null}else J=null;q!==null&&xo(O,B,q,J,!1),X!==null&&Ye!==null&&xo(O,Ye,X,J,!0)}}e:{if(B=T?Xt(T):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var ee=jd;else if(Xa(B))if(Za)ee=Cd;else{ee=kd;var re=Sd}else(q=B.nodeName)&&q.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(ee=Nd);if(ee&&(ee=ee(e,T))){Ja(O,ee,t,D);break e}re&&re(e,B,T),e==="focusout"&&(re=B._wrapperState)&&re.controlled&&B.type==="number"&&Ee(B,"number",B.value)}switch(re=T?Xt(T):window,e){case"focusin":(Xa(re)||re.contentEditable==="true")&&(qt=re,Fi=T,br=null);break;case"focusout":br=Fi=qt=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,ao(O,t,D);break;case"selectionchange":if(Td)break;case"keydown":case"keyup":ao(O,t,D)}var le;if(Di)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Gt?Ka(e,t)&&(ue="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ue="onCompositionStart");ue&&(Ga&&t.locale!=="ko"&&(Gt||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Gt&&(le=Fa()):(ct=D,_i="value"in ct?ct.value:ct.textContent,Gt=!0)),re=wl(T,ue),0<re.length&&(ue=new Va(ue,e,null,t,D),O.push({event:ue,listeners:re}),le?ue.data=le:(le=Ya(t),le!==null&&(ue.data=le)))),(le=yd?gd(e,t):vd(e,t))&&(T=wl(T,"onBeforeInput"),0<T.length&&(D=new Va("onBeforeInput","beforeinput",null,t,D),O.push({event:D,listeners:T}),D.data=le))}go(O,n)})}function Br(e,n,t){return{instance:e,listener:n,currentTarget:t}}function wl(e,n){for(var t=n+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=gr(e,t),a!=null&&r.unshift(Br(e,a,s)),a=gr(e,n),a!=null&&r.push(Br(e,a,s))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xo(e,n,t,r,s){for(var a=n._reactName,c=[];t!==null&&t!==r;){var m=t,g=m.alternate,T=m.stateNode;if(g!==null&&g===r)break;m.tag===5&&T!==null&&(m=T,s?(g=gr(t,a),g!=null&&c.unshift(Br(t,g,m))):s||(g=gr(t,a),g!=null&&c.push(Br(t,g,m)))),t=t.return}c.length!==0&&e.push({event:n,listeners:c})}var Ld=/\r\n?/g,bd=/\u0000|\uFFFD/g;function wo(e){return(typeof e=="string"?e:""+e).replace(Ld,`
`).replace(bd,"")}function jl(e,n,t){if(n=wo(n),wo(e)!==n&&t)throw Error(o(425))}function Sl(){}var Qi=null,Ki=null;function Yi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xi=typeof setTimeout=="function"?setTimeout:void 0,Md=typeof clearTimeout=="function"?clearTimeout:void 0,jo=typeof Promise=="function"?Promise:void 0,Ad=typeof queueMicrotask=="function"?queueMicrotask:typeof jo<"u"?function(e){return jo.resolve(null).then(e).catch(Bd)}:Xi;function Bd(e){setTimeout(function(){throw e})}function Ji(e,n){var t=n,r=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(r===0){e.removeChild(s),Er(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=s}while(t);Er(n)}function ft(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function So(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Yt=Math.random().toString(36).slice(2),qn="__reactFiber$"+Yt,Dr="__reactProps$"+Yt,Jn="__reactContainer$"+Yt,Zi="__reactEvents$"+Yt,Dd="__reactListeners$"+Yt,Od="__reactHandles$"+Yt;function Tt(e){var n=e[qn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Jn]||t[qn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=So(e);e!==null;){if(t=e[qn])return t;e=So(e)}return n}e=t,t=e.parentNode}return null}function Or(e){return e=e[qn]||e[Jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function kl(e){return e[Dr]||null}var es=[],Jt=-1;function ht(e){return{current:e}}function $e(e){0>Jt||(e.current=es[Jt],es[Jt]=null,Jt--)}function Ae(e,n){Jt++,es[Jt]=e.current,e.current=n}var mt={},un=ht(mt),gn=ht(!1),Pt=mt;function Zt(e,n){var t=e.type.contextTypes;if(!t)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in t)s[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function vn(e){return e=e.childContextTypes,e!=null}function Nl(){$e(gn),$e(un)}function ko(e,n,t){if(un.current!==mt)throw Error(o(168));Ae(un,n),Ae(gn,t)}function No(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(o(108,_e(e)||"Unknown",s));return W({},t,r)}function Cl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Pt=un.current,Ae(un,e),Ae(gn,gn.current),!0}function Co(e,n,t){var r=e.stateNode;if(!r)throw Error(o(169));t?(e=No(e,n,Pt),r.__reactInternalMemoizedMergedChildContext=e,$e(gn),$e(un),Ae(un,e)):$e(gn),Ae(gn,t)}var Zn=null,El=!1,ns=!1;function Eo(e){Zn===null?Zn=[e]:Zn.push(e)}function $d(e){El=!0,Eo(e)}function pt(){if(!ns&&Zn!==null){ns=!0;var e=0,n=Me;try{var t=Zn;for(Me=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Zn=null,El=!1}catch(s){throw Zn!==null&&(Zn=Zn.slice(e+1)),Ia(ki,pt),s}finally{Me=n,ns=!1}}return null}var er=[],nr=0,Il=null,Tl=0,Pn=[],Rn=0,Rt=null,et=1,nt="";function _t(e,n){er[nr++]=Tl,er[nr++]=Il,Il=e,Tl=n}function Io(e,n,t){Pn[Rn++]=et,Pn[Rn++]=nt,Pn[Rn++]=Rt,Rt=e;var r=et;e=nt;var s=32-On(r)-1;r&=~(1<<s),t+=1;var a=32-On(n)+s;if(30<a){var c=s-s%5;a=(r&(1<<c)-1).toString(32),r>>=c,s-=c,et=1<<32-On(n)+s|t<<s|r,nt=a+e}else et=1<<a|t<<s|r,nt=e}function ts(e){e.return!==null&&(_t(e,1),Io(e,1,0))}function rs(e){for(;e===Il;)Il=er[--nr],er[nr]=null,Tl=er[--nr],er[nr]=null;for(;e===Rt;)Rt=Pn[--Rn],Pn[Rn]=null,nt=Pn[--Rn],Pn[Rn]=null,et=Pn[--Rn],Pn[Rn]=null}var Nn=null,Cn=null,Fe=!1,zn=null;function To(e,n){var t=Mn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Po(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Nn=e,Cn=ft(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Nn=e,Cn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Rt!==null?{id:et,overflow:nt}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Mn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Nn=e,Cn=null,!0):!1;default:return!1}}function ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function is(e){if(Fe){var n=Cn;if(n){var t=n;if(!Po(e,n)){if(ls(e))throw Error(o(418));n=ft(t.nextSibling);var r=Nn;n&&Po(e,n)?To(r,t):(e.flags=e.flags&-4097|2,Fe=!1,Nn=e)}}else{if(ls(e))throw Error(o(418));e.flags=e.flags&-4097|2,Fe=!1,Nn=e}}}function Ro(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nn=e}function Pl(e){if(e!==Nn)return!1;if(!Fe)return Ro(e),Fe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Yi(e.type,e.memoizedProps)),n&&(n=Cn)){if(ls(e))throw _o(),Error(o(418));for(;n;)To(e,n),n=ft(n.nextSibling)}if(Ro(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Cn=ft(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Cn=null}}else Cn=Nn?ft(e.stateNode.nextSibling):null;return!0}function _o(){for(var e=Cn;e;)e=ft(e.nextSibling)}function tr(){Cn=Nn=null,Fe=!1}function ss(e){zn===null?zn=[e]:zn.push(e)}var zd=Se.ReactCurrentBatchConfig;function $r(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(o(309));var r=t.stateNode}if(!r)throw Error(o(147,e));var s=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(c){var m=s.refs;c===null?delete m[a]:m[a]=c},n._stringRef=a,n)}if(typeof e!="string")throw Error(o(284));if(!t._owner)throw Error(o(290,e))}return e}function Rl(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Lo(e){var n=e._init;return n(e._payload)}function bo(e){function n(S,v){if(e){var C=S.deletions;C===null?(S.deletions=[v],S.flags|=16):C.push(v)}}function t(S,v){if(!e)return null;for(;v!==null;)n(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function s(S,v){return S=kt(S,v),S.index=0,S.sibling=null,S}function a(S,v,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<v?(S.flags|=2,v):C):(S.flags|=2,v)):(S.flags|=1048576,v)}function c(S){return e&&S.alternate===null&&(S.flags|=2),S}function m(S,v,C,z){return v===null||v.tag!==6?(v=Xs(C,S.mode,z),v.return=S,v):(v=s(v,C),v.return=S,v)}function g(S,v,C,z){var ee=C.type;return ee===P?D(S,v,C.props.children,z,C.key):v!==null&&(v.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ae&&Lo(ee)===v.type)?(z=s(v,C.props),z.ref=$r(S,v,C),z.return=S,z):(z=ei(C.type,C.key,C.props,null,S.mode,z),z.ref=$r(S,v,C),z.return=S,z)}function T(S,v,C,z){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Js(C,S.mode,z),v.return=S,v):(v=s(v,C.children||[]),v.return=S,v)}function D(S,v,C,z,ee){return v===null||v.tag!==7?(v=$t(C,S.mode,z,ee),v.return=S,v):(v=s(v,C),v.return=S,v)}function O(S,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xs(""+v,S.mode,C),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ke:return C=ei(v.type,v.key,v.props,null,S.mode,C),C.ref=$r(S,null,v),C.return=S,C;case Te:return v=Js(v,S.mode,C),v.return=S,v;case ae:var z=v._init;return O(S,z(v._payload),C)}if(ln(v)||Z(v))return v=$t(v,S.mode,C,null),v.return=S,v;Rl(S,v)}return null}function B(S,v,C,z){var ee=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return ee!==null?null:m(S,v,""+C,z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ke:return C.key===ee?g(S,v,C,z):null;case Te:return C.key===ee?T(S,v,C,z):null;case ae:return ee=C._init,B(S,v,ee(C._payload),z)}if(ln(C)||Z(C))return ee!==null?null:D(S,v,C,z,null);Rl(S,C)}return null}function q(S,v,C,z,ee){if(typeof z=="string"&&z!==""||typeof z=="number")return S=S.get(C)||null,m(v,S,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ke:return S=S.get(z.key===null?C:z.key)||null,g(v,S,z,ee);case Te:return S=S.get(z.key===null?C:z.key)||null,T(v,S,z,ee);case ae:var re=z._init;return q(S,v,C,re(z._payload),ee)}if(ln(z)||Z(z))return S=S.get(C)||null,D(v,S,z,ee,null);Rl(v,z)}return null}function X(S,v,C,z){for(var ee=null,re=null,le=v,ue=v=0,rn=null;le!==null&&ue<C.length;ue++){le.index>ue?(rn=le,le=null):rn=le.sibling;var be=B(S,le,C[ue],z);if(be===null){le===null&&(le=rn);break}e&&le&&be.alternate===null&&n(S,le),v=a(be,v,ue),re===null?ee=be:re.sibling=be,re=be,le=rn}if(ue===C.length)return t(S,le),Fe&&_t(S,ue),ee;if(le===null){for(;ue<C.length;ue++)le=O(S,C[ue],z),le!==null&&(v=a(le,v,ue),re===null?ee=le:re.sibling=le,re=le);return Fe&&_t(S,ue),ee}for(le=r(S,le);ue<C.length;ue++)rn=q(le,S,ue,C[ue],z),rn!==null&&(e&&rn.alternate!==null&&le.delete(rn.key===null?ue:rn.key),v=a(rn,v,ue),re===null?ee=rn:re.sibling=rn,re=rn);return e&&le.forEach(function(Nt){return n(S,Nt)}),Fe&&_t(S,ue),ee}function J(S,v,C,z){var ee=Z(C);if(typeof ee!="function")throw Error(o(150));if(C=ee.call(C),C==null)throw Error(o(151));for(var re=ee=null,le=v,ue=v=0,rn=null,be=C.next();le!==null&&!be.done;ue++,be=C.next()){le.index>ue?(rn=le,le=null):rn=le.sibling;var Nt=B(S,le,be.value,z);if(Nt===null){le===null&&(le=rn);break}e&&le&&Nt.alternate===null&&n(S,le),v=a(Nt,v,ue),re===null?ee=Nt:re.sibling=Nt,re=Nt,le=rn}if(be.done)return t(S,le),Fe&&_t(S,ue),ee;if(le===null){for(;!be.done;ue++,be=C.next())be=O(S,be.value,z),be!==null&&(v=a(be,v,ue),re===null?ee=be:re.sibling=be,re=be);return Fe&&_t(S,ue),ee}for(le=r(S,le);!be.done;ue++,be=C.next())be=q(le,S,ue,be.value,z),be!==null&&(e&&be.alternate!==null&&le.delete(be.key===null?ue:be.key),v=a(be,v,ue),re===null?ee=be:re.sibling=be,re=be);return e&&le.forEach(function(wf){return n(S,wf)}),Fe&&_t(S,ue),ee}function Ye(S,v,C,z){if(typeof C=="object"&&C!==null&&C.type===P&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case ke:e:{for(var ee=C.key,re=v;re!==null;){if(re.key===ee){if(ee=C.type,ee===P){if(re.tag===7){t(S,re.sibling),v=s(re,C.props.children),v.return=S,S=v;break e}}else if(re.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ae&&Lo(ee)===re.type){t(S,re.sibling),v=s(re,C.props),v.ref=$r(S,re,C),v.return=S,S=v;break e}t(S,re);break}else n(S,re);re=re.sibling}C.type===P?(v=$t(C.props.children,S.mode,z,C.key),v.return=S,S=v):(z=ei(C.type,C.key,C.props,null,S.mode,z),z.ref=$r(S,v,C),z.return=S,S=z)}return c(S);case Te:e:{for(re=C.key;v!==null;){if(v.key===re)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){t(S,v.sibling),v=s(v,C.children||[]),v.return=S,S=v;break e}else{t(S,v);break}else n(S,v);v=v.sibling}v=Js(C,S.mode,z),v.return=S,S=v}return c(S);case ae:return re=C._init,Ye(S,v,re(C._payload),z)}if(ln(C))return X(S,v,C,z);if(Z(C))return J(S,v,C,z);Rl(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(t(S,v.sibling),v=s(v,C),v.return=S,S=v):(t(S,v),v=Xs(C,S.mode,z),v.return=S,S=v),c(S)):t(S,v)}return Ye}var rr=bo(!0),Mo=bo(!1),_l=ht(null),Ll=null,lr=null,as=null;function os(){as=lr=Ll=null}function us(e){var n=_l.current;$e(_l),e._currentValue=n}function cs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ir(e,n){Ll=e,as=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(xn=!0),e.firstContext=null)}function _n(e){var n=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:n,next:null},lr===null){if(Ll===null)throw Error(o(308));lr=e,Ll.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return n}var Lt=null;function ds(e){Lt===null?Lt=[e]:Lt.push(e)}function Ao(e,n,t,r){var s=n.interleaved;return s===null?(t.next=t,ds(n)):(t.next=s.next,s.next=t),n.interleaved=t,tt(e,r)}function tt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var yt=!1;function fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,tt(e,t)}return s=r.interleaved,s===null?(n.next=n,ds(r)):(n.next=s.next,s.next=n),r.interleaved=n,tt(e,t)}function bl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ei(e,t)}}function Do(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var s=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var c={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?s=a=c:a=a.next=c,t=t.next}while(t!==null);a===null?s=a=n:a=a.next=n}else s=a=n;t={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ml(e,n,t,r){var s=e.updateQueue;yt=!1;var a=s.firstBaseUpdate,c=s.lastBaseUpdate,m=s.shared.pending;if(m!==null){s.shared.pending=null;var g=m,T=g.next;g.next=null,c===null?a=T:c.next=T,c=g;var D=e.alternate;D!==null&&(D=D.updateQueue,m=D.lastBaseUpdate,m!==c&&(m===null?D.firstBaseUpdate=T:m.next=T,D.lastBaseUpdate=g))}if(a!==null){var O=s.baseState;c=0,D=T=g=null,m=a;do{var B=m.lane,q=m.eventTime;if((r&B)===B){D!==null&&(D=D.next={eventTime:q,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var X=e,J=m;switch(B=n,q=t,J.tag){case 1:if(X=J.payload,typeof X=="function"){O=X.call(q,O,B);break e}O=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=J.payload,B=typeof X=="function"?X.call(q,O,B):X,B==null)break e;O=W({},O,B);break e;case 2:yt=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,B=s.effects,B===null?s.effects=[m]:B.push(m))}else q={eventTime:q,lane:B,tag:m.tag,payload:m.payload,callback:m.callback,next:null},D===null?(T=D=q,g=O):D=D.next=q,c|=B;if(m=m.next,m===null){if(m=s.shared.pending,m===null)break;B=m,m=B.next,B.next=null,s.lastBaseUpdate=B,s.shared.pending=null}}while(!0);if(D===null&&(g=O),s.baseState=g,s.firstBaseUpdate=T,s.lastBaseUpdate=D,n=s.shared.interleaved,n!==null){s=n;do c|=s.lane,s=s.next;while(s!==n)}else a===null&&(s.shared.lanes=0);At|=c,e.lanes=c,e.memoizedState=O}}function Oo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],s=r.callback;if(s!==null){if(r.callback=null,r=t,typeof s!="function")throw Error(o(191,s));s.call(r)}}}var zr={},Qn=ht(zr),Fr=ht(zr),Ur=ht(zr);function bt(e){if(e===zr)throw Error(o(174));return e}function hs(e,n){switch(Ae(Ur,n),Ae(Fr,e),Ae(Qn,zr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Q(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Q(n,e)}$e(Qn),Ae(Qn,n)}function sr(){$e(Qn),$e(Fr),$e(Ur)}function $o(e){bt(Ur.current);var n=bt(Qn.current),t=Q(n,e.type);n!==t&&(Ae(Fr,e),Ae(Qn,t))}function ms(e){Fr.current===e&&($e(Qn),$e(Fr))}var Ve=ht(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ps=[];function ys(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var Bl=Se.ReactCurrentDispatcher,gs=Se.ReactCurrentBatchConfig,Mt=0,We=null,Ze=null,nn=null,Dl=!1,Hr=!1,Vr=0,Fd=0;function cn(){throw Error(o(321))}function vs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!$n(e[t],n[t]))return!1;return!0}function xs(e,n,t,r,s,a){if(Mt=a,We=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Bl.current=e===null||e.memoizedState===null?Wd:Gd,e=t(r,s),Hr){a=0;do{if(Hr=!1,Vr=0,25<=a)throw Error(o(301));a+=1,nn=Ze=null,n.updateQueue=null,Bl.current=qd,e=t(r,s)}while(Hr)}if(Bl.current=zl,n=Ze!==null&&Ze.next!==null,Mt=0,nn=Ze=We=null,Dl=!1,n)throw Error(o(300));return e}function ws(){var e=Vr!==0;return Vr=0,e}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?We.memoizedState=nn=e:nn=nn.next=e,nn}function Ln(){if(Ze===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var n=nn===null?We.memoizedState:nn.next;if(n!==null)nn=n,Ze=e;else{if(e===null)throw Error(o(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},nn===null?We.memoizedState=nn=e:nn=nn.next=e}return nn}function Wr(e,n){return typeof n=="function"?n(e):n}function js(e){var n=Ln(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var r=Ze,s=r.baseQueue,a=t.pending;if(a!==null){if(s!==null){var c=s.next;s.next=a.next,a.next=c}r.baseQueue=s=a,t.pending=null}if(s!==null){a=s.next,r=r.baseState;var m=c=null,g=null,T=a;do{var D=T.lane;if((Mt&D)===D)g!==null&&(g=g.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),r=T.hasEagerState?T.eagerState:e(r,T.action);else{var O={lane:D,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};g===null?(m=g=O,c=r):g=g.next=O,We.lanes|=D,At|=D}T=T.next}while(T!==null&&T!==a);g===null?c=r:g.next=m,$n(r,n.memoizedState)||(xn=!0),n.memoizedState=r,n.baseState=c,n.baseQueue=g,t.lastRenderedState=r}if(e=t.interleaved,e!==null){s=e;do a=s.lane,We.lanes|=a,At|=a,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ss(e){var n=Ln(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var r=t.dispatch,s=t.pending,a=n.memoizedState;if(s!==null){t.pending=null;var c=s=s.next;do a=e(a,c.action),c=c.next;while(c!==s);$n(a,n.memoizedState)||(xn=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function zo(){}function Fo(e,n){var t=We,r=Ln(),s=n(),a=!$n(r.memoizedState,s);if(a&&(r.memoizedState=s,xn=!0),r=r.queue,ks(Vo.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||nn!==null&&nn.memoizedState.tag&1){if(t.flags|=2048,Gr(9,Ho.bind(null,t,r,s,n),void 0,null),tn===null)throw Error(o(349));(Mt&30)!==0||Uo(t,n,s)}return s}function Uo(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=We.updateQueue,n===null?(n={lastEffect:null,stores:null},We.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ho(e,n,t,r){n.value=t,n.getSnapshot=r,Wo(n)&&Go(e)}function Vo(e,n,t){return t(function(){Wo(n)&&Go(e)})}function Wo(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!$n(e,t)}catch{return!0}}function Go(e){var n=tt(e,1);n!==null&&Vn(n,e,1,-1)}function qo(e){var n=Kn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},n.queue=e,e=e.dispatch=Vd.bind(null,We,e),[n.memoizedState,e]}function Gr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=We.updateQueue,n===null?(n={lastEffect:null,stores:null},We.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Qo(){return Ln().memoizedState}function Ol(e,n,t,r){var s=Kn();We.flags|=e,s.memoizedState=Gr(1|n,t,void 0,r===void 0?null:r)}function $l(e,n,t,r){var s=Ln();r=r===void 0?null:r;var a=void 0;if(Ze!==null){var c=Ze.memoizedState;if(a=c.destroy,r!==null&&vs(r,c.deps)){s.memoizedState=Gr(n,t,a,r);return}}We.flags|=e,s.memoizedState=Gr(1|n,t,a,r)}function Ko(e,n){return Ol(8390656,8,e,n)}function ks(e,n){return $l(2048,8,e,n)}function Yo(e,n){return $l(4,2,e,n)}function Xo(e,n){return $l(4,4,e,n)}function Jo(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zo(e,n,t){return t=t!=null?t.concat([e]):null,$l(4,4,Jo.bind(null,n,e),t)}function Ns(){}function eu(e,n){var t=Ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function nu(e,n){var t=Ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&vs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function tu(e,n,t){return(Mt&21)===0?(e.baseState&&(e.baseState=!1,xn=!0),e.memoizedState=t):($n(t,n)||(t=_a(),We.lanes|=t,At|=t,e.baseState=!0),n)}function Ud(e,n){var t=Me;Me=t!==0&&4>t?t:4,e(!0);var r=gs.transition;gs.transition={};try{e(!1),n()}finally{Me=t,gs.transition=r}}function ru(){return Ln().memoizedState}function Hd(e,n,t){var r=jt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},lu(e))iu(n,t);else if(t=Ao(e,n,t,r),t!==null){var s=pn();Vn(t,e,r,s),su(t,n,r)}}function Vd(e,n,t){var r=jt(e),s={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(lu(e))iu(n,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var c=n.lastRenderedState,m=a(c,t);if(s.hasEagerState=!0,s.eagerState=m,$n(m,c)){var g=n.interleaved;g===null?(s.next=s,ds(n)):(s.next=g.next,g.next=s),n.interleaved=s;return}}catch{}finally{}t=Ao(e,n,s,r),t!==null&&(s=pn(),Vn(t,e,r,s),su(t,n,r))}}function lu(e){var n=e.alternate;return e===We||n!==null&&n===We}function iu(e,n){Hr=Dl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function su(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ei(e,t)}}var zl={readContext:_n,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},Wd={readContext:_n,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:_n,useEffect:Ko,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ol(4194308,4,Jo.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ol(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ol(4,2,e,n)},useMemo:function(e,n){var t=Kn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Kn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Hd.bind(null,We,e),[r.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:qo,useDebugValue:Ns,useDeferredValue:function(e){return Kn().memoizedState=e},useTransition:function(){var e=qo(!1),n=e[0];return e=Ud.bind(null,e[1]),Kn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=We,s=Kn();if(Fe){if(t===void 0)throw Error(o(407));t=t()}else{if(t=n(),tn===null)throw Error(o(349));(Mt&30)!==0||Uo(r,n,t)}s.memoizedState=t;var a={value:t,getSnapshot:n};return s.queue=a,Ko(Vo.bind(null,r,a,e),[e]),r.flags|=2048,Gr(9,Ho.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=Kn(),n=tn.identifierPrefix;if(Fe){var t=nt,r=et;t=(r&~(1<<32-On(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Vr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Fd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Gd={readContext:_n,useCallback:eu,useContext:_n,useEffect:ks,useImperativeHandle:Zo,useInsertionEffect:Yo,useLayoutEffect:Xo,useMemo:nu,useReducer:js,useRef:Qo,useState:function(){return js(Wr)},useDebugValue:Ns,useDeferredValue:function(e){var n=Ln();return tu(n,Ze.memoizedState,e)},useTransition:function(){var e=js(Wr)[0],n=Ln().memoizedState;return[e,n]},useMutableSource:zo,useSyncExternalStore:Fo,useId:ru,unstable_isNewReconciler:!1},qd={readContext:_n,useCallback:eu,useContext:_n,useEffect:ks,useImperativeHandle:Zo,useInsertionEffect:Yo,useLayoutEffect:Xo,useMemo:nu,useReducer:Ss,useRef:Qo,useState:function(){return Ss(Wr)},useDebugValue:Ns,useDeferredValue:function(e){var n=Ln();return Ze===null?n.memoizedState=e:tu(n,Ze.memoizedState,e)},useTransition:function(){var e=Ss(Wr)[0],n=Ln().memoizedState;return[e,n]},useMutableSource:zo,useSyncExternalStore:Fo,useId:ru,unstable_isNewReconciler:!1};function Fn(e,n){if(e&&e.defaultProps){n=W({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Cs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:W({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Fl={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=pn(),s=jt(e),a=rt(r,s);a.payload=n,t!=null&&(a.callback=t),n=gt(e,a,s),n!==null&&(Vn(n,e,s,r),bl(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=pn(),s=jt(e),a=rt(r,s);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=gt(e,a,s),n!==null&&(Vn(n,e,s,r),bl(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=pn(),r=jt(e),s=rt(t,r);s.tag=2,n!=null&&(s.callback=n),n=gt(e,s,r),n!==null&&(Vn(n,e,r,t),bl(n,e,r))}};function au(e,n,t,r,s,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,c):n.prototype&&n.prototype.isPureReactComponent?!Lr(t,r)||!Lr(s,a):!0}function ou(e,n,t){var r=!1,s=mt,a=n.contextType;return typeof a=="object"&&a!==null?a=_n(a):(s=vn(n)?Pt:un.current,r=n.contextTypes,a=(r=r!=null)?Zt(e,s):mt),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Fl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),n}function uu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Fl.enqueueReplaceState(n,n.state,null)}function Es(e,n,t,r){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},fs(e);var a=n.contextType;typeof a=="object"&&a!==null?s.context=_n(a):(a=vn(n)?Pt:un.current,s.context=Zt(e,a)),s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Cs(e,n,a,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Fl.enqueueReplaceState(s,s.state,null),Ml(e,t,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,n){try{var t="",r=n;do t+=he(r),r=r.return;while(r);var s=t}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:s,digest:null}}function Is(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ts(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Qd=typeof WeakMap=="function"?WeakMap:Map;function cu(e,n,t){t=rt(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ql||(Ql=!0,Hs=r),Ts(e,n)},t}function du(e,n,t){t=rt(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;t.payload=function(){return r(s)},t.callback=function(){Ts(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Ts(e,n),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})}),t}function fu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Qd;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(t)||(s.add(t),e=uf.bind(null,e,n,t),n.then(e,e))}function hu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function mu(e,n,t,r,s){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=rt(-1,1),n.tag=2,gt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Kd=Se.ReactCurrentOwner,xn=!1;function mn(e,n,t,r){n.child=e===null?Mo(n,null,t,r):rr(n,e.child,t,r)}function pu(e,n,t,r,s){t=t.render;var a=n.ref;return ir(n,s),r=xs(e,n,t,r,a,s),t=ws(),e!==null&&!xn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,lt(e,n,s)):(Fe&&t&&ts(n),n.flags|=1,mn(e,n,r,s),n.child)}function yu(e,n,t,r,s){if(e===null){var a=t.type;return typeof a=="function"&&!Ys(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,gu(e,n,a,r,s)):(e=ei(t.type,null,r,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,(e.lanes&s)===0){var c=a.memoizedProps;if(t=t.compare,t=t!==null?t:Lr,t(c,r)&&e.ref===n.ref)return lt(e,n,s)}return n.flags|=1,e=kt(a,r),e.ref=n.ref,e.return=n,n.child=e}function gu(e,n,t,r,s){if(e!==null){var a=e.memoizedProps;if(Lr(a,r)&&e.ref===n.ref)if(xn=!1,n.pendingProps=r=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,lt(e,n,s)}return Ps(e,n,t,r,s)}function vu(e,n,t){var r=n.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(ur,En),En|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ae(ur,En),En|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,Ae(ur,En),En|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,Ae(ur,En),En|=r;return mn(e,n,s,t),n.child}function xu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ps(e,n,t,r,s){var a=vn(t)?Pt:un.current;return a=Zt(n,a),ir(n,s),t=xs(e,n,t,r,a,s),r=ws(),e!==null&&!xn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,lt(e,n,s)):(Fe&&r&&ts(n),n.flags|=1,mn(e,n,t,s),n.child)}function wu(e,n,t,r,s){if(vn(t)){var a=!0;Cl(n)}else a=!1;if(ir(n,s),n.stateNode===null)Hl(e,n),ou(n,t,r),Es(n,t,r,s),r=!0;else if(e===null){var c=n.stateNode,m=n.memoizedProps;c.props=m;var g=c.context,T=t.contextType;typeof T=="object"&&T!==null?T=_n(T):(T=vn(t)?Pt:un.current,T=Zt(n,T));var D=t.getDerivedStateFromProps,O=typeof D=="function"||typeof c.getSnapshotBeforeUpdate=="function";O||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==r||g!==T)&&uu(n,c,r,T),yt=!1;var B=n.memoizedState;c.state=B,Ml(n,r,c,s),g=n.memoizedState,m!==r||B!==g||gn.current||yt?(typeof D=="function"&&(Cs(n,t,D,r),g=n.memoizedState),(m=yt||au(n,t,m,r,B,g,T))?(O||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=g),c.props=r,c.state=g,c.context=T,r=m):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Bo(e,n),m=n.memoizedProps,T=n.type===n.elementType?m:Fn(n.type,m),c.props=T,O=n.pendingProps,B=c.context,g=t.contextType,typeof g=="object"&&g!==null?g=_n(g):(g=vn(t)?Pt:un.current,g=Zt(n,g));var q=t.getDerivedStateFromProps;(D=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==O||B!==g)&&uu(n,c,r,g),yt=!1,B=n.memoizedState,c.state=B,Ml(n,r,c,s);var X=n.memoizedState;m!==O||B!==X||gn.current||yt?(typeof q=="function"&&(Cs(n,t,q,r),X=n.memoizedState),(T=yt||au(n,t,T,r,B,X,g)||!1)?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,X,g),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,X,g)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=X),c.props=r,c.state=X,c.context=g,r=T):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),r=!1)}return Rs(e,n,t,r,a,s)}function Rs(e,n,t,r,s,a){xu(e,n);var c=(n.flags&128)!==0;if(!r&&!c)return s&&Co(n,t,!1),lt(e,n,a);r=n.stateNode,Kd.current=n;var m=c&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&c?(n.child=rr(n,e.child,null,a),n.child=rr(n,null,m,a)):mn(e,n,m,a),n.memoizedState=r.state,s&&Co(n,t,!0),n.child}function ju(e){var n=e.stateNode;n.pendingContext?ko(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ko(e,n.context,!1),hs(e,n.containerInfo)}function Su(e,n,t,r,s){return tr(),ss(s),n.flags|=256,mn(e,n,t,r),n.child}var _s={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function ku(e,n,t){var r=n.pendingProps,s=Ve.current,a=!1,c=(n.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(s&2)!==0),m?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ae(Ve,s&1),e===null)return is(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(c=r.children,e=r.fallback,a?(r=n.mode,a=n.child,c={mode:"hidden",children:c},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=ni(c,r,0,null),e=$t(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Ls(t),n.memoizedState=_s,e):bs(n,c));if(s=e.memoizedState,s!==null&&(m=s.dehydrated,m!==null))return Yd(e,n,c,r,m,s,t);if(a){a=r.fallback,c=n.mode,s=e.child,m=s.sibling;var g={mode:"hidden",children:r.children};return(c&1)===0&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=g,n.deletions=null):(r=kt(s,g),r.subtreeFlags=s.subtreeFlags&14680064),m!==null?a=kt(m,a):(a=$t(a,c,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,c=e.child.memoizedState,c=c===null?Ls(t):{baseLanes:c.baseLanes|t,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~t,n.memoizedState=_s,r}return a=e.child,e=a.sibling,r=kt(a,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function bs(e,n){return n=ni({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ul(e,n,t,r){return r!==null&&ss(r),rr(n,e.child,null,t),e=bs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Yd(e,n,t,r,s,a,c){if(t)return n.flags&256?(n.flags&=-257,r=Is(Error(o(422))),Ul(e,n,c,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,s=n.mode,r=ni({mode:"visible",children:r.children},s,0,null),a=$t(a,s,c,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,(n.mode&1)!==0&&rr(n,e.child,null,c),n.child.memoizedState=Ls(c),n.memoizedState=_s,a);if((n.mode&1)===0)return Ul(e,n,c,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var m=r.dgst;return r=m,a=Error(o(419)),r=Is(a,r,void 0),Ul(e,n,c,r)}if(m=(c&e.childLanes)!==0,xn||m){if(r=tn,r!==null){switch(c&-c){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(r.suspendedLanes|c))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,tt(e,s),Vn(r,e,s,-1))}return Ks(),r=Is(Error(o(421))),Ul(e,n,c,r)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=cf.bind(null,e),s._reactRetry=n,null):(e=a.treeContext,Cn=ft(s.nextSibling),Nn=n,Fe=!0,zn=null,e!==null&&(Pn[Rn++]=et,Pn[Rn++]=nt,Pn[Rn++]=Rt,et=e.id,nt=e.overflow,Rt=n),n=bs(n,r.children),n.flags|=4096,n)}function Nu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),cs(e.return,n,t)}function Ms(e,n,t,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:s}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=s)}function Cu(e,n,t){var r=n.pendingProps,s=r.revealOrder,a=r.tail;if(mn(e,n,r.children,t),r=Ve.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nu(e,t,n);else if(e.tag===19)Nu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ae(Ve,r),(n.mode&1)===0)n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&Al(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),Ms(n,!1,s,t,a);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&Al(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}Ms(n,!0,t,null,a);break;case"together":Ms(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hl(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function lt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),At|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,t=kt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Xd(e,n,t){switch(n.tag){case 3:ju(n),tr();break;case 5:$o(n);break;case 1:vn(n.type)&&Cl(n);break;case 4:hs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;Ae(_l,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Ve,Ve.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?ku(e,n,t):(Ae(Ve,Ve.current&1),e=lt(e,n,t),e!==null?e.sibling:null);Ae(Ve,Ve.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Cu(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ae(Ve,Ve.current),r)break;return null;case 22:case 23:return n.lanes=0,vu(e,n,t)}return lt(e,n,t)}var Eu,As,Iu,Tu;Eu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},As=function(){},Iu=function(e,n,t,r){var s=e.memoizedProps;if(s!==r){e=n.stateNode,bt(Qn.current);var a=null;switch(t){case"input":s=b(e,s),r=b(e,r),a=[];break;case"select":s=W({},s,{value:void 0}),r=W({},r,{value:void 0}),a=[];break;case"textarea":s=Dn(e,s),r=Dn(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sl)}He(t,r);var c;t=null;for(T in s)if(!r.hasOwnProperty(T)&&s.hasOwnProperty(T)&&s[T]!=null)if(T==="style"){var m=s[T];for(c in m)m.hasOwnProperty(c)&&(t||(t={}),t[c]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(h.hasOwnProperty(T)?a||(a=[]):(a=a||[]).push(T,null));for(T in r){var g=r[T];if(m=s!=null?s[T]:void 0,r.hasOwnProperty(T)&&g!==m&&(g!=null||m!=null))if(T==="style")if(m){for(c in m)!m.hasOwnProperty(c)||g&&g.hasOwnProperty(c)||(t||(t={}),t[c]="");for(c in g)g.hasOwnProperty(c)&&m[c]!==g[c]&&(t||(t={}),t[c]=g[c])}else t||(a||(a=[]),a.push(T,t)),t=g;else T==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,m=m?m.__html:void 0,g!=null&&m!==g&&(a=a||[]).push(T,g)):T==="children"?typeof g!="string"&&typeof g!="number"||(a=a||[]).push(T,""+g):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(h.hasOwnProperty(T)?(g!=null&&T==="onScroll"&&Oe("scroll",e),a||m===g||(a=[])):(a=a||[]).push(T,g))}t&&(a=a||[]).push("style",t);var T=a;(n.updateQueue=T)&&(n.flags|=4)}},Tu=function(e,n,t,r){t!==r&&(n.flags|=4)};function qr(e,n){if(!Fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Jd(e,n,t){var r=n.pendingProps;switch(rs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(n),null;case 1:return vn(n.type)&&Nl(),dn(n),null;case 3:return r=n.stateNode,sr(),$e(gn),$e(un),ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pl(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zn!==null&&(Gs(zn),zn=null))),As(e,n),dn(n),null;case 5:ms(n);var s=bt(Ur.current);if(t=n.type,e!==null&&n.stateNode!=null)Iu(e,n,t,r,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(o(166));return dn(n),null}if(e=bt(Qn.current),Pl(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[qn]=n,r[Dr]=a,e=(n.mode&1)!==0,t){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(s=0;s<Mr.length;s++)Oe(Mr[s],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":k(r,a),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Oe("invalid",r);break;case"textarea":Et(r,a),Oe("invalid",r)}He(t,a),s=null;for(var c in a)if(a.hasOwnProperty(c)){var m=a[c];c==="children"?typeof m=="string"?r.textContent!==m&&(a.suppressHydrationWarning!==!0&&jl(r.textContent,m,e),s=["children",m]):typeof m=="number"&&r.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&jl(r.textContent,m,e),s=["children",""+m]):h.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&Oe("scroll",r)}switch(t){case"input":In(r),xe(r,a,!0);break;case"textarea":In(r),M(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Sl)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{c=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=U(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(t,{is:r.is}):(e=c.createElement(t),t==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,t),e[qn]=n,e[Dr]=r,Eu(e,n,!1,!1),n.stateNode=e;e:{switch(c=Ft(t,r),t){case"dialog":Oe("cancel",e),Oe("close",e),s=r;break;case"iframe":case"object":case"embed":Oe("load",e),s=r;break;case"video":case"audio":for(s=0;s<Mr.length;s++)Oe(Mr[s],e);s=r;break;case"source":Oe("error",e),s=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),s=r;break;case"details":Oe("toggle",e),s=r;break;case"input":k(e,r),s=b(e,r),Oe("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=W({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":Et(e,r),s=Dn(e,r),Oe("invalid",e);break;default:s=r}He(t,s),m=s;for(a in m)if(m.hasOwnProperty(a)){var g=m[a];a==="style"?on(e,g):a==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&we(e,g)):a==="children"?typeof g=="string"?(t!=="textarea"||g!=="")&&se(e,g):typeof g=="number"&&se(e,""+g):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(h.hasOwnProperty(a)?g!=null&&a==="onScroll"&&Oe("scroll",e):g!=null&&Ce(e,a,g,c))}switch(t){case"input":In(e),xe(e,r,!1);break;case"textarea":In(e),M(e);break;case"option":r.value!=null&&e.setAttribute("value",""+me(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Be(e,!!r.multiple,a,!1):r.defaultValue!=null&&Be(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Sl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return dn(n),null;case 6:if(e&&n.stateNode!=null)Tu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(o(166));if(t=bt(Ur.current),bt(Qn.current),Pl(n)){if(r=n.stateNode,t=n.memoizedProps,r[qn]=n,(a=r.nodeValue!==t)&&(e=Nn,e!==null))switch(e.tag){case 3:jl(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jl(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[qn]=n,n.stateNode=r}return dn(n),null;case 13:if($e(Ve),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&Cn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)_o(),tr(),n.flags|=98560,a=!1;else if(a=Pl(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(o(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[qn]=n}else tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),a=!1}else zn!==null&&(Gs(zn),zn=null),a=!0;if(!a)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ve.current&1)!==0?en===0&&(en=3):Ks())),n.updateQueue!==null&&(n.flags|=4),dn(n),null);case 4:return sr(),As(e,n),e===null&&Ar(n.stateNode.containerInfo),dn(n),null;case 10:return us(n.type._context),dn(n),null;case 17:return vn(n.type)&&Nl(),dn(n),null;case 19:if($e(Ve),a=n.memoizedState,a===null)return dn(n),null;if(r=(n.flags&128)!==0,c=a.rendering,c===null)if(r)qr(a,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Al(e),c!==null){for(n.flags|=128,qr(a,!1),r=c.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ae(Ve,Ve.current&1|2),n.child}e=e.sibling}a.tail!==null&&Ke()>cr&&(n.flags|=128,r=!0,qr(a,!1),n.lanes=4194304)}else{if(!r)if(e=Al(c),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),qr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Fe)return dn(n),null}else 2*Ke()-a.renderingStartTime>cr&&t!==1073741824&&(n.flags|=128,r=!0,qr(a,!1),n.lanes=4194304);a.isBackwards?(c.sibling=n.child,n.child=c):(t=a.last,t!==null?t.sibling=c:n.child=c,a.last=c)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Ke(),n.sibling=null,t=Ve.current,Ae(Ve,r?t&1|2:t&1),n):(dn(n),null);case 22:case 23:return Qs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(En&1073741824)!==0&&(dn(n),n.subtreeFlags&6&&(n.flags|=8192)):dn(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function Zd(e,n){switch(rs(n),n.tag){case 1:return vn(n.type)&&Nl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return sr(),$e(gn),$e(un),ys(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ms(n),null;case 13:if($e(Ve),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $e(Ve),null;case 4:return sr(),null;case 10:return us(n.type._context),null;case 22:case 23:return Qs(),null;case 24:return null;default:return null}}var Vl=!1,fn=!1,ef=typeof WeakSet=="function"?WeakSet:Set,Y=null;function or(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ge(e,n,r)}else t.current=null}function Bs(e,n,t){try{t()}catch(r){Ge(e,n,r)}}var Pu=!1;function nf(e,n){if(Qi=cl,e=so(),zi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var c=0,m=-1,g=-1,T=0,D=0,O=e,B=null;n:for(;;){for(var q;O!==t||s!==0&&O.nodeType!==3||(m=c+s),O!==a||r!==0&&O.nodeType!==3||(g=c+r),O.nodeType===3&&(c+=O.nodeValue.length),(q=O.firstChild)!==null;)B=O,O=q;for(;;){if(O===e)break n;if(B===t&&++T===s&&(m=c),B===a&&++D===r&&(g=c),(q=O.nextSibling)!==null)break;O=B,B=O.parentNode}O=q}t=m===-1||g===-1?null:{start:m,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ki={focusedElem:e,selectionRange:t},cl=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var X=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var J=X.memoizedProps,Ye=X.memoizedState,S=n.stateNode,v=S.getSnapshotBeforeUpdate(n.elementType===n.type?J:Fn(n.type,J),Ye);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=n.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(z){Ge(n,n.return,z)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return X=Pu,Pu=!1,X}function Qr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Bs(n,t,a)}s=s.next}while(s!==r)}}function Wl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ds(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ru(e){var n=e.alternate;n!==null&&(e.alternate=null,Ru(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qn],delete n[Dr],delete n[Zi],delete n[Dd],delete n[Od])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _u(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Sl));else if(r!==4&&(e=e.child,e!==null))for(Os(e,n,t),e=e.sibling;e!==null;)Os(e,n,t),e=e.sibling}function $s(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($s(e,n,t),e=e.sibling;e!==null;)$s(e,n,t),e=e.sibling}var sn=null,Un=!1;function vt(e,n,t){for(t=t.child;t!==null;)bu(e,n,t),t=t.sibling}function bu(e,n,t){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(ll,t)}catch{}switch(t.tag){case 5:fn||or(t,n);case 6:var r=sn,s=Un;sn=null,vt(e,n,t),sn=r,Un=s,sn!==null&&(Un?(e=sn,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):sn.removeChild(t.stateNode));break;case 18:sn!==null&&(Un?(e=sn,t=t.stateNode,e.nodeType===8?Ji(e.parentNode,t):e.nodeType===1&&Ji(e,t),Er(e)):Ji(sn,t.stateNode));break;case 4:r=sn,s=Un,sn=t.stateNode.containerInfo,Un=!0,vt(e,n,t),sn=r,Un=s;break;case 0:case 11:case 14:case 15:if(!fn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&Bs(t,n,c),s=s.next}while(s!==r)}vt(e,n,t);break;case 1:if(!fn&&(or(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(m){Ge(t,n,m)}vt(e,n,t);break;case 21:vt(e,n,t);break;case 22:t.mode&1?(fn=(r=fn)||t.memoizedState!==null,vt(e,n,t),fn=r):vt(e,n,t);break;default:vt(e,n,t)}}function Mu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ef),n.forEach(function(r){var s=df.bind(null,e,r);t.has(r)||(t.add(r),r.then(s,s))})}}function Hn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];try{var a=e,c=n,m=c;e:for(;m!==null;){switch(m.tag){case 5:sn=m.stateNode,Un=!1;break e;case 3:sn=m.stateNode.containerInfo,Un=!0;break e;case 4:sn=m.stateNode.containerInfo,Un=!0;break e}m=m.return}if(sn===null)throw Error(o(160));bu(a,c,s),sn=null,Un=!1;var g=s.alternate;g!==null&&(g.return=null),s.return=null}catch(T){Ge(s,n,T)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Au(n,e),n=n.sibling}function Au(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Hn(n,e),Yn(e),r&4){try{Qr(3,e,e.return),Wl(3,e)}catch(J){Ge(e,e.return,J)}try{Qr(5,e,e.return)}catch(J){Ge(e,e.return,J)}}break;case 1:Hn(n,e),Yn(e),r&512&&t!==null&&or(t,t.return);break;case 5:if(Hn(n,e),Yn(e),r&512&&t!==null&&or(t,t.return),e.flags&32){var s=e.stateNode;try{se(s,"")}catch(J){Ge(e,e.return,J)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,c=t!==null?t.memoizedProps:a,m=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&H(s,a),Ft(m,c);var T=Ft(m,a);for(c=0;c<g.length;c+=2){var D=g[c],O=g[c+1];D==="style"?on(s,O):D==="dangerouslySetInnerHTML"?we(s,O):D==="children"?se(s,O):Ce(s,D,O,T)}switch(m){case"input":ye(s,a);break;case"textarea":Wn(s,a);break;case"select":var B=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var q=a.value;q!=null?Be(s,!!a.multiple,q,!1):B!==!!a.multiple&&(a.defaultValue!=null?Be(s,!!a.multiple,a.defaultValue,!0):Be(s,!!a.multiple,a.multiple?[]:"",!1))}s[Dr]=a}catch(J){Ge(e,e.return,J)}}break;case 6:if(Hn(n,e),Yn(e),r&4){if(e.stateNode===null)throw Error(o(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(J){Ge(e,e.return,J)}}break;case 3:if(Hn(n,e),Yn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(J){Ge(e,e.return,J)}break;case 4:Hn(n,e),Yn(e);break;case 13:Hn(n,e),Yn(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Us=Ke())),r&4&&Mu(e);break;case 22:if(D=t!==null&&t.memoizedState!==null,e.mode&1?(fn=(T=fn)||D,Hn(n,e),fn=T):Hn(n,e),Yn(e),r&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!D&&(e.mode&1)!==0)for(Y=e,D=e.child;D!==null;){for(O=Y=D;Y!==null;){switch(B=Y,q=B.child,B.tag){case 0:case 11:case 14:case 15:Qr(4,B,B.return);break;case 1:or(B,B.return);var X=B.stateNode;if(typeof X.componentWillUnmount=="function"){r=B,t=B.return;try{n=r,X.props=n.memoizedProps,X.state=n.memoizedState,X.componentWillUnmount()}catch(J){Ge(r,t,J)}}break;case 5:or(B,B.return);break;case 22:if(B.memoizedState!==null){Ou(O);continue}}q!==null?(q.return=B,Y=q):Ou(O)}D=D.sibling}e:for(D=null,O=e;;){if(O.tag===5){if(D===null){D=O;try{s=O.stateNode,T?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=O.stateNode,g=O.memoizedProps.style,c=g!=null&&g.hasOwnProperty("display")?g.display:null,m.style.display=yn("display",c))}catch(J){Ge(e,e.return,J)}}}else if(O.tag===6){if(D===null)try{O.stateNode.nodeValue=T?"":O.memoizedProps}catch(J){Ge(e,e.return,J)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;D===O&&(D=null),O=O.return}D===O&&(D=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Hn(n,e),Yn(e),r&4&&Mu(e);break;case 21:break;default:Hn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(_u(t)){var r=t;break e}t=t.return}throw Error(o(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(se(s,""),r.flags&=-33);var a=Lu(e);$s(e,a,s);break;case 3:case 4:var c=r.stateNode.containerInfo,m=Lu(e);Os(e,m,c);break;default:throw Error(o(161))}}catch(g){Ge(e,e.return,g)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function tf(e,n,t){Y=e,Bu(e)}function Bu(e,n,t){for(var r=(e.mode&1)!==0;Y!==null;){var s=Y,a=s.child;if(s.tag===22&&r){var c=s.memoizedState!==null||Vl;if(!c){var m=s.alternate,g=m!==null&&m.memoizedState!==null||fn;m=Vl;var T=fn;if(Vl=c,(fn=g)&&!T)for(Y=s;Y!==null;)c=Y,g=c.child,c.tag===22&&c.memoizedState!==null?$u(s):g!==null?(g.return=c,Y=g):$u(s);for(;a!==null;)Y=a,Bu(a),a=a.sibling;Y=s,Vl=m,fn=T}Du(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,Y=a):Du(e)}}function Du(e){for(;Y!==null;){var n=Y;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:fn||Wl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fn)if(t===null)r.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:Fn(n.type,t.memoizedProps);r.componentDidUpdate(s,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Oo(n,a,r);break;case 3:var c=n.updateQueue;if(c!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Oo(n,c,t)}break;case 5:var m=n.stateNode;if(t===null&&n.flags&4){t=m;var g=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&t.focus();break;case"img":g.src&&(t.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var T=n.alternate;if(T!==null){var D=T.memoizedState;if(D!==null){var O=D.dehydrated;O!==null&&Er(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}fn||n.flags&512&&Ds(n)}catch(B){Ge(n,n.return,B)}}if(n===e){Y=null;break}if(t=n.sibling,t!==null){t.return=n.return,Y=t;break}Y=n.return}}function Ou(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Y=t;break}Y=n.return}}function $u(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Wl(4,n)}catch(g){Ge(n,t,g)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(g){Ge(n,s,g)}}var a=n.return;try{Ds(n)}catch(g){Ge(n,a,g)}break;case 5:var c=n.return;try{Ds(n)}catch(g){Ge(n,c,g)}}}catch(g){Ge(n,n.return,g)}if(n===e){Y=null;break}var m=n.sibling;if(m!==null){m.return=n.return,Y=m;break}Y=n.return}}var rf=Math.ceil,Gl=Se.ReactCurrentDispatcher,zs=Se.ReactCurrentOwner,bn=Se.ReactCurrentBatchConfig,Re=0,tn=null,Xe=null,an=0,En=0,ur=ht(0),en=0,Kr=null,At=0,ql=0,Fs=0,Yr=null,wn=null,Us=0,cr=1/0,it=null,Ql=!1,Hs=null,xt=null,Kl=!1,wt=null,Yl=0,Xr=0,Vs=null,Xl=-1,Jl=0;function pn(){return(Re&6)!==0?Ke():Xl!==-1?Xl:Xl=Ke()}function jt(e){return(e.mode&1)===0?1:(Re&2)!==0&&an!==0?an&-an:zd.transition!==null?(Jl===0&&(Jl=_a()),Jl):(e=Me,e!==0||(e=window.event,e=e===void 0?16:za(e.type)),e)}function Vn(e,n,t,r){if(50<Xr)throw Xr=0,Vs=null,Error(o(185));jr(e,t,r),((Re&2)===0||e!==tn)&&(e===tn&&((Re&2)===0&&(ql|=t),en===4&&St(e,an)),jn(e,r),t===1&&Re===0&&(n.mode&1)===0&&(cr=Ke()+500,El&&pt()))}function jn(e,n){var t=e.callbackNode;zc(e,n);var r=al(e,e===tn?an:0);if(r===0)t!==null&&Ta(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ta(t),n===1)e.tag===0?$d(Fu.bind(null,e)):Eo(Fu.bind(null,e)),Ad(function(){(Re&6)===0&&pt()}),t=null;else{switch(La(r)){case 1:t=ki;break;case 4:t=Pa;break;case 16:t=rl;break;case 536870912:t=Ra;break;default:t=rl}t=Ku(t,zu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function zu(e,n){if(Xl=-1,Jl=0,(Re&6)!==0)throw Error(o(327));var t=e.callbackNode;if(dr()&&e.callbackNode!==t)return null;var r=al(e,e===tn?an:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Zl(e,r);else{n=r;var s=Re;Re|=2;var a=Hu();(tn!==e||an!==n)&&(it=null,cr=Ke()+500,Dt(e,n));do try{af();break}catch(m){Uu(e,m)}while(!0);os(),Gl.current=a,Re=s,Xe!==null?n=0:(tn=null,an=0,n=en)}if(n!==0){if(n===2&&(s=Ni(e),s!==0&&(r=s,n=Ws(e,s))),n===1)throw t=Kr,Dt(e,0),St(e,r),jn(e,Ke()),t;if(n===6)St(e,r);else{if(s=e.current.alternate,(r&30)===0&&!lf(s)&&(n=Zl(e,r),n===2&&(a=Ni(e),a!==0&&(r=a,n=Ws(e,a))),n===1))throw t=Kr,Dt(e,0),St(e,r),jn(e,Ke()),t;switch(e.finishedWork=s,e.finishedLanes=r,n){case 0:case 1:throw Error(o(345));case 2:Ot(e,wn,it);break;case 3:if(St(e,r),(r&130023424)===r&&(n=Us+500-Ke(),10<n)){if(al(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){pn(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Xi(Ot.bind(null,e,wn,it),n);break}Ot(e,wn,it);break;case 4:if(St(e,r),(r&4194240)===r)break;for(n=e.eventTimes,s=-1;0<r;){var c=31-On(r);a=1<<c,c=n[c],c>s&&(s=c),r&=~a}if(r=s,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rf(r/1960))-r,10<r){e.timeoutHandle=Xi(Ot.bind(null,e,wn,it),r);break}Ot(e,wn,it);break;case 5:Ot(e,wn,it);break;default:throw Error(o(329))}}}return jn(e,Ke()),e.callbackNode===t?zu.bind(null,e):null}function Ws(e,n){var t=Yr;return e.current.memoizedState.isDehydrated&&(Dt(e,n).flags|=256),e=Zl(e,n),e!==2&&(n=wn,wn=t,n!==null&&Gs(n)),e}function Gs(e){wn===null?wn=e:wn.push.apply(wn,e)}function lf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var s=t[r],a=s.getSnapshot;s=s.value;try{if(!$n(a(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function St(e,n){for(n&=~Fs,n&=~ql,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-On(n),r=1<<t;e[t]=-1,n&=~r}}function Fu(e){if((Re&6)!==0)throw Error(o(327));dr();var n=al(e,0);if((n&1)===0)return jn(e,Ke()),null;var t=Zl(e,n);if(e.tag!==0&&t===2){var r=Ni(e);r!==0&&(n=r,t=Ws(e,r))}if(t===1)throw t=Kr,Dt(e,0),St(e,n),jn(e,Ke()),t;if(t===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ot(e,wn,it),jn(e,Ke()),null}function qs(e,n){var t=Re;Re|=1;try{return e(n)}finally{Re=t,Re===0&&(cr=Ke()+500,El&&pt())}}function Bt(e){wt!==null&&wt.tag===0&&(Re&6)===0&&dr();var n=Re;Re|=1;var t=bn.transition,r=Me;try{if(bn.transition=null,Me=1,e)return e()}finally{Me=r,bn.transition=t,Re=n,(Re&6)===0&&pt()}}function Qs(){En=ur.current,$e(ur)}function Dt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Md(t)),Xe!==null)for(t=Xe.return;t!==null;){var r=t;switch(rs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nl();break;case 3:sr(),$e(gn),$e(un),ys();break;case 5:ms(r);break;case 4:sr();break;case 13:$e(Ve);break;case 19:$e(Ve);break;case 10:us(r.type._context);break;case 22:case 23:Qs()}t=t.return}if(tn=e,Xe=e=kt(e.current,null),an=En=n,en=0,Kr=null,Fs=ql=At=0,wn=Yr=null,Lt!==null){for(n=0;n<Lt.length;n++)if(t=Lt[n],r=t.interleaved,r!==null){t.interleaved=null;var s=r.next,a=t.pending;if(a!==null){var c=a.next;a.next=s,r.next=c}t.pending=r}Lt=null}return e}function Uu(e,n){do{var t=Xe;try{if(os(),Bl.current=zl,Dl){for(var r=We.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Dl=!1}if(Mt=0,nn=Ze=We=null,Hr=!1,Vr=0,zs.current=null,t===null||t.return===null){en=1,Kr=n,Xe=null;break}e:{var a=e,c=t.return,m=t,g=n;if(n=an,m.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var T=g,D=m,O=D.tag;if((D.mode&1)===0&&(O===0||O===11||O===15)){var B=D.alternate;B?(D.updateQueue=B.updateQueue,D.memoizedState=B.memoizedState,D.lanes=B.lanes):(D.updateQueue=null,D.memoizedState=null)}var q=hu(c);if(q!==null){q.flags&=-257,mu(q,c,m,a,n),q.mode&1&&fu(a,T,n),n=q,g=T;var X=n.updateQueue;if(X===null){var J=new Set;J.add(g),n.updateQueue=J}else X.add(g);break e}else{if((n&1)===0){fu(a,T,n),Ks();break e}g=Error(o(426))}}else if(Fe&&m.mode&1){var Ye=hu(c);if(Ye!==null){(Ye.flags&65536)===0&&(Ye.flags|=256),mu(Ye,c,m,a,n),ss(ar(g,m));break e}}a=g=ar(g,m),en!==4&&(en=2),Yr===null?Yr=[a]:Yr.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var S=cu(a,g,n);Do(a,S);break e;case 1:m=g;var v=a.type,C=a.stateNode;if((a.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(xt===null||!xt.has(C)))){a.flags|=65536,n&=-n,a.lanes|=n;var z=du(a,m,n);Do(a,z);break e}}a=a.return}while(a!==null)}Wu(t)}catch(ee){n=ee,Xe===t&&t!==null&&(Xe=t=t.return);continue}break}while(!0)}function Hu(){var e=Gl.current;return Gl.current=zl,e===null?zl:e}function Ks(){(en===0||en===3||en===2)&&(en=4),tn===null||(At&268435455)===0&&(ql&268435455)===0||St(tn,an)}function Zl(e,n){var t=Re;Re|=2;var r=Hu();(tn!==e||an!==n)&&(it=null,Dt(e,n));do try{sf();break}catch(s){Uu(e,s)}while(!0);if(os(),Re=t,Gl.current=r,Xe!==null)throw Error(o(261));return tn=null,an=0,en}function sf(){for(;Xe!==null;)Vu(Xe)}function af(){for(;Xe!==null&&!_c();)Vu(Xe)}function Vu(e){var n=Qu(e.alternate,e,En);e.memoizedProps=e.pendingProps,n===null?Wu(e):Xe=n,zs.current=null}function Wu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Jd(t,n,En),t!==null){Xe=t;return}}else{if(t=Zd(t,n),t!==null){t.flags&=32767,Xe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{en=6,Xe=null;return}}if(n=n.sibling,n!==null){Xe=n;return}Xe=n=e}while(n!==null);en===0&&(en=5)}function Ot(e,n,t){var r=Me,s=bn.transition;try{bn.transition=null,Me=1,of(e,n,t,r)}finally{bn.transition=s,Me=r}return null}function of(e,n,t,r){do dr();while(wt!==null);if((Re&6)!==0)throw Error(o(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Fc(e,a),e===tn&&(Xe=tn=null,an=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Kl||(Kl=!0,Ku(rl,function(){return dr(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=bn.transition,bn.transition=null;var c=Me;Me=1;var m=Re;Re|=4,zs.current=null,nf(e,t),Au(t,e),Id(Ki),cl=!!Qi,Ki=Qi=null,e.current=t,tf(t),Lc(),Re=m,Me=c,bn.transition=a}else e.current=t;if(Kl&&(Kl=!1,wt=e,Yl=s),a=e.pendingLanes,a===0&&(xt=null),Ac(t.stateNode),jn(e,Ke()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ql)throw Ql=!1,e=Hs,Hs=null,e;return(Yl&1)!==0&&e.tag!==0&&dr(),a=e.pendingLanes,(a&1)!==0?e===Vs?Xr++:(Xr=0,Vs=e):Xr=0,pt(),null}function dr(){if(wt!==null){var e=La(Yl),n=bn.transition,t=Me;try{if(bn.transition=null,Me=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,Yl=0,(Re&6)!==0)throw Error(o(331));var s=Re;for(Re|=4,Y=e.current;Y!==null;){var a=Y,c=a.child;if((Y.flags&16)!==0){var m=a.deletions;if(m!==null){for(var g=0;g<m.length;g++){var T=m[g];for(Y=T;Y!==null;){var D=Y;switch(D.tag){case 0:case 11:case 15:Qr(8,D,a)}var O=D.child;if(O!==null)O.return=D,Y=O;else for(;Y!==null;){D=Y;var B=D.sibling,q=D.return;if(Ru(D),D===T){Y=null;break}if(B!==null){B.return=q,Y=B;break}Y=q}}}var X=a.alternate;if(X!==null){var J=X.child;if(J!==null){X.child=null;do{var Ye=J.sibling;J.sibling=null,J=Ye}while(J!==null)}}Y=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,Y=c;else e:for(;Y!==null;){if(a=Y,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Qr(9,a,a.return)}var S=a.sibling;if(S!==null){S.return=a.return,Y=S;break e}Y=a.return}}var v=e.current;for(Y=v;Y!==null;){c=Y;var C=c.child;if((c.subtreeFlags&2064)!==0&&C!==null)C.return=c,Y=C;else e:for(c=v;Y!==null;){if(m=Y,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:Wl(9,m)}}catch(ee){Ge(m,m.return,ee)}if(m===c){Y=null;break e}var z=m.sibling;if(z!==null){z.return=m.return,Y=z;break e}Y=m.return}}if(Re=s,pt(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{Me=t,bn.transition=n}}return!1}function Gu(e,n,t){n=ar(t,n),n=cu(e,n,1),e=gt(e,n,1),n=pn(),e!==null&&(jr(e,1,n),jn(e,n))}function Ge(e,n,t){if(e.tag===3)Gu(e,e,t);else for(;n!==null;){if(n.tag===3){Gu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=ar(t,e),e=du(n,e,1),n=gt(n,e,1),e=pn(),n!==null&&(jr(n,1,e),jn(n,e));break}}n=n.return}}function uf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=pn(),e.pingedLanes|=e.suspendedLanes&t,tn===e&&(an&t)===t&&(en===4||en===3&&(an&130023424)===an&&500>Ke()-Us?Dt(e,0):Fs|=t),jn(e,n)}function qu(e,n){n===0&&((e.mode&1)===0?n=1:(n=sl,sl<<=1,(sl&130023424)===0&&(sl=4194304)));var t=pn();e=tt(e,n),e!==null&&(jr(e,n,t),jn(e,t))}function cf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),qu(e,t)}function df(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(n),qu(e,t)}var Qu;Qu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||gn.current)xn=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return xn=!1,Xd(e,n,t);xn=(e.flags&131072)!==0}else xn=!1,Fe&&(n.flags&1048576)!==0&&Io(n,Tl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Hl(e,n),e=n.pendingProps;var s=Zt(n,un.current);ir(n,t),s=xs(null,n,r,e,s,t);var a=ws();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,vn(r)?(a=!0,Cl(n)):a=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fs(n),s.updater=Fl,n.stateNode=s,s._reactInternals=n,Es(n,r,e,t),n=Rs(null,n,r,!0,a,t)):(n.tag=0,Fe&&a&&ts(n),mn(null,n,s,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Hl(e,n),e=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=hf(r),e=Fn(r,e),s){case 0:n=Ps(null,n,r,e,t);break e;case 1:n=wu(null,n,r,e,t);break e;case 11:n=pu(null,n,r,e,t);break e;case 14:n=yu(null,n,r,Fn(r.type,e),t);break e}throw Error(o(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fn(r,s),Ps(e,n,r,s,t);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fn(r,s),wu(e,n,r,s,t);case 3:e:{if(ju(n),e===null)throw Error(o(387));r=n.pendingProps,a=n.memoizedState,s=a.element,Bo(e,n),Ml(n,r,null,t);var c=n.memoizedState;if(r=c.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){s=ar(Error(o(423)),n),n=Su(e,n,r,t,s);break e}else if(r!==s){s=ar(Error(o(424)),n),n=Su(e,n,r,t,s);break e}else for(Cn=ft(n.stateNode.containerInfo.firstChild),Nn=n,Fe=!0,zn=null,t=Mo(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(tr(),r===s){n=lt(e,n,t);break e}mn(e,n,r,t)}n=n.child}return n;case 5:return $o(n),e===null&&is(n),r=n.type,s=n.pendingProps,a=e!==null?e.memoizedProps:null,c=s.children,Yi(r,s)?c=null:a!==null&&Yi(r,a)&&(n.flags|=32),xu(e,n),mn(e,n,c,t),n.child;case 6:return e===null&&is(n),null;case 13:return ku(e,n,t);case 4:return hs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=rr(n,null,r,t):mn(e,n,r,t),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fn(r,s),pu(e,n,r,s,t);case 7:return mn(e,n,n.pendingProps,t),n.child;case 8:return mn(e,n,n.pendingProps.children,t),n.child;case 12:return mn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,a=n.memoizedProps,c=s.value,Ae(_l,r._currentValue),r._currentValue=c,a!==null)if($n(a.value,c)){if(a.children===s.children&&!gn.current){n=lt(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var m=a.dependencies;if(m!==null){c=a.child;for(var g=m.firstContext;g!==null;){if(g.context===r){if(a.tag===1){g=rt(-1,t&-t),g.tag=2;var T=a.updateQueue;if(T!==null){T=T.shared;var D=T.pending;D===null?g.next=g:(g.next=D.next,D.next=g),T.pending=g}}a.lanes|=t,g=a.alternate,g!==null&&(g.lanes|=t),cs(a.return,t,n),m.lanes|=t;break}g=g.next}}else if(a.tag===10)c=a.type===n.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(o(341));c.lanes|=t,m=c.alternate,m!==null&&(m.lanes|=t),cs(c,t,n),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===n){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}mn(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,ir(n,t),s=_n(s),r=r(s),n.flags|=1,mn(e,n,r,t),n.child;case 14:return r=n.type,s=Fn(r,n.pendingProps),s=Fn(r.type,s),yu(e,n,r,s,t);case 15:return gu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:Fn(r,s),Hl(e,n),n.tag=1,vn(r)?(e=!0,Cl(n)):e=!1,ir(n,t),ou(n,r,s),Es(n,r,s,t),Rs(null,n,r,!0,e,t);case 19:return Cu(e,n,t);case 22:return vu(e,n,t)}throw Error(o(156,n.tag))};function Ku(e,n){return Ia(e,n)}function ff(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(e,n,t,r){return new ff(e,n,t,r)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hf(e){if(typeof e=="function")return Ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===qe)return 14}return 2}function kt(e,n){var t=e.alternate;return t===null?(t=Mn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ei(e,n,t,r,s,a){var c=2;if(r=e,typeof e=="function")Ys(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case P:return $t(t.children,s,a,n);case F:c=8,s|=8;break;case ge:return e=Mn(12,t,n,s|2),e.elementType=ge,e.lanes=a,e;case Pe:return e=Mn(13,t,n,s),e.elementType=Pe,e.lanes=a,e;case Ie:return e=Mn(19,t,n,s),e.elementType=Ie,e.lanes=a,e;case pe:return ni(t,s,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:c=10;break e;case Ne:c=9;break e;case fe:c=11;break e;case qe:c=14;break e;case ae:c=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=Mn(c,t,n,s),n.elementType=e,n.type=r,n.lanes=a,n}function $t(e,n,t,r){return e=Mn(7,e,r,n),e.lanes=t,e}function ni(e,n,t,r){return e=Mn(22,e,r,n),e.elementType=pe,e.lanes=t,e.stateNode={isHidden:!1},e}function Xs(e,n,t){return e=Mn(6,e,null,n),e.lanes=t,e}function Js(e,n,t){return n=Mn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function mf(e,n,t,r,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Zs(e,n,t,r,s,a,c,m,g){return e=new mf(e,n,t,m,g),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Mn(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fs(a),e}function pf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Yu(e){if(!e)return mt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(vn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var t=e.type;if(vn(t))return No(e,t,n)}return n}function Xu(e,n,t,r,s,a,c,m,g){return e=Zs(t,r,!0,e,s,a,c,m,g),e.context=Yu(null),t=e.current,r=pn(),s=jt(t),a=rt(r,s),a.callback=n??null,gt(t,a,s),e.current.lanes=s,jr(e,s,r),jn(e,r),e}function ti(e,n,t,r){var s=n.current,a=pn(),c=jt(s);return t=Yu(t),n.context===null?n.context=t:n.pendingContext=t,n=rt(a,c),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=gt(s,n,c),e!==null&&(Vn(e,s,c,a),bl(e,s,c)),c}function ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ju(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ea(e,n){Ju(e,n),(e=e.alternate)&&Ju(e,n)}function yf(){return null}var Zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function na(e){this._internalRoot=e}li.prototype.render=na.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));ti(e,n,null,null)},li.prototype.unmount=na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bt(function(){ti(null,e,null,null)}),n[Jn]=null}};function li(e){this._internalRoot=e}li.prototype.unstable_scheduleHydration=function(e){if(e){var n=Aa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ut.length&&n!==0&&n<ut[t].priority;t++);ut.splice(t,0,e),t===0&&Oa(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function gf(e,n,t,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var T=ri(c);a.call(T)}}var c=Xu(n,r,e,0,null,!1,!1,"",ec);return e._reactRootContainer=c,e[Jn]=c.current,Ar(e.nodeType===8?e.parentNode:e),Bt(),c}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var m=r;r=function(){var T=ri(g);m.call(T)}}var g=Zs(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=g,e[Jn]=g.current,Ar(e.nodeType===8?e.parentNode:e),Bt(function(){ti(n,g,t,r)}),g}function si(e,n,t,r,s){var a=t._reactRootContainer;if(a){var c=a;if(typeof s=="function"){var m=s;s=function(){var g=ri(c);m.call(g)}}ti(n,c,e,s)}else c=gf(t,n,e,s,r);return ri(c)}ba=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=wr(n.pendingLanes);t!==0&&(Ei(n,t|1),jn(n,Ke()),(Re&6)===0&&(cr=Ke()+500,pt()))}break;case 13:Bt(function(){var r=tt(e,1);if(r!==null){var s=pn();Vn(r,e,1,s)}}),ea(e,1)}},Ii=function(e){if(e.tag===13){var n=tt(e,134217728);if(n!==null){var t=pn();Vn(n,e,134217728,t)}ea(e,134217728)}},Ma=function(e){if(e.tag===13){var n=jt(e),t=tt(e,n);if(t!==null){var r=pn();Vn(t,e,n,r)}ea(e,n)}},Aa=function(){return Me},Ba=function(e,n){var t=Me;try{return Me=e,n()}finally{Me=t}},xi=function(e,n,t){switch(n){case"input":if(ye(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var s=kl(r);if(!s)throw Error(o(90));Ue(r),ye(r,s)}}}break;case"textarea":Wn(e,t);break;case"select":n=t.value,n!=null&&Be(e,!!t.multiple,n,!1)}},wa=qs,ja=Bt;var vf={usingClientEntryPoint:!1,Events:[Or,Xt,kl,va,xa,qs]},Jr={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xf={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ca(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||yf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{ll=ai.inject(xf),Gn=ai}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf,Sn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(n))throw Error(o(200));return pf(e,n,null,t)},Sn.createRoot=function(e,n){if(!ta(e))throw Error(o(299));var t=!1,r="",s=Zu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Zs(e,1,!1,null,null,t,!1,r,s),e[Jn]=n.current,Ar(e.nodeType===8?e.parentNode:e),new na(n)},Sn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Ca(n),e=e===null?null:e.stateNode,e},Sn.flushSync=function(e){return Bt(e)},Sn.hydrate=function(e,n,t){if(!ii(n))throw Error(o(200));return si(null,e,n,!0,t)},Sn.hydrateRoot=function(e,n,t){if(!ta(e))throw Error(o(405));var r=t!=null&&t.hydratedSources||null,s=!1,a="",c=Zu;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),n=Xu(n,null,e,1,t??null,s,!1,a,c),e[Jn]=n.current,Ar(e),r)for(e=0;e<r.length;e++)t=r[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new li(n)},Sn.render=function(e,n,t){if(!ii(n))throw Error(o(200));return si(null,e,n,!1,t)},Sn.unmountComponentAtNode=function(e){if(!ii(e))throw Error(o(40));return e._reactRootContainer?(Bt(function(){si(null,null,e,!1,function(){e._reactRootContainer=null,e[Jn]=null})}),!0):!1},Sn.unstable_batchedUpdates=qs,Sn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ii(t))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return si(e,n,t,!1,r)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var oc;function Pf(){if(oc)return sa.exports;oc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),sa.exports=Tf(),sa.exports}var uc;function Rf(){if(uc)return oi;uc=1;var i=Pf();return oi.createRoot=i.createRoot,oi.hydrateRoot=i.hydrateRoot,oi}var _f=Rf();const Xn=["constitution","health","wisdom","inspiration","sanity","agility"],pr={constitution:"体质",health:"健康",wisdom:"智慧",inspiration:"灵感",sanity:"理智",agility:"敏捷"},Lf={constitution:"决定负重上限与近战伤害加成。",health:"即生命值。低于上限三分之一时，所有检定受到 -20 惩罚。",wisdom:"用于破解密码、翻译古文与进行学术研究。",inspiration:"用于获得直觉提示、联想与灵感爆发。",sanity:"理智。低于上限三分之一时受到心理惩罚，归零则精神崩溃。",agility:"决定战斗先攻与闪避。每大轮最多移动 10 格，每小轮最多移动 2 格。"},bf={floor:"#5c5144",wall:"#211d19",door:"#7d5a35",grass:"#3f4a35",tree:"#242b20",water:"#2f4146",road:"#4e463a",stone:"#6d6a62",ritual:"#5b4148",stairs:"#6b5c49",void:"#0d0b09"},ua=4e3,ca=80,cc=8,ui=10,fr=2,ha=/^[A-Za-z0-9_]{1,24}$/,Mf={investigate:"侦查",listen:"聆听",library:"图书馆使用",occult:"神秘学",persuade:"说服",psychology:"心理学",stealth:"潜行",dodge:"闪避",fight:"格斗",firearms:"射击",medicine:"医学",mechanics:"机械维修",firstAid:"急救",drive:"驾驶",search:"搜索"};function ma(i){return Mf[i]??i}function Bn(i){return l.jsxs("section",{className:`panel ${i.className??""}`,children:[i.title!==void 0&&l.jsxs("header",{className:"panelHeader",children:[l.jsx("h2",{children:i.title}),i.aside]}),l.jsx("div",{className:"panelBody",children:i.children})]})}function yr(i){const u=Math.max(0,Math.min(100,Math.round(i.value/Math.max(1,i.maximum)*100)));return l.jsxs("div",{className:`statBar statBar-${i.tone}`,children:[l.jsxs("div",{className:"statBarLabel",children:[l.jsx("span",{children:i.label}),l.jsxs("span",{children:[i.value," / ",i.maximum]})]}),l.jsx("div",{className:"statBarTrack",children:l.jsx("div",{className:"statBarFill",style:{width:`${u}%`}})})]})}function pa(i){return l.jsx("div",{className:"modalBackdrop",role:"presentation",children:l.jsxs("div",{className:`modalCard ${i.wide===!0?"modalWide":""} ${i.className??""}`,role:"dialog","aria-modal":"true","aria-label":i.title??"对话框",children:[(i.title!==void 0||i.onClose!==void 0)&&l.jsxs("header",{className:"modalHeader",children:[l.jsx("h2",{children:i.title??""}),i.onClose!==void 0&&l.jsx("button",{type:"button",className:"ghostButton closeButton",onClick:i.onClose,"aria-label":"关闭",children:"×"})]}),l.jsx("div",{className:"modalBody",children:i.children})]})})}function zt(i){return l.jsx("p",{className:"emptyState",children:i.text})}function Je(i){return l.jsx("span",{className:`tag tag-${i.tone??"default"}`,children:i.children})}const ci="dunwich-admin-token";function Af(){const[i,u]=E.useState(()=>typeof window>"u"?null:window.sessionStorage.getItem(ci)),[o,d]=E.useState(""),[h,f]=E.useState([]),[y,p]=E.useState(null),[x,w]=E.useState(null),[N,I]=E.useState(!1),[V,K]=E.useState(""),[A,R]=E.useState(""),_=async P=>{I(!0),p(null);try{const F=await fetch("/api/admin/scripts",{headers:{Authorization:`Bearer ${P}`}}),ge=await F.json();if(F.status===401)throw window.sessionStorage.removeItem(ci),u(null),new Error("登录已过期，请重新输入管理令牌。");if(!F.ok||!("scripts"in ge))throw new Error("error"in ge&&ge.error!==void 0?ge.error:"无法读取剧本列表。");f(ge.scripts)}catch(F){p(F instanceof Error?F.message:"无法读取剧本列表。")}finally{I(!1)}};E.useEffect(()=>{i!==null&&_(i)},[i]);const ce=async()=>{I(!0),p(null);try{const P=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:o.trim()})}),F=await P.json();if(!P.ok)throw new Error(F.error??"登录失败。");window.sessionStorage.setItem(ci,o.trim()),u(o.trim()),d("")}catch(P){p(P instanceof Error?P.message:"登录失败。")}finally{I(!1)}},te=()=>{window.sessionStorage.removeItem(ci),u(null),f([]),w(null)},Ce=async()=>{var P;if(!(i===null||A.trim().length===0)){I(!0),p(null),w(null);try{const F=await fetch("/api/admin/scripts",{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({name:V.trim()||"上传剧本",code:A})}),ge=await F.json();if(!F.ok)throw new Error(ge.error??"上传失败。");w(`已上传：${((P=ge.script)==null?void 0:P.title)??(V.trim()||"剧本")}`),K(""),R(""),await _(i)}catch(F){p(F instanceof Error?F.message:"上传失败。")}finally{I(!1)}}},Se=async P=>{if(!(i===null||!window.confirm(`确定删除剧本“${P.title}”吗？此操作不可撤销。`))){I(!0),p(null),w(null);try{const F=await fetch(`/api/admin/scripts/${encodeURIComponent(P.id)}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}}),ge=await F.json();if(!F.ok)throw new Error(ge.error??"删除失败。");w(`已删除：${P.title}`),await _(i)}catch(F){p(F instanceof Error?F.message:"删除失败。")}finally{I(!1)}}},ke=async P=>{if(i!==null){p(null);try{const F=await fetch(`/api/admin/scripts/${encodeURIComponent(P.id)}/source`,{headers:{Authorization:`Bearer ${i}`}});if(!F.ok){const Pe=await F.json();throw new Error(Pe.error??"下载失败。")}const ge=await F.text(),ne=new Blob([ge],{type:"text/plain;charset=utf-8"}),Ne=URL.createObjectURL(ne),fe=document.createElement("a");fe.href=Ne,fe.download=`${P.id}.js`,document.body.appendChild(fe),fe.click(),fe.remove(),URL.revokeObjectURL(Ne)}catch(F){p(F instanceof Error?F.message:"下载失败。")}}},Te=async P=>{if(P===void 0)return;const F=await P.text();R(F),V.trim().length===0&&K(P.name.replace(/\.js$/i,""))};return i===null?l.jsx("div",{className:"adminScreen",children:l.jsxs("div",{className:"adminLoginCard",children:[l.jsx("p",{className:"eyebrow",children:"ADMIN CONSOLE"}),l.jsx("h1",{children:"剧本管理后台"}),l.jsx("p",{className:"adminLead",children:"输入服务端 `ADMIN_TOKEN` 环境变量中的管理令牌。令牌只保存在当前标签页的 sessionStorage。"}),l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"管理令牌"}),l.jsx("input",{type:"password",value:o,onChange:P=>d(P.target.value),onKeyDown:P=>{P.key==="Enter"&&ce()},autoFocus:!0})]}),y!==null&&l.jsx("div",{className:"formError",children:y}),l.jsx("button",{type:"button",className:"primaryButton",disabled:N||o.trim().length===0,onClick:()=>void ce(),children:N?"验证中……":"登录后台"}),l.jsx("a",{className:"adminBackLink",href:"#/",children:"返回调查局"})]})}):l.jsxs("div",{className:"adminScreen",children:[l.jsxs("header",{className:"adminHeader",children:[l.jsxs("div",{children:[l.jsx("p",{className:"eyebrow",children:"ADMIN CONSOLE"}),l.jsx("h1",{children:"剧本管理后台"}),l.jsx("p",{className:"adminLead",children:"管理服务端已载入的剧本。内置剧本只读；上传剧本支持下载、替换与删除。"})]}),l.jsxs("div",{className:"adminHeaderActions",children:[l.jsx("a",{className:"ghostButton",href:"#/",children:"返回调查局"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:te,children:"退出后台"})]})]}),y!==null&&l.jsx("div",{className:"formError",children:y}),x!==null&&l.jsx("div",{className:"adminNotice",children:x}),l.jsxs("section",{className:"adminPanel",children:[l.jsxs("div",{className:"adminPanelHeader",children:[l.jsx("h2",{children:"剧本列表"}),l.jsx("button",{type:"button",className:"ghostButton",disabled:N,onClick:()=>{i!==null&&_(i)},children:"刷新"})]}),l.jsxs("div",{className:"adminTable",children:[l.jsxs("div",{className:"adminTableHead",children:[l.jsx("span",{children:"剧本"}),l.jsx("span",{children:"类型"}),l.jsx("span",{children:"场景/结局"}),l.jsx("span",{children:"人数"}),l.jsx("span",{children:"操作"})]}),h.map(P=>l.jsxs("div",{className:"adminTableRow",children:[l.jsxs("div",{className:"adminScriptIdentity",children:[l.jsx("strong",{children:P.title}),l.jsx("span",{children:P.id}),l.jsxs("span",{children:[P.author," · v",P.version]})]}),l.jsx(Je,{tone:P.builtin?"gold":"good",children:P.builtin?"内置":"上传"}),l.jsxs("span",{children:[P.sceneCount," / ",P.endingCount]}),l.jsxs("span",{children:[P.minPlayers,"–",P.maxPlayers]}),l.jsxs("div",{className:"adminRowActions",children:[P.hasSource&&l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>void ke(P),children:"下载"}),!P.builtin&&l.jsx("button",{type:"button",className:"dangerButton",disabled:N,onClick:()=>void Se(P),children:"删除"})]})]},P.id))]})]}),l.jsxs("section",{className:"adminPanel",children:[l.jsxs("div",{className:"adminPanelHeader",children:[l.jsx("h2",{children:"上传 / 替换剧本"}),l.jsx("span",{className:"finePrint",children:"单文件 JS，最大 512KB"})]}),l.jsxs("div",{className:"adminUploadForm",children:[l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"显示名称"}),l.jsx("input",{value:V,onChange:P=>K(P.target.value),placeholder:"例如：墙中之鼠"})]}),l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"选择 .js 文件"}),l.jsx("input",{type:"file",accept:".js,text/javascript",onChange:P=>{var F;return void Te((F=P.target.files)==null?void 0:F[0])}})]}),l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"或直接粘贴源码"}),l.jsx("textarea",{className:"adminCodeInput",value:A,onChange:P=>R(P.target.value),placeholder:"module.exports = { ... }",spellCheck:!1})]}),l.jsx("button",{type:"button",className:"primaryButton",disabled:N||A.trim().length===0,onClick:()=>void Ce(),children:N?"处理中……":"上传并校验"})]})]})]})}function Ct(i=0){return{constitution:i,health:i,wisdom:i,inspiration:i,sanity:i,agility:i}}function Bf(i,u,o){var h;const d=Ct();for(const f of Xn)d[f]=o.base+i[f]+(((h=u.attributeBonuses)==null?void 0:h[f])??0);return d}function ya(i){return i>=80?2:i>=65?1:i<=30?-1:0}function Df(i){var Se,ke,Te;const u=i.view.self,o=i.combat.participants.some(P=>P.kind==="player"&&P.id===u.playerId),d=i.combat.currentActorId===u.playerId,h=i.view.self.inventory.filter(P=>P.template.weapon!==void 0),f=i.view.self.inventory.filter(P=>P.template.usable),y=i.entities.filter(P=>P.attackable&&(P.health??0)>0),[p,x]=E.useState(""),[w,N]=E.useState(""),[I,V]=E.useState(""),K=i.combat.participants.find(P=>P.id===i.combat.currentActorId);E.useEffect(()=>{p===""&&h[0]!==void 0&&x(h[0].instanceId)},[p,h]),E.useEffect(()=>{var P;(w===""||!y.some(F=>F.id===w))&&N(((P=y[0])==null?void 0:P.id)??"")},[w,y]),E.useEffect(()=>{I===""&&f[0]!==void 0&&V(f[0].instanceId)},[I,f]);const A=E.useMemo(()=>h.find(P=>P.instanceId===p),[h,p]),R=E.useMemo(()=>f.find(P=>P.instanceId===I),[f,I]),_=u.statuses.some(P=>P.preventsActions===!0),ce=o&&d&&u.alive&&!u.insane&&!_,te=u.character===null?0:ya(u.character.attributes.constitution),Ce=A===void 0?`1d3${te!==0?`（近战加成 ${te>0?"+":""}${te}）`:""}`:`${((Se=A.template.weapon)==null?void 0:Se.damage)??"1d3"}${((ke=A.template.weapon)==null?void 0:ke.range)==="melee"&&te!==0?`（近战加成 ${te>0?"+":""}${te}）`:""}`;return l.jsxs("section",{className:"combatPanel panel",children:[l.jsxs("header",{className:"panelHeader",children:[l.jsxs("h2",{children:["战斗 · 第 ",i.combat.round," 小轮"]}),l.jsx(Je,{tone:"danger",children:(K==null?void 0:K.name)??"无人行动"})]}),l.jsxs("div",{className:"panelBody",children:[l.jsx("div",{className:"combatOrder",children:i.combat.participants.map(P=>l.jsxs("div",{className:`combatant ${P.current?"combatantCurrent":""} ${P.alive?"":"combatantDown"}`,children:[l.jsxs("div",{className:"combatantTop",children:[l.jsx("span",{children:P.name}),l.jsx("span",{children:P.initiative})]}),l.jsx("div",{className:"combatantBar",children:l.jsx("div",{style:{width:`${Math.max(0,Math.round(P.health/Math.max(1,P.maxHealth)*100))}%`}})}),l.jsxs("small",{children:[P.health,"/",P.maxHealth,P.current?" · 行动中":""]})]},`${P.kind}-${P.id}`))}),!o&&l.jsx("p",{className:"finePrint",children:"你不在战斗中，只能旁观这场冲突。"}),o&&l.jsxs("div",{className:"combatActions",children:[l.jsxs("div",{className:"combatTargetRow",children:[l.jsxs("label",{className:"field compactField",children:[l.jsx("span",{children:"目标"}),l.jsxs("select",{value:w,onChange:P=>N(P.target.value),children:[y.length===0&&l.jsx("option",{value:"",children:"没有可见目标"}),y.map(P=>l.jsx("option",{value:P.id,children:P.name},P.id))]})]}),l.jsxs("label",{className:"field compactField",children:[l.jsx("span",{children:"武器"}),l.jsxs("select",{value:p,onChange:P=>x(P.target.value),children:[l.jsx("option",{value:"",children:"徒手（1d3）"}),h.map(P=>{var F,ge;return l.jsxs("option",{value:P.instanceId,children:[P.template.name,"（",(F=P.template.weapon)==null?void 0:F.damage,"）",((ge=P.template.weapon)==null?void 0:ge.capacity)!==void 0?` ${P.loaded??0}/${P.template.weapon.capacity}`:""]},P.instanceId)})]})]})]}),l.jsxs("div",{className:"combatDamageLine",children:["当前伤害：",l.jsx("strong",{children:Ce})]}),l.jsx("p",{className:"finePrint combatMoveHint",children:"在你的回合点击地图移动，最多 2 格，消耗 1 小轮。"}),l.jsxs("div",{className:"combatButtonGrid",children:[l.jsx("button",{type:"button",className:"primaryButton",disabled:!ce||w==="",onClick:()=>i.onAction({action:"attack",targetEntityId:w,itemInstanceId:p===""?void 0:p}),children:"攻击 · 1 小轮"}),l.jsx("button",{type:"button",className:"ghostButton",disabled:!ce,onClick:()=>i.onAction({action:"dodge"}),children:"闪避 · 1 小轮"}),l.jsx("button",{type:"button",className:"ghostButton",disabled:!ce,onClick:()=>i.onAction({action:"flee"}),children:"逃跑 · 1 小轮"}),l.jsx("button",{type:"button",className:"ghostButton",disabled:!ce,onClick:()=>i.onAction({action:"pass"}),children:"等待 · 1 小轮"})]}),l.jsxs("div",{className:"combatTargetRow",children:[l.jsxs("label",{className:"field compactField",children:[l.jsx("span",{children:"使用物品"}),l.jsxs("select",{value:I,onChange:P=>V(P.target.value),children:[f.length===0&&l.jsx("option",{value:"",children:"没有可用物品"}),f.map(P=>l.jsx("option",{value:P.instanceId,children:P.template.name},P.instanceId))]})]}),l.jsx("button",{type:"button",className:"ghostButton",disabled:!ce||R===void 0,onClick:()=>{I!==""&&i.onAction({action:"useItem",itemInstanceId:I})},children:"使用 · 1 小轮"}),l.jsx("button",{type:"button",className:"ghostButton",disabled:!ce||A===void 0,onClick:()=>{p!==""&&i.onAction({action:"reload",itemInstanceId:p})},children:"装填 · 1 小轮"})]}),!ce&&o&&l.jsx("p",{className:"finePrint",children:u.alive?"还没轮到你行动。":"你已经倒下，无法继续战斗。"}),A!==void 0&&((Te=A.template.weapon)==null?void 0:Te.capacity)!==void 0&&l.jsxs("p",{className:"finePrint",children:[A.template.name,"："," ",A.loaded??0,"/",A.template.weapon.capacity," 发"]})]})]})]})}function Of(i){return l.jsxs(pa,{title:"交谈",onClose:i.onClose,wide:!0,className:"dialogueModal",children:[l.jsx("div",{className:"dialogueSpeaker",children:i.dialogue.speaker}),l.jsx("p",{className:"dialogueText",children:i.dialogue.text}),l.jsx("div",{className:"dialogueOptions",children:i.dialogue.options.map(u=>l.jsxs("button",{type:"button",className:"dialogueOption",disabled:!u.available,title:u.reason,onClick:()=>i.onChoose(u.id),children:[l.jsx("span",{children:u.label}),!u.available&&u.reason!==void 0&&l.jsx("small",{children:u.reason})]},u.id))})]})}function $f(i){const u=i.ending.players.find(o=>o.playerId===i.self.playerId);return l.jsxs("div",{className:"endingScreen",children:[l.jsx("div",{className:"endingNoise","aria-hidden":"true"}),l.jsxs("div",{className:"endingContent",children:[l.jsx("p",{className:"eyebrow",children:"INVESTIGATION CONCLUDED"}),l.jsx("h1",{children:i.ending.title}),l.jsx("p",{className:"endingRank",children:i.ending.rank}),l.jsx("p",{className:"endingSummary",children:i.ending.summary}),l.jsx("div",{className:"endingStory",children:l.jsx("p",{children:i.ending.description})}),l.jsxs("div",{className:"endingStats",children:[l.jsxs("div",{className:"endingScore",children:[l.jsx("span",{children:"调查评分"}),l.jsx("strong",{children:i.ending.score})]}),l.jsxs("div",{className:"endingClock",children:[l.jsx("span",{children:"结束于"}),l.jsx("strong",{children:i.ending.clock}),l.jsxs("small",{children:["第 ",i.ending.bigRound," 大轮"]})]}),u!==void 0&&l.jsxs("div",{className:"endingPersonal",children:[l.jsx("span",{children:"你的结局"}),l.jsxs("strong",{children:[u.alive?"幸存":"倒下"," · 线索 ",u.clues]}),l.jsxs("small",{children:["生命 ",u.health," · 理智 ",u.sanity]})]})]}),i.ending.stats.length>0&&l.jsx("div",{className:"endingStats endingStatsSecondary",children:i.ending.stats.map(o=>l.jsxs("div",{className:"endingStatItem",children:[l.jsx("span",{children:o.label}),l.jsx("strong",{children:o.value})]},o.label))}),l.jsxs("table",{className:"endingTable",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"调查员"}),l.jsx("th",{children:"职业"}),l.jsx("th",{children:"状态"}),l.jsx("th",{children:"线索"}),l.jsx("th",{children:"评分"})]})}),l.jsx("tbody",{children:i.ending.players.map(o=>l.jsxs("tr",{children:[l.jsx("td",{children:o.name}),l.jsx("td",{children:o.occupationName}),l.jsx("td",{children:o.alive?"幸存":"倒下"}),l.jsx("td",{children:o.clues}),l.jsx("td",{children:o.score})]},o.playerId))})]}),l.jsx("button",{type:"button",className:"primaryButton endingLeave",onClick:i.onLeave,children:"返回调查局前厅"}),l.jsx("p",{className:"finePrint",children:"本剧本到此结束。你可以再次发起调查，或换一个剧本。"})]})]})}const dc="dunwich-sound-muted";class zf{constructor(){ra(this,"context",null);ra(this,"mutedValue",!1);typeof window<"u"&&(this.mutedValue=window.localStorage.getItem(dc)==="true")}get muted(){return this.mutedValue}setMuted(u){this.mutedValue=u,typeof window<"u"&&window.localStorage.setItem(dc,u?"true":"false")}toggle(){return this.setMuted(!this.mutedValue),this.mutedValue}play(u){if(this.mutedValue)return;const o=this.ensureContext();if(o===null)return;o.state==="suspended"&&o.resume();const d=this.getTones(u);for(const h of d)this.playTone(o,h)}ensureContext(){if(typeof window>"u")return null;if(this.context===null)try{const u=window.AudioContext??window.webkitAudioContext;if(u===void 0)return null;this.context=new u}catch{return null}return this.context}playTone(u,o){try{const d=u.createOscillator(),h=u.createGain(),f=u.currentTime+o.startAt,y=f+o.duration;d.type=o.type,d.frequency.setValueAtTime(o.frequency,f),o.endFrequency!==void 0&&d.frequency.exponentialRampToValueAtTime(Math.max(1,o.endFrequency),y),h.gain.setValueAtTime(1e-4,f),h.gain.exponentialRampToValueAtTime(o.volume,f+.015),h.gain.exponentialRampToValueAtTime(1e-4,y),d.connect(h),h.connect(u.destination),d.start(f),d.stop(y+.02)}catch{}}getTones(u){switch(u){case"click":return[{frequency:320,endFrequency:220,duration:.045,startAt:0,type:"triangle",volume:.018}];case"time":return[{frequency:620,endFrequency:520,duration:.08,startAt:0,type:"sine",volume:.035},{frequency:820,endFrequency:700,duration:.07,startAt:.1,type:"sine",volume:.025}];case"damage":return[{frequency:130,endFrequency:55,duration:.24,startAt:0,type:"sawtooth",volume:.05},{frequency:70,endFrequency:40,duration:.18,startAt:.02,type:"square",volume:.02}];case"heal":return[{frequency:420,endFrequency:620,duration:.22,startAt:0,type:"sine",volume:.035},{frequency:620,endFrequency:820,duration:.18,startAt:.12,type:"sine",volume:.025}];case"checkSuccess":return[{frequency:440,duration:.12,startAt:0,type:"triangle",volume:.04},{frequency:660,duration:.22,startAt:.1,type:"triangle",volume:.04}];case"checkFailure":return[{frequency:240,endFrequency:120,duration:.32,startAt:0,type:"sawtooth",volume:.035}];case"clue":return[{frequency:880,duration:.16,startAt:0,type:"sine",volume:.035},{frequency:1320,duration:.3,startAt:.08,type:"sine",volume:.022}];case"itemGain":return[{frequency:520,duration:.12,startAt:0,type:"triangle",volume:.04},{frequency:780,duration:.2,startAt:.1,type:"sine",volume:.03}];case"itemLoss":return[{frequency:460,endFrequency:220,duration:.24,startAt:0,type:"triangle",volume:.035}];case"open":return[{frequency:180,endFrequency:90,duration:.2,startAt:0,type:"triangle",volume:.035}];case"ending":return[{frequency:220,duration:1.2,startAt:0,type:"sine",volume:.04},{frequency:330,duration:1.2,startAt:.1,type:"sine",volume:.03},{frequency:440,duration:1.2,startAt:.2,type:"sine",volume:.02}];default:return[]}}}const An=new zf;function Ff(i){const u=E.useRef(new Map),o=E.useRef(!1),[d,h]=E.useState([]);return E.useEffect(()=>{const f=new Map;for(const w of i.inventory)f.set(w.instanceId,{name:w.template.name,glyph:w.template.glyph??"◆",quantity:w.quantity});if(!o.current){o.current=!0,u.current=f;return}const y=[];for(const[w,N]of f){const I=u.current.get(w);I===void 0?y.push({kind:"gain",name:N.name,glyph:N.glyph,amount:N.quantity}):N.quantity>I.quantity?y.push({kind:"gain",name:N.name,glyph:N.glyph,amount:N.quantity-I.quantity}):N.quantity<I.quantity&&y.push({kind:"loss",name:N.name,glyph:N.glyph,amount:I.quantity-N.quantity})}for(const[w,N]of u.current)f.has(w)||y.push({kind:"loss",name:N.name,glyph:N.glyph,amount:N.quantity});if(u.current=f,y.length===0)return;const p=Date.now(),x=y.map((w,N)=>({...w,id:`item-change-${p}-${N}-${Math.random().toString(36).slice(2)}`}));h(w=>[...w,...x]),x.some(w=>w.kind==="gain")&&An.play("itemGain"),x.some(w=>w.kind==="loss")&&An.play("itemLoss"),window.setTimeout(()=>{const w=new Set(x.map(N=>N.id));h(N=>N.filter(I=>!w.has(I.id)))},2800)},[i.inventory]),d.length===0?null:l.jsx("div",{className:"inventoryToastStack","aria-live":"polite",children:d.map(f=>l.jsxs("div",{className:`inventoryToast inventoryToast-${f.kind}`,children:[l.jsx("span",{className:"inventoryToastGlyph",children:f.glyph}),l.jsxs("span",{className:"inventoryToastLabel",children:[f.kind==="gain"?"获得物品":"失去物品",l.jsx("strong",{children:f.name})]}),l.jsxs("span",{className:"inventoryToastAmount",children:[f.kind==="gain"?"+":"−",f.amount]})]},f.id))})}const Uf={scene:"场景",entity:"实体",item:"物品",note:"笔记",clue:"线索"};function Hf(i){const[u,o]=E.useState(""),d=E.useRef(null),h=i.view.log.slice(-120);E.useEffect(()=>{const y=d.current;y!==null&&(y.scrollTop=y.scrollHeight)},[h.length,i.view.log]);const f=()=>{u.trim().length!==0&&(i.onChat(u.trim()),o(""))};return l.jsxs("section",{className:"logPanel panel",children:[l.jsxs("header",{className:"panelHeader",children:[l.jsx("h2",{children:"调查记录"}),l.jsxs("span",{className:"logRound",children:["第 ",i.view.round.bigRound," 大轮 ·"," ",i.view.round.clock]})]}),l.jsxs("div",{className:"logScroller",ref:d,children:[h.length===0&&l.jsx("p",{className:"emptyState",children:"还没有记录。"}),h.map(y=>l.jsxs("p",{className:`logEntry logEntry-${y.kind} logTone-${y.tone??"default"}`,children:[l.jsx("span",{className:"logMarker",children:y.kind==="chat"?"❝":y.kind==="check"?"◇":y.kind==="combat"?"✦":y.kind==="clue"?"✧":y.kind==="score"?"☆":y.kind==="system"?"·":"—"}),l.jsxs("span",{className:"logEntryBody",children:[l.jsx("span",{children:y.text}),y.links!==void 0&&y.links.length>0&&l.jsx("span",{className:"logLinks",children:y.links.map(p=>l.jsxs("button",{type:"button",className:"logLink",onClick:()=>i.onLinkClick(p),children:[Uf[p.type]," · ",p.label]},`${p.type}:${p.id}:${p.label}`))})]})]},y.id))]}),l.jsxs("div",{className:"chatRow logChatRow",children:[l.jsx("input",{value:u,onChange:y=>o(y.target.value),onKeyDown:y=>{y.key==="Enter"&&f()},placeholder:"对同场景的人说话……",maxLength:500,disabled:i.view.phase==="ended"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:f,disabled:i.view.phase==="ended",children:"发言"})]})]})}function Vf(i){var V,K,A;const[u,o]=E.useState(((V=i.initial)==null?void 0:V.title)??""),[d,h]=E.useState(((K=i.initial)==null?void 0:K.content)??""),[f,y]=E.useState(((A=i.initial)==null?void 0:A.links.map(R=>({...R})))??[]),[p,x]=E.useState(null),w=R=>{x(null),y(_=>_.find(te=>te.type===R.type&&te.id===R.id)!==void 0?_.filter(te=>!(te.type===R.type&&te.id===R.id)):_.length>=cc?_:[..._,{type:R.type,id:R.id,label:R.label}])},N=()=>{if(u.trim().length===0){x("请给笔记起一个标题。");return}if(u.trim().length>ca){x(`标题不能超过 ${ca} 个字符。`);return}if(d.trim().length>ua){x(`内容不能超过 ${ua} 个字符。`);return}i.onSave({title:u.trim(),content:d.trim(),links:f})},I={scene:i.targets.filter(R=>R.type==="scene"),entity:i.targets.filter(R=>R.type==="entity"),item:i.targets.filter(R=>R.type==="item")};return l.jsxs(pa,{title:i.initial===null?"新建笔记":"编辑笔记",wide:!0,onClose:i.onClose,className:"noteModal",children:[l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"标题"}),l.jsx("input",{value:u,onChange:R=>o(R.target.value),maxLength:ca,placeholder:"例如：威尔伯日记里的矛盾"})]}),l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"内容"}),l.jsx("textarea",{value:d,onChange:R=>h(R.target.value),rows:8,maxLength:ua,placeholder:"记录线索、推论、还没说出口的怀疑……"})]}),l.jsxs("div",{className:"linkPicker",children:[l.jsxs("h4",{children:["关联索引（最多 ",cc," 个）"]}),["scene","entity","item"].map(R=>l.jsxs("div",{className:"linkGroup",children:[l.jsx("span",{className:"linkGroupTitle",children:R==="scene"?"场景":R==="entity"?"实体":"物品"}),l.jsxs("div",{className:"linkChoiceGrid",children:[I[R].length===0&&l.jsx("span",{className:"finePrint",children:"暂无可索引对象。"}),I[R].map(_=>{const ce=f.some(te=>te.type===_.type&&te.id===_.id);return l.jsx("button",{type:"button",className:`linkChoice ${ce?"linkChoiceSelected":""}`,onClick:()=>w(_),children:_.label},`${_.type}:${_.id}`)})]})]},R))]}),p!==null&&l.jsx("p",{className:"formError",children:p}),l.jsxs("div",{className:"modalFooter",children:[l.jsx("button",{type:"button",className:"ghostButton",onClick:i.onClose,children:"取消"}),l.jsx("button",{type:"button",className:"primaryButton",onClick:N,children:"保存笔记"})]})]})}function Wf(i){const u=E.useRef(new Map),o=E.useRef(!1),[d,h]=E.useState([]);return E.useEffect(()=>{const f=new Map;for(const p of i.notes)f.set(p.id,{title:p.title,content:p.content,links:p.links.map(x=>`${x.type}:${x.id}`).join("|")});if(!o.current){o.current=!0,u.current=f;return}const y=[];for(const[p,x]of f){const w=u.current.get(p);w===void 0?y.push({id:`note-toast-${Date.now()}-${p}`,noteId:p,kind:"new",title:x.title}):(w.title!==x.title||w.content!==x.content||w.links!==x.links)&&y.push({id:`note-toast-${Date.now()}-${p}`,noteId:p,kind:"updated",title:x.title})}u.current=f,y.length!==0&&(h(p=>[...p,...y]),An.play("clue"),window.setTimeout(()=>{const p=new Set(y.map(x=>x.id));h(x=>x.filter(w=>!p.has(w.id)))},2800))},[i.notes]),d.length===0?null:l.jsx("div",{className:"noteToastStack","aria-live":"polite",children:d.map(f=>l.jsxs("div",{className:`noteToast noteToast-${f.kind}`,children:[l.jsx("span",{className:"noteToastGlyph",children:"✎"}),l.jsxs("span",{className:"noteToastLabel",children:[f.kind==="new"?"新增笔记":"笔记已更新",l.jsx("strong",{children:f.title})]})]},f.id))})}const Gf=[{key:"noTimeCost",label:"行动不消耗轮数",description:"大轮与战斗小轮暂停推进，时间、状态与计时器冻结。"},{key:"godMode",label:"战斗锁血",description:"玩家受到伤害时生命不变。"},{key:"sanityLock",label:"锁定理智",description:"理智检定与理智损失都不会降低理智。"},{key:"alwaysSucceed",label:"检定必胜",description:"玩家主动检定为大成功，对抗检定对手大失败。"}];function qf(i){var d;const[u,o]=E.useState(((d=i.cheats.itemCatalog[0])==null?void 0:d.id)??"");return E.useEffect(()=>{var h;i.cheats.itemCatalog.length>0&&!i.cheats.itemCatalog.some(f=>f.id===u)&&o(((h=i.cheats.itemCatalog[0])==null?void 0:h.id)??"")},[i.cheats.itemCatalog,u]),l.jsxs("div",{className:"cheatPanel",role:"dialog","aria-label":"作弊面板",children:[l.jsxs("div",{className:"cheatPanelHeader",children:[l.jsxs("div",{children:[l.jsx("p",{className:"eyebrow",children:"KEEPER'S SHORTCUT"}),l.jsx("h2",{children:"作弊 / 调试"})]}),l.jsx("button",{type:"button",className:"mapHoverClose",onClick:i.onClose,"aria-label":"关闭作弊面板",children:"×"})]}),l.jsx("p",{className:"cheatPanelLead",children:"仅房主可操作。作弊状态对所有调查员生效；关闭总开关后所有效果暂停。"}),l.jsxs("label",{className:"cheatMaster",children:[l.jsx("input",{type:"checkbox",checked:i.cheats.enabled,onChange:h=>i.onToggle("enabled",h.target.checked)}),l.jsx("span",{children:"启用作弊功能"})]}),l.jsx("div",{className:"cheatList",children:Gf.map(h=>l.jsxs("label",{className:"cheatRow",children:[l.jsx("input",{type:"checkbox",checked:i.cheats[h.key],disabled:!i.cheats.enabled,onChange:f=>i.onToggle(h.key,f.target.checked)}),l.jsxs("span",{children:[l.jsx("strong",{children:h.label}),l.jsx("small",{children:h.description})]})]},h.key))}),l.jsxs("div",{className:"cheatUtilities",children:[l.jsx("button",{type:"button",className:"ghostButton",disabled:!i.cheats.enabled,onClick:()=>i.onUtility("heal"),children:"生命回满"}),l.jsx("button",{type:"button",className:"ghostButton",disabled:!i.cheats.enabled,onClick:()=>i.onUtility("restoreSanity"),children:"理智回满"}),l.jsx("button",{type:"button",className:"ghostButton",disabled:!i.cheats.enabled,onClick:()=>i.onUtility("revealScene"),children:"揭示当前场景"}),l.jsx("button",{type:"button",className:"dangerButton",disabled:!i.cheats.enabled,onClick:()=>i.onUtility("killHostiles"),children:"秒杀当前敌人"})]}),l.jsxs("div",{className:"cheatItemRow",children:[l.jsx("select",{value:u,onChange:h=>o(h.target.value),disabled:!i.cheats.enabled||i.cheats.itemCatalog.length===0,"aria-label":"选择要获取的物品",children:i.cheats.itemCatalog.map(h=>l.jsx("option",{value:h.id,children:h.name},h.id))}),l.jsx("button",{type:"button",className:"primaryButton",disabled:!i.cheats.enabled||u.length===0,onClick:()=>i.onGiveItem(u),children:"获取物品"})]})]})}function hn(i){return`${i.x},${i.y}`}function pi(i,u,o){var h,f;const d=((h=i.rows[o.y])==null?void 0:h[o.x])??" ";return((f=i.legend[d])==null?void 0:f.walkable)!==!0||i.entities.some(y=>y.x===o.x&&y.y===o.y)?!1:!i.players.some(y=>y.playerId!==u.playerId&&y.x===o.x&&y.y===o.y)}function el(i,u){var d,h;const o=((d=i.rows[u.y])==null?void 0:d[u.x])??" ";return((h=i.legend[o])==null?void 0:h.walkable)===!0}function yi(i,u,o){const d={x:u.x,y:u.y};if(d.x===o.x&&d.y===o.y)return{steps:[],distance:0,reached:!0};if(!pi(i,u,o))return{steps:[],distance:Number.POSITIVE_INFINITY,reached:!1};const h=[d],f=new Set([hn(d)]),y=new Map,p=new Map;y.set(hn(d),null),p.set(hn(d),0);let x=!1;for(;h.length>0;){const I=h.shift();if(I===void 0)break;if(I.x===o.x&&I.y===o.y){x=!0;break}const V=p.get(hn(I))??0;for(const K of[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1},{x:1,y:1},{x:1,y:-1},{x:-1,y:1},{x:-1,y:-1}]){const A={x:I.x+K.x,y:I.y+K.y};A.x<0||A.y<0||A.x>=i.width||A.y>=i.height||f.has(hn(A))||K.x!==0&&K.y!==0&&(!el(i,{x:I.x+K.x,y:I.y})||!el(i,{x:I.x,y:I.y+K.y}))||pi(i,u,A)&&(f.add(hn(A)),p.set(hn(A),V+1),y.set(hn(A),I),h.push(A))}}if(!x)return{steps:[],distance:Number.POSITIVE_INFINITY,reached:!1};const w=[];let N=o;for(;N!==null;){const I=y.get(hn(N))??null;if(I===null)break;w.push(N),N=I}return w.reverse(),{steps:w,distance:p.get(hn(o))??w.length,reached:!0}}function di(i,u,o){if(pi(i,u,o))return{...yi(i,u,o),destination:o};let d={steps:[],distance:Number.POSITIVE_INFINITY,reached:!1,destination:null};for(let h=-1;h<=1;h+=1)for(let f=-1;f<=1;f+=1){if(f===0&&h===0)continue;const y={x:o.x+f,y:o.y+h};if(y.x<0||y.y<0||y.x>=i.width||y.y>=i.height||!pi(i,u,y))continue;if(y.x===u.x&&y.y===u.y)return{steps:[],distance:0,reached:!0,destination:y};const p=yi(i,u,y);p.reached&&p.distance<d.distance&&(d={...p,destination:y})}return d}function Qf(i,u,o){if(u.x===o.x&&u.y===o.y)return[];const d=[u],h=new Set([hn(u)]),f=new Map;for(f.set(hn(u),null);d.length>0;){const y=d.shift();if(y===void 0)break;for(const p of[{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1},{x:1,y:1},{x:1,y:-1},{x:-1,y:1},{x:-1,y:-1}]){const x={x:y.x+p.x,y:y.y+p.y};if(!(x.x<0||x.y<0||x.x>=i.width||x.y>=i.height)&&!(h.has(hn(x))||!el(i,x))&&!(p.x!==0&&p.y!==0&&(!el(i,{x:y.x+p.x,y:y.y})||!el(i,{x:y.x,y:y.y+p.y})))){if(h.add(hn(x)),f.set(hn(x),y),x.x===o.x&&x.y===o.y){const w=[];let N=x;for(;N!==null;){const I=f.get(hn(N))??null;if(I===null)break;w.push(N),N=I}return w.reverse(),w}d.push(x)}}}return[]}function hr(i,u){return!Number.isFinite(i)||i<=0?0:Math.ceil(i/Math.max(1,u))}function Kf(i){return Math.min(700,220+Math.max(1,i)*38)}function Yf(i,u){const o=Math.min(1,Math.max(0,(u-i.startedAt)/i.duration)),d=1-Math.pow(1-o,3),h=i.waypoints;if(h.length===0)return i.to;const f=[];let y=0;for(let x=1;x<h.length;x+=1){const w=h[x-1],N=h[x];if(w===void 0||N===void 0){f.push(0);continue}const I=Math.hypot(N.x-w.x,N.y-w.y);f.push(I),y+=I}if(y<=0)return i.to;let p=y*d;for(let x=1;x<h.length;x+=1){const w=h[x-1],N=h[x],I=f[x-1]??0;if(!(w===void 0||N===void 0)){if(p<=I||x===h.length-1){const V=I<=0?1:Math.min(1,p/I);return{x:w.x+(N.x-w.x)*V,y:w.y+(N.y-w.y)*V}}p-=I}}return i.to}function Xf(i){var xe,Ee,ln,Be,Dn,Et,Wn;const u=E.useRef(null),o=E.useRef(null),[d,h]=E.useState(900),[f,y]=E.useState(typeof window>"u"?900:window.innerHeight),[p,x]=E.useState(null),[w,N]=E.useState(null),[I,V]=E.useState(null),[K,A]=E.useState([]),R=E.useRef(null),_=E.useRef(null),ce=E.useRef(0),te=E.useRef(new Map),Ce=E.useRef(null),Se=E.useRef(new Map),ke=E.useRef(null),[Te,P]=E.useState(0),[F,ge]=E.useState(!1),ne=i.combat!==null,Ne=i.combat!==null&&i.combat.currentActorId===i.self.playerId,fe=ne?fr:((xe=i.self.character)==null?void 0:xe.movementAllowance)??ui,Pe=()=>{if(ke.current!==null)return;ge(!0);const M=()=>{const U=performance.now();let Q=!1;for(const G of Se.current.values())U<G.startedAt+G.duration&&(Q=!0);P(G=>G+1),Q?ke.current=window.requestAnimationFrame(M):(ke.current=null,ge(!1))};ke.current=window.requestAnimationFrame(M)};E.useEffect(()=>{const M=u.current;if(M===null)return;const U=new ResizeObserver(G=>{for(const we of G)h(we.contentRect.width)});U.observe(M),h(M.clientWidth);const Q=()=>{y(window.innerHeight)};return window.addEventListener("resize",Q),()=>{U.disconnect(),window.removeEventListener("resize",Q)}},[]),E.useEffect(()=>{const M=te.current,U=new Map,Q=[];for(const G of i.scene.players){const we=`player:${G.playerId}`;U.set(we,G.health);const se=M.get(we);se!==void 0&&se!==G.health&&Q.push({id:`float-${ce.current++}`,x:G.x,y:G.y,amount:G.health-se})}for(const G of i.scene.entities){if(G.health===void 0)continue;const we=`entity:${G.id}`;U.set(we,G.health);const se=M.get(we);se!==void 0&&se!==G.health&&Q.push({id:`float-${ce.current++}`,x:G.x,y:G.y,amount:G.health-se})}te.current=U,Q.length!==0&&(A(G=>[...G,...Q]),window.setTimeout(()=>{const G=new Set(Q.map(we=>we.id));A(we=>we.filter(se=>!G.has(se.id)))},1700))},[i.scene]),E.useEffect(()=>{if(I===null)return;const M=window.setTimeout(()=>{V(null)},1600);return()=>{window.clearTimeout(M)}},[I]),E.useEffect(()=>()=>{R.current!==null&&window.clearTimeout(R.current),_.current!==null&&window.clearTimeout(_.current),ke.current!==null&&(window.cancelAnimationFrame(ke.current),ke.current=null)},[]),E.useEffect(()=>{R.current!==null&&(window.clearTimeout(R.current),R.current=null),_.current!==null&&(window.clearTimeout(_.current),_.current=null),x(null),N(null),V(null)},[i.scene.id,(Ee=i.combat)==null?void 0:Ee.currentActorId]),E.useEffect(()=>{const M=i.scene,U=Ce.current;if(U===null||U.id!==M.id){Se.current.clear(),Ce.current=M,ge(!1);return}const Q=performance.now(),G=new Map,we=(se,de,Qe)=>{const yn=Se.current.get(se);if(yn!==void 0&&yn.to.x===Qe.x&&yn.to.y===Qe.y&&Q<yn.startedAt+yn.duration){G.set(se,yn);return}if(de===void 0||de.x===Qe.x&&de.y===Qe.y)return;const on=Qf(M,de,Qe),De=[de,...on.length>0?on:[Qe]];G.set(se,{key:se,from:de,to:Qe,waypoints:De,startedAt:Q,duration:Kf(Math.max(1,De.length-1))})};for(const se of M.players){const de=U.players.find(Qe=>Qe.playerId===se.playerId);we(`player:${se.playerId}`,de===void 0?void 0:{x:de.x,y:de.y},{x:se.x,y:se.y})}for(const se of M.entities){const de=U.entities.find(Qe=>Qe.id===se.id);we(`entity:${se.id}`,de===void 0?void 0:{x:de.x,y:de.y},{x:se.x,y:se.y})}Se.current=G,Ce.current=M,G.size>0?Pe():ge(!1)},[i.scene]);const Ie=Math.floor((d-8)/i.scene.width),qe=Math.floor(f*.52/i.scene.height),ae=Math.max(20,Math.min(48,Ie,qe)),pe=ae*i.scene.width,$=ae*i.scene.height,Z=i.scene.entities.find(M=>M.id===i.selectedEntityId),[W,j]=E.useState(!1),L=E.useRef(null),ie=()=>{j(!0),L.current!==null&&window.clearTimeout(L.current),L.current=window.setTimeout(()=>{L.current=null,j(!1)},3200)};E.useEffect(()=>{if(Z===void 0){L.current!==null&&(window.clearTimeout(L.current),L.current=null),j(!1);return}ie()},[i.selectedEntityId]),E.useEffect(()=>()=>{L.current!==null&&window.clearTimeout(L.current)},[]),E.useEffect(()=>{const M=o.current;if(M===null)return;const U=window.devicePixelRatio||1;M.width=Math.round(pe*U),M.height=Math.round($*U),M.style.width=`${pe}px`,M.style.height=`${$}px`;const Q=M.getContext("2d");if(Q===null)return;Q.setTransform(U,0,0,U,0,0),Q.clearRect(0,0,pe,$),Q.fillStyle="#0e0c09",Q.fillRect(0,0,pe,$),nh(Q,i.scene,ae),th(Q,i.scene,ae),eh(Q,i.self,(p==null?void 0:p.path)??null,ae);const G=performance.now(),we=new Map;for(const se of Se.current.values())we.set(se.key,Yf(se,G));rh(Q,i.scene,i.self,ae,i.selectedEntityId,p,we),ih(Q,i.scene,i.self,ae,we),ah(Q,p,ae,i.scene)},[pe,$,ae,i.scene,i.self,i.selectedEntityId,p,Te]);const oe=M=>{const U=o.current;if(U===null)return null;const Q=U.getBoundingClientRect(),G=Math.floor((M.clientX-Q.left)/ae),we=Math.floor((M.clientY-Q.top)/ae);return G<0||we<0||G>=i.scene.width||we>=i.scene.height?null:{x:G,y:we}},he=(M,U,Q)=>M===void 0||!M.reached?"没有可抵达的路径":M.distance===0||U===0?"就在你旁边":`距离 ${U??M.distance} 格 · 预计 ${Q??0} 大轮`,ve=M=>{var on;const U=i.scene.entities.find(De=>De.x===M.x&&De.y===M.y),Q=i.scene.players.find(De=>De.x===M.x&&De.y===M.y),G=i.scene.exits.find(De=>De.x===M.x&&De.y===M.y),we=((on=i.scene.rows[M.y])==null?void 0:on[M.x])??" ",se=i.scene.legend[we];if(U!==void 0){const De=di(i.scene,i.self,U),He=De.destination===null?void 0:hr(De.distance,ui);return{x:M.x,y:M.y,label:U.name,detail:`${Jf(U)} · ${ne?`战斗中 · 距离 ${De.distance} 格`:he(De,De.distance,He)}`,kind:"entity",path:De,destination:De.destination,rounds:He}}if(Q!==void 0){const De=Q.playerId===i.self.playerId,He=De?void 0:di(i.scene,i.self,Q),Ft=(He==null?void 0:He.destination)===null||He===void 0?void 0:hr(He.distance,ui);return{x:M.x,y:M.y,label:De?"你":Q.name,detail:De?`${Q.occupationName} · 悬停查看战斗信息`:`${Q.occupationName} · ${ne?`战斗中 · 距离 ${(He==null?void 0:He.distance)??0} 格`:he(He,He==null?void 0:He.distance,Ft)}`,kind:"player",path:He,destination:(He==null?void 0:He.destination)??null,rounds:Ft}}if(G!==void 0)return{x:M.x,y:M.y,label:G.label,detail:ne?`前往 ${G.targetSceneName} · 战斗中请先结束冲突`:`前往 ${G.targetSceneName} · 消耗 ${G.cost} 大轮`,kind:"exit"};if(M.x===i.self.x&&M.y===i.self.y)return{x:M.x,y:M.y,label:"你",detail:ne?"当前位置 · 在你的回合点击空地移动":"当前位置 · 点击其他空地移动",kind:"tile"};const de=yi(i.scene,i.self,M),Qe=de.reached?hr(de.distance,ui):void 0,yn=ne&&de.reached?{...de,steps:de.steps.slice(0,fr)}:de;return{x:M.x,y:M.y,label:(se==null?void 0:se.name)??"未知",detail:de.reached?ne?Ne?`战斗移动 1 小轮 · 最多 ${fr} 格 · 距离 ${de.distance} 格`:"战斗中 · 等待你的回合":`移动消耗 1 大轮 · ${he(de,de.distance,Qe)}`:"无法抵达",kind:"tile",path:yn,destination:de.reached?M:null,rounds:ne?void 0:Qe}},_e=M=>{R.current!==null&&(window.clearTimeout(R.current),R.current=null),!(M.kind!=="entity"&&M.kind!=="player")&&(R.current=window.setTimeout(()=>{const U=i.scene.entities.find(G=>G.x===M.x&&G.y===M.y),Q=i.scene.players.find(G=>G.x===M.x&&G.y===M.y);U!==void 0?N({kind:"entity",entity:U,path:M.path,destination:M.destination,rounds:M.rounds}):Q!==void 0&&N({kind:"player",player:Q,isSelf:Q.playerId===i.self.playerId,path:M.path,destination:M.destination,rounds:M.rounds})},700))},me=()=>{_.current!==null&&(window.clearTimeout(_.current),_.current=null)},Le=(M=500)=>{me(),_.current=window.setTimeout(()=>{_.current=null,x(null),N(null)},M)},ze=()=>{R.current!==null&&(window.clearTimeout(R.current),R.current=null),me(),x(null),N(null)},In=M=>{me();const U=oe(M);if(U===null||p!==null&&p.x===U.x&&p.y===U.y)return;R.current!==null&&(window.clearTimeout(R.current),R.current=null),N(null);const Q=ve(U);x(Q),_e(Q)},Ue=(M,U)=>{V({id:`click-${ce.current++}`,x:M.x,y:M.y,text:U})},Tn=M=>{var Qe,yn;const U=oe(M);if(U===null)return;const Q=i.scene.entities.find(on=>on.x===U.x&&on.y===U.y);if(Q!==void 0){ie(),ze(),i.onSelectEntity(Q.id);return}const G=i.scene.exits.find(on=>on.x===U.x&&on.y===U.y);if(G!==void 0){ze();const on=G.available||G.reason==="需要先靠近出口。";Ue(U,on?`双击前往 ${G.targetSceneName}`:G.reason??"这条路暂时不可用");return}if(i.self.x===U.x&&i.self.y===U.y)return;const we=((Qe=i.scene.rows[U.y])==null?void 0:Qe[U.x])??" ";if(((yn=i.scene.legend[we])==null?void 0:yn.walkable)!==!0)return;const se=yi(i.scene,i.self,U);if(!se.reached){Ue(U,"无法抵达");return}if(i.onSelectEntity(null),ne){if(!Ne){Ue(U,"战斗中 · 等待你的回合");return}Ue(U,se.distance>fr?`战斗移动 · 1 小轮（本小轮前进 ${fr} 格）`:"战斗移动 · 1 小轮"),i.onCombatMove(U.x,U.y);return}const de=hr(se.distance,fe);Ue(U,de>1?`移动 · 1 大轮（目标约 ${de} 大轮）`:"移动 · 1 大轮"),i.onMove(U.x,U.y)},b=M=>{var G;if(M.destination===null||M.destination===void 0)return;const U=M.destination,Q=M.rounds??1;Ue(U,`自动行走 · 预计 ${Q} 大轮`),i.onAutoWalk(U.x,U.y,(G=M.entity)==null?void 0:G.id),ze()},k=M=>!ne&&M.destination!==null&&M.destination!==void 0&&M.path!==void 0&&M.path.reached&&M.path.distance>0,H=M=>{if(ne)return;const U=oe(M);if(U===null)return;const Q=i.scene.exits.find(se=>se.x===U.x&&se.y===U.y);if(Q!==void 0){if(!(Q.available||Q.reason==="需要先靠近出口。")){Ue(U,Q.reason??"这条路暂时不可用");return}const de=di(i.scene,i.self,Q);if(de.destination===null){Ue(U,"没有可抵达的路径");return}if(de.distance===0){if(!Q.available){Ue(U,Q.reason??"这条路暂时不可用");return}i.onSelectEntity(null),Ue(U,`前往 ${Q.targetSceneName}`),i.onTravel(Q.id);return}Ue(de.destination,`自动前往 ${Q.targetSceneName} · 预计 ${hr(de.distance,fe)} 大轮`),i.onAutoWalk(de.destination.x,de.destination.y,void 0,Q.id);return}const G=i.scene.entities.find(se=>se.x===U.x&&se.y===U.y);if(G===void 0)return;ie(),i.onSelectEntity(G.id);const we=di(i.scene,i.self,G);if(we.destination===null){Ue(U,"没有可抵达的路径");return}if(we.distance===0){Ue(U,"已经在可交互范围内");return}Ue(we.destination,`自动靠近 · 预计 ${hr(we.distance,fe)} 大轮`),i.onAutoWalk(we.destination.x,we.destination.y,G.id)},ye=M=>{const U=M.entity??M.player,Q=o.current,G=Q===null?{left:8,top:8}:Q.getBoundingClientRect();if(U===void 0)return{position:"fixed",left:8,top:8};const we=typeof window>"u"?1440:window.innerWidth,se=typeof window>"u"?900:window.innerHeight,de=G.left+U.x*ae+ae+12,Qe=G.top+U.y*ae-10;return{position:"fixed",left:Math.max(8,Math.min(we-310,de)),top:Math.max(8,Math.min(se-260,Qe))}};return l.jsxs("div",{className:"mapViewport",ref:u,"data-animating":F?"true":"false",onMouseEnter:me,onMouseLeave:()=>{w!==null?Le(800):ze()},children:[l.jsxs("div",{className:"mapCanvasWrap",style:{width:`${pe}px`,height:`${$}px`},children:[l.jsx("canvas",{ref:o,className:"sceneCanvas",onMouseMove:In,onClick:Tn,onDoubleClick:H,"aria-label":`${i.scene.name}瓦片地图。点击空地移动，点击实体查看互动，双击实体自动靠近。`,role:"img"}),p!==null&&w===null&&l.jsxs("div",{className:"mapTooltip",style:{left:Math.max(4,Math.min(pe-240,p.x*ae+ae+8)),top:Math.max(4,Math.min($-64,p.y*ae+8))},children:[l.jsx("strong",{children:p.label}),p.detail.length>0&&l.jsx("span",{children:p.detail})]}),w!==null&&l.jsxs("div",{className:"mapHoverCard",style:ye(w),onMouseEnter:me,onMouseLeave:()=>Le(700),children:[l.jsxs("div",{className:"mapHoverCardTop",children:[l.jsx("strong",{children:((ln=w.entity)==null?void 0:ln.name)??((Be=w.player)==null?void 0:Be.name)}),l.jsxs("div",{className:"mapHoverCardTags",children:[l.jsx(Je,{tone:w.isSelf?"good":"gold",children:w.isSelf?"你":w.kind==="player"?"同僚":Zf(((Dn=w.entity)==null?void 0:Dn.kind)??"prop")}),k(w)&&l.jsx("button",{type:"button",className:"mapHoverClose",onClick:ze,onMouseEnter:me,"aria-label":"关闭悬浮信息",children:"×"})]})]}),"                        ",w.player!==void 0&&l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"mapHoverOccupation",children:w.player.occupationName}),l.jsxs("div",{className:"mapHoverStats",children:[l.jsxs("span",{children:["攻击力"," ",l.jsx("strong",{children:w.player.attackPower})]}),l.jsxs("span",{children:["生命"," ",l.jsxs("strong",{children:[w.player.health,"/",w.player.maxHealth]})]}),l.jsxs("span",{children:["理智"," ",l.jsxs("strong",{children:[w.player.sanity,"/",w.player.maxSanity]})]})]})]}),w.entity!==void 0&&l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"mapHoverDescription",children:w.entity.description}),w.entity.health!==void 0&&w.entity.maxHealth!==void 0&&l.jsxs("div",{className:"mapHoverStats",children:[l.jsxs("span",{children:["生命"," ",l.jsxs("strong",{children:[w.entity.health,"/",w.entity.maxHealth]})]}),w.entity.hostile&&l.jsx("span",{className:"dangerText",children:"敌对"})]})]}),w.path!==void 0&&l.jsxs("p",{className:"mapHoverPath",children:[ne?"战斗中路径：":"最佳路径："," ",ne?`距离 ${w.path.distance} 格（每小轮最多 ${fr} 格）`:he(w.path,w.path.distance,w.rounds)]}),ne&&((Et=w.path)==null?void 0:Et.reached)===!0&&w.path.distance>0&&l.jsx("p",{className:"finePrint",children:"战斗中请在自己的回合点击地图移动。"}),k(w)&&l.jsxs("button",{type:"button",className:"smallButton mapHoverButton",onClick:()=>b(w),onMouseEnter:me,children:["自动行走（约 ",w.rounds??1," 大轮）"]}),((Wn=w.path)==null?void 0:Wn.reached)===!0&&w.path.distance===0&&l.jsx("p",{className:"finePrint",children:"已经在可交互范围内。"})]}),Z!==void 0&&l.jsxs("div",{className:"mapSelectionLabel",style:{left:Math.max(4,Math.min(pe-200,Z.x*ae)),top:Math.max(4,Z.y*ae-30)},children:[Z.name,W&&l.jsx("span",{className:"mapSelectionHint",children:"双击实体以靠近"})]}),I!==null&&l.jsx("div",{className:"mapActionFeedback",style:{left:I.x*ae+ae*.5,top:I.y*ae+ae*.15},children:I.text},I.id),K.map(M=>l.jsxs("div",{className:`healthFloater ${M.amount<0?"healthDamage":"healthHeal"}`,style:{left:M.x*ae+ae*.5,top:M.y*ae+ae*.05},children:[M.amount>0?"+":"",M.amount]},M.id))]}),l.jsxs("div",{className:"mapLegend",children:[l.jsx("span",{children:"■ 你"}),l.jsx("span",{children:"● 同僚"}),l.jsx("span",{children:"◆ 物品"}),l.jsx("span",{children:"☗ 人物"}),l.jsx("span",{children:"✹ 威胁"}),l.jsx("span",{children:"⇢ 出口"})]})]})}function Jf(i){if(i.hostile)return"敌对 · 可发起攻击";switch(i.kind){case"item":return"可以拾取";case"container":return"可以打开";case"npc":return"可以交谈或观察";case"clue":return"值得调查";default:return"可以观察"}}function Zf(i){switch(i){case"npc":return"人物";case"monster":return"威胁";case"item":return"物品";case"container":return"容器";case"clue":return"线索";default:return"物件"}}function eh(i,u,o,d){if(o===null||!o.reached||o.steps.length===0)return;const f=[{x:u.x,y:u.y},...o.steps].map(x=>({x:x.x*d+d*.5,y:x.y*d+d*.5}));i.save(),i.lineCap="round",i.lineJoin="round",i.strokeStyle="rgba(240, 213, 151, 0.22)",i.lineWidth=Math.max(3,d*.075),i.setLineDash([]),i.beginPath();const y=f[0];if(y!==void 0){i.moveTo(y.x,y.y);for(const x of f.slice(1))i.lineTo(x.x,x.y);i.stroke()}i.strokeStyle="rgba(240, 213, 151, 0.8)",i.lineWidth=Math.max(2,d*.04);for(let x=1;x<f.length;x+=1){const w=f[x-1],N=f[x];w===void 0||N===void 0||(i.setLineDash([d*.13,d*.09]),i.beginPath(),i.moveTo(w.x,w.y),i.lineTo(N.x,N.y),i.stroke())}i.setLineDash([]);for(const[x,w]of f.slice(1).entries()){const N=x===o.steps.length-1;i.fillStyle=N?"rgba(240, 213, 151, 0.98)":"rgba(240, 213, 151, 0.45)",i.beginPath(),i.arc(w.x,w.y,N?d*.14:d*.05,0,Math.PI*2),i.fill()}const p=f[f.length-1];p!==void 0&&(i.strokeStyle="rgba(240, 213, 151, 0.45)",i.lineWidth=Math.max(1,d*.03),i.beginPath(),i.arc(p.x,p.y,d*.24,0,Math.PI*2),i.stroke()),i.restore()}function nh(i,u,o){var d;for(let h=0;h<u.height;h+=1)for(let f=0;f<u.width;f+=1){const y=((d=u.rows[h])==null?void 0:d[f])??" ",p=u.legend[y],x=(p==null?void 0:p.color)??bf[(p==null?void 0:p.type)??"void"]??"#0e0c09";i.fillStyle=x,i.fillRect(f*o,h*o,o,o);const w=(p==null?void 0:p.type)??"void",N=fc(f,h);if(w==="floor"||w==="road"||w==="grass"){i.fillStyle="rgba(255,255,255,0.035)";for(let I=0;I<3;I+=1){const V=fc(f*7+I,h*13);i.fillRect(f*o+V%100*o*.01,h*o+(V>>3)%100*o*.01,Math.max(1,o*.03),Math.max(1,o*.03))}i.strokeStyle="rgba(0,0,0,0.14)",i.lineWidth=1,i.beginPath(),i.moveTo(f*o,h*o+o*.74),i.lineTo(f*o+o,h*o+o*.76),i.stroke()}if(w==="wall")i.fillStyle="rgba(255,255,255,0.055)",i.fillRect(f*o,h*o,o,Math.max(2,o*.08)),i.strokeStyle="rgba(0,0,0,0.3)",i.lineWidth=1,i.beginPath(),i.moveTo(f*o,h*o+o*.5),i.lineTo(f*o+o,h*o+o*.5),i.stroke(),i.beginPath(),i.moveTo(f*o+o*.5,h*o),i.lineTo(f*o+o*.5,h*o+o*.5),i.stroke();else if(w==="door")i.fillStyle="#3a2a1b",i.fillRect(f*o+o*.18,h*o+o*.1,o*.64,o*.8),i.strokeStyle="#b08a55",i.lineWidth=Math.max(1,o*.04),i.strokeRect(f*o+o*.18,h*o+o*.1,o*.64,o*.8),i.fillStyle="#d8b26a",i.beginPath(),i.arc(f*o+o*.68,h*o+o*.52,Math.max(1,o*.035),0,Math.PI*2),i.fill();else if(w==="tree")i.fillStyle="#1d2419",i.beginPath(),i.arc(f*o+o*.5,h*o+o*.42,o*.3,0,Math.PI*2),i.fill(),i.fillStyle="#3d2c1c",i.fillRect(f*o+o*.46,h*o+o*.55,o*.08,o*.3);else if(w==="water"){i.strokeStyle="rgba(170,210,215,0.28)",i.lineWidth=1;for(let I=0;I<3;I+=1)i.beginPath(),i.moveTo(f*o,h*o+o*(.3+I*.2)),i.quadraticCurveTo(f*o+o*.5,h*o+o*(.2+I*.2),f*o+o,h*o+o*(.3+I*.2)),i.stroke()}else w==="stone"?(i.fillStyle="rgba(0,0,0,0.2)",i.beginPath(),i.moveTo(f*o+o*.28,h*o+o*.82),i.lineTo(f*o+o*.2,h*o+o*.28),i.lineTo(f*o+o*.55,h*o+o*.12),i.lineTo(f*o+o*.82,h*o+o*.38),i.lineTo(f*o+o*.7,h*o+o*.82),i.closePath(),i.fill()):w==="ritual"&&(i.strokeStyle="rgba(160,80,90,0.55)",i.lineWidth=Math.max(1,o*.035),i.beginPath(),i.arc(f*o+o*.5,h*o+o*.5,o*.3,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(f*o+o*.5,h*o+o*.5,o*.16,0,Math.PI*2),i.stroke());w==="grass"&&N%3===0&&(i.strokeStyle="rgba(160,170,120,0.35)",i.beginPath(),i.moveTo(f*o+N%o,h*o+o*.8),i.lineTo(f*o+N%o+2,h*o+o*.55),i.stroke()),i.strokeStyle="rgba(0,0,0,0.2)",i.lineWidth=1,i.strokeRect(f*o+.5,h*o+.5,o-1,o-1)}}function th(i,u,o){for(const d of u.exits)i.save(),i.strokeStyle=d.available?"#d8b26a":"rgba(150,130,90,0.4)",i.lineWidth=Math.max(2,o*.05),i.setLineDash([o*.12,o*.1]),i.strokeRect(d.x*o+o*.12,d.y*o+o*.12,o*.76,o*.76),i.setLineDash([]),i.fillStyle=d.available?"#e7c784":"rgba(160,140,100,0.5)",i.font=`600 ${Math.max(16,o*.38)}px "Noto Serif SC", "Songti SC", serif`,i.textAlign="center",i.textBaseline="middle",i.fillText("⇢",d.x*o+o*.5,d.y*o+o*.5),i.restore()}function rh(i,u,o,d,h,f,y){for(const p of u.entities){const x=y.get(`entity:${p.id}`)??{x:p.x,y:p.y};p.x===o.x&&p.y===o.y||lh(i,p,d,p.id===h,f,x)}}function lh(i,u,o,d,h,f){const y=f.x*o+o*.5,p=f.y*o+o*.5,x=o*.31;if(i.save(),u.hostile){const w=i.createRadialGradient(y,p,1,y,p,o*.55);w.addColorStop(0,"rgba(150,40,40,0.35)"),w.addColorStop(1,"rgba(150,40,40,0)"),i.fillStyle=w,i.fillRect(f.x*o,f.y*o,o,o)}if(i.shadowColor=u.hostile?"rgba(200,60,50,0.7)":"rgba(0,0,0,0.55)",i.shadowBlur=d?o*.45:o*.2,u.kind==="item")i.fillStyle=u.color,i.beginPath(),i.moveTo(y,p-x),i.lineTo(y+x*.72,p),i.lineTo(y,p+x),i.lineTo(y-x*.72,p),i.closePath(),i.fill();else if(u.kind==="container")i.fillStyle=u.color,i.fillRect(y-x*.8,p-x*.55,x*1.6,x*1.1),i.strokeStyle="rgba(0,0,0,0.5)",i.strokeRect(y-x*.8,p-x*.55,x*1.6,x*1.1);else if(u.kind==="monster"){i.fillStyle="rgba(30,12,12,0.85)",i.beginPath();for(let w=0;w<10;w+=1){const N=Math.PI*2*w/10-Math.PI/2,I=w%2===0?x*1.15:x*.7,V=y+Math.cos(N)*I,K=p+Math.sin(N)*I;w===0?i.moveTo(V,K):i.lineTo(V,K)}i.closePath(),i.fill(),i.strokeStyle=u.color,i.lineWidth=Math.max(1.5,o*.04),i.stroke()}else i.fillStyle=u.kind==="npc"?"#2d261c":"#221d17",i.beginPath(),i.arc(y,p,x,0,Math.PI*2),i.fill(),i.strokeStyle=u.color,i.lineWidth=Math.max(1.5,o*.045),i.stroke();i.shadowBlur=0,i.fillStyle=u.color,i.font=`600 ${Math.max(16,o*.4)}px "Noto Serif SC", "Songti SC", serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(u.glyph,y,p+1),(d||h!==null&&h.x===u.x&&h.y===u.y)&&(i.strokeStyle="#f0d597",i.lineWidth=Math.max(2,o*.06),i.setLineDash([o*.12,o*.08]),i.beginPath(),i.arc(y,p,x+o*.09,0,Math.PI*2),i.stroke(),i.setLineDash([])),i.restore()}function ih(i,u,o,d,h){for(const f of u.players){const y=h.get(`player:${f.playerId}`)??{x:f.x,y:f.y},p=y.x*d+d*.5,x=y.y*d+d*.5,w=f.playerId===o.playerId,N=d*.28;i.save(),i.shadowColor=w?"rgba(120,220,200,0.7)":"rgba(0,0,0,0.6)",i.shadowBlur=d*.28,i.fillStyle=w?"#5fb7a5":f.alive?"#b9a67d":"#5b574f",i.beginPath(),i.arc(p,x,N,0,Math.PI*2),i.fill(),i.shadowBlur=0,i.strokeStyle=w?"#d8f5ec":"#2a2218",i.lineWidth=Math.max(1.5,d*.045),i.stroke(),i.fillStyle=w?"#0e1a17":"#1b1610",i.font=`700 ${Math.max(16,d*.32)}px "Noto Serif SC", "Songti SC", serif`,i.textAlign="center",i.textBaseline="middle";const I=[...f.name][0]??"?";i.fillText(I,p,x+1),sh(i,w?"你":f.name,p,w?x+N+d*.22:x-N-d*.22,d,w),i.restore()}}function sh(i,u,o,d,h,f){i.font=`600 ${Math.max(16,Math.min(18,h*.28))}px "Noto Serif SC", "Songti SC", serif`;const y=i.measureText(u),p=h*.1,x=y.width+p*2,w=Math.max(18,h*.34);i.fillStyle=f?"rgba(20,50,44,0.85)":"rgba(15,12,9,0.82)",i.fillRect(o-x/2,d-w/2,x,w),i.fillStyle=f?"#bff0e2":"#d8c9a8",i.textAlign="center",i.textBaseline="middle",i.fillText(u,o,d+1)}function ah(i,u,o,d){u!==null&&(u.x<0||u.y<0||u.x>=d.width||u.y>=d.height||(i.save(),i.strokeStyle="rgba(240,213,151,0.75)",i.lineWidth=2,i.setLineDash([o*.15,o*.1]),i.strokeRect(u.x*o+2,u.y*o+2,o-4,o-4),i.setLineDash([]),i.restore()))}function fc(i,u){let o=i*374761393+u*668265263;return o=(o^o>>13)*1274126177,Math.abs(o^o>>16)}function oh(i){var V,K;const u=i.scene,o=i.view.self,d=i.selectedEntity,h=o.inventory.filter(A=>A.template.weapon!==void 0),[f,y]=E.useState(""),p=d===null?0:Math.max(Math.abs(d.x-o.x),Math.abs(d.y-o.y)),x=i.view.combat!==null,w=h.find(A=>A.instanceId===f),N=o.character===null?0:ya(o.character.attributes.constitution),I=w===void 0?`1d3${N!==0?`（近战加成 ${N>0?"+":""}${N}）`:""}`:`${((V=w.template.weapon)==null?void 0:V.damage)??"1d3"}${((K=w.template.weapon)==null?void 0:K.range)==="melee"&&N!==0?`（近战加成 ${N>0?"+":""}${N}）`:""}`;return E.useEffect(()=>{f===""&&h[0]!==void 0&&y(h[0].instanceId)},[f,h]),l.jsxs("div",{className:"scenePanel",children:[d===null?l.jsxs("div",{className:"sceneOverview",children:[l.jsxs("div",{className:"sceneTitleRow",children:[l.jsx("h2",{children:u.name}),l.jsxs(Je,{children:[u.width," × ",u.height]})]}),l.jsx("p",{className:"sceneDescription",children:u.description}),u.ambient.length>0&&l.jsx("p",{className:"sceneAmbient",children:u.ambient}),l.jsx("p",{className:"finePrint",children:"点击地图空地移动，点击实体查看可执行的行动。"})]}):l.jsxs("div",{className:"entityFocus",children:[l.jsxs("div",{className:"entityHeader",children:[l.jsxs("div",{children:[l.jsxs("p",{className:"eyebrow",children:[uh(d.kind),d.hostile?" · 敌对":""]}),l.jsx("h2",{children:d.name})]}),l.jsx("button",{type:"button",className:"ghostButton",onClick:i.onClearSelection,children:"取消选中"})]}),l.jsx("p",{className:"sceneDescription",children:d.description}),d.health!==void 0&&d.maxHealth!==void 0&&l.jsxs("div",{className:"entityHealth",children:[l.jsx("span",{children:"生命"}),l.jsx("div",{className:"entityHealthBar",children:l.jsx("div",{style:{width:`${Math.round(d.health/Math.max(1,d.maxHealth)*100)}%`}})}),l.jsxs("span",{children:[d.health,"/",d.maxHealth]})]}),l.jsx("p",{className:"finePrint",children:p===0?"你就在这里。":p===1?"就在你旁边。":`距离 ${p} 格，需要先靠近。`}),x?l.jsx("p",{className:"dangerText",children:"战斗正在进行，请使用右侧战斗面板。"}):l.jsx("div",{className:"interactionGrid",children:d.interactions.map(A=>l.jsx(hc,{interaction:A,onClick:()=>i.onInteract(d.id,A.id)},A.id))}),d.attackable&&!x&&l.jsxs("div",{className:"attackBox",children:[l.jsxs("label",{className:"field compactField",children:[l.jsx("span",{children:"攻击武器"}),l.jsxs("select",{value:f,onChange:A=>y(A.target.value),children:[l.jsx("option",{value:"",children:"徒手（1d3）"}),h.map(A=>{var R;return l.jsxs("option",{value:A.instanceId,children:[A.template.name,"（",(R=A.template.weapon)==null?void 0:R.damage,"）"]},A.instanceId)})]})]}),l.jsx("button",{type:"button",className:"dangerButton",disabled:!o.alive||o.insane||o.statuses.some(A=>A.preventsActions===!0),onClick:()=>i.onAttack(d.id,f===""?void 0:f),children:"攻击"}),l.jsxs("p",{className:"finePrint",children:["预计伤害 ",I," · 攻击会进入战斗并按敏捷顺序行动。对方未必是敌人。"]})]})]}),!x&&u.actions.length>0&&l.jsxs("div",{className:"sceneActions",children:[l.jsx("h3",{children:"场景行动"}),l.jsx("div",{className:"interactionGrid",children:u.actions.map(A=>l.jsx(hc,{interaction:A,onClick:()=>i.onSceneAction(A.id)},A.id))})]}),l.jsxs("div",{className:"exitSection",children:[l.jsx("h3",{children:"出口"}),u.exits.length===0?l.jsx("p",{className:"finePrint",children:"这里没有明显的出口。"}):l.jsx("div",{className:"exitGrid",children:u.exits.map(A=>l.jsxs("button",{type:"button",className:"exitButton",disabled:!A.available||x,title:A.reason,onClick:()=>i.onTravel(A.id),children:[l.jsx("span",{children:A.label}),l.jsxs("small",{children:[A.targetSceneName," · ",A.cost," 大轮"]}),!A.available&&A.reason!==void 0&&l.jsx("small",{className:"exitReason",children:A.reason})]},A.id))})]}),u.players.length>1&&l.jsxs("div",{className:"nearbyPlayers",children:[l.jsx("h3",{children:"同一场景"}),u.players.map(A=>l.jsxs("span",{className:"nearbyPlayer",children:[A.playerId===o.playerId?"你":A.name,A.alive?"":"（倒下）"]},A.playerId))]})]})}function hc(i){return l.jsxs("button",{type:"button",className:"interactionButton",disabled:!i.interaction.available,title:i.interaction.reason,onClick:i.onClick,children:[l.jsx("span",{children:i.interaction.label}),l.jsxs("small",{children:[i.interaction.timeCost>0?`${i.interaction.timeCost} 大轮`:"即时",!i.interaction.available&&i.interaction.reason!==void 0?` · ${i.interaction.reason}`:""]})]})}function uh(i){switch(i){case"npc":return"人物";case"monster":return"威胁";case"item":return"物品";case"container":return"容器";case"clue":return"线索";default:return"场景物件"}}function ch(i){const u=i.view,o=u.self.character,d=E.useRef(null);return E.useEffect(()=>{var h;(h=d.current)==null||h.scrollTo({top:0})},[i.tab]),o===null?l.jsx(Bn,{title:"人物档案",children:l.jsx(zt,{text:"尚未建立角色。"})}):l.jsxs("div",{className:"sidePanel",children:[l.jsxs("nav",{className:"sideTabs","aria-label":"侧栏切换",children:[l.jsx("button",{type:"button",className:i.tab==="scene"?"sideTabActive":"",onClick:()=>i.onTabChange("scene"),children:"现场"}),l.jsx("button",{type:"button",className:i.tab==="sheet"?"sideTabActive":"",onClick:()=>i.onTabChange("sheet"),children:"档案"}),l.jsx("button",{type:"button",className:i.tab==="inventory"?"sideTabActive":"",onClick:()=>i.onTabChange("inventory"),children:"物品"}),l.jsx("button",{type:"button",className:i.tab==="journal"?"sideTabActive":"",onClick:()=>i.onTabChange("journal"),children:"笔记"}),l.jsx("button",{type:"button",className:i.tab==="players"?"sideTabActive":"",onClick:()=>i.onTabChange("players"),children:"同僚"})]}),l.jsxs("div",{className:"sideTabContent",ref:d,children:[i.tab==="scene"&&u.scene!==null&&l.jsx(oh,{view:u,scene:u.scene,selectedEntity:i.selectedEntity,onClearSelection:i.onClearSelection,onInteract:i.onInteract,onSceneAction:i.onSceneAction,onTravel:i.onTravel,onAttack:i.onAttack}),i.tab==="sheet"&&l.jsx(Bn,{title:"调查员档案",children:l.jsx(dh,{view:u,onRename:i.onRename})}),i.tab==="inventory"&&l.jsx(Bn,{title:"携带物品",aside:l.jsxs("span",{className:"panelAsideText",children:[ph(u)," / ",o.carryCapacity,"kg"]}),children:l.jsx(fh,{view:u,onUseItem:i.onUseItem,onDropItem:i.onDropItem,highlightedItemId:i.highlightedItemId})}),i.tab==="journal"&&l.jsx(Bn,{title:"调查笔记",aside:l.jsx("button",{type:"button",className:"smallButton",onClick:i.onNewNote,children:"新建笔记"}),children:l.jsx(hh,{view:u,onEditNote:i.onEditNote,onDeleteNote:i.onDeleteNote,onLinkClick:i.onLinkClick,highlightedNoteId:i.highlightedNoteId,highlightedClueId:i.highlightedClueId})}),i.tab==="players"&&l.jsx(Bn,{title:"同僚",children:l.jsx(mh,{view:u})})]})]})}function dh(i){const u=i.view.self,o=u.character,[d,h]=E.useState(!1),[f,y]=E.useState((o==null?void 0:o.name)??"");return o===null?l.jsx(zt,{text:"尚未建立角色。"}):l.jsxs("div",{className:"characterSheet",children:[l.jsxs("div",{className:"sheetIdentity",children:[d?l.jsxs("div",{className:"renameRow",children:[l.jsx("input",{value:f,onChange:p=>y(p.target.value),maxLength:24,autoFocus:!0}),l.jsx("button",{type:"button",className:"smallButton",onClick:()=>{i.onRename(f),h(!1)},children:"保存"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>{y(o.name),h(!1)},children:"取消"})]}):l.jsxs("div",{className:"sheetNameRow",children:[l.jsx("h3",{children:o.name}),l.jsx("button",{type:"button",className:"textButton",onClick:()=>{y(o.name),h(!0)},children:"改名"})]}),l.jsxs("p",{children:[o.occupationName," · 负重上限 ",o.carryCapacity,"kg · 移动"," ",o.movementAllowance," 格/大轮"]}),l.jsxs("p",{className:"sheetAttackPower",children:["攻击力 ",l.jsx("strong",{children:u.attackPower})]}),o.bio.length>0&&l.jsx("p",{className:"sheetBio",children:o.bio})]}),l.jsx(yr,{label:"生命",value:u.health,maximum:u.maxHealth,tone:"health"}),l.jsx(yr,{label:"理智",value:u.sanity,maximum:u.maxSanity,tone:"sanity"}),u.statuses.length>0&&l.jsxs("div",{className:"statusList",children:[l.jsx("h4",{children:"状态"}),u.statuses.map(p=>l.jsxs("div",{className:"statusItem",children:[l.jsx("strong",{children:p.name}),l.jsx("span",{children:p.description}),p.remainingBigRounds!==void 0&&l.jsxs(Je,{children:[p.remainingBigRounds," 大轮"]})]},p.id))]}),l.jsx("div",{className:"attributeGrid",children:Object.entries(o.attributes).map(([p,x])=>l.jsxs("div",{className:"attributeBox",children:[l.jsx("span",{children:pr[p]}),l.jsx("strong",{children:x})]},p))}),l.jsxs("div",{className:"skillSheet",children:[l.jsx("h4",{children:"技能"}),l.jsx("div",{className:"skillChips",children:Object.entries(o.skills).sort((p,x)=>x[1]-p[1]).map(([p,x])=>l.jsxs("span",{className:"skillChip",children:[ma(p)," ",x]},p))})]}),!u.alive&&l.jsx("p",{className:"dangerText",children:"你已经倒下，只能旁观调查的余波。"}),u.insane&&l.jsx("p",{className:"dangerText",children:"你的理智已经崩溃。"})]})}function fh(i){const u=i.view,o=u.combat!==null||!u.self.alive||u.self.insane||u.self.statuses.some(h=>h.preventsActions===!0),d=u.self.character===null?0:ya(u.self.character.attributes.constitution);return u.self.inventory.length===0?l.jsx(zt,{text:"你身上什么也没有。"}):l.jsx("div",{className:"inventoryList",children:u.self.inventory.map(h=>{var y,p;const f=h.template.weapon;return l.jsxs("article",{className:`inventoryItem ${i.highlightedItemId===h.template.id?"logTargetHighlighted":""}`,"data-log-item":h.template.id,children:[l.jsxs("div",{className:"inventoryItemTop",children:[l.jsx("strong",{children:h.template.name}),l.jsx("span",{children:h.quantity>1?`×${h.quantity}`:""})]}),l.jsx("p",{className:"inventoryDescription",children:h.template.description}),l.jsxs("div",{className:"inventoryMeta",children:[l.jsxs("span",{children:[h.totalWeight,"kg · ",h.template.slots," 格"]}),f!==void 0&&l.jsxs("span",{children:["伤害 ",f.damage,f.range==="melee"&&d!==0?`（近战加成 ${d>0?"+":""}${d}）`:""," · ",f.range==="melee"?"近战":"远程",f.capacity!==void 0?` · ${h.loaded??0}/${f.capacity} 发`:""]})]}),h.template.use!==void 0&&l.jsxs("p",{className:"inventoryUseCost",children:["使用消耗"," ",h.template.use.timeCost>0?`${h.template.use.timeCost} 大轮`:"即时",h.template.use.consume?" · 消耗品":"",h.template.use.heal!==void 0?` · 恢复 ${h.template.use.heal} 生命`:""]}),l.jsxs("div",{className:"inventoryActions",children:[h.template.usable&&l.jsxs("button",{type:"button",className:"smallButton",disabled:o,title:o?"战斗中请使用战斗面板":void 0,onClick:()=>i.onUseItem(h.instanceId),children:["使用（",((y=h.template.use)==null?void 0:y.timeCost)===0?"即时":`${((p=h.template.use)==null?void 0:p.timeCost)??1} 大轮`,"）"]}),l.jsx("button",{type:"button",className:"ghostButton",disabled:o,onClick:()=>i.onDropItem(h.instanceId),children:"丢掉"})]})]},h.instanceId)})})}function hh(i){return l.jsxs("div",{className:"journal",children:[l.jsxs("section",{children:[l.jsxs("h4",{children:["线索 · ",i.view.clues.length]}),i.view.clues.length===0&&l.jsx(zt,{text:"还没有找到值得记下的线索。"}),i.view.clues.map(u=>{var o;return l.jsxs("article",{className:`clueCard ${i.highlightedClueId===u.id?"logTargetHighlighted":""}`,"data-log-clue":u.id,children:[l.jsx("strong",{children:u.title}),l.jsx("p",{children:u.text}),l.jsx("div",{className:"linkChips",children:(o=u.links)==null?void 0:o.map(d=>l.jsx(mc,{link:d,onClick:i.onLinkClick},`${d.type}:${d.id}`))})]},u.id)})]}),l.jsxs("section",{children:[l.jsxs("h4",{children:["笔记 · ",i.view.notes.length]}),i.view.notes.length===0&&l.jsx(zt,{text:"你自己的推断、疑点和人名都可以记在这里。"}),i.view.notes.map(u=>l.jsxs("article",{className:`noteCard ${i.highlightedNoteId===u.id?"logTargetHighlighted":""}`,"data-log-note":u.id,children:[l.jsxs("div",{className:"noteCardTop",children:[l.jsx("strong",{children:u.title}),l.jsxs("span",{children:["第 ",u.updatedAtRound," 大轮"]})]}),l.jsx("p",{className:"noteContent",children:u.content}),l.jsx("div",{className:"linkChips",children:u.links.map(o=>l.jsx(mc,{link:o,onClick:i.onLinkClick},`${o.type}:${o.id}`))}),l.jsxs("div",{className:"noteActions",children:[l.jsx("button",{type:"button",className:"smallButton",onClick:()=>i.onEditNote(u),children:"编辑"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>i.onDeleteNote(u.id),children:"删除"})]})]},u.id))]})]})}function mc(i){const u={scene:"场景",entity:"实体",item:"物品"};return l.jsxs("button",{type:"button",className:"linkChip",onClick:()=>i.onClick(i.link),children:[u[i.link.type]," · ",i.link.label]})}function mh(i){var u,o;return l.jsxs("div",{className:"playersList",children:[l.jsxs("article",{className:"playerCard selfPlayer",children:[l.jsxs("div",{children:[l.jsx("strong",{children:((u=i.view.self.character)==null?void 0:u.name)??"你"}),l.jsx("span",{children:(o=i.view.self.character)==null?void 0:o.occupationName})]}),l.jsx(Je,{tone:"gold",children:"你"}),l.jsxs("p",{className:"finePrint",children:["攻击力 ",i.view.self.attackPower]}),l.jsx(yr,{label:"生命",value:i.view.self.health,maximum:i.view.self.maxHealth,tone:"health"}),l.jsx(yr,{label:"理智",value:i.view.self.sanity,maximum:i.view.self.maxSanity,tone:"sanity"})]}),i.view.players.map(d=>l.jsxs("article",{className:"playerCard",children:[l.jsxs("div",{children:[l.jsx("strong",{children:d.name}),l.jsx("span",{children:d.occupationName})]}),l.jsx(Je,{tone:d.connected?"good":"danger",children:d.connected?"在线":"掉线"}),l.jsxs("p",{className:"finePrint",children:["攻击力 ",d.attackPower," · 生命 ",d.health,"/",d.maxHealth," · 理智 ",d.sanity,"/",d.maxSanity]}),d.alive?l.jsx("p",{className:"finePrint",children:d.inSameScene?"在同一场景":"在别处"}):l.jsx("p",{className:"dangerText",children:"已经倒下"})]},d.playerId))]})}function ph(i){return Math.round(i.self.inventory.reduce((u,o)=>u+o.totalWeight,0)*100)/100}function yh(i){var Le,ze,In,Ue,Tn,b;const u=i.view,[o,d]=E.useState(null),[h,f]=E.useState("scene"),[y,p]=E.useState(null),[x,w]=E.useState(null),[N,I]=E.useState(!1),[V,K]=E.useState(null),[A,R]=E.useState(0),[_,ce]=E.useState(An.muted),[te,Ce]=E.useState(null),[Se,ke]=E.useState(null),[Te,P]=E.useState(null),F=E.useRef({bigRound:u.round.bigRound,smallRound:u.round.smallRound}),ge=E.useRef(u.self.health),ne=E.useRef(((Le=u.ending)==null?void 0:Le.id)??null),Ne=E.useRef(((ze=u.log.at(-1))==null?void 0:ze.id)??null),fe=E.useRef(null),Pe=E.useRef(null),Ie=E.useRef(null),qe=k=>{d(k),k!==null&&f("scene")},ae=k=>{fe.current=k,Pe.current=null,Ie.current!==null&&window.clearTimeout(Ie.current),Ie.current=window.setTimeout(()=>{fe.current=null,Pe.current=null,Ie.current=null},5e3)},pe=k=>{Pe.current=k,fe.current=null,Ie.current!==null&&window.clearTimeout(Ie.current),Ie.current=window.setTimeout(()=>{fe.current=null,Pe.current=null,Ie.current=null},5e3)},$=()=>{fe.current=null,Pe.current=null,Ie.current!==null&&(window.clearTimeout(Ie.current),Ie.current=null)};E.useEffect(()=>{if(u.scene===null)return;const k=Pe.current;if(k!==null){const Ee=u.scene.exits.find(Be=>Be.id===k),ln=Ee===void 0?Number.POSITIVE_INFINITY:Math.max(Math.abs(Ee.x-u.self.x),Math.abs(Ee.y-u.self.y));if(Ee!==void 0&&ln<=1){if($(),!Ee.available){w(Ee.reason??"这条路暂时不可用。");return}i.onSend({type:"travel",exitId:k})}else $();return}const H=fe.current;if(H===null)return;const ye=u.scene.entities.find(Ee=>Ee.id===H);if(ye===void 0){$();return}Math.max(Math.abs(ye.x-u.self.x),Math.abs(ye.y-u.self.y))<=1&&qe(H),$()},[u.self.x,u.self.y,(In=u.scene)==null?void 0:In.id]),E.useEffect(()=>()=>{Ie.current!==null&&window.clearTimeout(Ie.current)},[]),E.useEffect(()=>{var H;if(o===null)return;((H=u.scene)==null?void 0:H.entities.some(ye=>ye.id===o))!==!0&&d(null)},[o,u.scene]),E.useEffect(()=>{if(x===null)return;const k=window.setTimeout(()=>{w(null)},3200);return()=>{window.clearTimeout(k)}},[x]),E.useEffect(()=>{const k=F.current,H=u.round.bigRound-k.bigRound,ye=u.round.smallRound-k.smallRound;if(F.current={bigRound:u.round.bigRound,smallRound:u.round.smallRound},H<=0&&ye<=0)return;const xe=H>0?`时间流逝 +${H} 大轮`:`时间流逝 +${ye} 小轮`;K(xe),R(ln=>ln+1),An.play("time");const Ee=window.setTimeout(()=>{K(null)},1800);return()=>{window.clearTimeout(Ee)}},[u.round.bigRound,u.round.smallRound]),E.useEffect(()=>{const k=ge.current;ge.current=u.self.health,u.self.health<k?An.play("damage"):u.self.health>k&&An.play("heal")},[u.self.health]),E.useEffect(()=>{var H;const k=((H=u.ending)==null?void 0:H.id)??null;k!==null&&k!==ne.current&&An.play("ending"),ne.current=k},[(Ue=u.ending)==null?void 0:Ue.id]),E.useEffect(()=>{const k=u.log.at(-1);k===void 0||k.id===Ne.current||(Ne.current=k.id,k.kind==="check"?An.play(k.tone==="good"?"checkSuccess":"checkFailure"):k.kind==="clue"&&An.play("clue"))},[u.log]);const Z=()=>{ce(An.toggle())},W=k=>{const H=u.scene;if(H===null)return;if(Ce(null),ke(null),P(null),k.type==="scene"){H.id===k.id?(f("scene"),d(null)):w(`“${k.label}”不在当前场景。`);return}if(k.type==="entity"){const xe=H.entities.find(Ee=>Ee.id===k.id);if(xe===void 0){w(`“${k.label}”不在当前场景，或已经离开。`);return}qe(xe.id);return}if(k.type==="item"){const xe=u.self.inventory.find(Ee=>Ee.template.id===k.id);f("inventory"),Ce(k.id),xe===void 0&&w(`“${k.label}”已经不在背包中。`);return}if(k.type==="note"){const xe=u.notes.find(Ee=>Ee.id===k.id);if(f("journal"),xe===void 0){w("这条笔记已经被删除。");return}ke(k.id);return}const ye=u.clues.find(xe=>xe.id===k.id);if(f("journal"),ye===void 0){w("这条线索已经不在线索簿中。");return}P(k.id)};if(E.useEffect(()=>{const k=te!==null?{attribute:"data-log-item",id:te}:Se!==null?{attribute:"data-log-note",id:Se}:Te!==null?{attribute:"data-log-clue",id:Te}:null;if(k===null)return;const H=window.setTimeout(()=>{Ce(null),ke(null),P(null)},2600),ye=window.requestAnimationFrame(()=>{const xe=Array.from(document.querySelectorAll(`[${k.attribute}]`)).find(Ee=>Ee.getAttribute(k.attribute)===k.id);xe==null||xe.scrollIntoView({block:"center",behavior:"smooth"})});return()=>{window.clearTimeout(H),window.cancelAnimationFrame(ye)}},[te,Se,Te]),u.scene===null)return l.jsx("div",{className:"gameScreen",children:l.jsx("p",{children:"场景加载失败。"})});const j=u.scene,L=j.entities.find(k=>k.id===o)??null,ie=u.round.deadline===null?null:u.round.deadline.bigRound-u.round.bigRound,oe=k=>{i.onSend({type:"combatAction",action:k.action,targetEntityId:k.action==="attack"?k.targetEntityId:void 0,itemInstanceId:k.action==="useItem"||k.action==="reload"||k.action==="attack"?k.itemInstanceId:void 0})},he=k=>{y!==null&&(y.note===null?i.onSend({type:"noteCreate",note:k}):i.onSend({type:"noteUpdate",noteId:y.note.id,note:k}),p(null))},ve=k=>{window.confirm("确定删除这条笔记吗？")&&i.onSend({type:"noteDelete",noteId:k})},_e=k=>{if(k.type==="item"){f("inventory");return}if(k.type==="scene"){k.id===j.id?(d(null),w(`你正在${k.label}。`)):w(`“${k.label}”不在当前场景。`);return}const H=j.entities.find(ye=>ye.id===k.id);H!==void 0?qe(H.id):w(`“${k.label}”不在这里，或者你还没有发现它。`)},me=()=>{window.confirm("确定要离开这场调查吗？你的角色会从房间中移除。")&&i.onLeave()};return l.jsxs("div",{className:"gameScreen",children:[l.jsxs("header",{className:"gameTopbar",children:[l.jsxs("div",{className:"gameTopbarLeft",children:[l.jsxs("p",{className:"eyebrow",children:["ROOM ",u.room.code]}),l.jsx("h1",{children:j.name})]}),l.jsxs("div",{className:"gameTopbarCenter",children:[l.jsxs("div",{className:`clockBlock ${V!==null?"clockAdvance":""}`,children:[l.jsx("span",{children:"调查内时间"}),l.jsx("strong",{children:u.round.clock}),l.jsx("span",{className:`timeFlowBadge ${V===null?"timeFlowIdle":""}`,children:V??" "}),V!==null&&l.jsx("span",{className:"clockSweep","aria-hidden":"true"})]},A),l.jsxs("div",{className:"roundBlock",children:[l.jsxs("span",{children:["大轮 ",l.jsx("strong",{children:u.round.bigRound})]}),l.jsxs("span",{children:["小轮 ",l.jsx("strong",{children:u.round.smallRound})]}),ie!==null&&l.jsx("span",{className:ie<=5?"deadlineUrgent":"deadlineNormal",children:ie>0?`距${((Tn=u.round.deadline)==null?void 0:Tn.label)??"时限"} ${ie} 大轮`:`${((b=u.round.deadline)==null?void 0:b.label)??"时限"}已至`})]})]}),l.jsxs("div",{className:"gameTopbarRight",children:[l.jsx(Je,{tone:u.combat!==null?"danger":"gold",children:u.combat!==null?"战斗中":"调查中"}),l.jsxs("span",{className:"topbarPlayers",children:[u.players.length+1," 名调查员"]}),l.jsxs("span",{className:"topbarDamage",title:"当前最高伤害武器",children:["伤害 ",u.self.attackPower]}),u.cheats.canControl&&l.jsx("button",{type:"button",className:`ghostButton cheatToggle ${u.cheats.enabled?"cheatToggleActive":""}`,onClick:()=>I(k=>!k),"aria-pressed":N,title:"作弊 / 调试",children:"作弊"}),l.jsx("button",{type:"button",className:"ghostButton soundToggle",onClick:Z,"aria-pressed":!_,title:_?"开启音效":"关闭音效",children:_?"音效 关":"音效 开"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:me,children:"离开"})]})]}),!u.self.alive&&l.jsx("div",{className:"playerStateBanner",children:"你已经倒下。同僚还在继续调查，但你已经无法行动或发言。"}),u.self.insane&&u.self.alive&&l.jsx("div",{className:"playerStateBanner",children:"你的理智已经崩溃。世界在你眼中变成了另一种形状。"}),x!==null&&l.jsx("div",{className:"inlineNotice",children:x}),N&&u.cheats.canControl&&l.jsx(qf,{cheats:u.cheats,onToggle:(k,H)=>i.onSend({type:"cheat",action:"set",toggle:k,enabled:H}),onUtility:k=>i.onSend({type:"cheat",action:k}),onGiveItem:k=>i.onSend({type:"cheat",action:"giveItem",itemId:k}),onClose:()=>I(!1)}),l.jsx(Ff,{inventory:u.self.inventory}),l.jsx(Wf,{notes:u.notes}),l.jsxs("div",{className:"gameBody",children:[l.jsx("div",{className:"gameMapColumn",children:l.jsx("div",{className:"mapFrame",children:l.jsx(Xf,{scene:j,self:u.self,combat:u.combat,selectedEntityId:o,onSelectEntity:qe,onMove:(k,H)=>i.onSend({type:"move",x:k,y:H}),onAutoWalk:(k,H,ye,xe)=>{xe!==void 0?pe(xe):ye!==void 0?ae(ye):$(),i.onSend({type:"autoMove",x:k,y:H})},onTravel:k=>i.onSend({type:"travel",exitId:k}),onCombatMove:(k,H)=>i.onSend({type:"combatMove",x:k,y:H})})})}),l.jsxs("aside",{className:"gameSideColumn",children:[u.combat!==null&&l.jsx(Df,{combat:u.combat,view:u,entities:j.entities,onAction:oe}),l.jsx(ch,{view:u,tab:h,selectedEntity:L,onTabChange:f,onClearSelection:()=>d(null),onInteract:(k,H)=>i.onSend({type:"interact",entityId:k,interactionId:H}),onSceneAction:k=>i.onSend({type:"sceneAction",interactionId:k}),onTravel:k=>i.onSend({type:"travel",exitId:k}),onAttack:(k,H)=>i.onSend({type:"attack",targetEntityId:k,weaponInstanceId:H}),onUseItem:k=>i.onSend({type:"useItem",itemInstanceId:k}),onDropItem:k=>i.onSend({type:"dropItem",itemInstanceId:k}),onRename:k=>i.onSend({type:"renameCharacter",name:k}),onNewNote:()=>p({note:null}),onEditNote:k=>p({note:k}),onDeleteNote:ve,onLinkClick:_e,highlightedItemId:te,highlightedNoteId:Se,highlightedClueId:Te})]})]}),l.jsx(Hf,{view:u,onChat:k=>i.onSend({type:"chat",text:k}),onLinkClick:W}),u.dialogue!==null&&l.jsx(Of,{dialogue:u.dialogue,onChoose:k=>i.onSend({type:"dialogueChoice",optionId:k}),onClose:()=>i.onSend({type:"closeDialogue"})}),y!==null&&l.jsx(Vf,{initial:y.note,targets:u.knownLinkTargets,onSave:he,onClose:()=>p(null)}),u.ending!==null&&l.jsx($f,{ending:u.ending,self:u.self,onLeave:i.onLeave})]})}function pc(i){const u=i.replace(/^#\/?/,"").replace(/\/+$/,"");if(u===""||u==="landing")return{name:"landing"};if(u==="lobby")return{name:"lobby"};if(u==="guide")return{name:"guide"};if(u==="admin")return{name:"admin"};if(u==="room"||u.startsWith("room/")){const o=u.slice(4).replace(/^\/+/,"");let d=o;if(d.length>0)try{d=decodeURIComponent(o)}catch{d=""}return{name:"room",code:d.length>0?d:void 0}}return{name:"landing"}}function gh(i){return i.name==="landing"?"#/":i.name==="room"?i.code===void 0?"#/room":`#/room/${encodeURIComponent(i.code)}`:`#/${i.name}`}function vh(){const[i,u]=E.useState(()=>typeof window>"u"?{name:"landing"}:pc(window.location.hash));E.useEffect(()=>{const d=()=>{u(pc(window.location.hash))};return window.addEventListener("hashchange",d),()=>{window.removeEventListener("hashchange",d)}},[]);const o=E.useCallback((d,h={})=>{if(typeof window>"u")return;const f=gh(d);if(window.location.hash===f){u(d);return}h.replace===!0?window.history.replaceState(null,"",f):window.location.hash=f,u(d)},[]);return{route:i,navigate:o}}function xh(i){const u=i.status==="connecting"||i.status==="open",o=ha.test(i.playerId),d=o&&(i.mode==="local"||i.remoteUrl.length>0);return l.jsxs("div",{className:"landing",children:[l.jsx("div",{className:"landingNoise","aria-hidden":"true"}),l.jsxs("div",{className:"landingContent",children:[l.jsxs("div",{className:"titleBlock",children:[l.jsx("p",{className:"eyebrow",children:"A SCRIPTED INVESTIGATION"}),l.jsxs("h1",{children:["敦威治",l.jsx("span",{children:"低语"})]}),l.jsx("p",{className:"subtitle",children:"THE DUNWICH WHISPER"}),l.jsx("p",{className:"landingLead",children:"一封来自米斯卡托尼克大学的短笺，把你们带进了马萨诸塞州的山谷。 午夜之前，找到该找的东西，或者永远留在雾里。"})]}),l.jsxs("div",{className:"landingGrid",children:[l.jsxs("section",{className:"landingCard",children:[l.jsx("h2",{children:"接入调查局"}),l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"玩家 ID"}),l.jsx("input",{value:i.playerId,onChange:h=>i.onPlayerIdChange(h.target.value),placeholder:"例如：river_elder",maxLength:24,autoComplete:"off",spellCheck:!1}),l.jsx("small",{className:o?"fieldHint":"fieldHint fieldHintBad",children:"仅用于区分玩家，字符限字母、数字与下划线。调查员的名字可以在角色卡里另行填写。"})]}),l.jsxs("div",{className:"modeSwitch",role:"tablist","aria-label":"连接方式",children:[l.jsxs("button",{type:"button",role:"tab","aria-selected":i.mode==="local",className:i.mode==="local"?"modeActive":"",onClick:()=>i.onModeChange("local"),children:[l.jsx("strong",{children:"本地调查局"}),l.jsx("span",{children:"WebWorker · 无需服务器"})]}),l.jsxs("button",{type:"button",role:"tab","aria-selected":i.mode==="remote",className:i.mode==="remote"?"modeActive":"",onClick:()=>i.onModeChange("remote"),children:[l.jsx("strong",{children:"远程服务器"}),l.jsx("span",{children:"多人 · WebSocket"})]})]}),i.mode==="remote"&&l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"服务器 WebSocket 地址"}),l.jsx("input",{value:i.remoteUrl,onChange:h=>i.onRemoteUrlChange(h.target.value),placeholder:"ws://当前页面域名/ws",spellCheck:!1})]}),i.fatal!==null&&l.jsxs("div",{className:"fatalBox",role:"alert",children:[l.jsx("p",{children:i.fatal}),l.jsx("button",{type:"button",className:"ghostButton",onClick:i.onDismissFatal,children:"知道了"})]}),l.jsx("button",{type:"button",className:"primaryButton landingConnect",disabled:!d||u,onClick:i.onConnect,children:u?"正在接线……":"进入调查"}),l.jsx("p",{className:"finePrint",children:"本地模式会在当前浏览器标签页内运行完整服务端；关闭标签页即结束调查。"})]}),l.jsxs("aside",{className:"landingAside",children:[l.jsxs("div",{className:"sigil","aria-hidden":"true",children:[l.jsx("span",{children:"◎"}),l.jsx("span",{children:"✶"}),l.jsx("span",{children:"◎"})]}),l.jsx("h2",{children:"调查须知"}),l.jsxs("ul",{children:[l.jsx("li",{children:"每名玩家只能看见自己所在的场景。"}),l.jsx("li",{children:"一个大轮约六分钟。五次小轮会推动一个大轮。"}),l.jsx("li",{children:"检定使用 D100 与 COC 成功等级。"}),l.jsx("li",{children:"没有阵营，只有各自愿意相信的东西。"}),l.jsx("li",{children:"笔记与线索保存在服务端，只有你能阅读。"})]}),l.jsx("p",{className:"quote",children:"“最古老、最强烈的恐惧，是对未知的恐惧。”"})]})]})]})]})}function wh(i){const[u,o]=E.useState(!1),[d,h]=E.useState("我的剧本"),[f,y]=E.useState(""),[p,x]=E.useState(""),[w,N]=E.useState(null),I=E.useRef(null),V=ha.test(i.playerId),K=async _=>{const ce=await _.text();y(ce),d==="我的剧本"&&h(_.name.replace(/\.js$/i,""))},A=()=>{if(f.trim().length===0){N("剧本源码不能为空。");return}N(null),i.onUploadScript(d.trim()||"未命名剧本",f),o(!1)},R=_=>{const ce=window.localStorage.getItem(`dunwich-token:${_}:${i.playerId}`);i.onJoinRoom(_,ce??void 0)};return l.jsxs("div",{className:"lobbyBrowser",children:[l.jsxs("header",{className:"topBanner",children:[l.jsxs("div",{children:[l.jsx("p",{className:"eyebrow",children:"INVESTIGATION BUREAU"}),l.jsx("h1",{children:"调查局前厅"}),l.jsx("p",{className:"serverLabel",children:i.serverLabel})]}),l.jsxs("div",{className:"topBannerActions",children:[l.jsx("button",{type:"button",className:"ghostButton",onClick:i.onRefresh,children:"刷新"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:i.onDisconnect,children:"断开连接"})]})]}),l.jsxs("div",{className:"browserGrid",children:[l.jsx("div",{className:"browserMain",children:l.jsxs(Bn,{title:"可载入的剧本",aside:l.jsx("button",{type:"button",className:"smallButton",onClick:()=>o(!0),children:"上传 JS 剧本"}),children:[l.jsxs("label",{className:"field compactField",children:[l.jsx("span",{children:"本次调查使用的玩家 ID"}),l.jsx("input",{value:i.playerId,onChange:_=>i.onPlayerIdChange(_.target.value),maxLength:24,spellCheck:!1}),l.jsx("small",{className:V?"fieldHint":"fieldHint fieldHintBad",children:"需要与同一房间中的其他玩家不同。"})]}),i.scripts.length===0?l.jsx(zt,{text:"这个调查局还没有任何剧本。"}):l.jsx("div",{className:"scriptList",children:i.scripts.map(_=>l.jsxs("article",{className:"scriptCard",children:[l.jsxs("div",{className:"scriptCardTop",children:[l.jsxs("div",{children:[l.jsx("h3",{children:_.title}),l.jsxs("p",{className:"scriptMeta",children:[_.author," · v",_.version,_.builtin?l.jsx(Je,{tone:"gold",children:"内置"}):l.jsx(Je,{children:"缓存"})]})]}),l.jsxs("span",{className:"scriptCapacity",children:[_.minPlayers,"–",_.maxPlayers," 人"]})]}),l.jsx("p",{className:"scriptDescription",children:_.description}),l.jsxs("div",{className:"scriptFooter",children:[l.jsxs("span",{children:[_.sceneCount," 个场景 · ",_.endingCount," 个结局"]}),l.jsx("button",{type:"button",className:"primaryButton smallButton",disabled:!V,onClick:()=>i.onCreateRoom(_.id),children:"发起调查"})]})]},_.id))})]})}),l.jsxs("aside",{className:"browserAside",children:[l.jsxs(Bn,{title:"正在进行的调查",children:[i.rooms.length===0?l.jsx(zt,{text:"还没有人点起灯。"}):l.jsx("div",{className:"roomList",children:i.rooms.map(_=>{const ce=window.localStorage.getItem(`dunwich-token:${_.code}:${i.playerId}`),te=_.phase==="lobby",Ce=_.phase!=="lobby"&&ce!==null;return l.jsxs("article",{className:"roomCard",children:[l.jsxs("div",{className:"roomCardTop",children:[l.jsx("strong",{className:"roomCode",children:_.code}),l.jsx(Je,{tone:_.phase==="lobby"?"good":_.phase==="ended"?"default":"gold",children:_.phase==="lobby"?"等待调查员":_.phase==="ended"?"已结束":"调查中"})]}),l.jsx("p",{children:_.scriptTitle}),l.jsxs("p",{className:"roomMeta",children:[_.playerCount,"/",_.maxPlayers," 人 · 发起者"," ",_.hostPlayerId]}),l.jsx("button",{type:"button",className:"smallButton",disabled:!V||!te&&!Ce,onClick:()=>R(_.code),children:te?"加入":Ce?"重连":"无法加入"})]},_.code)})}),l.jsxs("div",{className:"joinByCode",children:[l.jsxs("label",{className:"field compactField",children:[l.jsx("span",{children:"房间码"}),l.jsx("input",{value:p,onChange:_=>x(_.target.value.toUpperCase()),maxLength:8,placeholder:"例如 A7K2Q9",spellCheck:!1})]}),l.jsx("button",{type:"button",className:"ghostButton",disabled:!V||p.trim().length<4,onClick:()=>R(p.trim()),children:"凭房间码加入"})]})]}),l.jsxs(Bn,{title:"调查局规矩",children:[l.jsxs("ul",{className:"ruleList",children:[l.jsx("li",{children:"角色名字与玩家 ID 是两回事，角色可以在调查中改名。"}),l.jsx("li",{children:"每名玩家只能看见自己所在的场景。"}),l.jsx("li",{children:"笔记仅保存在服务端，不会同步给其他玩家。"}),l.jsx("li",{children:"上传的 JS 剧本会在服务端执行，请只运行你信任的剧本。"})]}),l.jsxs("p",{className:"finePrint",children:["剧本编写接口见项目文档 ",l.jsx("code",{children:"docs/SCRIPT_API.md"}),"。"]})]})]})]}),u&&l.jsxs(pa,{title:"上传 JS 剧本",wide:!0,onClose:()=>o(!1),children:[l.jsxs("p",{className:"modalLead",children:["剧本必须导出对象：",l.jsxs("code",{children:["module.exports = ","{ ... }"]})," 或"," ",l.jsxs("code",{children:["export default ","{ ... }"]}),"。函数与钩子会随剧本一起载入。"]}),l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"剧本名称"}),l.jsx("input",{value:d,onChange:_=>h(_.target.value)})]}),l.jsxs("div",{className:"uploadActions",children:[l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>{var _;return(_=I.current)==null?void 0:_.click()},children:"选择 .js 文件"}),l.jsx("input",{ref:I,type:"file",accept:".js,text/javascript",hidden:!0,onChange:_=>{var te;const ce=(te=_.target.files)==null?void 0:te[0];ce!==void 0&&K(ce)}}),l.jsx("span",{className:"finePrint",children:"文件不会离开当前调查局。"})]}),l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"源码"}),l.jsx("textarea",{className:"codeInput",value:f,onChange:_=>y(_.target.value),placeholder:`module.exports = {
    id: 'my-script',
    title: '我的剧本',
    // ...
};`,spellCheck:!1})]}),w!==null&&l.jsx("p",{className:"formError",children:w}),l.jsxs("div",{className:"modalFooter",children:[l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>o(!1),children:"取消"}),l.jsx("button",{type:"button",className:"primaryButton",onClick:A,children:"校验并载入"})]})]}),i.inRoom&&l.jsx("button",{type:"button",className:"returnRoomButton",onClick:i.onLeaveRoom,children:"返回当前房间"})]})}const jh="dunwich-character-presets:v1:";function Sc(i){return`${jh}${i}`}function Sh(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`preset-${Date.now()}-${Math.random().toString(36).slice(2)}`}function yc(i){if(typeof window>"u")return[];try{const u=window.localStorage.getItem(Sc(i));if(u===null)return[];const o=JSON.parse(u);return Array.isArray(o)?o.filter(d=>typeof d=="object"&&d!==null&&"id"in d&&typeof d.id=="string"&&"scriptId"in d&&d.scriptId===i&&"allocation"in d&&typeof d.allocation=="object"&&d.allocation!==null&&"occupationId"in d&&typeof d.occupationId=="string"&&"itemChoices"in d&&Array.isArray(d.itemChoices)).map(d=>({...d,name:d.name||"未命名预设",characterName:d.characterName||"",bio:d.bio||"",itemChoices:d.itemChoices.filter(h=>typeof h=="string")})):[]}catch{return[]}}function kh(i,u){typeof window>"u"||window.localStorage.setItem(Sc(i),JSON.stringify(u))}function Nh(i,u,o){const d=new Date().toISOString();return{id:Sh(),name:o.name.trim()||o.characterName.trim()||"未命名预设",scriptId:i,scriptVersion:u,characterName:o.characterName.trim(),occupationId:o.occupationId,allocation:{...o.allocation},bio:o.bio,itemChoices:[...o.itemChoices],createdAt:d,updatedAt:d}}function Ch(i){var In,Ue,Tn;const u=i.creation.occupations.find(b=>{var k;return b.id===((k=i.initialCharacter)==null?void 0:k.occupationId)})??i.creation.occupations[0],[o,d]=E.useState((u==null?void 0:u.id)??""),[h,f]=E.useState(((In=i.initialCharacter)==null?void 0:In.name)??""),[y,p]=E.useState(((Ue=i.initialCharacter)==null?void 0:Ue.bio)??""),[x,w]=E.useState(()=>Eh(i)),[N,I]=E.useState(()=>Ih(i,u??null)),[V,K]=E.useState(null),[A,R]=E.useState(()=>yc(i.creation.scriptId)),[_,ce]=E.useState(""),[te,Ce]=E.useState(((Tn=i.initialCharacter)==null?void 0:Tn.name)??""),[Se,ke]=E.useState(null),[Te,P]=E.useState(null);E.useEffect(()=>{R(yc(i.creation.scriptId)),ce(""),ke(null),P(null)},[i.creation.scriptId]);const F=A.find(b=>b.id===_)??null,ge=F!==null&&F.scriptVersion!==i.creation.scriptVersion,ne=i.creation.occupations.find(b=>b.id===o)??i.creation.occupations[0]??null,Ne=E.useMemo(()=>new Map(i.creation.items.map(b=>[b.id,b])),[i.creation.items]),fe=ne?Bf(x,ne,i.creation.rules):Ct(),Pe=Xn.reduce((b,k)=>b+x[k],0),Ie=i.creation.rules.pool-Pe,qe=ne?Math.round((i.creation.carryBase+fe.constitution*i.creation.carryPerConstitution+(ne.carryBonus??0))*10)/10:0,ae=ne?[...i.creation.commonItems,...ne.startingItems]:[...i.creation.commonItems],pe=Ph(ae,N,Ne),$=pe.slots>i.creation.itemSlotLimit,Z=pe.weight>qe,W=b=>{d(b.id),w(kc(i.creation,b)),I([]),K(null)},j=(b,k,H)=>{var ln;if(ne===null)return;const ye=((ln=ne.attributeBonuses)==null?void 0:ln[b])??0,xe=Math.max(0,i.creation.rules.max-i.creation.rules.base-ye),Ee=H?10:1;w(Be=>{const Dn=Xn.reduce((Wn,M)=>Wn+Be[M],0),Et=i.creation.rules.pool-Dn;if(k>0){const Wn=Math.min(xe-Be[b],Et);return Wn<=0?Be:{...Be,[b]:Be[b]+Math.min(Ee,Wn)}}return Be[b]<=0?Be:{...Be,[b]:Math.max(0,Be[b]-Math.min(Ee,Be[b]))}}),K(null)},L=()=>{var ye;if(ne===null)return;const b=new Map;for(const xe of Xn){const Ee=((ye=ne.attributeBonuses)==null?void 0:ye[xe])??0;b.set(xe,Math.max(0,i.creation.rules.max-i.creation.rules.base-Ee))}const k=Ct();let H=i.creation.rules.pool;for(;H>0;){const xe=Xn.filter(Dn=>k[Dn]<(b.get(Dn)??0));if(xe.length===0)break;const Ee=xe[Math.floor(Math.random()*xe.length)]??xe[0];if(Ee===void 0)break;const ln=(b.get(Ee)??0)-k[Ee],Be=Math.min(ln,H,1+Math.floor(Math.random()*12));k[Ee]+=Be,H-=Be}w(k),K(null)},ie=()=>{w(Ct()),K(null)},oe=b=>{R(b),kh(i.creation.scriptId,b)},he=()=>{const b=h.trim()||te.trim(),k=te.trim()||b||"未命名预设";h.trim().length===0&&b.length>0&&f(b);const H=Nh(i.creation.scriptId,i.creation.scriptVersion,{name:k,characterName:b,occupationId:o,allocation:x,bio:y,itemChoices:N});oe([...A,H]),ce(H.id),Ce(H.name),ke(`已保存预设“${H.name}”。`),P(null)},ve=()=>{if(F===null)return;const b=te.trim()||h.trim()||"未命名预设",k=A.map(H=>H.id===F.id?{...H,name:b,scriptVersion:i.creation.scriptVersion,characterName:h.trim(),occupationId:o,allocation:{...x},bio:y,itemChoices:[...N],updatedAt:new Date().toISOString()}:H);oe(k),Ce(b),ke(`已更新预设“${b}”。`),P(null)},_e=()=>{if(F===null)return;const b=i.creation.occupations.find(H=>H.id===F.occupationId);if(b===void 0){P("该预设的职业在当前剧本版本中不存在，无法直接载入。");return}const k=Ct();for(const H of Xn){const ye=F.allocation[H];k[H]=typeof ye=="number"&&Number.isFinite(ye)?Math.max(0,Math.floor(ye)):0}d(b.id),w(k),f(F.characterName.trim()||F.name),p(F.bio),I(F.itemChoices.filter(H=>b.choicePool.includes(H)).slice(0,b.choiceCount)),Ce(F.name),K(null),P(null),ke(ge?`已载入预设，但它来自 v${F.scriptVersion}，当前剧本为 v${i.creation.scriptVersion}；请检查职业、属性和物品。`:`已载入预设“${F.name}”。`)},me=()=>{F!==null&&window.confirm(`确定删除预设“${F.name}”吗？`)&&(oe(A.filter(b=>b.id!==F.id)),ce(""),ke(`已删除预设“${F.name}”。`),P(null))},Le=b=>{ne!==null&&(K(null),I(k=>k.includes(b)?k.filter(H=>H!==b):k.length>=ne.choiceCount?k:[...k,b]))},ze=()=>{if(ne===null){K("请选择一个职业。");return}const b=h.trim()||(F==null?void 0:F.characterName.trim())||(F==null?void 0:F.name)||te.trim()||"";if(b.length>0&&h!==b&&f(b),b.length===0){K("请填写角色名字。");return}if(Pe!==i.creation.rules.pool){K(`还需要分配 ${Ie} 点属性。`);return}if(N.length!==ne.choiceCount){K(`还需要选择 ${ne.choiceCount-N.length} 件额外物品。`);return}if($){K("携带物品超过了栏位上限。");return}if(Z){K("携带物品超过了负重上限。");return}K(null),i.onSubmit({name:b,occupationId:ne.id,allocation:x,bio:y.trim(),itemChoices:N})};return l.jsxs("div",{className:"characterCreation",children:[l.jsxs("header",{className:"creationHeader",children:[l.jsxs("div",{children:[l.jsx("p",{className:"eyebrow",children:"INVESTIGATOR DOSSIER"}),l.jsx("h2",{children:"建立人物档案"}),l.jsx("p",{className:"mutedText",children:"角色名字与玩家 ID 不同。调查过程中可以改名，但玩家 ID 不会改变。"})]}),i.onCancel!==void 0&&l.jsx("button",{type:"button",className:"ghostButton",onClick:i.onCancel,children:"取消修改"})]}),l.jsxs("div",{className:"presetBar",children:[l.jsxs("div",{className:"presetBarIntro",children:[l.jsx("strong",{children:"角色预设"}),l.jsx("span",{children:"仅保存在当前浏览器；同一剧本可保存多套车卡方案。"})]}),l.jsxs("div",{className:"presetControls",children:[l.jsxs("select",{value:_,onChange:b=>{const k=b.target.value;ce(k);const H=A.find(ye=>ye.id===k);H!==void 0&&h.trim().length===0&&f(H.characterName.trim()||H.name),Ce((H==null?void 0:H.name)??""),ke(null),P(null)},"aria-label":"选择角色预设",children:[l.jsx("option",{value:"",children:"选择预设……"}),A.map(b=>l.jsxs("option",{value:b.id,children:[b.name," · v",b.scriptVersion]},b.id))]}),l.jsx("input",{value:te,onChange:b=>Ce(b.target.value),placeholder:"预设名称",maxLength:40,"aria-label":"预设名称"}),l.jsx("button",{type:"button",className:"smallButton",disabled:F===null,onClick:_e,children:"载入"}),l.jsx("button",{type:"button",className:"smallButton",onClick:he,children:"保存为新预设"}),l.jsx("button",{type:"button",className:"ghostButton",disabled:F===null,onClick:ve,children:"更新选中"}),l.jsx("button",{type:"button",className:"ghostButton",disabled:F===null,onClick:me,children:"删除"})]}),ge&&F!==null&&l.jsxs("p",{className:"presetWarning",children:["版本提示：该预设来自 v",F.scriptVersion,"，当前剧本为 v",i.creation.scriptVersion,"。载入后请检查职业、属性和物品。"]}),Se!==null&&l.jsx("p",{className:"presetNotice",children:Se}),Te!==null&&l.jsx("p",{className:"presetError",children:Te})]}),l.jsxs("div",{className:"creationGrid",children:[l.jsxs("section",{className:"creationColumn",children:[l.jsx("div",{className:"formRow",children:l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"角色名字"}),l.jsx("input",{value:h,onChange:b=>f(b.target.value),onBlur:()=>{h.trim().length===0&&te.trim().length>0&&f(te.trim())},maxLength:24,placeholder:"例如：艾琳·卡特"})]})}),l.jsxs("div",{className:"field",children:[l.jsx("span",{children:"职业"}),l.jsx("div",{className:"occupationGrid",children:i.creation.occupations.map(b=>l.jsxs("button",{type:"button",className:`occupationCard ${b.id===o?"occupationSelected":""}`,onClick:()=>W(b),children:[l.jsx("strong",{children:b.name}),l.jsx("span",{children:b.description}),l.jsx("span",{className:"occupationBonuses",children:Th(b)})]},b.id))})]}),l.jsxs("div",{className:"attributeBlock",children:[l.jsxs("div",{className:"attributeHeader",children:[l.jsx("span",{children:"属性分配"}),l.jsxs("div",{className:"attributeHeaderActions",children:[l.jsxs("span",{className:Ie===0?"pointsDone":"pointsLeft",children:["剩余 ",Ie," 点"]}),l.jsx("button",{type:"button",className:"smallButton",onClick:L,children:"随机分配"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:ie,children:"清空"})]})]}),l.jsx("p",{className:"attributeShiftHint",children:"按住 Shift 点击 + / − 一次调整 10 点，超出上限或剩余点数时保留到极限。"}),Xn.map(b=>{var ye;const k=((ye=ne==null?void 0:ne.attributeBonuses)==null?void 0:ye[b])??0,H=Math.max(0,i.creation.rules.max-i.creation.rules.base-k);return l.jsxs("div",{className:"attributeRow",children:[l.jsxs("div",{className:"attributeName",children:[l.jsx("strong",{children:pr[b]}),l.jsx("span",{children:Lf[b]})]}),l.jsxs("div",{className:"attributeControls",children:[l.jsx("button",{type:"button",className:"stepper",onClick:xe=>j(b,-1,xe.shiftKey),disabled:x[b]<=0,title:"Shift+点击一次减 10 点","aria-label":`减少${pr[b]}`,children:"−"}),l.jsx("span",{className:"attributeValue",children:fe[b]}),l.jsx("button",{type:"button",className:"stepper",onClick:xe=>j(b,1,xe.shiftKey),disabled:x[b]>=H||Ie<=0,title:"Shift+点击一次加 10 点","aria-label":`增加${pr[b]}`,children:"+"})]}),l.jsxs("span",{className:"attributeBreakdown",children:["基础 ",i.creation.rules.base," + 分配"," ",x[b],k!==0?` + 职业 ${k>0?"+":""}${k}`:""]})]},b)})]}),l.jsxs("label",{className:"field",children:[l.jsx("span",{children:"自我介绍"}),l.jsx("textarea",{value:y,onChange:b=>p(b.target.value),maxLength:800,rows:4,placeholder:"你为什么会来到敦威治？你害怕什么，又想证明什么？"})]})]}),l.jsxs("aside",{className:"creationColumn equipmentColumn",children:[l.jsxs("div",{className:"equipmentSummary",children:[l.jsx("h3",{children:"携带物品"}),l.jsxs("p",{children:["负重 ",pe.weight," / ",qe," kg · 栏位"," ",pe.slots," / ",i.creation.itemSlotLimit]}),l.jsx("div",{className:"meter",children:l.jsx("div",{className:`meterFill ${Z?"meterOver":""}`,style:{width:`${Math.min(100,pe.weight/Math.max(1,qe)*100)}%`}})}),l.jsx("div",{className:"meter",children:l.jsx("div",{className:`meterFill ${$?"meterOver":""}`,style:{width:`${Math.min(100,pe.slots/Math.max(1,i.creation.itemSlotLimit)*100)}%`}})})]}),l.jsxs("div",{className:"fixedItems",children:[l.jsx("h4",{children:"职业与公共配给"}),l.jsx("div",{className:"chipGrid",children:ae.map(b=>{const k=Ne.get(b);return k===void 0?null:l.jsx(Je,{children:k.name},b)})})]}),ne!==null&&ne.choiceCount>0&&l.jsxs("div",{className:"choiceItems",children:[l.jsxs("h4",{children:["额外挑选 ",N.length," / ",ne.choiceCount]}),l.jsx("div",{className:"itemChoiceList",children:ne.choicePool.map(b=>{const k=Ne.get(b);if(k===void 0)return null;const H=N.includes(b),ye=!H&&N.length>=ne.choiceCount;return l.jsxs("button",{type:"button",className:`itemChoice ${H?"itemChoiceSelected":""}`,onClick:()=>Le(b),disabled:ye,children:[l.jsx("span",{className:"itemChoiceName",children:k.name}),l.jsxs("span",{className:"itemChoiceMeta",children:[k.weight,"kg · ",k.slots," 格"]}),l.jsx("span",{className:"itemChoiceDescription",children:k.description})]},b)})})]}),ne!==null&&l.jsxs("div",{className:"skillPreview",children:[l.jsx("h4",{children:"职业技能"}),l.jsx("div",{className:"skillChips",children:Object.entries(ne.skills).sort((b,k)=>k[1]-b[1]).map(([b,k])=>l.jsxs("span",{className:"skillChip",children:[ma(b)," ",k]},b))})]}),V!==null&&l.jsx("p",{className:"formError",children:V}),l.jsx("button",{type:"button",className:"primaryButton creationSubmit",onClick:ze,children:"提交人物档案"}),l.jsx("p",{className:"finePrint",children:"提交后仍然可以修改。所有玩家准备好后，由发起者开始调查。"})]})]})]})}function Eh(i){var h;const u=i.initialCharacter,o=i.creation.occupations.find(f=>f.id===(u==null?void 0:u.occupationId))??i.creation.occupations[0];if(u===null||o===void 0)return o===void 0?Ct():kc(i.creation,o);const d=Ct();for(const f of Xn){const y=((h=o.attributeBonuses)==null?void 0:h[f])??0,p=Math.max(0,i.creation.rules.max-i.creation.rules.base-y);d[f]=Math.max(0,Math.min(p,u.attributes[f]-i.creation.rules.base-y))}return d}function Ih(i,u){if(i.initialCharacter===null||u===null)return[];const o=new Set([...i.creation.commonItems,...u.startingItems]),d=[];for(const h of i.initialInventory)o.has(h.itemId)||u.choicePool.includes(h.itemId)&&(d.includes(h.itemId)||d.push(h.itemId));return d.slice(0,u.choiceCount)}function kc(i,u){var y;const o=Ct(),d=new Map;for(const p of Xn){const x=((y=u.attributeBonuses)==null?void 0:y[p])??0;d.set(p,Math.max(0,i.rules.max-i.rules.base-x))}let h=i.rules.pool,f=!0;for(;h>0&&f;){f=!1;for(const p of Xn){if(h<=0)break;const x=d.get(p)??0;o[p]>=x||(o[p]+=1,h-=1,f=!0)}}return o}function Th(i){const u=Object.entries(i.attributeBonuses??{});return u.length===0?"无数值加成":u.map(([o,d])=>`${pr[o]} ${d>0?"+":""}${d}`).join(" · ")}function Ph(i,u,o){let d=0,h=0;const f=new Set;for(const y of[...i,...u]){const p=o.get(y);p!==void 0&&(d+=p.weight*p.quantity,f.has(y)||(h+=p.slots,f.add(y)))}return{weight:Math.round(d*100)/100,slots:h}}function Rh(i){var K,A;const[u,o]=E.useState(!1),[d,h]=E.useState(""),f=i.view,y=f.self,p=f.creation,x=f.players.every(R=>R.ready)&&y.ready,w=f.room.playerCount>=((p==null?void 0:p.minPlayers)??1),N=R=>{i.onSend({type:"createCharacter",draft:R}),o(!1)},I=()=>{d.trim().length!==0&&(i.onSend({type:"chat",text:d}),h(""))},V=E.useMemo(()=>y.character===null?"建立人物档案":"候诊室",[y.character]);return p===null?l.jsx("div",{className:"roomLobby",children:l.jsx("p",{children:"剧本数据缺失。"})}):l.jsxs("div",{className:"roomLobby",children:[l.jsxs("header",{className:"roomHeader",children:[l.jsxs("div",{children:[l.jsxs("p",{className:"eyebrow",children:["ROOM ",f.room.code]}),l.jsx("h1",{children:f.script.title}),l.jsx("p",{className:"roomSubtitle",children:f.script.description})]}),l.jsxs("div",{className:"roomHeaderActions",children:[l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>{var R;(R=navigator.clipboard)==null||R.writeText(f.room.code)},children:"复制房间码"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:i.onLeave,children:"离开房间"})]})]}),l.jsxs("div",{className:"lobbyGrid",children:[l.jsxs("div",{className:"lobbyMain",children:[y.character===null||u?l.jsx(Ch,{creation:p,initialCharacter:y.character,initialInventory:y.inventory,onSubmit:N,onCancel:y.character===null?void 0:()=>o(!1)}):l.jsx(Bn,{title:V,aside:l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>o(!0),children:"修改角色"}),children:l.jsxs("div",{className:"characterSummary",children:[l.jsxs("div",{className:"characterIdentity",children:[l.jsx("h3",{children:y.character.name}),l.jsxs("p",{children:[y.character.occupationName," ·"," ",y.character.bio||"这个人没有留下自我介绍。"]}),l.jsxs("div",{className:"characterBadges",children:[l.jsx(Je,{tone:y.ready?"good":"default",children:y.ready?"已准备":"未准备"}),y.isHost&&l.jsx(Je,{tone:"gold",children:"发起者"})]})]}),l.jsxs("div",{className:"summaryStats",children:[l.jsx(yr,{label:"生命",value:y.health,maximum:y.maxHealth,tone:"health"}),l.jsx(yr,{label:"理智",value:y.sanity,maximum:y.maxSanity,tone:"sanity"}),l.jsx("div",{className:"attributeSummary",children:Object.entries(y.character.attributes).map(([R,_])=>l.jsxs("span",{children:[pr[R]," ",l.jsx("strong",{children:_})]},R))})]}),l.jsxs("div",{className:"summaryInventory",children:[l.jsx("h4",{children:"携带"}),l.jsx("div",{className:"chipGrid",children:y.inventory.map(R=>l.jsxs(Je,{children:[R.template.name,R.quantity>1?` ×${R.quantity}`:""]},R.instanceId))})]}),l.jsxs("div",{className:"summarySkills",children:[l.jsx("h4",{children:"技能"}),l.jsx("div",{className:"skillChips",children:Object.entries(y.character.skills).sort((R,_)=>_[1]-R[1]).map(([R,_])=>l.jsxs("span",{className:"skillChip",children:[ma(R)," ",_]},R))})]})]})}),y.character!==null&&l.jsxs("div",{className:"lobbyControls",children:[l.jsx("button",{type:"button",className:y.ready?"ghostButton":"primaryButton",onClick:()=>i.onSend({type:"setReady",ready:!y.ready}),children:y.ready?"取消准备":"我准备好了"}),y.isHost?l.jsx("button",{type:"button",className:"primaryButton",disabled:!x||!w,onClick:()=>i.onSend({type:"startGame"}),children:"开始调查"}):l.jsx("p",{className:"finePrint",children:"等待发起者开始调查。"}),!x&&l.jsx("p",{className:"finePrint",children:"所有在线玩家准备后才能开始。"}),!w&&l.jsxs("p",{className:"finePrint",children:["至少需要 ",p.minPlayers," 名调查员。"]})]})]}),l.jsxs("aside",{className:"lobbyAside",children:[l.jsxs(Bn,{title:"在场调查员",children:[l.jsxs("ul",{className:"playerList",children:[f.players.map(R=>l.jsxs("li",{children:[l.jsxs("div",{children:[l.jsx("strong",{children:R.name}),l.jsx("span",{children:R.occupationName})]}),l.jsxs("div",{className:"playerTags",children:[R.isHost&&l.jsx(Je,{tone:"gold",children:"发起者"}),l.jsx(Je,{tone:R.ready?"good":"default",children:R.ready?"已准备":"未准备"}),!R.connected&&l.jsx(Je,{tone:"danger",children:"掉线"})]})]},R.playerId)),l.jsxs("li",{className:"selfPlayerRow",children:[l.jsxs("div",{children:[l.jsx("strong",{children:((K=y.character)==null?void 0:K.name)??"你"}),l.jsx("span",{children:((A=y.character)==null?void 0:A.occupationName)??"尚未建档"})]}),l.jsxs("div",{className:"playerTags",children:[y.isHost&&l.jsx(Je,{tone:"gold",children:"发起者"}),l.jsx(Je,{tone:y.ready?"good":"default",children:y.ready?"已准备":"未准备"})]})]})]}),l.jsxs("p",{className:"finePrint",children:["房间码 ",l.jsx("strong",{children:f.room.code})," · 人数"," ",f.room.playerCount,"/",f.room.maxPlayers]})]}),l.jsxs(Bn,{title:"开场简述",children:[l.jsx("p",{className:"storyText",children:p.intro}),p.deadline!==null&&l.jsxs("p",{className:"deadlineNote",children:["时限：第 ",p.deadline.bigRound," 大轮 ·"," ",p.deadline.label]})]}),l.jsxs(Bn,{title:"候诊室谈话",children:[l.jsx("div",{className:"miniLog",children:f.log.slice(-10).map(R=>l.jsx("p",{className:`miniLog-${R.kind}`,children:R.text},R.id))}),l.jsxs("div",{className:"chatRow",children:[l.jsx("input",{value:d,onChange:R=>h(R.target.value),onKeyDown:R=>{R.key==="Enter"&&I()},placeholder:"在候诊室里说点什么……",maxLength:500}),l.jsx("button",{type:"button",className:"ghostButton",onClick:I,children:"发送"})]})]})]})]})]})}const fi=`# 剧本编写 API（自包含单文件）

> 适用版本：\`dunwich-whisper 1.1.0\`  
> 面向对象：为《敦威治低语》编写新剧本的 AI 或人类作者。  
> 本文件是完整、可独立阅读的编写指南：类型、字段、全部脚本 API、可运行示例、校验规则、易错点与平衡检查都包含在本文件内；不需要再查阅其它文件或图片，也不依赖仓库中的源码路径。

---

## 1. 什么是剧本

剧本是一段 JavaScript。它导出**一个普通对象**，描述：

- 有哪些场景、瓦片地图长什么样、出口通向哪里；
- 场景里有哪些人物、怪物、物品、容器与线索；
- 玩家可以选择哪些职业、如何分配属性、能带什么；
- 玩家调查时可以执行哪些行动，检定成功或失败会发生什么；
- 定时器、每大轮发生什么、什么时候进入哪个结局。

剧本在**服务端**运行：远程模式下是 Node.js 服务端，本地模式下是浏览器 WebWorker 中的同一套引擎。客户端只收到过滤后的视图，不会收到 handler 函数或隐藏剧情。

### 1.1 运行模型

- 剧本是**可信代码**。上传的 JS 会在服务端执行，请只运行你信任的剧本。
- handler、条件、钩子都是**同步函数**，引擎不会 \`await\`。不要返回 Promise，也不要使用 \`async\`。
- 上传剧本是**单文件**：不能 \`import\` / \`require\` 其他文件。需要拆分的逻辑请在生成最终文件时内联。
- 剧本定义中的普通数据会进入房间；函数只留在服务端。
- 剧本对象在房间创建时被实例化；每次调查使用独立的运行时状态，但静态定义对象是共享的（不要在 handler 中修改 \`scripts\` 里的数组/对象，状态请用 flag、entity state、API）。
- 所有修改必须通过 \`context.api\`。\`context.actor\` 是快照，直接改它不会影响房间。

### 1.2 生命周期

\`\`\`text
载入剧本
  └─ 校验（失败则拒绝上传/启动）
房间创建
  └─ 玩家加入 → 创建角色 → 准备
开始调查
  ├─ 放置玩家到 startPositions
  ├─ onGameStart
  └─ 第一次视图推送
玩家行动
  ├─ 移动 / 场景行动 / 实体交互 / 使用物品 / 对话 / 战斗
  ├─ 行动耗时 → 推进大轮
  │    ├─ 状态倒计时
  │    ├─ 到期 timer
  │    ├─ onBigRound
  │    ├─ checkEnding
  │    └─ 自动失败检查
  └─ 战斗时推进小轮；每 5 小轮触发 1 大轮
endGame / 全员倒下或疯狂
  └─ onEnding → 结局页面
\`\`\`

---

## 2. 五分钟上手：完整可运行示例

下面这一段是**完整剧本**，不是片段。复制并修改 id、标题、文本与物品/场景即可上传。

\`\`\`js
// 上传时使用 module.exports；也支持 export default。
module.exports = {
    id: 'my-night',              // 必填，2–49 位小写字母/数字/短横线
    title: '我的雨夜',
    author: '你',
    version: '1.0.0',
    description: '一句话介绍。',
    minPlayers: 1,
    maxPlayers: 4,

    startSceneId: 'room',
    startPositions: [{ x: 2, y: 2 }],

    attributeRules: {
        base: 30,   // 六项属性的基础值
        pool: 120,  // 六项属性总共可分配点数
        min: 30,
        max: 85,
    },

    commonItems: ['notebook'],

    items: [{
        id: 'notebook',
        name: '笔记本',
        description: '空白笔记本。',
        category: 'tool',
        weight: 0.3,
    }],

    occupations: [{
        id: 'witness',
        name: '见证者',
        description: '你只是想知道发生了什么。',
        attributeBonuses: { inspiration: 10 },
        skills: {
            investigate: 60,
            listen: 55,
            occult: 25,
            dodge: 30,
            fight: 20,
        },
        startingItems: [],
        choiceCount: 0,
        choicePool: [],
    }],

    scenes: [{
        id: 'room',
        name: '雨夜小屋',
        description: '雨水敲打窗玻璃。',
        rows: [
            '##########',
            '#........#',
            '#........#',
            '##########',
        ],
        interactions: [{
            id: 'listen-rain',
            label: '听雨',
            verb: 'look',
            timeCost: 1,
            handler: (context) => {
                context.api.narratePlayer(
                    context.actor.id,
                    '雨声里混着很轻的脚步声。',
                    'mystery',
                );
            },
        }],
    }],

    entities: [{
        id: 'stranger',
        sceneId: 'room',
        x: 6,
        y: 2,
        name: '陌生人',
        kind: 'npc',
        description: '一个浑身湿透的人。',
        glyph: '?',
        blocking: true,
        npc: {
            health: 10,
            agility: 30,
            skills: { dodge: 20 },
        },
        interactions: [{
            id: 'end',
            label: '结束调查',
            timeCost: 0,
            handler: (context) => {
                context.api.endGame('finish');
            },
        }],
    }],

    endings: [{
        id: 'finish',
        title: '雨停了',
        summary: '你活着走了出去。',
        description: '门外没有街道，也没有来时的路。',
        scoreBonus: 10,
        rank: 'C · 见证者',
    }],

    defeatEndingId: 'finish',
};
\`\`\`

**上传方式**

1. 客户端前厅 → “上传 JS 剧本” → 粘贴完整源码 → “校验并载入”；
2. 或 HTTP：

\`\`\`bash
# JSON：把完整剧本源码放进 code 字段
curl -X POST http://127.0.0.1:8787/api/scripts \\
  -H "Content-Type: application/json" \\
  -d '{"name":"我的雨夜","code":"module.exports = { ... }"}'
\`\`\`

服务端会把成功上传的剧本保存到服务端配置的剧本缓存目录，下次启动自动载入。WebWorker 本地模式只在当前标签页内存中保留。

---

## 3. 顶层剧本对象

\`\`\`ts
interface ScriptDefinition {
    id: string;
    title: string;
    author?: string;
    description: string;
    version: string;
    minPlayers: number;             // 1–12
    maxPlayers: number;             // 1–12，且 >= minPlayers
    startSceneId: string;
    startPositions: Position[];     // 至少 minPlayers 个；不足时顺延/就近寻位
    startTime?: string | null;      // "1928-09-12T21:00"
    minutesPerBigRound?: number;    // 默认 6
    phenomenonFixationThreshold?: number; // 同一怪异现象目睹多少次后精神固化，默认 3
    deadline?: { bigRound: number; label: string }; // 只用于显示
    attributeRules: AttributeRules;
    occupations: OccupationDefinition[];
    commonItems?: string[];
    items: ItemTemplate[];
    scenes: SceneDefinition[];
    entities: EntityDefinition[];
    endings: EndingDefinition[];
    hooks?: ScriptHooks;
    defeatEndingId?: string;        // 全员倒下/疯狂时使用；必须存在
    intro?: string;
}
\`\`\`

| 字段 | 说明 |
| --- | --- |
| \`id\` | 全局唯一。上传同名 id 会替换旧的**上传**剧本；与内置剧本冲突会失败。 |
| \`startPositions\` | 依次按玩家加入顺序分配；被实体占据时引擎会在附近找空位。 |
| \`deadline\` | 仅用于界面显示“距午夜 X 大轮”。真正的结束必须由 timer、\`onBigRound\` 或 \`checkEnding\` 触发。 |
| \`phenomenonFixationThreshold\` | 同一怪异现象累计目睹多少次后获得“精神固化”；此后该现象不再触发理智检定，也不扣理智。默认 3。 |
| \`attributeRules\` | 最终属性 = \`base + 分配点数 + 职业加成\`；所有分配点数之和必须等于 \`pool\`，最终值在 \`[min, max]\`。 |
| \`commonItems\` | 每名玩家都会自动携带的物品模板 id。 |
| \`defeatEndingId\` | 自动失败结局；不填时尝试 \`defeat\`，再退到第一个结局。 |

---

## 4. 场景与瓦片地图

\`\`\`ts
interface SceneDefinition {
    id: string;
    name: string;
    description: string;
    ambient?: string;
    rows: string[];                 // 每个字符一格，所有行必须等长
    legend?: Record<string, TileDefinition>;
    exits?: ExitDefinition[];
    interactions?: InteractionDefinition[]; // 场景行动
    tags?: string[];
}
\`\`\`

### 4.1 rows 与图例

每个字符代表一个瓦片。默认图例：

| 字符 | 类型 | 可走 | 说明 |
| --- | --- | --- | --- |
| \`#\` | wall | 否 | 墙壁 |
| \`.\` | floor | 是 | 地板 |
| \`+\` | door | 是 | 门 |
| \`D\` | door | 是 | 大门 |
| \`,\` | grass | 是 | 草地 |
| \`T\` | tree | 否 | 树/障碍 |
| \`~\` | water | 否 | 水面 |
| \`=\` | road | 是 | 道路 |
| \`S\` | stone | 否 | 立石 |
| \`*\` | ritual | 是 | 仪式圆环 |
| \`^\` | stairs | 是 | 楼梯 |
| \` \` | void | 否 | 虚空 |

自定义图例会覆盖默认值：

\`\`\`js
legend: {
    H: { type: 'wall', name: '房屋墙壁', walkable: false },
    R: { type: 'ritual', name: '血色圆环', walkable: true, color: '#5b2a31' },
}
\`\`\`

\`color\` 可选；不填则客户端按类型使用默认色。\`glyph\` 可选，但通常用实体表达可见对象。

> **type 必须是瓦片类型**：\`floor\`、\`wall\`、\`door\`、\`grass\`、\`tree\`、\`water\`、\`road\`、\`stone\`、\`ritual\`、\`stairs\`、\`void\`。不要把实体的 \`prop\`、\`npc\` 等 kind 写进瓦片 \`type\`；未知类型会显示为黑色未知瓦片。
>
> 所有剧本、场景、实体、物品 id 建议只使用 ASCII 小写字母、数字与普通短横线 \`-\`。从文档或聊天软件复制的 \`‑\`（U+2011 非断行连字符）、\`–\`、\`—\` 不是普通短横线，会导致 id 校验失败或引用对不上。

### 4.2 出口

\`\`\`ts
interface ExitDefinition {
    id: string;
    label: string;
    x: number;
    y: number;
    targetSceneId: string;
    targetX: number;
    targetY: number;
    cost?: number;                  // 大轮数，默认 1
    description?: string;
    hidden?: boolean;               // 静态隐藏，不能之后显示
    available?: (context: ActionContext) => boolean;
}
\`\`\`

- 玩家必须站在出口 1 格以内（含斜角）才能使用。
- 出口的**当前位置**是 \`x\`/\`y\`，目标落点是 \`targetX\`/\`targetY\`；不要写成 \`targetX: 2, y: 2\`，否则目标纵坐标是 \`undefined\`，所有出口都会报“目的地没有可落脚的位置”。
- \`targetX\`/\`targetY\` 必须落在目标场景的可行走空格上；被实体/玩家占据时引擎会在附近寻找空格，但墙壁、越界或缺失坐标都会失败。
- 调试时至少实际走一遍每个出口的“去程”和“回程”，不要只检查静态字段。
- \`available\` 返回 false 时出口可见但不可用；界面显示“现在还无法离开”。
- 出口本身不占格子；不要在同一个格子放会阻挡的实体，否则玩家无法进入。
- 若要“发现密道后才出现出口”，可以把出口放在固定位置并用 \`available\` 控制；或通过自定义 handler 调用 \`api.teleportPlayer\`。

### 4.3 场景行动

\`scenes[].interactions\` 是随时可用的行动（不依赖某个实体）。例如：

\`\`\`js
interactions: [{
    id: 'search-floor',
    label: '检查地板',
    verb: 'search',
    timeCost: 2,
    check: { skill: 'investigate', difficulty: 'hard' },
    success: (context) => {
        context.api.revealEntity('hidden-hatch');
    },
    failure: (context) => {
        context.api.narratePlayer(context.actor.id, '地板下只有老鼠。');
    },
    once: true,
}]
\`\`\`

场景行动默认耗时按动词：\`search\` 2 大轮，其余 1 大轮；\`timeCost\` 可覆盖。\`once: true\` 会按玩家记录（内部键 \`scene:<场景>:<行动>\`）。

### 4.4 可见性

- 玩家只能收到**自己所在场景**的地图、实体、其他玩家与日志。
- \`hidden: true\` 的实体初始不可见；脚本调用 \`api.revealEntity(id)\` 后所有玩家可见。
- \`api.discoverEntity(playerId, id)\` 只把该实体记入某名玩家的发现集合，不会让其他人看见。
- 隐藏实体仍占据格子。隐藏的“地窖入口”会挡住那一格，直到 \`api.removeEntity\` 或移动。

---

## 5. 实体

\`\`\`ts
interface EntityDefinition {
    id: string;
    sceneId: string;
    x: number;
    y: number;
    name: string;
    kind: 'npc' | 'monster' | 'item' | 'container' | 'prop' | 'clue';
    description: string;
    glyph?: string;
    color?: string;
    hidden?: boolean;
    blocking?: boolean;             // 影响客户端表现；移动时所有实体都占格
    tags?: string[];
    itemId?: string;                // kind=item 时对应物品模板
    quantity?: number;
    interactions?: InteractionDefinition[];
    dialogue?: DialogueDefinition;
    container?: {
        items: Array<{ itemId: string; quantity?: number }>;
        locked?: boolean;
        keyItemId?: string;
    };
    npc?: NpcDefinition;           // npc / monster 必填
}
\`\`\`

### 5.1 自动行动

如果没有显式提供同名动词的行动，引擎会自动生成：

| 实体 | 自动行动 | 行为 |
| --- | --- | --- |
| 所有实体 | \`__look\` 观察 | 把 \`description\` 叙述给当前玩家，并标记发现 |
| \`kind: 'item'\` 且有 \`itemId\` | \`__take\` 拾取 | 按负重/栏位检查后放入背包，移除地图实体 |
| \`kind: 'container'\` 且未打开 | \`__open\` 打开 | 上锁时先找钥匙；没有钥匙则尝试困难 \`mechanics\` 检定；成功后把内容物放入背包 |
| 有 \`dialogue\` | \`__talk\` 交谈 | 打开对话 |

如果显式行动使用了相同动词，引擎不再生成对应自动行动。

> **每个格子只能有一个实体**。玩家、NPC、物品、家具都占格；要拿取物品，需要站到相邻格。

### 5.2 容器

\`\`\`js
{
    id: 'pantry',
    sceneId: 'kitchen',
    x: 5,
    y: 3,
    name: '储藏柜',
    kind: 'container',
    description: '柜门虚掩着。',
    container: {
        locked: false,
        items: [
            { itemId: 'salt', quantity: 1 },
            { itemId: 'whiskey', quantity: 1 },
        ],
    },
}
\`\`\`

\`locked: true\` + \`keyItemId\` 时，自动打开会检查队伍中是否有人持有钥匙；没有则尝试 \`mechanics\`（困难）。若想自定义检定/剧情，提供显式 \`open\` 行动即可。

### 5.3 NPC / 怪物

\`\`\`ts
interface NpcDefinition {
    health: number;
    agility: number;
    skills?: Record<string, number>;
    dodgeSkill?: number;
    hostile?: boolean;
    invisible?: boolean;
    armor?: number;
    weapon?: {
        name: string;
        damage: string;             // 骰子表达式，如 "1d8"
        skill?: string;             // 默认 fight
        range?: 'melee' | 'ranged';
    };
    sanityLoss?: number | string;   // 命中玩家时额外理智损失
    behavior?: 'stationary' | 'roam' | 'hunter'; // 供剧本读取，引擎不自动 AI
}
\`\`\`

- \`hostile: true\` 的 NPC 才会在 \`api.startCombat(sceneId)\` 中被自动加入战斗；显式传入 \`entityIds\` 也可以强制加入。
- 怪物 AI 由剧本控制：移动、现身、每几个大轮发动一次攻击，都由 \`onBigRound\` 等钩子调用 API 完成。
- \`invisible\` 只是标记，不会自动隐身；用 \`hidden\` + \`revealEntity\` 实现“看不见的东西”。
- 被击倒的实体保留在房间中（\`state.dead === true\`），但不会出现在视图和占格判断中。

### 5.4 队友、敌人与 NPC AI

实体可以带一个 \`ai\` 定义，由剧本决定它每大轮做什么、战斗中如何移动或攻击。AI 是**普通同步函数**，不能 \`async\`。

\`\`\`ts
interface NpcAiDefinition {
    faction?: 'ally' | 'enemy' | 'neutral';
    /** 同一轮内的基础排序值，越小越先行动，默认 10。 */
    turnOrder?: number;
    onBigRound?: (context: NpcAiContext) => void;
    /**
     * 战斗轮到自己时执行。
     * 返回 false 可跳过引擎默认攻击；返回其它值/不返回则允许默认攻击。
     */
    onCombatTurn?: (context: NpcAiContext) => boolean | void;
}

interface NpcTurnActor {
    id: string;
    name: string;
    kind: 'player' | 'npc';
    faction: 'ally' | 'enemy' | 'neutral';
    sceneId: string;
    x: number;
    y: number;
    agility: number;
    turnOrder: number;
}

interface NpcAiContext {
    api: ScriptApi;
    round: RoundInfo;
    self: ScriptEntityView;
    scene: SceneDefinition;
    players: ScriptActorView[];
    entities: ScriptEntityView[];
}
\`\`\`

**队友跟随玩家**：

\`\`\`js
{
    id: 'ally',
    sceneId: 'house-hall',
    x: 4,
    y: 4,
    name: '同行者',
    kind: 'npc',
    description: '一个坚持要跟着你的同伴。',
    npc: {
        health: 12,
        agility: 45,
    },
    ai: {
        faction: 'ally',
        turnOrder: 20,
        onBigRound: ({ api, self, players }) => {
            const leader = players[0];
            if (leader === undefined || leader.sceneId !== self.sceneId) {
                return;
            }
            const distance = Math.max(
                Math.abs(self.x - leader.x),
                Math.abs(self.y - leader.y),
            );
            if (distance > 2) {
                api.moveEntityToward(self.id, leader.id, 1);
            }
        },
    },
}
\`\`\`

**敌人战斗前悄悄靠近、贴近后开战**：

\`\`\`js
ai: {
    faction: 'enemy',
    turnOrder: 10,
    onBigRound: ({ api, self, players }) => {
        const target = players.find(
            (player) => player.sceneId === self.sceneId && player.alive,
        );
        if (target === undefined) {
            return;
        }
        const distance = Math.max(
            Math.abs(self.x - target.x),
            Math.abs(self.y - target.y),
        );
        if (distance <= 1) {
            api.startCombat(self.sceneId, [self.id]);
        } else {
            api.moveEntityToward(self.id, target.id, 1);
        }
    },
}
\`\`\`

**战斗中先贴近，再让引擎使用默认武器攻击**：

\`\`\`js
ai: {
    faction: 'enemy',
    onCombatTurn: ({ api, self, players }) => {
        const target = players.find(
            (player) => player.sceneId === self.sceneId && player.alive,
        );
        if (target !== undefined) {
            api.moveEntityToward(self.id, target.id, 2);
        }
        // 不返回 false：移动后引擎会尝试默认武器攻击
    },
}
\`\`\`

**脚本指定每轮 NPC 行动顺序**：

\`\`\`js
hooks: {
    orderNpcTurns: (actors) => {
        // actors 包含玩家和所有带 ai 的 NPC。
        return actors
            .filter((actor) => actor.kind === 'npc')
            .sort((left, right) => {
                if (left.faction !== right.faction) {
                    return left.faction === 'enemy' ? -1 : 1;
                }
                return right.agility - left.agility;
            })
            .map((actor) => actor.id);
    },
}
\`\`\`

- AI 在每个大轮结束、\`onBigRound\` 之后依次执行；执行顺序由 \`orderNpcTurns\` 或 \`turnOrder\` 决定。战斗中的行动改由 \`onCombatTurn\` 和战斗先攻控制。
- 行动列表中包含玩家，便于剧本按“玩家阶段/队友阶段/敌人阶段”排序；玩家自己的行动仍由玩家实时发起。
- 没有 \`ai\` 的敌人进入战斗后，近战武器会自动向玩家靠近最多 2 格，再尝试攻击；有 \`onCombatTurn\` 时由脚本优先控制。
- \`moveEntityToward\` 只沿可走路径移动，不能穿墙或穿过其它实体；目标被围住时会失败，脚本应有备用目标或等待。
- AI 每轮都会执行，必须用 flag、\`self.state\`、血量或距离做幂等保护，避免无限开战/重复移动。
- AI 也会占用格子。不要把队友或敌人的初始位置放在门格、出口和唯一走廊上。

---

## 6. 物品

\`\`\`ts
interface ItemTemplate {
    id: string;
    name: string;
    description: string;
    category: 'weapon' | 'ammo' | 'tool' | 'book' | 'medical' | 'ritual' | 'misc';
    weight: number;
    slots?: number;                 // 默认 1
    glyph?: string;
    stackable?: boolean;
    maxStack?: number;
    quantity?: number;              // 初始数量/一叠数量
    ammoType?: string;              // 弹药类型
    weapon?: {
        damage: string;
        skill: string;
        range: 'melee' | 'ranged';
        ammoType?: string;
        capacity?: number;
        loaded?: number;            // 初始已装填
    };
    use?: {
        description: string;
        timeCost?: number;          // 探索时大轮数；战斗固定 1 小轮
        consume?: boolean;
        heal?: string;              // 骰子表达式
        sanity?: string;            // 骰子表达式，正数为恢复
        handler?: (context: ActionContext) => void;
    };
}
\`\`\`

- 玩家负重上限 = \`24 + 体质 × 0.45 + 职业 carryBonus\` kg；物品栏上限 16 格。
- 重量按 \`weight × quantity\` 计算；栏位按实例（堆叠）计算。
- 武器攻击：
  - 近战需要相邻；远程需要视线；
  - 有 \`capacity\` 的武器必须装填，初始 \`loaded\`；战斗中用“装填”行动把 \`ammoType\` 匹配的弹药转入弹仓；
  - 攻击使用 \`weapon.skill\` 做对抗检定，目标以闪避/敏捷抵抗；
  - 暴击伤害翻倍；近战加体质伤害加成；目标护甲减伤。
- \`use.handler\` 在物品被使用时运行，\`context.item\` 是模板，\`context.itemInstance\` 是实例。
- 阅读书籍建议 \`timeCost: 2\`；医疗、饮酒等按剧情设定。

---

## 7. 职业与角色

\`\`\`ts
interface OccupationDefinition {
    id: string;
    name: string;
    description: string;
    attributeBonuses?: Partial<Attributes>;
    skills: Record<string, number>;
    startingItems: string[];
    choiceCount: number;            // 从 choicePool 额外挑选几件
    choicePool: string[];
    carryBonus?: number;
}
\`\`\`

建档规则：

- 六项属性：体质、健康、智慧、灵感、理智、敏捷。
- 客户端默认会均分 \`pool\`；玩家可增减，但最终值不能超过 \`rules.max\`，也不能低于 \`rules.min\`。
- 最终属性 = \`base + 分配 + 职业加成\`。
- 健康上限 = 最终健康值；理智上限 = 最终理智值。
- 移动格数/大轮 = 10；战斗中的小轮移动最多 2 格。
- 体质影响负重和近战伤害加成；健康低于 1/3 时所有检定 -20；理智低于 1/3 时 -10，低于 1/5 时 -20；理智归零永久疯狂。
- 职业技能若未列出，默认 5。

物品限制：公共物品 + 职业初始物品 + 从 \`choicePool\` 中选 \`choiceCount\` 件不重复物品；提交时会校验重量与栏位。

---

## 8. 行动与时间

### 8.1 大轮

- 移动一次（最多移动 10 格）消耗 **1 大轮**。
- 战斗中不能自由移动；轮到自己的小轮时，可点击地图移动最多 2 格，消耗 1 小轮。
- 交互默认消耗 1 大轮；\`search\` 默认 2 大轮；可在行动上写 \`timeCost\` 覆盖。
- 阅读一本书、搜索整个房间建议 2 大轮；坐车/长途旅行使用出口 \`cost\`。
- 使用物品默认 1 大轮（\`use.timeCost\` 可覆盖）。
- 每个大轮结束时按顺序执行：
  1. 状态剩余大轮数 -1，到期移除；
  2. 到期 timer 回调；
  3. \`onBigRound\`；
  4. \`checkEnding\`；
  5. 全员失去行动能力则自动失败。

### 8.2 小轮与战斗

- 战斗中按先攻顺序行动。所有参与者各行动一次，计为 **1 小轮**；单个角色的一次攻击、装填、逃跑、使用物品、等待或移动，占用该角色在这一小轮里的行动机会。
- 每 5 小轮触发 1 个大轮计算（状态、timer、\`onBigRound\`、\`checkEnding\`）。
- 先攻 = 敏捷 + 0–9 的随机数；敏捷高者先行动。
- 战斗中轮到自己的小轮时，可以点击地图移动最多 2 格，消耗 1 小轮；不能在大轮自由移动或交互时战斗，战斗结束后恢复正常。

### 8.3 计时器与时钟

\`\`\`js
hooks: {
    onGameStart: (context) => {
        context.api.afterBigRounds(24, () => {
            context.api.narrate('all', '距离午夜还有六个大轮。');
        });
        context.api.afterBigRounds(30, () => {
            context.api.endGame('doom');
        });
    },
}
\`\`\`

- \`afterBigRounds(n, callback)\`：当前大轮 + n 时触发；最小延迟 1。
- \`cancelTimer(id)\`：取消。
- \`startTime\` 与 \`minutesPerBigRound\` 决定顶部显示的调查内时钟。
- \`deadline\` 只是显示；真正的时限必须用 timer 或钩子实现。

---

## 9. 检定

使用 D100：

- 目标值 = \`(技能或属性 + 修正) / 难度系数\`，向下取整，限制在 1–100；
  - 常规：×1
  - 困难：÷2
  - 极难：÷5
- 成功等级：
  - 大成功：D100 = 1
  - 极难成功：≤ 目标/5
  - 困难成功：≤ 目标/2
  - 常规成功：≤ 目标
  - 失败：> 目标
  - 大失败：100，或目标 < 50 时 96–99
- 修正来源：行动/检定显式 \`modifier\`、状态 \`checkModifier\`、低健康、低理智。
- 对抗检定：双方各掷 D100，比较成功等级；防守方在平局时获胜。
- 检定结果会写入场景日志（同场景玩家可见），并返回：

\`\`\`ts
interface CheckOutcome {
    success: boolean;
    level: 'critical' | 'extreme' | 'hard' | 'regular' | 'failure' | 'fumble';
    roll: number;
    target: number;
    text: string;
    opponentRoll?: number;
    opponentTarget?: number;
    // ...
}
\`\`\`

### 9.1 声明式检定

\`\`\`js
{
    id: 'search-desk',
    label: '搜查书桌',
    verb: 'search',
    timeCost: 2,
    check: {
        skill: 'investigate',
        difficulty: 'hard',
        modifier: -10,
    },
    success: (context) => {
        context.api.giveItem(context.actor.id, 'old-letter');
    },
    failure: (context) => {
        context.api.narratePlayer(context.actor.id, '抽屉里只有灰尘。');
    },
    once: true,
}
\`\`\`

### 9.2 代码内检定

\`\`\`js
handler: (context) => {
    const outcome = context.api.check(context.actor.id, {
        attribute: 'wisdom',          // 或 skill: 'occult'
        difficulty: 'regular',
        modifier: 10,
        reason: '解读拉丁文',
    });
    if (outcome.success) {
        context.api.setFlag('read-page', true);
    }
}
\`\`\`

### 9.3 理智检定

\`\`\`js
context.api.sanityCheck(context.actor.id, {
    reason: '目睹无形之物',
    phenomenon: 'horror-manifestation', // 稳定 id；同一现象累计目睹次数
    phenomenonLabel: '无形之物',         // 玩家看到的现象名
    difficulty: 'regular',
    modifier: 0,
    lossOnSuccess: 1,       // 成功损失 1
    lossOnFailure: '1d6',   // 失败损失 1d6
});
\`\`\`

成功/失败损失都接受数字或骰子表达式。理智归零会永久疯狂并触发自动失败检查。

同一 \`phenomenon\`（省略时用 \`reason\`）累计达到 \`phenomenonFixationThreshold\` 次后，玩家获得永久的“精神固化：现象名”状态：之后的 \`sanityCheck\` 直接返回 \`fixated: true\`，不掷骰、不扣理智；带同一现象的 \`adjustSanity\` 负向扣减也会被忽略。建议为所有重复出现的怪异现象提供稳定的 \`phenomenon\` id，而不是只依赖可能变化的 \`reason\`。

---

## 10. 战斗

### 10.1 开始战斗

\`\`\`js
context.api.revealEntity('horror');
context.api.startCombat('cellar');                       // 场景内所有 hostile NPC
context.api.startCombat('cellar', ['horror', 'cultist']); // 指定实体
\`\`\`

- 已有战斗时返回 \`false\`。
- 场景内至少需要一名可行动玩家。
- 默认加入场景内所有 \`npc.hostile === true\` 且未死亡的实体。
- 隐藏实体不会自动让玩家看到；先 \`revealEntity\`。

### 10.2 玩家战斗行动

客户端会发送：

| 行动 | 说明 |
| --- | --- |
| \`attack\` | 选择目标与武器；远程需要视线与弹药；近战需要相邻 |
| \`dodge\` | 本回合闪避 +20，直到自己下次行动 |
| \`flee\` | 与最快敌人做敏捷对抗；成功则逃到本场景第一个可用出口 |
| \`useItem\` | 使用带 \`use\` 的物品；消耗 1 小轮 |
| \`reload\` | 把匹配弹药装入弹仓；消耗 1 小轮 |
| \`pass\` | 跳过行动 |
| \`combatMove\` | 点击地图移动最多 2 格；消耗 1 小轮；客户端发送独立命令 |

未指定武器时使用徒手：\`1d3\` + 格斗。

### 10.3 NPC 行为

引擎会在 NPC 的回合自动：

- 随机选择场景内一名存活玩家；
- 用 NPC 武器技能做对抗检定；
- 命中时掷伤害，扣除玩家生命；
- 如果配置了 \`sanityLoss\`，额外扣理智。

仇恨范围、追击、逃跑、阶段变化需要剧本自己控制。

---

## 11. 对话

\`\`\`ts
interface DialogueDefinition {
    start: 'start';
    nodes: {
        [nodeId: string]: {
            speaker: string;
            text: string | ((context: ActionContext) => string);
            options: Array<{
                id: string;
                label: string | ((context: ActionContext) => string);
                next?: string;
                end?: boolean;
                requires?: (context: ActionContext) => boolean;
                check?: CheckRequest & {
                    successNext?: string;
                    failureNext?: string;
                    success?: (context: ActionContext) => void;
                    failure?: (context: ActionContext) => void;
                };
                onSelect?: (context: ActionContext) => void;
            }>;
            onEnter?: (context: ActionContext) => void;
        };
    };
}
\`\`\`

示例：

\`\`\`js
dialogue: {
    start: 'start',
    nodes: {
        start: {
            speaker: '老人',
            text: (context) =>
                context.api.getFlag('met') ? '“还有事？”' : '“你终于来了。”',
            onEnter: (context) => {
                context.api.setFlag('met', true);
                context.api.giveClue(context.actor.id, {
                    id: 'clue-old-man',
                    title: '老人的话',
                    text: '午夜之前不要上山。',
                });
            },
            options: [
                { id: 'ask', label: '“山上有什么？”', next: 'mountain' },
                { id: 'leave', label: '“我走了。”', end: true },
            ],
        },
        mountain: {
            speaker: '老人',
            text: '“门。”',
            options: [
                { id: 'back', label: '“还有别的吗？”', next: 'start' },
                { id: 'leave', label: '“我走了。”', end: true },
            ],
        },
    },
},
\`\`\`

要点：

- 选择 \`__talk\` 打开对话后，对话选项本身**不消耗大轮**；开始交谈消耗 1 大轮。
- \`text\` / \`label\` 可以是函数，服务端在生成视图时求值。
- \`requires\` 返回 false 的选项会显示为不可用。
- \`onEnter\` 在进入节点时执行；\`onSelect\` 在选择时先于 \`check\` 执行。
- 若选项带 \`check\`，按成功/失败决定 \`successNext\` / \`failureNext\`；未指定则关闭。
- 对话状态只对触发者可见。

---

## 12. 回调上下文与 API 参考

### 12.1 ActionContext

实体交互、场景行动、物品使用、对话、条件函数都会收到：

\`\`\`ts
interface ActionContext {
    actor: ScriptActorView;   // 当前行动者快照
    entity?: ScriptEntityView;
    scene?: SceneDefinition;
    item?: ItemTemplate;
    itemInstance?: ItemInstance;
    round: RoundInfo;
    api: ScriptApi;
}
\`\`\`

\`ScriptActorView\` 包含：

\`\`\`ts
{
    id, name, occupationName,
    health, maxHealth, sanity, maxSanity,
    attributes,               // 六项最终属性
    skills,                   // 职业技能表
    sceneId, x, y,
    alive, insane,
    inventory,                // ItemInstance[]（id、模板 id、数量、装填）
    statuses,
}
\`\`\`

\`ScriptEntityView\` 包含 \`id, sceneId, x, y, name, kind, description, hidden, revealed, blocking, tags, state, itemId, quantity, npc\`。\`state\` 中有 \`revealed / opened / locked / health / maxHealth / dead / notes\`；\`state.notes\` 是 \`setEntityState\` 写入的自由记录。

### 12.2 脚本钩子

\`\`\`ts
interface ScriptHooks {
    onGameStart?(context: ScriptContext): void;
    onBigRound?(context: ScriptContext): void;
    onSmallRound?(context: ScriptContext): void;
    onEnterScene?(context: {
        api: ScriptApi;
        round: RoundInfo;
        playerId: string;
        sceneId: string;
    }): void;
    onCombatEnd?(context: {
        api: ScriptApi;
        round: RoundInfo;
        sceneId: string;
    }): void;
    onPlayerDown?(context: {
        api: ScriptApi;
        round: RoundInfo;
        playerId: string;
    }): void;
    onEnding?(context: {
        api: ScriptApi;
        round: RoundInfo;
        endingId: string;
    }): void;
    orderNpcTurns?(
        actors: NpcTurnActor[],
        context: ScriptContext,
    ): string[] | void;
    checkEnding?(context: ScriptContext): string | null | undefined;
}
\`\`\`

执行时机：

| 钩子 | 时机 |
| --- | --- |
| \`onGameStart\` | 玩家已放置、阶段切换为 playing 之后，第一次视图之前 |
| \`onBigRound\` | 大轮递增、状态/计时器处理之后 |
| 实体 \`ai.onBigRound\` | 每个大轮 \`onBigRound\` 之后，按 \`orderNpcTurns\` 顺序执行 |
| \`onSmallRound\` | 战斗中完整先攻顺序走完一圈后 |
| \`onEnterScene\` | \`travel\` 到达、\`teleportPlayer\`、脚本移动玩家之后 |
| \`onCombatEnd\` | 战斗结束、\`combat\` 已清空之后 |
| \`onPlayerDown\` | 玩家生命降到 0 时 |
| \`onEnding\` | 结局对象已生成、阶段已变为 ended 后 |
| \`checkEnding\` | 每次大轮结束，以及战斗结束后；返回结局 id 即结束 |

### 12.3 ScriptApi 方法

所有方法都是同步的。目标参数中：

\`\`\`ts
type NarrationTarget =
    | 'all'
    | 'scene'
    | { playerId: string }
    | { playerIds: string[] }
    | { sceneId: string };
\`\`\`

\`narrate('scene', text)\` 在交互/对话中表示“行动者所在场景”；在无行动者的钩子中会退化为全体广播。建议钩子里显式使用 \`'all'\` 或 \`{ sceneId }\`。

#### 查询

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| \`getRound()\` | \`RoundInfo\` | \`{ bigRound, smallRound, clock, deadline }\` |
| \`getPlayers()\` | \`ScriptActorView[]\` | 所有已建档玩家（含死亡/疯狂） |
| \`getPlayer(id)\` | \`ScriptActorView \\| undefined\` | |
| \`getEntity(id)\` | \`ScriptEntityView \\| undefined\` | 包含隐藏实体 |
| \`getEntitiesInScene(sceneId)\` | \`ScriptEntityView[]\` | 包含隐藏/死亡实体 |
| \`getScene(sceneId)\` | \`SceneDefinition \\| undefined\` | |
| \`getInventory(playerId)\` | \`ItemInstance[]\` | |
| \`getItemTemplate(itemId)\` | \`ItemTemplate \\| undefined\` | |
| \`hasItem(playerId, itemId)\` | \`boolean\` | 按模板 id 判断，忽略数量 |
| \`getFlag(name)\` | \`string \\| number \\| boolean \\| undefined\` | |
| \`getEntityState(entityId, key)\` | \`FlagValue \\| undefined\` | |

#### 状态与叙述

| 方法 | 说明 |
| --- | --- |
| \`setFlag(name, value = true)\` | 全局房间标记；所有玩家共享 |
| \`incrementFlag(name, delta = 1)\` | 数值累加，返回新值；非数字按 0 起算 |
| \`narrate(target, text, tone?)\` | \`tone\`: \`default / good / danger / mystery\` |
| \`narratePlayer(playerId, text, tone?)\` | 只有该玩家能看到 |
| \`narrateScene(sceneIdOrText, text?)\` | 单参数：行动者所在场景；双参数：指定场景 |

#### 实体与场景

| 方法 | 说明 |
| --- | --- |
| \`revealEntity(id)\` | 让隐藏实体对所有玩家可见，并标记发现 |
| \`hideEntity(id)\` | 重新隐藏；已发现的个人记录不会自动清除 |
| \`discoverEntity(playerId, id)\` | 只让该玩家“发现”该实体 |
| \`moveEntity(id, sceneId, x, y)\` | 移动到可行走、无占用的格子；战斗中返回 false |
| \`moveEntityToward(id, targetId, maxSteps?)\` | 沿最短路径靠近玩家/实体；默认 1 步，可在战斗中用于 AI |
| \`npcAttack(entityId, playerId)\` | 让战斗中的 NPC 用当前武器攻击指定玩家 |
| \`removeEntity(id)\` | 从房间移除；关闭相关对话、移出战斗 |
| \`spawnEntity(definition)\` | 在空闲可行走格生成新实体；返回 id，失败返回 \`''\` |
| \`setEntityDescription(id, text)\` | 修改观察文本 |
| \`setEntityState(id, key, value)\` | 写入 \`state.notes\` 的自由数据 |
| \`setSceneDescription(sceneId, text)\` | 修改场景描述 |

#### 物品、生命与理智

| 方法 | 说明 |
| --- | --- |
| \`giveItem(playerId, itemId, quantity = 1)\` | 遵守负重/栏位；返回是否成功 |
| \`removeItem(playerId, itemId, quantity = 1)\` | 按模板 id 移除，返回是否足够 |
| \`damagePlayer(playerId, amount, reason)\` | \`amount\` 可为数字或骰子表达式；护甲不自动计算 |
| \`healPlayer(playerId, amount, reason)\` | 不超过上限；死亡角色不会复活 |
| \`adjustSanity(playerId, amount, reason, phenomenon?)\` | \`amount\` 可为数字或骰子表达式；负数扣理智。传入稳定的 \`phenomenon\` 后，同一现象达到阈值会产生精神固化并免疫后续扣减。 |
| \`sanityCheck(playerId, options)\` | 返回 \`SanityCheckOutcome\`，包含损失与前后值；可通过 \`phenomenon\` 累计目睹次数，固化后返回 \`fixated: true\` 且不掷骰。 |
| \`check(playerId, request)\` | 带 \`reason\`；返回 \`CheckOutcome\` |
| \`roll(expression, reason?)\` | 掷骰并写入日志；返回总点数 |
| \`addStatus(playerId, status)\` | 同 id 会覆盖 |
| \`removeStatus(playerId, statusId)\` | |

#### 移动、成长与结局

| 方法 | 说明 |
| --- | --- |
| \`teleportPlayer(playerId, sceneId, x, y)\` | 瞬移，不消耗时间；会运行 \`onEnterScene\`；战斗中会退出战斗 |
| \`giveClue(playerId, clue)\` | 按 id 去重，写入个人线索簿 |
| \`awardScore(playerId, points, reason)\` | 个人加分/扣分，写入结算 |
| \`afterBigRounds(rounds, callback)\` | 返回 timer id；最小延迟 1 大轮 |
| \`cancelTimer(timerId)\` | |
| \`startCombat(sceneId, entityIds?)\` | 返回是否成功 |
| \`endCombat()\` | 立即结束战斗并触发 \`onCombatEnd\` |
| \`endGame(endingId)\` | 阶段切为 ended；只对已存在结局有效 |

### 12.4 状态效果

\`\`\`ts
interface StatusEffect {
    id: string;
    name: string;
    description: string;
    remainingBigRounds?: number;    // 省略则永久
    checkModifier?: number;         // 所有检定修正
    dodgeModifier?: number;         // 闪避修正
    attributeModifiers?: Partial<Attributes>;
    preventsActions?: boolean;      // 为 true 时阻止角色行动
}
\`\`\`

适合实现：护符、药物、恐惧、腿伤、祝福、诅咒。

---

## 13. Flag、线索与笔记

- **Flag** 是房间级共享状态，所有玩家和钩子都能读。适合记录“门已打开”“仪式完成”“怪物已死”。
- 每名玩家的私有 flag 可用 \`键中包含 playerId\` 的约定，例如 \`entered:cellar:alice\`。
- **线索**（\`giveClue\`）写入个人线索簿，其他玩家看不到。
- **笔记**由客户端创建，存储在服务端房间状态中，只有作者能读写；可以索引场景、实体、物品。
- 剧本不能直接创建笔记；如果需要自动记录，使用 \`giveClue\`。

---

## 14. 结局与计分

\`\`\`ts
interface EndingDefinition {
    id: string;
    title: string;
    summary: string;
    description: string;   // 结局页正文
    scoreBonus?: number;
    rank?: string;
}
\`\`\`

- \`endGame(id)\` 或 \`checkEnding\` 返回 id 时进入结局。
- 全员死亡/疯狂时使用 \`defeatEndingId\` 自动失败。
- 个人评分大致为：

\`\`\`text
存活 50 / 倒下 10
+ 生命比例 × 20
+ 理智比例 × 20
+ 线索数 × 10
+ 发现实体数 × 2
+ awardScore 累计
+ ending.scoreBonus
\`\`\`

- \`rank\` 可自定义；不填时引擎按平均分给出 S–D 评级。
- 结局页展示所有玩家的职业、存活、线索与评分。

---

## 15. 校验规则

上传或启动时会检查：

- 必需字段、人数范围、版本、结局；
- 场景行等长、图例字符都有定义、出口目标存在；
- 实体 id 唯一、场景存在、坐标在边界内；
- 物品、职业、容器、对话引用都存在；
- 对话起点、节点跳转、选项 id 合法；
- 交互 id 在所属对象内唯一；
- 检定必须指定 \`skill\` 或 \`attribute\`；
- \`defeatEndingId\` 必须对应真实结局；
- 所有 handler/条件/钩子必须是函数；
- 上传源码不超过 512KB。

校验通过后，引擎仍会做运行期防御：实体坐标不可走会在初始化时尝试就近放置并记录错误；非法 API 调用会被捕获并写入服务端日志，不会让整个房间崩溃。

---

## 16. HTTP 与 WebSocket 接口

### 16.1 HTTP

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | \`/api/health\` | 服务状态、剧本数、房间数 |
| GET | \`/api/scripts\` | 剧本摘要列表 |
| POST | \`/api/scripts\` | 上传/替换剧本，JSON \`{name, code}\` 或纯源码 |
| GET | \`/api/scripts/:id\` | 剧本详情（场景名列表） |
| GET | \`/api/scripts/:id/source\` | 下载上传剧本源码（内置剧本无源码） |
| GET | \`/api/rooms\` | 当前房间摘要 |
| GET | \`/ws\` | WebSocket 游戏连接（升级） |
| GET | \`/\` | 构建后的客户端 |

### 16.2 WebSocket

- 地址：\`ws://<host>:<port>/ws\`，生产环境同源；客户端默认使用当前页面的协议、主机、IP、端口和路径前缀，\`https\` 页面自动使用 \`wss://\`。例如 \`https://example.com/game/\` 默认连接 \`wss://example.com/game/ws\`。Vite 开发服务器会把 \`/ws\` 代理到 \`8787\`；玩家也可以在接线界面手动覆盖地址。
- 连接后服务器发送 \`welcome\`（含连接 id、剧本列表、房间列表）。
- 客户端发送 JSON 命令，服务器回 \`view\`（当前玩家完整视图）、\`error\`、\`info\`、\`scriptList\`、\`roomList\` 等。
- 常用移动命令：\`{ "type": "move", "x": 6, "y": 5 }\` 执行一次大轮移动（最多 10 格）；\`{ "type": "autoMove", "x": 6, "y": 5 }\` 自动走向目标（按移动力分多次大轮，遇战斗或结局停止）；战斗中使用 \`{ "type": "combatMove", "x": 6, "y": 5 }\`（最多 2 格，消耗 1 小轮）。
- 剧本作者通常不需要直接处理 WebSocket；客户端已经封装。

---

## 17. 调试与最佳实践

1. **先上传，再开房**：上传接口会立即做静态校验；错误信息一次列出所有问题。
2. **小步验证**：使用最小剧本确认场景、移动、交互、结局能跑通，再逐步加入内容。
3. **控制信息泄露**：\`getEntitiesInScene\` 给脚本看全部实体，但玩家视图只包含可见实体；不要在叙述里直接说出隐藏实体 id 对应的真名，除非剧情允许。
4. **条件函数要纯**：\`visible\` / \`requires\` / \`available\` 会在构建视图时反复执行；不要在里面改状态或掷骰。
5. **时间成本要克制**：大轮是稀缺资源。调查类行动 1–2 大轮，长途 2–4 大轮；给玩家留出足够的行动次数。
6. **一次性行动**：搜索、发现类行动加 \`once: true\`，避免反复刷物品。
7. **多人物品**：唯一的仪式道具只给一名玩家时，其他玩家可能无法使用。用“队伍中持有”检查：
   \`\`\`js
   const partyHas = (context, itemId) =>
       context.api.getPlayers()
           .filter((p) => p.sceneId === context.actor.sceneId && p.alive)
           .some((p) => p.inventory.some((i) => i.itemId === itemId));
   \`\`\`
8. **不要让玩家卡死**：每个关键道具至少准备一条备用路径（撬锁、替代线索、NPC 提示）。
9. **定时器与战斗**：\`onBigRound\` 可能由战斗的大轮推进触发；用 \`getEntity(id).state.dead\`、flag 或 \`startCombat\` 的返回值做幂等保护，避免重复开战。
10. **避免异步**：所有 handler 必须同步完成。需要延迟，用 \`afterBigRounds\` 而不是 \`setTimeout\`。
11. **不要依赖墙钟**：服务器时间不可控；游戏内时间用 \`getRound().clock\`。
12. **测试方式**：上传最小剧本 → 单人开房 → 在浏览器里走到每个实体前 → 检查每条分支；再用两名玩家验证物品与多人同步。

---

## 18. 常见错误与易错点

| 症状 | 原因 / 修正 |
| --- | --- |
| 上传提示“没有找到剧本定义” | 忘了 \`module.exports = {...}\` 或 \`export default\` |
| 上传提示 id 必须以小写字母/数字/短横线开头 | id 中混入了 \`‑\`（U+2011）、\`–\`、\`—\` 等非 ASCII 字符；请用普通 \`-\`。场景、实体、物品、flag、现象 id 也建议全部使用 ASCII |
| 所有出口都提示“目的地没有可落脚的位置” | 出口写成 \`targetX: n, y: m\` 而不是 \`targetX: n, targetY: m\`；或目标坐标在墙里/越界 |
| 某个出口能出去但回不来 | 只检查了去程。每个出口都要检查目标场景的落点、回程出口与目标落点 |
| 地图上的石柱/箱子显示成黑色未知格 | \`legend\` 的 \`type\` 用了 \`prop\` 等实体类型；应使用 \`wall\`、\`stone\` 等瓦片类型 |
| 房间能开但实体看不见 | \`hidden: true\` 却没 \`revealEntity\`；或坐标在墙壁里 |
| 玩家不能移动 | 目标格被实体占据；**隐藏实体也占格**；\`blocking: false\` 也不会自动让引擎忽略占格 |
| 门就在眼前却过不去 | 门格或门两侧被落地钟、柜子、调料罐、地窖盖板等实体堵住。实体应放在门旁，不要放在门格、出口格或唯一走廊上 |
| 交互按钮灰掉 | 距离超过 1 格、\`requires\` 为 false、\`once\` 已用过、负重不足 |
| 战斗开不起来 | 没有 \`npc.hostile\`；或没有可行动玩家；或已在战斗中 |
| 检定总是失败 | 技能未在职业 \`skills\` 中，默认 5；低健康/低理智还有惩罚 |
| 结局不触发 | 只写了 \`deadline\`，没有 timer/hook 调 \`endGame\` |
| 只有死亡/逃离结局可达 | 关键房间、道具或仪式被门/实体堵住；或时间预算根本不够；需要显式测试每个结局 |
| 物品拿不起来 | 负重/栏位不足；先丢东西或提高体质 |
| 多人看不到彼此 | 不在同一场景；视图按场景过滤是设计行为 |
| 同一个物品反复获得 | 一次性交互忘了 \`once: true\`，或脚本没有 flag 去重 |
| 怪物反复开战 | 钩子没有检查 \`dead\` / flag / \`startCombat\` 返回值 |

### 18.1 物品不要堵门：门、实体与可达性

这是实际剧本中最容易发生、也最难靠静态校验发现的问题。

- **所有实体都占格**。即使 \`hidden: true\`，或客户端看起来 \`blocking: false\`，服务端寻路仍然把该格视为不可进入。
- **不要把这些实体放在门格 \`+\` / \`D\`、出口格或唯一走廊上**：落地钟、书架、调料罐、地窖盖板、箱子、桌子、NPC。
- 门要能通行，必须至少有一组**相对两侧**可走且未被实体占用：
  - 横向门：左、右两侧都能站人；
  - 纵向门：上、下两侧都能站人。
- 隐藏的暗门/盖板尤其危险：玩家没发现它时它仍然占格，可能把整条走廊切断。应放在门旁边，或保证有一条绕过它的替代路线。
- 每个出口都要检查：
  - 出口格没有被实体占用；
  - 玩家能到达出口的相邻格；
  - 目标场景的落点是空地；
  - 回程出口也能使用。
- 关键道具、关键 NPC、所有可交互实体都必须能从场景入口走到相邻格。
- 建议在提交前用代码或测试遍历每个场景：
  1. 标记所有 \`blocking\` 实体格；
  2. 从场景入口做 8 方向 BFS；
  3. 确认所有门的两侧、所有出口相邻格、所有可交互实体相邻格可达；
  4. 确认从每个出口去程/回程都能完成。
- 不要用“玩家可以穿过没发现的门/暗门”来设计；当前规则是**所有实体占格**，不会穿过实体。

### 18.2 游戏平衡与结局

- **单人必须至少有两条路**：能打赢，或能安全绕过/逃离。不能把“唯一解法”设计成必须击杀高护甲、超高生命怪物。
- 计算单人战斗可行性时，用这几个量：
  - 玩家每次命中平均伤害：武器伤害均值 + 近战加成；
  - 对怪物实际伤害：\`max(0, 平均伤害 - 怪物护甲)\`；
  - 需要命中次数：\`ceil(怪物生命 / 实际伤害)\`；
  - 玩家可承受回合：\`玩家生命 / 怪物平均伤害\`；
  - 如果“需要命中次数 × 命中率”明显大于可承受回合，就必须降低怪物生命/护甲/伤害，或提供强力道具、环境优势、临时状态、逃跑路线。
- 低技能职业（教授、记者等）不能只靠高技能职业的武器数值来平衡；给他们可用的环境道具、群体协作或明确的撤退提示。
- 不要在第一晚过早投放无法处理的追击怪物。可以：
  - 延后出现轮次；
  - 先给警告/声音/痕迹；
  - 允许玩家选择避开；
  - 在单人时提供临时状态或降低敌方数值。
- 时间预算要检查：把关键路径上的移动、调查、旅行、阅读、仪式行动按大轮相加，确保小于 \`deadline\`，并预留失败/绕路时间。
- **每个结局都要有实际路径**，不能只让“全员死亡”或“直接开车离开”可达：
  - 主结局（例如完成仪式）要有完整道具链、地点链和时间余量；
  - 失败结局与离开结局是兜底，不应成为唯一可完成的结局；
  - 对每个结局分别做一次从开局到结局的测试；
  - 不要让关键道具被锁在需要另一个关键道具才能打开、但另一个关键道具又不可达的循环里。
- 胜利结局不应依赖一次极低概率检定；至少提供替代线索、备用道具或多次尝试机会。

---

## 19. 提交前检查清单（智能体可直接逐项执行）

### 结构

- [ ] 顶层对象用 \`module.exports = {...}\` 或 \`export default {...}\`。
- [ ] \`id\` 为 2–49 位小写 ASCII 字母/数字/普通短横线。
- [ ] \`minPlayers\`、\`maxPlayers\`、\`startSceneId\`、\`startPositions\`、\`attributeRules\`、\`items\`、\`occupations\`、\`scenes\`、\`entities\`、\`endings\` 完整。
- [ ] 所有场景 \`rows\` 等长，每个字符都在内置或自定义 \`legend\` 中有定义。
- [ ] 所有实体坐标在边界内、位于可行走格，且不重叠。
- [ ] 所有 \`targetSceneId\`、物品 id、职业物品、容器内容、对话节点都存在。
- [ ] 没有 \`async\` / \`await\` / \`import\` / \`require\` / 网络请求 / 定时器 / 随机墙钟依赖。
- [ ] 所有 handler、条件、钩子都是同步函数。

### 空间与可达性

- [ ] 每扇 \`+\` / \`D\` 门没有被实体占用。
- [ ] 每扇内部门的相对两侧都能站人并可从入口抵达。
- [ ] 每个出口格没有被实体占用，且相邻格可达。
- [ ] 每个可交互实体至少有一个可达的相邻格。
- [ ] 每个场景的入口到所有关键房间、关键道具、关键 NPC 连通。
- [ ] 隐藏实体、盖板、暗门没有切断唯一走廊。
- [ ] 所有出口都测过去程和回程。

### 战斗与平衡

- [ ] 单人至少有一种可行打法，或者有明确且可用的避开/逃跑路线。
- [ ] 敌方生命、护甲、伤害、闪避与玩家武器/技能匹配。
- [ ] 一次战斗的期望命中次数小于玩家可承受回合数。
- [ ] 追杀怪物不会在玩家还没有任何应对手段时过早出现。
- [ ] 关键战斗失败不会永久卡死主线（有替代线索/路线）。
- [ ] 治疗、理智恢复、弹药、钥匙等资源足够支撑到结局。

### 结局与时间

- [ ] 四个（或全部）结局各有可达路径。
- [ ] 主结局可以在 deadline 前完成，并预留绕路时间。
- [ ] \`deadline\` 只是显示，真正的结束由 timer/hook/\`endGame\` 触发。
- [ ] 失败/离开结局不是唯一能完成的结局。
- [ ] \`defeatEndingId\` 真实存在。
- [ ] 所有 \`endGame(id)\` 的 id 都存在于 \`endings\`。

### 叙述与状态

- [ ] 隐藏实体的真名不会在不可见时被叙述泄露。
- [ ] 条件函数是纯函数，不修改状态、不掷骰。
- [ ] 一次性奖励使用 \`once: true\` 或稳定 flag 去重。
- [ ] 重复触发的钩子有幂等保护。
- [ ] 线索/flag/现象 id 稳定，不会因每次文本变化而产生不同 key。
- [ ] 线索和物品引用使用正确的类型与 id。

### 提交前实测

- [ ] 上传后服务端校验通过。
- [ ] 单人开房，实际走一遍主结局。
- [ ] 分别触发每个结局。
- [ ] 用两名玩家验证物品、对话、战斗与场景同步。
- [ ] 检查浏览器控制台没有错误。
- [ ] 检查玩家不会因为一个隐藏实体、门或一次性行动永久卡死。

---

## 20. 运行时排错顺序

1. **先看上传错误**：校验失败通常一次列出多个字段问题；先修 id、引用、坐标、图鉴。
2. **再开单人房**：确认能进入起始场景，所有实体可见/可交互。
3. **检查门与出口**：从入口走到每个房间；打不开门时先查门格是否有实体。
4. **检查时间与结局**：完成主结局，再分别测失败、离开、超时结局。
5. **最后测多人**：两名玩家分别在不同场景、同场景，验证私有视图与物品共享。
6. **看服务端日志**：运行期异常会被捕获并写入服务端日志；浏览器视图报错不一定代表引擎状态错误。

本文件到此已包含编写一个可运行剧本所需的类型、API、完整示例、校验规则、空间连通性、平衡和结局检查。不要依赖未写在本文件中的隐式约定。
`,hi=`/**
 * 最小可运行剧本示例。用于测试上传接口，也可以作为编写新剧本的起点。
 *
 * 上传方式：
 *   curl -X POST http://127.0.0.1:8787/api/scripts \\
 *     -H "Content-Type: application/json" \\
 *     --data-binary @upload.json
 * 或在客户端前厅点击“上传 JS 剧本”。
 */

module.exports = {
    id: 'minimal-night',
    title: '最小剧本：雨夜',
    author: '示例',
    version: '1.0.0',
    description: '一间屋子，一个人，一场可以随时结束的雨。',
    minPlayers: 1,
    maxPlayers: 2,
    startSceneId: 'room',
    startPositions: [
        {
            x: 2,
            y: 2,
        },
    ],
    startTime: '1928-09-12T21:00',
    minutesPerBigRound: 6,
    attributeRules: {
        base: 30,
        pool: 120,
        min: 30,
        max: 85,
    },
    commonItems: [
        'notebook',
    ],
    items: [
        {
            id: 'notebook',
            name: '调查笔记',
            description: '一本空白笔记本。',
            category: 'tool',
            weight: 0.3,
        },
    ],
    occupations: [
        {
            id: 'witness',
            name: '见证者',
            description: '你只是想弄清楚昨晚发生了什么。',
            attributeBonuses: {
                inspiration: 10,
            },
            skills: {
                investigate: 60,
                listen: 55,
                occult: 25,
                dodge: 30,
                fight: 20,
            },
            startingItems: [],
            choiceCount: 0,
            choicePool: [],
        },
    ],
    scenes: [
        {
            id: 'room',
            name: '雨夜小屋',
            description: '雨水敲打窗玻璃。屋内只有一盏灯，和一张空椅子。',
            ambient: '你能听见自己的呼吸。',
            rows: [
                '##########',
                '#........#',
                '#........#',
                '#........#',
                '#........#',
                '#........#',
                '##########',
            ],
            exits: [],
            interactions: [
                {
                    id: 'listen-rain',
                    label: '听雨',
                    verb: 'look',
                    timeCost: 1,
                    handler: (context) => {
                        context.api.narratePlayer(
                            context.actor.id,
                            '雨声里混着很轻的脚步声，停在门外。',
                            'mystery',
                        );
                    },
                },
            ],
        },
    ],
    entities: [
        {
            id: 'stranger',
            sceneId: 'room',
            x: 6,
            y: 2,
            name: '陌生人',
            kind: 'npc',
            description: '一个浑身湿透的人，坐在空椅子旁边，却没有坐在椅子上。',
            glyph: '?',
            blocking: true,
            npc: {
                health: 10,
                agility: 30,
                skills: {
                    dodge: 20,
                },
            },
            interactions: [
                {
                    id: 'finish-story',
                    label: '结束这场调查',
                    verb: 'custom',
                    timeCost: 0,
                    handler: (context) => {
                        context.api.narrate(
                            'all',
                            '陌生人抬起头，对你说了最后一句话：“你终于来了。”',
                        );
                        context.api.endGame('finish');
                    },
                },
            ],
        },
    ],
    endings: [
        {
            id: 'finish',
            title: '雨停了',
            summary: '你活着走出了屋子。',
            description: '雨在凌晨停了。你站在门口，发现外面没有街道，也没有来时的路。',
            scoreBonus: 10,
            rank: 'C · 见证者',
        },
    ],
    defeatEndingId: 'finish',
    intro: '你推开小屋的门。雨声被关在身后。',
    hooks: {
        onGameStart: (context) => {
            context.api.narrate('all', '灯芯轻轻炸了一下。陌生人没有动。', 'mystery');
        },
    },
};
`,_h=[{title:"查询与上下文",methods:[{signature:"getRound()",description:"返回当前大轮、小轮、调查内时间与时限。"},{signature:"getPlayers()",description:"返回所有玩家演员的只读快照。"},{signature:"getPlayer(playerId)",description:"按玩家 ID 查询演员；不存在时返回 undefined。"},{signature:"getEntity(entityId)",description:"查询实体的位置、状态、NPC 数据与揭示状态。"},{signature:"getEntitiesInScene(sceneId)",description:"返回指定场景内所有实体。"},{signature:"getScene(sceneId)",description:"返回静态场景定义（地图、出口、交互）。"},{signature:"getInventory(playerId)",description:"返回玩家的原始物品实例。"},{signature:"getItemTemplate(itemId)",description:"返回物品模板。"},{signature:"hasItem(playerId, itemId)",description:"检查玩家是否持有某物品。"}]},{title:"旗标与全局状态",methods:[{signature:"getFlag(name)",description:"读取房间级脚本旗标。"},{signature:"setFlag(name, value?)",description:"设置旗标；省略 value 时设为 true。"},{signature:"incrementFlag(name, amount?)",description:"递增数值旗标并返回新值。"}]},{title:"叙述与线索",methods:[{signature:"narrate(target, text, tone?)",description:"向全员、场景或指定玩家发送叙述。"},{signature:"narratePlayer(playerId, text, tone?)",description:"只向一名玩家发送叙述。"},{signature:"narrateScene(sceneIdOrText, text?)",description:"向场景广播；单参数时发送给当前行动者所在场景。"},{signature:"giveClue(playerId, clue)",description:"把线索加入玩家的线索簿。"}]},{title:"实体与场景",methods:[{signature:"revealEntity(entityId)",description:"让实体在场景中可见。"},{signature:"hideEntity(entityId)",description:"重新隐藏实体。"},{signature:"discoverEntity(playerId, entityId)",description:"让指定玩家发现实体。"},{signature:"moveEntity(entityId, sceneId, x, y)",description:"移动实体到可行走空格；战斗中返回 false。"},{signature:"removeEntity(entityId)",description:"从房间中移除实体。"},{signature:"spawnEntity(definition)",description:"创建新实体并返回 id。"},{signature:"setEntityDescription(entityId, description)",description:"替换实体描述。"},{signature:"setEntityState(entityId, key, value)",description:"写入实体运行时状态。"},{signature:"getEntityState(entityId, key)",description:"读取实体运行时状态。"},{signature:"setSceneDescription(sceneId, description)",description:"替换场景描述。"}]},{title:"玩家、物品与理智",methods:[{signature:"giveItem(playerId, itemId, quantity?)",description:"给予物品；受重量与栏位限制，失败返回 false。"},{signature:"removeItem(playerId, itemId, quantity?)",description:"移除指定数量物品。"},{signature:"damagePlayer(playerId, amount, reason)",description:"造成伤害；amount 可为数字或骰子表达式。"},{signature:"healPlayer(playerId, amount, reason)",description:"恢复生命。"},{signature:"adjustSanity(playerId, amount, reason, phenomenon?)",description:"调整理智；stable phenomenon 可用于精神固化。"},{signature:"sanityCheck(playerId, options)",description:"理智检定；支持 phenomenon、难度、修正与损失表达式。"},{signature:"check(playerId, request)",description:"技能/属性检定，支持对抗与难度。"},{signature:"roll(expression, reason?)",description:"掷骰并返回总值。"},{signature:"addStatus(playerId, status)",description:"添加状态效果。"},{signature:"removeStatus(playerId, statusId)",description:"移除状态效果。"},{signature:"teleportPlayer(playerId, sceneId, x, y)",description:"切换场景并放置玩家。"},{signature:"awardScore(playerId, points, reason)",description:"增加结局分数。"}]},{title:"计时器、战斗与结局",methods:[{signature:"afterBigRounds(rounds, callback)",description:"在若干大轮后执行回调，返回 timer id。"},{signature:"cancelTimer(timerId)",description:"取消计时器。"},{signature:"startCombat(sceneId, entityIds?)",description:"开始战斗；省略实体时使用场景内所有敌对 NPC。"},{signature:"endCombat()",description:"立即结束当前战斗。"},{signature:"endGame(endingId)",description:"进入指定结局。"}]}],gc=`module.exports = {
    id: 'my-investigation',          // 全局唯一，上传同名会替换
    title: '我的调查',
    author: '你的名字',
    version: '1.0.0',
    description: '一句话介绍。',
    minPlayers: 1,
    maxPlayers: 4,
    startSceneId: 'entrance',
    startPositions: [{ x: 2, y: 2 }],
    startTime: '1928-09-12T21:00',
    minutesPerBigRound: 6,
    attributeRules: { base: 30, pool: 120, min: 30, max: 85 },

    commonItems: ['notebook'],
    items: [],
    occupations: [],
    scenes: [],
    entities: [],
    endings: [],
    hooks: {},
};`,vc=`{
    id: 'entrance',
    name: '门厅',
    description: '门在身后合上。',
    rows: [
        '########',
        '#......#',
        '#..o...#',
        '#......#',
        '########',
    ],
    legend: {
        o: { type: 'floor', name: '地毯', walkable: true },
    },
    exits: [{
        id: 'to-study',
        label: '走进书房',
        x: 3,
        y: 3,
        targetSceneId: 'study',
        targetX: 2,
        targetY: 2,
    }],
    interactions: [{
        id: 'listen',
        label: '聆听',
        timeCost: 1,
        handler: (context) => {
            context.api.narratePlayer(context.actor.id, '楼上有人在走动。');
        },
    }],
}`,xc=`{
    id: 'portrait',
    sceneId: 'entrance',
    x: 3,
    y: 2,
    name: '褪色肖像',
    kind: 'prop',                 // npc | monster | item | container | prop | clue
    description: '画中人的脸被刮掉了。',
    glyph: '▣',
    color: '#8a7657',
    blocking: true,
    interactions: [{
        id: 'look-portrait',
        label: '端详',
        verb: 'look',
        timeCost: 1,
        once: true,
        handler: (context) => {
            context.api.sanityCheck(context.actor.id, {
                reason: '被刮去面孔的肖像',
                phenomenon: 'faceless-portrait',
                phenomenonLabel: '无脸肖像',
                lossOnSuccess: 0,
                lossOnFailure: '1d3',
            });
        },
    }],
}`,wc=`const outcome = context.api.check(context.actor.id, {
    skill: 'investigate',      // 或 attribute: 'wisdom'
    difficulty: 'regular',     // regular | hard | extreme
    modifier: 10,
    reason: '检查书桌',
    opposedBy: {
        kind: 'entity',
        entityId: 'cultist',
        skill: 'stealth',
    },
});

if (outcome.success) {
    context.api.giveClue(context.actor.id, {
        id: 'clue-letter',
        title: '未寄出的信',
        text: '信纸边缘还留着盐粒。',
    });
}`,Lh=[["onGameStart","游戏开始后调用一次。"],["onBigRound","每个大轮结束、状态与计时器处理后调用。"],["onSmallRound","战斗小轮推进时调用。"],["onEnterScene","玩家旅行、传送或脚本移动后进入场景时调用。"],["onCombatEnd","战斗结束时调用。"],["onPlayerDown","玩家倒下或永久疯狂时调用。"],["onEnding","进入结局时调用。"],["checkEnding","每次大轮结束与战斗结束后返回结局 id 或 null。"]],jc={start:"快速开始",schema:"数据结构",api:"脚本 API",example:"完整示例",reference:"完整文档"};function mr(i,u){const o=()=>{const d=document.createElement("textarea");d.value=i,d.style.position="fixed",d.style.opacity="0",document.body.appendChild(d),d.select(),document.execCommand("copy"),d.remove(),window.dispatchEvent(new CustomEvent("guide-notice",{detail:`${u}已复制`}))};if(navigator.clipboard===void 0){o();return}navigator.clipboard.writeText(i).then(()=>{window.dispatchEvent(new CustomEvent("guide-notice",{detail:`${u}已复制`}))}).catch(o)}function mi(i,u){const o=new Blob([u],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(o),h=document.createElement("a");h.href=d,h.download=i,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(d)}function bh(i){const[u,o]=E.useState("start"),[d,h]=E.useState(null);return E.useEffect(()=>{const f=p=>{p.key==="Escape"&&i.onClose()},y=p=>{const x=p.detail;h(x),window.setTimeout(()=>{h(null)},2200)};return window.addEventListener("keydown",f),window.addEventListener("guide-notice",y),()=>{window.removeEventListener("keydown",f),window.removeEventListener("guide-notice",y)}},[i]),l.jsxs("div",{className:"scriptGuide",children:[l.jsxs("header",{className:"guideHeader",children:[l.jsxs("div",{children:[l.jsx("p",{className:"eyebrow",children:"SCRIPT AUTHORING DOSSIER"}),l.jsx("h1",{children:"剧本创作手册"}),l.jsx("p",{className:"guideLead",children:"从最小剧本到完整 API。页面内含可直接下载的示例与完整文档。"})]}),l.jsxs("div",{className:"guideHeaderActions",children:[l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mi("SCRIPT_API.md",fi),children:"下载完整文档"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mi("minimal-script.js",hi),children:"下载最小示例"}),l.jsx("button",{type:"button",className:"primaryButton",onClick:i.onClose,children:"返回调查局"})]})]}),l.jsxs("div",{className:"guideBody",children:[l.jsxs("nav",{className:"guideNav","aria-label":"创作手册章节",children:[Object.keys(jc).map(f=>l.jsx("button",{type:"button",className:u===f?"guideNavActive":"",onClick:()=>o(f),children:jc[f]},f)),l.jsxs("div",{className:"guideNavNote",children:[l.jsx("strong",{children:"代码约束"}),l.jsx("span",{children:"单文件、同步执行、可信 JS"}),l.jsx("span",{children:"4 空格缩进 · 分号 · 尾逗号"}),l.jsx("span",{children:"上传上限 512KB"})]})]}),l.jsxs("main",{className:"guideMain",children:[u==="start"&&l.jsxs("section",{className:"guideSection",children:[l.jsxs("div",{className:"guideSectionTitle",children:[l.jsx("h2",{children:"从一个可运行的空剧本开始"}),l.jsx("span",{children:"5 分钟"})]}),l.jsxs("ol",{className:"guideSteps",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"定义调查框架"}),l.jsx("span",{children:"填写 id、人数、起始场景、属性规则与结局列表。"})]}),l.jsxs("li",{children:[l.jsx("strong",{children:"建立场景与实体"}),l.jsx("span",{children:"每个字符一个瓦片；实体放在可行走格上，交互用 handler 实现。"})]}),l.jsxs("li",{children:[l.jsx("strong",{children:"上传校验"}),l.jsx("span",{children:"在前厅点击“上传 JS 剧本”，服务端会做语法和静态校验，失败会返回具体行号。"})]}),l.jsxs("li",{children:[l.jsx("strong",{children:"开一局测试"}),l.jsx("span",{children:"先验证移动、交互、结局，再逐步加线索、检定和战斗。"})]})]}),l.jsxs("div",{className:"guideCodeBlock",children:[l.jsxs("div",{className:"guideCodeBar",children:[l.jsx("span",{children:"最小脚本骨架"}),l.jsx("div",{children:l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mr(gc,"骨架"),children:"复制"})})]}),l.jsx("pre",{className:"guideCode",children:gc})]}),l.jsxs("div",{className:"guideCallout",children:[l.jsx("strong",{children:"运行环境"}),l.jsx("p",{children:"剧本是可信 JavaScript，由服务端或本地 WebWorker 同步执行。 不要使用 await、网络请求或依赖 Node 内置模块；上传前先在本地测试。"})]}),l.jsxs("div",{className:"guidePitfalls",children:[l.jsx("h3",{children:"三个最容易被忽略的错误"}),l.jsxs("div",{children:[l.jsx("strong",{children:"1. 看起来像短横线的 Unicode 字符"}),l.jsxs("p",{children:["剧本/场景/物品 id 请只用 ASCII 的 ",l.jsx("code",{children:"-"}),"。 从网页或聊天软件复制时可能带入 ",l.jsx("code",{children:"‑"}),"（U+2011）、",l.jsx("code",{children:"–"})," 或 ",l.jsx("code",{children:"—"}),"，校验会失败或引用对不上。"]})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"2. 出口落点写成 targetX + y"}),l.jsxs("p",{children:["出口自身是 ",l.jsx("code",{children:"x"}),"/",l.jsx("code",{children:"y"}),"，目标落点是"," ",l.jsx("code",{children:"targetX"}),"/",l.jsx("code",{children:"targetY"}),"。写成"," ",l.jsx("code",{children:"targetX: 2, y: 2"})," 会让目标纵坐标变成"," ",l.jsx("code",{children:"undefined"}),"，所有出口都报“目的地没有可落脚的位置”。"]})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"3. 把实体类型写进瓦片 type"}),l.jsxs("p",{children:[l.jsx("code",{children:"legend"})," 的 ",l.jsx("code",{children:"type"})," 只能是"," ",l.jsx("code",{children:"floor"}),"、",l.jsx("code",{children:"wall"}),"、",l.jsx("code",{children:"door"}),"、",l.jsx("code",{children:"grass"}),"、",l.jsx("code",{children:"tree"}),"、",l.jsx("code",{children:"water"}),"、",l.jsx("code",{children:"road"}),"、",l.jsx("code",{children:"stone"}),"、",l.jsx("code",{children:"ritual"}),"、",l.jsx("code",{children:"stairs"}),"、",l.jsx("code",{children:"void"}),"。 写 ",l.jsx("code",{children:"prop"})," 不会阻止上传，但会绘制成未知黑块。"]})]})]})]}),u==="schema"&&l.jsxs("section",{className:"guideSection",children:[l.jsxs("div",{className:"guideSectionTitle",children:[l.jsx("h2",{children:"数据结构"}),l.jsx("span",{children:"ScriptDefinition"})]}),l.jsxs("div",{className:"guideCodeBlock",children:[l.jsxs("div",{className:"guideCodeBar",children:[l.jsx("span",{children:"场景"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mr(vc,"场景示例"),children:"复制"})]}),l.jsx("pre",{className:"guideCode",children:vc})]}),l.jsxs("div",{className:"guideCodeBlock",children:[l.jsxs("div",{className:"guideCodeBar",children:[l.jsx("span",{children:"实体与交互"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mr(xc,"实体示例"),children:"复制"})]}),l.jsx("pre",{className:"guideCode",children:xc})]}),l.jsxs("div",{className:"guideTwoColumns",children:[l.jsxs("article",{className:"guideCard",children:[l.jsx("h3",{children:"场景字段"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("code",{children:"rows"})," 等长字符串；字符映射到 legend。"]}),l.jsxs("li",{children:[l.jsx("code",{children:"legend"})," 可覆盖默认瓦片；",l.jsx("code",{children:"walkable"})," 控制通行。"]}),l.jsxs("li",{children:[l.jsx("code",{children:"exits"})," 定义旅行目标、落点与 cost。"]}),l.jsxs("li",{children:[l.jsx("code",{children:"interactions"})," 是随时可用的场景行动。"]})]})]}),l.jsxs("article",{className:"guideCard",children:[l.jsx("h3",{children:"实体字段"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("code",{children:"kind"})," 决定绘制与可交互类型。"]}),l.jsxs("li",{children:[l.jsx("code",{children:"hidden"})," 初始不可见；",l.jsx("code",{children:"blocking"})," 仍占格。"]}),l.jsxs("li",{children:[l.jsx("code",{children:"npc"})," 定义生命、敏捷、技能与武器。"]}),l.jsxs("li",{children:[l.jsx("code",{children:"container"})," 定义容器内容与钥匙。"]})]})]}),l.jsxs("article",{className:"guideCard",children:[l.jsx("h3",{children:"交互与检定"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("code",{children:"timeCost"})," 默认 1 大轮，战斗道具固定 1 小轮。"]}),l.jsxs("li",{children:[l.jsx("code",{children:"check"})," 可指定技能/属性、难度、修正和对抗。"]}),l.jsxs("li",{children:[l.jsx("code",{children:"success"})," / ",l.jsx("code",{children:"failure"})," / ",l.jsx("code",{children:"handler"})," 都是同步函数。"]}),l.jsxs("li",{children:[l.jsx("code",{children:"once"})," 限制每名玩家只能成功一次。"]})]})]}),l.jsxs("article",{className:"guideCard",children:[l.jsx("h3",{children:"理智与精神固化"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("code",{children:"sanityCheck"})," 支持 phenomenon 稳定标识。"]}),l.jsx("li",{children:"默认累计 3 次后获得“精神固化”。"}),l.jsxs("li",{children:["可用 ",l.jsx("code",{children:"phenomenonFixationThreshold"})," 调整阈值。"]}),l.jsx("li",{children:"固化后不再检定，也不再扣理智。"})]})]})]})]}),u==="api"&&l.jsxs("section",{className:"guideSection",children:[l.jsxs("div",{className:"guideSectionTitle",children:[l.jsx("h2",{children:"脚本 API"}),l.jsx("span",{children:"context.api"})]}),l.jsxs("p",{className:"guideIntro",children:["所有 handler 都会收到 ",l.jsx("code",{children:"ActionContext"}),"：",l.jsx("code",{children:"actor"}),"、可选的 ",l.jsx("code",{children:"entity"})," /"," ",l.jsx("code",{children:"scene"})," / ",l.jsx("code",{children:"item"})," /",l.jsx("code",{children:"itemInstance"}),"、",l.jsx("code",{children:"round"})," 和"," ",l.jsx("code",{children:"api"}),"。"]}),l.jsxs("div",{className:"guideCodeBlock",children:[l.jsxs("div",{className:"guideCodeBar",children:[l.jsx("span",{children:"检定示例"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mr(wc,"检定示例"),children:"复制"})]}),l.jsx("pre",{className:"guideCode",children:wc})]}),_h.map(f=>l.jsxs("article",{className:"guideApiGroup",children:[l.jsx("h3",{children:f.title}),l.jsx("div",{className:"guideApiTable",children:f.methods.map(y=>l.jsxs("div",{className:"guideApiRow",children:[l.jsx("code",{children:y.signature}),l.jsx("span",{children:y.description})]},y.signature))})]},f.title)),l.jsxs("article",{className:"guideCard",children:[l.jsx("h3",{children:"钩子"}),l.jsx("div",{className:"guideHookTable",children:Lh.map(([f,y])=>l.jsxs("div",{children:[l.jsx("code",{children:f}),l.jsx("span",{children:y})]},f))})]})]}),u==="example"&&l.jsxs("section",{className:"guideSection",children:[l.jsxs("div",{className:"guideSectionTitle",children:[l.jsx("h2",{children:"完整最小示例"}),l.jsx("span",{children:"完整可运行示例"})]}),l.jsx("p",{className:"guideIntro",children:"这是一个完整可上传的剧本：包含职业、物品、场景、实体、交互、计时器与结局。 可以直接下载后修改 id 与文本。"}),l.jsxs("div",{className:"guideCodeBlock",children:[l.jsxs("div",{className:"guideCodeBar",children:[l.jsx("span",{children:"minimal-script.js"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mr(hi,"完整示例"),children:"复制"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mi("minimal-script.js",hi),children:"下载"})]})]}),l.jsx("pre",{className:"guideCode guideCodeTall",children:hi})]})]}),u==="reference"&&l.jsxs("section",{className:"guideSection",children:[l.jsxs("div",{className:"guideSectionTitle",children:[l.jsx("h2",{children:"完整 API 文档"}),l.jsx("span",{children:"完整 Markdown 文档"})]}),l.jsx("p",{className:"guideIntro",children:"下面是随客户端打包的完整 Markdown 文档，包含类型、字段、API、示例与排查表。 也可以下载为 .md 文件。"}),l.jsxs("div",{className:"guideCodeBlock",children:[l.jsxs("div",{className:"guideCodeBar",children:[l.jsx("span",{children:"完整文档"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mr(fi,"完整文档"),children:"复制"}),l.jsx("button",{type:"button",className:"ghostButton",onClick:()=>mi("SCRIPT_API.md",fi),children:"下载"})]})]}),l.jsx("pre",{className:"guideCode guideCodeTall",children:fi})]})]})]})]}),d!==null&&l.jsx("div",{className:"guideNotice",role:"status",children:d})]})}function Mh(i){const u=new Worker(new URL(""+new URL("LocalWorker-I_0MsETW.js",import.meta.url).href,import.meta.url),{type:"module"});let o=!1;return u.addEventListener("message",d=>{i.onEvent(d.data)}),u.addEventListener("error",d=>{i.onStatus("error",d.message||"本地调查局启动失败。")}),i.onStatus("open"),{send:d=>{o||u.postMessage(d)},close:()=>{o=!0,u.terminate(),i.onStatus("closed")}}}function Ah(i,u){let o;try{o=new WebSocket(i)}catch(f){return u.onStatus("error",f instanceof Error?f.message:"无法创建 WebSocket 连接。"),{send:()=>{},close:()=>{}}}const d=[];let h=!1;return o.addEventListener("open",()=>{for(u.onStatus("open");d.length>0;){const f=d.shift();f!==void 0&&o.send(JSON.stringify(f))}}),o.addEventListener("message",f=>{try{const y=JSON.parse(f.data);u.onEvent(y)}catch{u.onStatus("error","服务器返回了无法解析的消息。")}}),o.addEventListener("error",()=>{h||u.onStatus("error","与服务器的连接发生错误。")}),o.addEventListener("close",()=>{h||u.onStatus("closed","与服务器的连接已断开。")}),{send:f=>{h||(o.readyState===WebSocket.OPEN?o.send(JSON.stringify(f)):o.readyState===WebSocket.CONNECTING&&d.push(f))},close:()=>{h=!0,d.length=0,o.close(),u.onStatus("closed")}}}function Bh(i){const u=i.protocol==="https:"?"wss:":"ws:",o=new URL(".",i.href).pathname,d=o.endsWith("/")?o:`${o}/`;return`${u}//${i.host}${d}ws`}const da={status:"closed",welcomed:!1,serverLabel:"",scripts:[],rooms:[],view:null,toast:null,fatal:null};function Dh(){const[i,u]=E.useState(da),o=E.useRef(null),d=E.useRef(!1),h=E.useCallback(N=>{switch(N.type){case"welcome":u(I=>({...I,status:"open",welcomed:!0,serverLabel:N.serverLabel,scripts:N.scripts,rooms:N.rooms,fatal:null}));break;case"view":u(I=>({...I,welcomed:!0,status:"open",view:N.view,toast:null})),typeof window<"u"&&(window.localStorage.setItem(`dunwich-token:${N.view.room.code}:${N.view.self.playerId}`,N.view.self.sessionToken),window.localStorage.setItem("dunwich-last-room",N.view.room.code),window.localStorage.setItem("dunwich-last-player",N.view.self.playerId));break;case"scriptList":u(I=>({...I,scripts:N.scripts}));break;case"roomList":u(I=>({...I,rooms:N.rooms}));break;case"error":u(I=>({...I,toast:N.message}));break;case"info":u(I=>({...I,toast:N.message}));break;case"leftRoom":u(I=>({...I,view:null}));break}},[]),f=E.useCallback((N,I)=>{var K;d.current=!1,(K=o.current)==null||K.close(),o.current=null,u({...da,status:"connecting"});const V={onEvent:h,onStatus:(A,R)=>{if(A==="open"){u(_=>({..._,status:"open"}));return}if(A==="closed"||A==="error"){if(d.current)return;u(_=>({..._,status:A,welcomed:!1,view:null,fatal:R??(A==="error"?"连接失败。":"与调查局的连接已断开。")}))}}};o.current=N==="local"?Mh(V):Ah(I??Nc(),V)},[h]),y=E.useCallback(()=>{var N;d.current=!0,(N=o.current)==null||N.close(),o.current=null,u({...da,status:"closed"})},[]),p=E.useCallback(N=>{var I;(I=o.current)==null||I.send(N)},[]),x=E.useCallback(()=>{u(N=>({...N,toast:null}))},[]),w=E.useCallback(()=>{u(N=>({...N,fatal:null,status:"closed"}))},[]);return E.useEffect(()=>{if(i.toast===null)return;const N=window.setTimeout(()=>{u(I=>({...I,toast:null}))},4200);return()=>{window.clearTimeout(N)}},[i.toast]),E.useEffect(()=>()=>{var N;(N=o.current)==null||N.close()},[]),{state:i,connect:f,disconnect:y,send:p,clearToast:x,dismissFatal:w}}function Nc(){return typeof window>"u"?"ws://127.0.0.1:8787/ws":Bh(window.location)}function Oh(){var Te,P,F,ge,ne;const i=Dh(),[u,o]=E.useState(()=>typeof window>"u"?"":window.localStorage.getItem("dunwich-player-id")??""),[d,h]=E.useState("local"),[f,y]=E.useState(()=>Nc()),{route:p,navigate:x}=vh(),w=E.useRef(i.state.welcomed),N=E.useRef(((Te=i.state.view)==null?void 0:Te.room.code)??null),I=E.useRef(!1),V=typeof window<"u"&&(window.location.pathname==="/admin"||window.location.pathname==="/admin/")&&(window.location.hash===""||window.location.hash==="#/admin"),K=p.name==="admin"||V,A=i.state.welcomed?i.state.view===null?{name:"lobby"}:{name:"room",code:i.state.view.room.code}:{name:"landing"},R=p.name==="guide",_=E.useRef(p);E.useEffect(()=>{typeof window>"u"||(window.location.pathname==="/admin"?x({name:"admin"},{replace:!0}):window.location.hash===""?x({name:"landing"},{replace:!0}):p.name==="room"&&!i.state.welcomed&&x({name:"landing"},{replace:!0}))},[x]),E.useEffect(()=>{var Pe;const Ne=i.state.welcomed,fe=((Pe=i.state.view)==null?void 0:Pe.room.code)??null;if(!Ne){const Ie=w.current;w.current=!1,N.current=null,Ie&&p.name!=="guide"&&p.name!=="admin"&&x({name:"landing"},{replace:!0});return}if(!w.current){w.current=!0,N.current=null,p.name!=="guide"&&p.name!=="admin"&&x({name:"lobby"},{replace:!1});return}if(fe!==null&&fe!==N.current){N.current=fe,p.name!=="guide"&&p.name!=="admin"&&x({name:"room",code:fe},{replace:!1});return}fe===null&&N.current!==null&&(N.current=null,p.name!=="guide"&&p.name!=="admin"&&x({name:"lobby"},{replace:!0}))},[i.state.welcomed,(P=i.state.view)==null?void 0:P.room.code,x,p.name]),E.useEffect(()=>{if(_.current!==p&&(_.current=p,!(p.name==="guide"||p.name==="admin"))){if(p.name==="room"){if(!i.state.welcomed){x({name:"landing"},{replace:!0});return}const Ne=i.state.view;if(Ne===null){x({name:"lobby"},{replace:!0});return}I.current=!1,p.code!==Ne.room.code&&x({name:"room",code:Ne.room.code},{replace:!0});return}if(p.name==="lobby"){if(!i.state.welcomed)return;if(i.state.view!==null){if(!I.current){if(i.state.view.phase!=="lobby"&&!window.confirm("返回前厅会离开当前调查，确定吗？")){x({name:"room",code:i.state.view.room.code},{replace:!0});return}I.current=!0,i.send({type:"leaveRoom"})}}else I.current=!1;return}if(!i.state.welcomed){I.current=!1;return}I.current||(I.current=!0,i.disconnect())}},[p,i.state.welcomed,(F=i.state.view)==null?void 0:F.room.code,x]),E.useEffect(()=>{u.length>0&&window.localStorage.setItem("dunwich-player-id",u)},[u]),E.useEffect(()=>{i.state.view!==null&&o(i.state.view.self.playerId)},[i.state.view]),E.useEffect(()=>{typeof window<"u"&&window.scrollTo(0,0)},[(ge=i.state.view)==null?void 0:ge.phase,(ne=i.state.view)==null?void 0:ne.room.code,i.state.view===null]),E.useEffect(()=>{const Ne=fe=>{const Pe=fe.target;Pe instanceof Element&&Pe.closest("button")!==null&&An.play("click")};return document.addEventListener("click",Ne,!0),()=>{document.removeEventListener("click",Ne,!0)}},[]);const ce=()=>{ha.test(u)&&(I.current=!1,i.connect(d,f))},te=Ne=>{i.send(Ne)},Ce=()=>{I.current=!0,i.send({type:"leaveRoom"})},Se=()=>{x({name:"guide"})},ke=()=>{x(A,{replace:!0})};return K?l.jsx(Af,{}):l.jsxs("div",{className:"app",children:[i.state.welcomed?i.state.view===null?l.jsx(wh,{playerId:u,onPlayerIdChange:o,serverLabel:i.state.serverLabel,scripts:i.state.scripts,rooms:i.state.rooms,inRoom:!1,onCreateRoom:Ne=>te({type:"createRoom",scriptId:Ne,playerId:u}),onJoinRoom:(Ne,fe)=>te({type:"joinRoom",roomCode:Ne,playerId:u,token:fe}),onUploadScript:(Ne,fe)=>te({type:"uploadScript",name:Ne,code:fe}),onRefresh:()=>{te({type:"listScripts"}),te({type:"listRooms"})},onDisconnect:i.disconnect,onLeaveRoom:Ce}):i.state.view.phase==="lobby"?l.jsx(Rh,{view:i.state.view,onSend:te,onLeave:Ce}):l.jsx(yh,{view:i.state.view,onSend:te,onLeave:Ce}):l.jsx(xh,{playerId:u,onPlayerIdChange:o,mode:d,onModeChange:h,remoteUrl:f,onRemoteUrlChange:y,status:i.state.status,fatal:i.state.fatal,onConnect:ce,onDismissFatal:i.dismissFatal}),i.state.toast!==null&&l.jsxs("div",{className:"toast",role:"status",children:[l.jsx("span",{children:i.state.toast}),l.jsx("button",{type:"button",className:"ghostButton",onClick:i.clearToast,children:"关闭"})]}),R&&l.jsx(bh,{onClose:ke}),!R&&(i.state.view===null||i.state.view.phase==="lobby")&&l.jsx("button",{type:"button",className:"guideLauncher",onClick:Se,children:"剧本创作手册"}),!R&&!K&&(i.state.view===null||i.state.view.phase==="lobby")&&l.jsx("a",{className:"adminEntry",href:"#/admin",children:"后台管理"})]})}const Cc=document.getElementById("root");if(Cc===null)throw new Error("找不到 #root 挂载点。");_f.createRoot(Cc).render(l.jsx(E.StrictMode,{children:l.jsx(Oh,{})}));
//# sourceMappingURL=index-DiayMawa.js.map
