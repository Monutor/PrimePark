(()=>{var e={348:()=>{var e=new Swiper(".apartments-slider",{loop:!0,slidesPerView:1,autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),t=document.querySelector(".apartments-slider__arrows .slider-arrows__arrow--prev"),n=document.querySelector(".apartments-slider__arrows .slider-arrows__arrow--next");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))},732:()=>{var e=document.querySelector(".header__burger"),t=document.querySelector(".header__text"),n=document.querySelector(".header-menu"),i=document.querySelector(".header-menu__inner");e.addEventListener("click",(function(){n.classList.toggle("header-menu--active"),n.classList.contains("header-menu--active")?(t.style.display="none",e.style.backgroundImage='url("img/icon-burger-close.svg")'):(t.style.display="block",e.style.backgroundImage='url("img/icon-burger.svg")')})),document.addEventListener("click",(function(t){var r=t.target;r!==e&&r!==n&&r!==i&&(n.classList.remove("header-menu--active"),e.style.backgroundImage='url("img/icon-burger.svg")')}))},715:()=>{var e=new Swiper(".business-slider",{autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){}}});document.querySelectorAll(".business-slider__slide").forEach((function(t){var n=t.querySelector(".business-slider__arrows .slider-arrows__arrow--prev"),i=t.querySelector(".business-slider__arrows .slider-arrows__arrow--next");n.addEventListener("click",(function(){e.slidePrev()})),i.addEventListener("click",(function(){e.slideNext()}))}))},233:()=>{var e=new Swiper(".concept-list",{loop:!0,spaceBetween:30,slidesPerView:4,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"},breakpoints:{320:{slidesPerView:2,spaceBetween:35},850:{slidesPerView:4}}}),t=document.querySelector(".concept-list__arrows .slider-arrows__arrow--prev"),n=document.querySelector(".concept-list__arrows .slider-arrows__arrow--next");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()})),document.querySelectorAll(".concept-list__item").forEach((function(e){var t=e.querySelector(".concept-list__link"),n=e.querySelector(".concept-list__close");t.addEventListener("click",(function(){e.classList.add("concept-list__item--active"),e.classList.contains("concept-list__item--active")&&n.addEventListener("click",(function(){e.classList.remove("concept-list__item--active")}))}))}))},903:()=>{var e=new Swiper(".concept-slider",{spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}});document.querySelectorAll(".concept-slider__slide").forEach((function(t){var n=t.querySelector(".concept-slider__arrows .slider-arrows__arrow--prev"),i=t.querySelector(".concept-slider__arrows .slider-arrows__arrow--next");n.addEventListener("click",(function(){e.slidePrev()})),i.addEventListener("click",(function(){e.slideNext()}));var r=t.querySelector(".concept-slider__total"),o=t.querySelector(".concept-slider__current");r.innerHTML=e.slides.length,e.on("slideChange",(function(){var t=++e.realIndex;console.log(t),o.innerHTML=t}))}))},106:()=>{var e=document.querySelector(".header__link"),t=document.querySelector(".return-call__close"),n=document.querySelector(".return-call--popup");e.addEventListener("click",(function(){n.classList.add("return-call--popup-active"),n.classList.contains("return-call--popup-active")&&t.addEventListener("click",(function(){n.classList.remove("return-call--popup-active")}))}))},770:()=>{var e=new Swiper(".environment-slider",{loop:!0,spaceBetween:150,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.querySelectorAll(".environment-slider__slide").forEach((function(t){var n=t.querySelector(".environment-slider__arrows .slider-arrows__arrow--prev"),i=t.querySelector(".environment-slider__arrows .slider-arrows__arrow--next");n.addEventListener("click",(function(){e.slidePrev()})),i.addEventListener("click",(function(){e.slideNext()}))}))},735:()=>{var e=document.querySelector(".main-screen");window.addEventListener("load",(function(){setTimeout((function(){e.style.opacity=0,e.style.visibility="hidden"}),2e3)}))},113:()=>{var e=new Swiper(".location-slider",{loop:!0,slidesPerView:3,centeredSlides:!0,spaceBetween:140,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{spaceBetween:80,slidesPerView:"auto"},850:{spaceBetween:140}}}),t=document.querySelector(".location-slider .slider-arrows__arrow--prev"),n=document.querySelector(".location-slider .slider-arrows__arrow--next");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))},344:()=>{var e=new Swiper(".mission-slider",{loop:!0,slidesPerView:3,centeredSlides:!0,spaceBetween:140,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{spaceBetween:80,slidesPerView:"auto"},850:{spaceBetween:140}}}),t=document.querySelector(".mission-slider__arrows .slider-arrows__arrow--prev"),n=document.querySelector(".mission-slider__arrows .slider-arrows__arrow--next");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))},4:()=>{new Rellax(".rellax",{center:!0})},431:()=>{var e=new Swiper(".parks-slider",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}});document.querySelectorAll(".parks-slider__slide").forEach((function(t){var n=t.querySelector(".parks-slider__arrows .slider-arrows__arrow--prev"),i=t.querySelector(".parks-slider__arrows .slider-arrows__arrow--next");n.addEventListener("click",(function(){e.slidePrev()})),i.addEventListener("click",(function(){e.slideNext()}));var r=t.querySelector(".parks-slider__total"),o=t.querySelector(".parks-slider__current");r.innerHTML=e.slides.length,e.on("slideChange",(function(){var t=++e.realIndex;console.log(t),o.innerHTML=t}))}))},905:()=>{new Swiper(".partners-slider",{spaceBetween:0,centeredSlides:!0,speed:2500,autoplay:{delay:1},loop:!0,slidesPerView:6,allowTouchMove:!1,disableOnInteraction:!0})},341:()=>{var e=new Swiper(".this-slider",{loop:!0,autoplay:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"}}),t=document.querySelector(".this-slider__arrows .slider-arrows__arrow--prev"),n=document.querySelector(".this-slider__arrows .slider-arrows__arrow--next");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))},598:()=>{function e(e){var t=!0,n=!1,i=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function l(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(o(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),l())}),!0),l(),e.addEventListener("focus",(function(e){var n,i,a;o(e.target)&&(t||(i=(n=e.target).type,"INPUT"===(a=n.tagName)&&r[i]&&!n.readOnly||"TEXTAREA"===a&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;o(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)},630:function(e,t){var n,i;n=function(e,t){"use strict";var n,i;function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){return t.indexOf(e)>=0}function a(e,t){for(var n in t)if(null==e[n]){var i=t[n];e[n]=i}return e}function l(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],i=arguments.length<=3||void 0===arguments[3]?null:arguments[3],r=void 0;return null!=document.createEvent?(r=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,i):null!=document.createEventObject?(r=document.createEventObject()).eventType=e:r.eventName=e,r}function c(e,t,n){null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n}function d(e,t,n){null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]}var u=window.WeakMap||window.MozWeakMap||function(){function e(){r(this,e),this.keys=[],this.values=[]}return o(e,[{key:"get",value:function(e){for(var t=0;t<this.keys.length;t++)if(this.keys[t]===e)return this.values[t]}},{key:"set",value:function(e,t){for(var n=0;n<this.keys.length;n++)if(this.keys[n]===e)return this.values[n]=t,this;return this.keys.push(e),this.values.push(t),this}}]),e}(),v=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(i=n=function(){function e(){r(this,e),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return o(e,[{key:"observe",value:function(){}}]),e}(),n.notSupported=!0,i),p=window.getComputedStyle||function(e){var t=/(\-([a-z]){1})/g;return{getPropertyValue:function(n){"float"===n&&(n="styleFloat"),t.test(n)&&n.replace(t,(function(e,t){return t.toUpperCase()}));var i=e.currentStyle;return(null!=i?i[n]:void 0)||null}}},m=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,e),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=a(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new u,this.wowEvent=l(this.config.boxClass)}return o(e,[{key:"init",value:function(){this.element=window.document.documentElement,s(document.readyState,["interactive","complete"])?this.start():c(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var e=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var t=0;t<this.boxes.length;t++){var n=this.boxes[t];this.applyStyle(n,!0)}this.disabled()||(c(this.config.scrollContainer||window,"scroll",this.scrollHandler),c(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live&&new v((function(t){for(var n=0;n<t.length;n++)for(var i=t[n],r=0;r<i.addedNodes.length;r++){var o=i.addedNodes[r];e.doSync(o)}})).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,d(this.config.scrollContainer||window,"scroll",this.scrollHandler),d(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){v.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(e){if(null==e&&(e=this.element),1===e.nodeType)for(var t=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),n=0;n<t.length;n++){var i=t[n];s(i,this.all)||(this.boxes.push(i),this.all.push(i),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(i,!0),this.scrolled=!0)}}},{key:"show",value:function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),t=e,n=this.wowEvent,null!=t.dispatchEvent?t.dispatchEvent(n):n in(null!=t)?t[n]():"on"+n in(null!=t)&&t["on"+n](),c(e,"animationend",this.resetAnimation),c(e,"oanimationend",this.resetAnimation),c(e,"webkitAnimationEnd",this.resetAnimation),c(e,"MSAnimationEnd",this.resetAnimation),e;var t,n}},{key:"applyStyle",value:function(e,t){var n=this,i=e.getAttribute("data-wow-duration"),r=e.getAttribute("data-wow-delay"),o=e.getAttribute("data-wow-iteration");return this.animate((function(){return n.customStyle(e,t,i,r,o)}))}},{key:"resetStyle",value:function(){for(var e=0;e<this.boxes.length;e++)this.boxes[e].style.visibility="visible"}},{key:"resetAnimation",value:function(e){if(e.type.toLowerCase().indexOf("animationend")>=0){var t=e.target||e.srcElement;t.className=t.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(e,t,n,i,r){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),r&&this.vendorSet(e.style,{animationIterationCount:r}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e[""+n]=i;for(var r=0;r<this.vendors.length;r++)e[""+this.vendors[r]+n.charAt(0).toUpperCase()+n.substr(1)]=i}}},{key:"vendorCSS",value:function(e,t){for(var n=p(e),i=n.getPropertyCSSValue(t),r=0;r<this.vendors.length;r++){var o=this.vendors[r];i=i||n.getPropertyCSSValue("-"+o+"-"+t)}return i}},{key:"animationName",value:function(e){var t=void 0;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=p(e).getPropertyValue("animation-name")}return"none"===t?"":t}},{key:"cacheAnimationName",value:function(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var n=this.boxes[t];if(n){if(this.isVisible(n)){this.show(n);continue}e.push(n)}}this.boxes=e,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t}},{key:"isVisible",value:function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=n+Math.min(this.element.clientHeight,"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight)-t,r=this.offsetTop(e),o=r+e.clientHeight;return r<=i&&o>=n}},{key:"disabled",value:function(){return!this.config.mobile&&(e=navigator.userAgent,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));var e}}]),e}();t.default=m,e.exports=t.default},void 0===(i=n.apply(t,[e,t]))||(e.exports=i)}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(598),window,document,document.documentElement,document.body,n(344),n(113),n(341),n(770),n(431),n(903),n(233),n(348),n(715),n(732);var e=n(630);new(n.n(e)())({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0}).init(),n(735),n(4),n(905),n(106)})()})();