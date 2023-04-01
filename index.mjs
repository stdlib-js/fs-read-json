// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i,{sync as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.0.9-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function f(e,n,f){var j,p;if(arguments.length<3)j={},p=n;else{if(s(n))j={encoding:n};else{if(!r(n))throw new TypeError(l("0C346",n));j=n}p=f}if(!t(p))throw new TypeError(l("0C32n",p));function h(e,s){return e?p(e):(s=s.toString(),"utf8"===j.encoding&&(s=o(s)),s=j.reviver?d(s,j.reviver):d(s),m(s,Error)?p(s):void p(null,s))}i(e,j,h)}function j(e,t){var i,f;if(arguments.length>1)if(s(t))i={encoding:t};else{if(!r(t))throw new TypeError(l("0C346",t));i=t}else i={};return f=n(e,i),m(f,Error)?f:(f=f.toString(),"utf8"===i.encoding&&(f=o(f)),i.reviver?d(f,i.reviver):d(f))}e(f,"sync",j);export{f as default,j as sync};
//# sourceMappingURL=index.mjs.map