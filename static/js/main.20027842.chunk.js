(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],[,,,,,,,,,,function(c,t,e){},function(c,t,e){},function(c,t,e){},,function(c,t,e){"use strict";e.r(t);var n=e(1),a=e.n(n),r=e(5),s=e.n(r),i=(e(10),e(3)),u=e(2),d=(e(11),e(12),e(0));function j(c){var t=c.card,e=c.handleChoice,n=c.flipped,a=c.disabled;return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:n?"flipped":"",children:[Object(d.jsx)("img",{src:t.src,className:"front",alt:"card-front"}),Object(d.jsx)("img",{src:"img/cover.png",className:"back",alt:"card-back",onClick:function(){a||e(t)}})]})})}var o=[{src:"/img/cat1.png",matched:!1},{src:"/img/cat2.png",matched:!1},{src:"/img/cat3.png",matched:!1},{src:"/img/cat4.png",matched:!1},{src:"/img/cat5.png",matched:!1},{src:"/img/cat6.png",matched:!1}];var l=function(){var c=Object(n.useState)([]),t=Object(u.a)(c,2),e=t[0],a=t[1],r=Object(n.useState)(0),s=Object(u.a)(r,2),l=s[0],m=s[1],b=Object(n.useState)(null),f=Object(u.a)(b,2),O=f[0],h=f[1],p=Object(n.useState)(null),g=Object(u.a)(p,2),v=g[0],x=g[1],N=Object(n.useState)(!1),k=Object(u.a)(N,2),S=k[0],M=k[1],C=function(){var c=[].concat(o,o).sort((function(){return Math.random()-.5})).map((function(c){return Object(i.a)(Object(i.a)({},c),{},{id:Math.random()})}));h(null),x(null),a(c),m(0)},w=function(c){O?x(c):h(c)};Object(n.useEffect)((function(){O&&v&&(M(!0),O.src===v.src?(a((function(c){return c.map((function(c){return c.src===O.src?Object(i.a)(Object(i.a)({},c),{},{matched:!0}):c}))})),y()):setTimeout((function(){return y()}),1e3))}),[O,v]);var y=function(){h(null),x(null),m((function(c){return c+1})),M(!1)};return Object(n.useEffect)((function(){C()}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Magic Match"}),Object(d.jsx)("button",{onClick:C,children:"New Game"}),Object(d.jsx)("div",{className:"card-grid",children:e.map((function(c){return Object(d.jsx)(j,{card:c,handleChoice:w,flipped:c===O||c===v||c.matched,disabled:S},c.id)}))}),Object(d.jsxs)("p",{children:["Turns: ",l]})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.20027842.chunk.js.map