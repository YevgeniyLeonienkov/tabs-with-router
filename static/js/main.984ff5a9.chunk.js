(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),o=a(6),m=a(5),i=(a(24),a(16)),s=a.n(i),u=function(e){var t=e.tabs,a=e.activeTabId;return c.a.createElement("div",{className:"Tabs"},t.map(function(e){return c.a.createElement(o.b,{to:"/tabs/".concat(e.id),key:e.id,type:"button",className:s()({Tabs__Tab:!0,"Tabs__Tab--active":e.id===a})},e.title)}),c.a.createElement("p",null,a?t.find(function(e){return e.id===a}).content:""))};u.defaultProps={activeTabId:""};var b=u,d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],p=function(e){var t=e.match;return c.a.createElement(b,{tabs:d,activeTabId:t.params.tabId})},E=function(){return c.a.createElement("h1",null,"Home page")},v=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("nav",null,c.a.createElement("ul",{className:"nav"},c.a.createElement("li",null,c.a.createElement(o.c,{className:"navlink",to:"/",exact:!0},"Home")),c.a.createElement("li",null,c.a.createElement(o.c,{className:"navlink",to:"/tabs/"},"Tabs")))),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:E}),c.a.createElement(m.a,{path:"/tabs/:tabId?",component:p}))))};r.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.984ff5a9.chunk.js.map