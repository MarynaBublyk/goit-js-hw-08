!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,s=c||m||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,m=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),m?y(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=p();if(h(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function S(e){return f=void 0,d&&r?y(e):(r=i=void 0,u)}function w(){var e=p(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=E(t)||0,b(n)&&(m=!!n.leading,a=(s="maxWait"in n)?v(E(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?u:S(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j,h,O={formElem:document.querySelector(".feedback-form")};function S(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}O.formElem.addEventListener("input",e(t)((function(e){var t=e.target.name,n=e.target.value;!function(e,t){localStorage.setItem(e,JSON.stringify(t))}(t,n)}),500)),O.formElem.addEventListener("submit",(function(e){e.preventDefault();var t=O.formElem.elements.email.value,n=O.formElem.elements.message.value,r={email:t,message:n};console.log(r),e.target.reset(),localStorage.removeItem("email"),localStorage.removeItem("message")})),j=S("email"),h=S("message"),O.formElem.elements.email.value=j,O.formElem.elements.message.value=h}();
//# sourceMappingURL=03-feedback.a018fbd7.js.map