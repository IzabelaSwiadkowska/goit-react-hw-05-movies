/*! For license information please see 779.d79e1008.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{265:function(t,r,e){e.d(r,{Hx:function(){return h},OT:function(){return l},Sf:function(){return u},Y5:function(){return s},xc:function(){return f}});var n=e(861),o=e(243);function a(){a=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(Z){s=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var a=r&&r.prototype instanceof p?r:p,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:L(t,e,c)}),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=l;var h={};function p(){}function v(){}function d(){}var g={};s(g,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==r&&e.call(m,i)&&(g=m);var x=d.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,a,i,c){var u=f(t[n],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):r.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=k(i,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function k(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,k(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=d,n(x,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new b(l(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),s(x,u,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:S(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var i="38567b7c3359452d13704f8cb740efcb",c="https://api.themoviedb.org/3",u=function(){var t=(0,n.Z)(a().mark((function t(){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(i,"&page=1"));case 3:return r=t.sent,e=r.data,t.abrupt("return",e);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.toString());case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/movie/").concat(r,"?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.toString());case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/search/movie?api_key=").concat(i,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.toString());case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/movie/").concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.toString());case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/movie/").concat(r,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.toString());case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}()},779:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n,o=e(439),a=e(689),i=e(791),c=e(265),u=e(168),s=e(867).ZP.div(n||(n=(0,u.Z)(["\nfont-family:'Muli';\n font-size: 20px;\n color: grey;\n letter-spacing: 1px;\n  display: flex;\n  padding: 30px;\n  border-radius: 10px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  flex-direction: column;\n  align-items: center;\n    background-color: rgba(0, 0, 0, 0.5);\n"]))),l=e(184),f=function(){var t=(0,a.UO)().movieId,r=(0,i.useState)([]),e=(0,o.Z)(r,2),n=e[0],u=e[1];return(0,i.useEffect)((function(){(0,c.Hx)(t).then((function(t){var r=t.results;return u(r)}))}),[t]),n<1?(0,l.jsx)(s,{children:" Sorry, we don't have any reviews! "}):(0,l.jsx)(s,{children:n.map((function(t){return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h3",{children:["Author: ",t.author]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Content:"})," ",t.content]}),(0,l.jsx)("hr",{})]},t.id)}))})}}}]);
//# sourceMappingURL=779.d79e1008.chunk.js.map