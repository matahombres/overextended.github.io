"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4431],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3645:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9496),r=n(5924);const l="tabItem_x3QN";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(6600),r=n(9496),l=n(5924),o=n(6885),i=n(6878),c=n(7496),u=n(8906);const s="tabList_HjGn",p="tabItem_R6JG";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:b,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,c.U)(),[x,w]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==x&&k.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==x&&(C(t),w(a),null!=b&&N(b,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(6600),r=(n(9496),n(9613)),l=n(537),o=n(3645);const i={title:"Alert Dialog"},c=void 0,u={unversionedId:"ox_lib/Interface/Client/alert",id:"ox_lib/Interface/Client/alert",title:"Alert Dialog",description:"Simple alert dialog that can display a message to the player.",source:"@site/docs/ox_lib/Interface/Client/alert.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/alert",permalink:"/docs/ox_lib/Interface/Client/alert",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/alert.md",tags:[],version:"current",lastUpdatedAt:1663497641,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{title:"Alert Dialog"},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/GetNearbyVehicles/Client"},next:{title:"Clipboard",permalink:"/docs/ox_lib/Interface/Client/clipboard"}},s={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Simple alert dialog that can display a message to the player.",(0,r.kt)("br",{parentName:"p"}),"\n","Returns whether the player pressed the confirm button or canceled the dialog."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.alertDialog(data)\n"))),(0,r.kt)(o.Z,{value:"JS/TS",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This function is ",(0,r.kt)("strong",{parentName:"p"},"asynchronous")," requiring you to do a ",(0,r.kt)("inlineCode",{parentName:"p"},".then")," callback on the promise or make your function ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.alertDialog(data)\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"data: ",(0,r.kt)("inlineCode",{parentName:"li"},"table")," (",(0,r.kt)("inlineCode",{parentName:"li"},"object"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"header: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dialog title."))),(0,r.kt)("li",{parentName:"ul"},"content: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dialog body content, supports markdown."))),(0,r.kt)("li",{parentName:"ul"},"centered?: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Centers the dialog vertically and horizontally."))),(0,r.kt)("li",{parentName:"ul"},"cancel?: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Displays a cancel button (ESC is still available if this is not defined).")))))),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"confirm")," if the player pressed the confirm button, otherwise if the player pressed the cancel button\nor has exited the dialog with ESC the return will be ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Lua",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local alert = lib.alertDialog({\n    header = 'Hello there',\n    content = 'General Kenobi  \\n Markdown support!',\n    centered = true,\n    cancel = true\n})\n\nprint(alert)\n"))),(0,r.kt)(o.Z,{value:"JS/TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nconst alert = await lib.alertDialog({\n  header: 'Hello there',\n  content: 'General Kenobi  \\n Markdown support!',\n  centered: true,\n  cancel: true\n})\n\nconsole.log(alert)\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/TnUT3S1.png",alt:"alert_dialog"})))}m.isMDXComponent=!0}}]);