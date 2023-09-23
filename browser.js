// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function o(t,r,e){var o=!1,i=r-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(o=!0,t=t.substr(1)),t=e?t+n(i):n(i)+t,o&&(t="-"+t)),t}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(t){var r,n,a;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,a=parseInt(n,10),!isFinite(a)){if(!e(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===t.specifier||10!==r)&&(a=4294967295+a+1),a<0?(n=(-a).toString(r),t.precision&&(n=o(n,t.precision,t.padRight)),n="-"+n):(n=a.toString(r),a||t.precision?t.precision&&(n=o(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===u.call(t.specifier)?u.call(n):i.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(t){var r,n,o=parseFloat(t.arg);if(!isFinite(o)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);o=t.arg}switch(t.specifier){case"e":case"E":n=o.toExponential(t.precision);break;case"f":case"F":n=o.toFixed(t.precision);break;case"g":case"G":l(o)<1e-4?((r=t.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(t.precision),t.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,w,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,b,"e-0$1"),t.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,d,"$1.e")),o>=0&&t.sign&&(n=t.sign+n),n=t.specifier===p.call(t.specifier)?p.call(n):f.call(n)}function j(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function _(t,r,e){var n=r-t.length;return n<0?t:t=e?t+j(n):j(n)+t}var S=String.fromCharCode,A=isNaN,E=Array.isArray;function T(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function O(t){var r,e,n,i,u,l,f,p,s;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,p=0;p<t.length;p++)if(c(n=t[p]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(u)?String(n.arg):S(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function P(t){var r,e,n,o;for(e=[],o=0,n=F.exec(t);n;)(r=t.slice(o,F.lastIndex-n[0].length)).length&&e.push(r),e.push(x(n)),o=F.lastIndex,n=F.exec(t);return(r=t.slice(o)).length&&e.push(r),e}function V(t){return"string"==typeof t}function k(t){var r,e,n;if(!V(t))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=P(t),(e=new Array(arguments.length))[0]=r,n=1;n<e.length;n++)e[n]=arguments[n];return O.apply(null,e)}var U,B=Object.prototype,N=B.toString,C=B.__defineGetter__,I=B.__defineSetter__,L=B.__lookupGetter__,G=B.__lookupSetter__;U=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(L.call(t,r)||G.call(t,r)?(n=t.__proto__,t.__proto__=B,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(t,r,e.get),u&&I&&I.call(t,r,e.set),t};var R=U;function $(t,r,e){R(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var M=/./;function X(t){return"boolean"==typeof t}function Z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var W=Z();function z(){return W&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function D(t,r){return null!=t&&q.call(t,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",K=z()?function(t){var r,e,n;if(null==t)return Y.call(t);e=t[J],r=D(t,J);try{t[J]=void 0}catch(r){return Y.call(t)}return n=Y.call(t),r?t[J]=e:delete t[J],n}:function(t){return Y.call(t)},Q=Boolean,tt=Boolean.prototype.toString,rt=z();function et(t){return"object"==typeof t&&(t instanceof Q||(rt?function(t){try{return tt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===K(t)))}function nt(t){return X(t)||et(t)}function ot(){return new Function("return this;")()}$(nt,"isPrimitive",X),$(nt,"isObject",et);var it="object"==typeof self?self:null,ut="object"==typeof window?window:null,at="object"==typeof globalThis?globalThis:null,ct=function(t){if(arguments.length){if(!X(t))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return ot()}if(at)return at;if(it)return it;if(ut)return ut;throw new Error("unexpected error. Unable to resolve global object.")}(),lt=ct.document&&ct.document.childNodes,ft=Int8Array;function pt(){return/^\s*function\s*([^(]*)/i}var st=/^\s*function\s*([^(]*)/i;$(pt,"REGEXP",st);var yt,bt=Z(),gt=Object.prototype.toString,dt="function"==typeof H?H.toStringTag:"",vt=bt&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return gt.call(t);e=t[dt],r=D(t,dt);try{t[dt]=void 0}catch(r){return gt.call(t)}return n=gt.call(t),r?t[dt]=e:delete t[dt],n}:function(t){return gt.call(t)};yt=Array.isArray?Array.isArray:function(t){return"[object Array]"===vt(t)};var wt=yt;function ht(t){return null!==t&&"object"==typeof t}var mt=function(t){if("function"!=typeof t)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!wt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(ht);function jt(t){var r,e,n,o;if(("Object"===(e=K(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=st.exec(n.toString()))return r[1]}return ht(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(ht,"isObjectLikeArray",mt);var _t="function"==typeof M||"object"==typeof ft||"function"==typeof lt?function(t){return jt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?jt(t).toLowerCase():r};function St(t){return"function"===_t(t)}var At,Et=/./,Tt="function"==typeof Object.defineProperty?Object.defineProperty:null,Ot=Object.defineProperty,Ft=Object.prototype,xt=Ft.toString,Pt=Ft.__defineGetter__,Vt=Ft.__defineSetter__,kt=Ft.__lookupGetter__,Ut=Ft.__lookupSetter__;At=function(){try{return Tt({},"x",{}),!0}catch(t){return!1}}()?Ot:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===xt.call(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===xt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(kt.call(t,r)||Ut.call(t,r)?(n=t.__proto__,t.__proto__=Ft,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Pt&&Pt.call(t,r,e.get),u&&Vt&&Vt.call(t,r,e.set),t};var Bt=At;function Nt(t,r,e){Bt(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ct(t){return"boolean"==typeof t}var It=Z();function Lt(){return It&&"symbol"==typeof Symbol.toStringTag}var Gt=Object.prototype.toString,Rt="function"==typeof H?H.toStringTag:"",$t=Lt()?function(t){var r,e,n;if(null==t)return Gt.call(t);e=t[Rt],r=D(t,Rt);try{t[Rt]=void 0}catch(r){return Gt.call(t)}return n=Gt.call(t),r?t[Rt]=e:delete t[Rt],n}:function(t){return Gt.call(t)},Mt=Boolean.prototype.toString,Xt=Lt();function Zt(t){return"object"==typeof t&&(t instanceof Q||(Xt?function(t){try{return Mt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===$t(t)))}function Wt(t){return Ct(t)||Zt(t)}function zt(){return new Function("return this;")()}Nt(Wt,"isPrimitive",Ct),Nt(Wt,"isObject",Zt);var Yt="object"==typeof self?self:null,qt="object"==typeof window?window:null,Dt="object"==typeof globalThis?globalThis:null,Ht=function(t){if(arguments.length){if(!Ct(t))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return zt()}if(Dt)return Dt;if(Yt)return Yt;if(qt)return qt;throw new Error("unexpected error. Unable to resolve global object.")}(),Jt=Ht.document&&Ht.document.childNodes,Kt=Int8Array;function Qt(){return/^\s*function\s*([^(]*)/i}var tr=/^\s*function\s*([^(]*)/i;function rr(t){return null!==t&&"object"==typeof t}Nt(Qt,"REGEXP",tr);var er=function(t){if("function"!=typeof t)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!wt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(rr);function nr(t){var r,e,n,o;if(("Object"===(e=$t(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=tr.exec(n.toString()))return r[1]}return rr(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Nt(rr,"isObjectLikeArray",er);var or="function"==typeof Et||"object"==typeof Kt||"function"==typeof Jt?function(t){return nr(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?nr(t).toLowerCase():r};function ir(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&function(t){return"function"===or(t)}(t.next)}function ur(t){return"number"==typeof t}var ar=Number,cr=ar.prototype.toString,lr=z();function fr(t){return"object"==typeof t&&(t instanceof ar||(lr?function(t){try{return cr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===K(t)))}function pr(t){return ur(t)||fr(t)}$(pr,"isPrimitive",ur),$(pr,"isObject",fr);var sr,yr="function"==typeof H&&"symbol"==typeof H("foo")&&D(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null,br=/./,gr="function"==typeof Object.defineProperty?Object.defineProperty:null,dr=Object.defineProperty,vr=Object.prototype,wr=vr.toString,hr=vr.__defineGetter__,mr=vr.__defineSetter__,jr=vr.__lookupGetter__,_r=vr.__lookupSetter__;sr=function(){try{return gr({},"x",{}),!0}catch(t){return!1}}()?dr:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===wr.call(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===wr.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(jr.call(t,r)||_r.call(t,r)?(n=t.__proto__,t.__proto__=vr,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&hr&&hr.call(t,r,e.get),u&&mr&&mr.call(t,r,e.set),t};var Sr=sr;function Ar(t,r,e){Sr(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Er(t){return"boolean"==typeof t}var Tr=Z();function Or(){return Tr&&"symbol"==typeof Symbol.toStringTag}var Fr=Object.prototype.toString,xr="function"==typeof H?H.toStringTag:"",Pr=Or()?function(t){var r,e,n;if(null==t)return Fr.call(t);e=t[xr],r=D(t,xr);try{t[xr]=void 0}catch(r){return Fr.call(t)}return n=Fr.call(t),r?t[xr]=e:delete t[xr],n}:function(t){return Fr.call(t)},Vr=Boolean.prototype.toString,kr=Or();function Ur(t){return"object"==typeof t&&(t instanceof Q||(kr?function(t){try{return Vr.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Pr(t)))}function Br(t){return Er(t)||Ur(t)}function Nr(){return new Function("return this;")()}Ar(Br,"isPrimitive",Er),Ar(Br,"isObject",Ur);var Cr="object"==typeof self?self:null,Ir="object"==typeof window?window:null,Lr="object"==typeof globalThis?globalThis:null,Gr=function(t){if(arguments.length){if(!Er(t))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Nr()}if(Lr)return Lr;if(Cr)return Cr;if(Ir)return Ir;throw new Error("unexpected error. Unable to resolve global object.")}(),Rr=Gr.document&&Gr.document.childNodes,$r=Int8Array;function Mr(){return/^\s*function\s*([^(]*)/i}var Xr=/^\s*function\s*([^(]*)/i;function Zr(t){return null!==t&&"object"==typeof t}Ar(Mr,"REGEXP",Xr);var Wr=function(t){if("function"!=typeof t)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!wt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Zr);function zr(t){var r,e,n,o;if(("Object"===(e=Pr(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Xr.exec(n.toString()))return r[1]}return Zr(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ar(Zr,"isObjectLikeArray",Wr);var Yr="function"==typeof br||"object"==typeof $r||"function"==typeof Rr?function(t){return zr(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?zr(t).toLowerCase():r};function qr(t){return"function"===Yr(t)}var Dr,Hr=Object,Jr=/./,Kr="function"==typeof Object.defineProperty?Object.defineProperty:null,Qr=Object.defineProperty,te=Object.prototype,re=te.toString,ee=te.__defineGetter__,ne=te.__defineSetter__,oe=te.__lookupGetter__,ie=te.__lookupSetter__;Dr=function(){try{return Kr({},"x",{}),!0}catch(t){return!1}}()?Qr:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===re.call(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===re.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(oe.call(t,r)||ie.call(t,r)?(n=t.__proto__,t.__proto__=te,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ee&&ee.call(t,r,e.get),u&&ne&&ne.call(t,r,e.set),t};var ue=Dr;function ae(t,r,e){ue(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ce(t){return"boolean"==typeof t}var le=Z();function fe(){return le&&"symbol"==typeof Symbol.toStringTag}var pe=Object.prototype.toString,se="function"==typeof H?H.toStringTag:"",ye=fe()?function(t){var r,e,n;if(null==t)return pe.call(t);e=t[se],r=D(t,se);try{t[se]=void 0}catch(r){return pe.call(t)}return n=pe.call(t),r?t[se]=e:delete t[se],n}:function(t){return pe.call(t)},be=Boolean.prototype.toString,ge=fe();function de(t){return"object"==typeof t&&(t instanceof Q||(ge?function(t){try{return be.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===ye(t)))}function ve(t){return ce(t)||de(t)}function we(){return new Function("return this;")()}ae(ve,"isPrimitive",ce),ae(ve,"isObject",de);var he="object"==typeof self?self:null,me="object"==typeof window?window:null,je="object"==typeof globalThis?globalThis:null,_e=function(t){if(arguments.length){if(!ce(t))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return we()}if(je)return je;if(he)return he;if(me)return me;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=_e.document&&_e.document.childNodes,Ae=Int8Array;function Ee(){return/^\s*function\s*([^(]*)/i}var Te=/^\s*function\s*([^(]*)/i;function Oe(t){return null!==t&&"object"==typeof t}ae(Ee,"REGEXP",Te);var Fe=function(t){if("function"!=typeof t)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!wt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Oe);function xe(t){var r,e,n,o;if(("Object"===(e=ye(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Te.exec(n.toString()))return r[1]}return Oe(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}ae(Oe,"isObjectLikeArray",Fe);var Pe,Ve,ke="function"==typeof Jr||"object"==typeof Ae||"function"==typeof Se?function(t){return xe(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?xe(t).toLowerCase():r},Ue=Object.getPrototypeOf;Ve=Object.getPrototypeOf,Pe="function"===ke(Ve)?Ue:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===ye(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Be=Pe,Ne=Object.prototype;function Ce(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!wt(t)}(t)&&(r=function(t){return null==t?null:(t=Hr(t),Be(t))}(t),!r||!D(t,"constructor")&&D(r,"constructor")&&qr(r.constructor)&&"[object Function]"===Pr(r.constructor)&&D(r,"isPrototypeOf")&&qr(r.isPrototypeOf)&&(r===Ne||function(t){var r;for(r in t)if(!D(t,r))return!1;return!0}(t)))}function Ie(t,r){return Ce(r)?(D(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Le(t,r,e){var n,o,i,u;if(!ir(t))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",t));if(!St(r))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",r));if(n={invalid:NaN},arguments.length>2&&(i=Ie(n,e)))throw i;return $(o={},"next",a),$(o,"return",c),yr&&St(t[yr])&&$(o,yr,l),o;function a(){var e;return u?{done:!0}:(e=t.next()).done?(u=!0,e):{value:ur(e.value)?r(e.value):n.invalid,done:!1}}function c(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return Le(t[yr](),r,n)}}var Ge,Re=Z(),$e=Object.prototype.toString,Me="function"==typeof H?H.toStringTag:"",Xe=Re&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return $e.call(t);e=t[Me],r=D(t,Me);try{t[Me]=void 0}catch(r){return $e.call(t)}return n=$e.call(t),r?t[Me]=e:delete t[Me],n}:function(t){return $e.call(t)},Ze="function"==typeof Uint32Array,We="function"==typeof Uint32Array?Uint32Array:null,ze="function"==typeof Uint32Array?Uint32Array:void 0;Ge=function(){var t,r;if("function"!=typeof We)return!1;try{t=function(t){return Ze&&t instanceof Uint32Array||"[object Uint32Array]"===Xe(t)}(r=new We(r=[1,3.14,-3.14,4294967296,4294967297]))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ze:function(){throw new Error("not implemented")};var Ye,qe=Ge,De=Z(),He=Object.prototype.toString,Je="function"==typeof H?H.toStringTag:"",Ke=De&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return He.call(t);e=t[Je],r=D(t,Je);try{t[Je]=void 0}catch(r){return He.call(t)}return n=He.call(t),r?t[Je]=e:delete t[Je],n}:function(t){return He.call(t)},Qe="function"==typeof Float64Array,tn="function"==typeof Float64Array?Float64Array:null,rn="function"==typeof Float64Array?Float64Array:void 0;Ye=function(){var t,r;if("function"!=typeof tn)return!1;try{t=function(t){return Qe&&t instanceof Float64Array||"[object Float64Array]"===Ke(t)}(r=new tn([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?rn:function(){throw new Error("not implemented")};var en,nn=Ye,on=Z(),un=Object.prototype.toString,an="function"==typeof H?H.toStringTag:"",cn=on&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return un.call(t);e=t[an],r=D(t,an);try{t[an]=void 0}catch(r){return un.call(t)}return n=un.call(t),r?t[an]=e:delete t[an],n}:function(t){return un.call(t)},ln="function"==typeof Uint8Array,fn="function"==typeof Uint8Array?Uint8Array:null,pn="function"==typeof Uint8Array?Uint8Array:void 0;en=function(){var t,r;if("function"!=typeof fn)return!1;try{t=function(t){return ln&&t instanceof Uint8Array||"[object Uint8Array]"===cn(t)}(r=new fn(r=[1,3.14,-3.14,256,257]))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?pn:function(){throw new Error("not implemented")};var sn,yn=en,bn=Z(),gn=Object.prototype.toString,dn="function"==typeof H?H.toStringTag:"",vn=bn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return gn.call(t);e=t[dn],r=D(t,dn);try{t[dn]=void 0}catch(r){return gn.call(t)}return n=gn.call(t),r?t[dn]=e:delete t[dn],n}:function(t){return gn.call(t)},wn="function"==typeof Uint16Array,hn="function"==typeof Uint16Array?Uint16Array:null,mn="function"==typeof Uint16Array?Uint16Array:void 0;sn=function(){var t,r;if("function"!=typeof hn)return!1;try{t=function(t){return wn&&t instanceof Uint16Array||"[object Uint16Array]"===vn(t)}(r=new hn(r=[1,3.14,-3.14,65536,65537]))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?mn:function(){throw new Error("not implemented")};var jn,_n={uint16:sn,uint8:yn};(jn=new _n.uint16(1))[0]=4660;var Sn=52===new _n.uint8(jn.buffer)[0],An=!0===Sn?1:0,En=new nn(1),Tn=new qe(En.buffer);function On(t){return En[0]=t,Tn[An]}var Fn,xn=Z(),Pn=Object.prototype.toString,Vn="function"==typeof H?H.toStringTag:"",kn=xn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return Pn.call(t);e=t[Vn],r=D(t,Vn);try{t[Vn]=void 0}catch(r){return Pn.call(t)}return n=Pn.call(t),r?t[Vn]=e:delete t[Vn],n}:function(t){return Pn.call(t)},Un="function"==typeof Float64Array,Bn="function"==typeof Float64Array?Float64Array:null,Nn="function"==typeof Float64Array?Float64Array:void 0;Fn=function(){var t,r;if("function"!=typeof Bn)return!1;try{t=function(t){return Un&&t instanceof Float64Array||"[object Float64Array]"===kn(t)}(r=new Bn([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Nn:function(){throw new Error("not implemented")};var Cn,In=!0===Sn?1:0,Ln=new Fn(1),Gn=new qe(Ln.buffer),Rn=Z(),$n=Object.prototype.toString,Mn="function"==typeof H?H.toStringTag:"",Xn=Rn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n;if(null==t)return $n.call(t);e=t[Mn],r=D(t,Mn);try{t[Mn]=void 0}catch(r){return $n.call(t)}return n=$n.call(t),r?t[Mn]=e:delete t[Mn],n}:function(t){return $n.call(t)},Zn="function"==typeof Float64Array,Wn="function"==typeof Float64Array?Float64Array:null,zn="function"==typeof Float64Array?Float64Array:void 0;Cn=function(){var t,r;if("function"!=typeof Wn)return!1;try{t=function(t){return Zn&&t instanceof Float64Array||"[object Float64Array]"===Xn(t)}(r=new Wn([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?zn:function(){throw new Error("not implemented")};var Yn=!0===Sn?0:1,qn=new Cn(1),Dn=new qe(qn.buffer),Hn=Number.NEGATIVE_INFINITY,Jn=1048575,Kn=.4342944818781689;function Qn(t){var r,e,n,o,i,u,a;return function(t){return t!=t}(t)||t<0?NaN:0===t?Hn:(i=0,(e=On(t))<1048576&&(i-=54,e=On(t*=0x40000000000000)),e>=2146435072?t+t:(i+=(e>>20)-1023|0,u=i+=(o=614244+(e&=1048575)&1048576|0)>>20|0,n=function(t){var r,e,n,o,i,u,a,c,l,f,p;return o=On(t),i=t-1,(Jn&2+o)<3?0===i?0:i*i*(.3333333333333333*i-.5):(f=(o&=Jn)-398458|0,p=440401-o|0,e=(l=(a=(u=i/(2+i))*u)*a)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(l),n=a*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(l),c=n+e,(f|=p)>0?u*((r=.5*i*i)+c)-r:u*(c-i))}(t=function(t,r){return Ln[0]=t,Gn[In]=r>>>0,Ln[0]}(t,e|1072693248^o)),r=function(t,r){return qn[0]=t,Dn[Yn]=r>>>0,qn[0]}(t-=1,0),a=3694239077158931e-28*u+25082946711645275e-27*(t+n),(a+=(t-r+n)*Kn+r*Kn)+.30102999566361177*u))}return function(t){return Le(t,Qn)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterLog10=r();
//# sourceMappingURL=browser.js.map
