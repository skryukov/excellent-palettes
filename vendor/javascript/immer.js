function n(V){for(var U=arguments.length,W=Array(U>1?U-1:0),G=1;G<U;G++)W[G-1]=arguments[G];if("production"!==process.env.NODE_ENV){var X=Y[V],q=X?"function"==typeof X?X.apply(null,W):X:"unknown error nr: "+V;throw Error("[Immer] "+q)}throw Error("[Immer] minified error nr: "+V+(W.length?" "+W.map((function(V){return"'"+V+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(V){return!!V&&!!V[L]}function t(V){var U;return!!V&&(function(V){if(!V||"object"!=typeof V)return!1;var U=Object.getPrototypeOf(V);if(null===U)return!0;var W=Object.hasOwnProperty.call(U,"constructor")&&U.constructor;return W===Object||"function"==typeof W&&Function.toString.call(W)===Z}(V)||Array.isArray(V)||!!V[H]||!!(null===(U=V.constructor)||void 0===U?void 0:U[H])||s(V)||v(V))}function e(V){return r(V)||n(23,V),V[L].t}function i(V,U,W){void 0===W&&(W=!1),0===o(V)?(W?Object.keys:ee)(V).forEach((function(G){W&&"symbol"==typeof G||U(G,V[G],V)})):V.forEach((function(W,G){return U(G,W,V)}))}function o(V){var U=V[L];return U?U.i>3?U.i-4:U.i:Array.isArray(V)?1:s(V)?2:v(V)?3:0}function u(V,U){return 2===o(V)?V.has(U):Object.prototype.hasOwnProperty.call(V,U)}function a(V,U){return 2===o(V)?V.get(U):V[U]}function f(V,U,W){var G=o(V);2===G?V.set(U,W):3===G?V.add(W):V[U]=W}function c(V,U){return V===U?0!==V||1/V==1/U:V!=V&&U!=U}function s(V){return G&&V instanceof Map}function v(V){return X&&V instanceof Set}function p(V){return V.o||V.t}function l(V){if(Array.isArray(V))return Array.prototype.slice.call(V);var U=te(V);delete U[L];for(var W=ee(U),G=0;G<W.length;G++){var X=W[G],q=U[X];!1===q.writable&&(q.writable=!0,q.configurable=!0),(q.get||q.set)&&(U[X]={configurable:!0,writable:!0,enumerable:q.enumerable,value:V[X]})}return Object.create(Object.getPrototypeOf(V),U)}function d(V,U){return void 0===U&&(U=!1),y(V)||r(V)||!t(V)||(o(V)>1&&(V.set=V.add=V.clear=V.delete=h),Object.freeze(V),U&&i(V,(function(V,U){return d(U,!0)}),!0)),V}function h(){n(2)}function y(V){return null==V||"object"!=typeof V||Object.isFrozen(V)}function b(V){var U=re[V];return U||n(18,V),U}function m(V,U){re[V]||(re[V]=U)}function _(){return"production"===process.env.NODE_ENV||U||n(0),U}function j(V,U){U&&(b("Patches"),V.u=[],V.s=[],V.v=U)}function g(V){O(V),V.p.forEach(S),V.p=null}function O(V){V===U&&(U=V.l)}function w(V){return U={p:[],l:U,h:V,m:!0,_:0}}function S(V){var U=V[L];0===U.i||1===U.i?U.j():U.g=!0}function P(V,U){U._=U.p.length;var W=U.p[0],G=void 0!==V&&V!==W;return U.h.O||b("ES5").S(U,V,G),G?(W[L].P&&(g(U),n(4)),t(V)&&(V=M(U,V),U.l||x(U,V)),U.u&&b("Patches").M(W[L].t,V,U.u,U.s)):V=M(U,W,[]),g(U),U.u&&U.v(U.u,U.s),V!==B?V:void 0}function M(V,U,W){if(y(U))return U;var G=U[L];if(!G)return i(U,(function(X,q){return A(V,G,U,X,q,W)}),!0),U;if(G.A!==V)return U;if(!G.P)return x(V,G.t,!0),G.t;if(!G.I){G.I=!0,G.A._--;var X=4===G.i||5===G.i?G.o=l(G.k):G.o,q=X,B=!1;3===G.i&&(q=new Set(X),X.clear(),B=!0),i(q,(function(U,q){return A(V,G,X,U,q,W,B)})),x(V,X,!1),W&&V.u&&b("Patches").N(G,W,V.u,V.s)}return G.o}function A(V,U,W,G,X,q,B){if("production"!==process.env.NODE_ENV&&X===W&&n(5),r(X)){var H=M(V,X,q&&U&&3!==U.i&&!u(U.R,G)?q.concat(G):void 0);if(f(W,G,H),!r(H))return;V.m=!1}else B&&W.add(X);if(t(X)&&!y(X)){if(!V.h.D&&V._<1)return;M(V,X),U&&U.A.l||x(V,X)}}function x(V,U,W){void 0===W&&(W=!1),!V.l&&V.h.D&&V.m&&d(U,W)}function z(V,U){var W=V[L];return(W?p(W):V)[U]}function I(V,U){if(U in V)for(var W=Object.getPrototypeOf(V);W;){var G=Object.getOwnPropertyDescriptor(W,U);if(G)return G;W=Object.getPrototypeOf(W)}}function k(V){V.P||(V.P=!0,V.l&&k(V.l))}function E(V){V.o||(V.o=l(V.t))}function N(V,U,W){var G=s(U)?b("MapSet").F(U,W):v(U)?b("MapSet").T(U,W):V.O?function(V,U){var W=Array.isArray(V),G={i:W?1:0,A:U?U.A:_(),P:!1,I:!1,R:{},l:U,t:V,k:null,o:null,j:null,C:!1},X=G,q=ne;W&&(X=[G],q=oe);var B=Proxy.revocable(X,q),H=B.revoke,L=B.proxy;return G.k=L,G.j=H,L}(U,W):b("ES5").J(U,W);return(W?W.A:_()).p.push(G),G}function R(V){return r(V)||n(22,V),function n(V){if(!t(V))return V;var U,W=V[L],G=o(V);if(W){if(!W.P&&(W.i<4||!b("ES5").K(W)))return W.t;W.I=!0,U=D(V,G),W.I=!1}else U=D(V,G);return i(U,(function(V,G){W&&a(W.t,V)===G||f(U,V,n(G))})),3===G?new Set(U):U}(V)}function D(V,U){switch(U){case 2:return new Map(V);case 3:return Array.from(V)}return l(V)}function F(){function t(U,W){var G=V[U];return G?G.enumerable=W:V[U]=G={configurable:!0,enumerable:W,get:function(){var V=this[L];return"production"!==process.env.NODE_ENV&&f(V),ne.get(V,U)},set:function(V){var W=this[L];"production"!==process.env.NODE_ENV&&f(W),ne.set(W,U,V)}},G}function e(V){for(var U=V.length-1;U>=0;U--){var W=V[U][L];if(!W.P)switch(W.i){case 5:a(W)&&k(W);break;case 4:o(W)&&k(W)}}}function o(V){for(var U=V.t,W=V.k,G=ee(W),X=G.length-1;X>=0;X--){var q=G[X];if(q!==L){var B=U[q];if(void 0===B&&!u(U,q))return!0;var H=W[q],Q=H&&H[L];if(Q?Q.t!==B:!c(H,B))return!0}}var Y=!!U[L];return G.length!==ee(U).length+(Y?0:1)}function a(V){var U=V.k;if(U.length!==V.t.length)return!0;var W=Object.getOwnPropertyDescriptor(U,U.length-1);if(W&&!W.get)return!0;for(var G=0;G<U.length;G++)if(!U.hasOwnProperty(G))return!0;return!1}function f(V){V.g&&n(3,JSON.stringify(p(V)))}var V={};m("ES5",{J:function(V,U){var W=Array.isArray(V),G=function(V,U){if(V){for(var W=Array(U.length),G=0;G<U.length;G++)Object.defineProperty(W,""+G,t(G,!0));return W}var X=te(U);delete X[L];for(var q=ee(X),B=0;B<q.length;B++){var H=q[B];X[H]=t(H,V||!!X[H].enumerable)}return Object.create(Object.getPrototypeOf(U),X)}(W,V),X={i:W?5:4,A:U?U.A:_(),P:!1,I:!1,R:{},l:U,t:V,k:G,o:null,g:!1,C:!1};return Object.defineProperty(G,L,{value:X,writable:!0}),G},S:function(V,U,W){W?r(U)&&U[L].A===V&&e(V.p):(V.u&&function n(V){if(V&&"object"==typeof V){var U=V[L];if(U){var W=U.t,G=U.k,X=U.R,q=U.i;if(4===q)i(G,(function(V){V!==L&&(void 0!==W[V]||u(W,V)?X[V]||n(G[V]):(X[V]=!0,k(U)))})),i(W,(function(V){void 0!==G[V]||u(G,V)||(X[V]=!1,k(U))}));else if(5===q){if(a(U)&&(k(U),X.length=!0),G.length<W.length)for(var B=G.length;B<W.length;B++)X[B]=!1;else for(var H=W.length;H<G.length;H++)X[H]=!0;for(var Q=Math.min(G.length,W.length),Y=0;Y<Q;Y++)G.hasOwnProperty(Y)||(X[Y]=!0),void 0===X[Y]&&n(G[Y])}}}}(V.p[0]),e(V.p))},K:function(V){return 4===V.i?o(V):a(V)}})}function T(){function e(V){if(!t(V))return V;if(Array.isArray(V))return V.map(e);if(s(V))return new Map(Array.from(V.entries()).map((function(V){return[V[0],e(V[1])]})));if(v(V))return new Set(Array.from(V).map(e));var U=Object.create(Object.getPrototypeOf(V));for(var W in V)U[W]=e(V[W]);return u(V,H)&&(U[H]=V[H]),U}function f(V){return r(V)?e(V):V}var V="add";m("Patches",{$:function(U,W){return W.forEach((function(W){for(var G=W.path,X=W.op,q=U,B=0;B<G.length-1;B++){var H=o(q),L=G[B];"string"!=typeof L&&"number"!=typeof L&&(L=""+L),0!==H&&1!==H||"__proto__"!==L&&"constructor"!==L||n(24),"function"==typeof q&&"prototype"===L&&n(24),"object"!=typeof(q=a(q,L))&&n(15,G.join("/"))}var Q=o(q),Y=e(W.value),Z=G[G.length-1];switch(X){case"replace":switch(Q){case 2:return q.set(Z,Y);case 3:n(16);default:return q[Z]=Y}case V:switch(Q){case 1:return"-"===Z?q.push(Y):q.splice(Z,0,Y);case 2:return q.set(Z,Y);case 3:return q.add(Y);default:return q[Z]=Y}case"remove":switch(Q){case 1:return q.splice(Z,1);case 2:return q.delete(Z);case 3:return q.delete(W.value);default:return delete q[Z]}default:n(17,X)}})),U},N:function(U,W,G,X){switch(U.i){case 0:case 4:case 2:return function(U,W,G,X){var q=U.t,B=U.o;i(U.R,(function(U,H){var L=a(q,U),Q=a(B,U),Y=H?u(q,U)?"replace":V:"remove";if(L!==Q||"replace"!==Y){var Z=W.concat(U);G.push("remove"===Y?{op:Y,path:Z}:{op:Y,path:Z,value:Q}),X.push(Y===V?{op:"remove",path:Z}:"remove"===Y?{op:V,path:Z,value:f(L)}:{op:"replace",path:Z,value:f(L)})}}))}(U,W,G,X);case 5:case 1:return function(U,W,G,X){var q=U.t,B=U.R,H=U.o;if(H.length<q.length){var L=[H,q];q=L[0],H=L[1];var Q=[X,G];G=Q[0],X=Q[1]}for(var Y=0;Y<q.length;Y++)if(B[Y]&&H[Y]!==q[Y]){var Z=W.concat([Y]);G.push({op:"replace",path:Z,value:f(H[Y])}),X.push({op:"replace",path:Z,value:f(q[Y])})}for(var ee=q.length;ee<H.length;ee++){var te=W.concat([ee]);G.push({op:V,path:te,value:f(H[ee])})}q.length<H.length&&X.push({op:"replace",path:W.concat(["length"]),value:q.length})}(U,W,G,X);case 3:return function(U,W,G,X){var q=U.t,B=U.o,H=0;q.forEach((function(U){if(!B.has(U)){var q=W.concat([H]);G.push({op:"remove",path:q,value:U}),X.unshift({op:V,path:q,value:U})}H++})),H=0,B.forEach((function(U){if(!q.has(U)){var B=W.concat([H]);G.push({op:V,path:B,value:U}),X.unshift({op:"remove",path:B,value:U})}H++}))}(U,W,G,X)}},M:function(V,U,W,G){W.push({op:"replace",path:[],value:U===B?void 0:U}),G.push({op:"replace",path:[],value:V})}})}function C(){function r(V,U){function t(){this.constructor=V}a(V,U),V.prototype=(t.prototype=U.prototype,new t)}function e(V){V.o||(V.R=new Map,V.o=new Map(V.t))}function o(V){V.o||(V.o=new Set,V.t.forEach((function(U){if(t(U)){var W=N(V.A.h,U,V);V.p.set(U,W),V.o.add(W)}else V.o.add(U)})))}function u(V){V.g&&n(3,JSON.stringify(p(V)))}var a=function(V,U){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(V,U){V.__proto__=U}||function(V,U){for(var W in U)U.hasOwnProperty(W)&&(V[W]=U[W])})(V,U)},V=function(){function n(V,U){return this[L]={i:2,l:U,A:U?U.A:_(),P:!1,I:!1,o:void 0,R:void 0,t:V,k:this,C:!1,g:!1},this}r(n,Map);var V=n.prototype;return Object.defineProperty(V,"size",{get:function(){return p(this[L]).size}}),V.has=function(V){return p(this[L]).has(V)},V.set=function(V,U){var W=this[L];return u(W),p(W).has(V)&&p(W).get(V)===U||(e(W),k(W),W.R.set(V,!0),W.o.set(V,U),W.R.set(V,!0)),this},V.delete=function(V){if(!this.has(V))return!1;var U=this[L];return u(U),e(U),k(U),U.t.has(V)?U.R.set(V,!1):U.R.delete(V),U.o.delete(V),!0},V.clear=function(){var V=this[L];u(V),p(V).size&&(e(V),k(V),V.R=new Map,i(V.t,(function(U){V.R.set(U,!1)})),V.o.clear())},V.forEach=function(V,U){var W=this;p(this[L]).forEach((function(G,X){V.call(U,W.get(X),X,W)}))},V.get=function(V){var U=this[L];u(U);var W=p(U).get(V);if(U.I||!t(W))return W;if(W!==U.t.get(V))return W;var G=N(U.A.h,W,U);return e(U),U.o.set(V,G),G},V.keys=function(){return p(this[L]).keys()},V.values=function(){var V,U=this,W=this.keys();return(V={})[Q]=function(){return U.values()},V.next=function(){var V=W.next();return V.done?V:{done:!1,value:U.get(V.value)}},V},V.entries=function(){var V,U=this,W=this.keys();return(V={})[Q]=function(){return U.entries()},V.next=function(){var V=W.next();if(V.done)return V;var G=U.get(V.value);return{done:!1,value:[V.value,G]}},V},V[Q]=function(){return this.entries()},n}(),U=function(){function n(V,U){return this[L]={i:3,l:U,A:U?U.A:_(),P:!1,I:!1,o:void 0,t:V,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var V=n.prototype;return Object.defineProperty(V,"size",{get:function(){return p(this[L]).size}}),V.has=function(V){var U=this[L];return u(U),U.o?!!U.o.has(V)||!(!U.p.has(V)||!U.o.has(U.p.get(V))):U.t.has(V)},V.add=function(V){var U=this[L];return u(U),this.has(V)||(o(U),k(U),U.o.add(V)),this},V.delete=function(V){if(!this.has(V))return!1;var U=this[L];return u(U),o(U),k(U),U.o.delete(V)||!!U.p.has(V)&&U.o.delete(U.p.get(V))},V.clear=function(){var V=this[L];u(V),p(V).size&&(o(V),k(V),V.o.clear())},V.values=function(){var V=this[L];return u(V),o(V),V.o.values()},V.entries=function(){var V=this[L];return u(V),o(V),V.o.entries()},V.keys=function(){return this.values()},V[Q]=function(){return this.values()},V.forEach=function(V,U){for(var W=this.values(),G=W.next();!G.done;)V.call(U,G.value,G.value,this),G=W.next()},n}();m("MapSet",{F:function(U,W){return new V(U,W)},T:function(V,W){return new U(V,W)}})}function J(){F(),C(),T()}function K(V){return V}function $(V){return V}var V,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),G="undefined"!=typeof Map,X="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=W?Symbol.for("immer-nothing"):((V={})["immer-nothing"]=!0,V),H=W?Symbol.for("immer-draftable"):"__$immer_draftable",L=W?Symbol.for("immer-state"):"__$immer_state",Q="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(V){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+V},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(V){return"Cannot apply patch, path doesn't resolve: "+V},16:'Sets cannot have "replace" patches.',17:function(V){return"Unsupported patch operation: "+V},18:function(V){return"The plugin for '"+V+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+V+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(V){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+V+"'"},22:function(V){return"'current' expects a draft, got: "+V},23:function(V){return"'original' expects a draft, got: "+V},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,ee="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(V){return Object.getOwnPropertyNames(V).concat(Object.getOwnPropertySymbols(V))}:Object.getOwnPropertyNames,te=Object.getOwnPropertyDescriptors||function(V){var U={};return ee(V).forEach((function(W){U[W]=Object.getOwnPropertyDescriptor(V,W)})),U},re={},ne={get:function(V,U){if(U===L)return V;var W=p(V);if(!u(W,U))return function(V,U,W){var G,X=I(U,W);return X?"value"in X?X.value:null===(G=X.get)||void 0===G?void 0:G.call(V.k):void 0}(V,W,U);var G=W[U];return V.I||!t(G)?G:G===z(V.t,U)?(E(V),V.o[U]=N(V.A.h,G,V)):G},has:function(V,U){return U in p(V)},ownKeys:function(V){return Reflect.ownKeys(p(V))},set:function(V,U,W){var G=I(p(V),U);if(null==G?void 0:G.set)return G.set.call(V.k,W),!0;if(!V.P){var X=z(p(V),U),q=null==X?void 0:X[L];if(q&&q.t===W)return V.o[U]=W,V.R[U]=!1,!0;if(c(W,X)&&(void 0!==W||u(V.t,U)))return!0;E(V),k(V)}return V.o[U]===W&&(void 0!==W||U in V.o)||Number.isNaN(W)&&Number.isNaN(V.o[U])||(V.o[U]=W,V.R[U]=!0),!0},deleteProperty:function(V,U){return void 0!==z(V.t,U)||U in V.t?(V.R[U]=!1,E(V),k(V)):delete V.R[U],V.o&&delete V.o[U],!0},getOwnPropertyDescriptor:function(V,U){var W=p(V),G=Reflect.getOwnPropertyDescriptor(W,U);return G?{writable:!0,configurable:1!==V.i||"length"!==U,enumerable:G.enumerable,value:W[U]}:G},defineProperty:function(){n(11)},getPrototypeOf:function(V){return Object.getPrototypeOf(V.t)},setPrototypeOf:function(){n(12)}},oe={};i(ne,(function(V,U){oe[V]=function(){return arguments[0]=arguments[0][0],U.apply(this,arguments)}})),oe.deleteProperty=function(V,U){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(U))&&n(13),oe.set.call(this,V,U,void 0)},oe.set=function(V,U,W){return"production"!==process.env.NODE_ENV&&"length"!==U&&isNaN(parseInt(U))&&n(14),ne.set.call(this,V[0],U,W,V[0])};var ie=function(){function e(V){var U=this;this.O=q,this.D=!0,this.produce=function(V,W,G){if("function"==typeof V&&"function"!=typeof W){var X=W;W=V;var q=U;return function(V){var U=this;void 0===V&&(V=X);for(var G=arguments.length,B=Array(G>1?G-1:0),H=1;H<G;H++)B[H-1]=arguments[H];return q.produce(V,(function(V){var G;return(G=W).call.apply(G,[U,V].concat(B))}))}}var H;if("function"!=typeof W&&n(6),void 0!==G&&"function"!=typeof G&&n(7),t(V)){var L=w(U),Q=N(U,V,void 0),Y=!0;try{H=W(Q),Y=!1}finally{Y?g(L):O(L)}return"undefined"!=typeof Promise&&H instanceof Promise?H.then((function(V){return j(L,G),P(V,L)}),(function(V){throw g(L),V})):(j(L,G),P(H,L))}if(!V||"object"!=typeof V){if(void 0===(H=W(V))&&(H=V),H===B&&(H=void 0),U.D&&d(H,!0),G){var Z=[],ee=[];b("Patches").M(V,H,Z,ee),G(Z,ee)}return H}n(21,V)},this.produceWithPatches=function(V,W){if("function"==typeof V)return function(W){for(var G=arguments.length,X=Array(G>1?G-1:0),q=1;q<G;q++)X[q-1]=arguments[q];return U.produceWithPatches(W,(function(U){return V.apply(void 0,[U].concat(X))}))};var G,X,q=U.produce(V,W,(function(V,U){G=V,X=U}));return"undefined"!=typeof Promise&&q instanceof Promise?q.then((function(V){return[V,G,X]})):[q,G,X]},"boolean"==typeof(null==V?void 0:V.useProxies)&&this.setUseProxies(V.useProxies),"boolean"==typeof(null==V?void 0:V.autoFreeze)&&this.setAutoFreeze(V.autoFreeze)}var V=e.prototype;return V.createDraft=function(V){t(V)||n(8),r(V)&&(V=R(V));var U=w(this),W=N(this,V,void 0);return W[L].C=!0,O(U),W},V.finishDraft=function(V,U){var W=V&&V[L];"production"!==process.env.NODE_ENV&&(W&&W.C||n(9),W.I&&n(10));var G=W.A;return j(G,U),P(void 0,G)},V.setAutoFreeze=function(V){this.D=V},V.setUseProxies=function(V){V&&!q&&n(20),this.O=V},V.applyPatches=function(V,U){var W;for(W=U.length-1;W>=0;W--){var G=U[W];if(0===G.path.length&&"replace"===G.op){V=G.value;break}}W>-1&&(U=U.slice(W+1));var X=b("Patches").$;return r(V)?X(V,U):this.produce(V,(function(V){return X(V,U)}))},e}(),ae=new ie,ue=ae.produce,ce=ae.produceWithPatches.bind(ae),fe=ae.setAutoFreeze.bind(ae),se=ae.setUseProxies.bind(ae),le=ae.applyPatches.bind(ae),pe=ae.createDraft.bind(ae),he=ae.finishDraft.bind(ae);export{ie as Immer,le as applyPatches,K as castDraft,$ as castImmutable,pe as createDraft,R as current,ue as default,J as enableAllPlugins,F as enableES5,C as enableMapSet,T as enablePatches,he as finishDraft,d as freeze,H as immerable,r as isDraft,t as isDraftable,B as nothing,e as original,ue as produce,ce as produceWithPatches,fe as setAutoFreeze,se as setUseProxies};

