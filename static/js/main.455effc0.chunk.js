(this.webpackJsonpwarchive_client_app=this.webpackJsonpwarchive_client_app||[]).push([[0],{46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(20),s=a.n(n),r=a(11),i=a.n(r),l=a(21),o=a(5),j=a(7),d=a(4),b=a(2),u=a(22),m=a.n(u),h=(a(46),a(0));var O=function(e){var t=e.wata_id,a=e.title,c=e.creator,n=e.category,s=e.genre,r=e.keywords,i=e.cautions,l=e.platforms,o=e.thumnail,j=e.bookmark,d=e.add_bookmark,b=e.delete_bookmark,u={backgroundImage:"url(".concat(o,")"),backgroundSize:"100%"};return Object(h.jsxs)("div",{className:"wata",style:u,children:[Object(h.jsxs)("div",{className:"wata__header",children:[Object(h.jsxs)("div",{className:"header__row header__titles",children:[Object(h.jsx)("h3",{className:"header__title",children:a}),Object(h.jsx)("span",{className:j?"header__bookmark bookmark":"header__bookmark",onClick:j?function(){return b(t)}:function(){return d(t)},children:Object(h.jsx)("i",{className:"fas fa-star"})})]}),Object(h.jsx)("div",{className:"header__row header__creator",children:Object(h.jsx)("span",{className:"wata__creator",children:c})}),Object(h.jsxs)("div",{className:"header__row header__categorys",children:[Object(h.jsxs)("span",{className:"categorys__category wata__category",children:["#",n]}),Object(h.jsxs)("span",{className:"categorys__category wata__genre",children:["#",s]})]})]}),Object(h.jsx)("div",{className:"wata__body",children:Object(h.jsxs)("div",{className:"body__column",children:[Object(h.jsx)("ul",{className:"wata__platforms",children:l.map((function(e,t){return Object(h.jsx)("li",{className:"platforms__platform",children:e.name.length>0?Object(h.jsx)("a",{href:e.url,target:"_blank",children:Object(h.jsx)("span",{children:e.name})}):Object(h.jsx)("span",{})},t)}))}),Object(h.jsx)("div",{className:"body__column",children:Object(h.jsx)("ul",{className:"wata__keywords",children:r.map((function(e,t){return Object(h.jsx)("li",{className:"keywords__keyword",children:e.length>0?Object(h.jsxs)("span",{className:"keyword",children:["#",e]}):Object(h.jsx)("span",{})},t)}))})})]})}),Object(h.jsx)("div",{className:"wata__footer",children:Object(h.jsx)("ul",{className:"footer__cautions",children:i.map((function(e,t){return Object(h.jsx)("li",{className:"cautions__caution",children:e.length>0?Object(h.jsxs)("div",{className:"caution",children:["#",e]}):Object(h.jsx)("span",{})},t)}))})})]})};a(48),a(49);var f=function(e){return Object(h.jsx)("div",{className:"searchbar__container",children:Object(h.jsx)("input",{className:"search__input",type:"search",placeholder:"\uc81c\ubaa9/\uc791\uac00/\uac10\ub3c5\uba85\uc73c\ub85c \uac80\uc0c9",onChange:e.search_searchbar})})};a(50);function _(e){return Object(h.jsxs)("div",{id:e.id,className:"selected-keyword-list__bubble",onClick:function(){e.delete({name:e.name,value:e.value})},children:[Object(h.jsx)("span",{children:e.value}),Object(h.jsx)("i",{className:"fas fa-times"})]})}function x(e){return Object(h.jsxs)("div",{className:"bubble-list__bubble",children:[Object(h.jsx)("input",{type:"checkbox",id:e.id,name:e.name,value:e.value,readOnly:!0,checked:e.isChecked({name:e.name,value:e.value})}),Object(h.jsx)("label",{htmlFor:e.id,onClick:function(){e.select({name:e.name,value:e.value})},children:e.value})]})}function p(e){var t={height:"0px",padding:"0px"},a={minHeight:"35px",padding:"5px"},c=0;return Object(h.jsxs)("div",{className:"selected-keyword-container",style:e.state?a:t,children:[Object(h.jsx)("div",{className:"keywordbar__selected-keyword-list",style:e.state?a:t,children:e.selected_keyword?e.selected_keyword.map((function(t){return Object(h.jsx)(_,{id:t.name+"selectbubble"+c++,name:t.name,value:t.value,delete:e.delete,state:e.state},t.name+"selectbubble"+c++)})):Object(h.jsx)("div",{})}),Object(h.jsx)("div",{style:e.state?a:t,children:Object(h.jsx)("div",{className:"init-keyword-button",onClick:function(){e.init()},children:"\ud0a4\uc6cc\ub4dc \ucd08\uae30\ud654"})})]})}function v(e){var t=0;return Object(h.jsxs)("div",{className:"keywordbar__keyword-box",children:[Object(h.jsx)("h3",{className:"keyword-box__header",children:e.header}),Object(h.jsx)("div",{className:"keyword-box__bubble-list",children:e.value.map((function(a){return Object(h.jsx)(x,{id:e.name+"bubble"+t++,name:e.name,value:a,select:e.select,delete:e.delete,isChecked:e.isChecked},e.name+"bubble"+t++)}))})]})}function g(e){var t=Object(c.useState)(!1),a=Object(b.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),i=Object(b.a)(r,2),l=i[0],o=i[1],d=Object(c.useState)(!0),u=Object(b.a)(d,2),m=u[0],O=u[1],f=function(t){if(x(t)){var a=l.filter((function(e){if(e.name!=t.name||e.value!=t.value)return e}));o(a),e.search_keywordbar(t.name,"delete",t.value)}},_=function(t){x(t)?f(t):function(t){x(t.name)||(o([].concat(Object(j.a)(l),[t])),e.search_keywordbar(t.name,"add",t.value))}(t)},x=function(e){for(var t=0;t<l.length;t++)if(l[t].name==e.name&&l[t].value==e.value)return!0;return!1};return e.isBookmark&&m&&(s(!1),o([]),O(!1)),Object(h.jsxs)("div",{className:"keywordbar",children:[Object(h.jsx)(p,{selected_keyword:l,delete:f,init:function(){o([]),e.search_keywordbar("none","init",0)},state:n}),Object(h.jsxs)("div",{className:"keywordbar__container",style:n?{height:"400px"}:{height:"0px"},children:[Object(h.jsx)(v,{name:"category",header:"\uce74\ud14c\uace0\ub9ac",value:e.category,select:_,isChecked:x}),Object(h.jsx)(v,{name:"genre",header:"\uc7a5\ub974",value:e.genre,select:_,isChecked:x}),Object(h.jsx)(v,{name:"platform",header:"\ud50c\ub7ab\ud3fc",value:e.platform,select:_,isChecked:x}),Object(h.jsx)(v,{name:"keyword",header:"\ud0a4\uc6cc\ub4dc",value:e.keyword,select:_,isChecked:x})]}),Object(h.jsx)("div",{className:"keywordbar__button",onClick:function(){s(!n)},children:Object(h.jsx)("span",{className:"button__text",children:"\ud0a4\uc6cc\ub4dc\ub85c \ucc3e\uae30"})})]})}a(51);function k(e){return Object(h.jsx)("div",{className:"header-container",children:Object(h.jsxs)("div",{className:"header-contents",children:[Object(h.jsxs)("div",{className:"header-contents__col",children:[Object(h.jsx)("div",{className:"header-contents-col__title",children:Object(h.jsx)("a",{href:".",children:Object(h.jsx)("img",{className:"title__logo",src:"https://i.ibb.co/WtWVG8r/logo.png",alt:"warchive logo"})})}),Object(h.jsxs)("span",{className:e.isBookmark?"header-contents-col__icon open_bookmark":"header-contents-col__icon",onClick:e.open_bookmark,children:[Object(h.jsx)("i",{className:"fas fa-star"}),Object(h.jsx)("span",{className:"icon__label",children:"\uc990\uaca8\ucc3e\uae30 \ubaa9\ub85d"})]}),Object(h.jsxs)("span",{className:"header-contents-col__icon",onClick:e.open_mail,children:[Object(h.jsx)("i",{className:"fas fa-envelope"}),Object(h.jsx)("span",{className:"icon__label",children:"\ucd94\ucc9c\uc791 \uc81c\ubcf4/\ubb38\uc758"})]})]}),Object(h.jsx)("div",{className:"header-contents__col",children:Object(h.jsx)("span",{className:"header-contents-col__icon",children:Object(h.jsx)("i",{className:"fas fa-question-circle"})})})]})})}a(52);var y=a(9),N=a.n(y);function w(e){var t=Object(c.useState)(!0),a=Object(b.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(b.a)(r,2),l=i[0],o=i[1],j=Object(c.useState)(""),d=Object(b.a)(j,2),u=d[0],m=d[1],O=Object(c.useState)("\uc81c\ubaa9:\n\ud0a4\uc6cc\ub4dc: \n\ud50c\ub7ab\ud3fc: \n\uac04\ub2e8\uc18c\uac1c: "),f=Object(b.a)(O,2),_=f[0],x=f[1],p=Object(c.useState)(""),v=Object(b.a)(p,2),g=v[0],k=v[1];return Object(h.jsx)("div",{className:"email-popup-overlay",style:e.open_mail_flag?{opacity:"1",zIndex:"1"}:{opacity:"0",zIndex:"-1"},children:Object(h.jsxs)("div",{className:"email-popup-container",children:[Object(h.jsxs)("div",{className:"email-popup-container__header",children:[Object(h.jsxs)("div",{className:"header__colomn",children:[Object(h.jsx)("i",{className:"fas fa-envelope"}),Object(h.jsx)("span",{className:"icon__label",children:"\ucd94\ucc9c\uc791 \uc81c\ubcf4 \ubc0f \ubb38\uc758"})]}),Object(h.jsx)("div",{className:"header__colomn",children:Object(h.jsx)("div",{className:"close-button",onClick:function(){return e.close_mail(!1)},children:Object(h.jsx)("i",{className:"fas fa-times"})})})]}),Object(h.jsx)("div",{className:"popup__body",children:Object(h.jsxs)("form",{id:"contact-form",onSubmit:function(e){var t;Object(y.init)("user_K30JVUSlyUKXFRdUVpXl5"),e.preventDefault(),""==l||""==u||1==n&&""==_||0==n&&""==g?alert("\ube48\uce78\uc744 \uae30\uc785\ud574\uc8fc\uc138\uc694."):(t="\ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",0!=window.confirm(t)?N.a.sendForm("warchive","warchive_template",e.target).then((function(e){alert("\uc774\uba54\uc77c\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc804\uc1a1\ud558\uc600\uc2b5\ub2c8\ub2e4.")}),(function(e){alert("\uc774\uba54\uc77c \uc804\uc1a1\ud574 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."),console.log(e)})):alert("\uc774\uba54\uc77c \uc804\uc1a1\uc744 \ucde8\uc18c\ud558\uc600\uc2b5\ub2c8\ub2e4."))},children:[Object(h.jsx)("input",{type:"hidden",name:"contact_number"}),Object(h.jsxs)("div",{className:"body__colomn",children:[Object(h.jsx)("div",{className:"colomn__header",children:"\ubb38\uc758\uc790 \uc815\ubcf4"}),Object(h.jsxs)("div",{className:"colomn__body",children:[Object(h.jsxs)("div",{className:"colomn-body__colomn",children:[Object(h.jsx)("label",{children:"\uc774\ub984"}),Object(h.jsx)("input",{type:"text",name:"user_name",value:l,onChange:function(e){o(e.target.value)}})]}),Object(h.jsxs)("div",{className:"colomn-body__colomn",children:[Object(h.jsx)("label",{children:"\ub2f5\uc2e0\ubc1b\uc744 \uc774\uba54\uc77c"}),Object(h.jsx)("input",{type:"email",name:"user_email",value:u,onChange:function(e){m(e.target.value)}})]})]})]}),Object(h.jsxs)("div",{className:"body__colomn",children:[Object(h.jsx)("div",{className:"colomn__header",children:"\ubb38\uc758\ub0b4\uc6a9"}),Object(h.jsxs)("div",{className:"colomn__body",children:[Object(h.jsxs)("div",{className:"colomn-body__colomn",children:[Object(h.jsx)("label",{children:"\uba54\uc77c \uc720\ud615"}),Object(h.jsxs)("div",{className:"radio-container",children:[Object(h.jsxs)("div",{className:"radio-box",onClick:function(){return s(!0)},children:[Object(h.jsx)("input",{type:"radio",name:"email_type",value:"\ucd94\ucc9c\uc791 \uc81c\ubcf4",id:"rec",checked:n,readOnly:!0}),Object(h.jsx)("label",{htmlFor:"rec",children:"\ucd94\ucc9c\uc791 \uc81c\ubcf4"})]}),Object(h.jsxs)("div",{className:"radio-box",onClick:function(){return s(!1)},children:[Object(h.jsx)("input",{id:"etc",type:"radio",name:"email_type",value:"\uae30\ud0c0 \ubb38\uc758",checked:!n,readOnly:!0}),Object(h.jsx)("label",{htmlFor:"etc",children:"\uae30\ud0c0 \ubb38\uc758"})]})]})]}),Object(h.jsxs)("div",{className:"colomn-body__colomn",children:[Object(h.jsx)("label",{children:"\ub0b4\uc6a9"}),n?Object(h.jsx)("div",{children:Object(h.jsx)("textarea",{name:"message",rows:"10",onChange:function(e){x(e.target.value)},value:_})}):Object(h.jsx)("textarea",{name:"message",rows:"10",onChange:function(e){k(e.target.value)},placeholder:"\uc624\ub958 \uc81c\ubcf4 \ubc0f \uae30\ud0c0 \ubb38\uc758\uc0ac\ud56d\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.",value:g})]})]})]}),Object(h.jsx)("input",{type:"submit",value:"\ubcf4\ub0b4\uae30"})]})})]})})}a(55);function S(e){return Object(h.jsx)("div",{className:"pagination",children:Object(h.jsx)("ul",{pagination:"pagination",children:e.pageNumbers.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.paginate(t)},children:Object(h.jsx)("span",{className:t==e.currentPageNumber?"current_page":"page",children:t})},t)}))})})}a(56);function C(){return Object(h.jsx)("div",{className:"footer-container",children:Object(h.jsxs)("div",{className:"footer-contents",children:[Object(h.jsxs)("div",{className:"footer-contents__col",children:[Object(h.jsxs)("div",{className:"footer-contents-col__row",children:[Object(h.jsx)("span",{className:"email-label",children:"\ucd94\ucc9c\uc791 \uc81c\ubcf4, \ubb38\uc758"}),Object(h.jsx)("span",{className:"email",children:"team.warchive@gmail.com"})]}),Object(h.jsxs)("div",{className:"footer-contents-col__row",children:[Object(h.jsx)("span",{className:"account-label",children:"\ud6c4\uc6d0\uacc4\uc88c"}),Object(h.jsx)("span",{className:"account",children:"\uc6b0\ub9ac 1002 343 024735 \u3147\u3148\u3147"})]})]}),Object(h.jsx)("div",{className:"footer-contents__col",children:Object(h.jsx)("a",{className:"footer-contents-col__row sns-logo",href:"https://twitter.com/Womynarchive",target:"_blank",children:Object(h.jsx)("i",{className:"fab fa-twitter-square"})})})]})})}a(57);function P(){return Object(h.jsx)("div",{className:"loader",children:"Loading..."})}var L=function(){var e="watas2",t="watas1",a="bookmarks",n=Object(c.useState)(!1),s=Object(b.a)(n,2),r=s[0],u=s[1],_=Object(c.useState)(!1),x=Object(b.a)(_,2),p=x[0],v=x[1],y=Object(c.useState)(!0),N=Object(b.a)(y,2),L=N[0],I=N[1],B=Object(c.useState)(!1),F=Object(b.a)(B,2),J=F[0],A=(F[1],Object(c.useState)([])),z=Object(b.a)(A,2),E=z[0],U=z[1],V=Object(c.useState)([]),W=Object(b.a)(V,2),q=W[0],D=W[1],K=Object(c.useState)([]),X=Object(b.a)(K,2),G=X[0],H=X[1],M=Object(c.useState)([]),R=Object(b.a)(M,2),Y=R[0],Q=R[1],T=Object(c.useState)({category:[],genre:[],platform:[],keyword:[]}),Z=Object(b.a)(T,2),$=Z[0],ee=Z[1],te=Object(c.useState)(""),ae=Object(b.a)(te,2),ce=ae[0],ne=ae[1],se=Object(c.useState)({category:[],genre:[],platform:[],keyword:[]}),re=Object(b.a)(se,2),ie=re[0],le=re[1],oe=Object(c.useState)({currentPage:1,watasPerPage:12,pageLimit:2}),je=Object(b.a)(oe,2),de=je[0],be=je[1],ue=function(e){v(e)},me=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):[]},he=function(e,t){localStorage.setItem(e,JSON.stringify(t))},Oe=function(e){var t=me(a);if(!t.includes(e)){var c=[].concat(Object(j.a)(t),[e]);alert("\ubd81\ub9c8\ud06c\uc5d0 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4."),he(c),D(c)}},fe=function(e){var t=me(a).filter((function(t){if(t!=e)return t}));D(t),he(t),alert("\ubd81\ub9c8\ud06c\uc5d0\uc11c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.")},_e=function(e){var t="";"twitter"==e?t="https://twitter.com/intent/tweet?text=\uc5ec\uc131\uc11c\uc0ac \ucd94\ucc9c\ub9ac\uc2a4\ud2b8&url=temp":"facebook"==e&&(t="http://www.facebook.com/sharer/sharer.php?u=temp"),window.open(t,"\uc5ec\uc131\uc11c\uc0ac \ucd94\ucc9c\ub9ac\uc2a4\ud2b8 \uacf5\uc720\ud558\uae30","width = 500, height = 500, top = 100, left = 200, location = no")};return Object(c.useEffect)((function(){var a=!1,c=me(e);function n(){return(n=Object(l.a)(i.a.mark((function n(){var s,r,l,o,j,d,b;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=[],"undefined"!=typeof c&&null!=c&&0!=c.length){n.next=10;break}return localStorage.removeItem(t),n.next=5,m.a.get("http://warchive.pythonanywhere.com/api/?type=data");case 5:r=n.sent,l=r.data,s=l.wata_list,n.next=11;break;case 10:s=c;case 11:"undefined"!=typeof s&&null!=s&&0!=s.length&&(o=[],j=[],d=[],b=[],s.map((function(e){return o.push(e.category),j.push(e.genre),e.platforms.map((function(e){""!=e.name&&d.push(e.name)})),e.keywords.map((function(e){""!=e&&b.push(e)})),0})),U(s),ee({category:Array.from(new Set(o)),genre:Array.from(new Set(j)),platform:Array.from(new Set(d)),keyword:Array.from(new Set(b))}),I(!1),0==a&&(he(e,s),U(s)));case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){a=!0,I(!1)}}),[J]),Object(c.useEffect)((function(){!function(){var e=[],t=E;if(r){var c=[];E.filter((function(e){me(a).map((function(t){e.wata_id==t&&c.push(e)}))})),t=c}""!==ce?e=t.filter((function(e){if(e.title.indexOf(ce)>-1||e.creator.indexOf(ce)>-1)return e})):0==ie.category.length&&0==ie.genre.length&&0==ie.platform.length&&0==ie.keyword.length?e=t:(e=[[],[],[],[]],ie.category.map((function(a){var c=t.filter((function(e){if(e.category==a)return e}));e[0]=e[0].concat(c)})),ie.genre.map((function(a){var c=t.filter((function(e){if(e.genre==a)return e}));e[2]=e[2].concat(c)})),ie.platform.map((function(a){var c=[];t.filter((function(e){e.platforms.map((function(t){t.name==a&&c.push(e)}))})),e[3]=e[3].concat(c)})),ie.keyword.map((function(a){var c=t.filter((function(e){if(e.keywords.includes(a))return e}));e[4]=e[4].concat(c)})),0==!(e=e.filter((function(e){if(e.length>0)return e}))).length&&(e=e.reduce((function(e,t){return e.filter((function(e){return t.includes(e)}))}))));var n,s,i=de.currentPage*de.watasPerPage,l=i-de.watasPerPage;Q(e.length),H((n=l,s=i,e.slice(n,s)))}()}),[E,ie,ce,de,r,q]),Object(h.jsxs)("div",{className:"root_container",children:[Object(h.jsx)(k,{open_bookmark:function(){u(!0),ne(""),le({category:[],genre:[],platform:[],keyword:[]}),be(Object(d.a)(Object(d.a)({},de),{},{currentPage:1}))},open_mail:ue,isBookmark:r}),Object(h.jsx)(w,{close_mail:ue,open_mail_flag:p}),Object(h.jsxs)("section",{className:"container",children:[L?Object(h.jsx)(P,{}):Object(h.jsxs)("div",{className:"container__box",children:[Object(h.jsxs)("div",{className:"serachbar",children:[Object(h.jsx)(g,{category:$.category,genre:$.genre,platform:$.platform,keyword:$.keyword,search_keywordbar:function(e,t,a){ne(""),be(Object(d.a)(Object(d.a)({},de),{},{currentPage:1,pageLimit:2}));var c=[];"category"==e?c=ie.category:"genre"==e?c=ie.genre:"platform"==e?c=ie.platform:"keyword"==e?c=ie.keyword:"none"==e&&(c=[]),"add"==t?1!=c.includes(a)&&le(Object(d.a)(Object(d.a)({},ie),{},Object(o.a)({},e,[].concat(Object(j.a)(c),[a])))):"delete"==t?le(Object(d.a)(Object(d.a)({},ie),{},Object(o.a)({},e,function(e,t){return e.filter((function(e){if(e!=t)return e}))}(c,a)))):"init"==t&&le({category:[],genre:[],platform:[],keyword:[]})},isBookmark:r}),Object(h.jsx)(f,{search_searchbar:function(e){ne(e.target.value),be(Object(d.a)(Object(d.a)({},de),{},{currentPage:1,pageLimit:2}))}})]}),""==ce&&0==ie.category.length&&0==ie.genre.length&&0==ie.platform.length&&0==ie.keyword.length?Object(h.jsx)("div",{className:"result_title"}):Object(h.jsxs)("div",{className:"result_title",children:["\uac80\uc0c9 \uacb0\uacfc\ub294 \ucd1d ",Y," \uac1c \uc785\ub2c8\ub2e4."]}),Object(h.jsx)("div",{className:"wata_list",children:G.map((function(e){if("Y"!=e.isDelete){var t=!1;return me(a).map((function(a){e.wata_id==a&&(t=!0)})),Object(h.jsx)(O,{wata_id:e.wata_id,title:e.title,creator:e.creator,category:e.category,genre:e.genre,keywords:e.keywords,cautions:e.cautions,platforms:e.platforms,thumnail:e.thumnail,bookmark:t,add_bookmark:Oe,delete_bookmark:fe},e.wata_id)}}))})]}),Object(h.jsx)(S,{watasPerPage:de.watasPerPage,pageNumbers:function(e){var t=[],a=de.currentPage-de.pageLimit,c=de.currentPage+de.pageLimit;c<2*de.pageLimit+1&&(c=2*de.pageLimit+1,a=1),a<1&&(a=1);var n=Math.ceil(e/de.watasPerPage);c>=n&&(c=n);for(var s=a;s<=c;s++)t.push(s);return t}(Y),paginate:function(e){be(Object(d.a)(Object(d.a)({},de),{},{currentPage:e}))},currentPageNumber:de.currentPage}),r?Object(h.jsxs)("div",{className:"bookmark-share__container",children:[Object(h.jsx)("span",{className:"bookmark_caution",children:"\uc778\ud130\ub137 \uae30\ub85d,\ucfe0\ud0a4 \ub4f1\uc744 \uc0ad\uc81c\ud558\uc2dc\uba74 \uc990\uaca8\ucc3e\uae30 \ubaa9\ub85d\uc774 \ucd08\uae30\ud654\ub429\ub2c8\ub2e4."}),Object(h.jsxs)("div",{className:"share_button__container",children:[Object(h.jsx)("span",{className:"share_label",children:"\ub9ac\uc2a4\ud2b8 \uacf5\uc720\ud558\uae30"}),Object(h.jsx)("div",{className:"share_button",onClick:function(){return _e("twitter")},children:Object(h.jsx)("i",{className:"fab fa-twitter"})}),Object(h.jsx)("div",{className:"share_button facebook",onClick:function(){return _e("facebook")},children:Object(h.jsx)("i",{className:"fab fa-facebook-f"})})]})]}):Object(h.jsx)("div",{})]}),Object(h.jsx)(C,{})]})};s.a.render(Object(h.jsx)(L,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.455effc0.chunk.js.map