"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9414],{2127:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9496);const i=e=>{const t={fontSize:"1.3rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return a.createElement("div",{style:{width:"fit-content",fontWeight:"600",padding:"0.5rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white",...e.style},className:"icon-button"},"left"===e.side&&a.createElement("div",{style:t},e.icon),a.createElement("div",null,e.children),"right"===e.side&&a.createElement("div",{style:t},e.icon))}},3311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(4250),i=(n(9496),n(9613)),s=n(2127),r=n(9337);const l={title:"Creating custom stashes"},o=void 0,p={unversionedId:"ox_inventory/Guides/stashes",id:"ox_inventory/Guides/stashes",title:"Creating custom stashes",description:"We can set up custom stashes from outside the resource utilising the exported RegisterStash function.",source:"@site/docs/ox_inventory/Guides/stashes.md",sourceDirName:"ox_inventory/Guides",slug:"/ox_inventory/Guides/stashes",permalink:"/docs/ox_inventory/Guides/stashes",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Guides/stashes.md",tags:[],version:"current",lastUpdatedAt:1682917154,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Creating custom stashes"},sidebar:"ox_inventory",previous:{title:"Creating shops",permalink:"/docs/ox_inventory/Guides/shops"}},d={},u=[{value:"Stash properties",id:"stash-properties",level:3},{value:"Example",id:"example",level:2},{value:"Example resource",id:"example-resource",level:2}],h={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We can set up custom stashes from outside the resource utilising the exported RegisterStash function."),(0,i.kt)("p",null,"Firstly, we need to define the stashes properties."),(0,i.kt)("h3",{id:"stash-properties"},"Stash properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"id: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unique name to identify the stash in the database."))),(0,i.kt)("li",{parentName:"ul"},"label: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Display name when viewing the stash."))),(0,i.kt)("li",{parentName:"ul"},"slots: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Number of slots the stash will have."))),(0,i.kt)("li",{parentName:"ul"},"weight: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Maximum weight of the stash inventory."))),(0,i.kt)("li",{parentName:"ul"},"owner?: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true"),": Each player has their own unique stash, but can request to open the stash of another player"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"false"),": Only a single stash exists and is shared between all players"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": The stash explicitly belongs to the given owner, usually a player identifier"))),(0,i.kt)("li",{parentName:"ul"},"groups?: ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Key-value pairs of job name and minimum grade to be able to access the stash. (",(0,i.kt)("inlineCode",{parentName:"li"},'{["police"] = 0, ["ambulance"] = 2}'),")"),(0,i.kt)("li",{parentName:"ul"},"name: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"grade: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")))),(0,i.kt)("li",{parentName:"ul"},"coords?: ",(0,i.kt)("inlineCode",{parentName:"li"},"vector3")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can set the stash coordinates to prevent the stash from being opened if the player isn't close enough."),(0,i.kt)("li",{parentName:"ul"},"Vector or table containing the coordinates of the stash.")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Below the value is hardset, but it could be loaded from the database (especially if there are unknown fields, i.e. owner)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Server\nlocal stash = {\n    id = '42wallabyway',\n    label = '42 Wallaby Way',\n    slots = 50,\n    weight = 100000,\n    owner = 'char1:license'\n}\n\nAddEventHandler('onServerResourceStart', function(resourceName)\n    if resourceName == 'ox_inventory' or resourceName == GetCurrentResourceName() then\n        exports.ox_inventory:RegisterStash(stash.id, stash.label, stash.slots, stash.weight, stash.owner)\n    end\nend)\n\n-- Client\nexports.ox_inventory:openInventory('stash', {id='42wallabyway', owner=property.owner})\n")),(0,i.kt)("p",null,"The following sample is based on esx_property's db data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Server\nlocal properties\n\nMySQL.query('SELECT * FROM `properties`', {}, function(result)\n    properties = result\nend\n\nRegisterNetEvent('ox:loadStashes', function(id)\nlocal stash = properties[id]\n    if stash then\n        -- id: 1, name: WhispymoundDrive, label: 2677 Whispymound Drive, coords: {\"x\":118.748,\"y\":566.573,\"z\":175.697}\n        ox_inventory:RegisterStash(stash.name, stash.label, 50, 100000, true, false, json.encode(stash.room_menu))\n    end\nend)\n\n-- Client\nlocal ox_inventory = exports.ox_inventory\n\nif ox_inventory:openInventory('stash', property.id) == false then\n    TriggerServerEvent('ox:loadStashes')\n    ox_inventory:openInventory('stash', property.id)\nend\n")),(0,i.kt)("h2",{id:"example-resource"},"Example resource"),(0,i.kt)("p",null,"We put together an example resource showcasing how to properly utilise the stash API:"),(0,i.kt)("div",{style:{width:"fit-content"}},(0,i.kt)("a",{href:"https://www.github.com/overextended/ox_inventory_examples"},(0,i.kt)(s.Z,{side:"left",icon:(0,i.kt)(r.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub"))))}m.isMDXComponent=!0}}]);