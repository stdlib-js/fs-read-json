// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,h,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,u,l,f,s,p,g,d,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var P,A=Object.prototype,F=A.toString,C=A.__defineGetter__,I=A.__defineSetter__,R=A.__lookupGetter__,$=A.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&I&&I.call(r,e,t.set),r};var B=P;function L(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){return"string"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&W.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";var N=Z()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[z],e=H(r,z);try{r[z]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[z]=t:delete r[z],n}:function(r){return U.call(r)},D=String.prototype.valueOf;var J=Z();function q(r){return"object"==typeof r&&(r instanceof String||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object String]"===N(r)))}function K(r){return M(r)||q(r)}L(K,"isPrimitive",M),L(K,"isObject",q);var Q=Array.isArray?Array.isArray:function(r){return"[object Array]"===N(r)};var Y=/./;function rr(r){return"boolean"==typeof r}var er=Boolean,tr=Boolean.prototype.toString;var nr=Z();function ir(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===N(r)))}function or(r){return rr(r)||ir(r)}L(or,"isPrimitive",rr),L(or,"isObject",ir);var ar="object"==typeof self?self:null,cr="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},lr="object"==typeof ur?ur:null,fr="object"==typeof globalThis?globalThis:null;var sr=function(r){if(arguments.length){if(!rr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(fr)return fr;if(ar)return ar;if(cr)return cr;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=sr.document&&sr.document.childNodes,gr=Int8Array;function dr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;function vr(r){return null!==r&&"object"==typeof r}function hr(r){var e,t,n,i;if(("Object"===(t=N(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(dr,"REGEXP",yr),L(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Q(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var br="function"==typeof Y||"object"==typeof gr||"function"==typeof pr?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e};function wr(r){return"function"===br(r)}var mr,jr=Object,_r=Object.getPrototypeOf;mr=wr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===N(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=mr;var Or=Object.prototype;function Sr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Q(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),Er(r))}(r),!e||!H(r,"constructor")&&H(e,"constructor")&&wr(e.constructor)&&"[object Function]"===N(e.constructor)&&H(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===Or||function(r){var e;for(e in r)if(!H(r,e))return!1;return!0}(r)))}function Tr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var kr=Tr(Object.freeze({__proto__:null,default:{}})),xr=kr.readFile;function Vr(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);xr.apply(null,r)}var Pr=kr.readFileSync;function Ar(r,e){var t;try{t=arguments.length>1?Pr(r,e):Pr(r)}catch(r){return r}return t}L(Vr,"sync",Ar);var Fr=65279;function Cr(r){if(!M(r))throw new TypeError(V("invalid argument. Must provide a string. Value: `%s`.",r));return r.charCodeAt(0)===Fr?r.slice(1):r}function Ir(r,e){if(!M(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1&&!wr(e))throw new TypeError(V("invalid argument. Reviver argument must be a function. Value: `%s`.",e));try{return JSON.parse(r,e)}catch(r){return r}}function Rr(r,e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}function $r(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function Br(r,e,t){var n,i;if(arguments.length<3)n={},i=e;else{if(M(e))n={encoding:e};else{if(!Sr(e))throw new TypeError($r("0OH3t",e));n=e}i=t}if(!wr(i))throw new TypeError($r("0OH2b",i));Vr(r,n,(function(r,e){if(r)return i(r);e=e.toString(),"utf8"===n.encoding&&(e=Cr(e));e=n.reviver?Ir(e,n.reviver):Ir(e);if(Rr(e,Error))return i(e);i(null,e)}))}function Lr(r,e){var t,n;if(arguments.length>1)if(M(e))t={encoding:e};else{if(!Sr(e))throw new TypeError($r("0OH3t",e));t=e}else t={};return Rr(n=Ar(r,t),Error)?n:(n=n.toString(),"utf8"===t.encoding&&(n=Cr(n)),t.reviver?Ir(n,t.reviver):Ir(n))}L(Br,"sync",Lr);export{Br as default,Lr as sync};
//# sourceMappingURL=mod.js.map
