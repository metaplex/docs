"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7322],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return i},U:function(){return l}});var a=n(67294),o=n(45697),r=n.n(o);function l(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function i(e){let{open:t,title:n,actions:o,keepAlive:r=!0,children:l}=e;const[i,p]=(0,a.useState)(t),d=i||r;return a.createElement("div",{className:["accordion-item",i?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>p(!i)},a.createElement("h3",null,a.createElement(s,{opened:i}),a.createElement("span",null,n)),o),a.createElement("div",{className:"accordion-item-content"},d&&l))}function s(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}l.propTypes={children:r().any},i.propTypes={open:r().bool,title:r().string,children:r().any,actions:r().any,keepAlive:r().bool},s.propTypes={opened:r().bool}},68376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(83117),o=(n(67294),n(3905)),r=n(38545);const l={description:"Uses a wallet address list to determine who is allowed to mint."},i="Allow List",s={unversionedId:"programs/candy-machine/available-guards/allow-list",id:"programs/candy-machine/available-guards/allow-list",title:"Allow List",description:"Uses a wallet address list to determine who is allowed to mint.",source:"@site/docs/01-programs/02-candy-machine/10-available-guards/02-allow-list.md",sourceDirName:"01-programs/02-candy-machine/10-available-guards",slug:"/programs/candy-machine/available-guards/allow-list",permalink:"/programs/candy-machine/available-guards/allow-list",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/10-available-guards/02-allow-list.md",tags:[],version:"current",lastUpdatedAt:1688758618,formattedLastUpdatedAt:"Jul 7, 2023",sidebarPosition:2,frontMatter:{description:"Uses a wallet address list to determine who is allowed to mint."},sidebar:"sidebar",previous:{title:"Address Gate",permalink:"/programs/candy-machine/available-guards/address-gate"},next:{title:"Bot Tax",permalink:"/programs/candy-machine/available-guards/bot-tax"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2},{value:"Validate a Merkle Proof",id:"validate-a-merkle-proof",level:3}],c={toc:d};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"allow-list"},"Allow List"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Allow List")," guard validates the minting wallet against a predefined list of wallets. If the minting wallet is not part of this list, minting will fail."),(0,o.kt)("p",null,"Providing a big list of wallets in the settings of this guard would require a lot of storage on the blockchain and would likely need more than one transaction to insert them all. Therefore, the Allow List guard uses ",(0,o.kt)("a",{parentName:"p",href:"https://en.m.wikipedia.org/wiki/Merkle_tree"},(0,o.kt)("strong",{parentName:"a"},"Merkle Trees"))," to verify that the minting wallet is part of the preconfigured list of wallets."),(0,o.kt)("p",null,"This works by creating a binary tree of hashes where all leaves hash themselves two by two until we reach the final hash known as the ",(0,o.kt)("strong",{parentName:"p"},"Merkle Root"),". This means that if any leaf were to change, the final Merkle Root would be corrupted."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CandyMachinesV3-GuardsAllowListMerkleTree1.png",src:n(21840).Z+"#radius",width:"2376",height:"984"})),(0,o.kt)("p",null,"To verify that a leaf is part of the tree, we simply need a list of all the intermediary hashes that allow us to go up the tree and re-compute the Merkle Root. We call this list of intermediary hashes a ",(0,o.kt)("strong",{parentName:"p"},"Merkle Proof"),". If the computed Merkle Root matches the stored Merkle Root, we can be sure that the leaf is part of the tree and therefore part of the original list."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CandyMachinesV3-GuardsAllowListMerkleTree2.png",src:n(58729).Z+"#radius",width:"2376",height:"984"})),(0,o.kt)("p",null,"Therefore, the Allow List guard\u2019s settings require a Merkle Root which acts as a source of truth for the preconfigured list of allowed wallets. For a wallet to prove it is on the allowed list, it must provide a valid Merkle Proof that allows the program to re-compute the Merkle Root and ensure it matches the guard\u2019s settings."),(0,o.kt)("p",null,"Note that our SDKs provide helpers to make it easy to create Merkle Root and Merkle Proofs for a given list of wallets."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CandyMachinesV3-GuardsAllowList.png",src:n(25209).Z+"#radius",width:"2472",height:"1296"})),(0,o.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,o.kt)("p",null,"The Allow List guard contains the following settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Merkle Root"),": The Root of the Merkle Tree representing the allow list.")),(0,o.kt)(r.U,{mdxType:"Accordion"},(0,o.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,o.kt)("div",{className:"accordion-item-padding"},(0,o.kt)("p",null,"To help us manage Merkle Trees, the Umi library provides two helper methods called ",(0,o.kt)("inlineCode",{parentName:"p"},"getMerkleRoot")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getMerkleProof")," that you may use like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  getMerkleProof,\n  getMerkleRoot,\n} from "@metaplex-foundation/mpl-candy-machine";\n\nconst allowList = [\n  "Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB",\n  "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS",\n  "AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy",\n];\n\nconst merkleRoot = getMerkleRoot(allowList);\nconst validMerkleProof = getMerkleProof(\n  allowList,\n  "Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB"\n);\nconst invalidMerkleProof = getMerkleProof(allowList, "invalid-address");\n')),(0,o.kt)("p",null,"Once we have computed the Merkle Root of our allow list, we can use it to set up the Allow List guard on our Candy Machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { getMerkleRoot } from "@metaplex-foundation/mpl-candy-machine";\n\nconst allowList = [\n  "Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB",\n  "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS",\n  "AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy",\n];\n\ncreate(umi, {\n  // ...\n  guards: {\n    allowList: some({ merkleRoot: getMerkleRoot(allowList) }),\n  },\n});\n')),(0,o.kt)("p",null,"API References: ",(0,o.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/AllowList.html"},"AllowList")))),(0,o.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,o.kt)("div",{className:"accordion-item-padding"},(0,o.kt)("p",null,"To help us manage Merkle Trees, the JS SDK provides two helper methods called ",(0,o.kt)("inlineCode",{parentName:"p"},"getMerkleRoot")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getMerkleProof")," that you may use like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { getMerkleProof, getMerkleRoot } from "@metaplex-foundation/js";\n\nconst allowList = [\n  "Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB",\n  "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS",\n  "AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy",\n];\n\nconst merkleRoot = getMerkleRoot(allowList);\nconst validMerkleProof = getMerkleProof(\n  allowList,\n  "Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB"\n);\nconst invalidMerkleProof = getMerkleProof(allowList, "invalid-address");\n')),(0,o.kt)("p",null,"Once we have computed the Merkle Root of our allow list, we can use it to set up the Allow List guard on our Candy Machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { getMerkleRoot } from "@metaplex-foundation/js";\n\nconst allowList = [\n  "Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB",\n  "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS",\n  "AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy",\n];\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    allowList: {\n      merkleRoot: getMerkleRoot(allowList),\n    },\n  },\n});\n')),(0,o.kt)("p",null,"API References: ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.AllowListGuardSettings.html"},"Guard Settings"),".")))),(0,o.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,o.kt)("p",null,"The Allow List guard contains the following Mint Settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Merkle Root"),": The Root of the Merkle Tree representing the allow list.")),(0,o.kt)("p",null,"Note that, before being able to mint, ",(0,o.kt)("strong",{parentName:"p"},"we must validate the minting wallet by providing a Merkle Proof"),". See ",(0,o.kt)("a",{parentName:"p",href:"#validate-a-merkle-proof"},"Validate a Merkle Proof")," below for more details."),(0,o.kt)("p",null,"Also note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to add the Allow List Proof PDA to the remaining accounts of the mint instruction. See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#allowlist"},"Candy Guard\u2019s program documentation")," for more details."),(0,o.kt)(r.U,{mdxType:"Accordion"},(0,o.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,o.kt)("div",{className:"accordion-item-padding"},(0,o.kt)("p",null,"You may pass the Mint Settings of the Allow List guard using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mintArgs")," argument like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { getMerkleRoot } from "@metaplex-foundation/mpl-candy-machine";\n\nconst allowList = [\n  "Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB",\n  "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS",\n  "AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy",\n];\n\nmintV2(umi, {\n  // ...\n  mintArgs: {\n    allowList: some({ merkleRoot: getMerkleRoot(allowList) }),\n  },\n});\n')),(0,o.kt)("p",null,"API References: ",(0,o.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html"},"mintV2"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/AllowListMintArgs.html"},"AllowListMintArgs")))),(0,o.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,o.kt)("div",{className:"accordion-item-padding"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The JS SDK does not require any Mint Settings for the Allow List guard since it can infer them from the provided Candy Machine model."))))),(0,o.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,o.kt)("p",null,"The Allow List route instruction supports the following features."),(0,o.kt)("h3",{id:"validate-a-merkle-proof"},"Validate a Merkle Proof"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Path: ",(0,o.kt)("inlineCode",{parentName:"em"},"proof"))),(0,o.kt)("p",null,"Instead of passing the Merkle Proof directly to the mint instruction, the minting wallet must perform a ",(0,o.kt)("a",{parentName:"p",href:"/programs/candy-machine/minting#minting-with-pre-validation"},"Pre-Validation")," by using the route instruction of the Allow List guard."),(0,o.kt)("p",null,"This route instruction will compute the Merkle Root from the provided Merkle Proof and, if valid, will create a new PDA account acting as proof that the minting wallet is part of the allowed list. Therefore, when minting, the Allow List guard only needs to check for the existence of this PDA account to authorize or deny minting to the wallet."),(0,o.kt)("p",null,"So why can\u2019t we just verify the Merkle Proof directly within the mint instruction? That\u2019s simply because, for big allow lists, Merkle Proofs can end up being pretty lengthy. After a certain size, it becomes impossible to include it within the mint transaction that already contains a decent amount of instructions. By separating the validation process from the minting process, we make it possible for allow lists to be as big as we need them to be."),(0,o.kt)("p",null,"This path of the route instruction accepts the following arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Path")," = ",(0,o.kt)("inlineCode",{parentName:"li"},"proof"),": Selects the path to execute in the route instruction."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Merkle Root"),": The Root of the Merkle Tree representing the allow list."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Merkle Proof"),": The list of intermediary hashes that should be used to compute the Merkle Root and verify that it matches the Merkle Root stored on the guard\u2019s settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Minter")," (optional): The minter account as a signer if it is not the same as the payer. When provided, this account must be part of the allow list for the proof to be valid.")),(0,o.kt)(r.U,{mdxType:"Accordion"},(0,o.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,o.kt)("div",{className:"accordion-item-padding"},(0,o.kt)("p",null,'You may pass the "Proof" Route Settings of the Allow List guard using the ',(0,o.kt)("inlineCode",{parentName:"p"},"routeArgs")," argument like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  getMerkleProof,\n  getMerkleRoot,\n} from "@metaplex-foundation/mpl-candy-machine";\nimport { base58PublicKey } from "@metaplex-foundation/umi";\n\nconst allowList = [\n  "Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB",\n  "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS",\n  "AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy",\n];\n\nawait route(umi, {\n  // ...\n  guard: "allowList",\n  routeArgs: {\n    path: "proof",\n    merkleRoot: getMerkleRoot(allowList),\n    merkleProof: getMerkleProof(allowList, base58PublicKey(umi.identity)),\n  },\n}).sendAndConfirm(umi);\n\n// The `umi.identity` wallet is now allowed to mint from the Candy Machine.\n')),(0,o.kt)("p",null,"API References: ",(0,o.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/route.html"},"route"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/AllowListRouteArgs.html"},"AllowListRouteArgs")))),(0,o.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,o.kt)("div",{className:"accordion-item-padding"},(0,o.kt)("p",null,"Here again, we can use the Merkle Tree helpers provided by the JS SDK to get the Merkle Proof for the minting wallet."),(0,o.kt)("p",null,"Note that the JS SDK does not require the Merkle Root to be passed in since it can get it from the provided Candy Machine model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { getMerkleProof, getMerkleRoot } from "@metaplex-foundation/js";\n\nconst allowList = [\n  "Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB",\n  "GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS",\n  "AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy",\n];\nconst mintingWallet = metaplex.identity().publicKey.toBase58();\n\nawait metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: "allowList",\n  settings: {\n    path: "proof",\n    merkleProof: getMerkleProof(allowList, mintingWallet),\n  },\n});\n\n// The `mintingWallet` is now allowed to mint from the Candy Machine.\n')),(0,o.kt)("p",null,"API References: ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,o.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.AllowListGuardRouteSettings.html"},"Route Settings"),".")))))}u.isMDXComponent=!0},25209:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsAllowList-2d55379c57646353ec0e7720074fc26b.png"},21840:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsAllowListMerkleTree1-dc11abd75c5af77e2c3a34ca0b363053.png"},58729:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsAllowListMerkleTree2-e6431bdad3fa57edce122b2de4cbb285.png"}}]);