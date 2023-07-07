"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8747],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=i,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function c(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67847:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return p}});var a=n(83117),i=(n(67294),n(3905));const r={sidebar_label:"2. Configuration"},l="Configuration",o={unversionedId:"deprecated/candy-machine-js-cli/configuration",id:"deprecated/candy-machine-js-cli/configuration",title:"Configuration",description:"The configuration in CMv2 is now specified in a single JSON file. This allows you to save and reuse the configuration across multiple drops. Additionally, there is a single account on-chain that holds all the configuration of a Candy Machine and the values can be updated at any point. The way the Candy Machine operates depends on the settings used, and therefore it is the most important part in setting up your Candy Machine. It is crucial to understand how the settings work to decide which ones to use for your project.",source:"@site/docs/06-deprecated/00-candy-machine-js-cli/01-configuration.md",sourceDirName:"06-deprecated/00-candy-machine-js-cli",slug:"/deprecated/candy-machine-js-cli/configuration",permalink:"/deprecated/candy-machine-js-cli/configuration",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/00-candy-machine-js-cli/01-configuration.md",tags:[],version:"current",lastUpdatedAt:1688758618,formattedLastUpdatedAt:"Jul 7, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"2. Configuration"},sidebar:"sidebar",previous:{title:"1. Getting Started",permalink:"/deprecated/candy-machine-js-cli/getting-started"},next:{title:"3. Preparing your Assets",permalink:"/deprecated/candy-machine-js-cli/preparing-assets"}},s={},p=[{value:"Minimal Configuration",id:"minimal-configuration",level:2},{value:"Gatekeeper Settings",id:"gatekeeper-settings",level:2},{value:"Provider Networks",id:"provider-networks",level:3},{value:"Civic Captcha Pass",id:"civic-captcha-pass",level:4},{value:"Verify by Encore",id:"verify-by-encore",level:4},{value:"Hidden Settings",id:"hidden-settings",level:2},{value:"End Settings",id:"end-settings",level:2},{value:"Whitelist Settings",id:"whitelist-settings",level:2},{value:"Finishing up",id:"finishing-up",level:2}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," is now specified in a single JSON file. This allows you to save and reuse the configuration across multiple drops. Additionally, there is a single account on-chain that holds all the configuration of a Candy Machine and the values can be updated at any point. The way the Candy Machine operates depends on the settings used, and therefore it is the ",(0,i.kt)("strong",{parentName:"p"},"most important part in setting up your Candy Machine"),". It is crucial to understand how the settings work to decide which ones to use for your project."),(0,i.kt)("p",null,"We will discuss a few examples on how to set up a Candy Machine, starting with the settings to configure a ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," to operate in a similar way as a ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv1"),"."),(0,i.kt)("p",null,"The table below provides an overview of the settings available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"price"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount in SOL or SPL token for a mint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of items in the Candy Machine")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gatekeeper"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Enables captcha verification for users prior to minting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"gatekeeperNetwork"),(0,i.kt)("td",{parentName:"tr",align:null},"Address"),(0,i.kt)("td",{parentName:"tr",align:null},"Gateway provider address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"expireOnUse"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Requires a new gateway challenge after a use")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"solTreasuryAccount"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"PublicKey"),(0,i.kt)("td",{parentName:"tr",align:null},"SOL wallet to receive proceedings SOL payments")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"splTokenAccount"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"PublicKey"),(0,i.kt)("td",{parentName:"tr",align:null},"SPL token wallet to receive proceedings from SPL token payments")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"splToken"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"PublicKey"),(0,i.kt)("td",{parentName:"tr",align:null},"Mint address of the token accepted as payment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"goLiveDate"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Datetime"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp when minting is allowed \u2013 the Candy Machine authority and whitelists can bypass this constraint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"endSettings"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"endSettingType"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201cdate\u201c: true"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable the use of a date to stop the mint - when the date specified in the ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," option is reached, the mint stops")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201camount\u201c: true"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable stopping the mint after a specific amount is minted - the amount is specified in the ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"Datetime or Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"Value to test the end condition. This will be either a date string (if ",(0,i.kt)("inlineCode",{parentName:"td"},"date")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),") or a integer amount value (if ",(0,i.kt)("inlineCode",{parentName:"td"},"amount")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"whitelistMintSettings"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201cburnEveryTime\u201d : true"),(0,i.kt)("td",{parentName:"tr",align:null},"Whitelist token is burned after the mint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201cneverBurn\u201d : true"),(0,i.kt)("td",{parentName:"tr",align:null},"Whitelist token is returned to holder")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"mint"),(0,i.kt)("td",{parentName:"tr",align:null},"PublicKey"),(0,i.kt)("td",{parentName:"tr",align:null},"Mint address of the whitelist token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"presale"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether whitelist token holders can mint before goLiveDate (presale)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"discountPrice"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"Price for whitelist token holders")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hiddenSettings"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the mint. The number of the mint will be appended to the name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"uri"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Single URI to all mints")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"hash"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"32 character hash \u2013 in most cases this is the hash of the cache file with the mapping between mint number and metadata so that the order can be verified when the mint is complete")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"storage"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Storage type to upload images and metadata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201carweave-sol\u201d"),(0,i.kt)("td",{parentName:"tr",align:null},"Uploads to arweave using ",(0,i.kt)("a",{parentName:"td",href:"https://bundlr.network"},"Bundlr")," and payments are made in SOL (Recommended option. Works on mainnet and devnet. ",(0,i.kt)("strong",{parentName:"td"},"Files are only stored for 7 days on devnet."),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201carweave-bundle\u201d"),(0,i.kt)("td",{parentName:"tr",align:null},"Uploads to arweave and payments are made in AR (only works in mainnet and requires an Arweave wallet)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201carweave\u201d"),(0,i.kt)("td",{parentName:"tr",align:null},"Uploads to arweave via Metaplex Google Cloud function (works on devnet and mainnet)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201cipfs\u201d"),(0,i.kt)("td",{parentName:"tr",align:null},"Uploads to IPFS (must specify either Infura Project ID or Secret Key)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201cpinata\u201d"),(0,i.kt)("td",{parentName:"tr",align:null},"Uploads to ",(0,i.kt)("a",{parentName:"td",href:"https://pinata.cloud"},"Pinata")," using your Pinata account API keys")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201cnft-storage\u201d"),(0,i.kt)("td",{parentName:"tr",align:null},"Uploads to ",(0,i.kt)("a",{parentName:"td",href:"https://nft.storage"},"NFT.Storage")," (no payment required, works on all networks)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u201caws\u201d"),(0,i.kt)("td",{parentName:"tr",align:null},"Uploads to AWS (must specify AWS Bucket name)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ipfsInfuraProjectId"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Infura Project ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ipfsInfuraSecret"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Infura Project Secret")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pinataJwt"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Pinata API Key JWT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pinataGateway"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Pinata Dedicated Gateway URL (e.g. ",(0,i.kt)("a",{parentName:"td",href:"https://myname.mypinata.cloud"},"https://myname.mypinata.cloud"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nftStorageKey"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"NFT.Storage API Key (optional)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"arweaveJwk"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Arweave JWK wallet file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"awsS3Bucket"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"AWS bucket name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"noRetainAuthority"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the candy machine authority has the update authority for each mint or if it is transferred to the minter. This should be kept as ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," for the vast majority of cases. Leave this as ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," if you are unsure which to pick.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"noMutable"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the NFTs' metadata is mutable or not after having been minted")))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you set noMutable to true, you ",(0,i.kt)("strong",{parentName:"p"},"WILL NOT")," be able to update your NFTs at any point in the future.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Any setting that is not used must be set to null to avoid errors from the CLI.")),(0,i.kt)("h2",{id:"minimal-configuration"},"Minimal Configuration"),(0,i.kt)("p",null,"A minimal Candy Machine config settings looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "price": 1.0,\n    "number": 10,\n    "gatekeeper": null,\n    "solTreasuryAccount": "<YOUR WALLET ADDRESS>",\n    "splTokenAccount": null,\n    "splToken": null,\n    "goLiveDate": "25 Dec 2021 00:00:00 GMT",\n    "endSettings": null,\n    "whitelistMintSettings": null,\n    "hiddenSettings": null,\n    "storage": "arweave-sol",\n    "ipfsInfuraProjectId": null,\n    "ipfsInfuraSecret": null,\n    "nftStorageKey": null,\n    "awsS3Bucket": null,\n    "noRetainAuthority": false,\n    "noMutable": false\n}\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," of items setting can only be updated after you create your ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," if you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"hiddenSettings"),". When ",(0,i.kt)("inlineCode",{parentName:"p"},"hiddenSettings")," are not used, the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," value is used to allocate the space required by the ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," account and therefore cannot be modified."),(0,i.kt)("p",{parentName:"admonition"},"In case you require to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," of items after creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," without ",(0,i.kt)("inlineCode",{parentName:"p"},"hiddenSettings"),", you can withdraw rent of your current ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," and then create a new one.")),(0,i.kt)("p",null,"The above settings will configure a ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," to operate in a similar way as a ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv1")," \u2013 although the mint order will be unpredictable. In other words, even the most simple v2 configuration provides an improvement over v1. You can view this as the minimum set of settings required to create a Candy Machine. Many projects will be using a similar set of settings, as this already provides a fully-working on-chain distribution mechanism."),(0,i.kt)("p",null,"The settings that are specified in this example are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"price"),(0,i.kt)("li",{parentName:"ul"},"number"),(0,i.kt)("li",{parentName:"ul"},"solTreasureAccount"),(0,i.kt)("li",{parentName:"ul"},"goLiveDate"),(0,i.kt)("li",{parentName:"ul"},"noRetainAuthority"),(0,i.kt)("li",{parentName:"ul"},"noMutable")),(0,i.kt)("p",null,"If this satisfies the requirement for your project, save these settings to a file (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json"),") and you are ready to start uploading your items and create a Candy Machine. Below we will discuss other configuration examples that represent specific use-cases. These examples will use the settings above as a starting point and provide the settings section to be added/updated. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is important that the ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," setting value matches the number of items in your Candy Machine.")),(0,i.kt)("h2",{id:"gatekeeper-settings"},"Gatekeeper Settings"),(0,i.kt)("p",null,"While the unpredictable mint index provides some protection against bots, bots are still able to mint directly from the Candy Machine. If you want to make sure that only humans can mint from your project, you can enable the gatekeeper settings in your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," with the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"gatekeeper": {\n    "gatekeeperNetwork" : "<PROVIDER NETWORK ADDRESS>",\n    "expireOnUse" : true\n}\n')),(0,i.kt)("p",null,"This will enable a gatekeeper challenge once the mint button is clicked","\u2014","only after passing the challenge you will be allowed to mint."),(0,i.kt)("p",null,"When you use a gatekeeper, you will not be able to mint from the CLI command ",(0,i.kt)("inlineCode",{parentName:"p"},"mint_one_token"),". If you want to pre-mint from a ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," and are planning to use a gatekeeper, you should set the ",(0,i.kt)("inlineCode",{parentName:"p"},"goLiveDate")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and turn ",(0,i.kt)("inlineCode",{parentName:"p"},"gatekeeper")," (temporarily) off. This will allow you to mint from the command line, but only ",(0,i.kt)("strong",{parentName:"p"},"you")," as the ",(0,i.kt)("inlineCode",{parentName:"p"},"CMv2")," authority. Once you complete the pre-mint, turn ",(0,i.kt)("inlineCode",{parentName:"p"},"gatekeeper")," on and set the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"goLiveDate"),"."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"If your Candy Machine is ",(0,i.kt)("strong",{parentName:"p"},"live")," and it has ",(0,i.kt)("strong",{parentName:"p"},"no gatekeeper"),", it is open to bots attacks. The unpredictable mint index only prevents knowing which item to mint, but bots can still snipe a large volume of items.")),(0,i.kt)("h3",{id:"provider-networks"},"Provider Networks"),(0,i.kt)("p",null,"There are currently two supported gatekeepers (details below). If you want to become a supported gatekeeper please email ",(0,i.kt)("a",{parentName:"p",href:"mailto:contact@identity.org"},"contact@identity.org"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://docs.identity.com/docs/overview"},"Learn more about the Identity Gateway Protocol"))),(0,i.kt)("h4",{id:"civic-captcha-pass"},"Civic Captcha Pass"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Address: ",(0,i.kt)("inlineCode",{parentName:"p"},"ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Recommended"),": maintain ",(0,i.kt)("inlineCode",{parentName:"p"},"expireOnUse: true"),". Changing this setting increases the susceptibility of your project to bots."),(0,i.kt)("p",null,"Brings the familiar captcha challenge to web3 and combines it with user-transparent heuristics to protect your mint from bots."),(0,i.kt)("p",null,"With captcha enabled, a user will be issued a Civic Captcha Pass after successfully completing the captcha challenge and automatically checked by the Candy Machine prior to minting. "),(0,i.kt)("p",null,"A Civic Captcha Pass remains active only for 10 minutes and for one mint to limit the options of malicious botters verifying multiple wallets. If a user tries to use an inactive pass, it will automatically prompt them to refresh it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.civic.com/candy-machine-integration/adding-captcha-to-candy-machine-v2"},"Learn More")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.civic.com/candy-machine-integration/adding-captcha-to-candy-machine-v2#terms-and-conditions"},"Civic Ts&Cs"))),(0,i.kt)("h4",{id:"verify-by-encore"},"Verify by Encore"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Address: ",(0,i.kt)("inlineCode",{parentName:"p"},"tibePmPaoTgrs929rWpu755EXaxC7M3SthVCf6GzjZt"))),(0,i.kt)("p",null,"A web3 alternative to captcha that uses randomized challenge-response tests to filter out bots."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://encorefans.notion.site/Verify-0af40ff4b3324694abf336f185c9fad2"},"Learn More")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.encore.fans/terms-conditions"},"Encore Ts&Cs"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By using a gatekeeper, you agree to their terms and conditions.")),(0,i.kt)("h2",{id:"hidden-settings"},"Hidden Settings"),(0,i.kt)("p",null,"Hidden settings serve two purposes. First, it allows the creation of larger drops (20k+), since the metadata is not stored on-chain. In turn, this also allows the creation of hide-and-reveal drops, where users discover which item(s) they minted after the mint is complete."),(0,i.kt)("p",null,"To enable hidden settings, you need to provide the details for the ",(0,i.kt)("em",{parentName:"p"},"hiddenSettings")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"hiddenSettings": {\n    "name":"My Hidden Collection ",\n    "uri":"uri",\n    "hash":"44kiGWWsSgdqPMvmqYgTS78Mx2BKCWzd"\n}\n')),(0,i.kt)("p",null,"Once hidden settings are enabled, every mint will have the same URI and the name will be created by appending the mint number (e.g., \u201c#45\u201d) to the name specified. The hash is expected to be a 32 character string corresponding to the hash of a cache file that has the mapping between a mint number and the actual metadata URI. This allows the order of the mint to be verified by others after the mint is complete."),(0,i.kt)("p",null,"Since the metadata is not on-chain, it is possible to create very large drops. The only caveat is that there is a need for an off-chain process to update the metadata for each item. This is important otherwise all items will have the same metadata."),(0,i.kt)("h2",{id:"end-settings"},"End Settings"),(0,i.kt)("p",null,"End Settings provides a mechanism to stop the mint if a certain condition is met without interaction. There are two conditions that can be specified."),(0,i.kt)("p",null,"Stop a mint at a specific timestamp (e.g., at the end of a specific day):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"endSettings": {\n    "endSettingType": { "date":true },\n    "value":"25 Dec 2021 23:59:00 GMT"\n}\n')),(0,i.kt)("p",null,"Stop a mint after a certain amount of item have been minted (e.g., 10 items minted):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"endSettings": {\n    "endSettingType": { "amount":true },\n    "value":10\n}\n')),(0,i.kt)("p",null,"This can be used in combination with other settings to create specific use cases. For example, you can run a whitelist presale either for a limited time or for a limited number of items; you can specify your sale period to be between the ",(0,i.kt)("inlineCode",{parentName:"p"},"goLiveDate")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"endSettings"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"date"),"."),(0,i.kt)("h2",{id:"whitelist-settings"},"Whitelist Settings"),(0,i.kt)("p",null,"Whitelist settings provide a variety of different use cases and revolve around the idea of using custom SPL tokens to offer special rights to token holders - how said SPL token is distributed is up to you. We will discuss a few scenarios below."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In all the examples below, you will need to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," settings address ",(0,i.kt)("inlineCode",{parentName:"p"},"7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf")," with the mint address of your SPL token.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can use the whitelist settings with the ",(0,i.kt)("inlineCode",{parentName:"p"},"presale")," option set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in combination with the gateway settings. This will restrict the mint to only whitelist users and require them to complete the Gatekeeper's challenge.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating a whitelist ",(0,i.kt)("strong",{parentName:"p"},"only")," for presale (e.g., allow whitelist users to mint before the ",(0,i.kt)("inlineCode",{parentName:"p"},"goLiveDate"),") and burning the whitelist token each time. Once the sales begin, whitelist users do not have any privileges."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "burnEveryTime": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : true,\n    "discountPrice" : null\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating a whitelist for presale, burning the whitelist token each time and provide whitelist users with a 0.5 SOL price tag instead (specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"discountPrice"),"). Once the sales begin (i.e., everyone can mint), the whitelist gets you only the discount."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "burnEveryTime": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : true,\n    "discountPrice" : 0.5\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating a whitelist for presale, not burning the whitelist token (you will be able to reuse it) and give whitelist users a 0.5 SOL price tag instead. Once the sales begin (i.e., everyone can mint), the whitelist gets you only the discount."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "neverBurn": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : true,\n    "discountPrice" : 0.5\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating a whitelist, not burning the whitelist token (you will be able to reuse it) and gives whitelist users a 0.5 SOL price tag instead - i.e., the whitelist ",(0,i.kt)("strong",{parentName:"p"},"only")," gets you the discount."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "neverBurn": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : false,\n    "discountPrice" : 0.5\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating a whitelist, burning the whitelist token each time, running the white list during the sale. This in effect restrict any user without the whitelist token from minting at all - this is why ",(0,i.kt)("inlineCode",{parentName:"p"},"presale")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"discountPrice")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". The only purpose of the whitelist is to ",(0,i.kt)("strong",{parentName:"p"},"restrict")," the mint."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "burnEveryTime": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : false,\n    "discountPrice" : null\n}\n')))),(0,i.kt)("h2",{id:"finishing-up"},"Finishing up"),(0,i.kt)("p",null,"Once you have decided which settings are suitable for your project, save your settings in a json file - in this guide we will be using a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json"),". At this point, you are ready to start uploading your assets to the Candy Machine."))}u.isMDXComponent=!0}}]);