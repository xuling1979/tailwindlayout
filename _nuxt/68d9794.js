(window.webpackJsonp=window.webpackJsonp||[]).push([[34,31],{251:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},methods:{}},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[t.prev?n("div",[n("NuxtLink",{staticClass:"inline-flex items-center",attrs:{to:{name:"ui-slug",params:{slug:t.prev.slug}}}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})]),t._v(" "),n("span",{staticClass:"ml-1 hover:underline"},[t._v(t._s(t.prev.title))])])],1):t._e(),t._v(" "),t.next?n("div",[n("NuxtLink",{staticClass:"inline-flex items-center",attrs:{to:{name:"ui-slug",params:{slug:t.next.slug}}}},[n("span",{staticClass:"mr-1 hover:underline"},[t._v(t._s(t.next.title))]),t._v(" "),n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"}})])])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,n){"use strict";n.r(e);var r=n(18),l=n(7),o=(n(29),{layout:"Page",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,article,o,c,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.params,e.next=3,n("ui",l.slug).fetch();case 3:return article=e.sent,e.next=6,n("ui").only(["title","slug"]).sortBy("title","asc").surround(l.slug).fetch();case 6:return o=e.sent,c=Object(r.a)(o,2),v=c[0],d=c[1],e.abrupt("return",{article:article,prev:v,next:d});case 11:case"end":return e.stop()}}),e)})))()}}),c=n(9),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",{staticClass:"page-header"},[t._v(t._s(t.article.title))]),t._v(" "),t._m(0),t._v(" "),n("nuxt-content",{attrs:{document:t.article}}),t._v(" "),n("div",{staticClass:"mt-6"},[n("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n      bg-gradient-to-l\n      from-indigo-200\n      border border-indigo-200\n      shadow-md\n      p-2\n      rounded-lg\n      mb-10\n    "},[n("a",{staticClass:"hover:underline",attrs:{href:"https://otp.dev"}},[t._v("Need OTP feature in your project? Save yourself the headache by using\n      this "),n("span",{staticClass:"font-bold"},[t._v("crazy simple OTP API")]),t._v(" by GETOTP!")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PrevNext:n(251).default})}}]);