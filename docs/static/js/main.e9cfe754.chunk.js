(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=n(2),u=n(9),j=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],j=c[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),""!==i.trim()&&e((function(t){return[i].concat(Object(u.a)(t))}))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){var e=t.target.value;j(e)}})})},o=n(10),d=n(6),l=n.n(d),f=n(8),b=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===e.trim()){t.next=12;break}return"iREDG31tSGjOew6urAJAIdtvrjtifSMO",n="https://api.giphy.com/v1/gifs/search?api_key=".concat("iREDG31tSGjOew6urAJAIdtvrjtifSMO","&limit=10&q=").concat(encodeURI(e)),t.next=5,fetch(n);case 5:return a=t.sent,t.next=8,a.json();case 8:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){t.id;var e=t.title,n=t.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:e}),Object(a.jsx)("p",{children:e})]})},m=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){b(t).then((function(t){c({data:t,loading:!1})}))}),[t]),a}(e),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(t){var e=t.id;t.title,t.url;return Object(a.jsx)(p,Object(o.a)({},t),e)}))})]})},O=function(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(m,{category:t},t)}))})]})};n(17);i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e9cfe754.chunk.js.map