"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return i}});var a=n(67294),r=n(45697),o=n.n(r);function i(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:r,keepAlive:o=!0,children:i}=e;const[s,u]=(0,a.useState)(t),c=s||o;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>u(!s)},a.createElement("h3",null,a.createElement(l,{opened:s}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},c&&i))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}i.propTypes={children:o().any},s.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},l.propTypes={opened:o().bool}},65737:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905)),o=n(38545);const i={description:"Explains how to execute guard-specific instructions."},s="Special Guard Instructions",l={unversionedId:"programs/candy-machine/special-guard-instructions",id:"programs/candy-machine/special-guard-instructions",title:"Special Guard Instructions",description:"Explains how to execute guard-specific instructions.",source:"@site/docs/01-programs/02-candy-machine/07-special-guard-instructions.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/special-guard-instructions",permalink:"/programs/candy-machine/special-guard-instructions",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/07-special-guard-instructions.md",tags:[],version:"current",lastUpdatedAt:1693391782,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:7,frontMatter:{description:"Explains how to execute guard-specific instructions."},sidebar:"sidebar",previous:{title:"Guard Groups",permalink:"/programs/candy-machine/guard-groups"},next:{title:"Minting",permalink:"/programs/candy-machine/minting"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"The Route Instruction",id:"the-route-instruction",level:2},{value:"Route Instruction With Groups",id:"route-instruction-with-groups",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"special-guard-instructions"},"Special Guard Instructions"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As we\u2019ve seen on the previous pages, guards are a powerful way to customize the minting process of your Candy Machines. But did you know guards can even provide their own custom instructions?"),(0,r.kt)("h2",{id:"the-route-instruction"},"The Route Instruction"),(0,r.kt)("p",null,"The Candy Guard program ships with a special instruction called ",(0,r.kt)("strong",{parentName:"p"},"the \u201cRoute\u201d instruction"),"."),(0,r.kt)("p",null,"This instruction allows us to ",(0,r.kt)("strong",{parentName:"p"},"select a specific guard")," from our Candy Machine and ",(0,r.kt)("strong",{parentName:"p"},"run a custom instruction")," that is specific to this guard. We call it the \u201cRoute\u201d instruction because it will route our request to the selected guard."),(0,r.kt)("p",null,"This feature makes guards even more powerful as they can ship with their own program logic. It enables guards to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decouple the verification process from the minting process for heavy operations."),(0,r.kt)("li",{parentName:"ul"},"Provide custom features that would otherwise require the deployment of a custom program.")),(0,r.kt)("p",null,"To call a route instruction, we must specify which guard we want to route that instruction to as well as ",(0,r.kt)("strong",{parentName:"p"},"provide the route settings it expects"),". Note that if we try to execute the \u201croute\u201d instruction by selecting a guard that does not support it, the transaction will fail."),(0,r.kt)("p",null,"Since there can only be one \u201croute\u201d instruction per registered guard on a Candy Guard program, it is common to provide a ",(0,r.kt)("strong",{parentName:"p"},"Path")," attribute in the route settings to distinguish between multiple features offered by the same guard."),(0,r.kt)("p",null,"For instance, a guard adding support for Frozen NFTs \u2014 that can only be thawed once minting is over \u2014 could use their route instruction to initialize the treasury escrow account as well as allow anyone to thaw a minted NFT under the right conditions. We could distinguish these two features by using a ",(0,r.kt)("strong",{parentName:"p"},"Path")," attribute equal to \u201cinit\u201d for the former and \u201cthaw\u201d for the latter."),(0,r.kt)("p",null,"You will find a detailed explanation of the route instruction of each guard that supports it and their underlying paths ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/available-guards"},"on their respective pages"),"."),(0,r.kt)("p",null,"Let\u2019s take a minute to illustrate how the route instruction works by providing an example. The ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/available-guards/allow-list"},(0,r.kt)("strong",{parentName:"a"},"Allow List"))," guard, for instance, supports the route instruction in order to verify that the minting wallet is part of the preconfigured list of wallets."),(0,r.kt)("p",null,"It does that using ",(0,r.kt)("a",{parentName:"p",href:"https://en.m.wikipedia.org/wiki/Merkle_tree"},"Merkle Trees")," which means we need to create a hash of the entire list of allowed wallets and store that hash \u2014 known as the ",(0,r.kt)("strong",{parentName:"p"},"Merkle Root")," \u2014 on the guard settings. For a wallet to prove it is on the allowed list, it must provide a list of hashes \u2014 known as the ",(0,r.kt)("strong",{parentName:"p"},"Merkle Proof")," \u2014 that allows the program to compute the Merkle Root and ensure it matches the guard\u2019s settings."),(0,r.kt)("p",null,"Therefore, the Allow List guard ",(0,r.kt)("strong",{parentName:"p"},"uses its route instruction to verify the Merkle Proof of a given wallet")," and, if successful, creates a small PDA account on the blockchain that acts as verification proof for the mint instruction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-SpecialGuardInstructions1.png",src:n(47141).Z+"#radius",width:"2472",height:"1106"})),(0,r.kt)("p",null,"So why can\u2019t we just verify the Merkle Proof directly within the mint instruction? That\u2019s simply because, for big allow lists, Merkle Proofs can end up being pretty lengthy. After a certain size, it becomes impossible to include it within the mint transaction that already contains a decent amount of instructions. By separating the validation process from the minting process, we make it possible for allow lists to be as big as we need them to be."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"You may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," function to call the route instruction of a guard using the Umi library. You will need to pass the guard\u2019s name via the ",(0,r.kt)("inlineCode",{parentName:"p"},"guard")," attribute and its route settings via the ",(0,r.kt)("inlineCode",{parentName:"p"},"routeArgs")," attribute."),(0,r.kt)("p",null,"Here is an example using the Allow List guard which validates the wallet\u2019s Merkle Proof before minting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  create,\n  route,\n  getMerkleProof,\n  getMerkleRoot,\n} from "@metaplex-foundation/mpl-candy-machine";\n\n// Prepare the allow list.\n// Let\'s assume the first wallet on the list is the Metaplex identity.\nconst allowList = [\n  "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS",\n  "2vjCrmEFiN9CLLhiqy8u1JPh48av8Zpzp3kNkdTtirYG",\n  "AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy",\n];\nconst merkleRoot = getMerkleRoot(allowList);\n\n// Create a Candy Machine with an Allow List guard.\nawait create(umi, {\n  // ...\n  guards: {\n    allowList: some({ merkleRoot }),\n  },\n}).sendAndConfirm(umi);\n\n// If we try to mint now, it will fail because\n// we did not verify our Merkle Proof.\n\n// Verify the Merkle Proof using the route instruction.\nawait route(umi, {\n  candyMachine: candyMachine.publicKey,\n  guard: "allowList",\n  routeArgs: {\n    path: "proof",\n    merkleRoot,\n    merkleProof: getMerkleProof(\n      allowList,\n      "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS"\n    ),\n  },\n}).sendAndConfirm(umi);\n\n// If we try to mint now, it will succeed.\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/route.html"},"route"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetRouteArgs.html"},"DefaultGuardSetRouteArgs")))),(0,r.kt)(o.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"You may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"callGuardRoute")," operation to call the route instruction of a guard using the JS SDK. You must pass the guard\u2019s name via the ",(0,r.kt)("inlineCode",{parentName:"p"},"guard")," attribute and the route settings via the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," attribute.\nHere is an example using the Allow List guard which validates the wallet\u2019s Merkle Proof before minting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { getMerkleProof, getMerkleRoot } from "@metaplex-foundation/js";\n\n// Prepare the allow list.\n// Let\'s assume the first wallet on the list is the Metaplex identity.\nconst allowList = [\n  "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS",\n  "2vjCrmEFiN9CLLhiqy8u1JPh48av8Zpzp3kNkdTtirYG",\n  "AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy",\n];\n\n// Create a Candy Machine with an Allow List guard.\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    allowList: { merkleRoot: getMerkleRoot(allowList) },\n  },\n});\n\n// If we try to mint now, it will fail because\n// we did not verify our Merkle Proof.\n\n// Verify the Merkle Proof using the route instruction.\nawait metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: "allowList",\n  settings: {\n    path: "proof",\n    merkleProof: getMerkleProof(\n      allowList,\n      "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS"\n    ),\n  },\n});\n\n// If we try to mint now, it will succeed.\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardRouteSettings.html"},"Default Route Settings"),".")))),(0,r.kt)("h2",{id:"route-instruction-with-groups"},"Route Instruction With Groups"),(0,r.kt)("p",null,"When calling the route instruction whilst using guard groups, it is important to ",(0,r.kt)("strong",{parentName:"p"},"specify the group label")," of the guard we wish to select. This is because we may have multiple guards of the same type across different groups and the program needs to know which one it should use for the route instruction."),(0,r.kt)("p",null,"For instance, say we had an ",(0,r.kt)("strong",{parentName:"p"},"Allow List")," of handpicked VIP wallets in one group and another ",(0,r.kt)("strong",{parentName:"p"},"Allow List")," for the winners of a raffle in another group. Then saying we want to verify the Merkle Proof for the Allow List guard is not enough, we also need to know for which group we should perform that verification."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"When using groups, the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," function of the Umi library accepts an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," attribute of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<string>")," which must be set to the label of the group we want to select."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  create,\n  route,\n  getMerkleProof,\n  getMerkleRoot,\n} from "@metaplex-foundation/mpl-candy-machine";\nimport { base58PublicKey, some } from "@metaplex-foundation/umi";\n\n// Prepare the allow lists.\nconst allowListA = [...];\nconst allowListB = [...];\n\n// Create a Candy Machine with two Allow List guards.\nawait create(umi, {\n  // ...\n  groups: [\n    {\n      label: "listA",\n      guards: {\n        allowList: some({ merkleRoot: getMerkleRoot(allowListA) }),\n      },\n    },\n    {\n      label: "listB",\n      guards: {\n        allowList: some({ merkleRoot: getMerkleRoot(allowListB) }),\n      },\n    },\n  ],\n}).sendAndConfirm(umi);\n\n// Verify the Merkle Proof by specifying which group to select.\nawait route(umi, {\n  candyMachine: candyMachine.publicKey,\n  guard: \'allowList\',\n  group: some(\'listA\'), // <- We are veryfing using "allowListA".\n  routeArgs: {\n    path: \'proof\',\n    merkleRoot: getMerkleRoot(allowListA),\n    merkleProof: getMerkleProof(\n      allowListA,\n      base58PublicKey(umi.identity),\n    ),\n  },\n}).sendAndConfirm(umi);\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/route.html"},"route"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetRouteArgs.html"},"DefaultGuardSetRouteArgs")))),(0,r.kt)(o.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"When using groups in the JS SDK, the ",(0,r.kt)("inlineCode",{parentName:"p"},"callGuardRoute")," operation accepts an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," attribute which must be set to the label of the group we want to select."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { getMerkleProof, getMerkleRoot } from '@metaplex-foundation/js';\n\n// Prepare the allow lists.\nconst allowListA = [...];\nconst allowListB = [...];\n\n// Create a Candy Machine with two Allow List guards.\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  groups: [\n    {\n      label: \"listA\",\n      guards: {\n        allowList: { merkleRoot: getMerkleRoot(allowListA) },\n      },\n    },\n    {\n      label: \"listB\",\n      guards: {\n        allowList: { merkleRoot: getMerkleRoot(allowListB) },\n      },\n    },\n  ],\n});\n\n// Verify the Merkle Proof by specifying which group to select.\nawait metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: 'allowList',\n  group: 'listA', // <- We are veryfing using \"allowListA\".\n  settings: {\n    path: 'proof',\n    merkleProof: getMerkleProof(\n      allowListA,\n      metaplex.identity().publicKey.toBase58(),\n    ),\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardRouteSettings.html"},"Default Route Settings"),".")))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The route instruction makes guards even more powerful by allowing them to ship with their own custom program logic. Check out the dedicated pages of ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/available-guards"},"all available guards")," to see the full feature set of each guard."),(0,r.kt)("p",null,"Now that we know everything there is to know about setting up Candy Machines and their guards, it\u2019s about time we talk about minting. See you on ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/minting"},"the next page"),"!"))}d.isMDXComponent=!0},47141:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-SpecialGuardInstructions1-1fbde108a30b8b42cc1a2aa16b76543b.png"}}]);