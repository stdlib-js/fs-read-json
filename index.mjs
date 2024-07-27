// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import i,{sync as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function f(e,n,f){var j,v;if(arguments.length<3)j={},v=n;else{if(s(n))j={encoding:n};else{if(!r(n))throw new TypeError(l("0OH3t",n));j=n}v=f}if(!t(v))throw new TypeError(l("0OH2b",v));i(e,j,(function(e,s){if(e)return v(e);s=s.toString(),"utf8"===j.encoding&&(s=o(s));s=j.reviver?d(s,j.reviver):d(s);if(m(s,Error))return v(s);v(null,s)}))}function j(e,t){var i,f;if(arguments.length>1)if(s(t))i={encoding:t};else{if(!r(t))throw new TypeError(l("0OH3t",t));i=t}else i={};return f=n(e,i),m(f,Error)?f:(f=f.toString(),"utf8"===i.encoding&&(f=o(f)),i.reviver?d(f,i.reviver):d(f))}e(f,"sync",j);export{f as default,j as sync};
//# sourceMappingURL=index.mjs.map
