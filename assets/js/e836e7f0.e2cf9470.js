"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[336],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(4250),o=(n(9496),n(9613));const s={},a="Common Issues",i={unversionedId:"oxmysql/Getting Started/issues",id:"oxmysql/Getting Started/issues",title:"Common Issues",description:"Unable to establish a connection",source:"@site/docs/oxmysql/Getting Started/issues.md",sourceDirName:"oxmysql/Getting Started",slug:"/oxmysql/Getting Started/issues",permalink:"/docs/oxmysql/Getting Started/issues",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Getting Started/issues.md",tags:[],version:"current",lastUpdatedAt:1682917154,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"oxmysql",previous:{title:"Benchmark",permalink:"/docs/oxmysql/Getting Started/benchmark"},next:{title:"Placeholders",permalink:"/docs/oxmysql/Getting Started/placeholders"}},l={},c=[{value:"Unable to establish a connection",id:"unable-to-establish-a-connection",level:3},{value:"No such export ... in resource oxmysql",id:"no-such-export--in-resource-oxmysql",level:3},{value:"Numbers treated as string",id:"numbers-treated-as-string",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-issues"},"Common Issues"),(0,o.kt)("h3",{id:"unable-to-establish-a-connection"},"Unable to establish a connection"),(0,o.kt)("p",null,"This is usually the result of incorrect database settings or your password containing reserved characters (",(0,o.kt)("inlineCode",{parentName:"p"},"; , / ? : @ & = + $ #"),")."),(0,o.kt)("admonition",{title:"Solution",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Ensure you have entered the correct database settings in the mysql_connection_string convar.",(0,o.kt)("br",{parentName:"p"}),"\n","You can try using the semicolon-separated format if your password contains reserved characters.")),(0,o.kt)("h3",{id:"no-such-export--in-resource-oxmysql"},"No such export ... in resource oxmysql"),(0,o.kt)("p",null,"Typically the result of failing to follow instructions."),(0,o.kt)("admonition",{title:"Solution",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Download the latest release ",(0,o.kt)("em",{parentName:"p"},"build")," (not source) of oxmysql, and ensure it is starting before any resources that require it.")),(0,o.kt)("h3",{id:"numbers-treated-as-string"},"Numbers treated as string"),(0,o.kt)("p",null,"This is an incompatibility between mysqljs (used by mysql-async) and mysql2 (used by oxmysql) (See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sidorares/node-mysql2/tree/master/documentation#known-incompatibilities-with-node-mysql"},"Known incompatibilities with node-mysql"),")"),(0,o.kt)("p",null,"To resolve this issue simply add ",(0,o.kt)("inlineCode",{parentName:"p"},"&decimalNumbers=true")," to the connection string, ie. ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql://root@localhost/essentialmode?charset=utf8mb4_general_ci&decimalNumbers=true")," to revert to the behavior of mysqljs."),(0,o.kt)("p",null,"Do note with this that precision will be less with this, as Javascript treats all numbers as floats, so a double or decimal will be cast to a float this way."))}m.isMDXComponent=!0}}]);