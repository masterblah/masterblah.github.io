(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{X4f0:function(t,e,i){},aK7f:function(t,e,i){},gEGz:function(t,e,i){"use strict";var a=i("aK7f");i.n(a).a},iyQ6:function(t,e,i){"use strict";i.r(e);var a=i("rePB"),s=i("znP5"),o=i("Wsvf"),r=i("nJNL"),n=i("gucn"),c=i("FmCH"),l=i("LCgK"),u=i("6GHN"),d=i("yIlS"),m=i("qac8"),b=i("WE8c"),g=i("6jVS"),h={components:{SfHeader:n.a,SfLink:c.a,SfFooter:l.a,SfList:u.a,SfImage:d.a,SfButton:m.a,SfMenuItem:b.a,SfSidebar:g.a},data:function(){var t;return t={isSidebarOpen:!1,title:"My Cart",subtitle:"",headingLevel:3,overlay:!0,button:!0,persistent:!1,isMobile:!1,navigation:["women","man","kids"],searchValue:""},Object(a.a)(t,"title","Storefront UI"),Object(a.a)(t,"logo",{mobile:{url:"/assets/logo.svg"},desktop:{url:"/assets/logo.svg"}}),Object(a.a)(t,"activeIcon","account"),Object(a.a)(t,"isSticky",!0),Object(a.a)(t,"searchPlaceholder","Search for items"),Object(a.a)(t,"cartIcon","empty_cart"),Object(a.a)(t,"wishlistIcon","heart"),Object(a.a)(t,"accountIcon","profile"),Object(a.a)(t,"cartItemsQty","0"),Object(a.a)(t,"wishlistItemsQty","0"),Object(a.a)(t,"columns",[{title:"About us",items:["Who we are","Quality in the details","Customer Reviews"]},{title:"Departments",items:["Women fashion","Men fashion","Kidswear","Home"]},{title:"Help",items:["Customer service","Size guide","Contact us"]},{title:"Payment & delivery",items:["Purchase terms","Guarantee"]},{title:"Social",pictures:["facebook","pinterest","twitter","youtube"]}]),Object(a.a)(t,"column",4),Object(a.a)(t,"multiple",!1),Object(a.a)(t,"open",["About us","Help","Social"]),t}},f=(i("qIVM"),i("KHd+")),p=Object(f.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("SfHeader",{class:t.customClass,style:t.spacer,attrs:{title:t.title,logo:t.logo,"active-icon":t.activeIcon,"search-placeholder":t.searchPlaceholder,"search-value":t.searchValue,"cart-icon":t.cartIcon,"wishlist-icon":t.wishlistIcon,"is-sticky":t.isSticky,"account-icon":t.accountIcon,"cart-items-qty":t.cartItemsQty,"wishlist-items-qty":t.wishlistItemsQty},on:{"click:cart":function(e){t.isSidebarOpen=!0},"click:wishlist":function(e){return t.alert("@click:wishlist")},"click:account":function(e){return t.alert("@click:account")},"change:search":function(e){t.searchValue=e}},scopedSlots:t._u([{key:"navigation",fn:function(){return t._l(t.navigation,(function(e){return i("SfHeaderNavigationItem",{key:e},[i("template",{slot:"desktop-navigation-item"},[i("SfLink",{attrs:{href:"#"}},[t._v(t._s(e))])],1)],2)}))},proxy:!0}])}),i("div",[i("SfSidebar",{staticClass:"sf-sidebar--right",class:t.customClass,attrs:{visible:t.isSidebarOpen,title:t.title,subtitle:t.subtitle,"heading-level":t.headingLevel,button:t.button,overlay:t.overlay,persistent:t.persistent},on:{close:function(e){t.isSidebarOpen=!1}}},[t._v("\n  Total items: 0\n")]),t._t("default")],2),i("SfFooter",{staticClass:"sb-footer",attrs:{column:t.column,multiple:t.multiple,open:t.open}},t._l(t.columns,(function(e){return i("SfFooterColumn",{key:e.title,attrs:{title:e.title}},[e.items?i("SfList",t._l(e.items,(function(t){return i("SfListItem",{key:t},[i("SfMenuItem",{attrs:{label:t}})],1)})),1):i("div",{staticClass:"sb-footer__social"},t._l(e.pictures,(function(t){return i("SfImage",{key:t,staticClass:"sb-social-icon",attrs:{width:"12",height:"12",src:"/assets/storybook/SfFooter/"+t+".svg"}})})),1)],1)})),1)],1)}),[],!1,null,null,null).exports,v=i("EJSs"),S={components:{SfHero:s.a,Layout:p,Pager:o.a,Post:r.a,SfProductCard:v.a},metaInfo:{title:"Welcome to my blog :)"},data:function(){var t;return t={title:"Colorful summer dresses are already in store",subtitle:"Summer Collection 2019",buttonText:"Learn more",image:{mobile:"https://picsum.photos/200/300",desktop:"https://picsum.photos/1200/600"},prodImage:{mobile:{url:"https://picsum.photos/200/300"},desktop:{url:"https://picsum.photos/400/326"}},background:"#ECEFF1",imageWidth:400,imageHeight:326,badgeLabel:"-50%",badgeColor:"color-primary"},Object(a.a)(t,"title","Cotton Sweater"),Object(a.a)(t,"link",""),Object(a.a)(t,"linkTag",""),Object(a.a)(t,"scoreRating",4),Object(a.a)(t,"maxRating",5),Object(a.a)(t,"reviewsCount",7),Object(a.a)(t,"regularPrice","$10.99"),Object(a.a)(t,"specialPrice","$5.09"),Object(a.a)(t,"wishlistIcon","heart"),Object(a.a)(t,"isOnWishlistIcon","heart_fill"),Object(a.a)(t,"isOnWishlist",!1),Object(a.a)(t,"showAddToCartButton",!0),Object(a.a)(t,"isAddedToCart",!1),Object(a.a)(t,"addToCartDisabled",!1),t}},k=(i("gEGz"),null),y=Object(f.a)(S,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("SfHero",{style:{margin:"auto"}},[i("SfHeroItem",{class:t.customClass,attrs:{title:t.title,subtitle:t.subtitle,"button-text":t.buttonText,image:t.image,background:t.background}}),i("SfHeroItem",{class:t.customClass,attrs:{title:"Colorful summer dresses are already in store",subtitle:"Summer Collection 2019","button-text":"Learn more",image:"/assets/storybook/SfHero/hero.png",background:"#FCE4EC"}})],1),i("div",{staticClass:"container"},[i("SfProductCard",{attrs:{image:t.prodImage,"image-width":t.imageWidth,"image-height":t.imageHeight,"badge-label":t.badgeLabel,"badge-color":t.badgeColor,title:t.title,link:t.link,"link-tag":t.linkTag,"score-rating":t.scoreRating,"max-rating":t.maxRating,"reviews-count":t.reviewsCount,"regular-price":t.regularPrice,"special-price":t.specialPrice,"wishlist-icon":t.wishlistIcon,"is-on-wishlist-icon":t.isOnWishlistIcon,"is-on-wishlist":t.isOnWishlist,"show-add-to-cart-button":t.showAddToCartButton,"add-to-cart-disabled":t.addToCartDisabled,"is-added-to-cart":t.isAddedToCart},on:{"click:is-added-to-cart":function(e){return t.alert("@click:is-added-to-cart")},"click:wishlist":function(e){return t.alert("@click:wishlist")},"click:reviews":function(e){return t.alert("@click:reviews")}}})],1),i("div",{staticClass:"container"},[i("h1",[t._v("Welcome to my blog :)")]),i("ClientOnly",[i("input",{attrs:{type:"text"}})]),i("ul",{staticClass:"post-list"},t._l(t.$page.allWordPressPost.edges,(function(t){var e=t.node;return i("li",{key:e.id},[i("Post",{attrs:{post:e}})],1)})),0),i("Pager",{attrs:{info:t.$page.allWordPressPost.pageInfo}})],1)],1)}),[],!1,null,null,null);"function"==typeof k&&k(y);e.default=y.exports},nJNL:function(t,e,i){"use strict";var a={props:{post:{type:Object,required:!0}}},s=i("KHd+"),o=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.title)}}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),e("g-link",{attrs:{to:this.post.path}},[this._v("\n    Read More\n  ")])],1)}),[],!1,null,null,null);e.a=o.exports},qIVM:function(t,e,i){"use strict";var a=i("X4f0");i.n(a).a}}]);