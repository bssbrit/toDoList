(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,".hello {\n  color: red;\n}\n#corpo {\n  display: flex;\n  justify-content: space-around;\n  border: 1px solid black;\n}\n\n.tarefa {\n  display: flex;\n  gap: 10px;\n}\n#projetos {\n  flex-grow: 1;\n}\n#tarefas {\n  background-color: aqua;\n  flex-grow: 3;\n  text-align: center;\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nh1 {\n  text-align: center;\n} /* \nposition: absolute; */\n\n.projectForm {\n  background-color: black;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),s=n.n(i),l=n(216),d=n.n(l),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=function(e,t,n,o){this.name=e,this.description=t,this.priority=n,this.dueDate=o,this.status=!1},v=[];function y(e){const t=document.createElement("div");t.classList.add("tarefa");const n=document.createElement("H4");n.innerHTML=e.name;const o=document.createElement("p");o.innerHTML=e.description;const r=document.createElement("p");return r.innerHTML=e.dueDate,t.appendChild(n),t.appendChild(o),t.appendChild(r),t}let g=new h("olha","olha la",1,"12/12"),b=new h("olha la","olha la",2,"12/12"),C=new h("olha laaaaaaaaaa","olha la",2,"12/12");const x=new function(e){this.name="Cuidar do Chola",this.tarefas=[]}("Cuidar do Chola");x.tarefas.push(g),x.tarefas.push(b),console.log(x),console.log(x.tarefas),v.push(x),console.log(v);let E=document.getElementById("tarefas");E.appendChild(y(g)),E.appendChild(y(b)),E.appendChild(y(C)),document.getElementById("projetos").appendChild(function(e){const t=document.createElement("div");t.classList.add("projeto");const n=document.createElement("H4");return n.innerHTML=e.name,t.appendChild(n),t}(x)),document.getElementById("criarProjeto").addEventListener("click",(function(){document.body.appendChild(function(){const e=document.createElement("form");e.classList.add("projectForm");const t=document.createElement("input");t.type="text",t.placeholder="Project name",e.appendChild(t);const n=document.createElement("button");return n.type="submit",n.textContent="Submit",e.appendChild(n),e}()),console.log("hi")})),document.getElementById("tarefas").addEventListener("click",(function(){document.body.appendChild(function(){const e=document.createElement("form"),t=document.createElement("input");t.type="text",t.placeholder="Enter task Name",e.appendChild(t);const n=document.createElement("input");n.type="text",n.placeholder="Describe your task",e.appendChild(n);const o=document.createElement("input");o.type="number",o.placeholder="Between 1-3 how important is this task",e.appendChild(o);const r=document.createElement("input");r.type="date",e.appendChild(r);const a=document.createElement("button");return a.type="submit",a.textContent="Submit",e.appendChild(a),e}()),console.log("hi")}))})()})();