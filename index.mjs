// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import i,{sync as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function v(e,n,v){var f,j;if(arguments.length<3)f={},j=n;else{if(s(n))f={encoding:n};else{if(!t(n))throw new TypeError(l("0OH3t,PT",n));f=n}j=v}if(!r(j))throw new TypeError(l("0OH2b,GJ",j));function p(e,s){return e?j(e):(s=s.toString(),"utf8"===f.encoding&&(s=o(s)),s=f.reviver?d(s,f.reviver):d(s),m(s,Error)?j(s):void j(null,s))}i(e,f,p)}function f(e,r){var i,v;if(arguments.length>1)if(s(r))i={encoding:r};else{if(!t(r))throw new TypeError(l("0OH3t,PT",r));i=r}else i={};return v=n(e,i),m(v,Error)?v:(v=v.toString(),"utf8"===i.encoding&&(v=o(v)),i.reviver?d(v,i.reviver):d(v))}e(v,"sync",f);export{v as default,f as sync};
//# sourceMappingURL=index.mjs.map
