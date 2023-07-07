"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5297],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},38545:function(e,a,t){t.d(a,{Q:function(){return d},U:function(){return o}});var n=t(67294),r=t(45697),i=t.n(r);function o(e){let{children:a}=e;return n.createElement("div",{className:"accordion"},a)}function d(e){let{open:a,title:t,actions:r,keepAlive:i=!0,children:o}=e;const[d,l]=(0,n.useState)(a),c=d||i;return n.createElement("div",{className:["accordion-item",d?"accordion-item-opened":"accordion-item-closed"].join(" ")},n.createElement("div",{className:"accordion-item-header",onClick:()=>l(!d)},n.createElement("h3",null,n.createElement(s,{opened:d}),n.createElement("span",null,t)),r),n.createElement("div",{className:"accordion-item-content"},c&&o))}function s(e){let{opened:a}=e;return a?n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},n.createElement("rect",{width:"256",height:"256",fill:"none"}),n.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},n.createElement("rect",{width:"256",height:"256",fill:"none"}),n.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},d.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},s.propTypes={opened:i().bool}},91034:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=t(83117),r=(t(67294),t(3905)),i=t(38545);const o={description:"Explains how guards work and how to enable them."},d="Candy Guards",s={unversionedId:"programs/candy-machine/candy-guards",id:"programs/candy-machine/candy-guards",title:"Candy Guards",description:"Explains how guards work and how to enable them.",source:"@site/docs/01-programs/02-candy-machine/05-candy-guards.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/candy-guards",permalink:"/programs/candy-machine/candy-guards",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/05-candy-guards.md",tags:[],version:"current",lastUpdatedAt:1688758618,formattedLastUpdatedAt:"Jul 7, 2023",sidebarPosition:5,frontMatter:{description:"Explains how guards work and how to enable them."},sidebar:"sidebar",previous:{title:"Inserting Items",permalink:"/programs/candy-machine/inserting-items"},next:{title:"Guard Groups",permalink:"/programs/candy-machine/guard-groups"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is a guard?",id:"what-is-a-guard",level:2},{value:"The Candy Guard account",id:"the-candy-guard-account",level:2},{value:"Why another program?",id:"why-another-program",level:2},{value:"All available guards",id:"all-available-guards",level:2},{value:"Creating a Candy Machine with guards",id:"creating-a-candy-machine-with-guards",level:2},{value:"Updating guards",id:"updating-guards",level:2},{value:"Viewing the guards of a Candy Machine",id:"viewing-the-guards-of-a-candy-machine",level:2},{value:"Wrapping and unwrapping Candy Guard accounts manually",id:"wrapping-and-unwrapping-candy-guard-accounts-manually",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"candy-guards"},"Candy Guards"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Now that we know how Candy Machines work and how to load them, it\u2019s time we talk about the last piece of the puzzle: Guards."),(0,r.kt)("h2",{id:"what-is-a-guard"},"What is a guard?"),(0,r.kt)("p",null,"A guard is a modular piece of code that can restrict access to the mint of a Candy Machine and even add new features to it!"),(0,r.kt)("p",null,"There is a large set of guards to choose from and each of them can be activated and configured at will."),(0,r.kt)("p",null,"We\u2019ll touch on ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/available-guards"},"all available guards")," later in this documentation but let\u2019s go through a few examples here to illustrate that."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("strong",{parentName:"li"},"Start Date")," guard is enabled, minting will be forbidden before the preconfigured date. There is also an ",(0,r.kt)("strong",{parentName:"li"},"End Date")," guard to forbid minting after a given date."),(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("strong",{parentName:"li"},"Sol Payment")," guard is enabled, the minting wallet will have to pay a configured amount to a configured destination wallet. Similar guards exist for paying with tokens or NFTs of a specific collection."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Token Gate")," and ",(0,r.kt)("strong",{parentName:"li"},"NFT Gate")," guards restrict minting to certain token holders and NFT holders respectively."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Allow List")," guard only allows minting if the wallet is part of a predefined list of wallets. Kind of like a guest list for minting.")),(0,r.kt)("p",null,"As you can see, each guard takes care of one responsibility and one responsibility only which makes them composable. In other words, you can pick and choose the guards your need to create your perfect Candy Machine."),(0,r.kt)("h2",{id:"the-candy-guard-account"},"The Candy Guard account"),(0,r.kt)("p",null,"If you remember the content of our ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/managing-candy-machines#candy-machine-account"},"Candy Machine account"),", you\u2019ll see no signs of guards in there. This is because guards live in another account called the ",(0,r.kt)("strong",{parentName:"p"},"Candy Guard account")," which is created by the ",(0,r.kt)("strong",{parentName:"p"},"Candy Guard program"),"."),(0,r.kt)("p",null,"Each Candy Machine account should typically be associated with its own Candy Guard account which will add a layer of protection to it."),(0,r.kt)("p",null,"This works by creating a Candy Guard account and making it the ",(0,r.kt)("strong",{parentName:"p"},"Mint Authority")," of the Candy Machine account. By doing so, it is no longer possible to mint directly from the main Candy Machine program \u2014 known as the ",(0,r.kt)("strong",{parentName:"p"},"Candy Machine Core program"),". Instead, we must mint via the Candy Guard program which, if all guards are resolved successfully, will defer to the Candy Machine Core program to finish the minting process."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Candy Machines V3 - Candy Guards 1@2x.png",src:t(8031).Z+"#radius",width:"2472",height:"1226"})),(0,r.kt)("p",null,"Note that, since Candy Machine and Candy Guard accounts work hand and hand together, our SDKs treat them as one entity. When you create a Candy Machine with our SDKs, an associated Candy Guard account will also be created by default. The same goes when updating Candy Machines as they allow you to update guards at the same time. We will see some concrete examples on this page."),(0,r.kt)("h2",{id:"why-another-program"},"Why another program?"),(0,r.kt)("p",null,"The reason guards don\u2019t live in the main Candy Machine program is to separate the access control logic from the main Candy Machine responsibility which is to mint an NFT."),(0,r.kt)("p",null,"This enables guards to not only be modular but extendable. Anyone can create and deploy their own Candy Guard program to create custom guards whilst relying on the Candy Machine Core program for all the rest."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Candy Machines V3 - Candy Guards 2@2x.png",src:t(72141).Z+"#radius",width:"2520",height:"960"})),(0,r.kt)("p",null,"Note that our SDKs also offer ways to register your own Candy Guard programs and their custom guards so you can leverage their friendly API and easily share your guards with others."),(0,r.kt)("h2",{id:"all-available-guards"},"All available guards"),(0,r.kt)("p",null,"Alright, now that we understand what guards are, let\u2019s see what default guards are available to us."),(0,r.kt)("p",null,"In the following list, we\u2019ll provide a short description of each guard with a link pointing to their dedicated page for more advanced reading."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/address-gate"},(0,r.kt)("strong",{parentName:"a"},"Address Gate")),": Restricts the mint to a single address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/allow-list"},(0,r.kt)("strong",{parentName:"a"},"Allow List")),": Uses a wallet address list to determine who is allowed to mint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/bot-tax"},(0,r.kt)("strong",{parentName:"a"},"Bot Tax")),": Configurable tax to charge invalid transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/end-date"},(0,r.kt)("strong",{parentName:"a"},"End Date")),": Determines a date to end the mint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/freeze-sol-payment"},(0,r.kt)("strong",{parentName:"a"},"Freeze Sol Payment")),": Set the price of the mint in SOL with a freeze period."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/freeze-token-payment"},(0,r.kt)("strong",{parentName:"a"},"Freeze Token Payment")),": Set the price of the mint in token amount with a freeze period."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/gatekeeper"},(0,r.kt)("strong",{parentName:"a"},"Gatekeeper")),": Restricts minting via a Gatekeeper Network e.g. Captcha integration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/mint-limit"},(0,r.kt)("strong",{parentName:"a"},"Mint Limit")),": Specifies a limit on the number of mints per wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/nft-burn"},(0,r.kt)("strong",{parentName:"a"},"Nft Burn")),": Restricts the mint to holders of a specified collection, requiring a burn of the NFT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/nft-gate"},(0,r.kt)("strong",{parentName:"a"},"Nft Gate")),": Restricts the mint to holders of a specified collection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/nft-payment"},(0,r.kt)("strong",{parentName:"a"},"Nft Payment")),": Set the price of the mint as an NFT of a specified collection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/redeemed-amount"},(0,r.kt)("strong",{parentName:"a"},"Redeemed Amount")),": Determines the end of the mint based on the total amount minted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/sol-payment"},(0,r.kt)("strong",{parentName:"a"},"Sol Payment")),": Set the price of the mint in SOL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/start-date"},(0,r.kt)("strong",{parentName:"a"},"Start Date")),": Determines the start date of the mint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/third-party-signer"},(0,r.kt)("strong",{parentName:"a"},"Third Party Signer")),": Requires an additional signer on the transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/token-burn"},(0,r.kt)("strong",{parentName:"a"},"Token Burn")),": Restricts the mint to holders of a specified token, requiring a burn of the tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/token-gate"},(0,r.kt)("strong",{parentName:"a"},"Token Gate")),": Restricts the mint to holders of a specified token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards/token-payment"},(0,r.kt)("strong",{parentName:"a"},"Token Payment")),": Set the price of the mint in token amount.")),(0,r.kt)("h2",{id:"creating-a-candy-machine-with-guards"},"Creating a Candy Machine with guards"),(0,r.kt)("p",null,"So far, the Candy Machine we created did not have any guards enabled. Now that we know all the guards available to us, let\u2019s see how we can set up new Candy Machines with some guards enabled."),(0,r.kt)("p",null,"The concrete implementation will depend on which SDK you are using (see below) but the main idea is that you enable guards by providing their required settings. Any guard that has not been set up will be disabled."),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"To enable guards using the Umi library, simply provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," attribute to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," function and pass in the settings of every guard you want to enable. Any guard set to ",(0,r.kt)("inlineCode",{parentName:"p"},"none()")," or not provided will be disabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { some, sol, dateTime } from "@metaplex-foundation/umi";\n\nawait create(umi, {\n  // ...\n  guards: {\n    botTax: some({ lamports: sol(0.01), lastInstruction: true }),\n    solPayment: some({ lamports: sol(1.5), destination: treasury }),\n    startDate: some({ date: dateTime("2023-04-04T16:00:00Z") }),\n    // All other guards are disabled...\n  },\n}).sendAndConfirm(umi);\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetArgs.html"},"DefaultGuardSetArgs")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"To enable guards using the JS SDK, simply provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," attribute to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," operation and pass in the settings of every guard you want to enable. Any guard set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or not provided will be disabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sol, toBigNumber, toDateTime } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  itemsAvailable: toBigNumber(5000),\n  sellerFeeBasisPoints: 333, // 3.33%\n  collection: {\n    address: collectionNft.address,\n    updateAuthority: metaplex.identity(),\n  },\n  guards: {\n    botTax: { lamports: sol(0.01), lastInstruction: false },\n    solPayment: { amount: sol(1.5), destination: treasury },\n    startDate: { date: toDateTime("2022-10-17T16:00:00Z") },\n    // All other guards are disabled...\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardSettings.html"},"Default Candy Guard Settings"),".")))),(0,r.kt)("h2",{id:"updating-guards"},"Updating guards"),(0,r.kt)("p",null,"Did you set something wrong in your guards? Did you change your mind about the mint price? Do you need to delay the start of the mint of a little? No worries, guards can easily be updated following the same settings used when creating them."),(0,r.kt)("p",null,"You can enable new guards by providing their settings or disable current ones by giving them empty settings."),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"You may update the guards of a Candy Machine the same way you created them. That is, by providing their settings inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," object of the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateCandyGuard")," function. Any guard set to ",(0,r.kt)("inlineCode",{parentName:"p"},"none()")," or not provided will be disabled."),(0,r.kt)("p",null,"Note that the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," object will be updated meaning ",(0,r.kt)("strong",{parentName:"p"},"it will override all existing guards"),"!"),(0,r.kt)("p",null,"Therefore, make sure to provide the settings for all guards you want to enable, even if their settings are not changing. You may want to fetch the candy guard account first to fallback to its current guards."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { some, none, sol } from "@metaplex-foundation/umi";\n\nconst candyGuard = fetchCandyGuard(umi, candyMachine.mintAuthority);\nawait updateCandyGuard(umi, {\n  candyGuard: candyGuard.publicKey,\n  guards: {\n    ...candyGuard.guards,\n    botTax: none(),\n    solPayment: some({ lamports: sol(3), destination: treasury }),\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/updateCandyGuard.html"},"updateCandyGuard"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/CandyGuard.html"},"CandyGuard"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetArgs.html"},"DefaultGuardSetArgs")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"You may update the guards of a Candy Machine the same way you created them. That is, by providing their settings inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," object of the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," operation. Any guard set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or not provided will be disabled."),(0,r.kt)("p",null,"Note that the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," object will be updated meaning ",(0,r.kt)("strong",{parentName:"p"},"it will override all existing guards"),"!"),(0,r.kt)("p",null,"Therefore, make sure to provide the settings for all guards you want to enable, even if their settings are not changing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sol, toDateTime } from "@metaplex-foundation/js";\n\nawait metaplex.candyMachines().update({\n  candyMachine,\n  guards: {\n    botTax: { lamports: sol(0.01), lastInstruction: false },\n    solPayment: { amount: sol(3), destination: treasury },\n    startDate: { date: toDateTime("2022-10-18T16:00:00Z") },\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#update"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#update"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardSettings.html"},"Default Candy Guard Settings"),".")))),(0,r.kt)("h2",{id:"viewing-the-guards-of-a-candy-machine"},"Viewing the guards of a Candy Machine"),(0,r.kt)("p",null,"Once you have set up your guards on a Candy Machine, all the provided settings can be retrieved and viewed by anyone on the Candy Guard account."),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"You may access the candy guard associated with a candy machine by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchCandyGuard")," function on the ",(0,r.kt)("inlineCode",{parentName:"p"},"mintAuthority")," attribute of the candy machine account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  fetchCandyMachine,\n  fetchCandyGuard,\n} from "@metaplex-foundation/mpl-candy-machine";\n\nconst candyMachine = await fetchCandyMachine(umi, candyMachineAddress);\nconst candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);\n\ncandyGuard.guards; // All guard settings.\ncandyGuard.guards.botTax; // Bot Tax settings.\ncandyGuard.guards.solPayment; // Sol Payment settings.\n// ...\n')),(0,r.kt)("p",null,"Note that, when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," function, an associated candy guard account is automatically created for each candy machine such that their address is deterministic. Therefore, in this case, we could fetch both accounts using only one RPC call like so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { assertAccountExists } from "@metaplex-foundation/umi";\nimport {\n  findCandyGuardPda,\n  deserializeCandyMachine,\n  deserializeCandyGuard,\n} from "@metaplex-foundation/mpl-candy-machine";\n\nconst candyGuardAddress = findCandyGuardPda(umi, { base: candyMachineAddress });\nconst [rawCandyMachine, rawCandyGuard] = await umi.rpc.getAccounts([\n  candyMachineAddress,\n  candyGuardAddress,\n]);\nassertAccountExists(rawCandyMachine);\nassertAccountExists(rawCandyGuard);\n\nconst candyMachine = deserializeCandyMachine(umi, rawCandyMachine);\nconst candyGuard = deserializeCandyGuard(umi, rawCandyGuard);\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/fetchCandyGuard.html"},"fetchCandyGuard"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/findCandyGuardPda.html"},"findCandyGuardPda"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/CandyGuard.html"},"CandyGuard"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetArgs.html"},"DefaultGuardSetArgs")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"When using the JS SDK, Candy Machines associated with Candy Guards will automatically contain the relevant Candy Guard account so you have all the data you need in one place."),(0,r.kt)("p",null,"Namely, the Candy Machine model contains an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"candyGuard")," property which, when not ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", contains all the information regarding the guards of a Candy Machine."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"candyGuard")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", it means the Candy Machine is not associated with any Candy Guard account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const candyMachine = await metaplex.candyMachines().findByAddress({...});\n\n// This is how you can access the Candy Guard account\n// associated with the Candy Machine. When `null`,\n// the Candy Machine does not use guards.\ncandyMachine.candyGuard;\n\ncandyMachine.candyGuard.guards;            // All guard settings.\ncandyMachine.candyGuard.guards.botTax;     // Bot Tax settings.\ncandyMachine.candyGuard.guards.solPayment; // Sol Payment settings.\n// ...\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CandyMachine.html"},"Candy Machine model"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CandyGuard.html"},"Candy Guard model"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardSettings.html"},"Default Candy Guard Settings"),".")))),(0,r.kt)("h2",{id:"wrapping-and-unwrapping-candy-guard-accounts-manually"},"Wrapping and unwrapping Candy Guard accounts manually"),(0,r.kt)("p",null,"So far we\u2019ve managed both Candy Machine and Candy Guard accounts together because that makes the most sense for most projects."),(0,r.kt)("p",null,"However, it is important to note that Candy Machines and Candy Guards can be created and associated in different steps, even using our SDKs."),(0,r.kt)("p",null,"You will first need to create the two accounts separately and associate/dissociate them manually."),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," function of the Umi library already takes care of creating and associating a brand new Candy Guard account for every Candy Machine account created."),(0,r.kt)("p",null,"However, if you wanted to create them separately and manually associate/dissociate them, this is how you\u2019d do it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { some, percentAmount, sol, dateTime } from "@metaplex-foundation/umi";\n\n// Create a Candy Machine without a Candy Guard.\nconst candyMachine = generateSigner(umi);\nawait createCandyMachineV2({\n  candyMachine,\n  tokenStandard: TokenStandard.NonFungible,\n  collectionMint: collectionMint.publicKey,\n  collectionUpdateAuthority: umi.identity,\n  itemsAvailable: 100,\n  sellerFeeBasisPoints: percentAmount(1.23),\n  creators: [\n    { address: umi.identity.publicKey, verified: false, percentageShare: 100 },\n  ],\n  configLineSettings: some({\n    prefixName: "My NFT #",\n    nameLength: 3,\n    prefixUri: "https://example.com/",\n    uriLength: 20,\n    isSequential: false,\n  }),\n}).sendAndConfirm(umi);\n\n// Create a Candy Guard.\nconst base = generateSigner(umi);\nconst candyGuard = findCandyGuardPda(umi, { base: base.publicKey });\nawait createCandyGuard({\n  base,\n  guards: {\n    botTax: { lamports: sol(0.01), lastInstruction: false },\n    solPayment: { lamports: sol(1.5), destination: treasury },\n    startDate: { date: dateTime("2022-10-17T16:00:00Z") },\n  },\n}).sendAndConfirm(umi);\n\n// Associate the Candy Guard with the Candy Machine.\nawait wrap({\n  candyMachine: candyMachine.publicKey,\n  candyGuard,\n}).sendAndConfirm(umi);\n\n// Dissociate them.\nawait unwrap({\n  candyMachine: candyMachine.publicKey,\n  candyGuard,\n}).sendAndConfirm(umi);\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/createCandyMachineV2.html"},"createCandyMachineV2"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/createCandyGuard.html"},"createCandyGuard"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/wrap.html"},"wrap"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/unwrap.html"},"unwrap")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," operation of the JS SDK already takes care of creating and associating a brand new Candy Guard account for every Candy Machine account created."),(0,r.kt)("p",null,"However, if you wanted to create them separately and manually associate/dissociate them, this is how you\u2019d do it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sol, toBigNumber, toDateTime } from "@metaplex-foundation/js";\n\n// Create a Candy Machine without a Candy Guard.\nconst { candyMachine } = await metaplex.candyMachines().create({\n  itemsAvailable: toBigNumber(5000),\n  sellerFeeBasisPoints: 333, // 3.33%\n  collection: {\n    address: collectionNft.address,\n    updateAuthority: metaplex.identity(),\n  },\n  withoutCandyGuard: true,\n});\n\n// Create a Candy Guard.\nconst { candyGuard } = await metaplex.candyMachines().createCandyGuard({\n  guards: {\n    botTax: { lamports: sol(0.01), lastInstruction: false },\n    solPayment: { amount: sol(1.5), destination: treasury },\n    startDate: { date: toDateTime("2022-10-17T16:00:00Z") },\n  },\n});\n\n// Associate the Candy Guard with the Candy Machine.\nawait mx.candyMachines().wrapCandyGuard({\n  candyMachine: candyMachine.address,\n  candyGuard: candyGuard.address,\n});\n\n// Dissociate them.\nawait mx.candyMachines().unwrapCandyGuard({\n  candyMachine: candyMachine.address,\n  candyGuard: candyGuard.address,\n});\n')),(0,r.kt)("p",null,"API References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Candy Guard: ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#createCandyGuard"},"Operation"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyGuardInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyGuardOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#createCandyGuard"},"Transaction Builder"),"."),(0,r.kt)("li",{parentName:"ul"},"Wrap Candy Guard: ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#wrapCandyGuard"},"Operation"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.WrapCandyGuardInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.WrapCandyGuardOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#wrapCandyGuard"},"Transaction Builder"),"."),(0,r.kt)("li",{parentName:"ul"},"Unwrap Candy Guard: ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#unwrapCandyGuard"},"Operation"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.UnwrapCandyGuardInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.UnwrapCandyGuardOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#unwrapCandyGuard"},"Transaction Builder"),"."))))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Guards are important components of Candy Machines. They make it easy to configure the minting process whilst allowing anyone to create their own guards for application-specific needs. ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/guard-groups"},"On the next page"),", we\u2019ll see how we can create even more minting scenarios by using guard groups!"))}p.isMDXComponent=!0},8031:function(e,a,t){a.Z=t.p+"assets/images/CandyMachinesV3-CandyGuards1-07ab532a67028349ff2bbcdb7830506a.png"},72141:function(e,a,t){a.Z=t.p+"assets/images/CandyMachinesV3-CandyGuards2-dbd3cf18a01d136e1a92eb804d26ba6e.png"}}]);