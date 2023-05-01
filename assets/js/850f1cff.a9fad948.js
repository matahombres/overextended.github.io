"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3023],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(4250),o=(r(9496),r(9613));const a={title:"Using the Debug UI"},i=void 0,s={unversionedId:"oxmysql/Getting Started/ui",id:"oxmysql/Getting Started/ui",title:"Using the Debug UI",description:"Debug UI can show you useful information about your queries such as the total query time, count and total number of slow queries.",source:"@site/docs/oxmysql/Getting Started/ui.md",sourceDirName:"oxmysql/Getting Started",slug:"/oxmysql/Getting Started/ui",permalink:"/docs/oxmysql/Getting Started/ui",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Getting Started/ui.md",tags:[],version:"current",lastUpdatedAt:1682917154,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Using the Debug UI"},sidebar:"oxmysql",previous:{title:"Placeholders",permalink:"/docs/oxmysql/Getting Started/placeholders"},next:{title:"Usage",permalink:"/docs/oxmysql/Usage/"}},u={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Main page",id:"main-page",level:2},{value:"Resource page",id:"resource-page",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Debug UI can show you useful information about your queries such as the total query time, count and total number of slow queries.",(0,o.kt)("br",{parentName:"p"}),"\n","You can also see which resources take up the most query time, the number of queries they ran and how many were slow."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Before using the UI first you have to make sure you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql_ui")," convar set to true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"set mysql_ui true\n")),(0,o.kt)("p",null,"Also make sure that you have ",(0,o.kt)("inlineCode",{parentName:"p"},"command")," ace permission access, then you should be able to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql")," command in game to open up the UI and see your query data."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You ",(0,o.kt)("em",{parentName:"p"},"do not")," need to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql_debug")," convar set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in order to use the debug ui.")),(0,o.kt)("h2",{id:"main-page"},"Main page"),(0,o.kt)("p",null,"The main page shows you the resources that ran queries where you can filter them through a search bar, your general data\nalong side a pie chart which shows what resources took the most query time."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/iQqWELJ.png",alt:"oxmysql_ui_main"})),(0,o.kt)("h2",{id:"resource-page"},"Resource page"),(0,o.kt)("p",null,"The resource page shows you all the queries and their execution time inside a table that the resource previously ran,\nalongside the total amount of the queries, execution time and slow queries for the selected resource."),(0,o.kt)("p",null,"Columns can be sorted by ascending and descending order."),(0,o.kt)("p",null,"Hovering over a query will display the full query inside a tooltip."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/gZpJoIg.png",alt:"oxmysql_ui_queries"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Queries that exceed the value set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql_slow_query_warning")," convar (defualt is 150) are going to show up as orange\nand will be added to the slow queries count.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: For demonstation purposes the ",(0,o.kt)("inlineCode",{parentName:"em"},"mysql_slow_query_warning")," convar was set to 5 here.")))}c.isMDXComponent=!0}}]);