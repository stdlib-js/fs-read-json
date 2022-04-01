// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var l=t.isPrimitive,a=r,j=s,f=i,v=n,g=o,p=m,u=d;var c=function(e,t,r){var s,i;if(arguments.length<3)s={},i=t;else{if(l(t))s={encoding:t};else{if(!a(t))throw new TypeError(u("invalid argument. Options argument must be either a string or an object. Value: `%s`.",t));s=t}i=r}if(!j(i))throw new TypeError(u("invalid argument. Callback argument must be a function. Value: `%s`.",i));function n(e,t){return e?i(e):(t=t.toString(),"utf8"===s.encoding&&(t=v(t)),t=s.reviver?g(t,s.reviver):g(t),p(t,Error)?i(t):void i(null,t))}f(e,s,n)},h=t.isPrimitive,b=r,x=i.sync,y=n,w=o,E=m,T=d;var V=c,O=function(e,t){var r,s;if(arguments.length>1)if(h(t))r={encoding:t};else{if(!b(t))throw new TypeError(T("invalid argument. Options argument must be either a string or an object. Value: `%s`.",t));r=t}else r={};return s=x(e,r),E(s,Error)?s:(s=s.toString(),"utf8"===r.encoding&&(s=y(s)),r.reviver?w(s,r.reviver):w(s))};e(V,"sync",O);var P=V;export{P as default,O as sync};
//# sourceMappingURL=index.mjs.map
