(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,".hello {\n  color: red;\n}\n#corpo {\n  display: flex;\n  justify-content: space-around;\n  border: 1px solid black;\n}\n\n.tarefa {\n  display: flex;\n  gap: 10px;\n}\n#projetos {\n  flex-grow: 1;\n}\n#tarefas {\n  background-color: aqua;\n  flex-grow: 3;\n  text-align: center;\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nh1 {\n  text-align: center;\n} /* \nposition: absolute; */\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(426),m={};function h(e){const t=document.createElement("div");t.classList.add("tarefa");const n=document.createElement("H4");n.innerHTML=e.name;const o=document.createElement("p");o.innerHTML=e.description;const r=document.createElement("p");return r.innerHTML=e.dueDate,t.appendChild(n),t.appendChild(o),t.appendChild(r),t}function v(e,t){const n=document.createElement("div");return n.classList.add("projeto"),n.textContent=e.name,n.setAttribute("dataIndex",e.index),n}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const y=function(e,t,n,o){this.name=e,this.description=t,this.priority=n,this.dueDate=o,this.status=!1},g=function(e,t){this.name=e,this.index=t,this.tarefas=[],this.displayTarefas=function(){let e=document.getElementById("tarefas");for(;e.firstChild;)e.removeChild(e.firstChild);for(let t=0;t<this.tarefas.length;t++)e.appendChild(h(this.tarefas[t]))}},x=[];let b=document.getElementById("projetos");document.getElementById("criarProjeto").addEventListener("click",(function(){document.body.appendChild(function(){const e=document.createElement("form");e.classList.add("projectForm");const t=document.createElement("input");t.type="text",t.placeholder="Project name",e.appendChild(t);const n=document.createElement("button");n.classList.add("submitProject"),n.type="submit",n.textContent="Submit",e.appendChild(n);let o=document.getElementById("projetos");return e.addEventListener("submit",(function(n){n.preventDefault();const r=new g(t.value,x.length+1);x.push(r),console.log(x),console.log(r.index);for(let e=x.length-1;e<x.length;e++)o.appendChild(v(x[e]));document.body.removeChild(e)})),e}())})),document.getElementById("tarefas").addEventListener("click",(function(){document.body.appendChild(function(){const e=document.createElement("form"),t=document.createElement("input");t.type="text",t.placeholder="Enter task Name",e.appendChild(t);const n=document.createElement("input");n.type="text",n.placeholder="Describe your task",e.appendChild(n);const o=document.createElement("input");o.type="number",o.placeholder="Between 1-3 how important is this task",e.appendChild(o);const r=document.createElement("input");r.type="date",e.appendChild(r);const a=document.createElement("button");return a.type="submit",a.textContent="Submit",e.appendChild(a),e}())})),b.addEventListener("click",(function(e){if(e.target.classList.contains("projeto")){console.log("Clicked on:",e.target.textContent),console.log("Clicked on:",e.target.getAttribute("dataindex"));let t=parseInt(e.target.getAttribute("dataindex"))-1;console.log(t),console.log(x),console.log(x[t]);let n=new y("olha la","olha la",2,"12/12");x[t].tarefas.push(n),x[t].displayTarefas()}}))})()})();