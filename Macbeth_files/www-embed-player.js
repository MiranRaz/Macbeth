(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function t(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ba(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ka});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var ra={a:!0},sa={};try{sa.__proto__=ra;qa=sa.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ta=pa;
function v(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(ta)ta(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.xa=b.prototype}
function ua(){this.v=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.Ca=this.j=null}
function va(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
ua.prototype.ga=function(a){this.i=a};
function wa(a,b){a.j={exception:b,od:!0};a.h=a.s||a.m}
ua.prototype.return=function(a){this.j={return:a};this.h=this.m};
ua.prototype.yield=function(a,b){this.h=b;return{value:a}};
ua.prototype.A=function(a){this.h=a};
function xa(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function ya(a,b){a.h=b;a.s=0}
function za(a){a.s=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){a.Ca=[a.j];a.s=0;a.m=0}
function Da(a){var b=a.Ca.splice(0)[0];(b=a.j=a.j||b)?b.od?a.h=a.s||a.m:void 0!=b.A&&a.m<b.A?(a.h=b.A,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new ua;this.i=a}
function Fa(a,b){va(a.h);var c=a.h.l;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.l=null,wa(a.h,g),Ia(a)}a.h.l=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,wa(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.od)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){va(a.h);a.h.l?b=Ha(a,a.h.l.next,b,a.h.ga):(a.h.ga(b),b=Ia(a));return b};
this.throw=function(b){va(a.h);a.h.l?b=Ha(a,a.h.l["throw"],b,a.h.ga):(wa(a.h,b),b=Ia(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function La(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return La(new Ja(new Ea(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return na});
t("Reflect.setPrototypeOf",function(a){return a?a:ta?function(b,c){try{return ta(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(p){k||(k=!0,l.call(h,p))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.U(g):this.s(g)}};
b.prototype.U=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.da(h,g):this.s(g)};
b.prototype.m=function(g){this.ga(2,g)};
b.prototype.s=function(g){this.ga(1,g)};
b.prototype.ga=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Z();this.Ca()};
b.prototype.Z=function(){var g=this;e(function(){if(g.M()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.M=function(){if(this.v)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.Ca=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.aa=function(g){var h=this.l();g.ac(h.resolve,h.reject)};
b.prototype.da=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(w,r){return"function"==typeof w?function(x){try{l(w(x))}catch(z){p(z)}}:r}
var l,p,n=new b(function(w,r){l=w;p=r});
this.ac(k(g,l),k(h,p));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ac=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),p=l.next();!p.done;p=l.next())d(p.value).ac(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,p){function n(x){return function(z){w[x]=z;r--;0==r&&l(w)}}
var w=[],r=0;do w.push(void 0),r++,d(k.value).ac(n(w.length-1),p),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return l(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p.delete(k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var p=h.data_[l];if(p&&ja(h.data_,l))for(h=0;h<p.length;h++){var n=p[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:p,index:h,entry:n}}return{id:l,list:p,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
t("Object.setPrototypeOf",function(a){return a||ta});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
t("globalThis",function(a){return a||ea});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.xa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){C.console&&C.console.error(c.message)}xb=a}else xb=a}return xb}
;function zb(a,b){this.j=a===Ab&&b||""}
zb.prototype.i=!0;zb.prototype.h=function(){return this.j};
function Bb(a){return new zb(Ab,a)}
var Ab={};Bb("");var Cb={};function Db(a){this.j=a;this.i=!0}
Db.prototype.toString=function(){return this.j.toString()};
Db.prototype.h=function(){return this.j.toString()};function Eb(a){this.j=a}
Eb.prototype.toString=function(){return this.j+""};
Eb.prototype.i=!0;Eb.prototype.h=function(){return this.j.toString()};
function Fb(a){if(a instanceof Eb&&a.constructor===Eb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Hb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Eb(a,Gb)}
;var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Jb(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())}
function Kb(a,b){return a<b?-1:a>b?1:0}
;function Lb(a){this.j=a}
Lb.prototype.toString=function(){return this.j.toString()};
Lb.prototype.i=!0;Lb.prototype.h=function(){return this.j.toString()};
function Mb(a){if(a instanceof Lb&&a.constructor===Lb)return a.j;Pa(a);return"type_error:SafeUrl"}
var Nb;try{new URL("s://g"),Nb=!0}catch(a){Nb=!1}var Ob=Nb;function Pb(a){if(a instanceof Lb)return a;a="object"==typeof a&&a.i?a.h():String(a);a:{var b=a;if(Ob){try{var c=new URL(b)}catch(d){b="https:";break a}b=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){b=void 0;break b}b=c.protocol;b=":"===b||""===b?"https:":b}}"javascript:"!==b||(a="about:invalid#zClosurez");return new Lb(a,Qb)}
var Qb={},Rb=new Lb("about:invalid#zClosurez",Qb);var Sb,Tb=E("CLOSURE_FLAGS"),Ub=Tb&&Tb[610401301];Sb=null!=Ub?Ub:!1;function Vb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Wb,Xb=C.navigator;Wb=Xb?Xb.userAgentData||null:null;function Yb(a){return Sb?Wb?Wb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Vb().indexOf(a)}
;function Zb(){return Sb?!!Wb&&0<Wb.brands.length:!1}
function $b(){return Zb()?!1:F("Opera")}
function ac(){return Zb()?!1:F("Trident")||F("MSIE")}
function bc(){return Zb()?!1:F("Edge")}
function cc(){return Zb()?Yb("Microsoft Edge"):F("Edg/")}
function dc(){return F("Firefox")||F("FxiOS")}
function ec(){return F("Safari")&&!(fc()||(Zb()?0:F("Coast"))||$b()||bc()||cc()||(Zb()?Yb("Opera"):F("OPR"))||dc()||F("Silk")||F("Android"))}
function fc(){return Zb()?Yb("Chromium"):(F("Chrome")||F("CriOS"))&&!bc()||F("Silk")}
function hc(){return F("Android")&&!(fc()||dc()||$b()||F("Silk"))}
function ic(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function jc(a){var b=Vb();if("Internet Explorer"===a){if(ac())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=ic(c);
switch(a){case "Opera":if($b())return b(["Version","Opera"]);if(Zb()?Yb("Opera"):F("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(bc())return b(["Edge"]);if(cc())return b(["Edg"]);break;case "Chromium":if(fc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&dc()||"Safari"===a&&ec()||"Android Browser"===a&&hc()||"Silk"===a&&F("Silk")?(b=c[2])&&b[1]||"":""}
function kc(a){if(Zb()&&"Silk"!==a){var b=Wb.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=jc(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;function lc(a){this.j=a;this.i=!0}
lc.prototype.h=function(){return this.j.toString()};
lc.prototype.toString=function(){return this.j.toString()};function mc(a,b){b=b instanceof Lb?b:Pb(b);a.href=Mb(b)}
function nc(a,b){a.rel="stylesheet";Jb("stylesheet","stylesheet")?(a.href=Fb(b).toString(),(b=oc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)):a.href=b instanceof Eb?Fb(b).toString():b instanceof Lb?Mb(b):Mb(Pb(b))}
function pc(){return oc("script[nonce]")}
var qc=/^[\w+/_-]+[=]{0,2}$/;function oc(a,b){b=(b||C).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&qc.test(a)?a:"":""}
;function rc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tc(a){return a?decodeURI(a):a}
function uc(a,b){return b.match(sc)[a]||null}
function vc(a){return tc(uc(3,a))}
function wc(a){var b=a.match(sc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function xc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function yc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function zc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)zc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ac(a,b){var c=[];for(b=b||0;b<a.length;b+=2)zc(a[b],a[b+1],c);return c.join("&")}
function Bc(a){var b=[],c;for(c in a)zc(c,a[c],b);return b.join("&")}
function Cc(a,b){var c=2==arguments.length?Ac(arguments[1],0):Ac(arguments,1);return yc(a,c)}
function Dc(a,b){b=Bc(b);return yc(a,b)}
function Ec(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return yc(a,b+c)}
function Fc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Gc=/#|$/,Hc=/[?&]($|#)/;function Ic(a,b){for(var c=a.search(Gc),d=0,e,f=[];0<=(e=Fc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Hc,"$1")}
;function Jc(a){C.setTimeout(function(){throw a;},0)}
;function Kc(){return Sb?!!Wb&&!!Wb.platform:!1}
function Lc(){return Kc()?"Android"===Wb.platform:F("Android")}
function Mc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
function Nc(){return Mc()||F("iPad")||F("iPod")}
function Oc(){return Kc()?"macOS"===Wb.platform:F("Macintosh")}
function Pc(){return Kc()?"Windows"===Wb.platform:F("Windows")}
function Qc(){return Kc()?"Chrome OS"===Wb.platform:F("CrOS")}
function Rc(){var a=Vb(),b="";Pc()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Nc()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):Oc()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):Jb(Vb(),"KaiOS")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):Lc()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):Qc()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);a=0;b=Ib(String(b||"")).split(".");for(var c=
Ib("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Kb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Kb(0==f[2].length,0==g[2].length)||Kb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Sc(a){Sc[" "](a);return a}
Sc[" "]=function(){};var Tc=$b(),Uc=ac(),Vc=F("Edge"),Wc=F("Gecko")&&!(Jb(Vb(),"WebKit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Xc=Jb(Vb(),"WebKit")&&!F("Edge");Xc&&F("Mobile");Oc();Pc();(Kc()?"Linux"===Wb.platform:F("Linux"))||Qc();var Yc=C.navigator||null;Yc&&(Yc.appVersion||"").indexOf("X11");var Zc=Lc();Mc();F("iPad");F("iPod");Nc();Jb(Vb(),"KaiOS");function $c(){var a=C.document;return a?a.documentMode:void 0}
var ad;a:{var bd="",cd=function(){var a=Vb();if(Wc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Vc)return/Edge\/([\d\.]+)/.exec(a);if(Uc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Xc)return/WebKit\/(\S+)/.exec(a);if(Tc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
cd&&(bd=cd?cd[1]:"");if(Uc){var dd=$c();if(null!=dd&&dd>parseFloat(bd)){ad=String(dd);break a}}ad=bd}var ed=ad,fd;if(C.document&&Uc){var gd=$c();fd=gd?gd:parseInt(ed,10)||void 0}else fd=void 0;var hd=fd;dc();var id=Mc()||F("iPod"),jd=F("iPad");hc();fc();var kd=ec()&&!Nc();var ld={},md=null;function nd(a,b){Qa(a);void 0===b&&(b=0);od();b=ld[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function pd(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;qd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function qd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),p=md[l];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
od();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function od(){if(!md){md={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ld[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===md[f]&&(md[f]=e)}}}}
;var rd="undefined"!==typeof Uint8Array,sd=!Uc&&"function"===typeof btoa;function td(a){if(!sd)return nd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var ud=/[-_.]/g,vd={"-":"+",_:"/",".":"="};function wd(a){return vd[a]||""}
function xd(a){return rd&&null!=a&&a instanceof Uint8Array}
var yd={};var zd;function Ad(a){if(a!==yd)throw Error("illegal external caller");}
function Bd(a,b){Ad(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Bd.prototype.isEmpty=function(){return null==this.h};
Bd.prototype.sizeBytes=function(){Ad(yd);var a=this.h;if(null!=a&&!xd(a))if("string"===typeof a)if(sd){ud.test(a)&&(a=a.replace(ud,wd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=pd(a);else Pa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};var Cd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Dd(a,b){if(Cd)return a[Cd]|=b;if(void 0!==a.Ga)return a.Ga|=b;Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Ed(a){var b=G(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Fd(a,b|1));return a}
function G(a){var b;Cd?b=a[Cd]:b=a.Ga;return null==b?0:b}
function Fd(a,b){Cd?a[Cd]=b:void 0!==a.Ga?a.Ga=b:Object.defineProperties(a,{Ga:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Gd(a,b){Object.isFrozen(a)&&(a=Array.prototype.slice.call(a));Fd(a,b);return a}
function Hd(a){Dd(a,1);return a}
function Id(a,b){Fd(b,(a|0)&-51)}
function Jd(a,b){Fd(b,(a|18)&-41)}
;var Kd={};function Ld(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Md,Nd=Object.freeze(Fd([],23));function Od(a){if(a&2)throw Error();}
;function Pd(a){return a.displayName||a.name||"unknown type name"}
function Qd(a){Pa(a);return a}
function Rd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Pd(b)+" but got "+(a&&Pd(a.constructor)));}
function Sd(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Jc===Kd)return a;if(d){var e=d=G(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Fd(a,e);return new b(a)}}
;function Td(a,b,c){return-1===b?null:b>=a.h?a.Pa?a.Pa[b]:void 0:c&&a.Pa&&(c=a.Pa[b],null!=c)?c:a.S[b+a.i]}
function L(a,b,c,d){Od(G(a.S));return Ud(a,b,c,d)}
function Ud(a,b,c,d){a.j&&(a.j=void 0);if(b>=a.h||d)return d=a.h+a.i,(a.Pa||(a.Pa=a.S[d]={}))[b]=c,a;a.S[b+a.i]=c;(c=a.Pa)&&b in c&&delete c[b];return a}
function Vd(a){return void 0!==Wd(a,Xd,11,!1)}
function Yd(a,b,c,d){Od(G(a.S));for(var e=0,f=0;f<c.length;f++){var g=c[f];null!=Td(a,g)&&(0!==e&&Ud(a,e,void 0,!1),e=g)}(c=e)&&c!==b&&null!=d&&Ud(a,c,void 0,!1);Ud(a,b,d)}
function Wd(a,b,c,d){var e=Td(a,c,d);b=Sd(e,b,G(a.S));b!==e&&null!=b&&Ud(a,c,b,d);return b}
function Zd(a,b,c,d){d=void 0===d?!1:d;b=Wd(a,b,c,d);if(null==b)return b;if(!(G(a.S)&2)){var e=$d(b);e!==b&&(b=e,Ud(a,c,b,d))}return b}
function ae(a,b,c,d){Od(G(a.S));null!=d?Rd(d,b):d=void 0;return Ud(a,c,d)}
function be(a,b,c,d){Od(G(a.S));if(null!=d){for(var e=!!d.length,f=0;f<d.length;f++){var g=d[f];Rd(g,b);e=e&&!(G(g.S)&2)}b=G(d);f=b|1;f=(e?f|8:f&-9)|4;f!=b&&(d=Gd(d,f))}null==d&&(d=Nd);return Ud(a,c,d)}
;var ce;function de(a,b){return ee(b)}
function ee(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(xd(a))return td(a);if(a instanceof Bd){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=td(b)}}}return a}
;function fe(a,b){var c=a.S,d=c.length,e=[];Dd(e,16);for(var f=a.Pa,g=f?d-1:d,h=0;h<g;h++)e[h]=b(c[h]);if(f){c=e[d-1]={};for(var k in f)c[k]=b(f[k])}b=a.constructor;G(e);ce=e;e=new b(e);ce=void 0;a.nd&&(e.nd=a.nd.slice());return e}
function ge(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&G(a)&1?void 0:f&&G(a)&2?a:he(a,b,c,void 0!==d,e,f);else if(Ld(a)){var g={},h;for(h in a)g[h]=ge(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function he(a,b,c,d,e,f){var g=d||c?G(a):0;d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=ge(a[h],b,c,d,e,f);c&&c(g,a);return a}
function ie(a){return a.Jc===Kd?a.toJSON():ee(a)}
;function je(a,b,c){c=void 0===c?Jd:c;if(null!=a){if(rd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=G(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Fd(a,d|18),a;a=he(a,je,d&4?Jd:c,!0,!1,!0);b=G(a);b&4&&b&2&&Object.freeze(a);return a}a.Jc===Kd&&(G(a.S)&2||(a=ke(a,!0),Dd(a.S,18)));return a}}
function ke(a,b){var c=a.S,d=b||G(a.S)&2?Jd:Id,e=!!(G(c)&16);return fe(a,function(f){return je(f,e,d)})}
function $d(a){if(!(G(a.S)&2))return a;var b=ke(a,!1);b.j=a;return b}
;function M(a,b,c){null==a&&(a=ce);ce=void 0;if(null==a)a=c?[c]:[],Fd(a,48);else{if(!Array.isArray(a))throw Error();if(c&&c!==a[0])throw Error();var d=Dd(a,0)|32;Fd(a,d)}this.i=c?0:-1;this.S=a;a:{c=this.S.length;a=c-1;if(c&&(c=this.S[a],Ld(c))){this.Pa=c;this.h=a-this.i;break a}b?(this.h=Math.max(b,a+1-this.i),this.Pa=void 0):this.h=Number.MAX_VALUE}G(this.S)}
m=M.prototype;m.toJSON=function(){if(Md)var a=le(this,this.S,!1);else a=he(this.S,ie,void 0,void 0,!1,!1),a=le(this,a,!0);return a};
m.serialize=function(){Md=!0;try{return JSON.stringify(this.toJSON(),de)}finally{Md=!1}};
m.clone=function(){return ke(this,!1)};
m.Jc=Kd;m.toString=function(){return le(this,this.S,!1).toString()};
function le(a,b,c){var d=a?a.constructor.Wa:void 0,e=a.h;if(d){if(!c){b=Array.prototype.slice.call(b);var f;if(b.length&&Ld(f=b[b.length-1]))for(var g=0;g<d.length;g++)if(d[g]>=e){Object.assign(b[b.length-1]={},f);break}}e=b;c=!c;f=a.h;var h;for(g=0;g<d.length;g++){var k=d[g];if(k<f){k+=a.i;var l=e[k];null==l?e[k]=c?Nd:Hd([]):c&&l!==Nd&&Ed(l)}else h||(l=void 0,e.length&&Ld(l=e[e.length-1])?h=l:e.push(h={})),l=h[k],null==h[k]?h[k]=c?Nd:Hd([]):c&&l!==Nd&&Ed(l)}}return b}
;function me(a){this.cd=a}
;function ne(a,b,c){this.i=a;this.l=b;this.h=c||[];this.tb=new Map}
m=ne.prototype;m.Sd=function(a){var b=B.apply(1,arguments),c=this.zc(b);c?c.push(new me(a)):this.Bd(a,b)};
m.Bd=function(a){var b=this.hd(B.apply(1,arguments));this.tb.set(b,[new me(a)])};
m.zc=function(){var a=this.hd(B.apply(0,arguments));return this.tb.has(a)?this.tb.get(a):void 0};
m.je=function(){var a=this.zc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.tb.clear()};
m.hd=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function oe(a,b){ne.call(this,a,3,b)}
v(oe,ne);oe.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.je(b);d&&(c=d.cd);this.Bd(c+a,b)};function pe(a,b){ne.call(this,a,2,b)}
v(pe,ne);pe.prototype.record=function(a){this.Sd(a,B.apply(1,arguments))};function qe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function re(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?re.apply(null,d):qe(d)}}
;function N(){this.Ca=this.Ca;this.ga=this.ga}
N.prototype.Ca=!1;N.prototype.h=function(){return this.Ca};
N.prototype.dispose=function(){this.Ca||(this.Ca=!0,this.K())};
function se(a,b){te(a,Ya(qe,b))}
function te(a,b){a.Ca?b():(a.ga||(a.ga=[]),a.ga.push(b))}
N.prototype.K=function(){if(this.ga)for(;this.ga.length;)this.ga.shift()()};function ue(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
ue.prototype.stopPropagation=function(){this.j=!0};
ue.prototype.preventDefault=function(){this.defaultPrevented=!0};function ve(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=we(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,xe[c])c=xe[c];else{c=String(c);if(!xe[c]){var f=/function\s+([^\(]+)/m.exec(c);xe[c]=f?f[1]:"[Anonymous]"}c=xe[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function we(a,b){b||(b={});b[ye(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[ye(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=we(a,b));return c}
function ye(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var xe={};var ze=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ae(a,b){ue.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Ae,ue);var Be={2:"touch",3:"pen",4:"mouse"};
Ae.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Wc){a:{try{Sc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Be[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ae.xa.preventDefault.call(this)};
Ae.prototype.stopPropagation=function(){Ae.xa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ae.prototype.preventDefault=function(){Ae.xa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ce="closure_listenable_"+(1E6*Math.random()|0);var De=0;function Ee(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.fc=e;this.key=++De;this.Pb=this.Zb=!1}
function Fe(a){a.Pb=!0;a.listener=null;a.proxy=null;a.src=null;a.fc=null}
;function Ge(a){this.src=a;this.listeners={};this.h=0}
Ge.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=He(a,b,d,e);-1<g?(b=a[g],c||(b.Zb=!1)):(b=new Ee(b,this.src,f,!!d,e),b.Zb=c,a.push(b));return b};
Ge.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=He(e,b,c,d);return-1<b?(Fe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ie(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(Fe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function He(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Pb&&f.listener==b&&f.capture==!!c&&f.fc==d)return e}return-1}
;var Je="closure_lm_"+(1E6*Math.random()|0),Ke={},Le=0;function Me(a,b,c,d,e){if(d&&d.once)Ne(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Me(a,b[f],c,d,e);else c=Oe(c),a&&a[Ce]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):Pe(a,b,c,!1,d,e)}
function Pe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Qe(a);h||(a[Je]=h=new Ge(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Re();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ze||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Se(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Le++}}
function Re(){function a(c){return b.call(a.src,a.listener,c)}
var b=Te;return a}
function Ne(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ne(a,b[f],c,d,e);else c=Oe(c),a&&a[Ce]?a.l.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Pe(a,b,c,!0,d,e)}
function Ue(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ue(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Oe(c),a&&a[Ce])?a.l.remove(String(b),c,d,e):a&&(a=Qe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=He(b,c,d,e)),(c=-1<a?b[a]:null)&&Ve(c))}
function Ve(a){if("number"!==typeof a&&a&&!a.Pb){var b=a.src;if(b&&b[Ce])Ie(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Se(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Le--;(c=Qe(b))?(Ie(c,a),0==c.h&&(c.src=null,b[Je]=null)):Fe(a)}}}
function Se(a){return a in Ke?Ke[a]:Ke[a]="on"+a}
function Te(a,b){if(a.Pb)a=!0;else{b=new Ae(b,this);var c=a.listener,d=a.fc||a.src;a.Zb&&Ve(a);a=c.call(d,b)}return a}
function Qe(a){a=a[Je];return a instanceof Ge?a:null}
var We="__closure_events_fn_"+(1E9*Math.random()>>>0);function Oe(a){if("function"===typeof a)return a;a[We]||(a[We]=function(b){return a.handleEvent(b)});
return a[We]}
;function Xe(){N.call(this);this.l=new Ge(this);this.Od=this;this.Da=null}
Za(Xe,N);Xe.prototype[Ce]=!0;m=Xe.prototype;m.addEventListener=function(a,b,c,d){Me(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){Ue(this,a,b,c,d)};
function Ye(a,b){var c=a.Da;if(c){var d=[];for(var e=1;c;c=c.Da)d.push(c),++e}a=a.Od;c=b.type||b;"string"===typeof b?b=new ue(b,a):b instanceof ue?b.target=b.target||a:(e=b,b=new ue(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ze(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ze(g,c,!0,b)&&e,b.j||(e=Ze(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ze(g,c,!1,b)&&e}
m.K=function(){Xe.xa.K.call(this);this.removeAllListeners();this.Da=null};
m.listen=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.l){var b=this.l;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Fe(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Ze(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Pb&&g.capture==c){var h=g.listener,k=g.fc||g.src;g.Zb&&Ie(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function $e(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
$e.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function af(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function bf(a,b){return a+Math.random()*(b-a)}
;function cf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=cf.prototype;m.clone=function(){return new cf(this.x,this.y)};
m.equals=function(a){return a instanceof cf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function df(a,b){this.width=a;this.height=b}
m=df.prototype;m.clone=function(){return new df(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function ef(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function ff(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function gf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var hf;function jf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=ff("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!ac()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function kf(){this.i=this.h=null}
kf.prototype.add=function(a,b){var c=lf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
kf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var lf=new $e(function(){return new mf},function(a){return a.reset()});
function mf(){this.next=this.scope=this.fn=null}
mf.prototype.set=function(a,b){this.fn=a;this.scope=b;this.next=null};
mf.prototype.reset=function(){this.next=this.scope=this.fn=null};var nf,of=!1,pf=new kf;function qf(a,b){nf||rf();of||(nf(),of=!0);pf.add(a,b)}
function rf(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);nf=function(){a.then(sf)}}else nf=function(){var b=sf;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&!bc()&&C.Window.prototype.setImmediate==C.setImmediate?(hf||(hf=jf()),hf(b)):C.setImmediate(b)}}
function sf(){for(var a;a=pf.remove();){try{a.fn.call(a.scope)}catch(b){Jc(b)}af(lf,a)}of=!1}
;function tf(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){uf(b,2,c)},function(c){uf(b,3,c)})}catch(c){uf(this,3,c)}}
function vf(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
vf.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var wf=new $e(function(){return new vf},function(a){a.reset()});
function xf(a,b,c){var d=wf.get();d.i=a;d.h=b;d.context=c;return d}
function yf(a){if(a instanceof tf)return a;var b=new tf(cb);uf(b,2,a);return b}
function zf(a){return new tf(function(b,c){c(a)})}
function Af(a,b,c){Bf(a,b,c,null)||qf(Ya(b,a))}
function Cf(a){return new tf(function(b){var c=a.length,d=[];if(c)for(var e=function(h,k,l){c--;d[h]=k?{fulfilled:!0,value:l}:{fulfilled:!1,reason:l};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Af(g,Ya(e,f,!0),Ya(e,f,!1));
else b(d)})}
tf.prototype.then=function(a,b,c){return Df(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
tf.prototype.$goog_Thenable=!0;m=tf.prototype;m.qc=function(a,b){return Df(this,null,a,b)};
m.catch=tf.prototype.qc;m.cancel=function(a){if(0==this.h){var b=new Ef(a);qf(function(){Ff(this,b)},this)}};
function Ff(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ff(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Gf(c),Hf(c,e,3,b)))}a.j=null}else uf(a,3,b)}
function If(a,b){a.i||2!=a.h&&3!=a.h||Jf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Df(a,b,c,d){var e=xf(null,null,null);e.child=new tf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ef?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;If(a,e);return e.child}
m.Ze=function(a){this.h=0;uf(this,2,a)};
m.af=function(a){this.h=0;uf(this,3,a)};
function uf(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,Bf(c,a.Ze,a.af,a)||(a.v=c,a.h=b,a.j=null,Jf(a),3!=b||c instanceof Ef||Kf(a,c)))}
function Bf(a,b,c,d){if(a instanceof tf)return If(a,xf(b||cb,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Ra(a))try{var f=a.then;if("function"===typeof f)return Lf(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Jf(a){a.s||(a.s=!0,qf(a.ce,a))}
function Gf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ce=function(){for(var a;a=Gf(this);)Hf(this,a,this.h,this.v);this.s=!1};
function Hf(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,Mf(b,c,d);else try{b.j?b.i.call(b.context):Mf(b,c,d)}catch(e){Nf.call(null,e)}af(wf,b)}
function Mf(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Kf(a,b){a.m=!0;qf(function(){a.m&&Nf.call(null,b)})}
var Nf=Jc;function Ef(a){ab.call(this,a)}
Za(Ef,ab);Ef.prototype.name="cancel";function Of(a,b){Xe.call(this);this.j=a||1;this.i=b||C;this.m=Xa(this.Ye,this);this.s=Date.now()}
Za(Of,Xe);m=Of.prototype;m.enabled=!1;m.Ba=null;m.setInterval=function(a){this.j=a;this.Ba&&this.enabled?(this.stop(),this.start()):this.Ba&&this.stop()};
m.Ye=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.Ba=this.i.setTimeout(this.m,this.j-a):(this.Ba&&(this.i.clearTimeout(this.Ba),this.Ba=null),Ye(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ba||(this.Ba=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
m.stop=function(){this.enabled=!1;this.Ba&&(this.i.clearTimeout(this.Ba),this.Ba=null)};
m.K=function(){Of.xa.K.call(this);this.stop();delete this.i};
function Pf(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function Qf(a){N.call(this);this.M=a;this.j=new Map;this.v=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new Of(this.flushInterval);this.i.listen("tick",this.qb,!1,this);se(this,this.i);this.s=!1}
v(Qf,N);m=Qf.prototype;m.sendIsolatedPayload=function(a){this.s=a;this.m=1};
function Rf(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.qb()}
m.qb=function(){var a=this.j.values();a=[].concat(ia(a)).filter(function(b){return b.tb.size});
a.length&&this.M.flush(a,this.s);Sf(a);this.l=0;this.i.enabled&&this.i.stop()};
m.Wc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new oe(a,b))};
m.Xc=function(a){var b=B.apply(1,arguments);this.j.has(a)||this.j.set(a,new pe(a,b))};
function Tf(a,b){return a.v.has(b)?void 0:a.j.get(b)}
m.sc=function(a){this.Nd.apply(this,[a,1].concat(ia(B.apply(1,arguments))))};
m.Nd=function(a,b){var c=B.apply(2,arguments),d=Tf(this,a);d&&d instanceof oe&&(d.j(b,c),Rf(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=Tf(this,a);d&&d instanceof pe&&(d.record(b,c),Rf(this))};
function Sf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Uf(a){this.h=a;this.h.Wc("/client_streamz/bg/fiec",{Mb:3,Lb:"rk"},{Mb:2,Lb:"ec"})}
function Vf(a,b,c){a.h.sc("/client_streamz/bg/fiec",b,c)}
function Wf(a){this.h=a;this.h.Xc("/client_streamz/bg/fil",{Mb:3,Lb:"rk"})}
Wf.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function Xf(a){this.h=a;this.h.Wc("/client_streamz/bg/fsc",{Mb:3,Lb:"rk"})}
function Yf(a){this.h=a;this.h.Xc("/client_streamz/bg/fsl",{Mb:3,Lb:"rk"})}
Yf.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var Zf={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function $f(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ag(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=bg(a,h),d+=bg(a,h+4),e+=bg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Zf.toString(e)}
function ag(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function bg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function cg(a){M.call(this,a)}
v(cg,M);var dg=[1,2,3];function eg(a){M.call(this,a)}
v(eg,M);var fg=[1,2,3];function gg(a){M.call(this,a)}
v(gg,M);gg.Wa=[1];function hg(a){M.call(this,a)}
v(hg,M);hg.Wa=[3,6,4];function ig(a){M.call(this,a)}
v(ig,M);ig.Wa=[1];function jg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function kg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(n){for(var w=g,r=0;64>r;r+=4)w[r/4]=n[r]<<24|n[r+1]<<16|n[r+2]<<8|n[r+3];for(r=16;80>r;r++)n=w[r-3]^w[r-8]^w[r-14]^w[r-16],w[r]=(n<<1|n>>>31)&4294967295;n=e[0];var x=e[1],z=e[2],y=e[3],I=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var K=y^x&(z^y);var H=1518500249}else K=x^z^y,H=1859775393;else 60>r?(K=x&z|y&(x|z),H=2400959708):(K=x^z^y,H=3395469782);K=((n<<5|n>>>27)&4294967295)+K+I+H+w[r]&4294967295;I=y;y=z;z=(x<<30|x>>>2)&4294967295;x=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+I&4294967295}
function c(n,w){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var r=[],x=0,z=n.length;x<z;++x)r.push(n.charCodeAt(x));n=r}w||(w=n.length);r=0;if(0==l)for(;r+64<w;)b(n.slice(r,r+64)),r+=64,p+=64;for(;r<w;)if(f[l++]=n[r++],p++,64==l)for(l=0,b(f);r+64<w;)b(n.slice(r,r+64)),r+=64,p+=64}
function d(){var n=[],w=8*p;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=w&255,w>>>=8;b(f);for(r=w=0;5>r;r++)for(var x=24;0<=x;x-=8)n[w++]=e[r]>>x&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,Yd:function(){for(var n=d(),w="",r=0;r<n.length;r++)w+="0123456789ABCDEF".charAt(Math.floor(n[r]/16))+"0123456789ABCDEF".charAt(n[r]%16);return w}}}
;function lg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,mg(jg(d),a,c||null)].join(" "):null}
function mg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),ng(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=ng(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ng(a){var b=kg();b.update(a);return b.Yd().toLowerCase()}
;var og={};function pg(a){this.h=a||{cookie:""}}
m=pg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{jc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Kf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.jc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{jc:0,path:b,domain:c});return d};
m.Cc=function(){return qg(this).keys};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=qg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function qg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var rg=new pg("undefined"==typeof document?null:document);function sg(a){return!!og.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function tg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;sg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new pg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");sg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function ug(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new pg(document)).get(b));return a?lg(a,c,d):null}
function vg(a,b){b=void 0===b?!1:b;var c=jg(String(C.location.href)),d=[];if(tg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new pg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?lg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&sg(b)&&((b=ug("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ug("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function wg(a){M.call(this,a)}
v(wg,M);wg.Wa=[2];function xg(a){this.h=this.i=this.j=a}
xg.prototype.reset=function(){this.h=this.i=this.j};
xg.prototype.getValue=function(){return this.i};function yg(){}
yg.prototype.serialize=function(a){var b=[];zg(this,a,b);return b.join("")};
function zg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bg(d,c),c.push(":"),zg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Dg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Bg(a,b){b.push('"',a.replace(Dg,function(c){var d=Cg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Cg[c]=d);return d}),'"')}
;function Eg(){}
Eg.prototype.h=null;Eg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Fg(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Gg;function Hg(){}
Za(Hg,Eg);function Ig(a){return(a=Fg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Fg(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Gg=new Hg;function Jg(a){Xe.call(this);this.headers=new Map;this.W=a||null;this.i=!1;this.U=this.G=null;this.m=this.da="";this.j=this.aa=this.v=this.Z=!1;this.s=0;this.M=null;this.ya="";this.ka=this.la=!1}
Za(Jg,Xe);var Kg=/^https?$/i,Lg=["POST","PUT"],Mg=[];function Ng(a,b,c,d,e,f,g){var h=new Jg;Mg.push(h);b&&h.listen("complete",b);h.l.add("ready",h.Xd,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.la=g);h.send(a,c,d,e)}
m=Jg.prototype;m.Xd=function(){this.dispose();kb(Mg,this)};
m.send=function(a,b,c,d){if(this.G)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.m="";this.Z=!1;this.i=!0;this.G=this.W?Ig(this.W):Ig(Gg);this.U=this.W?this.W.getOptions():Gg.getOptions();this.G.onreadystatechange=Xa(this.sd,this);try{this.getStatus(),this.aa=!0,this.G.open(b,String(a),!0),this.aa=!1}catch(g){this.getStatus();Og(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=u(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=eb(Lg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=u(c);for(d=b.next();!d.done;d=b.next())c=u(d.value),d=c.next().value,c=c.next().value,this.G.setRequestHeader(d,c);this.ya&&(this.G.responseType=this.ya);"withCredentials"in this.G&&this.G.withCredentials!==this.la&&(this.G.withCredentials=this.la);try{Pg(this),0<this.s&&(this.ka=Qg(this.G),this.getStatus(),this.ka?(this.G.timeout=this.s,this.G.ontimeout=Xa(this.Gd,
this)):this.M=Pf(this.Gd,this.s,this)),this.getStatus(),this.v=!0,this.G.send(a),this.v=!1}catch(g){this.getStatus(),Og(this,g)}};
function Qg(a){return Uc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Gd=function(){"undefined"!=typeof Oa&&this.G&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),Ye(this,"timeout"),this.abort(8))};
function Og(a,b){a.i=!1;a.G&&(a.j=!0,a.G.abort(),a.j=!1);a.m=b;Rg(a);Sg(a)}
function Rg(a){a.Z||(a.Z=!0,Ye(a,"complete"),Ye(a,"error"))}
m.abort=function(){this.G&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.G.abort(),this.j=!1,Ye(this,"complete"),Ye(this,"abort"),Sg(this))};
m.K=function(){this.G&&(this.i&&(this.i=!1,this.j=!0,this.G.abort(),this.j=!1),Sg(this,!0));Jg.xa.K.call(this)};
m.sd=function(){this.h()||(this.aa||this.v||this.j?Tg(this):this.Be())};
m.Be=function(){Tg(this)};
function Tg(a){if(a.i&&"undefined"!=typeof Oa)if(a.U[1]&&4==Ug(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==Ug(a))Pf(a.sd,0,a);else if(Ye(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Vg(a))Ye(a,"complete"),Ye(a,"success");else{try{var b=2<Ug(a)?a.G.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";Rg(a)}}finally{Sg(a)}}}
function Sg(a,b){if(a.G){Pg(a);var c=a.G,d=a.U[0]?function(){}:null;
a.G=null;a.U=null;b||Ye(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Pg(a){a.G&&a.ka&&(a.G.ontimeout=null);a.M&&(C.clearTimeout(a.M),a.M=null)}
m.isActive=function(){return!!this.G};
m.isComplete=function(){return 4==Ug(this)};
function Vg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=uc(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Kg.test(a?a.toLowerCase():"");c=b}return c}
function Ug(a){return a.G?a.G.readyState:0}
m.getStatus=function(){try{return 2<Ug(this)?this.G.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function Wg(a){M.call(this,a)}
v(Wg,M);function Xg(a){M.call(this,a)}
v(Xg,M);Xg.Wa=[1];function Xd(a){M.call(this,a)}
v(Xd,M);var Yg=["platform","platformVersion","architecture","model","uaFullVersion"];new Xg;function Zg(a){M.call(this,a)}
v(Zg,M);function $g(a){M.call(this,a,33)}
v($g,M);$g.Wa=[3,20,27];function ah(a){M.call(this,a,19)}
v(ah,M);ah.Wa=[3,5];function bh(a){M.call(this,a,6)}
v(bh,M);bh.Wa=[5];function ch(a){M.call(this,a)}
v(ch,M);var dh;dh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Zd;this.defaultValue=void 0}(175237375,{Bf:0},ch);function eh(a,b,c,d,e,f,g,h,k,l,p){Xe.call(this);var n=this;this.componentId="";this.j=[];this.Vb="";this.Wb=this.ya=-1;this.Hb=!1;this.W=this.m=null;this.M=this.U=0;this.Qd=1;this.timeoutMillis=0;this.la=!1;Xe.call(this);this.logSource=a;this.Ub=b||function(){};
this.s=new fh(a,f);this.Pd=d;this.network=p;this.bufferSize=1E3;this.Rd=Ya(bf,0,1);this.aa=e||null;this.sessionIndex=c||null;this.da=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.rb=f||!1;!this.rb&&(65<=kc("Chromium")||45<=kc("Firefox")||12<=kc("Safari")||Nc()&&Rc());a=L(new Zg,1,1);gh(this.s,a);this.v=new xg(1E4);this.i=new Of(this.v.getValue());se(this,this.i);l=hh(this,l);Me(this.i,"tick",l,!1,this);this.Z=new Of(6E5);se(this,this.Z);Me(this.Z,"tick",l,!1,this);this.da||
this.Z.start();this.rb||(Me(document,"visibilitychange",function(){"hidden"===document.visibilityState&&n.ka()}),Me(document,"pagehide",this.ka,!1,this))}
v(eh,Xe);function hh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
eh.prototype.K=function(){this.ka();Xe.prototype.K.call(this)};
function ih(a){a.aa||(a.aa=.01>a.Rd()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.aa}
function jh(a,b){a.v=new xg(1>b?1:b);a.i.setInterval(a.v.getValue())}
eh.prototype.log=function(a){a=a.clone();var b=this.Qd++;L(a,21,b);this.componentId&&L(a,26,this.componentId);if(!Td(a,1)){b=a;var c=Date.now().toString();L(b,1,c)}null==Td(a,15)&&L(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),ae(a,wg,16,b));for(;this.j.length>=this.bufferSize;)this.j.shift(),++this.U;this.j.push(a);Ye(this,new kh(a));this.da||this.i.enabled||this.i.start()};
eh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.la)lh(this.s,3),mh(this);else{var d=Date.now();if(this.Wb>d&&this.ya<d)b&&b("throttled");else{lh(this.s,1);var e=nh(this.s,this.j,this.U,this.M);d={};var f=this.Ub();f&&(d.Authorization=f);var g=ih(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=Ec(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Ec(g,"pageId",this.pageId));if(f&&this.Vb===f)b&&b("stale-auth-token");
else{this.j=[];this.i.enabled&&this.i.stop();this.U=0;var h=e.serialize(),k;this.W&&this.W.isSupported(h.length)&&(k=this.W.compress(h));var l={url:g,body:h,Vd:1,Nc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},p=function(r){c.v.reset();c.i.setInterval(c.v.getValue());if(r){var x=null;try{var z=JSON.parse(r.replace(")]}'\n",""));x=new bh(z)}catch(y){}x&&(r=Td(x,1),r=Number(null==r?"-1":r),0<r&&(c.ya=Date.now(),c.Wb=c.ya+r),x=dh.ctor?dh.i(x,dh.ctor,dh.h,
!0):dh.isRepeated?dh.i(x,dh.h,!0):dh.i(x,dh.h,dh.defaultValue,!0))&&(x=Td(x,1),x=null==x?-1:x,-1!=x&&(c.Hb||jh(c,x)))}a&&a();c.M=0},n=function(r,x){var z=G(e.S),y=!!(z&2);
var I=y?1:2;var K=!!(z&2);var H=Td(e,3);Array.isArray(H)||(H=Nd);var J=G(H);J&1||Hd(H);K?J&2||Dd(H,18):J&16&&!(J&2)&&(J=H,Cd?J[Cd]&&(J[Cd]&=-17):void 0!==J.Ga&&(J.Ga&=-17));if(H!==Nd&&G(H)&4)3===I||K||(K=Object.isFrozen(H),1===I?K||Object.freeze(H):(I=G(H),J=I&-19,K&&(H=Array.prototype.slice.call(H),I=0,Ud(e,3,H)),I!==J&&Fd(H,J))),I=H;else{J=H;K=!!(z&2);var V=!!(G(J)&2);H=J;!K&&V&&(J=Array.prototype.slice.call(J));z|=V?2:0;for(var aa=0,Ga=0;aa<J.length;aa++){var oa=Sd(J[aa],$g,z);void 0!==oa&&(V||
(V=!!(2&G(oa.S))),J[Ga++]=oa)}Ga<aa&&(J.length=Ga);V=!V;z=G(J);aa=z|5;V=V?aa|8:aa&-9;z!=V&&(J=Gd(J,V));H!==J&&Ud(e,3,J);(K||1===I)&&Object.freeze(J);I=J}if(!(y||G(I)&8)){for(y=0;y<I.length;y++)K=I[y],H=$d(K),K!==H&&(I[y]=H);Dd(I,8)}y=c.v;y.h=Math.min(3E5,2*y.h);y.i=Math.min(3E5,y.h+Math.round(.2*(Math.random()-.5)*y.h));c.i.setInterval(c.v.getValue());401===r&&f&&(c.Vb=f);void 0===x&&(x=500<=r&&600>r||401===r||0===r);x&&(c.j=I.concat(c.j),c.da||c.i.enabled||c.i.start());b&&b("net-send-failed",r);
++c.M},w=function(){c.network?c.network.send(l,p,n):c.Pd(l,p,n)};
k?k.then(function(r){l.Nc["Content-Encoding"]="gzip";l.Nc["Content-Type"]="application/binary";l.body=r;l.Vd=2;w()},function(){w()}):w()}}}};
eh.prototype.ka=function(){oh(this.s,!0);this.flush();oh(this.s,!1)};
function mh(a){ph(a,function(b,c){b=Ec(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.la&&!d&&(a.la=!1);return d})}
function ph(a,b){if(0!==a.j.length){var c=Ic(ih(a),"format");c=Cc(c,"auth",a.Ub(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=nh(a.s,e,a.U,a.M);if(!b(c,f)){++a.M;break}a.U=0;a.M=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function kh(){ue.call(this,"event-logged",void 0)}
v(kh,ue);function fh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new ah;L(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));gh(this,new Zg)}
function gh(a,b){ae(a.h,Zg,1,b);Td(b,1)||L(b,1,1);a.i||(b=qh(a),Td(b,5)||L(b,5,a.locale));a.uach&&(b=qh(a),Zd(b,Xg,9)||ae(b,Xg,9,a.uach))}
function lh(a,b){Vd(Zd(a.h,Zg,1))&&(a=rh(a),L(a,1,b))}
function oh(a,b){Vd(Zd(a.h,Zg,1))&&(a=rh(a),L(a,2,b))}
function sh(a,b){var c=void 0===c?Yg:c;b(window,c).then(function(d){a.uach=d;d=qh(a);ae(d,Xg,9,a.uach);return!0}).catch(function(){return!1})}
function qh(a){a=Zd(a.h,Zg,1);var b=Zd(a,Xd,11);b||(b=new Xd,ae(a,Xd,11,b));return b}
function rh(a){a=qh(a);var b=Zd(a,Wg,10);b||(b=new Wg,L(b,2,!1),ae(a,Wg,10,b));return b}
function nh(a,b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;if(Vd(Zd(a.h,Zg,1))){var e=rh(a);L(e,3,Qd(d))}a=a.h.clone();d=Date.now().toString();a=L(a,4,d);b=be(a,$g,3,b);c&&L(b,14,c);return b}
;function th(a,b,c){Ng(a.url,function(d){d=d.target;if(Vg(d)){try{var e=d.G?d.G.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Nc,a.timeoutMillis,a.withCredentials)}
;function uh(a,b){N.call(this);this.s=a;this.Da=b;this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.aa=th;this.i=""}
Za(uh,N);function vh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;N.call(this);f?a=f:(a=new uh(a,"0"),a.i=b,se(this,a),""!=c&&(a.l=c),d&&(a.m=!0),e&&(a.j=e),b=new eh(a.s,a.W?a.W:vg,a.Da,a.aa,a.l,a.m,!1,a.ya,void 0,void 0,a.da?a.da:void 0),se(a,b),a.M&&gh(b.s,a.M),a.j&&(c=a.j,d=qh(b.s),L(d,7,c)),a.Z&&(b.W=a.Z),a.i&&(b.componentId=a.i),a.v&&((c=a.v)?(b.m||(b.m=new wg),c=c.serialize(),L(b.m,4,c)):b.m&&L(b.m,4,void 0,!1)),a.ka&&(d=a.ka,b.m||(b.m=new wg),
c=b.m,d=null==d?Nd:Ed(d),L(c,2,d)),a.U&&(c=a.U,b.Hb=!0,jh(b,c)),a.la&&sh(b.s,a.la),a=b);this.i=a}
v(vh,N);
vh.prototype.flush=function(a){var b=a||[];if(b.length){a=new ig;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new hg;var h=L(g,1,f.i);var k=f;g=[];for(var l=0;l<k.h.length;l++)g.push(k.h[l].Lb);if(null==g)g=L(h,3,Nd);else{k=G(g);if(!(k&4)){if(k&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(l=0;l<g.length;l++)g[l]=g[l];Fd(g,k|5)}g=L(h,3,g)}h=[];k=[];l=u(f.tb.keys());for(var p=l.next();!p.done;p=l.next())k.push(p.value.split(","));for(l=0;l<k.length;l++){p=k[l];var n=f.l;for(var w=f.zc(p)||
[],r=[],x=0;x<w.length;x++){var z=w[x],y=z&&z.cd;z=new eg;switch(n){case 3:Yd(z,1,fg,Number(y));break;case 2:var I=z;y=Number(y);if(null!=y&&"number"!==typeof y)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof y+": "+y);Yd(I,2,fg,y)}r.push(z)}n=r;for(w=0;w<n.length;w++){r=n[w];x=new gg;r=ae(x,eg,2,r);x=p;z=[];I=f;y=[];for(var K=0;K<I.h.length;K++)y.push(I.h[K].Mb);I=y;for(y=0;y<I.length;y++){K=I[y];var H=x[y],J=new cg;switch(K){case 3:Yd(J,1,dg,String(H));break;
case 2:Yd(J,2,dg,Qd(Number(H)));break;case 1:Yd(J,3,dg,"true"==H)}z.push(J)}be(r,cg,1,z);h.push(r)}}be(g,gg,4,h);c.push(g);e.clear()}be(a,hg,1,c);b=this.i;a instanceof $g?b.log(a):(c=new $g,a=a.serialize(),a=L(c,8,a),b.log(a));this.i.flush()}};function wh(a){this.v=xh();this.m=new vh(1828);this.h=new Qf(this.m);this.s=new Wf(this.h);this.j=new Xf(this.h);this.l=new Yf(this.h);this.i=new Uf(this.h);this.Ia=$f(a)}
function xh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function yh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function zh(a){function b(x,z){Promise.resolve().then(function(){var y;null!=(y=c.na)&&y.s.record(xh()-y.v,y.Ia);g.resolve({Td:x,Ue:z})})}
var c=this;this.i=!1;var d=a.program;var e=a.le;if(a.Ee){var f;this.na=null!=(f=a.na)?f:new wh(e)}var g=new yh;this.j=g.promise;if(C[e])if(C[e].a){var h;null!=(h=this.na)&&Vf(h.i,h.Ia,3)}else{var k;null!=(k=this.na)&&Vf(k.i,k.Ia,2);var l;null!=(l=this.na)&&l.h.qb()}else{var p;null!=(p=this.na)&&Vf(p.i,p.Ia,1);var n;null!=(n=this.na)&&n.h.qb()}try{this.l=u((0,C[e].a)(d,b,!0)).next().value,this.Te=g.promise.then(function(){})}catch(x){var w;
null!=(w=this.na)&&Vf(w.i,w.Ia,4);var r;null!=(r=this.na)&&r.h.qb();throw x;}}
zh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=xh(),d;null!=(d=this.na)&&d.j.h.sc("/client_streamz/bg/fsc",d.Ia);return this.j.then(function(e){var f=e.Td;return new Promise(function(g){f(function(h){var k;null!=(k=b.na)&&k.l.record(xh()-c,k.Ia);g(h)},[a.dd,
a.Ve])})})};
zh.prototype.Dd=function(a){if(this.i)throw Error("Already disposed");var b=xh(),c;null!=(c=this.na)&&c.j.h.sc("/client_streamz/bg/fsc",c.Ia);a=this.l([a.dd,a.Ve]);var d;null!=(d=this.na)&&d.l.record(xh()-b,d.Ia);return a};
zh.prototype.dispose=function(){var a;null!=(a=this.na)&&a.h.qb();this.i=!0;this.j.then(function(b){(b=b.Ue)&&b()})};
zh.prototype.h=function(){return this.i};var Ah=window;Bb("csi.gstatic.com");Bb("googleads.g.doubleclick.net");Bb("partner.googleadservices.com");Bb("pubads.g.doubleclick.net");Bb("securepubads.g.doubleclick.net");Bb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Bh;try{new URL("s://g"),Bh=!0}catch(a){Bh=!1}var Ch=Bh;function Dh(a){if(a instanceof Lb)a=Mb(a);else{b:if(Ch){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;var Eh={};function Fh(){}
function Gh(a){this.h=a}
v(Gh,Fh);Gh.prototype.toString=function(){return this.h};function Hh(a){var b="true".toString(),c=[new Gh(Ih[0].toLowerCase(),Eh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Gh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Jh(){throw Error("unknown trace type");}
;function Kh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Lh(a,b){a.src=Fb(b);Kh(a)}
;(function(){return""}).toString().indexOf("`");function Mh(a){this.te=a}
function Nh(a){return new Mh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Oh=[Nh("data"),Nh("http"),Nh("https"),Nh("mailto"),Nh("ftp"),new Mh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Ph(a){var b=Qh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Rh(){var a=[];Ph(function(b){a.push(b)});
return a}
var Qh={cf:"allow-forms",df:"allow-modals",ef:"allow-orientation-lock",ff:"allow-pointer-lock",gf:"allow-popups",hf:"allow-popups-to-escape-sandbox",jf:"allow-presentation",kf:"allow-same-origin",lf:"allow-scripts",mf:"allow-top-navigation",nf:"allow-top-navigation-by-user-activation"},Sh=db(function(){return Rh()});
function Th(){var a=Uh(),b={};fb(Sh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Uh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Vh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Wh=(new Date).getTime();var Xh="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ia(Xh),["client_dev_set_cookie"]);"undefined"!==typeof TextDecoder&&new TextDecoder;var Yh="undefined"!==typeof TextEncoder?new TextEncoder:null,Zh=Yh?function(a){return Yh.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function $h(a){Xe.call(this);var b=this;this.v=this.j=0;this.Aa=null!=a?a:{ma:function(e,f){return setTimeout(e,f)},
Fa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return A(function(e){return e.yield(ai(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||bi(this)}
v($h,Xe);function ci(){var a=di;$h.h||($h.h=new $h(a));return $h.h}
$h.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Aa.Fa(this.v);delete $h.h};
$h.prototype.sa=function(){return this.i};
function bi(a){a.v=a.Aa.ma(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):c.yield(ai(a),3):c.yield(ai(a),3);bi(a);c.h=0})},3E4)}
function ai(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.j=a.Aa.ma(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.s=void 0;a.j&&(a.Aa.Fa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Ye(a,"networkstatus-online"):Ye(a,"networkstatus-offline"));c(g);Da(h);break;case 2:za(h),g=!1,h.A(3)}})})}
;function ei(){this.data_=[];this.h=-1}
ei.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
ei.prototype.get=function(a){return!!this.data_[a]};
function fi(a){-1===a.h&&(a.h=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function gi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
gi.prototype[Symbol.iterator]=function(){return this};
gi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function hi(a,b){return new gi(a,b)}
;function ii(){this.blockSize=-1}
;function ji(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Za(ji,ii);ji.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ki(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ji.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)ki(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ki(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ki(this,e);f=0;break}}this.i=f;this.l+=b}};
ji.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;ki(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function li(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function mi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ni(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:li(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function oi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ni(a,"inverted-hdpi")&&mi(a,Array.prototype.filter.call(a.classList?a.classList:li(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function pi(){}
pi.prototype.next=function(){return qi};
var qi={done:!0,value:void 0};function ri(a){return{value:a,done:!1}}
pi.prototype.Ea=function(){return this};function si(a){if(a instanceof ti||a instanceof ui||a instanceof vi)return a;if("function"==typeof a.next)return new ti(function(){return a});
if("function"==typeof a[Symbol.iterator])return new ti(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ea)return new ti(function(){return a.Ea()});
throw Error("Not an iterator or iterable.");}
function ti(a){this.i=a}
ti.prototype.Ea=function(){return new ui(this.i())};
ti.prototype[Symbol.iterator]=function(){return new vi(this.i())};
ti.prototype.h=function(){return new vi(this.i())};
function ui(a){this.i=a}
v(ui,pi);ui.prototype.next=function(){return this.i.next()};
ui.prototype[Symbol.iterator]=function(){return new vi(this.i)};
ui.prototype.h=function(){return new vi(this.i)};
function vi(a){ti.call(this,function(){return a});
this.j=a}
v(vi,ti);vi.prototype.next=function(){return this.j.next()};function wi(a,b){this.i={};this.h=[];this.Ya=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof wi)for(c=a.Cc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=wi.prototype;m.Cc=function(){xi(this);return this.h.concat()};
m.has=function(a){return yi(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||zi;xi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function zi(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.Ya=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return yi(this.i,a)?(delete this.i[a],--this.size,this.Ya++,this.h.length>2*this.size&&xi(this),!0):!1};
function xi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];yi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],yi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return yi(this.i,a)?this.i[a]:b};
m.set=function(a,b){yi(this.i,a)||(this.size+=1,this.h.push(a),this.Ya++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Cc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new wi(this)};
m.keys=function(){return si(this.Ea(!0)).h()};
m.values=function(){return si(this.Ea(!1)).h()};
m.entries=function(){var a=this;return hi(this.keys(),function(b){return[b,a.get(b)]})};
m.Ea=function(a){xi(this);var b=0,c=this.Ya,d=this,e=new pi;e.next=function(){if(c!=d.Ya)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return qi;var f=d.h[b++];return ri(a?f:d.i[f])};
return e};
function yi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function O(a){N.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.v=!!a}
Za(O,N);m=O.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Ai(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Gb(b)}}
m.Gb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&kb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.eb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Bi(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Gb(c)}}return 0!=e}return!1};
function Bi(a,b,c){qf(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Gb,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.K=function(){O.xa.K.call(this);this.clear();this.l.length=0};function Ci(a){this.h=a}
Ci.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new yg).serialize(b))};
Ci.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ci.prototype.remove=function(a){this.h.remove(a)};function Di(a){this.h=a}
Za(Di,Ci);function Ei(a){this.data=a}
function Fi(a){return void 0===a||a instanceof Ei?a:new Ei(a)}
Di.prototype.set=function(a,b){Di.xa.set.call(this,a,Fi(b))};
Di.prototype.i=function(a){a=Di.xa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Di.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Gi(a){this.h=a}
Za(Gi,Di);Gi.prototype.set=function(a,b,c){if(b=Fi(b)){if(c){if(c<Date.now()){Gi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Gi.xa.set.call(this,a,b)};
Gi.prototype.i=function(a){var b=Gi.xa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Gi.prototype.remove.call(this,a);else return b}};function Hi(){}
;function Ii(){}
Za(Ii,Hi);Ii.prototype[Symbol.iterator]=function(){return si(this.Ea(!0)).h()};
Ii.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ji(a){this.h=a}
Za(Ji,Ii);m=Ji.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Ea=function(a){var b=0,c=this.h,d=new pi;d.next=function(){if(b>=c.length)return qi;var e=c.key(b++);if(a)return ri(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ri(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Ki(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Za(Ki,Ji);function Li(a,b){this.i=a;this.h=null;var c;if(c=Uc)c=!(9<=Number(hd));if(c){Mi||(Mi=new wi);this.h=Mi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Mi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Za(Li,Ii);var Ni={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Mi=null;function Oi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ni[b]})}
m=Li.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Oi(a),b);Pi(this)};
m.get=function(a){a=this.h.getAttribute(Oi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Oi(a));Pi(this)};
m.Ea=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new pi;d.next=function(){if(b>=c.length)return qi;var e=c[b++];if(a)return ri(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ri(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Pi(this)};
function Pi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Qi(a,b){this.i=a;this.h=b+"::"}
Za(Qi,Ii);Qi.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Qi.prototype.get=function(a){return this.i.get(this.h+a)};
Qi.prototype.remove=function(a){this.i.remove(this.h+a)};
Qi.prototype.Ea=function(a){var b=this.i[Symbol.iterator](),c=this,d=new pi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return ri(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var P={},Ri="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.Qc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Si={sb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ti={sb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
P.Se=function(){Ri?(P.pb=Uint8Array,P.Ja=Uint16Array,P.Md=Int32Array,P.assign(P,Si)):(P.pb=Array,P.Ja=Array,P.Md=Array,P.assign(P,Ti))};
P.Se();var Ui=!0;try{new Uint8Array(1)}catch(a){Ui=!1}
function Vi(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new P.pb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Wi={};Wi=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Xi={},Yi,Zi=[],$i=0;256>$i;$i++){Yi=$i;for(var aj=0;8>aj;aj++)Yi=Yi&1?3988292384^Yi>>>1:Yi>>>1;Zi[$i]=Yi}Xi=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Zi[(a^b[d])&255];return a^-1};var bj={};bj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function cj(a){for(var b=a.length;0<=--b;)a[b]=0}
var dj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ej=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],fj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],gj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],hj=Array(576);cj(hj);var ij=Array(60);cj(ij);var jj=Array(512);cj(jj);var kj=Array(256);cj(kj);var lj=Array(29);cj(lj);var mj=Array(30);cj(mj);function nj(a,b,c,d,e){this.Ed=a;this.ee=b;this.de=c;this.Zd=d;this.ye=e;this.ld=a&&a.length}
var oj,pj,qj;function rj(a,b){this.ed=a;this.zb=0;this.Xa=b}
function sj(a,b){a.T[a.pending++]=b&255;a.T[a.pending++]=b>>>8&255}
function tj(a,b,c){a.ba>16-c?(a.ja|=b<<a.ba&65535,sj(a,a.ja),a.ja=b>>16-a.ba,a.ba+=c-16):(a.ja|=b<<a.ba&65535,a.ba+=c)}
function uj(a,b,c){tj(a,c[2*b],c[2*b+1])}
function vj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function wj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=vj(d[e]++,e))}
function xj(a){var b;for(b=0;286>b;b++)a.oa[2*b]=0;for(b=0;30>b;b++)a.fb[2*b]=0;for(b=0;19>b;b++)a.ea[2*b]=0;a.oa[512]=1;a.Qa=a.Cb=0;a.va=a.matches=0}
function yj(a){8<a.ba?sj(a,a.ja):0<a.ba&&(a.T[a.pending++]=a.ja);a.ja=0;a.ba=0}
function zj(a,b,c){yj(a);sj(a,c);sj(a,~c);P.sb(a.T,a.window,b,c,a.pending);a.pending+=c}
function Aj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Bj(a,b,c){for(var d=a.V[c],e=c<<1;e<=a.Na;){e<a.Na&&Aj(b,a.V[e+1],a.V[e],a.depth)&&e++;if(Aj(b,d,a.V[e],a.depth))break;a.V[c]=a.V[e];c=e;e<<=1}a.V[c]=d}
function Cj(a,b,c){var d=0;if(0!==a.va){do{var e=a.T[a.Jb+2*d]<<8|a.T[a.Jb+2*d+1];var f=a.T[a.Gc+d];d++;if(0===e)uj(a,f,b);else{var g=kj[f];uj(a,g+256+1,b);var h=dj[g];0!==h&&(f-=lj[g],tj(a,f,h));e--;g=256>e?jj[e]:jj[256+(e>>>7)];uj(a,g,c);h=ej[g];0!==h&&(e-=mj[g],tj(a,e,h))}}while(d<a.va)}uj(a,256,b)}
function Dj(a,b){var c=b.ed,d=b.Xa.Ed,e=b.Xa.ld,f=b.Xa.Zd,g,h=-1;a.Na=0;a.wb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.V[++a.Na]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Na;){var k=a.V[++a.Na]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Qa--;e&&(a.Cb-=d[2*k+1])}b.zb=h;for(g=a.Na>>1;1<=g;g--)Bj(a,c,g);k=f;do g=a.V[1],a.V[1]=a.V[a.Na--],Bj(a,c,1),d=a.V[1],a.V[--a.wb]=g,a.V[--a.wb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.V[1]=k++,Bj(a,c,1);while(2<=a.Na);a.V[--a.wb]=
a.V[1];g=b.ed;k=b.zb;d=b.Xa.Ed;e=b.Xa.ld;f=b.Xa.ee;var l=b.Xa.de,p=b.Xa.ye,n,w=0;for(n=0;15>=n;n++)a.Ka[n]=0;g[2*a.V[a.wb]+1]=0;for(b=a.wb+1;573>b;b++){var r=a.V[b];n=g[2*g[2*r+1]+1]+1;n>p&&(n=p,w++);g[2*r+1]=n;if(!(r>k)){a.Ka[n]++;var x=0;r>=l&&(x=f[r-l]);var z=g[2*r];a.Qa+=z*(n+x);e&&(a.Cb+=z*(d[2*r+1]+x))}}if(0!==w){do{for(n=p-1;0===a.Ka[n];)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[p]--;w-=2}while(0<w);for(n=p;0!==n;n--)for(r=a.Ka[n];0!==r;)d=a.V[--b],d>k||(g[2*d+1]!==n&&(a.Qa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),r--)}wj(c,h,a.Ka)}
function Ej(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ea[2*l]+=g:0!==l?(l!==e&&a.ea[2*l]++,a.ea[32]++):10>=g?a.ea[34]++:a.ea[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Fj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do uj(a,l,a.ea);while(0!==--g)}else 0!==l?(l!==e&&(uj(a,l,a.ea),g--),uj(a,16,a.ea),tj(a,g-3,2)):10>=g?(uj(a,17,a.ea),tj(a,g-3,3)):(uj(a,18,a.ea),tj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Gj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.oa[2*c])return 0;if(0!==a.oa[18]||0!==a.oa[20]||0!==a.oa[26])return 1;for(c=32;256>c;c++)if(0!==a.oa[2*c])return 1;return 0}
var Hj=!1;function Ij(a,b,c){a.T[a.Jb+2*a.va]=b>>>8&255;a.T[a.Jb+2*a.va+1]=b&255;a.T[a.Gc+a.va]=c&255;a.va++;0===b?a.oa[2*c]++:(a.matches++,b--,a.oa[2*(kj[c]+256+1)]++,a.fb[2*(256>b?jj[b]:jj[256+(b>>>7)])]++);return a.va===a.Nb-1}
;function Jj(a,b){a.msg=bj[b];return b}
function Kj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Lj(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(P.sb(a.output,b.T,b.Ob,c,a.Ab),a.Ab+=c,b.Ob+=c,a.Rc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Ob=0))}
function Mj(a,b){var c=0<=a.ra?a.ra:-1,d=a.o-a.ra,e=0;if(0<a.level){2===a.F.xc&&(a.F.xc=Gj(a));Dj(a,a.ic);Dj(a,a.dc);Ej(a,a.oa,a.ic.zb);Ej(a,a.fb,a.dc.zb);Dj(a,a.Yc);for(e=18;3<=e&&0===a.ea[2*gj[e]+1];e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.Cb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)tj(a,b?1:0,3),zj(a,c,d);else if(4===a.strategy||g===f)tj(a,2+(b?1:0),3),Cj(a,hj,ij);else{tj(a,4+(b?1:0),3);c=a.ic.zb+1;d=a.dc.zb+1;e+=1;tj(a,c-257,5);tj(a,d-1,5);tj(a,e-4,4);for(f=0;f<e;f++)tj(a,a.ea[2*
gj[f]+1],3);Fj(a,a.oa,c-1);Fj(a,a.fb,d-1);Cj(a,a.oa,a.fb)}xj(a);b&&yj(a);a.ra=a.o;Lj(a.F)}
function R(a,b){a.T[a.pending++]=b}
function Nj(a,b){a.T[a.pending++]=b>>>8&255;a.T[a.pending++]=b&255}
function Oj(a,b){var c=a.pd,d=a.o,e=a.ta,f=a.rd,g=a.o>a.ha-262?a.o-(a.ha-262):0,h=a.window,k=a.Za,l=a.Ha,p=a.o+258,n=h[d+e-1],w=h[d+e];a.ta>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===w&&h[r+e-1]===n&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<p;);r=258-(p-d);d=p-258;if(r>e){a.yb=b;e=r;if(r>=f)break;n=h[d+e-1];w=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function Pj(a){var b=a.ha,c;do{var d=a.Kd-a.u-a.o;if(a.o>=b+(b-262)){P.sb(a.window,a.window,b,b,0);a.yb-=b;a.o-=b;a.ra-=b;var e=c=a.hc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.F.ia)break;e=a.F;c=a.window;f=a.o+a.u;var g=e.ia;g>d&&(g=d);0===g?c=0:(e.ia-=g,P.sb(c,e.input,e.ib,g,f),1===e.state.wrap?e.D=Wi(e.D,c,g,f):2===e.state.wrap&&(e.D=Xi(e.D,c,g,f)),e.ib+=g,e.mb+=g,c=g);a.u+=c;if(3<=a.u+a.qa)for(d=a.o-a.qa,a.H=a.window[d],
a.H=(a.H<<a.Ma^a.window[d+1])&a.La;a.qa&&!(a.H=(a.H<<a.Ma^a.window[d+3-1])&a.La,a.Ha[d&a.Za]=a.head[a.H],a.head[a.H]=d,d++,a.qa--,3>a.u+a.qa););}while(262>a.u&&0!==a.F.ia)}
function Qj(a,b){for(var c;;){if(262>a.u){Pj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Za]=a.head[a.H],a.head[a.H]=a.o);0!==c&&a.o-c<=a.ha-262&&(a.J=Oj(a,c));if(3<=a.J)if(c=Ij(a,a.o-a.yb,a.J-3),a.u-=a.J,a.J<=a.Hc&&3<=a.u){a.J--;do a.o++,a.H=(a.H<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Za]=a.head[a.H],a.head[a.H]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.H=a.window[a.o],a.H=(a.H<<a.Ma^a.window[a.o+1])&a.La;else c=Ij(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Mj(a,!1),0===a.F.I))return 1}a.qa=2>a.o?a.o:2;return 4===b?(Mj(a,!0),0===a.F.I?3:4):a.va&&(Mj(a,!1),0===a.F.I)?1:2}
function Rj(a,b){for(var c,d;;){if(262>a.u){Pj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Za]=a.head[a.H],a.head[a.H]=a.o);a.ta=a.J;a.ud=a.yb;a.J=2;0!==c&&a.ta<a.Hc&&a.o-c<=a.ha-262&&(a.J=Oj(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.yb)&&(a.J=2));if(3<=a.ta&&a.J<=a.ta){d=a.o+a.u-3;c=Ij(a,a.o-1-a.ud,a.ta-3);a.u-=a.ta-1;a.ta-=2;do++a.o<=d&&(a.H=(a.H<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Za]=a.head[a.H],a.head[a.H]=a.o);
while(0!==--a.ta);a.gb=0;a.J=2;a.o++;if(c&&(Mj(a,!1),0===a.F.I))return 1}else if(a.gb){if((c=Ij(a,0,a.window[a.o-1]))&&Mj(a,!1),a.o++,a.u--,0===a.F.I)return 1}else a.gb=1,a.o++,a.u--}a.gb&&(Ij(a,0,a.window[a.o-1]),a.gb=0);a.qa=2>a.o?a.o:2;return 4===b?(Mj(a,!0),0===a.F.I?3:4):a.va&&(Mj(a,!1),0===a.F.I)?1:2}
function Sj(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){Pj(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=Ij(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=Ij(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Mj(a,!1),0===a.F.I))return 1}a.qa=0;return 4===b?(Mj(a,!0),0===a.F.I?3:4):
a.va&&(Mj(a,!1),0===a.F.I)?1:2}
function Tj(a,b){for(var c;;){if(0===a.u&&(Pj(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=Ij(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Mj(a,!1),0===a.F.I))return 1}a.qa=0;return 4===b?(Mj(a,!0),0===a.F.I?3:4):a.va&&(Mj(a,!1),0===a.F.I)?1:2}
function Uj(a,b,c,d,e){this.me=a;this.xe=b;this.Ae=c;this.we=d;this.he=e}
var Vj;Vj=[new Uj(0,0,0,0,function(a,b){var c=65535;for(c>a.wa-5&&(c=a.wa-5);;){if(1>=a.u){Pj(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ra+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Mj(a,!1),0===a.F.I)return 1;if(a.o-a.ra>=a.ha-262&&(Mj(a,!1),0===a.F.I))return 1}a.qa=0;if(4===b)return Mj(a,!0),0===a.F.I?3:4;a.o>a.ra&&Mj(a,!1);return 1}),
new Uj(4,4,8,4,Qj),new Uj(4,5,16,8,Qj),new Uj(4,6,32,32,Qj),new Uj(4,4,16,16,Rj),new Uj(8,16,32,32,Rj),new Uj(8,16,128,128,Rj),new Uj(8,32,128,256,Rj),new Uj(32,128,258,1024,Rj),new Uj(32,258,258,4096,Rj)];
function Wj(){this.F=null;this.status=0;this.T=null;this.wrap=this.pending=this.Ob=this.wa=0;this.B=null;this.za=0;this.method=8;this.xb=-1;this.Za=this.Tc=this.ha=0;this.window=null;this.Kd=0;this.head=this.Ha=null;this.rd=this.kd=this.strategy=this.level=this.Hc=this.pd=this.ta=this.u=this.yb=this.o=this.gb=this.ud=this.J=this.ra=this.Ma=this.La=this.Dc=this.hc=this.H=0;this.oa=new P.Ja(1146);this.fb=new P.Ja(122);this.ea=new P.Ja(78);Kj(this.oa);Kj(this.fb);Kj(this.ea);this.Yc=this.dc=this.ic=
null;this.Ka=new P.Ja(16);this.V=new P.Ja(573);Kj(this.V);this.wb=this.Na=0;this.depth=new P.Ja(573);Kj(this.depth);this.ba=this.ja=this.qa=this.matches=this.Cb=this.Qa=this.Jb=this.va=this.Nb=this.Gc=0}
function Xj(a,b){if(!a||!a.state||5<b||0>b)return a?Jj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ia||666===c.status&&4!==b)return Jj(a,0===a.I?-5:-2);c.F=a;var d=c.xb;c.xb=b;if(42===c.status)if(2===c.wrap)a.D=0,R(c,31),R(c,139),R(c,8),c.B?(R(c,(c.B.text?1:0)+(c.B.Ua?2:0)+(c.B.Ta?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),R(c,c.B.time&255),R(c,c.B.time>>8&255),R(c,c.B.time>>16&255),R(c,c.B.time>>24&255),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,c.B.os&255),c.B.Ta&&c.B.Ta.length&&
(R(c,c.B.Ta.length&255),R(c,c.B.Ta.length>>8&255)),c.B.Ua&&(a.D=Xi(a.D,c.T,c.pending,0)),c.za=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,3),c.status=113);else{var e=8+(c.Tc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Nj(c,e+(31-e%31));0!==c.o&&(Nj(c,a.D>>>16),Nj(c,a.D&65535));a.D=1}if(69===c.status)if(c.B.Ta){for(e=c.pending;c.za<(c.B.Ta.length&65535)&&(c.pending!==c.wa||(c.B.Ua&&
c.pending>e&&(a.D=Xi(a.D,c.T,c.pending-e,e)),Lj(a),e=c.pending,c.pending!==c.wa));)R(c,c.B.Ta[c.za]&255),c.za++;c.B.Ua&&c.pending>e&&(a.D=Xi(a.D,c.T,c.pending-e,e));c.za===c.B.Ta.length&&(c.za=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.wa&&(c.B.Ua&&c.pending>e&&(a.D=Xi(a.D,c.T,c.pending-e,e)),Lj(a),e=c.pending,c.pending===c.wa)){var f=1;break}f=c.za<c.B.name.length?c.B.name.charCodeAt(c.za++)&255:0;R(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.D=Xi(a.D,
c.T,c.pending-e,e));0===f&&(c.za=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.wa&&(c.B.Ua&&c.pending>e&&(a.D=Xi(a.D,c.T,c.pending-e,e)),Lj(a),e=c.pending,c.pending===c.wa)){f=1;break}f=c.za<c.B.comment.length?c.B.comment.charCodeAt(c.za++)&255:0;R(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.D=Xi(a.D,c.T,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ua?(c.pending+2>c.wa&&Lj(a),c.pending+2<=c.wa&&(R(c,a.D&255),R(c,a.D>>
8&255),a.D=0,c.status=113)):c.status=113);if(0!==c.pending){if(Lj(a),0===a.I)return c.xb=-1,0}else if(0===a.ia&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Jj(a,-5);if(666===c.status&&0!==a.ia)return Jj(a,-5);if(0!==a.ia||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?Tj(c,b):3===c.strategy?Sj(c,b):Vj[c.level].he(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.xb=-1),0;if(2===d&&(1===b?(tj(c,2,3),uj(c,256,hj),16===c.ba?(sj(c,c.ja),c.ja=0,c.ba=0):8<=c.ba&&(c.T[c.pending++]=
c.ja&255,c.ja>>=8,c.ba-=8)):5!==b&&(tj(c,0,3),zj(c,0,0),3===b&&(Kj(c.head),0===c.u&&(c.o=0,c.ra=0,c.qa=0))),Lj(a),0===a.I))return c.xb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(R(c,a.D&255),R(c,a.D>>8&255),R(c,a.D>>16&255),R(c,a.D>>24&255),R(c,a.mb&255),R(c,a.mb>>8&255),R(c,a.mb>>16&255),R(c,a.mb>>24&255)):(Nj(c,a.D>>>16),Nj(c,a.D&65535));Lj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Yj={};Yj=function(){this.input=null;this.mb=this.ia=this.ib=0;this.output=null;this.Rc=this.I=this.Ab=0;this.msg="";this.state=null;this.xc=2;this.D=0};var Zj=Object.prototype.toString;
function ak(a){if(!(this instanceof ak))return new ak(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.F=new Yj;this.F.I=0;var b=this.F;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Jj(b,-2);else{8===e&&(e=9);var k=new Wj;b.state=k;k.F=b;k.wrap=h;k.B=null;k.Tc=e;k.ha=1<<k.Tc;k.Za=k.ha-1;k.Dc=f+7;k.hc=1<<k.Dc;k.La=k.hc-1;k.Ma=~~((k.Dc+3-1)/3);k.window=new P.pb(2*k.ha);k.head=new P.Ja(k.hc);k.Ha=new P.Ja(k.ha);k.Nb=1<<f+6;k.wa=4*k.Nb;k.T=new P.pb(k.wa);k.Jb=1*k.Nb;k.Gc=3*k.Nb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.mb=b.Rc=0;b.xc=2;c=b.state;c.pending=0;c.Ob=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.D=2===c.wrap?
0:1;c.xb=0;if(!Hj){d=Array(16);for(f=g=0;28>f;f++)for(lj[f]=g,e=0;e<1<<dj[f];e++)kj[g++]=f;kj[g-1]=f;for(f=g=0;16>f;f++)for(mj[f]=g,e=0;e<1<<ej[f];e++)jj[g++]=f;for(g>>=7;30>f;f++)for(mj[f]=g<<7,e=0;e<1<<ej[f]-7;e++)jj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)hj[2*e+1]=8,e++,d[8]++;for(;255>=e;)hj[2*e+1]=9,e++,d[9]++;for(;279>=e;)hj[2*e+1]=7,e++,d[7]++;for(;287>=e;)hj[2*e+1]=8,e++,d[8]++;wj(hj,287,d);for(e=0;30>e;e++)ij[2*e+1]=5,ij[2*e]=vj(e,5);oj=new nj(hj,dj,257,286,15);pj=new nj(ij,
ej,0,30,15);qj=new nj([],fj,0,19,7);Hj=!0}c.ic=new rj(c.oa,oj);c.dc=new rj(c.fb,pj);c.Yc=new rj(c.ea,qj);c.ja=0;c.ba=0;xj(c);c=0}else c=Jj(b,-2);0===c&&(b=b.state,b.Kd=2*b.ha,Kj(b.head),b.Hc=Vj[b.level].xe,b.kd=Vj[b.level].me,b.rd=Vj[b.level].Ae,b.pd=Vj[b.level].we,b.o=0,b.ra=0,b.u=0,b.qa=0,b.J=b.ta=2,b.gb=0,b.H=0);b=c}}else b=-2;if(0!==b)throw Error(bj[b]);a.header&&(b=this.F)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=Vi(a.dictionary):
"[object ArrayBuffer]"===Zj.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.F;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.D=Wi(a.D,f,g,0));l.wrap=0;g>=l.ha&&(0===b&&(Kj(l.head),l.o=0,l.ra=0,l.qa=0),c=new P.pb(l.ha),P.sb(c,f,g-l.ha,l.ha,0),f=c,g=l.ha);c=a.ia;d=a.ib;e=a.input;a.ia=g;a.ib=0;a.input=f;for(Pj(l);3<=l.u;){f=l.o;g=l.u-2;do l.H=(l.H<<l.Ma^l.window[f+3-1])&l.La,l.Ha[f&l.Za]=l.head[l.H],l.head[l.H]=f,f++;while(--g);
l.o=f;l.u=2;Pj(l)}l.o+=l.u;l.ra=l.o;l.qa=l.u;l.u=0;l.J=l.ta=2;l.gb=0;a.ib=d;a.input=e;a.ia=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(bj[b]);this.tf=!0}}
ak.prototype.push=function(a,b){var c=this.F,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Vi(a):"[object ArrayBuffer]"===Zj.call(a)?c.input=new Uint8Array(a):c.input=a;c.ib=0;c.ia=c.input.length;do{0===c.I&&(c.output=new P.pb(d),c.Ab=0,c.I=d);a=Xj(c,e);if(1!==a&&0!==a)return bk(this,a),this.ended=!0,!1;if(0===c.I||0===c.ia&&(4===e||2===e))if("string"===this.options.to){var f=P.Qc(c.output,c.Ab);b=f;f=f.length;if(65537>f&&(b.subarray&&Ui||!b.subarray))b=
String.fromCharCode.apply(null,P.Qc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.Qc(c.output,c.Ab),this.chunks.push(b)}while((0<c.ia||0===c.I)&&1!==a);if(4===e)return(c=this.F)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Jj(c,-2):(c.state=null,a=113===d?Jj(c,-3):0)):a=-2,bk(this,a),this.ended=!0,0===a;2===e&&(bk(this,0),c.I=0);return!0};
function bk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):P.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.F.msg}
function ck(a,b){b=b||{};b.gzip=!0;b=new ak(b);b.push(a,!0);if(b.err)throw b.msg||bj[b.err];return b.result}
;function dk(a){return Hb(null===a?"null":void 0===a?"undefined":a)}
;function ek(a){this.name=a}
;var fk=new ek("rawColdConfigGroup");var gk=new ek("rawHotConfigGroup");var hk=new ek("commandExecutorCommand");function ik(a){M.call(this,a)}
v(ik,M);var jk=new ek("continuationCommand");var kk=new ek("signalAction");var lk=new ek("webCommandMetadata");var mk=new ek("signalServiceEndpoint");var nk={sf:"EMBEDDED_PLAYER_MODE_UNKNOWN",pf:"EMBEDDED_PLAYER_MODE_DEFAULT",rf:"EMBEDDED_PLAYER_MODE_PFP",qf:"EMBEDDED_PLAYER_MODE_PFL"};var ok=new ek("feedbackEndpoint");function pk(a){M.call(this,a)}
v(pk,M);var qk=new ek("webPlayerShareEntityServiceEndpoint");var rk=new ek("playlistEditEndpoint");var sk=new ek("modifyChannelNotificationPreferenceEndpoint");var tk=new ek("unsubscribeEndpoint");var uk=new ek("subscribeEndpoint");function vk(){var a=wk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function xk(a){D("yt.ads.biscotti.lastId_",a)}
;function yk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var zk=C.window,Ak,Bk,Ck=(null==zk?void 0:null==(Ak=zk.yt)?void 0:Ak.config_)||(null==zk?void 0:null==(Bk=zk.ytcfg)?void 0:Bk.data_)||{};D("yt.config_",Ck);function Dk(){yk(Ck,arguments)}
function S(a,b){return a in Ck?Ck[a]:b}
;var Ek=[];function Fk(a){Ek.forEach(function(b){return b(a)})}
function Gk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Hk(b)}}:a}
function Hk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Dk("ERRORS",b));Fk(a)}
function Ik(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Dk("ERRORS",f))}
;var Jk=/^[\w.]*$/,Kk={q:!0,search_query:!0};function Lk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Mk(f[0]||""),h=Mk(f[1]||"");g in c?Array.isArray(c[g])?lb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],p=String(Lk);k.args=[{key:l,value:f[1],query:a,method:Nk==p?"unchanged":p}];Kk.hasOwnProperty(l)||Ik(k)}}return c}
var Nk=String(Lk);function Ok(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Pk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Lk(a,"&")}
function Qk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Pk(1<a.length?a[1]:a[0])):{}}
function Rk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Pk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Dc(a,e)+d}
function Sk(a){if(!b)var b=window.location.href;var c=uc(1,a),d=vc(a);c&&d?(a=a.match(sc),b=b.match(sc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?vc(b)==d&&(Number(uc(4,b))||null)==(Number(uc(4,a))||null):!0;return a}
function Mk(a){return a&&a.match(Jk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Tk(a){var b=Uk;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Wh;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Aa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ah:g;try{var h=g.history.length}catch(Aa){h=0}e.u_his=h;var k;e.u_h=null==(k=Ah.screen)?void 0:k.height;var l;e.u_w=null==(l=Ah.screen)?void 0:l.width;var p;e.u_ah=null==(p=Ah.screen)?void 0:p.availHeight;var n;e.u_aw=
null==(n=Ah.screen)?void 0:n.availWidth;var w;e.u_cd=null==(w=Ah.screen)?void 0:w.colorDepth}catch(Aa){}h=b.h;try{var r=h.screenX;var x=h.screenY}catch(Aa){}try{var z=h.outerWidth;var y=h.outerHeight}catch(Aa){}try{var I=h.innerWidth;var K=h.innerHeight}catch(Aa){}try{var H=h.screenLeft;var J=h.screenTop}catch(Aa){}try{I=h.innerWidth,K=h.innerHeight}catch(Aa){}try{var V=h.screen.availWidth;var aa=h.screen.availTop}catch(Aa){}r=[H,J,r,x,V,aa,z,y,I,K];try{var Ga=(b.h.top||window).document,oa="CSS1Compat"==
Ga.compatMode?Ga.documentElement:Ga.body;var Ka=(new df(oa.clientWidth,oa.clientHeight)).round()}catch(Aa){Ka=new df(-12245933,-12245933)}Ga=Ka;Ka={};var Ba=void 0===Ba?C:Ba;oa=new ei;"SVGElement"in Ba&&"createElementNS"in Ba.document&&oa.set(0);x=Th();x["allow-top-navigation-by-user-activation"]&&oa.set(1);x["allow-popups-to-escape-sandbox"]&&oa.set(2);Ba.crypto&&Ba.crypto.subtle&&oa.set(3);"TextDecoder"in Ba&&"TextEncoder"in Ba&&oa.set(4);Ba=fi(oa);Ka.bc=Ba;Ka.bih=Ga.height;Ka.biw=Ga.width;Ka.brdim=
r.join();b=b.i;b=(Ka.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ka.wgl=!!Ah.WebGLRenderingContext,Ka);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Uk=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Ok(Tk(a))});Date.now();navigator.userAgent.indexOf(" (CrKey ");function T(a){a=Vk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Wk(a,b){a=Vk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Xk(){var a=Vk("web_async_context_processor_impl");return void 0!==a?String(a):""}
function Vk(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
function Yk(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Zk="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function $k(){if(!Zk)return null;var a=Zk();return"open"in a?a:null}
function al(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function bl(a,b){"function"===typeof a&&(a=Gk(a));return window.setTimeout(a,b)}
;var cl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},dl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Xh)),el=!1;
function fl(a,b){b=void 0===b?{}:b;var c=Sk(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in cl){var f=S(cl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&vc(a)||d&&void 0!==b[e]||(!T("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}T("move_vss_away_from_login_info_cookie")&&c&&S("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==S("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!vc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!vc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&vc(a)||(b["X-YouTube-Ad-Signals"]=Ok(Tk()));return b}
function gl(a){var b=window.location.search,c=vc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Sk(a)&&(c=document.location.hostname);var d=tc(uc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Pk(b),f={};fb(dl,function(g){e[g]&&(f[g]=e[g])});
return Rk(a,f||{},!1)}
function hl(a,b){var c=b.format||"JSON";a=il(a,b);var d=jl(a,b),e=!1,f=kl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=al(k),p=null,n=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(l||n||w)p=ll(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(p&&p.return_code,10);break a;case "RAW":l=!0;break a}l=!!p}p=p||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,p):b.onError&&b.onError.call(n,k,p);b.onFinish&&b.onFinish.call(n,
k,p)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=bl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function il(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Rk(a,b||{},!0);return a}
function jl(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||vc(a)&&!b.withCredentials&&vc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Pk(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Bc(e));f=e||f&&!pb(f);!el&&f&&"POST"!=b.method&&(el=!0,Hk(Error("AJAX request with postData should use POST")));return e}
function ll(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ik(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ml(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=nl(g)})}d&&ol(e);
return e}
function ol(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new lc(d)}else ol(a[b])}}
function ml(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function nl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function pl(a,b){b.method="POST";b.postParams||(b.postParams={});return hl(a,b)}
function kl(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Gk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=$k();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;T("debug_forward_web_query_parameters")&&(a=gl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=fl(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var ql=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
kc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
kc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
kc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var sl={Va:[],Sa:[{callback:rl,weight:500}]};function rl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function tl(){this.Sa=[];this.Va=[]}
var ul;function vl(){if(!ul){var a=ul=new tl;a.Va.length=0;a.Sa.length=0;sl.Va&&a.Va.push.apply(a.Va,sl.Va);sl.Sa&&a.Sa.push.apply(a.Sa,sl.Sa)}return ul}
;var wl=new O;function xl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=yl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=yl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=yl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function yl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function zl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Al(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=xl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Al(e+".ve",f,g,h):0;d+=g;d+=Al(e,a[e],b,c);if(500<d)break}}else c[b]=Bl(a),d+=c[b].length;else c[b]=Bl(a),d+=c[b].length;return d}
function Al(a,b,c,d){c+="."+a;a=Bl(b);d[c]=a;return c.length+a.length}
function Bl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Cl(){this.We=!0}
function Dl(){Cl.h||(Cl.h=new Cl);return Cl.h}
function El(a,b){a={};var c=vg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Ck||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Ck&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return a}
;var Fl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Gl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Hl(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Il(a,b,c,d,e){rg.set(""+a,b,{jc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Jl(a){return rg.get(""+a,void 0)}
function Kl(a,b,c){rg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Ll(){if(!rg.isEnabled())return!1;if(!rg.isEmpty())return!0;rg.set("TESTCOOKIESENABLED","1",{jc:60});if("1"!==rg.get("TESTCOOKIESENABLED"))return!1;rg.remove("TESTCOOKIESENABLED");return!0}
;var Ml=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Ml);function Nl(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Jl(this.h);a&&this.parse(a)}
var Ol;function Pl(){Ol||(Ol=new Nl);return Ol}
m=Nl.prototype;m.get=function(a,b){Ql(a);Rl(a);a=void 0!==Ml[a]?Ml[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){Ql(a);Rl(a);if(null==b)throw Error("ExpectedNotNull");Ml[a]=b.toString()};
function Sl(a){return!!((Tl("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){Ql(a);Rl(a);delete Ml[a]};
m.clear=function(){for(var a in Ml)delete Ml[a]};
function Rl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ql(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Tl(a){a=void 0!==Ml[a]?Ml[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Ml[d]=c.toString())}};var Ul={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Vl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Wl(){var a=C.navigator;return a?a.connection:void 0}
function Xl(){var a=Wl();if(a){var b=Ul[a.type||"unknown"]||"CONN_UNKNOWN";a=Ul[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Yl(){var a=Wl();if(null!=a&&a.effectiveType)return Vl.hasOwnProperty(a.effectiveType)?Vl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Zl(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(Zl,Error);function $l(){try{return am(),!0}catch(a){return!1}}
function am(a){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new Zl("Datasync ID not set",void 0===a?"unknown":a);}
;function bm(){}
function cm(a,b){return dm(a,0,b)}
bm.prototype.ma=function(a,b){return dm(a,1,b)};
function em(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function fm(){bm.apply(this,arguments)}
v(fm,bm);function gm(){fm.h||(fm.h=new fm);return fm.h}
function dm(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):bl(a,c||0)}
fm.prototype.Fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
fm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
fm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var di=gm();function hm(a){var b=new Ki;(b=b.isAvailable()?a?new Qi(b,a):b:null)||(a=new Li(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Gi(a):null;this.i=document.domain||window.location.hostname}
hm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new yg).serialize(b))}catch(f){return}else e=escape(b);Il(a,e,c,this.i)};
hm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Jl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
hm.prototype.remove=function(a){this.h&&this.h.remove(a);Kl(a,"/",this.i)};var im=function(){var a;return function(){a||(a=new hm("ytidb"));return a}}();
function jm(){var a;return null==(a=im())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var km=[],lm,mm=!1;function nm(){var a={};for(lm=new om(void 0===a.handleError?pm:a.handleError,void 0===a.logEvent?qm:a.logEvent);0<km.length;)switch(a=km.shift(),a.type){case "ERROR":lm.handleError(a.payload);break;case "EVENT":lm.logEvent(a.eventType,a.payload)}}
function rm(a){mm||(lm?lm.handleError(a):(km.push({type:"ERROR",payload:a}),10<km.length&&km.shift()))}
function sm(a,b){mm||(lm?lm.logEvent(a,b):(km.push({type:"EVENT",eventType:a,payload:b}),10<km.length&&km.shift()))}
;function tm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function um(a){return a.substr(0,a.indexOf(":"))||a}
;var wm=id||jd;function xm(a){var b=Vb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var ym={},zm=(ym.AUTH_INVALID="No user identifier specified.",ym.EXPLICIT_ABORT="Transaction was explicitly aborted.",ym.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ym.MISSING_INDEX="Index not created.",ym.MISSING_OBJECT_STORES="Object stores not created.",ym.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ym.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ym.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ym.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ym.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ym.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ym.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ym),Am={},Bm=(Am.AUTH_INVALID="ERROR",Am.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Am.EXPLICIT_ABORT="IGNORED",Am.IDB_NOT_SUPPORTED="ERROR",Am.MISSING_INDEX=
"WARNING",Am.MISSING_OBJECT_STORES="ERROR",Am.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Am.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Am.QUOTA_EXCEEDED="WARNING",Am.QUOTA_MAYBE_EXCEEDED="WARNING",Am.UNKNOWN_ABORT="WARNING",Am.INCOMPATIBLE_DB_VERSION="WARNING",Am),Cm={},Dm=(Cm.AUTH_INVALID=!1,Cm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Cm.EXPLICIT_ABORT=!1,Cm.IDB_NOT_SUPPORTED=!1,Cm.MISSING_INDEX=!1,Cm.MISSING_OBJECT_STORES=!1,Cm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Cm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Cm.QUOTA_EXCEEDED=!1,Cm.QUOTA_MAYBE_EXCEEDED=!0,Cm.UNKNOWN_ABORT=!0,Cm.INCOMPATIBLE_DB_VERSION=!1,Cm);function Em(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?zm[a]:c;d=void 0===d?Bm[a]:d;e=void 0===e?Dm[a]:e;Zl.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Em.prototype)}
v(Em,Zl);function Fm(a,b){Em.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},zm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Fm.prototype)}
v(Fm,Em);function Gm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Gm.prototype)}
v(Gm,Error);var Hm=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Im(a,b,c,d){b=um(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Em)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Em("QUOTA_EXCEEDED",a);if(kd&&"UnknownError"===e.name)return new Em("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Gm)return new Em("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Hm.some(function(f){return e.message.includes(f)}))return new Em("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Em("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",td:e.name})];e.level="WARNING";return e}
function Jm(a,b,c){var d=jm();return new Em("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Km(a){if(!a)throw Error();throw a;}
function Lm(a){return a}
function Mm(a){this.h=a}
function Nm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Nm.all=function(a){return new Nm(new Mm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={nb:0};f.nb<a.length;f={nb:f.nb},++f.nb)Nm.resolve(a[f.nb]).then(function(g){return function(h){d[g.nb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Nm.resolve=function(a){return new Nm(new Mm(function(b,c){a instanceof Nm?a.then(b,c):b(a)}))};
Nm.reject=function(a){return new Nm(new Mm(function(b,c){c(a)}))};
Nm.prototype.then=function(a,b){var c=this,d=null!=a?a:Lm,e=null!=b?b:Km;return new Nm(new Mm(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Om(c,c,d,f,g)}),c.i.push(function(){Pm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Om(c,c,d,f,g):"REJECTED"===c.state.status&&Pm(c,c,e,f,g)}))};
Nm.prototype.catch=function(a){return this.then(void 0,a)};
function Om(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Nm?Qm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Pm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Nm?Qm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Nm?Qm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Rm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Sm(a){return new Promise(function(b,c){Rm(a,b,c)})}
function Tm(a){return new Nm(new Mm(function(b,c){Rm(a,b,c)}))}
;function Um(a,b){return new Nm(new Mm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Vm=window,U=Vm.ytcsi&&Vm.ytcsi.now?Vm.ytcsi.now:Vm.performance&&Vm.performance.timing&&Vm.performance.now&&Vm.performance.timing.navigationStart?function(){return Vm.performance.timing.navigationStart+Vm.performance.now()}:function(){return(new Date).getTime()};function Wm(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
m=Wm.prototype;m.add=function(a,b,c){return Xm(this,[a],{mode:"readwrite",fa:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Xm(this,[a],{mode:"readwrite",fa:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Xm(this,[a],{mode:"readonly",fa:!0},function(c){return c.objectStore(a).count(b)})};
function Ym(a,b,c){a=a.h.createObjectStore(b,c);return new Zm(a)}
m.delete=function(a,b){return Xm(this,[a],{mode:"readwrite",fa:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Xm(this,[a],{mode:"readonly",fa:!0},function(c){return c.objectStore(a).get(b)})};
function $m(a,b,c){return Xm(a,[b],{mode:"readwrite",fa:!0},function(d){d=d.objectStore(b);return Tm(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Xm(a,b,c,d){var e,f,g,h,k,l,p,n,w,r,x,z;return A(function(y){switch(y.h){case 1:var I={mode:"readonly",fa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?I.mode=c:Object.assign(I,c);e=I;a.transactionCount++;f=e.fa?3:1;g=0;case 2:if(h){y.A(3);break}g++;k=Math.round(U());xa(y,4);l=a.h.transaction(b,e.mode);I=y.yield;var K=new an(l);K=bn(K,d);return I.call(y,K,6);case 6:return p=y.i,n=Math.round(U()),cn(a,k,n,g,void 0,b.join(),e),y.return(p);case 4:w=za(y);r=Math.round(U());x=Im(w,
a.h.name,b.join(),a.h.version);if((z=x instanceof Em&&!x.h)||g>=f)cn(a,k,r,g,x,b.join(),e),h=x;y.A(2);break;case 3:return y.return(Promise.reject(h))}})}
function cn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Em&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&sm("QUOTA_EXCEEDED",{dbName:um(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Em&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),sm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),dn(a,!1,d,f,b,g.tag),rm(e)):dn(a,!0,d,f,b,g.tag)}
function dn(a,b,c,d,e,f){sm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Zm(a){this.h=a}
m=Zm.prototype;m.add=function(a,b){return Tm(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Tm(this.h.clear()).then(function(){})};
function en(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Tm(this.h.count(a))};
function fn(a,b){return gn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?fn(this,a):Tm(this.h.delete(a))};
m.get=function(a){return Tm(this.h.get(a))};
m.index=function(a){try{return new hn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Gm(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function gn(a,b,c){a=a.h.openCursor(b.query,b.direction);return jn(a).then(function(d){return Um(d,c)})}
function an(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Em;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function bn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
an.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Em("EXPLICIT_ABORT");};
an.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Zm(a),this.i.set(a,b));return b};
function hn(a){this.h=a}
m=hn.prototype;m.count=function(a){return Tm(this.h.count(a))};
m.delete=function(a){return kn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Tm(this.h.get(a))};
m.getKey=function(a){return Tm(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function kn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return jn(a).then(function(d){return Um(d,c)})}
function ln(a,b){this.request=a;this.cursor=b}
function jn(a){return Tm(a).then(function(b){return b?new ln(a,b):null})}
m=ln.prototype;m.advance=function(a){this.cursor.advance(a);return jn(this.request)};
m.continue=function(a){this.cursor.continue(a);return jn(this.request)};
m.delete=function(){return Tm(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Tm(this.cursor.update(a))};function mn(a,b,c){return new Promise(function(d,e){function f(){w||(w=new Wm(g.result,{closed:n}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ud,k=c.blocking,l=c.Xe,p=c.upgrade,n=c.closed,w;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&sm("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:um(a)});var x=f(),z=new an(g.transaction);
p&&p(x,function(y){return r.oldVersion<y&&r.newVersion>=y},z);
z.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){sm("IDB_UNEXPECTEDLY_CLOSED",{dbName:um(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function nn(a,b,c){c=void 0===c?{}:c;return mn(a,b,c)}
function on(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ud)&&c.addEventListener("blocked",function(){e()}),g.yield(Sm(c),4);
if(2!=g.h)return ya(g,0);f=za(g);throw Im(f,a,"",-1);})}
;function pn(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
pn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return nn(a,b,c)};
pn.prototype.delete=function(a){a=void 0===a?{}:a;return on(this.name,a)};
function qn(a,b){return new Em("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function rn(a,b){if(!b)throw Jm("openWithToken",um(a.name));return a.open()}
pn.prototype.open=function(){function a(){var f,g,h,k,l,p,n,w,r,x;return A(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",xa(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:h=z.i;for(var y=c.options,I=[],K=u(Object.keys(y.Bb)),H=K.next();!H.done;H=K.next()){H=H.value;var J=y.Bb[H],V=void 0===J.Fe?Number.MAX_VALUE:J.Fe;!(h.h.version>=J.Ib)||h.h.version>=V||h.h.objectStoreNames.contains(H)||I.push(H)}k=I;if(0===k.length){z.A(5);break}l=Object.keys(c.options.Bb);p=h.objectStoreNames();
if(c.m<Wk("ytidb_reopen_db_retries",0))return c.m++,h.close(),rm(new Em("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:p})),z.return(a());if(!(c.l<Wk("ytidb_remake_db_retries",1))){z.A(6);break}c.l++;return z.yield(c.delete(),7);case 7:return rm(new Em("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:p})),z.return(a());case 6:throw new Fm(p,l);case 5:return z.return(h);case 2:n=za(z);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){z.A(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:w=z.i;r=w.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw w.close(),c.j=!1,qn(c,r);return z.return(w);case 8:throw b(),n instanceof Error&&!T("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Im(n,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw qn(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Xe:b,upgrade:this.options.upgrade};return this.h=d=a()};var sn=new pn("YtIdbMeta",{Bb:{databases:{Ib:1}},upgrade:function(a,b){b(1)&&Ym(a,"databases",{keyPath:"actualName"})}});
function tn(a,b){var c;return A(function(d){if(1==d.h)return d.yield(rn(sn,b),2);c=d.i;return d.return(Xm(c,["databases"],{fa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Tm(f.h.put(a,void 0)).then(function(){})})}))})}
function un(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(rn(sn,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function vn(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(rn(sn,b),2)):3!=e.h?(d=e.i,e.yield(Xm(d,["databases"],{fa:!0,mode:"readonly"},function(f){c.length=0;return gn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function wn(a){return vn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function xn(a,b,c){return vn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function yn(a){var b,c;return A(function(d){if(1==d.h)return b=am("YtIdbMeta hasAnyMeta other"),d.yield(vn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var zn,An=new function(){}(new function(){});
function Bn(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=jm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=wm)f=/WebKit\/([0-9]+)/.exec(Vb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Vb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Vc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(tn(d,An),4);case 4:return e.yield(un("yt-idb-test-do-not-use",An),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Cn(){if(void 0!==zn)return zn;mm=!0;return zn=Bn().then(function(a){mm=!1;var b;if(null!=(b=im())&&b.h){var c;b={hasSucceededOnce:(null==(c=jm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=im())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Dn(){return E("ytglobal.idbToken_")||void 0}
function En(){var a=Dn();return a?Promise.resolve(a):Cn().then(function(b){(b=b?An:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Fn=0;function Gn(a,b){Fn||(Fn=di.ma(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(En(),2);case 2:c=h.i;if(!c)return h.return();d=!0;xa(h,3);return h.yield(xn(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(on(f.actualName),7);case 7:return h.yield(un(f.actualName,c),6);case 6:ya(h,4);break;case 3:g=za(h),rm(g),d=!1;case 4:di.Fa(Fn),Fn=0,d&&Gn(a,b),h.h=0}})}))}
function Hn(){var a;return A(function(b){return 1==b.h?b.yield(En(),2):(a=b.i)?b.return(yn(a)):b.return(!1)})}
new yh;function In(a){if(!$l())throw a=new Em("AUTH_INVALID",{dbName:a}),rm(a),a;var b=am();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Jn(a,b,c,d){var e,f,g,h,k,l;return A(function(p){switch(p.h){case 1:return f=null!=(e=Error().stack)?e:"",p.yield(En(),2);case 2:g=p.i;if(!g)throw h=Jm("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),rm(h),h;tm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:In(a);xa(p,3);return p.yield(tn(k,g),5);case 5:return p.yield(nn(k.actualName,b,d),6);case 6:return p.return(p.i);case 3:return l=za(p),xa(p,7),p.yield(un(k.actualName,
g),9);case 9:ya(p,8);break;case 7:za(p);case 8:throw l;}})}
function Kn(a,b,c){c=void 0===c?{}:c;return Jn(a,b,!1,c)}
function Ln(a,b,c){c=void 0===c?{}:c;return Jn(a,b,!0,c)}
function Mn(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(En(),2);if(3!=e.h){c=e.i;if(!c)return e.return();tm(a);d=In(a);return e.yield(on(d.actualName,b),3)}return e.yield(un(d.actualName,c),0)})}
function Nn(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(on(d.actualName,b),2):e.yield(un(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function On(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(En(),2);if(3!=d.h){b=d.i;if(!b)return d.return();tm("LogsDatabaseV2");return d.yield(wn(b),3)}c=d.i;return d.yield(Nn(c,a,b),0)})}
function Pn(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(En(),2);if(3!=d.h){c=d.i;if(!c)return d.return();tm(a);return d.yield(on(a,b),3)}return d.yield(un(a,c),0)})}
;function Qn(a,b){pn.call(this,a,b);this.options=b;tm(a)}
v(Qn,pn);function Rn(a,b){var c;return function(){c||(c=new Qn(a,b));return c}}
Qn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.pc?Ln:Kn)(a,b,Object.assign({},c))};
Qn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.pc?Pn:Mn)(this.name,a)};
function Sn(a,b){return Rn(a,b)}
;var Tn={},Un=Sn("ytGcfConfig",{Bb:(Tn.coldConfigStore={Ib:1},Tn.hotConfigStore={Ib:1},Tn),pc:!1,upgrade:function(a,b){b(1)&&(en(Ym(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),en(Ym(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Vn(a){return rn(Un(),a)}
function Wn(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(Vn(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield($m(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Xn(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(Vn(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield($m(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Yn(a){var b,c;return A(function(d){return 1==d.h?d.yield(Vn(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Xm(b,["coldConfigStore"],{mode:"readwrite",fa:!0},function(e){return kn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Zn(a){var b,c;return A(function(d){return 1==d.h?d.yield(Vn(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Xm(b,["hotConfigStore"],{mode:"readwrite",fa:!0},function(e){return kn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function $n(){N.apply(this,arguments);this.i=[]}
v($n,N);$n.prototype.K=function(){this.i.length=0;N.prototype.K.call(this)};function ao(){this.h=0;this.i=new $n}
function bo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("update_log_event_config")){g.A(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j));a.hotHashData=b;D("yt.gcf.config.hotHashData",a.hotHashData);d=Dn();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(Zn(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Wn(c,b,d),3);case 3:if(c)for(var h=c,k=u(a.i.i),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function co(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!T("update_log_event_config"))return h.A(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData);return(d=Dn())?c?h.A(4):h.yield(Yn(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(Xn(c,b,g,d),0)})}
;function eo(){return"INNERTUBE_API_KEY"in Ck&&"INNERTUBE_API_VERSION"in Ck}
function fo(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),ne:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Af:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),pe:S("INNERTUBE_CONTEXT_HL"),oe:S("INNERTUBE_CONTEXT_GL"),qe:S("INNERTUBE_HOST_OVERRIDE")||"",se:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),re:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function go(a){var b={client:{hl:a.pe,gl:a.oe,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.ne}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Yk();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Hl()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Xl())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=Yl())&&
b&&(b.client.effectiveConnectionType=a);T("start_sending_config_hash")&&(ao.h||(a=new ao,ao.h=a),a=ao.h,f=U()-a.h,0!==a.h&&f<Wk("send_config_hash_timer")?a=void 0:(f=E("yt.gcf.config.coldConfigData"),e=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData"),f&&e&&d&&(a.h=U()),a={coldConfigData:f,hotHashData:e,coldHashData:d}),e=a)&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=
f,b.client.configInfo.hotHashData=e));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=u(Object.entries(Pk(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=
h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function ho(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().uf:(a=El(Dl()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function io(a,b){this.version=a;this.args=b}
io.prototype.serialize=function(){return{version:this.version,args:this.args}};function jo(a,b){this.topic=a;this.h=b}
jo.prototype.toString=function(){return this.topic};var ko=E("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.Gb;O.prototype.publish=O.prototype.eb;O.prototype.clear=O.prototype.clear;D("ytPubsub2Pubsub2Instance",ko);var lo=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",lo);var mo=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",mo);var no=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",no);
D("ytPubsub2Pubsub2SkipSubKey",null);function oo(a,b){var c=po();c&&c.publish.call(c,a.toString(),a,b)}
function qo(a){var b=ro,c=po();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(lo[d])try{if(f&&b instanceof jo&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ya){var l=new h;h.Ya=l.version}var p=h.Ya}catch(y){}if(!p||k.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{p=Reflect;var n=p.construct;
var w=k.args,r=w.length;if(0<r){var x=Array(r);for(k=0;k<r;k++)x[k]=w[k];var z=x}else z=[];f=n.call(p,h,z)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){Hk(y)}},no[b.toString()]?E("yt.scheduler.instance")?di.ma(g):bl(g,0):g())});
lo[d]=!0;mo[b.toString()]||(mo[b.toString()]=[]);mo[b.toString()].push(d);return d}
function so(){var a=to,b=qo(function(c){a.apply(void 0,arguments);uo(b)});
return b}
function uo(a){var b=po();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete lo[c]}))}
function po(){return E("ytPubsub2Pubsub2Instance")}
;function vo(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&oo("meta_logging_csi_event",{timerName:a,Qf:b})}
;var wo=Wk("max_body_size_to_compress",5E5),xo=Wk("min_body_size_to_compress",500),yo=!0,zo=0,Ao=0,Bo=Wk("compression_performance_threshold",250),Co=Wk("slow_compressions_before_abandon_count",10);
function Do(a,b,c,d){var e=U(),f={startTime:e,ticks:{},infos:{}};if(yo)try{var g=Eo(b);if(null==g||!(g>wo||g<xo)){var h=ck(Zh(b)),k=U();f.ticks.gelc=k;Ao++;T("disable_compression_due_to_performance_degredation")&&k-e>=Bo&&(zo++,T("abandon_compression_after_N_slow_zips")?Ao===Wk("compression_disable_point")&&zo>Co&&(yo=!1):yo=!1);Fo(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(l){Ik(l),d(a,c)}else d(a,c)}
function Go(a){var b=void 0===b?!1:b;var c=U(),d={startTime:c,ticks:{},infos:{}};if(yo){if(!a.body)return a;try{var e="string"===typeof a.body?a.body:JSON.stringify(a.body),f=Eo(e);if(null!=f&&(f>wo||f<xo))return a;var g=ck(Zh(e),b?{level:1}:void 0),h=U();d.ticks.gelc=h;if(b){Ao++;if(T("disable_compression_due_to_performance_degredation")&&h-c>=Bo)if(zo++,T("abandon_compression_after_N_slow_zips")){b=zo/Ao;var k=Co/Wk("compression_disable_point");0<Ao&&0===Ao%Wk("compression_disable_point")&&b>=k&&
(yo=!1)}else yo=!1;Fo(d)}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=g;return a}catch(l){return Ik(l),a}}else return a}
function Eo(a){try{return(new Blob(a.split(""))).size}catch(b){return Ik(b),null}}
function Fo(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||vo("gel_compression",a,{sampleRate:.1})}
;function Ho(a){a=Object.assign({},a);delete a.Authorization;var b=vg();if(b){var c=new ji;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=nd(c.digest(),3)}return a}
;var Io;function Jo(){Io||(Io=new hm("yt.innertube"));return Io}
function Ko(a,b,c,d){if(d)return null;d=Jo().get("nextId",!0)||1;var e=Jo().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ho(c),requestTime:Math.round(U())};Jo().set("nextId",d+1,86400,!0);Jo().set("requests",e,86400,!0);return d}
function Lo(a){var b=Jo().get("requests",!0)||{};delete b[a];Jo().set("requests",b,86400,!0)}
function Mo(a){var b=Jo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=Ho(ho(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),No(a,d.method,e,{}));delete b[c]}}Jo().set("requests",b,86400,!0)}}
;function Oo(a){this.Yb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.vb=function(){};
this.now=Date.now;this.Kb=!1;var b;this.Fd=null!=(b=a.Fd)?b:100;var c;this.zd=null!=(c=a.zd)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.yd=null!=(f=a.yd)?f:5E3;var g;this.P=null!=(g=a.P)?g:void 0;this.ec=!!a.ec;var h;this.cc=null!=(h=a.cc)?h:.1;var k;this.lc=null!=(k=a.lc)?k:10;a.handleError&&(this.handleError=a.handleError);a.vb&&(this.vb=a.vb);a.Kb&&(this.Kb=a.Kb);a.Yb&&(this.Yb=a.Yb);this.R=a.R;this.Aa=a.Aa;this.Y=a.Y;this.X=a.X;this.Ra=a.Ra;this.Lc=
a.Lc;this.Kc=a.Kc;Po(this)&&(!this.R||this.R("networkless_logging"))&&Qo(this)}
function Qo(a){Po(a)&&!a.Kb&&(a.h=!0,a.ec&&Math.random()<=a.cc&&a.Y.Wd(a.P),Ro(a),a.X.sa()&&a.Qb(),a.X.listen(a.Lc,a.Qb.bind(a)),a.X.listen(a.Kc,a.Zc.bind(a)))}
m=Oo.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Po(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y.set(d,this.P).then(function(e){d.id=e;c.X.sa()&&So(c,d)}).catch(function(e){So(c,d);
To(c,e)})}else this.Ra(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Po(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.R&&this.R("nwl_skip_retry")&&(e.skipRetry=c);if(this.X.sa()||this.R&&this.R("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.Y.set(e,d.P).catch(function(l){To(d,l)}),2);
f(g,h);k.h=0})}}this.Ra(a,b,e.skipRetry)}else this.Y.set(e,this.P).catch(function(g){d.Ra(a,b,e.skipRetry);
To(d,g)})}else this.Ra(a,b,this.R&&this.R("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Po(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.Y.ub(d.id,c.P):e=!0;c.X.hb&&c.R&&c.R("vss_network_hint")&&c.X.hb(!0);f(g,h)};
this.Ra(d.url,d.options);this.Y.set(d,this.P).then(function(g){d.id=g;e&&c.Y.ub(d.id,c.P)}).catch(function(g){To(c,g)})}else this.Ra(a,b)};
m.Qb=function(){var a=this;if(!Po(this))throw Jm("throttleSend");this.i||(this.i=this.Aa.ma(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.Y.jd("NEW",a.P),2);if(3!=c.h)return b=c.i,b?c.yield(So(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Qb());c.h=0})},this.Fd))};
m.Zc=function(){this.Aa.Fa(this.i);this.i=0};
function So(a,b){var c,d;return A(function(e){switch(e.h){case 1:if(!Po(a))throw c=Jm("immediateSend"),c;if(void 0===b.id){e.A(2);break}return e.yield(a.Y.ue(b.id,a.P),3);case 3:(d=e.i)||a.vb(Error("The request cannot be found in the database."));case 2:if(Uo(a,b,a.xd)){e.A(4);break}a.vb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return e.yield(a.Y.ub(b.id,a.P),5);case 5:return e.return();case 4:b.skipRetry||(b=Vo(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return e.yield(a.Y.ub(b.id,a.P),8);case 8:a.Ra(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Vo(a,b){if(!Po(a))throw Jm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(p){switch(p.h){case 1:g=Wo(f);(h=Xo(f))&&a.R&&a.R("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.R&&a.R("nwl_consider_error_code")&&g||a.R&&!a.R("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.lc)){p.A(2);break}if(!a.X.oc){p.A(3);break}return p.yield(a.X.oc(),3);case 3:if(a.X.sa()){p.A(2);break}c(e,f);if(!a.R||!a.R("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){p.A(6);
break}return p.yield(a.Y.Oc(b.id,a.P,!1),6);case 6:return p.return();case 2:if(a.R&&a.R("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.lc)return p.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){p.A(8);break}return b.sendCount<a.zd?p.yield(a.Y.Oc(b.id,a.P,!0,h?!1:void 0),12):p.yield(a.Y.ub(b.id,a.P),8);case 12:a.Aa.ma(function(){a.X.sa()&&a.Qb()},a.yd);
case 8:c(e,f),p.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):h.yield(a.Y.ub(b.id,a.P),2);a.X.hb&&a.R&&a.R("vss_network_hint")&&a.X.hb(!0);d(e,f);h.h=0})};
return b}
function Uo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Ro(a){if(!Po(a))throw Jm("retryQueuedRequests");a.Y.jd("QUEUED",a.P).then(function(b){b&&!Uo(a,b,a.vd)?a.Aa.ma(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.A(2):c.yield(a.Y.Oc(b.id,a.P),2);Ro(a);c.h=0})}):a.X.sa()&&a.Qb()})}
function To(a,b){a.Ld&&!a.X.sa()?a.Ld(b):a.handleError(b)}
function Po(a){return!!a.P||a.Yb}
function Wo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Xo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Yo;
function Zo(){if(Yo)return Yo();var a={};Yo=Sn("LogsDatabaseV2",{Bb:(a.LogsRequestsStore={Ib:2},a),pc:!1,upgrade:function(b,c,d){c(2)&&Ym(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),en(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Yo()}
;function $o(a){return rn(Zo(),a)}
function ap(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield($o(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield($m(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();bp(c);return g.return(f)})}
function cp(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield($o(b),2);if(3!=l.h)return d=l.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Xm(d,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(p){return kn(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.getValue()&&(k=n.getValue(),"NEW"===
a&&(k.status="QUEUED",n.update(k)))})}),3);
c.ticks.tc=U();bp(c);return l.return(k)})}
function dp(a,b){var c;return A(function(d){if(1==d.h)return d.yield($o(b),2);c=d.i;return d.return(Xm(c,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Tm(f.h.put(g,void 0)).then(function(){return g})})}))})}
function ep(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield($o(b),2);e=f.i;return f.return(Xm(e,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Tm(h.h.put(k,void 0)).then(function(){return k})):Nm.resolve(void 0)})}))})}
function fp(a,b){var c;return A(function(d){if(1==d.h)return d.yield($o(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function gp(a){var b,c;return A(function(d){if(1==d.h)return d.yield($o(a),2);b=d.i;c=U()-2592E6;return d.yield(Xm(b,["LogsRequestsStore"],{mode:"readwrite",fa:!0},function(e){return gn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function hp(){A(function(a){return a.yield(On(),0)})}
function bp(a){T("nwl_csi_killswitch")||vo("networkless_performance",a,{sampleRate:1})}
;var ip={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,
tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,
postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,
proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,
accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,
sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475};var jp={},kp=Sn("ServiceWorkerLogsDatabase",{Bb:(jp.SWHealthLog={Ib:1},jp),pc:!0,upgrade:function(a,b){b(1)&&en(Ym(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function lp(a){return rn(kp(),a)}
function mp(a){var b,c;A(function(d){if(1==d.h)return d.yield(lp(a),2);b=d.i;c=U()-2592E6;return d.yield(Xm(b,["SWHealthLog"],{mode:"readwrite",fa:!0},function(e){return gn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function np(a){var b;return A(function(c){if(1==c.h)return c.yield(lp(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var op={},pp=0;function qp(a){var b=new Image,c=""+pp++;op[c]=b;b.onload=b.onerror=function(){delete op[c]};
b.src=a}
;function rp(){this.h=new Map;this.i=!1}
function sp(){if(!rp.h){var a=E("yt.networkRequestMonitor.instance")||new rp;D("yt.networkRequestMonitor.instance",a);rp.h=a}return rp.h}
rp.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
rp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
rp.prototype.removeParams=function(a){return a.split("?")[0]};
rp.prototype.removeParams=rp.prototype.removeParams;rp.prototype.isEndpointCFR=rp.prototype.isEndpointCFR;rp.prototype.requestComplete=rp.prototype.requestComplete;rp.getInstance=sp;var tp;function up(){tp||(tp=new hm("yt.offline"));return tp}
function vp(a){if(T("offline_error_handling")){var b=up().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);up().set("errors",b,2592E3,!0)}}
;function wp(){Xe.call(this);var a=this;this.j=!1;this.i=ci();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=up().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Zl(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Hk(d)}up().set("errors",{},2592E3,!0)}}})}
v(wp,Xe);function xp(){if(!wp.h){var a=E("yt.networkStatusManager.instance")||new wp;D("yt.networkStatusManager.instance",a);wp.h=a}return wp.h}
m=wp.prototype;m.sa=function(){return this.i.sa()};
m.hb=function(a){this.i.i=a};
m.ke=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.ae=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.oc=function(a){a=ai(this.i,a);a.then(function(b){T("use_cfr_monitor")&&sp().requestComplete("generate_204",b)});
return a};
wp.prototype.sendNetworkCheckRequest=wp.prototype.oc;wp.prototype.listen=wp.prototype.listen;wp.prototype.enableErrorFlushing=wp.prototype.ae;wp.prototype.getWindowStatus=wp.prototype.ke;wp.prototype.networkStatusHint=wp.prototype.hb;wp.prototype.isNetworkAvailable=wp.prototype.sa;wp.getInstance=xp;function yp(a){a=void 0===a?{}:a;Xe.call(this);var b=this;this.i=this.s=0;this.j=xp();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.nc?(this.nc=a.nc,c("networkstatus-online",function(){zp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){zp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ye(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ye(b,"publicytnetworkstatus-offline")})))}
v(yp,Xe);yp.prototype.sa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
yp.prototype.hb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
yp.prototype.oc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&sp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.hb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.sa())})):c?d.return(c(a)):d.return(!0)})};
function zp(a,b){a.nc?a.i?(di.Fa(a.s),a.s=di.ma(function(){a.m!==b&&(Ye(a,b),a.m=b,a.i=U())},a.nc-(U()-a.i))):(Ye(a,b),a.m=b,a.i=U()):Ye(a,b)}
;var Ap;function Bp(){var a=Oo.call;Ap||(Ap=new yp({Ff:!0,yf:!0}));a.call(Oo,this,{Y:{Wd:gp,ub:fp,jd:cp,ue:dp,Oc:ep,set:ap},X:Ap,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Ik(new Zl(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Hk(b)},
vb:Ik,Ra:Cp,now:U,Ld:vp,Aa:gm(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",ec:!0,cc:.1,lc:Wk("potential_esf_error_limit",10),R:T,Kb:!($l()&&Dp())});this.j=new yh;T("networkless_immediately_drop_all_requests")&&hp();Pn("LogsDatabaseV2")}
v(Bp,Oo);function Ep(){var a=E("yt.networklessRequestController.instance");a||(a=new Bp,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&En().then(function(b){a.P=b;Qo(a);a.j.resolve();a.ec&&Math.random()<=a.cc&&a.P&&mp(a.P);T("networkless_immediately_drop_sw_health_store")&&Fp(a)}));
return a}
Bp.prototype.writeThenSend=function(a,b){b||(b={});$l()||(this.h=!1);Oo.prototype.writeThenSend.call(this,a,b)};
Bp.prototype.sendThenWrite=function(a,b,c){b||(b={});$l()||(this.h=!1);Oo.prototype.sendThenWrite.call(this,a,b,c)};
Bp.prototype.sendAndWrite=function(a,b){b||(b={});$l()||(this.h=!1);Oo.prototype.sendAndWrite.call(this,a,b)};
Bp.prototype.awaitInitialization=function(){return this.j.promise};
function Fp(a){var b;A(function(c){if(!a.P)throw b=Jm("clearSWHealthLogsDb"),b;return c.return(np(a.P).catch(function(d){a.handleError(d)}))})}
function Cp(a,b,c){b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Gp(a,b);if(T("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)kl(a,void 0,"POST",e);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))kl(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=
new bb({url:a});if(g.j&&g.i||g.l){var h=tc(uc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(Gc),p=Fc(a,0,"ri",l);if(0>p)var n=null;else{var w=a.indexOf("&",p);if(0>w||w>l)w=l;n=decodeURIComponent(a.slice(p+3,-1!==w?w:0).replace(/\+/g," "))}k="1"!==n}var r=!k;break b}}catch(z){}r=!1}if(r){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var x=!0;break b}}catch(z){}x=!1}c=x?!0:!1}else c=!1;c||qp(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&
(b.postBody=JSON.stringify(b.postBody)),Do(a,b.postBody,b,hl)):Do(a,JSON.stringify(b.postParams),b,pl):hl(a,b)}
function Gp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){sp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){sp().requestComplete(a,!0);d(e,f)}}
function Dp(){return"www.youtube-nocookie.com"!==vc(document.location.toString())}
;var Hp=!1,Ip=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Hp};D("ytNetworklessLoggingInitializationOptions",Ip);function Jp(){var a;A(function(b){if(1==b.h)return b.yield(En(),2);a=b.i;if(!a||!$l()&&!T("nwl_init_require_datasync_id_killswitch")||!Dp())return b.A(0);Hp=!0;Ip.isNwlInitialized=Hp;return b.yield(Ep().awaitInitialization(),0)})}
;function Kp(a){var b=this;this.config_=null;a?this.config_=a:eo()&&(this.config_=fo());cm(function(){Mo(b)},5E3)}
Kp.prototype.isReady=function(){!this.config_&&eo()&&(this.config_=fo());return!!this.config_};
function No(a,b,c,d){function e(x){x=void 0===x?!1:x;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||T("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Ko(b,c,l,k)),z)){var y=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(H,J){Lo(z);y(H,J)};
c.onFetchSuccess=function(H,J){Lo(z);I(H,J)}}try{if(x&&d.retry&&!d.qd.bypassNetworkless)g.method="POST",d.qd.writeThenSend?Ep().writeThenSend(r,g):Ep().sendAndWrite(r,g);
else if(d.compress)if(g.postBody){var K=g.postBody;"string"!==typeof K&&(K=JSON.stringify(g.postBody));Do(r,K,g,hl)}else Do(r,JSON.stringify(g.postParams),g,pl);else T("web_all_payloads_via_jspb")?hl(r,g):pl(r,g)}catch(H){if("InvalidAccessError"==H.name)z&&(Lo(z),z=0),Ik(Error("An extension is blocking network request."));else throw H;}z&&cm(function(){Mo(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ik(new Zl("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Zl("innertube xhrclient not ready",b,c,d);Hk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,z){if(d.onError)d.onError(z)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.qe)&&(h=f);var k=a.config_.se||!1,l=ho(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var p="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,n={alt:"json"},w=a.config_.re&&f;w=w&&f.startsWith("Bearer");w||(n.key=a.config_.innertubeApiKey);var r=Rk(""+h+p,n||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Ip.isNwlInitialized:Hp)?Cn().then(function(x){e(x)}):e(!1)}
;var Lp=0,Mp=Xc?"webkit":Wc?"moz":Uc?"ms":Tc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Lp});var Np={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Op(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Np||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Pp(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Op.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Op.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Op.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",ob);var Qp=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Qp);
function Rp(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Sp=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Tp(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Rp(a,b,c,d);if(e)return e;e=++Qp.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Op(h);if(!gf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Op(h);
h.currentTarget=a;return c.call(a,h)};
g=Gk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Sp()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
function Up(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Sp()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
;function Vp(a){this.M=a;this.i=null;this.m=0;this.v=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.W=Tp(window,"mousemove",Xa(this.Z,this));a=Xa(this.U,this);"function"===typeof a&&(a=Gk(a));this.aa=window.setInterval(a,25)}
Za(Vp,N);Vp.prototype.Z=function(a){void 0===a.h&&Pp(a);var b=a.h;void 0===a.i&&Pp(a);this.i=new cf(b,a.i)};
Vp.prototype.U=function(){if(this.i){var a=U();if(0!=this.m){var b=this.v,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.M();this.s=d}this.m=a;this.v=this.i;this.l=(this.l+1)%4}};
Vp.prototype.K=function(){window.clearInterval(this.aa);Up(this.W)};var Wp=new Set([174,173,175]),Xp={};
function Yp(a){var b=void 0===a?{}:a;a=void 0===b.Ce?!1:b.Ce;b=void 0===b.be?!0:b.be;if(null==E("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&Zp();Tp(document,"keydown",Zp);Tp(document,"keyup",Zp);Tp(document,"mousedown",Zp);Tp(document,"mouseup",Zp);a?Tp(window,"touchmove",function(){$p("touchmove",200)},{passive:!0}):(Tp(window,"resize",function(){$p("resize",200)}),b&&Tp(window,"scroll",function(){$p("scroll",
200)}));
new Vp(function(){$p("mouse",100)});
Tp(document,"touchstart",Zp,{passive:!0});Tp(document,"touchend",Zp,{passive:!0})}}
function $p(a,b){Xp[a]||(Xp[a]=!0,di.ma(function(){Zp();Xp[a]=!1},b))}
function Zp(a){var b;if(null!=(b=E("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Wp.has(null==a?void 0:a.keyCode))null==E("_lact",window)&&Yp(),a=Date.now(),D("_lact",a,window),-1==E("_fact",window)&&D("_fact",a,window),(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function aq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var bq=C.ytPubsubPubsubInstance||new O,cq=C.ytPubsubPubsubSubscribedKeys||{},dq=C.ytPubsubPubsubTopicToKeys||{},hq=C.ytPubsubPubsubIsSynchronous||{};function iq(a,b){var c=jq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){cq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{hq[a]?f():bl(f,0)}catch(g){Hk(g)}},void 0);
cq[d]=!0;dq[a]||(dq[a]=[]);dq[a].push(d);return d}return 0}
function kq(a){var b=jq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete cq[c]}))}
function lq(a,b){var c=jq();c&&c.publish.apply(c,arguments)}
function mq(a){var b=jq();if(b)if(b.clear(a),a)nq(a);else for(var c in dq)nq(c)}
function jq(){return C.ytPubsubPubsubInstance}
function nq(a){dq[a]&&(a=dq[a],fb(a,function(b){cq[b]&&delete cq[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.Gb;O.prototype.publish=O.prototype.eb;O.prototype.clear=O.prototype.clear;D("ytPubsubPubsubInstance",bq);D("ytPubsubPubsubTopicToKeys",dq);D("ytPubsubPubsubIsSynchronous",hq);D("ytPubsubPubsubSubscribedKeys",cq);var oq=Symbol("injectionDeps");function pq(a){this.name=a}
pq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function qq(a){this.key=a}
function rq(){this.h=new Map;this.i=new Map}
rq.prototype.resolve=function(a){return a instanceof qq?sq(this,a.key,[],!0):sq(this,a,[])};
function sq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Id)var e=d.Id;else if(d.bf)e=d[oq]?tq(a,d[oq],c):[],e=d.bf.apply(d,ia(e));else if(d.Hd){e=d.Hd;var f=e[oq]?tq(a,e[oq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Of||a.i.set(b,e);return e}
function tq(a,b,c){return b?b.map(function(d){return d instanceof qq?sq(a,d.key,c,!0):sq(a,d,c)}):[]}
;var uq;function vq(){uq||(uq=new rq);return uq}
;function wq(){this.store={};this.h={}}
wq.prototype.storePayload=function(a,b){a=xq(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
wq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=yq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ia(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ia(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ia(this.smartExtractMatchingEntries(a))));return c};
wq.prototype.extractMatchingEntries=function(a){a=yq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
wq.prototype.getSequenceCount=function(a){a=yq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function yq(a,b){var c=xq(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&xq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(zq(b.auth,g[0])){var h=b.isJspb;zq(void 0===h?"undefined":h?"true":"false",g[1])&&zq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),zq(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function zq(a,b){return void 0===a||"undefined"===a?!0:a===b}
wq.prototype.getSequenceCount=wq.prototype.getSequenceCount;wq.prototype.extractMatchingEntries=wq.prototype.extractMatchingEntries;wq.prototype.smartExtractMatchingEntries=wq.prototype.smartExtractMatchingEntries;wq.prototype.storePayload=wq.prototype.storePayload;function xq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function W(a,b){if(a)return a[b.name]}
;var Aq=Wk("initial_gel_batch_timeout",2E3),Bq=Wk("gel_queue_timeout_max_ms",6E4),Cq=Math.pow(2,16)-1,Dq=void 0;function Eq(){this.j=this.h=this.i=0}
var Fq=new Eq,Gq=new Eq,Hq=new Eq,Iq=new Eq,Jq,Kq=!0,Lq=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Lq);var Mq={};function Nq(){var a=E("yt.logging.ims");a||(a=new wq,D("yt.logging.ims",a));return a}
function Oq(a,b){if("log_event"===a.endpoint){var c=Pq(a);a:{var d=Object.keys(a.payload);d=u(d);for(var e=d.next();!e.done;e=d.next())if(e=e.value,ip[e]){d=e;break a}d=void 0}var f;a:if(T("enable_web_tiered_gel")){d=ip[d||""];var g;if(null==vq().resolve(new qq(ao)))var h=void 0;else e=null!=(h=E("yt.gcf.config.hotConfigGroup"))?h:null,h=null==e?void 0:null==(f=e.loggingHotConfig)?void 0:null==(g=f.eventLoggingConfig)?void 0:g.payloadPolicies;if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===
d){f=f[g].tier;break a}f=200}else f=void 0;400===f?Qq(a,b):(Mq[c]=!0,f={cttAuthInfo:c,isJspb:!1,tier:f},Nq().storePayload(f,a.payload),Rq(b,c,f))}}
function Rq(a,b,c){function d(){Sq({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,e,c.tier)}
var e=!1;e=void 0===e?!1:e;a&&(Dq=new a);a=Tq();var f=U(),g=Uq(e,c.tier),h=g.j,k=0;c&&(k=Nq().getSequenceCount(c));1E3<=k&&T("web_logging_max_batch_hard_limit")?d():k>=a?Jq||(Jq=Vq(function(){d();Jq=void 0},0)):10<=f-h&&(Wq(e,c.tier),g.j=f)}
function Qq(a,b){if("log_event"===a.endpoint){var c=Pq(a),d=new Map;d.set(c,[a.payload]);b&&(Dq=new b);return new tf(function(e,f){Dq&&Dq.isReady()?Xq(d,Dq,e,f,{bypassNetworkless:!0},!0):e()})}}
function Pq(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Lq[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Sq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new tf(function(e,f){var g=Uq(c,d);Yq(g.i);Yq(g.h);g.h=0;Dq&&Dq.isReady()?void 0===d&&T("enable_web_tiered_gel")?(Zq(e,f,a,b,c,300),Zq(e,f,a,b,c,200)):Zq(e,f,a,b,c,d):(Wq(c,d),e())})}
function Zq(a,b,c,d,e,f){var g=Dq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;var h=new Map;var k={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=T("enable_web_tiered_gel")?Nq().smartExtractMatchingEntries({keys:[k,e],sizeLimit:Tq()}):Nq().extractMatchingEntries(e),h.set(d,f);else for(d=u(Object.keys(Mq)),k=d.next();!k.done;k=d.next())k=k.value,e=T("enable_web_tiered_gel")?Nq().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:k,tier:f},{isJspb:!1,cttAuthInfo:k}],
sizeLimit:Tq()}):Nq().extractMatchingEntries({isJspb:!1,cttAuthInfo:k}),0<e.length&&h.set(k,e),delete Mq[k];Xq(h,g,a,b,c)}
function Wq(a,b){a=void 0===a?!1:a;b=void 0===b?200:b;var c=Uq(a,b),d=c===Iq||c===Hq?5E3:Bq;T("web_gel_timeout_cap")&&!c.h&&(d=Vq(function(){Sq({writeThenSend:!0},void 0,a,b)},d),c.h=d);
Yq(c.i);d=S("LOGGING_BATCH_TIMEOUT",Wk("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Kq&&(d=Aq);d=Vq(function(){Sq({writeThenSend:!0},void 0,a,b)},d);
c.i=d}
function Xq(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(U()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={Rb:k.Rb,ab:k.ab,Eb:k.Eb,Tb:k.Tb,Sb:k.Sb},l=a.next()){var p=u(l.value);l=p.next().value;p=p.next().value;k.ab=ub({context:go(b.config_||fo())});if(!Qa(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}k.ab.events=p;(p=Lq[l])&&$q(k.ab,l,p);delete Lq[l];k.Eb="visitorOnlyApprovedKey"===l;ar(k.ab,g,k.Eb);T("always_send_and_write")&&(e.writeThenSend=!1);k.Tb=function(n){T("update_log_event_config")&&
di.ma(function(){return A(function(w){return w.yield(br(n),0)})});
h--;h||c()};
k.Rb=0;k.Sb=function(n){return function(){n.Rb++;if(e.bypassNetworkless&&1===n.Rb)try{No(b,"log_event",n.ab,cr({writeThenSend:!0},n.Eb,n.Tb,n.Sb,f)),Kq=!1}catch(w){Hk(w),d()}h--;h||c()}}(k);
try{No(b,"log_event",k.ab,cr(e,k.Eb,k.Tb,k.Sb,f)),Kq=!1}catch(n){Hk(n),d()}}}
function cr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,qd:a,dangerousLogToVisitorSession:b,vf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};dr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function ar(a,b,c){dr()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Cq/2)),c++,c>Cq&&(c=1),Dk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function $q(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function dr(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Vq(a,b){return T("transport_use_scheduler")?cm(a,b):bl(a,b)}
function Yq(a){T("transport_use_scheduler")?di.Fa(a):window.clearTimeout(a)}
function br(a){var b,c,d,e,f,g,h,k,l,p;return A(function(n){return 1==n.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=W(d,gk),g=null==(f=d)?void 0:f.hotHashData,h=W(d,fk),l=null==(k=d)?void 0:k.coldHashData,(p=vq().resolve(new qq(ao)))?g?e?n.yield(bo(p,g,e),2):n.yield(bo(p,g),2):n.A(2):n.return()):l?h?n.yield(co(p,l,h),0):n.yield(co(p,l),0):n.A(0)})}
function Uq(a,b){b=void 0===b?200:b;return a?300===b?Iq:Gq:300===b?Hq:Fq}
function Tq(){return Wk("tvhtml5_logging_max_batch_ads_fork")||Wk("web_logging_max_batch")||100}
;var er=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",er);
function fr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;T("enable_unknown_lact_fix_on_html5")&&Yp();a=aq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};T("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,er[b]=b in er?er[b]+1:0,a.sequence={index:er[b],groupKey:b},d.endOfSequence&&delete er[d.sequenceGroup]);(d.sendIsolatedPayload?Qq:Oq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function qm(a,b,c){c=void 0===c?{}:c;var d=Kp;S("ytLoggingEventsDefaultDisabled",!1)&&Kp===Kp&&(d=null);T("web_all_payloads_via_jspb")&&!c.timestamp&&(c.timestamp=U());fr(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var gr=new Set,hr=0,ir=0,jr=0,kr=[],lr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function pm(a){mr(a)}
function nr(a){mr(a,"WARNING")}
function mr(a,b,c,d,e,f,g){f=void 0===f?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=hr))){d=kr;var h=ve(a);e=h.message||"Unknown Error";f=h.name||"UnknownError";var k=h.stack||a.i||"Not available";if(k.startsWith(f+": "+e)){var l=k.split("\n");l.shift();k=l.join("\n")}l=h.lineNumber||"Not available";h=h.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var n=0;n<a.args.length&&!(p=zl(a.args[n],"params."+n,c,p),
500<=p);n++);else if(a.hasOwnProperty("params")&&a.params){var w=a.params;if("object"===typeof a.params)for(n in w){if(w[n]){var r="params."+n,x=Bl(w[n]);c[r]=x;p+=r.length+x.length;if(500<p)break}}else c.params=Bl(w)}if(d.length)for(n=0;n<d.length&&!(p=zl(d[n],"params.context."+n,c,p),500<=p);n++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);n={message:e,name:f,lineNumber:l,fileName:h,stack:k,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(n.lineNumber=
n.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=vl();c=u(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,n.message&&n.message.match(d.Gf)){a=d.weight;break a}a=u(a.Sa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(n)){a=c.weight;break a}a=1}n.sampleWeight=a;a=u(ql);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.kc[n.name])for(e=u(c.kc[n.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=n.message.match(f.regexp)){n.params["params.error.original"]=d[0];e=f.groups;f={};
for(l=0;l<e.length;l++)f[e[l]]=d[l+1],n.params["params.error."+e[l]]=d[l+1];n.message=c.Ic(f);break}n.params||(n.params={});a=vl();n.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Sa.length;n.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(n.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Bb("sample").constructor!==zb&&(n.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(n);
if(0!==n.sampleWeight&&!gr.has(n.message)){if(g&&T("web_enable_error_204"))or(void 0===b?"ERROR":b,n);else{b=void 0===b?"ERROR":b;"ERROR"===b?(wl.eb("handleError",n),T("record_app_crashed_web")&&0===jr&&1===n.sampleWeight&&(jr++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:n.message}}}}),qm("appCrashed",g)),ir++):"WARNING"===b&&wl.eb("handleWarning",n);if(T("kevlar_gel_error_routing")){g=b;b:{a=
u(lr);for(c=a.next();!c.done;c=a.next())if(xm(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)a=void 0;else{c={stackTrace:n.stack};n.fileName&&(c.filename=n.fileName);a=n.lineNumber&&n.lineNumber.split?n.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:n.message,errorClassName:n.name,sampleWeight:n.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};d={pageUrl:window.location.href,kvPairs:[]};S("FEXP_EXPERIMENTS")&&(d.experimentIds=S("FEXP_EXPERIMENTS"));e=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");f=Ck.EXPERIMENT_FLAGS;if((!f||!f.web_disable_gel_stp_ecatcher_killswitch)&&e)for(l=u(Object.keys(e)),f=l.next();!f.done;f=l.next())f=f.value,d.kvPairs.push({key:f,value:String(e[f])});if(e=n.params)for(l=u(Object.keys(e)),
f=l.next();!f.done;f=l.next())f=f.value,d.kvPairs.push({key:"client."+f,value:String(e[f])});e=S("SERVER_NAME");f=S("SERVER_VERSION");e&&f&&(d.kvPairs.push({key:"server.name",value:e}),d.kvPairs.push({key:"server.version",value:f}));a={errorMetadata:d,stackTrace:c,logMessage:a}}a&&(qm("clientError",a),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&Sq(void 0,void 0,!1))}T("suppress_error_204_logging")||or(b,n)}try{gr.add(n.message)}catch(z){}hr++}}}
function or(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=u(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}hl(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function pr(){this.register=new Map}
function qr(a){a=u(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Jf("ABORTED")}
pr.prototype.clear=function(){qr(this);this.register.clear()};
var rr=new pr;var sr=Date.now().toString();
function tr(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(sr)for(a=1,b=0;b<sr.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^sr.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ur,vr=C.ytLoggingDocDocumentNonce_;vr||(vr=tr(),D("ytLoggingDocDocumentNonce_",vr));ur=vr;function wr(a){this.h=a}
wr.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
wr.prototype.getAsJspb=function(){var a=new pk;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Bd(b,yd):zd||(zd=new Bd(null,yd));else if(b.constructor!==Bd)if(xd(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Bd(new Uint8Array(b),yd):zd||(zd=new Bd(null,yd));else throw Error();L(a,1,b)}else void 0!==this.h.veType&&L(a,2,Qd(this.h.veType)),void 0!==this.h.veCounter&&L(a,6,Qd(this.h.veCounter)),void 0!==this.h.elementIndex&&L(a,3,
Qd(this.h.elementIndex)),this.h.isCounterfactual&&L(a,5,!0);void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),ae(a,pk,7,b));void 0!==this.h.youtubeData&&ae(a,ik,8,this.h.jspbYoutubeData);return a};
wr.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
wr.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function xr(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function yr(a){a=void 0===a?0:a;return T("new_csn_storage_design")?S("client-screen-nonce-store",{})[a]:S(xr(a))}
function zr(a,b){b=void 0===b?0:b;if(T("new_csn_storage_design")){var c=S("client-screen-nonce-store");c||(c={},Dk("client-screen-nonce-store",c));c[b]=a}Dk(xr(b),a)}
function Ar(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Br(a){return S(Ar(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",Br);function Cr(){var a=S("csn-to-ctt-auth-info");a||(a={},Dk("csn-to-ctt-auth-info",a));return a}
function Dr(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Er(a){a=yr(void 0===a?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Er);function Fr(a,b,c){var d=Cr();(c=Er(c))&&delete d[c];b&&(d[a]=b)}
function Gr(a){return Cr()[a]}
D("yt_logging_screen.getCttAuthInfo",Gr);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==yr(c)||b!==S(Ar(c)))if(Fr(a,d,c),zr(a,c),Dk(Ar(c),b),b=function(){setTimeout(function(){a&&qm("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ur,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Hr=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Hr);function Ir(a){yk(Hr,arguments)}
;function Jr(){var a=tb(Kr),b;return(new tf(function(c,d){a.onSuccess=function(e){al(e)?c(new Lr(e)):d(new Mr("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Mr("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Mr("Request timed out","net.timeout",e))};
b=hl("//googleads.g.doubleclick.net/pagead/id",a)})).qc(function(c){c instanceof Ef&&b.abort();
return zf(c)})}
function Mr(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Mr,ab);function Lr(a){this.xhr=a}
;function Nr(){this.h=0;this.i=null}
Nr.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:Or(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:Pr(a):this};
Nr.prototype.getValue=function(){return this.i};
Nr.prototype.isRejected=function(){return 2==this.h};
Nr.prototype.$goog_Thenable=!0;function Pr(a){var b=new Nr;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function Or(a){var b=new Nr;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function Qr(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Sk(a)?"same-origin":"cors",credentials:Sk(a)?"same-origin":"include"};b={};for(var d=u(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Rr(){return tg()||(id||jd)&&xm("applewebkit")&&!xm("version")&&(!xm("safari")||xm("gsa/"))||Zc&&xm("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Sr(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in nk)if(nk[d]==c.embeddedPlayerMode){b=nk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Tr(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ur;this.isTimeout=a instanceof Mr&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ef}
v(Tr,ab);Tr.prototype.name="BiscottiError";function Ur(){ab.call(this,"Biscotti ID is missing from server")}
v(Ur,ab);Ur.prototype.name="BiscottiMissingError";var Kr={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Vr=null;function Wr(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Rr())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if("1"==rb(a))return Error("Biscotti ID is not available in private embed mode");if(Sr(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function wk(){var a=Wr();if(void 0!==a)return zf(a);Vr||(Vr=Jr().then(Xr).qc(function(b){return Yr(2,b)}));
return Vr}
function Xr(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ur;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ur;a=a.id;xk(a);Vr=Or(a);Zr(18E5,2);return a}
function Yr(a,b){b=new Tr(b);xk("");Vr=Pr(b);0<a&&Zr(12E4,a-1);throw b;}
function Zr(a,b){bl(function(){Jr().then(Xr,function(c){return Yr(b,c)}).qc(cb)},a)}
function $r(){try{var a=E("yt.ads.biscotti.getId_");return a?a():wk()}catch(b){return zf(b)}}
;function as(a){if("1"!=rb(S("PLAYER_VARS",{}))){a&&vk();try{$r().then(function(){},function(){}),bl(as,18E5)}catch(b){Hk(b)}}}
;function bs(){var a=Pl(),b=Sl(119),c=1<window.devicePixelRatio;if(document.body&&ni(document.body,"exp-invert-logo"))if(c&&!ni(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ni(d,"inverted-hdpi")){var e=li(d);mi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ni(document.body,"inverted-hdpi")&&oi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Tl(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Ml[b]:(c=d.toString(16),Ml[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Ml)Ml.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Ml[f])));var f=d.join("&");Il(b,f,63072E3,a.i,c)}}
;var cs=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function ds(){var a=void 0===a?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;tc(uc(5,a));try{var b=Qk(a).theme;return cs.get(b)||null}catch(c){}return null}
;function es(){this.h={};if(this.i=Ll()){var a=Jl("CONSISTENCY");a&&gs(this,{encryptedTokenJarContents:a})}}
es.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Oa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=u(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];gs(this,a)}};
function gs(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Il("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var hs=window.location.hostname.split(".").slice(-2).join(".");function is(){var a=S("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===S("INNERTUBE_CLIENT_NAME")&&(this.h=js(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var ks;function ls(){ks=E("yt.clientLocationService.instance");ks||(ks=new is,D("yt.clientLocationService.instance",ks));return ks}
m=is.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===S("INNERTUBE_CLIENT_NAME")?(this.h=js(this))&&this.h.set("yt-location-playability-token",a,15552E3):Il("YT_CL",JSON.stringify({loctok:a}),15552E3,hs,!0))};
function js(a){return void 0===a.h?new hm("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=js(this))&&this.h.remove("yt-location-playability-token"):Kl("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===S("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function ms(a,b){if(!a)return!1;var c,d=null==(c=W(a,mk))?void 0:c.signal;if(d&&b.lb)return!!b.lb[d];var e;if((c=null==(e=W(a,jk))?void 0:e.request)&&b.wc)return!!b.wc[c];for(var f in a)if(b.vc[f])return!0;return!1}
function ns(a,b){var c,d=null==(c=W(a,mk))?void 0:c.signal;if(d&&b.lb&&(c=b.lb[d]))return c();var e;if((c=null==(e=W(a,jk))?void 0:e.request)&&b.wc&&(e=b.wc[c]))return e();for(var f in a)if(b.vc[f]&&(a=b.vc[f]))return a()}
;function ps(a){return function(){return new a}}
;var qs={},rs=(qs.WEB_UNPLUGGED="^unplugged/",qs.WEB_UNPLUGGED_ONBOARDING="^unplugged/",qs.WEB_UNPLUGGED_OPS="^unplugged/",qs.WEB_UNPLUGGED_PUBLIC="^unplugged/",qs.WEB_CREATOR="^creator/",qs.WEB_KIDS="^kids/",qs.WEB_EXPERIMENTS="^experiments/",qs.WEB_MUSIC="^music/",qs.WEB_REMIX="^music/",qs.WEB_MUSIC_EMBEDDED_PLAYER="^music/",qs.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",qs);
function ss(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=rs[b];if(c){var d=new RegExp(c),e=u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(rs).forEach(function(g){var h=u(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function ts(){}
ts.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Fl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=ub(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Pl();var l="USER_INTERFACE_THEME_LIGHT";Sl(165)?l="USER_INTERFACE_THEME_DARK":Sl(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:ds()||l;h.userInterfaceTheme=k;if(!f){if(k=Xl())h.connectionType=
k;T("web_log_effective_connection_type")&&(k=Yl())&&(g.client.effectiveConnectionType=k)}var p;if(T("web_log_memory_total_kbytes")&&(null==(p=C.navigator)?0:p.deviceMemory)){var n;p=null==(n=C.navigator)?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+1E6*p}n=Qk(C.location.href);!T("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&Gl.h&&
(n=Gl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Hl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!T("web_lr_app_quality_killswitch")&&(n=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));
if(!T("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var w=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(aa){}w=void 0}w&&(h.timeZone=w)}(w=S("EXPERIMENTS_TOKEN",""))?h.experimentsToken=w:delete h.experimentsToken;w=Yk();es.h||(es.h=new es);h=es.h.h;n=[];p=0;for(var r in h)n[p++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:w,consistencyTokenJars:n});!T("web_prequest_context_killswitch")&&(r=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=r);w=Pl();r=Sl(58);w=w.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);w&&(g.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?e&&(f=Er())&&(g.clientScreenNonce=f):!f&&(f=Er())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;ls().setLocationOnInnerTubeContext(g);try{var x=Tk(),z=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:z};var y=u(Object.entries(x));
for(var I=y.next();!I.done;I=y.next()){var K=u(I.value),H=K.next().value,J=K.next().value;x=H;z=J;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+z})}}catch(aa){mr(aa)}y=g}else mr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),y={};y={context:y};if(I=this.h(a)){this.i(y,I,b);var V;b="/youtubei/v1/"+ss(this.j());(I=null==(V=W(a.commandMetadata,lk))?void 0:V.apiUrl)&&(b=I);V=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(V=String(b)+String(wc(V)));b={};b.key=S("INNERTUBE_API_KEY");
T("json_condensed_response")&&(b.prettyPrint="false");V=Rk(V,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:V,jb:Qr(V),Oa:y,config:a};a.config.Xb?a.config.Xb.identity=c:a.config.Xb={identity:c};return a}mr(new Zl("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(ts.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function us(){}
v(us,ts);us.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",jb:Qr("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
us.prototype.j=function(){return[]};
us.prototype.h=function(){};
us.prototype.i=function(){};var vs={},ws=(vs.GET_DATASYNC_IDS=ps(us),vs);function xs(a,b){var c=void 0===c?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=vc(window.location.href);e&&d.push(e);e=vc(a);if(0<=eb(d,e)||!e&&0==a.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(d=document.createElement("a"),mc(d,a),a=d.href),a&&(a=wc(a),a=xc(a)))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Er()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&ys(a,b,f)}else ys(a,b)}
function ys(a,b,c){a="ST-"+rc(a).toString(36);b=b?Bc(b):"";c=c||5;Rr()&&Il(a,b,c)}
;function zs(){try{return!!self.localStorage}catch(a){return!1}}
;function As(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Bs(a){if(zs()){var b=Object.keys(window.localStorage);b=u(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=As(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Cs(){if(!zs())return!1;var a=am(),b=Object.keys(window.localStorage);b=u(b);for(var c=b.next();!c.done;c=b.next())if(c=As(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Ds(a){if(tg()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=vc(window.location.href);c&&b.push(c);c=vc(a);0<=eb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=wc(a),(b=xc(b))?(b="ST-"+rc(b).toString(36),b=(b=Jl(b)||null)?Pk(b):{}):b=null):b=null;null==b&&(b={});c=S("LOGIN_INFO");T("copy_login_info_to_st_cookie")&&c&&(b.session_logininfo=c);xs(a,b)}}
;function Es(a){var b=B.apply(1,arguments);if(!Fs(a)||b.some(function(d){return!Fs(d)}))throw Error("Only objects may be merged.");
b=u(b);for(var c=b.next();!c.done;c=b.next())Gs(a,c.value);return a}
function Gs(a,b){for(var c in b)if(Fs(b[c])){if(c in a&&!Fs(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Gs(a[c],b[c])}else if(Hs(b[c])){if(c in a&&!Hs(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Is(a[c],b[c])}else a[c]=b[c];return a}
function Is(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Fs(c)?a.push(Gs({},c)):Hs(c)?a.push(Is([],c)):a.push(c);return a}
function Fs(a){return"object"===typeof a&&!Array.isArray(a)}
function Hs(a){return"object"===typeof a&&Array.isArray(a)}
;function Js(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Ks(){var a=Js();a.info||(a.info={});return a.info}
function Ls(a){a=Js(a);a.metadata||(a.metadata={});return a.metadata}
function Ms(a){a=Js(a);a.tick||(a.tick={});return a.tick}
function Ns(a){a=Js(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Os(a){a=Ns(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ps(a){var b=Js(a).nonce;b||(b=tr(),Js(a).nonce=b);return b}
;function Qs(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Rs(a){a=a||"";var b=E("ytcsi.reference");b||(Qs(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Qs(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Ss=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",
X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",
X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X),Y={},Ts=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",
Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",
Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Us="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Vs={},Ws=(Vs.ccs="CANARY_STATE_",
Vs.mver="MEASUREMENT_VERSION_",Vs.pis="PLAYER_INITIALIZED_STATE_",Vs.yt_pt="LATENCY_PLAYER_",Vs.pa="LATENCY_ACTION_",Vs.ctop="TOP_ENTITY_TYPE_",Vs.yt_vst="VIDEO_STREAM_TYPE_",Vs),Xs="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Ys(a,b,c){c=Ns(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Ts){c=Ts[a];0<=eb(Us,c)&&(b=!!b);a in Ws&&"string"===typeof b&&(b=Ws[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Es({},d)}0<=eb(Xs,a)||nr(new Zl("Unknown label logged with GEL CSI",a))}
;function Zs(a,b){io.call(this,1,arguments);this.timer=b}
v(Zs,io);var $s=new jo("aft-recorded",Zs);var at=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",at);function bt(){this.h=0}
function ct(){bt.h||(bt.h=new bt);return bt.h}
bt.prototype.tick=function(a,b,c,d){dt(this,"tick_"+a+"_"+b)||qm("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
bt.prototype.info=function(a,b,c){var d=Object.keys(a).join("");dt(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,qm("latencyActionInfo",a,{cttAuthInfo:c}))};
bt.prototype.jspbInfo=function(){};
bt.prototype.span=function(a,b,c){var d=Object.keys(a).join("");dt(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,qm("latencyActionSpan",a,{cttAuthInfo:c}))};
function dt(a,b){at[b]=at[b]||{count:0};var c=at[b];c.count++;c.time=U();a.h||(a.h=cm(function(){var d=U(),e;for(e in at)at[e]&&6E4<d-at[e].time&&delete at[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Zl("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||nr(c)),!0):!1}
;var et=window;function ft(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function gt(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=ht(e.requestStart),e.responseEnd=ht(e.responseEnd),e.redirectStart=ht(e.redirectStart),e.redirectEnd=ht(e.redirectEnd),e.domainLookupEnd=ht(e.domainLookupEnd),e.connectStart=ht(e.connectStart),e.connectEnd=
ht(e.connectEnd),e.responseStart=ht(e.responseStart),e.secureConnectionStart=ht(e.secureConnectionStart),e.domainLookupStart=ht(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function ht(a){return Math.round(jt()+a)}
function jt(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=et.performance||et.mozPerformance||et.msPerformance||et.webkitPerformance||new ft;var kt=!1,lt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||cb,Z);function mt(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;Ls(c).loadType=d}(a=Ys(a,b,c))&&nt(a,c)}}
function nt(a,b){var c=Rs(b||"");Es(c.info,a);a.loadType&&(c=a.loadType,Ls(b).loadType=c);Es(Os(b),a);c=Ps(b);b=Js(b).cttAuthInfo;ct().info(a,c,b)}
function ot(a,b,c){if(!b&&"_"!==a[0]){var d=a;Z.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Z.mark(d))}d=Rs(c||"");d.tick[a]=b||U();if(d.callback&&d.callback[a]){d=u(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Ns(c);d.gelTicks&&(d.gelTicks[a]=!0);e=Ms(c);d=b||U();T("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=Ps(c);var f=Js(c).cttAuthInfo;"_start"===a?(a=ct(),dt(a,"baseline_"+e)||qm("latencyActionBaselined",{clientActionNonce:e},{timestamp:b,
cttAuthInfo:f})):ct().tick(a,e,b,f);pt(c);return d}
function qt(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Mp+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function rt(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);pc()&&a.setAttribute("nonce",pc());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=jt(),ot("rsf_"+b,c+Math.round(a.fetchStart)),ot("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function st(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(ot("wffs",ht(b.startTime)),ot("wffe",ht(b.responseEnd)))}
function tt(a){var b=ut("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=ut(b[d],a);if(e)return e}return NaN}
function ut(a,b){if(a=Ms(b)[a])return"number"===typeof a?a:a[a.length-1]}
function pt(a){var b=ut("_start",a),c=tt(a);b&&c&&!kt&&(oo($s,new Zs(Math.round(c-b),a)),kt=!0)}
function vt(a,b){for(var c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!vt(a[d],b[d]))return!1;return!0}
function wt(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=jb(a,function(b){return"first-paint"===b.name}))return ht(a.startTime)}a=Z.timing;
return a.ze?Math.max(0,a.ze):0}
;function xt(a,b){Gk(function(){Rs("").info.actionType=a;b&&Dk("TIMING_AFT_KEYS",b);Dk("TIMING_ACTION",a);var c=S("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&mt(d,c[d]);c={isNavigation:!0,actionType:Ss[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=S("PREVIOUS_ACTION"))c.previousAction=Ss[d]||"LATENCY_ACTION_UNKNOWN";if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Er())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=qt();if(1===d||-1===d)c.isVisible=
!0;Ls();Ks();c.loadType="cold";d=Ks();var e=gt(),f=jt(),g=S("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(ot("srt",e.responseStart),1!==d.prerender&&ot("_start",f,void 0));d=wt();0<d&&ot("fpt",d);d=gt();d.isPerformanceNavigationTiming&&nt({performanceNavigationTiming:!0});ot("nreqs",d.requestStart,void 0);ot("nress",d.responseStart,void 0);ot("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(ot("nrs",d.redirectStart,void 0),ot("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(ot("ndnss",d.domainLookupStart,void 0),ot("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(ot("ntcps",d.connectStart,void 0),ot("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=jt()&&0<d.connectEnd-d.secureConnectionStart&&(ot("nstcps",d.secureConnectionStart,void 0),ot("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&st();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in lt)lt.hasOwnProperty(h)&&
(e=lt[h],rt(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=u(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});nt(c);c=Ks();h=Os();if("cold"===Ls().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=Ms();e=Ns();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])ot(k,ut(k));else if(T("log_repeated_ytcsi_ticks"))for(f=u(d[k]),g=f.next();!g.done;g=f.next())g=g.value,ot(k.slice(1),g);k={};d=!1;e=u(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=Ys(f,c[f]))&&!vt(Os(),f)&&(Es(h,f),Es(k,f),d=!0);d&&nt(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&zt()&&tt()&&pt()})()}
function At(a,b,c,d){Gk(mt)(a,b,c,d)}
function Bt(a,b,c){return Gk(ot)(a,b,c)}
function zt(){return Gk(function(){return"_start"in Ms()})()}
function Ct(){Gk(function(){var a=Ps();requestAnimationFrame(function(){setTimeout(function(){a===Ps()&&Bt("ol",void 0,void 0)},0)})})()}
var Dt=window;Dt.ytcsi&&(Dt.ytcsi.info=At,Dt.ytcsi.tick=Bt);var Et="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Ft=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Gt(a,b,c,d){this.j=a;this.X=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.lb||(a.lb={});a.lb=Object.assign({},ws,a.lb)}
function Ht(a,b,c,d){if(void 0!==Gt.h){if(d=Gt.h,a=[a!==d.j,b!==d.X,c!==d.m,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new Zl("InnerTubeTransportService is already initialized",a);
}else Gt.h=new Gt(a,b,c,d)}
function It(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Fl:c;var d=ns(b,a.j);if(!d)return zf(new Zl("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(Ds(e.input),new tf(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.jb)?void 0:g.mode)?"cors":void 0;if(a.m.We){var p=e.config,n;p=null==p?void 0:null==(n=p.Xb)?void 0:n.sessionIndex;n=El(0,{sessionIndex:p});k=Object.assign({},Jt(h),n);return l.A(2)}return l.yield(Kt(e.config,
h),3)}2!=l.h&&(k=l.i);f(Lt(a,e,k));l.h=0})})):zf(new Zl("Error: Failed to build request for command.",b))}
function Mt(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Lf)?0:d.Pf)&&a.l){d=u(Et);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Lt(a,b,c){var d,e,f,g,h,k,l,p,n,w,r,x,z,y,I,K,H,J,V,aa,Ga,oa,Ka,Ba,Aa,Ag,eq,fq,gq;return A(function(la){switch(la.h){case 1:la.A(2);break;case 3:if((d=la.i)&&!d.isExpired())return la.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Oa)?0:f.context)){la.A(4);break}g=b.Oa.context;la.A(5);break;case 5:if("hybrid"!==Xk()){h=u([]);for(k=h.next();!k.done;k=h.next())l=k.value,l.If(g);la.A(4);break}return la.yield([].reduce(function(Iv,Jv){return Iv.then(function(){return Jv.Hf(g)})},
Promise.resolve()),4);
case 4:if(null==(p=a.i)||!p.Mf(b.input,b.Oa)){la.A(9);break}return la.yield(a.i.Ef(b.input,b.Oa),10);case 10:return n=la.i,T("kevlar_process_local_innertube_responses_killswitch")||Mt(a,n,b),la.return(n);case 9:return(x=null==(r=b.config)?void 0:r.Ia)&&a.h.has(x)&&T("web_memoize_inflight_requests")?w=a.h.get(x):(z=JSON.stringify(b.Oa),K=null!=(I=null==(y=b.jb)?void 0:y.headers)?I:{},b.jb=Object.assign({},b.jb,{headers:Object.assign({},K,c)}),H=Object.assign({},b.jb),"POST"===b.jb.method&&(H=Object.assign({},
H,{body:z})),(null==(J=b.config)?0:J.Ge)&&Bt(b.config.Ge),V=function(){return a.X.fetch(b.input,H,b.config)},w=V(),x&&a.h.set(x,w)),la.yield(w,11);
case 11:if((aa=la.i)&&"error"in aa&&(null==(Ga=aa)?0:null==(oa=Ga.error)?0:oa.details))for(Ka=aa.error.details,Ba=u(Ka),Aa=Ba.next();!Aa.done;Aa=Ba.next())Ag=Aa.value,(eq=Ag["@type"])&&-1<Ft.indexOf(eq)&&(delete Ag["@type"],aa=Ag);x&&a.h.has(x)&&a.h.delete(x);(null==(fq=b.config)?0:fq.He)&&Bt(b.config.He);if(aa||null==(gq=a.i)||!gq.wf(b.input,b.Oa)){la.A(12);break}return la.yield(a.i.Df(b.input,b.Oa),13);case 13:aa=la.i;case 12:return Mt(a,aa,b),la.return(aa||void 0)}})}
function Kt(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Xb)?void 0:d.sessionIndex;var h=g.yield;var k=yf(El(0,{sessionIndex:e}));return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Jt(b),f)))})}
function Jt(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);"cors"!==a&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Nt=new pq("INNERTUBE_TRANSPORT_TOKEN");var Ot=["share/get_web_player_share_panel"],Pt=["feedback"],Qt=["notification/modify_channel_preference"],Rt=["browse/edit_playlist"],St=["subscription/subscribe"],Tt=["subscription/unsubscribe"];function Ut(){}
v(Ut,ts);Ut.prototype.j=function(){return St};
Ut.prototype.h=function(a){return W(a,uk)||void 0};
Ut.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Ut.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Vt(){}
v(Vt,ts);Vt.prototype.j=function(){return Tt};
Vt.prototype.h=function(a){return W(a,tk)||void 0};
Vt.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Vt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Wt(){}
v(Wt,ts);Wt.prototype.j=function(){return Pt};
Wt.prototype.h=function(a){return W(a,ok)||void 0};
Wt.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Wt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Xt(){}
v(Xt,ts);Xt.prototype.j=function(){return Qt};
Xt.prototype.h=function(a){return W(a,sk)||void 0};
Xt.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Yt(){}
v(Yt,ts);Yt.prototype.j=function(){return Rt};
Yt.prototype.h=function(a){return W(a,rk)||void 0};
Yt.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Zt(){}
v(Zt,ts);Zt.prototype.j=function(){return Ot};
Zt.prototype.h=function(a){return W(a,qk)};
Zt.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var $t=new pq("NETWORK_SLI_TOKEN");function au(a){this.h=a}
au.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=tc(uc(5,Ic(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;T("wug_networking_gzip_request")&&(e=Go(b));f=new window.Request(a,e);return T("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){nr(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){nr(h)}))})};
au.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.zf(),b=b.then(function(c){nr(new Zl("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
au[oq]=[new qq($t)];var bu=new pq("NETWORK_MANAGER_TOKEN");var cu;function du(){var a=eu,b=fu,c=gu;this.l=hu;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function iu(a,b,c){if(ju(b))ku(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.uc)d.uc=c.uc;0===d.type?a.navigate?lu(d.command)?mu(a,d.command)||(b=a.navigate(d)||[],Cf(b).then(function(){a.h.delete(d.command)})):mr(Error("Error: Command handler page requests need to specify a url.")):mr(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?mu(a,d.command)||(b=a.i(d),Cf(b).then(function(){a.h.delete(d.command)})):mr(Error("Error: Command handler handle service request function was called but not set.")):
2===d.type&&(a.j?a.j(d):mr(Error("Error: Command handler send action was called but not set.")))}}
function mu(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function ju(a){var b=!!W(a,hk),c;a="CLIENT_SIGNAL"===(null==(c=W(a,mk))?void 0:c.signal);return b||a}
function ku(a,b,c){var d=W(b,hk);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=W(b,mk))?void 0:f.signal)){var g;e=(null==(g=W(b,mk))?void 0:g.actions)||[]}}if(e)for(b=u(e),e=b.next();!e.done;e=b.next()){e=e.value;try{iu(a,e,c)}catch(h){h instanceof Error&&mr(h)}}else mr(Error("Could not handle the meta command."))}
function lu(a){var b;return!(null==(b=W(null==a?void 0:a.commandMetadata,lk))||!b.url)}
;function nu(){var a,b,c;return A(function(d){if(1==d.h)return a=vq().resolve(Nt),a?d.yield(It(a),2):(nr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return nr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.xf;return d.return(c)}nr(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var ou=C.caches,pu;function qu(a){var b=a.indexOf(":");return-1===b?{td:a}:{td:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ru(){return A(function(a){if(void 0!==pu)return a.return(pu);pu=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return xa(d,2),d.yield(ou.open("test-only"),4);case 4:return d.yield(ou.delete("test-only"),5);case 5:ya(d,3);break;case 2:if(c=za(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(pu)})}
function su(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(ru(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(ou.keys(),3)}c=k.i;d=u(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=qu(f),h=g.datasyncId,!h||a.includes(h)||b.push(ou.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(p){return p})}))})}
function tu(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(ru(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=am("cache contains other");return h.yield(ou.keys(),3)}b=h.i;c=u(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=qu(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function uu(){nu().then(function(a){a&&(Gn(a),su(a),Bs(a))})}
function vu(){var a=new yp;di.ma(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=am("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Gn(g);su(g);Bs(g);return f.return()}c=Cs();return f.yield(tu(),3);case 3:return d=f.i,f.yield(Hn(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.sa()?uu():a.l.add("publicytnetworkstatus-online",uu,!0,void 0,void 0),f.h=0}})})}
;var Ih=ha(["data-"]);function wu(a){a&&(a.dataset?a.dataset[xu("loaded")]="true":Hh(a))}
function yu(a,b){return a?a.dataset?a.dataset[xu(b)]:a.getAttribute("data-"+b):null}
var zu={};function xu(a){return zu[a]||(zu[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Au=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Bu=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Cu(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Au,""),c=c.replace(Bu,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Du(a,b,c)}
function Du(a,b,c){c=void 0===c?null:c;var d=Eu(a),e=document.getElementById(d),f=e&&yu(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=iq(d,b),b=""+Sa(b),Fu[b]=f),g||(e=Gu(a,d,function(){if(!yu(e,"loaded")){wu(e);lq(d);var h=Ya(mq,d);bl(h,0)}},c)))}
function Gu(a,b,c,d){d=void 0===d?null:d;var e=ff("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lh(e,dk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Hu(a){a=Eu(a);var b=document.getElementById(a);b&&(mq(a),b.parentNode.removeChild(b))}
function Iu(a,b){a&&b&&(a=""+Sa(b),(a=Fu[a])&&kq(a))}
function Eu(a){var b=document.createElement("a");mc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+rc(a)}
var Fu={};var Ju=[],Ku=!1;function Lu(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Rr()){var a=S("PLAYER_VARS",{});if("1"!=rb(a)&&!Sr(a)){var b=function(){Ku=!0;"google_ad_status"in window?Dk("DCLKSTAT",1):Dk("DCLKSTAT",2)};
try{Cu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ju.push(di.ma(function(){if(!(Ku||"google_ad_status"in window)){try{Iu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ku=!0;Dk("DCLKSTAT",3)}},5E3))}}}
function Mu(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;var Nu=window;function Ou(){var a,b;return"h5vcc"in Nu&&(null==(a=Nu.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Nu.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Nu&&Nu.performance.mark&&Nu.performance.measure?2:0}
function Pu(a){switch(Ou()){case 1:Nu.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Nu.performance.mark(a+"-start");break;case 0:break;default:Jh()}}
function Qu(a){switch(Ou()){case 1:Nu.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Nu.performance.mark(c);Nu.performance.measure(a,b,c);break;case 0:break;default:Jh()}}
;var Ru=T("web_enable_lifecycle_monitoring")&&0!==Ou();function Su(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?gm():d;this.j=c;this.scheduler=d;this.i=new yh;this.h=a;for(a={bb:0};a.bb<this.h.length;a={Fb:a.Fb,bb:a.bb},a.bb++)a.Fb=this.h[a.bb],c=function(e){return function(){e.Fb.Fc();b.h[e.bb].mc=!0;b.h.every(function(f){return!0===f.mc})&&b.i.resolve()}}(a),d=this.getPriority(a.Fb),d=dm(c,d),this.h[a.bb]=Object.assign({},a.Fb,{Fc:c,
jobId:d})}
function Tu(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=u(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.mc||(a.scheduler.Fa(c.jobId),dm(c.Fc,10))}
Su.prototype.cancel=function(){for(var a=u(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.mc||this.scheduler.Fa(b.jobId),b.mc=!0;this.i.resolve()};
Su.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Uu(a){this.state=a;this.plugins=[];this.s=void 0;this.v={};Ru&&Pu(this.state)}
m=Uu.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Ru&&Qu(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Tu(this.j),this.j=void 0);Vu(this,a,b);this.state=a;Ru&&Pu(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Wu(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Wu(a,b){var c=b.filter(function(e){return 10===Xu(a,e)}),d=b.filter(function(e){return 10!==Xu(a,e)});
return a.v.Nf?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Ie.apply(a,[c].concat(ia(e))),2);a.Cd.apply(a,[d].concat(ia(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Je.apply(a,[c].concat(ia(e)));a.Cd.apply(a,[d].concat(ia(e)))}}
m.Je=function(a){var b=B.apply(1,arguments);gm();for(var c={},d=u(a),e=d.next();!e.done;c={ob:c.ob},e=d.next())c.ob=e.value,em(function(f){return function(){Yu(f.ob.name);f.ob.callback.apply(f.ob,ia(b));Zu(f.ob.name)}}(c))};
m.Ie=function(a){var b=B.apply(1,arguments),c,d,e,f;return A(function(g){1==g.h&&(gm(),c={},d=u(a),e=d.next());if(3!=g.h){if(e.done)return g.A(0);c.cb=e.value;c.Db=void 0;f=function(h){return function(){Yu(h.cb.name);var k=h.cb.callback.apply(h.cb,ia(b));"function"===typeof(null==k?void 0:k.then)?h.Db=k.then(function(){Zu(h.cb.name)}):Zu(h.cb.name)}}(c);
em(f);return c.Db?g.yield(c.Db,3):g.A(3)}c={cb:c.cb,Db:c.Db};e=d.next();return g.A(2)})};
m.Cd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){Yu(e.name);e.callback.apply(e,ia(b));Zu(e.name)},
priority:Xu(c,e)}});
d.length&&(this.j=new Su(d))};
function Xu(a,b){var c,d;return null!=(d=null!=(c=a.s)?c:b.priority)?d:0}
function Yu(a){Ru&&a&&Pu(a)}
function Zu(a){Ru&&a&&Qu(a)}
function Vu(a,b,c){Ru&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Uu.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function $u(a){Uu.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.ga},{from:"document_active",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v($u,Uu);$u.prototype.ga=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
$u.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
$u.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
$u.prototype.i=function(){this.h=new Map};function av(a){Uu.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.l},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.l},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.l},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(av,Uu);av.prototype.i=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
av.prototype.h=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
av.prototype.l=function(a,b){a(null==b?void 0:b.event)};
av.prototype.m=function(a,b){a(null==b?void 0:b.event)};function bv(){this.l=new $u;this.m=new av}
bv.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function cv(a){io.call(this,1,arguments);this.csn=a}
v(cv,io);var ro=new jo("screen-created",cv),dv=[],ev=0;function fv(a,b,c,d){var e=d.filter(function(h){h.csn!==b?(h.csn=b,h=!0):h=!1;return h}),f={cttAuthInfo:Gr(b)||void 0,
sequenceGroup:b};d=u(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(pb(g)||!g.trackingParams&&!g.veType)&&nr(Error("Child VE logged with no data"));c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(h){return h.getAsJson()})};
"UNDEFINED_CSN"===b?gv("visualElementAttached",f,c):a?fr("visualElementAttached",c,a,f):qm("visualElementAttached",c,f)}
function gv(a,b,c){dv.push({payloadName:a,payload:c,Cf:void 0,options:b});ev||(ev=so())}
function to(a){if(dv){for(var b=u(dv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,qm(c.payloadName,c.payload,c.options));dv.length=0}ev=0}
;function hv(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
hv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Er(void 0===c?0:c)){a=this.client;var e=new wr({trackingParams:d});d={cttAuthInfo:Gr(c)||void 0,sequenceGroup:c};e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};b&&(e.clientData=b);"UNDEFINED_CSN"===c?gv("visualElementGestured",d,e):a?fr("visualElementGestured",e,a,d):qm("visualElementGestured",e,d);b=!0}else b=!1;else b=!1;return b};
hv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Er(d);a||(a=(a=Br(void 0===d?0:d))?new wr({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d={cttAuthInfo:Gr(c)||void 0,sequenceGroup:c},b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?gv("visualElementStateChanged",d,b):a?fr("visualElementStateChanged",b,a,d):qm("visualElementStateChanged",b,d))}};
function iv(a,b){if(void 0===b)for(var c=Dr(),d=0;d<c.length;d++)void 0!==c[d]&&iv(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&fv(a.client,b,f,e)}),a.i.clear(),a.h.clear(),a.m=void 0}
;function jv(){bv.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
v(jv,bv);jv.prototype.j=function(){qm("finalPayload",{csn:Er()})};
jv.prototype.h=function(){qr(rr)};
jv.prototype.i=function(){var a=iv;hv.h||(hv.h=new hv);a(hv.h)};function kv(){}
function lv(){var a=E("ytglobal.storage_");a||(a=new kv,D("ytglobal.storage_",a));return a}
kv.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(mv()):d.return()})};
function mv(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",kv);function om(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Wk("ytidb_transaction_ended_event_rate_limit_session",.2)}
om.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":nv(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Wk("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function nv(a,b){lv().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:ov(null==c?void 0:c.usage),deviceStorageQuotaMbytes:ov(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function ov(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function pv(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var qv=new Map;function rv(a,b){if(!a)return null;a=Object.keys(a);a=u(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function sv(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function tv(a,b){b=new pv(b);sv(a,"yt-action",b);return b.returnValue}
function uv(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=rv(e,"action")||rv(e,"command")||rv(e,"endpoint");if(f){var g="yt"+f;var h=qv.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),qv.set(g,f),g=f);W(e,kk)&&(g+="-"+W(e,kk).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(T("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?c&&T("use_source_element_if_present_for_actions")?vv(c,[e]):
vv(a,[e]):tv(a,[e,c,d]))})}
function vv(a,b){var c=[a];b&&c.push.apply(c,b);b=tv(a,c);return 0<b.length&&(b=b[0],sv(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){sv(a,"yt-service-request-completed",d)},function(d){sv(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):yf()}
;function hu(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=W(a.commandMetadata,lk))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(T("kevlar_service_command_check")){if(c=vq().resolve(Nt),ms(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=W(a.commandMetadata,lk))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function fu(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[vv(b,[a.command,c,a.uc])]}return[]}
function gu(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&uv(b,[a.command],b,c)}}
;function wv(a,b,c){N.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.targetOrigin="*";this.l=c;this.sessionId=null;this.channel="widget";this.M=!!a;this.v=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.targetOrigin=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.s||0<=eb(d.s,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.s=this.i=this.m=null;window.addEventListener("message",this.v)}
v(wv,N);wv.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Ik(d)}}};
wv.prototype.K=function(){window.removeEventListener("message",this.v);N.prototype.K.call(this)};function xv(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new wv(!!S("WIDGET_ID_ENFORCE")),b=this.De.bind(this);a.m=b;a.s=null;this.h.channel="widget";if(a=S("WIDGET_ID"))this.h.sessionId=a}
m=xv.prototype;m.De=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Uc(a,b,c)};
m.Uc=function(){};
m.yc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.yc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ge=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Bc());this.sendMessage("onReady");fb(this.i,this.Ad,this);this.i=[]};
m.Bc=function(){return null};
function yv(a,b){a.sendMessage("infoDelivery",b)}
m.Ad=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ad({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var zv={},Av=(zv["api.invalidparam"]=2,zv.auth=150,zv["drm.auth"]=150,zv["heartbeat.net"]=150,zv["heartbeat.servererror"]=150,zv["heartbeat.stop"]=150,zv["html5.unsupportedads"]=5,zv["fmt.noneavailable"]=5,zv["fmt.decode"]=5,zv["fmt.unplayable"]=5,zv["html5.missingapi"]=5,zv["html5.unsupportedlive"]=5,zv["drm.unavailable"]=5,zv["mrm.blocked"]=151,zv);var Bv=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Cv(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Dv(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=u(Bv);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Ev(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Fv(a){xv.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Pe.bind(this));this.addEventListener("onVolumeChange",this.Qe.bind(this));this.addEventListener("onApiChange",this.Ke.bind(this));this.addEventListener("onPlaybackQualityChange",this.Me.bind(this));this.addEventListener("onPlaybackRateChange",this.Ne.bind(this));this.addEventListener("onStateChange",this.Oe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Re.bind(this))}
v(Fv,xv);m=Fv.prototype;
m.Uc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Cv(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Dv(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Dv(e);break;case "loadPlaylist":case "cuePlaylist":e=Ev(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Cv(a)&&yv(this,this.Bc())}};
m.Ec=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);xv.prototype.Ec.call(this,a,b)};
m.yc=function(a,b){var c=this,d=xv.prototype.yc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.ge.bind(this);this.h.i=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Av[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Bc=function(){if(!this.api)return null;var a=this.api.getApiInterface();kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Oe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());yv(this,a)};
m.Me=function(a){yv(this,{playbackQuality:a})};
m.Ne=function(a){yv(this,{playbackRate:a})};
m.Ke=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Qe=function(){yv(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Pe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());yv(this,a)};
m.Re=function(){var a={sphericalProperties:this.api.getSphericalProperties()};yv(this,a)};
m.dispose=function(){xv.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Gv(a){N.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
v(Gv,N);m=Gv.prototype;m.start=function(){this.started||this.h()||(this.started=!0,this.connection.kb("RECEIVING"))};
m.kb=function(a,b){this.started&&!this.h()&&this.connection.kb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Hv(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Kv(a,c))&&this.kb(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Le.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Le=function(a,b){this.started&&!this.h()&&this.connection.kb(a,this.Ac(a,b))};
m.Ac=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.K=function(){var a=this.connection;a.h()||Ai(a.i,"command",this.wd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);N.prototype.K.call(this)};function Lv(a,b){Gv.call(this,b);this.api=a;this.start()}
v(Lv,Gv);Lv.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Lv.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Hv(a,b){switch(a){case "loadVideoById":return a=Dv(b),[a];case "cueVideoById":return a=Dv(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Ev(b),[a];case "cuePlaylist":return a=Ev(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Kv(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Lv.prototype.Ac=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Gv.prototype.Ac.call(this,a,b)};
Lv.prototype.K=function(){Gv.prototype.K.call(this);delete this.api};function Mv(a){a=void 0===a?!1:a;N.call(this);this.i=new O(a);se(this,this.i)}
Za(Mv,N);Mv.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Mv.prototype.m=function(a,b){this.h()||this.i.eb.apply(this.i,arguments)};function Nv(a,b,c){Mv.call(this);this.l=a;this.j=b;this.id=c}
v(Nv,Mv);Nv.prototype.kb=function(a,b){this.h()||this.l.kb(this.j,this.id,a,b)};
Nv.prototype.K=function(){this.j=this.l=null;Mv.prototype.K.call(this)};function Ov(a,b,c){N.call(this);this.i=a;this.origin=c;this.j=Tp(window,"message",this.l.bind(this));this.connection=new Nv(this,a,b);se(this,this.connection)}
v(Ov,N);Ov.prototype.kb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Ov.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Ov.prototype.K=function(){Up(this.j);this.i=null;N.prototype.K.call(this)};function Pv(){this.state=1;this.h=null}
m=Pv.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=yb();d=f?f.createScript(d):d;d=new Db(d,Cb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Bb("From proto message. b/166824318"),e=Hb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Qv(this,d,e,a.program,b,c)}else nr(Error("Cannot initialize botguard without program"))};
function Qv(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Cu(c,function(){window[g]?Rv(a,d,g,e):(a.state=3,Hu(c),nr(new Zl("Unable to load Botguard","from "+c)))},f)):b?(f=ff("SCRIPT"),b instanceof Db?(b instanceof Db&&b.constructor===Db?b=b.j:(Pa(b),b="type_error:SafeScript"),f.textContent=b,Kh(f)):f.textContent=b,f.nonce=pc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Rv(a,d,g,e):(a.state=4,nr(new Zl("Unable to load Botguard from JS")))):nr(new Zl("Unable to load VM; no url or JS provided"))}
function Rv(a,b,c,d){a.state=5;try{var e=new zh({program:b,le:c,Ee:T("att_web_record_metrics")});e.Te.then(function(){a.state=6;d&&d(b)});
a.Pc(e)}catch(f){a.state=7,f instanceof Error&&nr(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Sc()?this.Jd({dd:a}):null};
m.dispose=function(){this.Vc()};
m.Vc=function(){this.Pc(null);this.state=8};
m.Sc=function(){return!!this.h};
m.Jd=function(a){return this.h.Dd(a)};
m.Pc=function(a){qe(this.h);this.h=a};function Sv(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Tv(){Pv.apply(this,arguments)}
v(Tv,Pv);Tv.prototype.Vc=function(){this.state=8};
Tv.prototype.Pc=function(a){var b;null==(b=Sv())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Dd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Tv.prototype.Sc=function(){return!!Sv()};
Tv.prototype.Jd=function(a){return Sv().bgvmc(a)};var Uv=new Tv;function Vv(){return Uv.Sc()}
function Wv(a){a=void 0===a?{}:a;return Uv.invoke(a)}
;function Xv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Xv.prototype.clone=function(){var a=new Xv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=tb(c):a[b]=c}return a};var Yv=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Zv(a){a=a||"";if(window.spf){var b=a.match(Yv);spf.style.load(a,b?b[1]:"",void 0)}else $v(a)}
function $v(a){var b=aw(a),c=document.getElementById(b),d=c&&yu(c,"loaded");d||c&&!d||(c=bw(a,b,function(){if(!yu(c,"loaded")){wu(c);lq(b);var e=Ya(mq,b);bl(e,0)}}))}
function bw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=dk(a);nc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function aw(a){var b=ff("A");mc(b,new Lb(a,Qb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+rc(a)}
;function cw(){N.call(this);this.i=[]}
v(cw,N);cw.prototype.K=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}N.prototype.K.call(this)};function dw(){cw.apply(this,arguments)}
v(dw,cw);function ew(a,b,c,d,e){N.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.Ub=e;this.ya=!1;this.api={};this.ka=this.s=null;this.W=new O;this.i={};this.aa=this.Da=this.elementId=this.rb=this.config=null;this.Z=!1;this.l=this.M=null;this.la={};this.Vb=["onReady"];this.lastError=null;this.Hb=NaN;this.U={};this.Wb=new dw(this);this.da=0;this.j=this.m=a;se(this,this.W);fw(this);gw(this);se(this,this.Wb);c?this.da=bl(function(){f.loadNewVideoConfig(c)},0):d&&(hw(this),iw(this))}
v(ew,N);m=ew.prototype;m.getId=function(){return this.v};
m.loadNewVideoConfig=function(a){if(!this.h()){this.da&&(window.clearTimeout(this.da),this.da=0);var b=a||{};b instanceof Xv||(b=new Xv(b));this.config=b;this.setConfig(a);iw(this);this.isReady()&&jw(this)}};
function hw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.rb=a;this.config=kw(a);hw(this);if(!this.Da){var b;this.Da=lw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Vh(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Vh(Number(a)||a))};
function jw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function mw(a){var b=!0,c=nw(a);c&&a.config&&(a=ow(a),b=yu(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function iw(a){if(!a.h()&&!a.Z){var b=mw(a);if(b&&"html5"===(nw(a)?"html5":null))a.aa="html5",a.isReady()||pw(a);else if(qw(a),a.aa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),pw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.M=function(){c=!0;var d=rw(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?kw(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Ub);pw(a)};
a.Z=!0;b?a.M():(Cu(ow(a),a.M),(b=sw(a))&&Zv(b),tw(a)&&!c&&D("yt.player.Application.create",null))}}}
function nw(a){var b=ef(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function pw(a){if(!a.h()){var b=nw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Z=!1;if(!rw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}uw(a)}else a.Hb=bl(function(){pw(a)},50)}}
function uw(a){fw(a);a.ya=!0;var b=nw(a);if(b){a.s=vw(a,b,"addEventListener");a.ka=vw(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=vw(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);jw(a);a.Da&&a.Da(a.api);a.W.eb("onReady",a.api)}
function vw(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,nr(f))}}}
function fw(a){a.ya=!1;if(a.ka)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ka(b,a.i[b]);for(var c in a.U)a.U.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.U={};a.s=null;a.ka=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.rb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.ya};
function gw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){lq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){lq("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=lw(this,b);d&&(0<=eb(this.Vb,a)||this.i[a]||(b=ww(this,a),this.s&&this.s(a,b)),this.W.subscribe(a,d),"onReady"===a&&this.isReady()&&bl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h()||(b=lw(this,b))&&Ai(this.W,a,b)};
function lw(a,b){var c=b;if("string"===typeof b){if(a.la[b])return a.la[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){mr(f)}};
a.la[b]=c}return c?c:null}
function ww(a,b){var c="ytPlayer"+b+a.v;a.i[b]=c;C[c]=function(d){var e=bl(function(){if(!a.h()){try{a.W.eb(b,null!=d?d:void 0)}catch(h){nr(new Zl("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.U,g=String(e);g in f&&delete f[g]}},0);
qb(a.U,String(e))};
return c}
m.getPlayerType=function(){return this.aa||(nw(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function qw(a){a.cancel();fw(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=nw(a);b&&(mw(a)||!tw(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.M&&Iu(ow(this),this.M);window.clearTimeout(this.Hb);this.Z=!1};
m.K=function(){qw(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){mr(b)}this.la=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(C[this.i[a]]=null);this.rb=this.config=this.api=null;delete this.m;delete this.j;N.prototype.K.call(this)};
function tw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function ow(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function sw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function rw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Lk(c||"","&")[b]}
function kw(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
;var xw={},yw="player_uid_"+(1E9*Math.random()>>>0);function zw(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?ef(c):c;var e=yw+"_"+Sa(c),f=xw[e];if(f&&d)return Aw(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new ew(c,e,a,b,void 0);xw[e]=f;lq("player-added",f.api);te(f,function(){delete xw[f.getId()]});
return f.api}
function Aw(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Bw=null,Cw=null,Dw=null;function Ew(){Fw()}
function Gw(){Fw()}
function Fw(){var a=Bw.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function eu(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=Dh(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function Hw(){Bw&&Bw.sendAbandonmentPing&&Bw.sendAbandonmentPing();S("PL_ATT")&&Uv.dispose();for(var a=di,b=0,c=Ju.length;b<c;b++)a.Fa(Ju[b]);Ju.length=0;Hu("//static.doubleclick.net/instream/ad_status.js");Ku=!1;Dk("DCLKSTAT",0);re(Dw,Cw);Bw&&(Bw.removeEventListener("onVideoDataChange",Ew),Bw.destroy())}
;function Iw(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&xs(a,b);if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;b=g.location;a=Dc(a,e)+f;var h=void 0===h?Oh:h;a:{h=void 0===h?Oh:h;for(e=0;e<h.length;++e)if(f=h[e],f instanceof Mh&&f.te(a)){h=new Lb(a,Qb);break a}h=void 0}h=Dh(h||Rb);void 0!==h&&(b.href=h)}return!0}
;D("yt.setConfig",Dk);D("yt.config.set",Dk);D("yt.setMsg",Ir);D("yt.msgs.set",Ir);D("yt.logging.errors.log",mr);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}as(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);xt("embed",["ol"]);c=S("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Qk(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&xt("watch",["pbs","pbu","pbp"]);Bw=zw(a,c);T("embeds_enable_server_driven_watch_again_on_youtube")&&!du.h&&(du.h=new du);Bw.addEventListener("onVideoDataChange",Ew);Bw.addEventListener("onReady",Gw);T("embeds_enable_server_driven_watch_again_on_youtube")&&Bw.addEventListener("innertubeCommand",function(f){iu(du.h,f)});
a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Dw=new Fv(Bw):S("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Cw=new Ov(window.parent,a,b),Dw=new Lv(Bw,Cw.connection));Lu();T("ytidb_create_logger_embed_killswitch")||nm();a={};jv.h||(jv.h=new jv);jv.h.install((a.flush_logs={callback:function(){Sq()}},a));
Jp();T("ytidb_clear_embedded_player")&&di.ma(function(){var f,g;if(!cu){var h=vq(),k={Mc:bu,Hd:au};h.h.set(k.Mc,k);k={vc:{feedbackEndpoint:ps(Wt),modifyChannelNotificationPreferenceEndpoint:ps(Xt),playlistEditEndpoint:ps(Yt),subscribeEndpoint:ps(Ut),unsubscribeEndpoint:ps(Vt),webPlayerShareEntityServiceEndpoint:ps(Zt)}};var l=ls(),p={};l&&(p.client_location=l);void 0===f&&(f=Dl());void 0===g&&(g=h.resolve(bu));Ht(k,g,f,p);f={Mc:Nt,Id:Gt.h};h.h.set(f.Mc,f);cu=h.resolve(Nt)}vu()})});
var Jw=Gk(function(){Ct();bs()}),Kw=Gk(function(a){a.persisted||(Ct(),bs())}),Lw=Gk(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Hw():a.persisted||Hw()}),Mw=Gk(Hw);
window.addEventListener?(window.addEventListener("load",Jw),window.addEventListener("pageshow",Kw),window.addEventListener("pagehide",Lw)):window.attachEvent&&(window.attachEvent("onload",Jw),window.attachEvent("onunload",Mw));D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Vv);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Wv);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Mu);
D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Iw);D("yt.util.activity.init",E("yt.util.activity.init")||Yp);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||aq);D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Zp);}).call(this);
