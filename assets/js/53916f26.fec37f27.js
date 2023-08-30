"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6940],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),h=u(a),p=o,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||i;return a?n.createElement(m,r(r({ref:e},d),{},{components:a})):n.createElement(m,r({ref:e},d))}));function p(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},62665:function(t,e,a){a.r(e),a.d(e,{assets:function(){return l},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=a(83117),o=(a(67294),a(3905));const i={},r="Overview",s={unversionedId:"programs/token-metadata/overview",id:"programs/token-metadata/overview",title:"Overview",description:"Introduction",source:"@site/docs/01-programs/01-token-metadata/00-overview.md",sourceDirName:"01-programs/01-token-metadata",slug:"/programs/token-metadata/overview",permalink:"/programs/token-metadata/overview",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/01-token-metadata/00-overview.md",tags:[],version:"current",lastUpdatedAt:1693391782,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Token Metadata",permalink:"/programs/token-metadata/"},next:{title:"Getting Started",permalink:"/programs/token-metadata/getting-started"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"A JSON standard",id:"a-json-standard",level:2},{value:"NFTs",id:"nfts",level:2},{value:"Printing Editions",id:"printing-editions",level:2},{value:"Semi-Fungible Tokens",id:"semi-fungible-tokens",level:2},{value:"Programmable NFTs",id:"programmable-nfts",level:2},{value:"And a lot more",id:"and-a-lot-more",level:2}],d={toc:u};function c(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Token Metadata program is one of the most important programs when dealing with NFTs on the Solana blockchain. Its main goal is to ",(0,o.kt)("strong",{parentName:"p"},"attach additional data to ",(0,o.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Fungibility"},"Fungible")," or Non-Fungible ",(0,o.kt)("a",{parentName:"strong",href:"https://spl.solana.com/token"},"Tokens"))," on Solana."),(0,o.kt)("p",null,"It achieves this using ",(0,o.kt)("a",{parentName:"p",href:"../#program-derived-addresses-pda"},"Program Derived Addresses")," (PDAs) that are ",(0,o.kt)("em",{parentName:"p"},"derived")," from the address of Mint Accounts. If you\u2019re not familiar with ",(0,o.kt)("a",{parentName:"p",href:"https://spl.solana.com/token"},"Solana\u2019s Token program"),", ",(0,o.kt)("em",{parentName:"p"},"Mint Accounts")," are responsible for storing the global information of a Token and ",(0,o.kt)("em",{parentName:"p"},"Token Accounts")," store the relationship between a wallet and a Mint Account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A simple diagram showing a user icon followed by three blue rectangles in a straight line. From left to right, the rectangles are labelled: \u201cWallet Account\u201d, \u201cToken Account\u201d and \u201cMint Account\u201d. The user icon points to the \u201cWallet Account\u201d, the \u201cWallet Account\u201d points to the \u201cToken Account\u201d and the \u201cMint Account\u201d points to the \u201cToken Account\u201d. Above the \u201cWallet Account\u201d reads \u201cSomeone\u2019s wallet\u201d. Above the \u201cToken Account\u201d reads \u201cStores the number of tokens owned by the wallet\u201d. Above the \u201cMint Account\u201d reads \u201cStores information about the token itself. E.g. its current supply and its authorities.\u201d.",src:a(66068).Z+"#radius",width:"1860",height:"432"})),(0,o.kt)("p",null,"Whilst Mint Accounts contain a few data attributes such as its current supply, it doesn't offer the ability to inject standardized data that can be understood by apps and marketplaces."),(0,o.kt)("p",null,"This is why the Token Metadata program offers a ",(0,o.kt)("strong",{parentName:"p"},"Metadata Account")," that attaches itself to a Mint Account via a PDA."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Same diagram as the previous one but this time, the Mint Account points towards a brown pill labelled &quot;PDA&quot; which itself points toward a brown rectangle labelled &quot;Metadata Account&quot;. Below the Metadata Account is displayed a list of its attributes.",src:a(34003).Z+"#radius",width:"1860",height:"1200"})),(0,o.kt)("p",null,"That Metadata Account holds a lot of valuable information that can be used throughout the ecosystem. For instance, it maintains a list of creators for the token. Each creator has a ",(0,o.kt)("inlineCode",{parentName:"p"},"Verified")," attribute that, when ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", guarantees the token was signed by that creator. Each creator also has a ",(0,o.kt)("inlineCode",{parentName:"p"},"Share")," attribute that can be used by marketplaces to distribute royalties."),(0,o.kt)("p",null,"By attaching more data to the Mint Account, ",(0,o.kt)("strong",{parentName:"p"},"the Token Metadata program is able to make Digital Assets")," of regular on-chain Tokens."),(0,o.kt)("h2",{id:"a-json-standard"},"A JSON standard"),(0,o.kt)("p",null,"One important attribute of the Metadata Account is the ",(0,o.kt)("inlineCode",{parentName:"p"},"URI")," attribute that points to a JSON file off-chain. This is used to safely provide additional data whilst not being constrained by the fees involved in storing on-chain data. That JSON file ",(0,o.kt)("a",{parentName:"p",href:"./token-standard"},"follows a certain standard")," that anyone can use to find useful information on tokens."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Same diagram as the previous one with an arrow pointing out of the &quot;URI&quot; attribute of the Metadata Account, towards a cloud labelled &quot;Off-chain JSON Object&quot;. A list of example attributes is displayed below that cloud: &quot;Name, Description, Image, Animation URL, Attributes, etc.&quot;.",src:a(58171).Z+"#radius",width:"1860",height:"1200"})),(0,o.kt)("p",null,"Note that, this JSON file can be stored using a permanent storage solution such as Arweave to ensure it cannot be updated. Additionally, one can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Is Mutable")," attribute of the Metadata Account to make it immutable and, therefore, forbid the ",(0,o.kt)("inlineCode",{parentName:"p"},"URI")," attribute \u2014 and other attributes such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Creators")," \u2014 to ever be changed. Using this combination, we can guarantee the immutability of the off-chain JSON file."),(0,o.kt)("h2",{id:"nfts"},"NFTs"),(0,o.kt)("p",null,"You might be wondering: what has this got to do with NFTs? Well, NFTs are special tokens that are Non-Fungible."),(0,o.kt)("p",null,"More precisely, NFTs in Solana are Mint Accounts with the following characteristics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It has ",(0,o.kt)("strong",{parentName:"li"},"a supply of 1"),", meaning only one token is in circulation."),(0,o.kt)("li",{parentName:"ul"},"It has ",(0,o.kt)("strong",{parentName:"li"},"zero decimals"),", meaning there cannot be such a thing as 0.5 tokens."),(0,o.kt)("li",{parentName:"ul"},"It has ",(0,o.kt)("strong",{parentName:"li"},"no mint authority"),", meaning no one can ever mint additional tokens.")),(0,o.kt)("p",null,"What we end up with is a token that cannot be traded with something of the same kind, which is the definition of a Non-Fungible Token (NFT)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A simplified version of the previous diagram: no data attributes on the Metadata Account nor JSON Object cloud displayed. Instead the Mint Account displays the following attributes: &quot;Mint Authority = None&quot;, &quot;Supply = 1&quot; and &quot;Decimals = 0&quot;. The Token Account displays only one attribute: &quot;Amount = 1&quot;.",src:a(35813).Z+"#radius",width:"1860",height:"672"})),(0,o.kt)("p",null,"In this particular yet popular case, the goal of the Metadata Account is to provide the actual data of that NFT to make it a useful Digital Asset."),(0,o.kt)("p",null,"Additionally, the Token Metadata program offers another account specifically for NFTs called the ",(0,o.kt)("strong",{parentName:"p"},"Master Edition Account"),". This account is also a PDA derived from the Mint Account."),(0,o.kt)("p",null,"Before creating this account, the Token Metadata program will ensure the special characteristics of Non-Fungible Tokens listed above are met. However, it is worth noting that, instead of voiding the Mint Authority, it will transfer both the Mint Authority and the Freeze Authority to the Master Edition PDA to ensure no one can mint or freeze tokens without going through the Token Metadata program. You can ",(0,o.kt)("a",{parentName:"p",href:"./faq#why-are-the-mint-and-freeze-authorities-transferred-to-the-edition-pda"},"read more about why this decision was made in the FAQ"),"."),(0,o.kt)("p",null,"Thus, ",(0,o.kt)("strong",{parentName:"p"},"the existence of the Master Edition account acts as proof of Non-Fungibility")," for that Mint Account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Same diagram as the previous one but the Mint Account points to an additional &quot;PDA&quot; pill which itself points to a new brown rectangle labelled &quot;Master Edition Account&quot;. The Mint account also displays the following updated data attributes: &quot;Mint Authority = Edition&quot; and &quot;Freeze Authority = Edition&quot; where both of these attributes point to the new PDA.",src:a(90878).Z+"#radius",width:"1860",height:"1128"})),(0,o.kt)("h2",{id:"printing-editions"},"Printing Editions"),(0,o.kt)("p",null,"In addition to being Non-Fungibility evidence, the Master Edition account also allows users to print one or multiple copies of an NFT."),(0,o.kt)("p",null,"This feature is particularly helpful to creators that want to offer multiple copies of their 1/1 NFTs to their audience."),(0,o.kt)("p",null,"The Master Edition account contains an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"Max Supply")," attribute that dictates the maximum amount of NFTs that can be printed that way. If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", printing is disabled. If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," an unlimited amount of copies can be printed."),(0,o.kt)("p",null,"The Master Edition NFT, a.k.a. Original NFT, acts as the master record that one can use to print copies, a.k.a. Print NFTs."),(0,o.kt)("p",null,"Each Print NFT is made of its own Mint Account and its own Metadata Account whose data is copied from the Original NFT. However, instead of having a Master Edition account attached to their Mint Account, Print NFTs use yet another PDA account called an ",(0,o.kt)("strong",{parentName:"p"},"Edition Account"),". This account keeps track of the edition number and the parent Master Edition it originated from."),(0,o.kt)("p",null,"Note that the Master Edition account and the Edition account share the same seeds for their PDA. That means an NFT can be one or the other but not both."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Same diagram as the previous one but with a new brown rectangle labelled &quot;Edition Account&quot;. The &quot;PDA&quot; pill pointing to the Master Edition Account now also points to the new Edition Account with a big &quot;OR&quot; written on the arrow to show it points to one or the other.",src:a(13753).Z+"#radius",width:"1860",height:"1272"})),(0,o.kt)("h2",{id:"semi-fungible-tokens"},"Semi-Fungible Tokens"),(0,o.kt)("p",null,"Whilst NFTs are the biggest use case of the Token Metadata program, it\u2019s important to notice that the program also works with Fungible Token and, what we call, Semi-Fungible Tokens or Fungible Assets."),(0,o.kt)("p",null,"At the end of the day, the Metadata account helps attach data to tokens regardless of their fungibility. However, the standard of the off-chain JSON file will vary slightly to accommodate their needs."),(0,o.kt)("p",null,"To safely identify the fungibility of a token \u2014 and, thus, the standard that we should use \u2014 the Metadata account keeps track of that information in its ",(0,o.kt)("inlineCode",{parentName:"p"},"Token Standard")," attribute. This attribute is automatically computed by the program and cannot be manually updated. It can take the following values."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NonFungible"),": The Mint account is associated with a Master Edition account and, therefore, is Non-Fungible. This is your typical NFT standard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NonFungibleEdition"),": This is the same as ",(0,o.kt)("inlineCode",{parentName:"li"},"NonFungible")," but the NFT was printed from an Original NFT and, thus, is associated with an Edition account instead of a Master Edition account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FungibleAsset"),": The Mint account is Fungible but has zero decimal places. Having zero decimals means we can treat the token as an asset whose supply is not limited to one. For instance, Fungible Assets can be used in the gaming industry to store resources such as \u201cWood\u201d or \u201cIron\u201d."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Fungible"),": The Mint account is Fungible and has more than one decimal place. This is more likely going to be a token used as a decentralised currency."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ProgrammableNonFungible"),": A special ",(0,o.kt)("inlineCode",{parentName:"li"},"NonFungible")," token that is frozen at all times to enforce custom authorization rules. See the next section for more information.")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"./token-standard"},"read more about these standards here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"This image shows three diagrams representing all three fungibility standards. From top to bottom. &quot;NonFungible&quot;: Shows a Mint Account with the following attributes &quot;Mint Authority = Edition&quot;, &quot;Supply = 1&quot;, &quot;Decimals = 0&quot; and &quot;Freeze Authority = Edition&quot;. It points to two PDAs, one pointing to a Metadata Account and one pointing to both a Master Edition Account and an Edition Account with a big OR in the middle. &quot;FungibleAsset&quot;: Shows a Mint Account with the following attribute: &quot;Decimals = 0&quot;. It points to a single PDA which points to a Metadata Account. &quot;Fungible&quot;: Shows the same diagram as the &quot;FungibleAsset&quot; diagram but instead of &quot;Decimals = 0&quot;, it displays &quot;Decimals &gt; 0&quot; under the Mint Account.",src:a(25693).Z+"#radius",width:"1860",height:"1344"})),(0,o.kt)("h2",{id:"programmable-nfts"},"Programmable NFTs"),(0,o.kt)("p",null,"Because the Token Metadata program is building on top of the Solana Token program, anyone can transfer tokens (fungible or not) without going through the Token Metadata program. Whilst this is great for program composibility, it also means that the Token Metadata program cannot enforce any rules on the tokens it is attached to."),(0,o.kt)("p",null,"A good example of why this can be problematic is that Token Metadata cannot enforce secondary sales royalties. Whilst there is ",(0,o.kt)("strong",{parentName:"p"},"Seller Fee Basis Points")," attribute on the Metadata account, it is purely ",(0,o.kt)("a",{parentName:"p",href:"/programs/understanding-programs#indicative-fields"},"indicative")," and anyone could create a marketplace that does not honor royalties \u2014 which is exactly what happened."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Programmable NFTs")," were introduced to solve this problem. They are a new ",(0,o.kt)("em",{parentName:"p"},"opt-in")," Token Standard that ",(0,o.kt)("strong",{parentName:"p"},"keeps the underlying token accounts frozen at all times"),". That way, nobody can transfer, lock or burn Programmable NFTs without going through the Token Metadata program."),(0,o.kt)("p",null,"It is then up to the creators to define custom operation-specific authorization rules that will be enforced by the Token Metadata program. These are defined in a special ",(0,o.kt)("strong",{parentName:"p"},"RuleSet")," account which is attached to the Metadata account. An example of such RuleSet could be an allowlist of program addresses that honor royalties. RuleSets are part of a new Metaplex program called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-token-auth-rules"},"Token Auth Rules"),"."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-token-metadata/blob/main/programs/token-metadata/program/ProgrammableNFTGuide.md"},"read more about Programmable NFTs here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Diagram of a Programmable NFT listing all the accounts they require.",src:a(86390).Z+"#radius",width:"1860",height:"648"})),(0,o.kt)("h2",{id:"and-a-lot-more"},"And a lot more"),(0,o.kt)("p",null,"Whilst this provides a good overview of the Token Metadata program and what it has to offer, there\u2019s still a lot more that can be done with it."),(0,o.kt)("p",null,"The other pages of the \u201cToken Metadata\u201d section aim to document it further and explain significant features in their own individual pages."),(0,o.kt)("p",null,"The next three pages focus on helping you get started with the Token Metadata program and provide detailed information on the accounts and instructions it provides, so you get the full picture and can refer back to them in the future."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./getting-started"},"Getting started")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./accounts"},"Accounts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions"},"Instructions"))),(0,o.kt)("p",null,"The next pages act as in-depth guides on certain features offered by the program."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./token-standard"},"Token Standard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./certified-collections"},"Certified Collections")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./using-nfts"},"Using NFTs"))),(0,o.kt)("p",null,"Finally, the last two pages answer frequently asked questions and document version updates."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./faq"},"FAQ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./changelog/"},"Changelog"))))}c.isMDXComponent=!0},66068:function(t,e,a){e.Z=a.p+"assets/images/Token-Metadata-Overview-1-be7a923f5e052e6195fc5da050718edf.png"},34003:function(t,e,a){e.Z=a.p+"assets/images/Token-Metadata-Overview-2-7bd8a8e9f5d7dc66eef5aee763543ffa.png"},58171:function(t,e,a){e.Z=a.p+"assets/images/Token-Metadata-Overview-3-4d75b9e505b0d1f50eacb8031bb3c389.png"},35813:function(t,e,a){e.Z=a.p+"assets/images/Token-Metadata-Overview-4-d62ed4ffd0c5bf8e3a8f3e2de100ccf7.png"},90878:function(t,e,a){e.Z=a.p+"assets/images/Token-Metadata-Overview-5-0b06da463778b33a8b53f5618103abbc.png"},13753:function(t,e,a){e.Z=a.p+"assets/images/Token-Metadata-Overview-6-2406d79557315b79c068005e305e1b4c.png"},25693:function(t,e,a){e.Z=a.p+"assets/images/Token-Metadata-Overview-7-f5ea59aeb1c41e9591e20e7bcba2fc25.png"},86390:function(t,e,a){e.Z=a.p+"assets/images/Token-Metadata-Overview-8-91c3ab5ad135ff9cf54a7894416377e6.png"}}]);