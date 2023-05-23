"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3716],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44944:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var a=n(83117),r=(n(67294),n(3905));const l={},o="Protocol Fees",i={unversionedId:"resources/protocol-fees",id:"resources/protocol-fees",title:"Protocol Fees",description:"The Metaplex Foundation currently charges the following protocol fees:",source:"@site/docs/05-resources/04-protocol-fees.md",sourceDirName:"05-resources",slug:"/resources/protocol-fees",permalink:"/resources/protocol-fees",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/05-resources/04-protocol-fees.md",tags:[],version:"current",lastUpdatedAt:1684870966,formattedLastUpdatedAt:"May 23, 2023",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Stability Index",permalink:"/resources/stability-index"},next:{title:"Deprecated",permalink:"/deprecated/"}},u={},s=[{value:"FAQs",id:"faqs",level:2},{value:"Will the fee amounts change over time?",id:"will-the-fee-amounts-change-over-time",level:3},{value:"How much will it cost me, as a creator, in Token Metadata fees to launch a 10k NFT collection through Candy Machine?",id:"how-much-will-it-cost-me-as-a-creator-in-token-metadata-fees-to-launch-a-10k-nft-collection-through-candy-machine",level:3},{value:"Do the freeze and thaw fees impact pNFT transfers?",id:"do-the-freeze-and-thaw-fees-impact-pnft-transfers",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"protocol-fees"},"Protocol Fees"),(0,r.kt)("p",null,"The Metaplex Foundation currently charges the following protocol fees:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Instruction"),(0,r.kt)("th",{parentName:"tr",align:null},"Program"),(0,r.kt)("th",{parentName:"tr",align:null},"Typical Payer"),(0,r.kt)("th",{parentName:"tr",align:null},"Amount (SOL)"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create"),(0,r.kt)("td",{parentName:"tr",align:null},"Token Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Collector"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01"),(0,r.kt)("td",{parentName:"tr",align:null},"The minter for most NFTs created on Solana are the individual collectors minting from new drops. Creators that mint many NFTs may consider using compression for radically lower mint costs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update"),(0,r.kt)("td",{parentName:"tr",align:null},"Token Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Creator"),(0,r.kt)("td",{parentName:"tr",align:null},"0.002*"),(0,r.kt)("td",{parentName:"tr",align:null},"This fee applies only to the update instructions that are NOT called during the initial mint of an NFT.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Verify"),(0,r.kt)("td",{parentName:"tr",align:null},"Token Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Creator"),(0,r.kt)("td",{parentName:"tr",align:null},"0.001*"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Freeze delegate"),(0,r.kt)("td",{parentName:"tr",align:null},"Token Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Collector"),(0,r.kt)("td",{parentName:"tr",align:null},"0.001*"),(0,r.kt)("td",{parentName:"tr",align:null},"This is NOT the spl-token freeze and applies only to NonFungible tokens (regular NFTs). This fee is paid by the person granting the authority to freeze their NFT, e.g. for staking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Thaw delegate"),(0,r.kt)("td",{parentName:"tr",align:null},"Token Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Collector"),(0,r.kt)("td",{parentName:"tr",align:null},"0.001*"),(0,r.kt)("td",{parentName:"tr",align:null},"This is NOT the spl-token freeze and applies only to NonFungible tokens (regular NFTs). This fee is paid by the person granting the authority to thaw their NFT, e.g. for staking")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Combine"),(0,r.kt)("td",{parentName:"tr",align:null},"Fusion (Trifle)"),(0,r.kt)("td",{parentName:"tr",align:null},"Collector"),(0,r.kt)("td",{parentName:"tr",align:null},"0.002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Split"),(0,r.kt)("td",{parentName:"tr",align:null},"Fusion (Trifle)"),(0,r.kt)("td",{parentName:"tr",align:null},"Collector"),(0,r.kt)("td",{parentName:"tr",align:null},"0.002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edit constraint"),(0,r.kt)("td",{parentName:"tr",align:null},"Fusion (Trifle)"),(0,r.kt)("td",{parentName:"tr",align:null},"Creator"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"*These fees are currently under review and may not be the final amounts at launch."),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("h3",{id:"will-the-fee-amounts-change-over-time"},"Will the fee amounts change over time?"),(0,r.kt)("p",null,"We are constantly monitoring community feedback related to the fees and may change the fee amounts over time. Our goal is for fees to be minimally disruptive and promote the growth and usage of the protocol."),(0,r.kt)("h3",{id:"how-much-will-it-cost-me-as-a-creator-in-token-metadata-fees-to-launch-a-10k-nft-collection-through-candy-machine"},"How much will it cost me, as a creator, in Token Metadata fees to launch a 10k NFT collection through Candy Machine?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard 10k drop: Create: 0 SOL, fees are spread amongst the collectors"),(0,r.kt)("li",{parentName:"ul"},"[Optional]"," If using CMv3's reveal feature:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Freeze: 0 SOL, fees are spread amongst the collectors"),(0,r.kt)("li",{parentName:"ul"},"Reveal: Update 20* SOL"),(0,r.kt)("li",{parentName:"ul"},"Thaw: 10* SOL")))),(0,r.kt)("h3",{id:"do-the-freeze-and-thaw-fees-impact-pnft-transfers"},"Do the freeze and thaw fees impact pNFT transfers?"),(0,r.kt)("p",null,"No."))}p.isMDXComponent=!0}}]);