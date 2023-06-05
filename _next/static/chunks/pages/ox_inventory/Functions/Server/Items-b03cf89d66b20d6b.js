(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3227],{3530:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_inventory/Functions/Server/Items",function(){return n(6554)}])},6554:function(e,s,n){"use strict";n.r(s);var r=n(1527),o=n(6510),l=n(6736);function i(e){let s=Object.assign({p:"p",a:"a",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Returns a table of all registered items. The format is as defined in ",(0,r.jsx)(s.a,{href:"https://github.com/overextended/ox_inventory/blob/main/data/items.lua",children:"data/items.lua"}),"."]}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Items"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,r.jsx)(s.p,{children:"The following snippet can be used in crafting resources such as okokCrafting or core_crafting, rather than querying the database."}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" itemNames"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ESX."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterServerCallback"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'crafting:itemNames'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"source"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"cb"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"not"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" itemNames "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        itemNames "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" item, data "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pairs"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(exports.ox_inventory:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Items"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            itemNames[item] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" data.label"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cb"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(itemNames)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})]})}n(5941),s.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/ox_inventory/Functions/Server/Items.mdx",route:"/ox_inventory/Functions/Server/Items",headings:[],title:"Items"},pageNextRoute:"/ox_inventory/Functions/Server/Items"})}},function(e){e.O(0,[6510,9774,2888,179],function(){return e(e.s=3530)}),_N_E=e.O()}]);