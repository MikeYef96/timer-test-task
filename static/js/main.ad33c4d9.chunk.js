(this["webpackJsonptimer-test-task"]=this["webpackJsonptimer-test-task"]||[]).push([[0],{36:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),c=n(23),i=n.n(c),r=n(25),l=n(21),u=n(41),b=n(40),o=n(39),j=n(8),p=n.n(j),d=n(2);function O(){var t=Object(a.useState)(0),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)("stop"),r=Object(l.a)(i,2),j=r[0],O=r[1];Object(a.useEffect)((function(){var t=new u.a;return Object(b.a)(1e3).pipe(Object(o.a)(t)).subscribe((function(){"run"===j&&c((function(t){return t+1e3}))})),function(){t.next(),t.complete()}}),[j]);var _=s.a.useCallback((function(){"run"===j?(O("stop"),c(0)):O("run")}),[j]),m=s.a.useCallback((function(){"run"===j&&O("wait"),"wait"===j&&O("run")}),[j]),f=s.a.useCallback((function(){O("run"),c(0)}),[]);return Object(d.jsx)("div",{className:p.a.timer,children:Object(d.jsxs)("div",{className:p.a.field,children:[Object(d.jsx)("span",{className:p.a.value,children:new Date(n).toISOString().slice(11,19)}),Object(d.jsx)("span",{className:p.a.label,children:"Seconds"}),Object(d.jsxs)("div",{className:p.a.btnsContainer,children:[Object(d.jsx)("button",{className:p.a.startBtn,onClick:_,children:"Start/Stop"}),Object(d.jsx)("button",{className:p.a.waitBtn,onDoubleClick:Object(b.a)(300)&&m,children:"Wait"}),Object(d.jsx)("button",{className:p.a.resetBtn,onClick:f,children:"Reset"})]})]})})}i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(O,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={timer:"App_timer__HEylj",field:"App_field__uZuDB",label:"App_label__3lQJD",btnsContainer:"App_btnsContainer__2HZaT",startBtn:"App_startBtn__10-JT",waitBtn:"App_waitBtn__17uoO",resetBtn:"App_resetBtn__2tyh9"}}},[[36,1,2]]]);
//# sourceMappingURL=main.ad33c4d9.chunk.js.map