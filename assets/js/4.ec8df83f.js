(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{521:function(t,e,n){},522:function(t,e,n){},523:function(t,e,n){},527:function(t,e,n){},528:function(t,e,n){"use strict";n(37),n(46),n(59),n(529),n(160);var o=n(33),a={props:{pageInfo:{type:Object,default:function(){return{}}},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},data:function(){return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}},filters:{formatDateValue:function(t){if(!t)return"";t=t.replace("T"," ").slice(0,t.lastIndexOf("."));var e=Number(t.substr(11,2)),n=Number(t.substr(14,2)),a=Number(t.substr(17,2));return e>0||n>0||a>0?Object(o.f)(t):Object(o.f)(t,"yyyy-MM-dd")}},methods:{goTags:function(t){this.$route.path!=="/tag/".concat(t,"/")&&this.$router.push({path:"/tag/".concat(t,"/")})}}},r=(n(531),n(4)),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-info"},[t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title?n("i",{staticClass:"iconfont reco-account"},[n("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?n("i",{staticClass:"iconfont reco-date"},[n("span",[t._v(t._s(t._f("formatDateValue")(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?n("i",{staticClass:"iconfont reco-eye"},[n("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?n("i",{staticClass:"iconfont reco-tag tags"},t._l(t.pageInfo.frontmatter.tags,(function(e,o){return n("span",{key:o,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(n){return n.stopPropagation(),t.goTags(e)}}},[t._v(t._s(e))])})),0):t._e()])}),[],!1,null,"0efa1f05",null);e.a=i.exports},529:function(t,e,n){var o=n(2),a=n(530);o({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},530:function(t,e,n){"use strict";var o=n(23),a=n(60),r=n(16),i=n(47),s=Math.min,c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0,l=i("lastIndexOf"),d=u||!l;t.exports=d?function(t){if(u)return c.apply(this,arguments)||0;var e=o(this),n=r(e.length),i=n-1;for(arguments.length>1&&(i=s(i,a(arguments[1]))),i<0&&(i=n+i);i>=0;i--)if(i in e&&e[i]===t)return i||0;return-1}:c},531:function(t,e,n){"use strict";n(521)},532:function(t,e,n){"use strict";n(522)},533:function(t,e,n){"use strict";n(523)},534:function(t,e,n){"use strict";n(278);e.a={methods:{_getStoragePage:function(){var t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",{page:1,path:""}),1):parseInt(e.page)},_setStoragePage:function(t){var e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}}},535:function(t,e,n){"use strict";n(37);var o={components:{PageInfo:n(528).a},props:["item","currentPage","currentTag"]},a=(n(532),n(4)),r={components:{NoteAbstractItem:Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"abstract-item",on:{click:function(e){return t.$router.push(t.item.path)}}},[t.item.frontmatter.sticky?n("i",{staticClass:"iconfont reco-sticky"}):t._e(),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[t.item.frontmatter.keys?n("i",{staticClass:"iconfont reco-lock"}):t._e(),t._v(" "),n("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),n("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),n("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)])}),[],!1,null,"23a98133",null).exports},props:["data","currentPage","currentTag"],computed:{currentPageData:function(){var t=10*this.currentPage-10,e=10*this.currentPage;return this.data.slice(t,e)}}},i=(n(533),Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"abstract-wrapper"},t._l(t.currentPageData,(function(e){return n("NoteAbstractItem",{key:e.path,attrs:{item:e,currentPage:t.currentPage,currentTag:t.currentTag}})})),1)}),[],!1,null,"166365f0",null));e.a=i.exports},538:function(t,e,n){"use strict";n(527)},539:function(t,e,n){"use strict";var o=n(36),a=(n(158),n(159)),r={props:{currentTag:{type:String,default:""}},computed:{tags:function(){return[{name:this.$recoLocales.tag.all,path:"/tag/"}].concat(Object(o.a)(this.$tags.list))}},methods:{tagClick:function(t){this.$emit("getCurrentTag",t)},getOneColor:a.a}},i=(n(538),n(4)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags"},t._l(t.tags,(function(e,o){return n("span",{key:o,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(n){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"361d6d7c",null);e.a=s.exports},563:function(t,e,n){},564:function(t,e,n){},565:function(t,e,n){},566:function(t,e,n){},567:function(t,e,n){},568:function(t,e,n){},603:function(t,e,n){"use strict";n(563)},604:function(t,e,n){"use strict";n(564)},605:function(t,e,n){t.exports=function(t){function e(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return t[o].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=(o(n(1)),n(6)),i=o(r),s=o(n(7)),c=o(n(8)),u=o(n(9)),l=o(n(10)),d=o(n(11)),f=o(n(14)),m=[],p=!1,h={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t&&(p=!0),p)return m=(0,d.default)(m,h),(0,l.default)(m,h.once),m},g=function(){m=(0,f.default)(),v()};t.exports={init:function(t){h=a(h,t),m=(0,f.default)();var e=document.all&&!window.atob;return function(t){return!0===t||"mobile"===t&&u.default.mobile()||"phone"===t&&u.default.phone()||"tablet"===t&&u.default.tablet()||"function"==typeof t&&!0===t()}(h.disable)||e?void m.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")})):(h.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),h.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",h.easing),document.querySelector("body").setAttribute("data-aos-duration",h.duration),document.querySelector("body").setAttribute("data-aos-delay",h.delay),"DOMContentLoaded"===h.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===h.startEvent?window.addEventListener(h.startEvent,(function(){v(!0)})):document.addEventListener(h.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,h.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,h.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)((function(){(0,l.default)(m,h.once)}),h.throttleDelay)),h.disableMutationObserver||c.default.ready("[data-aos]",g),m)},refresh:v,refreshHard:g}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function n(t,e,n){function a(e){var n=f,o=m;return f=m=void 0,b=e,h=t.apply(o,n)}function i(t){return b=t,v=setTimeout(u,e),C?a(t):h}function c(t){var n=t-g;return void 0===g||n>=e||n<0||k&&t-b>=p}function u(){var t=_();return c(t)?l(t):void(v=setTimeout(u,function(t){var n=e-(t-g);return k?w(n,p-(t-b)):n}(t)))}function l(t){return v=void 0,$&&f?a(t):(f=m=void 0,h)}function d(){var t=_(),n=c(t);if(f=arguments,m=this,g=t,n){if(void 0===v)return i(g);if(k)return v=setTimeout(u,e),a(g)}return void 0===v&&(v=setTimeout(u,e)),h}var f,m,p,h,v,g,b=0,C=!1,k=!1,$=!0;if("function"!=typeof t)throw new TypeError(s);return e=r(e)||0,o(n)&&(C=!!n.leading,p=(k="maxWait"in n)?y(r(n.maxWait)||0,e):p,$="trailing"in n?!!n.trailing:$),d.cancel=function(){void 0!==v&&clearTimeout(v),b=0,f=g=m=v=void 0},d.flush=function(){return void 0===v?h:l(_())},d}function o(t){var e=void 0===t?"undefined":i(t);return!!t&&("object"==e||"function"==e)}function a(t){return"symbol"==(void 0===t?"undefined":i(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":i(t))}(t)&&b.call(t)==u}function r(t){if("number"==typeof t)return t;if(a(t))return c;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=f.test(t);return n||m.test(t)?p(t.slice(2),n?2:8):d.test(t)?c:+t}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s="Expected a function",c=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,h="object"==(void 0===e?"undefined":i(e))&&e&&e.Object===Object&&e,v="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,g=h||v||Function("return this")(),b=Object.prototype.toString,y=Math.max,w=Math.min,_=function(){return g.Date.now()};t.exports=function(t,e,a){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(s);return o(a)&&(r="leading"in a?!!a.leading:r,i="trailing"in a?!!a.trailing:i),n(t,e,{leading:r,maxWait:e,trailing:i})}}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function n(t){var e=void 0===t?"undefined":r(t);return!!t&&("object"==e||"function"==e)}function o(t){return"symbol"==(void 0===t?"undefined":r(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":r(t))}(t)&&g.call(t)==c}function a(t){if("number"==typeof t)return t;if(o(t))return s;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var a=d.test(t);return a||f.test(t)?m(t.slice(2),a?2:8):l.test(t)?s:+t}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="Expected a function",s=NaN,c="[object Symbol]",u=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,p="object"==(void 0===e?"undefined":r(e))&&e&&e.Object===Object&&e,h="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,v=p||h||Function("return this")(),g=Object.prototype.toString,b=Math.max,y=Math.min,w=function(){return v.Date.now()};t.exports=function(t,e,o){function r(e){var n=f,o=m;return f=m=void 0,_=e,h=t.apply(o,n)}function s(t){return _=t,v=setTimeout(u,e),C?r(t):h}function c(t){var n=t-g;return void 0===g||n>=e||n<0||k&&t-_>=p}function u(){var t=w();return c(t)?l(t):void(v=setTimeout(u,function(t){var n=e-(t-g);return k?y(n,p-(t-_)):n}(t)))}function l(t){return v=void 0,$&&f?r(t):(f=m=void 0,h)}function d(){var t=w(),n=c(t);if(f=arguments,m=this,g=t,n){if(void 0===v)return s(g);if(k)return v=setTimeout(u,e),r(g)}return void 0===v&&(v=setTimeout(u,e)),h}var f,m,p,h,v,g,_=0,C=!1,k=!1,$=!0;if("function"!=typeof t)throw new TypeError(i);return e=a(e)||0,n(o)&&(C=!!o.leading,p=(k="maxWait"in o)?b(a(o.maxWait)||0,e):p,$="trailing"in o?!!o.trailing:$),d.cancel=function(){void 0!==v&&clearTimeout(v),_=0,f=g=m=v=void 0},d.flush=function(){return void 0===v?h:l(w())},d}}).call(e,function(){return this}())},function(t,e){"use strict";function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes);if(function t(e){var n=void 0,o=void 0;for(n=0;n<e.length;n+=1){if((o=e[n]).dataset&&o.dataset.aos)return!0;if(o.children&&t(o.children))return!0}return!1}(e.concat(n)))return a()}))}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){};e.default={isSupported:function(){return!!n()},ready:function(t,e){var r=window.document,i=new(n())(o);a=e,i.observe(r.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(t,e){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return o(t,[{key:"phone",value:function(){var t=n();return!(!a.test(t)&&!r.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=n();return!(!i.test(t)&&!s.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=window.pageYOffset,o=window.innerHeight;t.forEach((function(t,a){!function(t,e,n){var o=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&t.node.classList.remove("aos-animate")}(t,o+n,e)}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(12));e.default=function(t,e){return t.forEach((function(t,n){t.node.classList.add("aos-init"),t.position=(0,o.default)(t.node,e.offset)})),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(13));e.default=function(t,e){var n=0,a=0,r=window.innerHeight,i={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(a=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(t=document.querySelectorAll(i.anchor)[0]),n=(0,o.default)(t).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=t.offsetHeight/2;break;case"bottom-bottom":n+=t.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+t.offsetHeight;break;case"center-center":n+=r/2+t.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=t.offsetHeight+r;break;case"center-top":n+=t.offsetHeight/2+r}return i.anchorPlacement||i.offset||isNaN(e)||(a=e),n+a}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,(function(t){return{node:t}}))}}])},606:function(t,e,n){"use strict";n(565)},607:function(t,e,n){"use strict";n(566)},608:function(t,e,n){"use strict";n(567)},609:function(t){t.exports=JSON.parse('{"a":"1.5.5"}')},610:function(t,e,n){"use strict";n(568)},618:function(t,e,n){"use strict";n.r(e);var o=n(540),a=n(525),r=n(524),i={mixins:[r.a],components:{NavLink:o.a,ModuleTransition:a.a},computed:{actionLink:function(){return{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}}},s=(n(603),n(4)),c=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[n("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?n("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?n("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco"))]):t._e()]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?n("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?n("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(e,o){return n("div",{key:o,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.32"}},[n("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,u=(n(81),n(38),n(27),n(539)),l=n(11),d=(n(61),n(555)),f=n.n(d),m=n(159),p={data:function(){return{popupWindowStyle:{},isPC:!0}},mounted:function(){/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.isPC=!1:this.isPC=!0},computed:{dataAddColor:function(){var t=this.$themeConfig.friendLink;return t&&t.length>0?t=t.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{color:Object(m.a)()})})):[]}},methods:{getMd5:function(t){return f()(t)},showDetail:function(t){var e=this,n=t.target,o=n.querySelector(".popup-window-wrapper"),a=n.querySelector(".popup-window"),r=document.querySelector(".info-wrapper");o.style.display="block";var i=n.clientWidth,s=a.clientWidth,c=a.clientHeight;if(this.isPC)this.popupWindowStyle={left:(i-s)/2+"px",top:-c+"px"},r.style.overflow="visible",this.$nextTick((function(){e._adjustPosition(n.querySelector(".popup-window"))}));else{var u=function(t){var e=document,n=t.getBoundingClientRect(),o=n.left,a=n.top;return{left:o+=e.documentElement.scrollLeft||e.body.scrollLeft,top:a+=e.documentElement.scrollTop||e.body.scrollTop}};r.style.overflow="hidden";var l=u(n).left-u(r).left;this.popupWindowStyle={left:-l+(r.clientWidth-a.clientWidth)/2+"px",top:-c+"px"}}},hideDetail:function(t){t.target.querySelector(".popup-window-wrapper").style.display="none"},getImgUrl:function(t){var e=t.logo,n=t.email;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?this.$withBase(e):"//1.gravatar.com/avatar/".concat(this.getMd5(n||""),"?s=50&amp;d=mm&amp;r=x")},_adjustPosition:function(t){var e=document.body.offsetWidth,n=t.getBoundingClientRect(),o=e-(n.x+n.width);if(o<0){var a=t.offsetLeft;this.popupWindowStyle=Object(l.a)(Object(l.a)({},this.popupWindowStyle),{},{left:a+o+"px"})}}}},h=(n(604),Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(e,o){return n("div",{key:o,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[n("span",{staticClass:"list-style",style:{backgroundColor:e.color}}),t._v("\n    "+t._s(e.title)+"\n    "),n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"popup-window-wrapper"},[n("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:t.getImgUrl(e)}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("a",{staticClass:"btn-go",style:{backgroundColor:e.color},attrs:{href:e.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),e.desc?n("p",[t._v(t._s(e.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"35b399cf",null).exports),v=n(535),g=n(534),b=n(575),y=n(605),w=n.n(y),_={mixins:[g.a,r.a],components:{NoteAbstract:v.a,TagList:u.a,FriendLink:h,ModuleTransition:a.a,PersonalInfo:b.a},data:function(){return{recoShow:!1,currentPage:1,tags:[]}},computed:{homeBlogCfg:function(){return this.$recoLocales.homeBlog},actionLink:function(){var t=this.$frontmatter;return{link:t.actionLink,text:t.actionText}},motto:function(){return this.$themeConfig.mottos[(new Date).getDay()]||{zh:"愿你保持初心和善良,笑里尽是温暖与坦荡。",en:"May you keep your original heart and kindness, and smile with warmth and magnanimity."}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{}},bgImageStyle:function(){},heroHeight:function(){return document.querySelector(".hero").clientHeight}},mounted:function(){this.recoShow=!0,this._setPage(this._getStoragePage()),w.a.init()},methods:{getCurrentPage:function(t){var e=this;this._setPage(t),setTimeout((function(){window.scrollTo(0,e.heroHeight)}),100)},getPages:function(){var t=this.$site.pages;t=t.filter((function(t){var e=t.frontmatter,n=e.home,o=e.date;return!(1==n||void 0===o)})),this.pages=0==t.length?[]:t},getPagesByTags:function(t){this.$router.push({path:t.path})},_setPage:function(t){this.currentPage=t,this.$page.currentPage=t,this._setStoragePage(t)},getOneColor:m.a}},C=(n(606),Object(s.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-blog"},[n("div",{staticClass:"hero",style:Object.assign({},t.bgImageStyle)},[n("div",{staticClass:"motto"},[n("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?n("img",{staticClass:"hero-img",style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.04",duration:"0.5"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?n("h1",{staticClass:"longcang"},[t._v("\n          "+t._s(t.motto.zh||t.$frontmatter.heroText||t.$title||"Ax")+"\n        ")]):t._e()]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.08",duration:"0.5"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?n("p",{staticClass:"description"},[t._v("\n          "+t._s(t.motto.en||t.$frontmatter.tagline||t.$description||"Welcome to your Ax site")+"\n        ")]):t._e()]),t._v(" "),n("a",{staticClass:"scroll-down bounce-enter-active down-arrow",attrs:{href:"#anchor"}})],1)]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.16"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper",attrs:{id:"anchor"}},[n("div",{staticClass:"blog-list"},[n("note-abstract",{attrs:{data:t.$recoPosts,currentPage:t.currentPage}}),t._v(" "),n("pagation",{staticClass:"pagation",attrs:{total:t.$recoPosts.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1),t._v(" "),n("div",{staticClass:"info-wrapper"},[n("PersonalInfo"),t._v(" "),n("h4",[n("i",{staticClass:"iconfont reco-category"}),t._v(" "+t._s(t.homeBlogCfg.category))]),t._v(" "),n("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,o){return n("li",{key:o,staticClass:"category-item"},[n("router-link",{attrs:{to:e.path}},[n("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(e.pages.length))])])],1)})),0),t._v(" "),n("hr"),t._v(" "),0!==t.$tags.list.length?n("h4",[n("i",{staticClass:"iconfont reco-tag"}),t._v(" "+t._s(t.homeBlogCfg.tag))]):t._e(),t._v(" "),n("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?n("h4",[n("i",{staticClass:"iconfont reco-friend"}),t._v(" "+t._s(t.homeBlogCfg.friendLink))]):t._e(),t._v(" "),n("FriendLink")],1)])]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.24"}},[n("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),k=(n(46),n(59),n(528)),$=n(33),x=n(79),S=n(36),O=(n(158),{computed:{headers:function(){return this.$showSubSideBar?this.$page.headers:[]}},methods:{isLinkActive:function(t){var e=Object($.g)(this.$route,this.$page.path+"#"+t.slug);return e&&setTimeout((function(){document.querySelector(".reco-".concat(t.slug)).scrollIntoView()}),300),e}},render:function(t){var e=this;return t("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},Object(S.a)(this.headers.map((function(n){return t("li",{class:Object(x.a)({active:e.isLinkActive(n)},"level-".concat(n.level),!0),attr:{key:n.title}},[t("router-link",{class:Object(x.a)({"sidebar-link":!0},"reco-".concat(n.slug),!0),props:{to:"".concat(e.$page.path,"#").concat(n.slug)}},n.title)])}))))}}),T=(n(607),Object(s.a)(O,void 0,void 0,!1,null,"3f16d8a9",null).exports);function M(t,e,n){var o=[];!function t(e,n){for(var o=0,a=e.length;o<a;o++)"group"===e[o].type?t(e[o].children||[],n):n.push(e[o])}(e,o);for(var a=0;a<o.length;a++){var r=o[a];if("page"===r.type&&r.path===decodeURIComponent(t.path))return o[a+n]}}var j={mixins:[r.a],components:{PageInfo:k.a,ModuleTransition:a.a,SubSidebar:T},props:["sidebarItems"],data:function(){return{isHasKey:!0}},computed:{shouldShowComments:function(){var t=this.$frontmatter.isShowComments,e=(this.$themeConfig.valineConfig||{showComment:!0}).showComment;return!1!==e&&!1!==t||!1===e&&!0===t},showAccessNumber:function(){var t=this.$themeConfig.valineConfig,e=this.$themeLocaleConfig.valineConfig||t;return!(!e||0==e.visitor)},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$themeConfig.lastUpdated?this.$themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$frontmatter.prev;return!1===n?void 0:n?Object($.m)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,M(t,e,-1))},next:function(){var t,e,n=this.$frontmatter.next;return!1===n?void 0:n?Object($.m)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,M(t,e,1))},editLink:function(){if(!1===this.$frontmatter.editLink)return!1;var t=this.$themeConfig,e=t.repo,n=t.editLinks,o=t.docsDir,a=void 0===o?"":o,r=t.docsBranch,i=void 0===r?"master":r,s=t.docsRepo,c=void 0===s?e:s;return c&&n&&this.$page.relativePath?this.createEditLink(e,c,a,i,this.$page.relativePath):""},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$themeConfig.editLinkText||"Edit this page"},pageStyle:function(){return this.$showSubSideBar?{}:{paddingRight:"0"}}},created:function(){},methods:{createEditLink:function(t,e,n,o,a){return/bitbucket.org/.test(t)?($.k.test(e)?e:t).replace($.d,"")+"/src"+"/".concat(o,"/")+(n?n.replace($.d,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(o,"&fileviewer=file-view-default"):($.k.test(e)?e:"https://github.com/".concat(e)).replace($.d,"")+"/edit"+"/".concat(o,"/")+(n?n.replace($.d,"")+"/":"")+a}}},P=(n(608),Object(s.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page",style:t.pageStyle},[n("ModuleTransition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule&&t.$page.title,expression:"recoShowModule && $page.title"}],staticClass:"page-title"},[n("h1",{staticClass:"title"},[t._v(t._s(t.$page.title))]),t._v(" "),n("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1)]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.08"}},[n("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"theme-reco-content"})],1),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.16"}},[n("footer",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&(t.prev||t.next)?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n          ←\n          "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v("\n          →\n        ")],1):t._e()])]):t._e()]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule?n("Comments",{attrs:{isShowComments:t.shouldShowComments}}):t._e()],1),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule?n("SubSidebar",{staticClass:"side-bar"}):t._e()],1)],1)}),[],!1,null,null,null).exports),L=n(609),I={data:function(){return{version:L.a}},computed:{showAccessNumber:function(){var t=this.$themeConfig.valineConfig,e=this.$themeLocaleConfig.valineConfig||t;return!(!e||0==e.visitor)}}},N=(n(610),Object(s.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-wrapper"},[n("span",[n("i",{staticClass:"iconfont reco-theme"}),t._v(" "),n("a",{attrs:{target:"blank",href:"http://vuepress-theme-reco.recoluan.com"}},[t._v(t._s("reco"+t.version))])]),t._v(" "),t.$themeConfig.record?n("span",[n("i",{staticClass:"iconfont reco-beian"}),t._v(" "),n("a",{attrs:{href:t.$themeConfig.recordLink||"https://beian.miit.gov.cn/"}},[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),n("span",[n("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),n("a",[t.$themeConfig.author||t.$site.title?n("span",[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear&&t.$themeConfig.startYear!=(new Date).getFullYear()?n("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s((new Date).getFullYear())+"\n    ")])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showAccessNumber,expression:"showAccessNumber"}]},[n("i",{staticClass:"iconfont reco-eye"}),t._v(" "),n("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?n("p",{staticClass:"cyber-security"},[n("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),n("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e(),t._v(" "),n("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"32d63810",null).exports),A={components:{HomeBlog:C,Home:c,Page:P,Common:n(536).a,Footer:N},computed:{sidebarItems:function(){return Object($.n)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},homeCom:function(){var t=this.$themeConfig.type;return void 0!==t?"blog"==t?"HomeBlog":t:"Home"},all:function(){var t=this.$frontmatter.all;return void 0!==t&&t}}},E=(n(526),Object(s.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{sidebarItems:t.sidebarItems,all:t.all}},[t.$frontmatter.home?n(t.homeCom,{tag:"component"}):n("Page",{attrs:{"sidebar-items":t.sidebarItems}}),t._v(" "),t.$frontmatter.home?n("Footer",{staticClass:"footer"}):t._e()],1)}),[],!1,null,null,null));e.default=E.exports}}]);