(self.webpackChunkappsheet_app=self.webpackChunkappsheet_app||[]).push([["vendors-node_modules_url-polyfill_url-polyfill_js-node_modules_url-search-params-polyfill_ind-5c5227"],{538264:function(t,e,r){!function(t){var e=function(){try{return!!Symbol.iterator}catch(t){return!1}}(),r=function(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e&&(r[Symbol.iterator]=function(){return r}),r},n=function(t){return encodeURIComponent(t).replace(/%20/g,"+")},o=function(t){return decodeURIComponent(String(t).replace(/\+/g," "))};(function(){try{var e=t.URLSearchParams;return"a=1"===new e("?a=1").toString()&&"function"==typeof e.prototype.set}catch(t){return!1}})()||function(){var o=function(t){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var e=typeof t;if("undefined"===e);else if("string"===e)""!==t&&this._fromString(t);else if(t instanceof o){var r=this;t.forEach((function(t,e){r.append(e,t)}))}else{if(null===t||"object"!==e)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(t))for(var n=0;n<t.length;n++){var i=t[n];if("[object Array]"!==Object.prototype.toString.call(i)&&2===i.length)throw new TypeError("Expected [string, any] as entry at index "+n+" of URLSearchParams's input");this.append(i[0],i[1])}else for(var a in t)t.hasOwnProperty(a)&&this.append(a,t[a])}},i=o.prototype;i.append=function(t,e){t in this._entries?this._entries[t].push(String(e)):this._entries[t]=[String(e)]},i.delete=function(t){delete this._entries[t]},i.get=function(t){return t in this._entries?this._entries[t][0]:null},i.getAll=function(t){return t in this._entries?this._entries[t].slice(0):[]},i.has=function(t){return t in this._entries},i.set=function(t,e){this._entries[t]=[String(e)]},i.forEach=function(t,e){var r;for(var n in this._entries)if(this._entries.hasOwnProperty(n)){r=this._entries[n];for(var o=0;o<r.length;o++)t.call(e,r[o],n,this)}},i.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),r(t)},i.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),r(t)},i.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),r(t)},e&&(i[Symbol.iterator]=i.entries),i.toString=function(){var t=[];return this.forEach((function(e,r){t.push(n(r)+"="+n(e))})),t.join("&")},t.URLSearchParams=o}();var i=t.URLSearchParams.prototype;"function"!=typeof i.sort&&(i.sort=function(){var t=this,e=[];this.forEach((function(r,n){e.push([n,r]),t._entries||t.delete(n)})),e.sort((function(t,e){return t[0]<e[0]?-1:t[0]>e[0]?1:0})),t._entries&&(t._entries={});for(var r=0;r<e.length;r++)this.append(e[r][0],e[r][1])}),"function"!=typeof i._fromString&&Object.defineProperty(i,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(t){if(this._entries)this._entries={};else{var e=[];this.forEach((function(t,r){e.push(r)}));for(var r=0;r<e.length;r++)this.delete(e[r])}var n,i=(t=t.replace(/^\?/,"")).split("&");for(r=0;r<i.length;r++)n=i[r].split("="),this.append(o(n[0]),n.length>1?o(n[1]):"")}})}(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this),function(t){var e,r,n;if(function(){try{var e=new t.URL("b","http://a");return e.pathname="c d","http://a/c%20d"===e.href&&e.searchParams}catch(t){return!1}}()||(e=t.URL,r=function(e,r){"string"!=typeof e&&(e=String(e));var n,o=document;if(r&&(void 0===t.location||r!==t.location.href)){(n=(o=document.implementation.createHTMLDocument("")).createElement("base")).href=r,o.head.appendChild(n);try{if(0!==n.href.indexOf(r))throw new Error(n.href)}catch(t){throw new Error("URL unable to set base "+r+" due to "+t)}}var i=o.createElement("a");if(i.href=e,n&&(o.body.appendChild(i),i.href=i.href),":"===i.protocol||!/:/.test(i.href))throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:i});var a=new t.URLSearchParams(this.search),s=!0,h=!0,c=this;["append","delete","set"].forEach((function(t){var e=a[t];a[t]=function(){e.apply(a,arguments),s&&(h=!1,c.search=a.toString(),h=!0)}})),Object.defineProperty(this,"searchParams",{value:a,enumerable:!0});var u=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==u&&(u=this.search,h&&(s=!1,this.searchParams._fromString(this.search),s=!0))}})},n=r.prototype,["hash","host","hostname","port","protocol"].forEach((function(t){!function(t){Object.defineProperty(n,t,{get:function(){return this._anchorElement[t]},set:function(e){this._anchorElement[t]=e},enumerable:!0})}(t)})),Object.defineProperty(n,"search",{get:function(){return this._anchorElement.search},set:function(t){this._anchorElement.search=t,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(n,{toString:{get:function(){var t=this;return function(){return t.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(t){this._anchorElement.href=t,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(t){this._anchorElement.pathname=t},enumerable:!0},origin:{get:function(){var t={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol],e=this._anchorElement.port!=t&&""!==this._anchorElement.port;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(e?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(t){},enumerable:!0},username:{get:function(){return""},set:function(t){},enumerable:!0}}),r.createObjectURL=function(t){return e.createObjectURL.apply(e,arguments)},r.revokeObjectURL=function(t){return e.revokeObjectURL.apply(e,arguments)},t.URL=r),void 0!==t.location&&!("origin"in t.location)){var o=function(){return t.location.protocol+"//"+t.location.hostname+(t.location.port?":"+t.location.port:"")};try{Object.defineProperty(t.location,"origin",{get:o,enumerable:!0})}catch(e){setInterval((function(){t.location.origin=o()}),100)}}}(void 0!==r.g?r.g:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this)},35449:function(t,e,r){!function(t){"use strict";var e,r=function(){try{if(t.URLSearchParams&&"bar"===new t.URLSearchParams("foo=bar").get("foo"))return t.URLSearchParams}catch(t){}return null}(),n=r&&"a=1"===new r({a:1}).toString(),o=r&&"+"===new r("s=%2B").get("s"),i=!r||((e=new r).append("s"," &"),"s=+%26"===e.toString()),a=u.prototype,s=!(!t.Symbol||!t.Symbol.iterator);if(!(r&&n&&o&&i)){a.append=function(t,e){y(this.__URLSearchParams__,t,e)},a.delete=function(t){delete this.__URLSearchParams__[t]},a.get=function(t){var e=this.__URLSearchParams__;return this.has(t)?e[t][0]:null},a.getAll=function(t){var e=this.__URLSearchParams__;return this.has(t)?e[t].slice(0):[]},a.has=function(t){return b(this.__URLSearchParams__,t)},a.set=function(t,e){this.__URLSearchParams__[t]=[""+e]},a.toString=function(){var t,e,r,n,o=this.__URLSearchParams__,i=[];for(e in o)for(r=f(e),t=0,n=o[e];t<n.length;t++)i.push(r+"="+f(n[t]));return i.join("&")};var h=!!o&&r&&!n&&t.Proxy;Object.defineProperty(t,"URLSearchParams",{value:h?new Proxy(r,{construct:function(t,e){return new t(new u(e[0]).toString())}}):u});var c=t.URLSearchParams.prototype;c.polyfill=!0,c.forEach=c.forEach||function(t,e){var r=d(this.toString());Object.getOwnPropertyNames(r).forEach((function(n){r[n].forEach((function(r){t.call(e,r,n,this)}),this)}),this)},c.sort=c.sort||function(){var t,e,r,n=d(this.toString()),o=[];for(t in n)o.push(t);for(o.sort(),e=0;e<o.length;e++)this.delete(o[e]);for(e=0;e<o.length;e++){var i=o[e],a=n[i];for(r=0;r<a.length;r++)this.append(i,a[r])}},c.keys=c.keys||function(){var t=[];return this.forEach((function(e,r){t.push(r)})),p(t)},c.values=c.values||function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},c.entries=c.entries||function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),p(t)},s&&(c[t.Symbol.iterator]=c[t.Symbol.iterator]||c.entries)}function u(t){((t=t||"")instanceof URLSearchParams||t instanceof u)&&(t=t.toString()),this.__URLSearchParams__=d(t)}function f(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g,(function(t){return e[t]}))}function l(t){return t.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,(function(t){return decodeURIComponent(t)}))}function p(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return s&&(r[t.Symbol.iterator]=function(){return r}),r}function d(t){var e={};if("object"==typeof t)if(m(t))for(var r=0;r<t.length;r++){var n=t[r];if(!m(n)||2!==n.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");y(e,n[0],n[1])}else for(var o in t)t.hasOwnProperty(o)&&y(e,o,t[o]);else{0===t.indexOf("?")&&(t=t.slice(1));for(var i=t.split("&"),a=0;a<i.length;a++){var s=i[a],h=s.indexOf("=");-1<h?y(e,l(s.slice(0,h)),l(s.slice(h+1))):s&&y(e,l(s),"")}}return e}function y(t,e,r){var n="string"==typeof r?r:null!=r&&"function"==typeof r.toString?r.toString():JSON.stringify(r);b(t,e)?t[e].push(n):t[e]=[n]}function m(t){return!!t&&"[object Array]"===Object.prototype.toString.call(t)}function b(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(void 0!==r.g?r.g:"undefined"!=typeof window?window:this)},557147:function(){!function(t){"use strict";if(!t.fetch){var e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,n="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in t,i="ArrayBuffer"in t;if(i)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=function(t){return t&&DataView.prototype.isPrototypeOf(t)},h=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};d.prototype.append=function(t,e){t=f(t),e=l(e);var r=this.map[t];this.map[t]=r?r+","+e:e},d.prototype.delete=function(t){delete this.map[f(t)]},d.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},d.prototype.set=function(t,e){this.map[f(t)]=l(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),p(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),p(t)},r&&(d.prototype[Symbol.iterator]=d.prototype.entries);var c=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},v.call(w.prototype),v.call(S.prototype),S.prototype.clone=function(){return new S(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},S.error=function(){var t=new S(null,{status:0,statusText:""});return t.type="error",t};var u=[301,302,303,307,308];S.redirect=function(t,e){if(-1===u.indexOf(e))throw new RangeError("Invalid status code");return new S(null,{status:e,headers:{location:t}})},t.Headers=d,t.Request=w,t.Response=S,t.fetch=function(t,e){return new Promise((function(r,o){var i=new w(t,e),a=new XMLHttpRequest;a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;r(new S(o,n))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&n&&(a.responseType="blob"),i.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),a.send(void 0===i._bodyInit?null:i._bodyInit)}))},t.fetch.polyfill=!0}function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function m(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function b(t){var e=new FileReader,r=m(e);return e.readAsArrayBuffer(t),r}function _(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(n&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(o&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(i&&n&&s(t))this._bodyArrayBuffer=_(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!i||!ArrayBuffer.prototype.isPrototypeOf(t)&&!h(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=_(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t,e,r,n=y(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=m(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}function w(t,e){var r,n,o=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),c.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function S(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)}}]);
//# sourceMappingURL=/cloud-sources/prod/d4def4cf21be0f46fc6589763b50198f08049d3181aec24d20f0f8d84445d81b.map/