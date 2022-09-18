"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9730],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),y=a,m=d["".concat(s,".").concat(y)]||d[y]||p[y]||l;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5014:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(6600),a=(t(9496),t(9613));const l={},i="Query",o={unversionedId:"oxmysql/Usage/query",id:"oxmysql/Usage/query",title:"Query",description:"Generic function that can be utilised for any query.",source:"@site/docs/oxmysql/Usage/query.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/query",permalink:"/docs/oxmysql/Usage/query",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/query.md",tags:[],version:"current",lastUpdatedAt:1663497641,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Prepare",permalink:"/docs/oxmysql/Usage/prepare"},next:{title:"Scalar",permalink:"/docs/oxmysql/Usage/scalar"}},s={},c=[{value:"Lua",id:"lua",level:2},{value:"Callback",id:"callback",level:3},{value:"Promise",id:"promise",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"Callback",id:"callback-1",level:3},{value:"Promise",id:"promise-1",level:3}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query"},"Query"),(0,a.kt)("p",null,"Generic function that can be utilised for any query.",(0,a.kt)("br",{parentName:"p"}),"\n","When selecting data it will return all matching rows and columns, otherwise it will return field data such as insertid, affectedRows, etc."),(0,a.kt)("h2",{id:"lua"},"Lua"),(0,a.kt)("h3",{id:"callback"},"Callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:query\n-- alias: MySQL.Async.query\n\nMySQL.query('SELECT * FROM users WHERE identifier = ?', {playerIdentifier}, function(result)\n    if result then\n        for i = 1, #result do\n            local row = result[i]\n            print(row.identifier, row.firstname, row.lastname)\n        end\n    end\nend)\n")),(0,a.kt)("h3",{id:"promise"},"Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:query_async\n-- alias: MySQL.Sync.query\n\nlocal result = MySQL.query.await('SELECT * FROM users WHERE identifier = ?', {playerIdentifier})\nif result then\n    for i = 1, #result do\n        local row = result[i]\n        print(row.identifier, row.firstname, row.lastname)\n    end\nend\n")),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("h3",{id:"callback-1"},"Callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.query\n\nMySQL.query('SELECT * FROM users WHERE identifier = ?', [playerIdentifier], (result) => {\n  if (result) {\n    result.forEach((row) => {\n      console.log(row.identifier, row.firstname, row.lastname)\n    })\n  }\n})\n")),(0,a.kt)("h3",{id:"promise-1"},"Promise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.query_async\n\nconst result = await MySQL.query('SELECT * FROM users WHERE identifier = ?', [playerIdentifier])\nif (result) {\n  result.forEach((row) => {\n    console.log(row.identifier, row.firstname, row.lastname)\n  })\n}\n")))}p.isMDXComponent=!0}}]);