(this["webpackJsonpusestate-hook"]=this["webpackJsonpusestate-hook"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=a(6),u=a(3),i=function(e){return r.a.createElement("button",{className:"square",onClick:e.onClickEvent},e.value)};function s(e){for(var t=0,a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[6,4,2],[8,4,0]];t<a.length;t++){var n=a[t],r=Object(u.a)(n,3),l=r[0],c=r[1],o=r[2];if(e[l]&&e[l]===e[c]&&e[l]===e[o])return e[l]}return null}var m=function(){var e=Array(9).fill(null),t=Object(n.useState)(e),a=Object(u.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(!0),E=Object(u.a)(m,2),f=E[0],v=E[1],d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{value:l[e],onClickEvent:function(){return function(e){var t=Object(o.a)(l),a=Boolean(s(t)),n=Boolean(t[e]);a||n||(t[e]=f?"X":"O",c(t),v(!f))}(e)}}))},b=s(l),h=b?"Winner: ".concat(b):"Next player: ".concat(f?"X":"O");return r.a.createElement("div",null,r.a.createElement("div",{className:"status"},r.a.createElement("p",null,h)," ",r.a.createElement("button",{onClick:function(){c(e)},className:"icon"},r.a.createElement("i",{class:"fa fa-refresh","aria-hidden":"true"}))),r.a.createElement("div",{className:"board-row"},d(0)," ",d(1)," ",d(2)),r.a.createElement("div",{className:"board-row"},d(3)," ",d(4)," ",d(5)),r.a.createElement("div",{className:"board-row"},d(6)," ",d(7)," ",d(8)))},E=function(){return r.a.createElement("div",{className:"game"},r.a.createElement("h2",null,"Tic-Tac-Toe"),r.a.createElement(m,null))};var f=function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("p",{id:"footer"},"Copyright \xa9 ",(new Date).getFullYear()," Noobie"))};c.a.render(r.a.createElement(f,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.103d8569.chunk.js.map