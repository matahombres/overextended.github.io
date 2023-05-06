"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[135],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||c;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(4250),o=(n(9496),n(9613));const c={},a=void 0,i={unversionedId:"ox_fuel/Functions/Client",id:"ox_fuel/Functions/Client",title:"Client",description:"setMoneyCheck",source:"@site/docs/ox_fuel/Functions/Client.md",sourceDirName:"ox_fuel/Functions",slug:"/ox_fuel/Functions/Client",permalink:"/docs/ox_fuel/Functions/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_fuel/Functions/Client.md",tags:[],version:"current",lastUpdatedAt:1683377988,formattedLastUpdatedAt:"May 6, 2023",frontMatter:{}},l={},u=[{value:"setMoneyCheck",id:"setmoneycheck",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"setmoneycheck"},"setMoneyCheck"),(0,o.kt)("p",null,'Replaces the standard inventory search for "money".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_fuel:setMoneyCheck(function()\n    local accounts = ESX.GetPlayerData().accounts\n\n    for i = 1, #accounts do\n        if accounts[i].name == 'bank' then\n            return accounts[i].money\n        end\n    end\n\n    return 0\nend)\n")))}p.isMDXComponent=!0}}]);