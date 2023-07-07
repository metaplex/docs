"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[770],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return i}});var o=n(67294),r=n(45697),a=n.n(r);function i(e){let{children:t}=e;return o.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:r,keepAlive:a=!0,children:i}=e;const[s,u]=(0,o.useState)(t),l=s||a;return o.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},o.createElement("div",{className:"accordion-item-header",onClick:()=>u(!s)},o.createElement("h3",null,o.createElement(c,{opened:s}),o.createElement("span",null,n)),r),o.createElement("div",{className:"accordion-item-content"},l&&i))}function c(e){let{opened:t}=e;return t?o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},o.createElement("rect",{width:"256",height:"256",fill:"none"}),o.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},o.createElement("rect",{width:"256",height:"256",fill:"none"}),o.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}i.propTypes={children:a().any},s.propTypes={open:a().bool,title:a().string,children:a().any,actions:a().any,keepAlive:a().bool},c.propTypes={opened:a().bool}},57839:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var o=n(83117),r=(n(67294),n(3905)),a=n(38545);const i={description:"Explains how to manage Buyer Escrow Accounts."},s="Managing Buyer Escrow Account",c={unversionedId:"programs/auction-house/managing-buyer-account",id:"programs/auction-house/managing-buyer-account",title:"Managing Buyer Escrow Account",description:"Explains how to manage Buyer Escrow Accounts.",source:"@site/docs/01-programs/03-auction-house/05-managing-buyer-account.md",sourceDirName:"01-programs/03-auction-house",slug:"/programs/auction-house/managing-buyer-account",permalink:"/programs/auction-house/managing-buyer-account",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/03-auction-house/05-managing-buyer-account.md",tags:[],version:"current",lastUpdatedAt:1688758618,formattedLastUpdatedAt:"Jul 7, 2023",sidebarPosition:5,frontMatter:{description:"Explains how to manage Buyer Escrow Accounts."},sidebar:"sidebar",previous:{title:"Trading Assets on Auction House",permalink:"/programs/auction-house/trading-assets-on-auction-house"},next:{title:"Auction House Receipts",permalink:"/programs/auction-house/auction-house-receipts"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Balance",id:"getting-balance",level:2},{value:"Deposit Funds",id:"deposit-funds",level:2},{value:"Withdraw Funds",id:"withdraw-funds",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:l};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-buyer-escrow-account"},"Managing Buyer Escrow Account"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In the previous page we discussed how to make bids and listings, and execute sales of assets. When we talked about execution of sales, we briefly mentioned the ",(0,r.kt)("strong",{parentName:"p"},"Buyer Escrow Account"),". What is the utility of this account and why do we need to talk about it?"),(0,r.kt)("p",null,"This account is a program derived address (PDA) that acts as an escrow, by temporarily holds the bidder's funds (SOL or SPL-tokens). These funds are equal to the bidding price and are stored in this PDA until the sale goes through. When the sale is executed, the Auction House transfers these funds from the buyer escrow account PDA to the seller's wallet."),(0,r.kt)("p",null,"Now the question is: are these funds automatically transferred from the bidder's wallet to the buyer escrow account when the bid is made?"),(0,r.kt)("p",null,"The answer is no. That is the very reason why we need to talk about managing the buyer escrow account and the funds in them. These funds are managed by the Auction House authority. Let us see how we the authority manages this account."),(0,r.kt)("h2",{id:"getting-balance"},"Getting Balance"),(0,r.kt)("p",null,"Adding to the discussion in the previous section, it is the responsibility of the Auction House to make sure that there are enough funds in the buyer escrow account, for the sale to go through. "),(0,r.kt)("p",null,"To do so, firstly the Auction House should know how much funds are currently there in the buyer escrow account."),(0,r.kt)(a.U,{mdxType:"Accordion"},(0,r.kt)(a.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here's a code snippet that fetches the balance of the buyer escrow account for a given Auction House."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Keypair } from "@solana/web3.js";\n\nconst buyerBalance = await metaplex\n    .auctionHouse()\n    .getBuyerBalance({\n        auctionHouse,\n        buyerAddress: Keypair.generate() // The buyer\'s address\n    });\n'))))),(0,r.kt)("h2",{id:"deposit-funds"},"Deposit Funds"),(0,r.kt)("p",null,"At this point, the Auction House knows how much funds are currently there in the buyer escrow account corresponding to a user."),(0,r.kt)("p",null,"Now if this user makes a bid on an asset, Auction House can decide to transfer funds from the user's wallet to the buyer escrow account in case of insufficient funds."),(0,r.kt)(a.U,{mdxType:"Accordion"},(0,r.kt)(a.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Let us see how funds can be transferred from the buyer's wallet to the buyer escrow account for an Auction House."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Keypair } from "@solana/web3.js";\n\nconst depositResponse = await metaplex\n    .auctionHouse()\n    .depositToBuyerAccount({\n        auctionHouse,              // The Auction House in which escrow\n                                   // buyer deposits funds. We only need a subset of\n                                   // the `AuctionHouse` model but we need\n                                   // enough information regarding its\n                                   // settings to know how to deposit funds.\n        buyer: metaplex.identity() // The buyer who deposits funds. This expects a Signer\n        amount: 10                 // Amount of funds to deposit. This can either\n                                   // be in SOL or in the SPL token used by\n                                   // the Auction House as a currency.\n    });\n'))))),(0,r.kt)("h2",{id:"withdraw-funds"},"Withdraw Funds"),(0,r.kt)("p",null,"The Auction House should also be able to withdraw funds back from the buyer escrow wallet to the buyer's wallet, in case the user wants their funds back and / or have cancelled their bid."),(0,r.kt)(a.U,{mdxType:"Accordion"},(0,r.kt)(a.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Let us see how funds can be withdrawn from the buyer escrow wallet to the buyer's wallet for the given Auction House."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Keypair } from "@solana/web3.js";\n\nconst withdrawResponse = await metaplex\n    .auctionHouse()\n    .withdrawFromBuyerAccount({\n        auctionHouse,              // The Auction House from which escrow buyer withdraws funds\n        buyer: metaplex.identity() // The buyer who withdraws funds\n        amount: 10                 // Amount of funds to withdraw. This can either\n                                   // be in SOL or in the SPL token used by\n                                   // the Auction House as a currency.\n    });\n'))))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Now that we have also discussed how to manage the funds in the buyer escrow account, we are very close to be able to fully launch and control our own marketplace."),(0,r.kt)("p",null,"One important piece of information currently missing: how does a marketplace keep track of the listings, bids and sales? The Auction House program has something in the store for doing this, namely ",(0,r.kt)("a",{parentName:"p",href:"/programs/auction-house/auction-house-receipts"},"Receipts"),"."))}h.isMDXComponent=!0}}]);