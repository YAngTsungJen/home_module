(function(e){function t(t){for(var s,c,d=t[0],o=t[1],n=t[2],r=0,b=[];r<d.length;r++)c=d[r],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&b.push(l[c][0]),l[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);p&&p(t);while(b.length)b.shift()();return i.push.apply(i,n||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,c=1;c<a.length;c++){var d=a[c];0!==l[d]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},c={app:0},l={app:0},i=[];function d(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b69ea303","chunk-d5b24514":"daf4498e"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-d5b24514":1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var s="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-d5b24514":"b036e5c1"}[e]+".css",l=o.p+s,i=document.getElementsByTagName("link"),d=0;d<i.length;d++){var n=i[d],r=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===s||r===l))return t()}var b=document.getElementsByTagName("style");for(d=0;d<b.length;d++){n=b[d],r=n.getAttribute("data-href");if(r===s||r===l)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var s=t&&t.target&&t.target.src||l,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete c[e],p.parentNode.removeChild(p),a(i)},p.href=l;var u=document.getElementsByTagName("head")[0];u.appendChild(p)})).then((function(){c[e]=0})));var s=l[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,a){s=l[e]=[t,a]}));t.push(s[2]=i);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.src=d(e);var b=new Error;n=function(t){r.onerror=r.onload=null,clearTimeout(p);var a=l[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+s+": "+c+")",b.name="ChunkLoadError",b.type=s,b.request=c,a[1](b)}l[e]=void 0}};var p=setTimeout((function(){n({type:"timeout",target:r})}),12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/home_module/dist/",o.oe=function(e){throw console.error(e),e};var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=t,n=n.slice();for(var b=0;b<n.length;b++)t(n[b]);var p=r;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"158a":function(e,t,a){e.exports=a.p+"img/house-17.e19a51ef.jpeg"},"1ce3":function(e,t,a){e.exports=a.p+"img/house-9.44ad892b.jpeg"},"1e70":function(e,t,a){e.exports=a.p+"img/house-10.1c141d11.jpeg"},"1ef5":function(e,t,a){e.exports=a.p+"img/instagram-alt.23a2fba6.svg"},"24a7":function(e,t,a){e.exports=a.p+"img/location.d13e9f80.png"},"35d4":function(e,t,a){e.exports=a.p+"img/house-5.d5400e37.jpeg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23"),c={id:"nav"};function l(e,t,a,l,i,d){var o=Object(s["s"])("Navbar"),n=Object(s["s"])("Banner"),r=Object(s["s"])("Content"),b=Object(s["s"])("Footer"),p=Object(s["s"])("router-view");return Object(s["o"])(),Object(s["c"])("div",null,[Object(s["d"])("div",c,[Object(s["f"])(o),Object(s["f"])(n),Object(s["f"])(r),Object(s["f"])(b)]),Object(s["d"])("div",null,[Object(s["f"])(p)])])}var i={class:"navbar navbar-expand-md navbar-dark bg-dark fixed-top py-0 py-md-2"},d={class:"container-fluid container-md px-0 px-md-2"},o=Object(s["d"])("h1",{class:"navbar-logo text-white"}," 新森活 ",-1),n=Object(s["d"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(s["d"])("span",{class:"navbar-toggler-icon"})],-1),r={class:"collapse navbar-collapse",id:"navbarNav"},b={class:"navbar-nav ms-auto"},p={class:"nav-item"},u=Object(s["e"])("建案簡介"),j={class:"nav-item"},m=Object(s["e"])("建築賞心"),g={class:"nav-item"},O=Object(s["e"])("周邊環境");function h(e,t){var a=Object(s["s"])("router-link");return Object(s["o"])(),Object(s["c"])("div",null,[Object(s["d"])("nav",i,[Object(s["d"])("div",d,[o,n,Object(s["d"])("div",r,[Object(s["d"])("ul",b,[Object(s["d"])("li",p,[Object(s["f"])(a,{class:"nav-link",to:"/"},{default:Object(s["w"])((function(){return[u]})),_:1})]),Object(s["d"])("li",j,[Object(s["f"])(a,{class:"nav-link",to:"/about"},{default:Object(s["w"])((function(){return[m]})),_:1})]),Object(s["d"])("li",g,[Object(s["f"])(a,{class:"nav-link",to:"/vueslick"},{default:Object(s["w"])((function(){return[O]})),_:1})])])])])])])}const f={};f.render=h;var v=f,x=a("d32f"),w=a.n(x),y=a("1ef5"),k=a.n(y),S=a("8700"),_=a.n(S),A={class:"bg-dark p-3"},P=Object(s["d"])("div",{class:"container d-flex justify-content-between"},[Object(s["d"])("div",{class:"d-flex"},[Object(s["d"])("p",{class:"ms-md-4 ps-3 ps-lg-5 py-2"},"© 2020. All Rights Reserved.")]),Object(s["d"])("ul",{class:"nav d-lg-flex d-none d-lg-block"},[Object(s["d"])("li",{class:"nav-item"},[Object(s["d"])("a",{href:"#",class:"nav-link"},[Object(s["d"])("img",{src:w.a,alt:"facebook"})])]),Object(s["d"])("li",{class:"nav-item"},[Object(s["d"])("a",{href:"#",class:"nav-link"},[Object(s["d"])("img",{class:"pl-3",src:k.a,alt:"instagram"})])]),Object(s["d"])("li",{class:"nav-item"},[Object(s["d"])("a",{href:"#",class:"nav-link"},[Object(s["d"])("img",{class:"pl-3",src:_.a,alt:"line"})])])])],-1),B=[P];function C(e,t){return Object(s["o"])(),Object(s["c"])("div",A,B)}const M={};M.render=C;var N=M,T={class:"banner bg-cover",style:{"background-image":"url(https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"}};function E(e,t){return Object(s["o"])(),Object(s["c"])("div",T)}const H={};H.render=E;var F=H,D=a("24a7"),G=a.n(D),L=a("5d96"),q=a.n(L),R=a("c8b4"),V=a.n(R),Y=a("dd21"),J=a.n(Y),W=a("7ea3"),I=a.n(W),K=a("35d4"),U=a.n(K),Z=a("c220"),z=a.n(Z),Q=a("df63"),X=a.n(Q),$=a("996b"),ee=a.n($),te=a("1ce3"),ae=a.n(te),se=a("1e70"),ce=a.n(se),le=a("ce0f"),ie=a.n(le),de=a("df9f"),oe=a.n(de),ne=a("6736"),re=a.n(ne),be=a("67c8"),pe=a.n(be),ue=a("756c"),je=a.n(ue),me=a("607e"),ge=a.n(me),Oe=a("158a"),he=a.n(Oe),fe=a("5e19"),ve=a.n(fe),xe={class:"wrap"},we=Object(s["d"])("div",{class:"main py-4",id:"info"},[Object(s["d"])("div",{class:"container"},[Object(s["d"])("p",null,"桃園市 中壢區"),Object(s["d"])("h2",null," 新森活 "),Object(s["d"])("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[Object(s["d"])("li",{class:"nav-item",role:"presentation"},[Object(s["d"])("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"建案介紹")]),Object(s["d"])("li",{class:"nav-item",role:"presentation"},[Object(s["d"])("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},"室內設計")]),Object(s["d"])("li",{class:"nav-item",role:"presentation"},[Object(s["d"])("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false"},"用材簡介")])]),Object(s["d"])("div",{class:"tab-content",id:"myTabContent"},[Object(s["d"])("div",{class:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},[Object(s["d"])("div",{class:"container"},[Object(s["d"])("div",{class:"row"},[Object(s["d"])("div",{class:"col-md-6"},[Object(s["d"])("h3",{class:"py-4"},"Overview 建案簡介"),Object(s["d"])("p",null,"得天獨厚小環境，橫掃大青埔，公園、水岸、學區、商城、捷運、高鐵，你想要的全都有。全新落成，入主即可享受萬坪公園第一排，水岸第一景，豪宅大師黃永洪擘劃建築，飯店級公設，輕鬆坐擁新森活。")]),Object(s["d"])("div",{class:"col-md-6 py-4"},[Object(s["d"])("table",{class:"table text-white table-bordered bg-success"},[Object(s["d"])("thead",null,[Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"col"},"建案類別"),Object(s["d"])("th",{scope:"col"},"預售屋"),Object(s["d"])("th",{scope:"col"},"貴賓專線"),Object(s["d"])("th",{scope:"col"},"0948484223")])]),Object(s["d"])("tbody",null,[Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"格局規劃"),Object(s["d"])("td",null,"2-3房、樓中樓"),Object(s["d"])("td",null,"坪數規劃"),Object(s["d"])("td",null,"23-42坪")]),Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"樓層規劃"),Object(s["d"])("td",null,"B4-15F"),Object(s["d"])("td",null,"建築設計"),Object(s["d"])("td",null,"黃永沃建築師事務所")]),Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"基地位置"),Object(s["d"])("td",{colspan:"4"},"桃園市中壢區永昌路")]),Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"接待中心"),Object(s["d"])("td",{colspan:"4"},"桃園市中壢區永昌路168號")]),Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"基地位置"),Object(s["d"])("td",{colspan:"4"},[Object(s["d"])("a",{href:"https://goo.gl/maps/wcaG93bZoFoYRASp6",target:"_blank"},[Object(s["d"])("img",{src:G.a,width:"24",height:"24",alt:""})])])])])])])])])]),Object(s["d"])("div",{class:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},[Object(s["d"])("div",{class:"container"},[Object(s["d"])("div",{class:"row"},[Object(s["d"])("div",{class:"col-md-6"},[Object(s["d"])("h3",{class:"py-4"},"Overview 建案簡介"),Object(s["d"])("p",null,"得天獨厚小環境，橫掃大青埔，公園、水岸、學區、商城、捷運、高鐵，你想要的全都有。全新落成，入主即可享受萬坪公園第一排，水岸第一景，豪宅大師黃永洪擘劃建築，飯店級公設，輕鬆坐擁新森活。")]),Object(s["d"])("div",{class:"col-md-6 py-4"},[Object(s["d"])("div",{class:"swiper-container mySwiper"},[Object(s["d"])("div",{class:"swiper-wrapper"},[Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-1.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:q.a,alt:"house-1"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-2.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:V.a,alt:"house-2"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-3.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:J.a,alt:"house-3"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-4.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:I.a,alt:"house-4"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-5.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:U.a,alt:"house-5"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-6.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:z.a,alt:"house-6"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-7.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:X.a,alt:"house-7"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-8.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:ee.a,alt:"house-8"})])])]),Object(s["d"])("div",{class:"swiper-pagination"})])])])])]),Object(s["d"])("div",{class:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"},[Object(s["d"])("div",{class:"container"},[Object(s["d"])("div",{class:"row"},[Object(s["d"])("div",{class:"col-md-6"},[Object(s["d"])("h3",{class:"py-4"},"Overview 建案簡介"),Object(s["d"])("p",null,"得天獨厚小環境，橫掃大青埔，公園、水岸、學區、商城、捷運、高鐵，你想要的全都有。全新落成，入主即可享受萬坪公園第一排，水岸第一景，豪宅大師黃永洪擘劃建築，飯店級公設，輕鬆坐擁新森活。")]),Object(s["d"])("div",{class:"col-md-6 py-4"},[Object(s["d"])("table",{class:"table text-white table-bordered bg-success"},[Object(s["d"])("thead",null,[Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"col"},"建案類別"),Object(s["d"])("th",{scope:"col"},"預售屋"),Object(s["d"])("th",{scope:"col"},"貴賓專線"),Object(s["d"])("th",{scope:"col"},"0948484223")])]),Object(s["d"])("tbody",null,[Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"格局規劃"),Object(s["d"])("td",null,"2-3房、樓中樓"),Object(s["d"])("td",null,"坪數規劃"),Object(s["d"])("td",null,"23-42坪")]),Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"樓層規劃"),Object(s["d"])("td",null,"B4-15F"),Object(s["d"])("td",null,"建築設計"),Object(s["d"])("td",null,"黃永沃建築師事務所")]),Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"基地位置"),Object(s["d"])("td",{colspan:"4"},"桃園市中壢區永昌路")]),Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"接待中心"),Object(s["d"])("td",{colspan:"4"},"桃園市中壢區永昌路168號")]),Object(s["d"])("tr",null,[Object(s["d"])("th",{scope:"row"},"基地位置"),Object(s["d"])("td",{colspan:"4"},"icon")])])])])])])])])])],-1),ye=Object(s["d"])("div",{class:"content container text-center py-5",id:"house"},[Object(s["d"])("h2",null,"建築賞心"),Object(s["d"])("h3",null,"青埔核心 萬坪森態公園宅"),Object(s["d"])("p",null,"戶戶享受水岸河景，無限棟距。萬坪樹海當鄰居，下樓就是公園，一趟環湖公園森林漫步，享受陽光普照下的甘甜。")],-1),ke=Object(s["d"])("div",{class:"swiper-container mySwiper"},[Object(s["d"])("div",{class:"swiper-wrapper"},[Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-1.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:q.a,alt:"house-1"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-2.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:V.a,alt:"house-2"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-3.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:J.a,alt:"house-3"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-4.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:I.a,alt:"house-4"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-5.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:U.a,alt:"house-5"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-6.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:z.a,alt:"house-6"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-7.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:X.a,alt:"house-7"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-8.jpeg","data-lightbox":"house","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:ee.a,alt:"house-8"})])])]),Object(s["d"])("div",{class:"swiper-pagination"})],-1),Se=Object(s["d"])("div",{class:"topic bg-cover",style:{background:"url(https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80) no-repeat"}},null,-1),_e=Object(s["d"])("div",{class:"content container text-center py-5",id:"environment"},[Object(s["d"])("h2",null,"周邊環境"),Object(s["d"])("h3",null,"青埔核心 萬坪森態公園宅"),Object(s["d"])("p",null,"戶戶享受水岸河景，無限棟距。萬坪樹海當鄰居，下樓就是公園，一趟環湖公園森林漫步，享受陽光普照下的甘甜。")],-1),Ae=Object(s["d"])("div",{class:"swiper-container mySwiper"},[Object(s["d"])("div",{class:"swiper-wrapper"},[Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-9.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:ae.a,alt:"house-9"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-10.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:ce.a,alt:"house-10"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-11.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:ie.a,alt:"house-11"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-12.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:oe.a,alt:"house-12"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-13.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:re.a,alt:"house-13"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-14.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:pe.a,alt:"house-14"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-15.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:je.a,alt:"house-15"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-16.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:ge.a,alt:"house-16"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-17.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:he.a,alt:"house-17"})])]),Object(s["d"])("div",{class:"swiper-slide"},[Object(s["d"])("a",{class:"example-image-link",href:"../assets/image/house-18.jpeg","data-lightbox":"home","data-title":"房屋"},[Object(s["d"])("img",{class:"example-image",src:ve.a,alt:"house-18"})])])]),Object(s["d"])("div",{class:"swiper-pagination"})],-1),Pe=[we,ye,ke,Se,_e,Ae];function Be(e,t){return Object(s["o"])(),Object(s["c"])("div",xe,Pe)}const Ce={};Ce.render=Be;var Me=Ce,Ne={components:{Navbar:v,Footer:N,Banner:F,Content:Me}};a("ba64");Ne.render=l;var Te=Ne,Ee=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),He={class:"home"},Fe=Object(s["d"])("button",{type:"button",class:"btn btn-primary"},"Primary",-1),De=[Fe];function Ge(e,t,a,c,l,i){return Object(s["o"])(),Object(s["c"])("div",He,De)}var Le={name:"Home",components:{}};Le.render=Ge;var qe=Le,Re=[{path:"/",name:"Home",component:qe},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/vueslick",name:"VueSlick",component:function(){return a.e("chunk-d5b24514").then(a.bind(null,"809f"))}}],Ve=Object(Ee["a"])({history:Object(Ee["b"])(),routes:Re}),Ye=Ve;Object(s["b"])(Te).use(Ye).mount("#app")},"5d96":function(e,t,a){e.exports=a.p+"img/house-1.b0527c25.jpeg"},"5e19":function(e,t,a){e.exports=a.p+"img/house-18.06edc9f2.jpeg"},"607e":function(e,t,a){e.exports=a.p+"img/house-16.227ceecb.jpeg"},6736:function(e,t,a){e.exports=a.p+"img/house-13.98eb6b6f.jpeg"},"67c8":function(e,t,a){e.exports=a.p+"img/house-14.f6a52801.jpeg"},"756c":function(e,t,a){e.exports=a.p+"img/house-15.6d005fd8.jpeg"},"7ea3":function(e,t,a){e.exports=a.p+"img/house-4.b66c1d55.jpeg"},8700:function(e,t,a){e.exports=a.p+"img/line.9d47d381.svg"},"996b":function(e,t,a){e.exports=a.p+"img/house-8.691937f5.jpeg"},ba64:function(e,t,a){"use strict";a("c5e4")},c220:function(e,t,a){e.exports=a.p+"img/house-6.286ac991.jpeg"},c5e4:function(e,t,a){},c8b4:function(e,t,a){e.exports=a.p+"img/house-2.a186be32.jpeg"},ce0f:function(e,t,a){e.exports=a.p+"img/house-11.7f41064c.jpeg"},d32f:function(e,t,a){e.exports=a.p+"img/facebook.26129fde.svg"},dd21:function(e,t,a){e.exports=a.p+"img/house-3.6b8e6a35.jpeg"},df63:function(e,t,a){e.exports=a.p+"img/house-7.22f1a13e.jpeg"},df9f:function(e,t,a){e.exports=a.p+"img/house-12.3b5db75e.jpeg"}});
//# sourceMappingURL=app.bbb05231.js.map