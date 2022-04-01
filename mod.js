// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(c.call(r,t)||f.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,m=/./;var d=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,A=_;var g=function(r){return A.call(r)},h=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&h.call(r,t)},U="function"==typeof Symbol?Symbol.toStringTag:"",E=O,S=U,P=_;var F=g,N=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=E(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},T=j()?N:F,x=Boolean.prototype.toString;var V=T,B=function(r){try{return x.call(r),!0}catch(r){return!1}},G=j();var I=function(r){return"object"==typeof r&&(r instanceof Boolean||(G?B(r):"[object Boolean]"===V(r)))},k=d,M=I;var C=s,L=function(r){return k(r)||M(r)},R=I;C(L,"isPrimitive",d),C(L,"isObject",R);var X="object"==typeof self?self:null,z="object"==typeof window?window:null,D=L.isPrimitive,Y=function(){return new Function("return this;")()},q=X,H=z,J=r(Object.freeze({__proto__:null}));var K=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Y()}if(q)return q;if(H)return H;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")},Q=K(),W=Q.document&&Q.document.childNodes,Z=Int8Array,$=m,rr=W,tr=Z;var nr=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var er=function(){return/^\s*function\s*([^(]*)/i},or=er;s(or,"REGEXP",er());var ur=or,ir=T;var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)},cr=ar;var fr=function(r){return null!==r&&"object"==typeof r};s(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!cr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(fr));var lr=fr;var yr=T,vr=ur.REGEXP,pr=function(r){return lr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var br=function(r){var t,n,e;if(("Object"===(n=yr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=vr.exec(e.toString()))return t[1]}return pr(r)?"Buffer":n},sr=br;var mr=br;var dr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t},wr=function(r){return mr(r).toLowerCase()},jr=nr()?wr:dr;var _r=function(r){return"function"===jr(r)},Ar=_r;var gr=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Ar(r.next)};var hr=function(r){return"number"==typeof r},Or=Number,Ur=Or.prototype.toString;var Er=T,Sr=Or,Pr=function(r){try{return Ur.call(r),!0}catch(r){return!1}},Fr=j();var Nr=function(r){return"object"==typeof r&&(r instanceof Sr||(Fr?Pr(r):"[object Number]"===Er(r)))},Tr=hr,xr=Nr;var Vr=s,Br=function(r){return Tr(r)||xr(r)},Gr=Nr;Vr(Br,"isPrimitive",hr),Vr(Br,"isObject",Gr);var Ir=Br,kr=O;var Mr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&kr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Cr=ar;var Lr=function(r){return"object"==typeof r&&null!==r&&!Cr(r)},Rr=Object.getPrototypeOf;var Xr=function(r){return r.__proto__},zr=T,Dr=Xr;var Yr=function(r){var t=Dr(r);return t||null===t?t:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},qr=Rr,Hr=Yr,Jr=_r(Object.getPrototypeOf)?qr:Hr;var Kr=Lr,Qr=_r,Wr=function(r){return null==r?null:(r=Object(r),Jr(r))},Zr=O,$r=T,rt=Object.prototype;var tt=function(r){var t;return!!Kr(r)&&(!(t=Wr(r))||!Zr(r,"constructor")&&Zr(t,"constructor")&&Qr(t.constructor)&&"[object Function]"===$r(t.constructor)&&Zr(t,"isPrototypeOf")&&Qr(t.isPrototypeOf)&&(t===rt||function(r){var t;for(t in r)if(!Zr(r,t))return!1;return!0}(r)))},nt=tt,et=O;var ot=s,ut=_r,it=gr,at=Ir.isPrimitive,ct=Mr,ft=function(r,t){return nt(t)?(et(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var lt=function r(t,n,e){var o,u,i,a;if(!it(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ut(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=ft(o,e)))throw i;return ot(u={},"next",c),ot(u,"return",f),ct&&ut(t[ct])&&ot(u,ct,l),u;function c(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:at(r.value)?n(r.value):o.invalid,done:!1}}function f(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[ct](),n,o)}},yt=lt,vt=T,pt="function"==typeof Uint32Array;var bt="function"==typeof Uint32Array?Uint32Array:null,st=function(r){return pt&&r instanceof Uint32Array||"[object Uint32Array]"===vt(r)},mt=bt;var dt=function(){var r,t;if("function"!=typeof mt)return!1;try{t=new mt(t=[1,3.14,-3.14,4294967296,4294967297]),r=st(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var wt="function"==typeof Uint32Array?Uint32Array:void 0,jt=function(){throw new Error("not implemented")},_t=dt()?wt:jt,At=T,gt="function"==typeof Float64Array;var ht="function"==typeof Float64Array?Float64Array:null,Ot=function(r){return gt&&r instanceof Float64Array||"[object Float64Array]"===At(r)},Ut=ht;var Et=function(){var r,t;if("function"!=typeof Ut)return!1;try{t=new Ut([1,3.14,-3.14,NaN]),r=Ot(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var St="function"==typeof Float64Array?Float64Array:void 0,Pt=function(){throw new Error("not implemented")},Ft=Et()?St:Pt,Nt=T,Tt="function"==typeof Uint8Array;var xt="function"==typeof Uint8Array?Uint8Array:null,Vt=function(r){return Tt&&r instanceof Uint8Array||"[object Uint8Array]"===Nt(r)},Bt=xt;var Gt=function(){var r,t;if("function"!=typeof Bt)return!1;try{t=new Bt(t=[1,3.14,-3.14,256,257]),r=Vt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var It="function"==typeof Uint8Array?Uint8Array:void 0,kt=function(){throw new Error("not implemented")},Mt=Gt()?It:kt,Ct=T,Lt="function"==typeof Uint16Array;var Rt="function"==typeof Uint16Array?Uint16Array:null,Xt=function(r){return Lt&&r instanceof Uint16Array||"[object Uint16Array]"===Ct(r)},zt=Rt;var Dt=function(){var r,t;if("function"!=typeof zt)return!1;try{t=new zt(t=[1,3.14,-3.14,65536,65537]),r=Xt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Yt,qt="function"==typeof Uint16Array?Uint16Array:void 0,Ht=function(){throw new Error("not implemented")},Jt={uint16:Dt()?qt:Ht,uint8:Mt};(Yt=new Jt.uint16(1))[0]=4660;var Kt=52===new Jt.uint8(Yt.buffer)[0],Qt=_t,Wt=!0===Kt?1:0,Zt=new Ft(1),$t=new Qt(Zt.buffer);var rn=function(r){return Zt[0]=r,$t[Wt]},tn=_t,nn=!0===Kt?1:0,en=new Ft(1),on=new tn(en.buffer);var un=function(r,t){return en[0]=r,on[nn]=t>>>0,en[0]},an=un,cn=_t,fn=!0===Kt?0:1,ln=new Ft(1),yn=new cn(ln.buffer);var vn=function(r,t){return ln[0]=r,yn[fn]=t>>>0,ln[0]},pn=vn;var bn=function(r){return r!=r},sn=Or.NEGATIVE_INFINITY;var mn=rn,dn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},wn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))};var jn=function(r){var t,n,e,o,u,i,a,c,f,l;return o=r-1,(1048575&2+(e=mn(r)))<3?0===o?0:o*o*(.3333333333333333*o-.5):(f=(e&=1048575)-398458|0,l=440401-e|0,n=(c=(i=(u=o/(2+o))*u)*i)*dn(c),a=i*wn(c)+n,(f|=l)>0?u*((t=.5*o*o)+a)-t:u*(a-o))},_n=rn,An=an,gn=pn,hn=bn,On=sn,Un=jn;var En=function(r){var t,n,e,o,u,i,a;return hn(r)||r<0?NaN:0===r?On:(u=0,(n=_n(r))<1048576&&(u-=54,n=_n(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,r=An(r,(n&=1048575)|1072693248^(o=n+614244&1048576|0)),i=u+=o>>20|0,e=Un(r),a=3694239077158931e-28*i+25082946711645275e-27*((r-=1)+e),(a+=.4342944818781689*(r-(t=gn(r,0))+e)+.4342944818781689*t)+.30102999566361177*i))},Sn=yt,Pn=En;var Fn=function(r){return Sn(r,Pn)},Nn=Fn;export{Nn as default};
//# sourceMappingURL=mod.js.map
