// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).readJSON=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,c=n.__lookupGetter__,u=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,l,s,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),s="get"in t,p="set"in t,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e};var f=r;function l(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(e){return"string"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return p&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;function v(e,r){return null!=e&&y.call(e,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var b=g()?function(e){var r,t,n;if(null==e)return d.call(e);t=e[h],r=v(e,h);try{e[h]=void 0}catch(r){return d.call(e)}return n=d.call(e),r?e[h]=t:delete e[h],n}:function(e){return d.call(e)},w=String.prototype.valueOf;var m=g();function j(e){return"object"==typeof e&&(e instanceof String||(m?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object String]"===b(e)))}function _(e){return s(e)||j(e)}l(_,"isPrimitive",s),l(_,"isObject",j);var E=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};var O=/./;function S(e){return"boolean"==typeof e}var x=Boolean.prototype.toString;var T=g();function k(e){return"object"==typeof e&&(e instanceof Boolean||(T?function(e){try{return x.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function V(e){return S(e)||k(e)}function A(){return new Function("return this;")()}l(V,"isPrimitive",S),l(V,"isObject",k);var P="object"==typeof self?self:null,F="object"==typeof window?window:null,C="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof C?C:null;var $=function(e){if(arguments.length){if(!S(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return A()}if(P)return P;if(F)return F;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),R=$.document&&$.document.childNodes,B=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;function M(e){return null!==e&&"object"==typeof e}function N(e){var r,t,n,i;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=G.exec(n.toString()))return r[1]}return M(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}l(L,"REGEXP",G),l(M,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!E(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(M));var Z="function"==typeof O||"object"==typeof B||"function"==typeof R?function(e){return N(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?N(e).toLowerCase():r};function U(e){return"function"===Z(e)}var W,X=Object.getPrototypeOf;W=U(Object.getPrototypeOf)?X:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===b(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var z=W;var J=Object.prototype;function D(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!E(e)}(e)&&(r=function(e){return null==e?null:(e=Object(e),z(e))}(e),!r||!v(e,"constructor")&&v(r,"constructor")&&U(r.constructor)&&"[object Function]"===b(r.constructor)&&v(r,"isPrototypeOf")&&U(r.isPrototypeOf)&&(r===J||function(e){var r;for(r in e)if(!v(e,r))return!1;return!0}(e)))}function q(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var H=q(Object.freeze({__proto__:null,default:{}})),K=H.readFile;function Q(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);K.apply(null,e)}var Y=H.readFileSync;function ee(e,r){var t;try{t=arguments.length>1?Y(e,r):Y(e)}catch(e){return e}return t}function re(e){return"number"==typeof e}function te(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ne(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+te(i):te(i)+e,n&&(e="-"+e)),e}l(Q,"sync",ee);var ie=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function ae(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!re(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=ne(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=ne(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===oe.call(e.specifier)?oe.call(t):ie.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ce(e){return"string"==typeof e}var ue=Math.abs,fe=String.prototype.toLowerCase,le=String.prototype.toUpperCase,se=String.prototype.replace,pe=/e\+(\d)$/,ge=/e-(\d)$/,de=/^(\d+)$/,ye=/^(\d+)e/,ve=/\.0$/,he=/\.0*e/,be=/(\..*[^0])0*e/;function we(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!re(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":ue(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=se.call(t,be,"$1e"),t=se.call(t,he,"e"),t=se.call(t,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=se.call(t,pe,"e+0$1"),t=se.call(t,ge,"e-0$1"),e.alternate&&(t=se.call(t,de,"$1."),t=se.call(t,ye,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===le.call(e.specifier)?le.call(t):fe.call(t)}function me(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function je(e,r,t){var n=r-e.length;return n<0?e:e=t?e+me(n):me(n)+e}var _e=String.fromCharCode,Ee=isNaN,Oe=Array.isArray;function Se(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function xe(e){var r,t,n,i,o,a,c,u,f;if(!Oe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(ce(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=Se(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ee(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ee(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=ae(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Ee(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ee(o)?String(n.arg):_e(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=we(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ne(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=je(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Te=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ke(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ve(e){var r,t,n,i;for(t=[],i=0,n=Te.exec(e);n;)(r=e.slice(i,Te.lastIndex-n[0].length)).length&&t.push(r),t.push(ke(n)),i=Te.lastIndex,n=Te.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Ae(e){return"string"==typeof e}function Pe(e){var r,t,n;if(!Ae(e))throw new TypeError(Pe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ve(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return xe.apply(null,t)}function Fe(e){if(!s(e))throw new TypeError(Pe("invalid argument. Must provide a string. Value: `%s`.",e));return 65279===e.charCodeAt(0)?e.slice(1):e}function Ce(e,r){if(!s(e))throw new TypeError("invalid argument. First argument must be a string. Value: `"+e+"`.");if(arguments.length>1&&!U(r))throw new TypeError("invalid argument. Reviver argument must be a function. Value: `"+r+"`.");try{return JSON.parse(e,r)}catch(e){return e}}function Ie(e,r){if("function"!=typeof r)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+r+"`.");return e instanceof r}function $e(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function Re(e,r,t){var n,i;if(arguments.length<3)n={},i=r;else{if(s(r))n={encoding:r};else{if(!D(r))throw new TypeError($e("0C346",r));n=r}i=t}if(!U(i))throw new TypeError($e("0C32n",i));function o(e,r){return e?i(e):(r=r.toString(),"utf8"===n.encoding&&(r=Fe(r)),Ie(r=n.reviver?Ce(r,n.reviver):Ce(r),Error)?i(r):void i(null,r))}Q(e,n,o)}return l(Re,"sync",(function(e,r){var t,n;if(arguments.length>1)if(s(r))t={encoding:r};else{if(!D(r))throw new TypeError($e("0C346",r));t=r}else t={};return Ie(n=ee(e,t),Error)?n:(n=n.toString(),"utf8"===t.encoding&&(n=Fe(n)),t.reviver?Ce(n,t.reviver):Ce(n))})),Re}));
//# sourceMappingURL=browser.js.map
