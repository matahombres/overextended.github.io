"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5199],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=u(n),v=o,d=y["".concat(c,".").concat(v)]||y[v]||p[v]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(6600),o=(n(9496),n(9613));const i={},a=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/SetDurability",id:"ox_inventory/Functions/Server/Inventory/SetDurability",title:"SetDurability",description:"Sets durability onto the specified slot.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/SetDurability.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/SetDurability",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SetDurability",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/SetDurability.md",tags:[],version:"current",lastUpdatedAt:1663497641,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"Search",permalink:"/docs/ox_inventory/Functions/Server/Inventory/Search"},next:{title:"SetMetadata",permalink:"/docs/ox_inventory/Functions/Server/Inventory/SetMetadata"}},c={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sets durability onto the specified slot."),(0,o.kt)("p",null,"Can be used for repairing weapons."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- inv: string or number\n-- slot: number\n-- durability: number\nexports.ox_inventory:SetDurability(inv, slot, durability)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local ox_inventory = exports.ox_inventory\n\n-- Set the durability of the item in slot 3 of source player's inventory to 100\nox_inventory:SetDurability(source, 3, 100)\n\n-- Set the durability of the source player's current weapon to 100\nlocal weapon = ox_inventory:GetCurrentWeapon(source)\n\nif weapon then\n    ox_inventory:SetDurability(source, weapon.slot, 100)\nend\n")))}p.isMDXComponent=!0}}]);