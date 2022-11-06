"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3410],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return i}});var a=n(67294),r=n(45697),o=n.n(r);function i(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:r,keepAlive:o=!0,children:i}=e;const[s,l]=(0,a.useState)(t),u=s||o;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>l(!s)},a.createElement("h3",null,a.createElement(c,{opened:s}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},u&&i))}function c(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}i.propTypes={children:o().any},s.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},c.propTypes={opened:o().bool}},66875:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=(n(67294),n(3905)),o=n(38545);const i={description:"Set the price of the mint in token amount."},s="Token Payment",c={unversionedId:"programs/candy-machine/available-guards/token-payment",id:"programs/candy-machine/available-guards/token-payment",title:"Token Payment",description:"Set the price of the mint in token amount.",source:"@site/docs/01-programs/02-candy-machine/09-available-guards/02-token-payment.md",sourceDirName:"01-programs/02-candy-machine/09-available-guards",slug:"/programs/candy-machine/available-guards/token-payment",permalink:"/programs/candy-machine/available-guards/token-payment",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/09-available-guards/02-token-payment.md",tags:[],version:"current",lastUpdatedAt:1667762390,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:2,frontMatter:{description:"Set the price of the mint in token amount."},sidebar:"sidebar",previous:{title:"Sol Payment",permalink:"/programs/candy-machine/available-guards/sol-payment"},next:{title:"Token Burn",permalink:"/programs/candy-machine/available-guards/token-burn"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"token-payment"},"Token Payment"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Token Payment")," guard allows minting by charging the payer some tokens from a configured mint account. Both the number of tokens and the destination address can also be configured."),(0,r.kt)("p",null,"If the payer does not have the required amount of tokens to pay, minting will fail."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsTokenPayment.png",src:n(64667).Z+"#radius",width:"2472",height:"1008"})),(0,r.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,r.kt)("p",null,"The Token Payment guard contains the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Amount"),": The number of tokens to charge the payer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mint"),": The address of the mint account defining the SPL Token we want to pay with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Destination Associated Token Address (ATA)"),": The address of the associated token account to send the tokens to. We can get this address by finding the Associated Token Address PDA using the ",(0,r.kt)("strong",{parentName:"li"},"Token Mint")," attribute and the address of any wallet that should receive these tokens.")),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s an example of how to set up a Candy Machine using the Token Payment guard. You may use the Associated Token Address (ATA) of any wallet. In this example, we\u2019ll use the ATA of the current identity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { token } from '@metaplex-foundation/js';\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    tokenPayment: {\n      amount: token(300),\n      mint: tokenMint.address,\n      destinationAta: metaplex.tokens().pdas().associatedTokenAccount({\n        mint: tokenMint.address,\n        owner: metaplex.identity().publicKey,\n      }),\n    },\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.TokenPaymentGuardSettings.html"},"Guard Settings"),".")))),(0,r.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Token Payment guard does not need Mint Settings.")),(0,r.kt)("p",null,"However, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to add the configured destination token address and the payer\u2019s token account to the remaining accounts of the mint instruction. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-guard#tokenpayment"},"Candy Guard\u2019s program documentation")," for more details."),(0,r.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Token Payment guard does not support the route instruction.")))}p.isMDXComponent=!0},64667:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsTokenPayment-9a75c2ddcbc77f861b3016a42a81d7cb.png"}}]);