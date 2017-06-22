"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","2c512bc3d93da7d192bab4575d092713"],["static/css/main.dc499880.css","71760f1a40f798791e56cd8d011bcd1c"],["static/js/main.5236c174.js","6ce48932ef305b31e607c8d1feeb644c"],["static/media/1.d5a57c71.png","d5a57c715c5c72ba7d7add0e0d84e201"],["static/media/10.9d205b84.png","9d205b849991fc3162f89f89f3361558"],["static/media/11.0991aca2.png","0991aca2dbbe8e47e2e04a0c294231a8"],["static/media/12.6f37b590.png","6f37b5906e8557d1d411ef33bbb8d5f1"],["static/media/2.d0a39411.png","d0a394111716a60dd8d2c58b39d6d0ae"],["static/media/3.b5639b7d.png","b5639b7dc5cf0bc1df64c973c0981b05"],["static/media/4.6738d4a1.png","6738d4a14c8dc2277423575d961ffc3e"],["static/media/5.65e60789.png","65e60789dd1a33d961be13bfb2a0d59e"],["static/media/6.66ffbc0e.png","66ffbc0ebd1509022f0d6d94119ec41c"],["static/media/7.1c628a3e.png","1c628a3e663c30436a4de865139a1707"],["static/media/8.1be4f743.png","1be4f743e44ea7924a8d61f01a19405a"],["static/media/9.10e6a585.png","10e6a58510eb1837f80332030b050146"],["static/media/bb.60c23e64.png","60c23e64b9dcbfb7c89dce915703a79b"],["static/media/bean.f8c8ab65.png","f8c8ab65e98ea6dc617aec80c4f59eac"],["static/media/bf.44c3e28b.png","44c3e28bbf99031a839f8ec74e400a86"],["static/media/bonobo.9bfdd704.png","9bfdd704c9d336931440cedb0622009e"],["static/media/butterfly-1.c1196b8c.png","c1196b8ca684d10d0ded8456789f2017"],["static/media/butterfly-3.0e7fc318.png","0e7fc3186200066132a8298ca2ef1bc3"],["static/media/coffee.5affd748.png","5affd7486fc54088a3a1cedebf68db94"],["static/media/d.8667e16a.png","8667e16afe9b4c9e0a9649d034e6a800"],["static/media/f_4.72aa3871.png","72aa387119420b9829386d25cafd33ab"],["static/media/partners.7f398dc7.png","7f398dc7a1b03c2b13f2c3e10e8f2f2b"],["static/media/rp.a07b4618.png","a07b4618005dc5a51147ddbb455e8c30"],["static/media/salad.a77f5415.png","a77f54152e4db659fb1b5243cb4ca8fd"],["static/media/smile.757fe4c6.png","757fe4c6726db20bc61ff918cccd2564"],["static/media/trees.4bcee2ec.png","4bcee2ec995f48b36bfa9feb876922eb"],["static/media/wrd.e3ea390f.png","e3ea390fabd741612dc1eeb1fe184bfa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});