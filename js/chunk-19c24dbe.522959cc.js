(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19c24dbe"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"132d":function(t,e,n){"use strict";n("4804");var a,r=n("7e2b"),s=n("a9ad"),i=n("af2b"),o=n("7560"),l=n("80d2"),c=n("2b0e"),u=n("58df");function h(t){return["fas","far","fal","fab","fad"].some(e=>t.includes(e))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));const d=Object(u["a"])(r["a"],s["a"],i["a"],o["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["w"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["t"])(t).find(e=>t[e]);return e&&a[e]||Object(l["f"])(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],a=this.getDefaultData();let r="material-icons";const s=t.indexOf("-"),i=s<=-1;i?n.push(t):(r=t.slice(0,s),h(r)&&(r="")),a.class[r]=!0,a.class[t]=!i;const o=this.getSize();return o&&(a.style={fontSize:o}),this.applyColors(a),e(this.hasClickListener?"button":this.tag,a,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},a=this.getSize();return a&&(n.style={fontSize:a,height:a,width:a}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},a=this.getSize();a&&(n.style={fontSize:a,height:a,width:a}),this.applyColors(n);const r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=c["a"].extend({name:"v-icon",$_wrapperFor:d,functional:!0,render(t,{data:e,children:n}){let a="";return e.domProps&&(a=e.domProps.textContent||e.domProps.innerHTML||a,delete e.domProps.textContent,delete e.domProps.innerHTML),t(d,e,a?[a]:n)}})},"14c3":function(t,e,n){var a=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"17b3":function(t,e,n){},"21d1":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n("96cf");var a=n("1da1"),r=n("d4ec"),s=n("bee2"),i=n("262e"),o=n("2caf"),l=n("9ab4"),c=n("8d27"),u=n("dcc8"),h=n("0613"),p=function(t){Object(i["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t.user=null,t.permission=null,t.routeUser="/",t}return Object(s["a"])(n,[{key:"autoCreateProfile",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",u["a"].postHttp("/api/profile/create/",e));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getUser",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].getHttp("/api/rest-auth/user/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"loadUser",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getUser();case 2:if(e=t.sent,!e.pk){t.next=10;break}return t.next=6,u["a"].getHttp("/api/account/".concat(e.pk,"/"));case 6:n=t.sent,this.user=e,this.permission=n.is_staff,this.routeUser=n.is_staff?"/admin/home":"/user/home";case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(c["b"]);p=Object(l["a"])([Object(c["a"])({generateMutationSetters:!0})],p);var d=new p({store:h["a"],name:"User"})},4804:function(t,e,n){},"67bc":function(t,e,n){},"7e2b":function(t,e,n){"use strict";var a=n("2b0e");function r(t){return function(e,n){for(const a in n)Object.prototype.hasOwnProperty.call(e,a)||this.$delete(this.$data[t],a);for(const a in e)this.$set(this.$data[t],a,e[a])}}e["a"]=a["a"].extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},"841c":function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),s=n("1d80"),i=n("129f"),o=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=s(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var s=r(t),l=String(this),c=s.lastIndex;i(c,0)||(s.lastIndex=0);var u=o(s,l);return i(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index}]}))},"891e":function(t,e,n){"use strict";n("17b3");var a=n("9d26"),r=n("dc22"),s=n("a9ad"),i=n("de2c"),o=n("7560"),l=n("58df");e["a"]=Object(l["a"])(s["a"],Object(i["a"])({onVisible:["init"]}),o["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const n=e%2===0?1:0,a=Math.floor(e/2),r=this.length-a+1+n;if(this.value>a&&this.value<r){const t=this.value-a+2,e=this.value+a-2-n;return[1,"...",...this.range(t,e),"...",this.length]}if(this.value===a){const t=this.value+a-1-n;return[...this.range(1,t),"...",this.length]}if(this.value===r){const t=this.value-a+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,a),"...",...this.range(r,this.length)]}},watch:{value(){this.init()}},mounted(){this.init()},methods:{init(){this.selected=null,this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const n=[];t=t>0?t:1;for(let a=t;a<=e;a++)n.push(a);return n},genIcon(t,e,n,r,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button","aria-label":s},on:n?{}:{click:r}},[t(a["a"],[e])])])},genItem(t,e){const n=e===this.value&&(this.color||"primary"),a=e===this.value,r=a?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":a,"aria-label":this.$vuetify.lang.t(r,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map((e,n)=>t("li",{key:n},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)]))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},9263:function(t,e,n){"use strict";var a=n("ad6d"),r=n("9f7f"),s=RegExp.prototype.exec,i=String.prototype.replace,o=s,l=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],h=l||u||c;h&&(o=function(t){var e,n,r,o,h=this,p=c&&h.sticky,d=a.call(h),f=h.source,g=0,v=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(t).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==t[h.lastIndex-1])&&(f="(?: "+f+")",v=" "+v,g++),n=new RegExp("^(?:"+f+")",d)),u&&(n=new RegExp("^"+f+"$(?!\\s)",d)),l&&(e=h.lastIndex),r=s.call(p?n:h,v),p?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=h.lastIndex,h.lastIndex+=r[0].length):h.lastIndex=0:l&&r&&(h.lastIndex=h.global?r.index+r[0].length:e),u&&r&&r.length>1&&i.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},"9f7f":function(t,e,n){"use strict";var a=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a9ad:function(t,e,n){"use strict";var a=n("2b0e"),r=n("d9bd"),s=n("7bc6");e["a"]=a["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?(Object(r["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(r["b"])("class must be an object",this),e):(Object(s["d"])(t)?e.style={...e.style,"background-color":""+t,"border-color":""+t}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return Object(r["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(r["b"])("class must be an object",this),e;if(Object(s["d"])(t))e.style={...e.style,color:""+t,"caret-color":""+t};else if(t){const[n,a]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},a&&(e.class["text--"+a]=!0)}return e}}})},ac1f:function(t,e,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},af2b:function(t,e,n){"use strict";var a=n("2b0e");e["a"]=a["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},b381:function(t,e,n){"use strict";n("67bc")},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),s=n("b622"),i=n("9263"),o=n("9112"),l=s("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),h=s("replace"),p=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),d=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,h){var f=s(t),g=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),v=g&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!g||!v||"replace"===t&&(!c||!u||p)||"split"===t&&!d){var b=/./[f],m=n(f,""[t],(function(t,e,n,a,r){return e.exec===i?g&&!r?{done:!0,value:b.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=m[0],y=m[1];a(String.prototype,t,x),a(RegExp.prototype,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}h&&o(RegExp.prototype[f],"sham",!0)}},db8f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("Card")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-100"},[n("div",{staticClass:"w-full bg-cover bg-center ssss",staticStyle:{height:"20rem"}},[n("div",{staticClass:"flex items-center justify-center h-full w-full "},[n("div",{staticClass:"  flex flex-col justify-center items-center",staticStyle:{width:"100%"}},[n("h1",{staticClass:"text-white text-2xl font-semibold uppercase md:text-3xl"},[t._v("ค้นหาใบพันธุ์ประวัติ")]),n("form",{staticClass:"mt-4 w-8/12 md:w-6/12",on:{submit:function(e){return e.preventDefault(),t.run(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],class:t.$xinput,attrs:{type:"text",placeholder:"ค้นหา เช่น ชื่อควาย ชื่อเจ้าของ ชื่อฟาร์ม กลุ่มเกษตรกร จังหวัด อำเภอ ตำบล ของฟาร์ม"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])])]),n("br"),n("div",{staticClass:"px-4 md:px-10 mx-auto w-full overflow-x-auto animate__animated animate__bounceInLeft "},[n("div",{staticClass:"flex flex-wrap justify-center "},t._l(t.buffalos.results,(function(e,a){return n("div",{key:a,staticClass:"w-full p-3 md:w-56 hvr-grow"},[n("div",{staticClass:" w-full bg-white rounded-lg shadow-lg  border-2"},[n("v-img",{staticClass:"rounded-t-lg h-48 w-full",attrs:{src:e.front_image?e.front_image:"https://sv1.picz.in.th/images/2020/11/07/bb198v.jpg"}}),n("div",{staticClass:"p-5"},[n("h1",{staticClass:"text-2xl font-bold text-yellow-800 py-2"},[t._v(t._s(e.name))]),n("h5",{staticClass:"text-gray-500 uppercase font-bold text-xs"},[t._v(" MC/NID : "+t._s(e.microchip)+"/ "+t._s(e.nid)+" ")]),n("h5",{staticClass:"text-gray-500 uppercase font-bold text-xs"},[t._v(" เจ้าของ : "+t._s(e.owner)+" ")]),n("h5",{staticClass:"text-gray-500 uppercase font-bold text-xs"},[t._v(" ฟาร์ม : "+t._s(e.froms)+" ")]),n("h5",{staticClass:"text-gray-500 uppercase font-bold text-xs"},[t._v(" กลุ่ม : "+t._s(e.group)+" ")]),n("hr"),n("h5",{staticClass:"text-gray-500 uppercase font-bold text-xs"},[t._v(" ที่อยู่ : "+t._s(e.address)+" ")]),n("br"),n("button",{class:t.$btn+" f-white rounded p-2 bg-blue-500 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",on:{click:function(n){return t.$router.push("buffalo/public?id="+e.id)}}},[n("v-icon",{staticStyle:{color:"white"}},[t._v("mdi mdi-eye")]),t._v(" ดูรายละเอียด ")],1)])],1)])})),0)]),n("div",{staticClass:"py-2 "},[n("br"),n("br"),n("v-pagination",{staticClass:"transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",attrs:{color:"#4361EE",length:t.allPages,"total-visible":9,circle:""},on:{input:t.handlePageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])},i=[],o=(n("99af"),n("c975"),n("ac1f"),n("841c"),n("96cf"),n("1da1")),l=n("d4ec"),c=n("bee2"),u=n("262e"),h=n("2caf"),p=n("9ab4"),d=n("60a3"),f=n("dcc8"),g=n("21d1"),v=n("25d1"),b=n("d4d8"),m=function(t){Object(u["a"])(n,t);var e=Object(h["a"])(n);function n(){var t;return Object(l["a"])(this,n),t=e.apply(this,arguments),t.user={},t.farm={},t.buffalos=[],t.response=!1,t.page=1,t.allPages=1,t.search="",t}return Object(c["a"])(n,[{key:"created",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.run();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"run",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b["a"].onLoad();case 2:return t.next=4,g["a"].getUser();case 4:return n=t.sent,t.next=7,f["a"].getHttp("/api/account/".concat(n.pk,"/"));case 7:return this.user=t.sent,t.next=10,f["a"].getHttp("/user/buffalo/farm/".concat(n.pk,"/"));case 10:return this.farm=t.sent,t.next=13,f["a"].getHttp("/api/buffalo/all/?search=".concat(this.search));case 13:return this.buffalos=t.sent,this.allPages=Math.ceil((null===(e=this.buffalos)||void 0===e?void 0:e.count)/12),this.response=!0,t.next=18,b["a"].offLoad();case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"handlePageChange",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b["a"].onLoad();case 2:return t.next=4,f["a"].getHttp("/api/buffalo/all/?page=".concat(e,"&search=").concat(this.search));case 4:return this.buffalos=t.sent,t.next=7,b["a"].offLoad();case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(d["c"]);m=Object(p["a"])([Object(d["a"])({components:{MapView:v["a"]},computed:{},props:{color:{default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}}})],m);var x=m,y=x,w=(n("b381"),n("2877")),C=n("6544"),_=n.n(C),$=n("132d"),S=n("adda"),j=n("891e"),I=Object(w["a"])(y,s,i,!1,null,null,null),O=I.exports;_()(I,{VIcon:$["a"],VImg:S["a"],VPagination:j["a"]});var k={name:"search-page",components:{Card:O}},L=k,E=Object(w["a"])(L,a,r,!1,null,null,null);e["default"]=E.exports}}]);
//# sourceMappingURL=chunk-19c24dbe.522959cc.js.map