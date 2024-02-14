// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,O=isNaN,E=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,l,f,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(u(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){return"string"==typeof r}function A(r){var e,t;if(!P(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var C,$=Object.prototype,I=$.toString,R=$.__defineGetter__,B=$.__defineSetter__,L=$.__lookupGetter__,M=$.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(L.call(r,e)||M.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&R&&R.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=C;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(r){return"string"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&z.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var H=U()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[q],e=D(r,q);try{r[q]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[q]=t:delete r[q],n}:function(r){return X.call(r)},K=String.prototype.valueOf;var Q=U();function Y(r){return"object"==typeof r&&(r instanceof String||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function rr(r){return N(r)||Y(r)}Z(rr,"isPrimitive",N),Z(rr,"isObject",Y);var er=Object.prototype.toString;var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"";var or=U()?function(r){var e,t,n;if(null==r)return er.call(r);t=r[nr],e=D(r,nr);try{r[nr]=void 0}catch(e){return er.call(r)}return n=er.call(r),e?r[nr]=t:delete r[nr],n}:function(r){return er.call(r)};var ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};var ar=/./;function cr(r){return"boolean"==typeof r}var ur=Object.prototype.toString;var lr="function"==typeof Symbol?Symbol:void 0,fr="function"==typeof lr?lr.toStringTag:"";var sr=U()?function(r){var e,t,n;if(null==r)return ur.call(r);t=r[fr],e=D(r,fr);try{r[fr]=void 0}catch(e){return ur.call(r)}return n=ur.call(r),e?r[fr]=t:delete r[fr],n}:function(r){return ur.call(r)},pr=Boolean,gr=Boolean.prototype.toString;var yr=U();function dr(r){return"object"==typeof r&&(r instanceof pr||(yr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===sr(r)))}function vr(r){return cr(r)||dr(r)}function br(){return new Function("return this;")()}Z(vr,"isPrimitive",cr),Z(vr,"isObject",dr);var hr="object"==typeof self?self:null,wr="object"==typeof window?window:null,mr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},jr="object"==typeof mr?mr:null,Sr="object"==typeof globalThis?globalThis:null;var _r=function(r){if(arguments.length){if(!cr(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return br()}if(Sr)return Sr;if(hr)return hr;if(wr)return wr;if(jr)return jr;throw new Error("unexpected error. Unable to resolve global object.")}(),Or=_r.document&&_r.document.childNodes,Er=Int8Array;var Tr=Object.prototype.toString;var kr="function"==typeof Symbol?Symbol:void 0,xr="function"==typeof kr?kr.toStringTag:"";var Vr=U()?function(r){var e,t,n;if(null==r)return Tr.call(r);t=r[xr],e=D(r,xr);try{r[xr]=void 0}catch(e){return Tr.call(r)}return n=Tr.call(r),e?r[xr]=t:delete r[xr],n}:function(r){return Tr.call(r)};function Fr(){return/^\s*function\s*([^(]*)/i}var Pr=/^\s*function\s*([^(]*)/i;function Ar(r){return null!==r&&"object"==typeof r}function Cr(r){var e,t,n,o;if(("Object"===(t=Vr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Pr.exec(n.toString()))return e[1]}return Ar(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(Fr,"REGEXP",Pr),Z(Ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ar));var $r="function"==typeof ar||"object"==typeof Er||"function"==typeof Or?function(r){return Cr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Cr(r).toLowerCase():e};function Ir(r){return"function"===$r(r)}var Rr=Object,Br=Object.getPrototypeOf,Lr=Object.prototype.toString;var Mr="function"==typeof Symbol?Symbol:void 0,Gr="function"==typeof Mr?Mr.toStringTag:"";var Zr,Nr=U()?function(r){var e,t,n;if(null==r)return Lr.call(r);t=r[Gr],e=D(r,Gr);try{r[Gr]=void 0}catch(e){return Lr.call(r)}return n=Lr.call(r),e?r[Gr]=t:delete r[Gr],n}:function(r){return Lr.call(r)};Zr=Ir(Object.getPrototypeOf)?Br:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Nr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Wr=Zr;var Ur=Object.prototype.toString;var Xr="function"==typeof Symbol?Symbol:void 0,zr="function"==typeof Xr?Xr.toStringTag:"";var Dr=U()?function(r){var e,t,n;if(null==r)return Ur.call(r);t=r[zr],e=D(r,zr);try{r[zr]=void 0}catch(e){return Ur.call(r)}return n=Ur.call(r),e?r[zr]=t:delete r[zr],n}:function(r){return Ur.call(r)},Jr=Object.prototype;function qr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!ir(r)}(r)&&(e=function(r){return null==r?null:(r=Rr(r),Wr(r))}(r),!e||!D(r,"constructor")&&D(e,"constructor")&&Ir(e.constructor)&&"[object Function]"===Dr(e.constructor)&&D(e,"isPrototypeOf")&&Ir(e.isPrototypeOf)&&(e===Jr||function(r){var e;for(e in r)if(!D(r,e))return!1;return!0}(r)))}function Hr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var Kr=Hr(Object.freeze({__proto__:null,default:{}})),Qr=Kr.readFile;function Yr(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Qr.apply(null,r)}var re=Kr.readFileSync;function ee(r,e){var t;try{t=arguments.length>1?re(r,e):re(r)}catch(r){return r}return t}Z(Yr,"sync",ee);function te(r){if(!N(r))throw new TypeError(A("invalid argument. Must provide a string. Value: `%s`.",r));return 65279===r.charCodeAt(0)?r.slice(1):r}function ne(r,e){if(!N(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1&&!Ir(e))throw new TypeError(A("invalid argument. Reviver argument must be a function. Value: `%s`.",e));try{return JSON.parse(r,e)}catch(r){return r}}function oe(r,e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}function ie(r,e,t){var n,o;if(arguments.length<3)n={},o=e;else{if(N(e))n={encoding:e};else{if(!qr(e))throw new TypeError(A("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));n=e}o=t}if(!Ir(o))throw new TypeError(A("invalid argument. Callback argument must be a function. Value: `%s`.",o));function i(r,e){return r?o(r):(e=e.toString(),"utf8"===n.encoding&&(e=te(e)),oe(e=n.reviver?ne(e,n.reviver):ne(e),Error)?o(e):void o(null,e))}Yr(r,n,i)}function ae(r,e){var t,n;if(arguments.length>1)if(N(e))t={encoding:e};else{if(!qr(e))throw new TypeError(A("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));t=e}else t={};return oe(n=ee(r,t),Error)?n:(n=n.toString(),"utf8"===t.encoding&&(n=te(n)),t.reviver?ne(n,t.reviver):ne(n))}Z(ie,"sync",ae);export{ie as default,ae as sync};
//# sourceMappingURL=mod.js.map
