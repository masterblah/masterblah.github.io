(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Nkoh:function(t,a){t.exports={type:"image",mimeType:"image/webp",src:"/assets/static/main.d042d20.71af1a275822af924b6f40b26df0c5a4.webp",size:{width:400,height:172},sizes:"(max-width: 400px) 100vw, 400px",srcset:["/assets/static/main.d042d20.71af1a275822af924b6f40b26df0c5a4.webp 400w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 400 172' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-84a9d9783dd946c4da84aa9dca412a6e'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-84a9d9783dd946c4da84aa9dca412a6e)' width='400' height='172' xlink:href='data:image/webp%3bbase64%2cUklGRgICAABXRUJQVlA4IPYBAADQCQCdASpAABwAPm0wlEckIqIhJAyQgA2JYwC9i/6NnVgN5gfLV%2bBcBmeHVzP80qkDN6mUQu6p35gtVswnofJJk37YLe4cCw8waW6ECnYt1eoH1p6hWYAA/vi2UZnezwsn0LougH%2b28t43AWoNNDsbGc5bWTn1C7kxXxo7X9iVSntvn/d768/O%2bgUHrmTG8ELBl3Q%2bLurpzPPs/VMUzeJSNJGF5%2bF7ezjo0gwjaGaiRO%2bTPUHph8O/p28Pz4AGmJUqTb6fUZuc9tMAHIExzGwdo4U2XaZuaXiZm37S/DAkAQPya60L5Bls46dF6vZiH8%2bw/m/aD1ss%2b7YfmWoaQjpeIR7i33/CXL0WWKSyzpaTZGx0xDdYXb7LGl%2bznw9Z8z0QWhJgwKUbe7cy7VoawWhf/HxkdXU/itWg4CX4ukoVPYtijJBTM%2bLHf8pXm%2b8Mu6AbRxubYVv9SzmvbGkclofy53jJ4cReanAbYZZ%2b3rLHU1qFRCd9dmWFv7Eh6utAkJuJVvv4Cx9uH7so6HjRAy74boIgHScn93bfzhtY5Y4ZEkc9FNxYwYXgAdi%2b03pGNXPcVFPieLCyhYsHGzQ/X/U/CzQB1QZswjD30Xt0YtTTwkM%2bBWzL9gzIyL0xtOCLMLnQ/3AkG9xVavmWC/HgpYDAiTvjIAAA' /%3e%3c/svg%3e"}},Wsvf:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("Kw5r");var s=e("DOVJ"),i=(e("Y6W1"),e("ma9I"),e("2B1R"),e("qePV"),e("rB9j"),e("UxlC"),e("VTBJ")),r=e("fVfk"),n={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,n=a.data,o=a.parent,c=e.info,p=e.showLinks,u=e.showNavigation,d=e.ariaLabel,g=function(t,a){var e=t.currentPage,s=void 0===e?1:e,i=t.totalPages,r=void 0===i?1:i,n=Math.ceil(a/2),l=Math.floor(s-n),o=Math.floor(s+n);r<=a?(l=0,o=r):s<=n?(l=0,o=a):s+n>=r&&(l=r-a,o=r);for(var c=[],p=l+1;p<=o;p++)c.push(p);return{current:s,total:r,start:l,end:o,pages:c}}(c,e.range),f=g.current,b=g.total,v=g.pages,h=g.start,w=g.end,L=Object(r.d)(o.$route),C=function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===f&&(n=e.ariaCurrentLabel);var c={to:l(L,a),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,o],attrs:Object(i.a)(Object(i.a)({},c),{},{"aria-label":n.replace("%n",a),"aria-current":f===a})},[r])},x=p?v.map((function(t){return C(t,t,e.ariaLinkLabel)})):[];if(u){var m=e.firstLabel,y=e.prevLabel,k=e.nextLabel,P=e.lastLabel,A=e.ariaFirstLabel,S=e.ariaPrevLabel,G=e.ariaNextLabel,N=e.ariaLastLabel,T=e.firstClass,j=e.prevClass,H=e.nextClass,J=e.lastClass,z=e.navClass;f>1&&x.unshift(C(f-1,y,S,[j,z])),h>0&&x.unshift(C(1,m,A,[T,z])),f<b&&x.push(C(f+1,k,G,[H,z])),w<b&&x.push(C(b,P,N,[J,z]))}return x.length<2?null:t("nav",Object(i.a)(Object(i.a)({},n),{},{attrs:{role:"navigation","aria-label":d}}),x)}};function l(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(r.g)(t)+"/".concat(a).concat(e):t}e("6NbQ")},aIsG:function(t,a,e){"use strict";e.r(a);var s=e("Wsvf"),i=e("nJNL"),r={components:{Pager:s.a,Post:i.a},metaInfo:function(){return{title:this.$page.wordPressPostTag.title}}},n=e("KHd+"),l=null,o=Object(n.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("h1",[this._v("Tag: "+this._s(this.$page.wordPressPostTag.title)+" ")]),a("ul",{staticClass:"post-list"},this._l(this.$page.wordPressPostTag.belongsTo.edges,(function(t){var e=t.node;return a("li",{key:e.id},[a("Post",{attrs:{post:e}})],1)})),0),a("Pager",{attrs:{info:this.$page.wordPressPostTag.belongsTo.pageInfo}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(o);a.default=o.exports},nJNL:function(t,a,e){"use strict";var s={props:{post:{type:Object,required:!0}}},i=e("KHd+"),r=Object(i.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"border flex flex-col"},[a("div",{staticClass:"relative"},[a("g-image",{staticClass:"mx-auto",attrs:{src:e("Nkoh"),width:"400"}})],1),a("div",{staticClass:"content flex-grow  py-3 px-2"},[a("div",{staticClass:"title w-full"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-2xl",domProps:{innerHTML:this._s(this.post.title)}})]),a("div",{staticClass:"description"},[a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}})])]),a("div",{staticClass:"separetor w-full border"}),a("div",{staticClass:"action flex flex-wrap"},[a("button",{staticClass:"p-2"},[this._v("share")]),a("div",{staticClass:"flex-auto"}),a("g-link",{attrs:{to:this.post.path}},[a("button",{staticClass:"p-2"},[this._v("Read more")])])],1)])}),[],!1,null,null,null);a.a=r.exports}}]);