(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5,6,7],{249:function(t,s,e){},250:function(t,s,e){},251:function(t,s,e){},382:function(t,s,e){"use strict";var a=e(249);e.n(a).a},383:function(t,s,e){"use strict";e.r(s);e(379),e(380),e(63),e(381),e(388),e(389),e(48),e(64);var a=e(248),n={name:"PostMeta",data:function(){return{clickedTag:null}},methods:{formatAnchor:function(t){return t.toLowerCase()},moment:function(t){return a(t)},taggedPosts:function(t){var s=[];return this.posts.forEach(function(e){e.frontmatter.tags.includes(t)&&s.push(e)}),s}},computed:{posts:function(){return this.$site.pages.filter(function(t){return t.path.match(new RegExp("/blog/.+.html"))}).sort(function(t,s){return new Date(s.frontmatter.date)-new Date(t.frontmatter.date)})}}},r=(e(382),e(47)),o=Object(r.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-layout",{attrs:{column:""}},[e("v-flex",{staticClass:"mx-3 mt-4 mb-2"},[e("div",{staticClass:"display-2 font-weight-bold"},[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),e("div",{staticClass:"body-1"},[t._v("\n            Tags:\n            "),t._l(t.$page.frontmatter.tags,function(s,a){return[t._v("\n                #"),e("a",{key:a,on:{click:function(e){t.clickedTag==s?t.clickedTag=null:t.clickedTag=s}}},[t._v(t._s(s))])]})],2),t._v(" "),t.$page.frontmatter.date?e("div",{staticClass:"body-1"},[t._v("Update: "+t._s(t.moment(t.$page.frontmatter.date).format("YYYY-MM-DD")))]):t._e()]),t._v(" "),t.clickedTag?e("v-flex",{staticClass:"mx-3 mb-4 mt-2"},[e("div",{staticClass:"subheading font-weight-bold"},[t._v("#"+t._s(t.clickedTag))]),t._v(" "),t._l(t.taggedPosts(t.clickedTag),function(s,a){return[e("router-link",{attrs:{to:s.path}},[e("div",[t._v(t._s(s.title))])])]})],2):t._e()],1)},[],!1,null,"41180823",null);o.options.__file="PostMeta.vue";s.default=o.exports},390:function(t,s,e){var a={"./af":252,"./af.js":252,"./ar":253,"./ar-dz":254,"./ar-dz.js":254,"./ar-kw":255,"./ar-kw.js":255,"./ar-ly":256,"./ar-ly.js":256,"./ar-ma":257,"./ar-ma.js":257,"./ar-sa":258,"./ar-sa.js":258,"./ar-tn":259,"./ar-tn.js":259,"./ar.js":253,"./az":260,"./az.js":260,"./be":261,"./be.js":261,"./bg":262,"./bg.js":262,"./bm":263,"./bm.js":263,"./bn":264,"./bn.js":264,"./bo":265,"./bo.js":265,"./br":266,"./br.js":266,"./bs":267,"./bs.js":267,"./ca":268,"./ca.js":268,"./cs":269,"./cs.js":269,"./cv":270,"./cv.js":270,"./cy":271,"./cy.js":271,"./da":272,"./da.js":272,"./de":273,"./de-at":274,"./de-at.js":274,"./de-ch":275,"./de-ch.js":275,"./de.js":273,"./dv":276,"./dv.js":276,"./el":277,"./el.js":277,"./en-SG":278,"./en-SG.js":278,"./en-au":279,"./en-au.js":279,"./en-ca":280,"./en-ca.js":280,"./en-gb":281,"./en-gb.js":281,"./en-ie":282,"./en-ie.js":282,"./en-il":283,"./en-il.js":283,"./en-nz":284,"./en-nz.js":284,"./eo":285,"./eo.js":285,"./es":286,"./es-do":287,"./es-do.js":287,"./es-us":288,"./es-us.js":288,"./es.js":286,"./et":289,"./et.js":289,"./eu":290,"./eu.js":290,"./fa":291,"./fa.js":291,"./fi":292,"./fi.js":292,"./fo":293,"./fo.js":293,"./fr":294,"./fr-ca":295,"./fr-ca.js":295,"./fr-ch":296,"./fr-ch.js":296,"./fr.js":294,"./fy":297,"./fy.js":297,"./ga":298,"./ga.js":298,"./gd":299,"./gd.js":299,"./gl":300,"./gl.js":300,"./gom-latn":301,"./gom-latn.js":301,"./gu":302,"./gu.js":302,"./he":303,"./he.js":303,"./hi":304,"./hi.js":304,"./hr":305,"./hr.js":305,"./hu":306,"./hu.js":306,"./hy-am":307,"./hy-am.js":307,"./id":308,"./id.js":308,"./is":309,"./is.js":309,"./it":310,"./it-ch":311,"./it-ch.js":311,"./it.js":310,"./ja":312,"./ja.js":312,"./jv":313,"./jv.js":313,"./ka":314,"./ka.js":314,"./kk":315,"./kk.js":315,"./km":316,"./km.js":316,"./kn":317,"./kn.js":317,"./ko":318,"./ko.js":318,"./ku":319,"./ku.js":319,"./ky":320,"./ky.js":320,"./lb":321,"./lb.js":321,"./lo":322,"./lo.js":322,"./lt":323,"./lt.js":323,"./lv":324,"./lv.js":324,"./me":325,"./me.js":325,"./mi":326,"./mi.js":326,"./mk":327,"./mk.js":327,"./ml":328,"./ml.js":328,"./mn":329,"./mn.js":329,"./mr":330,"./mr.js":330,"./ms":331,"./ms-my":332,"./ms-my.js":332,"./ms.js":331,"./mt":333,"./mt.js":333,"./my":334,"./my.js":334,"./nb":335,"./nb.js":335,"./ne":336,"./ne.js":336,"./nl":337,"./nl-be":338,"./nl-be.js":338,"./nl.js":337,"./nn":339,"./nn.js":339,"./pa-in":340,"./pa-in.js":340,"./pl":341,"./pl.js":341,"./pt":342,"./pt-br":343,"./pt-br.js":343,"./pt.js":342,"./ro":344,"./ro.js":344,"./ru":345,"./ru.js":345,"./sd":346,"./sd.js":346,"./se":347,"./se.js":347,"./si":348,"./si.js":348,"./sk":349,"./sk.js":349,"./sl":350,"./sl.js":350,"./sq":351,"./sq.js":351,"./sr":352,"./sr-cyrl":353,"./sr-cyrl.js":353,"./sr.js":352,"./ss":354,"./ss.js":354,"./sv":355,"./sv.js":355,"./sw":356,"./sw.js":356,"./ta":357,"./ta.js":357,"./te":358,"./te.js":358,"./tet":359,"./tet.js":359,"./tg":360,"./tg.js":360,"./th":361,"./th.js":361,"./tl-ph":362,"./tl-ph.js":362,"./tlh":363,"./tlh.js":363,"./tr":364,"./tr.js":364,"./tzl":365,"./tzl.js":365,"./tzm":366,"./tzm-latn":367,"./tzm-latn.js":367,"./tzm.js":366,"./ug-cn":368,"./ug-cn.js":368,"./uk":369,"./uk.js":369,"./ur":370,"./ur.js":370,"./uz":371,"./uz-latn":372,"./uz-latn.js":372,"./uz.js":371,"./vi":373,"./vi.js":373,"./x-pseudo":374,"./x-pseudo.js":374,"./yo":375,"./yo.js":375,"./zh-cn":376,"./zh-cn.js":376,"./zh-hk":377,"./zh-hk.js":377,"./zh-tw":378,"./zh-tw.js":378};function n(t){var s=r(t);return e(s)}function r(t){var s=a[t];if(!(s+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=390},391:function(t,s,e){"use strict";var a=e(250);e.n(a).a},392:function(t,s,e){"use strict";var a=e(251);e.n(a).a},393:function(t,s,e){},394:function(t,s,e){"use strict";e.r(s);var a={name:"Home"},n=(e(392),e(47)),r=Object(n.a)(a,function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"home"}},[s("Content")],1)},[],!1,null,"3e5726ec",null);r.options.__file="Home.vue";s.default=r.exports},395:function(t,s,e){"use strict";e.r(s);var a=e(44),n=e.n(a),r={name:"Blog",components:{PostMeta:e(383).default},computed:{postmeta:function(){if(n()(this.$page.frontmatter).length>0)return"PostMeta"}}},o=(e(391),e(47)),i=Object(o.a)(r,function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"blog"}},[s("v-layout",{attrs:{"justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm10:"",md10:"",lg8:"",xl8:""}},[s(this.postmeta,{tag:"component"}),this._v(" "),s("Content")],1)],1)],1)},[],!1,null,"0c44d7b6",null);i.options.__file="Blog.vue";s.default=i.exports},397:function(t,s,e){"use strict";var a=e(393);e.n(a).a},400:function(t,s,e){"use strict";e.r(s);var a=e(394),n=e(395),r={name:"Layout",components:{Home:a.default,Blog:n.default},computed:{layout:function(){var t=this.$page.path;return"/"===t?"Home":"/blog/"===t.slice(0,6)?"Blog":void 0}}},o=(e(397),e(47)),i=Object(o.a)(r,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"layout"}},[e("v-app",{attrs:{id:"main"}},[e("v-flex",{staticClass:"white"},[e("v-toolbar",{staticClass:"#EEEEEE",attrs:{card:""}},[e("v-toolbar-title",[t._v("su79eu7k")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-toolbar-items",[e("v-btn",{attrs:{flat:"",href:"/"}},[t._v("Home")]),t._v(" "),e("v-btn",{attrs:{flat:"",href:"/blog/"}},[t._v("Blog")])],1)],1),t._v(" "),e("v-parallax",{attrs:{dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[e("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[e("div",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Python for Process Innovation")]),t._v(" "),e("div",{staticClass:"subheading"},[t._v("#Python, #Javascript, #SAP, #Automation, #ML, #AI")])])],1),t._v(" "),e(t.layout,{tag:"component"}),t._v(" "),e("v-footer",{staticClass:"mt-0",attrs:{height:"64",color:"#EEEEEE"}},[e("v-layout",{attrs:{"justify-center":""}},[e("div",{staticClass:"caption grey--text"},[t._v("Powered by Vue.js(Vuepress + Vuetify)")])])],1)],1)],1)],1)},[],!1,null,"593c3a53",null);i.options.__file="Layout.vue";s.default=i.exports}}]);