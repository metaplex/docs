"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4933],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(a),h=r,c=d["".concat(p,".").concat(h)]||d[h]||m[h]||l;return a?n.createElement(c,o(o({ref:e},u),{},{components:a})):n.createElement(c,o({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94748:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var n=a(83117),r=(a(67294),a(3905));const l={},o="RPC Providers",i={unversionedId:"resources/rpc-providers",id:"resources/rpc-providers",title:"RPC Providers",description:"Introduction",source:"@site/docs/05-resources/00-rpc-providers.md",sourceDirName:"05-resources",slug:"/resources/rpc-providers",permalink:"/resources/rpc-providers",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/05-resources/00-rpc-providers.md",tags:[],version:"current",lastUpdatedAt:1679829212,formattedLastUpdatedAt:"Mar 26, 2023",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Resources",permalink:"/resources/"},next:{title:"Storage Providers",permalink:"/resources/storage-providers"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Archive and Nonarchive Nodes",id:"archive-and-nonarchive-nodes",level:2},{value:"RPCs Available",id:"rpcs-available",level:2},{value:"Alchemy",id:"alchemy",level:3},{value:"Ankr",id:"ankr",level:3},{value:"Blockdaemon",id:"blockdaemon",level:3},{value:"Chainstack",id:"chainstack",level:3},{value:"Figment",id:"figment",level:3},{value:"GenesysGo",id:"genesysgo",level:3},{value:"GetBlock",id:"getblock",level:3},{value:"QuickNode",id:"quicknode",level:3},{value:"Runnode",id:"runnode",level:3},{value:"Syndica",id:"syndica",level:3},{value:"Triton",id:"triton",level:3},{value:"Additional Information",id:"additional-information",level:2}],u={toc:s};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rpc-providers"},"RPC Providers"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Solana makes use of independent nodes which have the responsibility of working to confirm programs and outputs of programs on one of the three Solana clusters, Devnet, Testnet or Mainnet Beta. A cluster is made up of a set of validators that work to confirm transactions. These are owned and operated by individuals.  These nodes are also responsible for storing data and transaction history which is shared amongst the nodes. A node can become a validator node if it is being used to vote on valid blocks and if SOL is delegated to the validator identity it can become a leader node. ",(0,r.kt)("a",{parentName:"p",href:"https://solana.com/validators"},"This")," is the link to the information on how to become a validator. "),(0,r.kt)("p",null,"Not all nodes can become leader nodes or vote to confirm blocks. They still serve the other functionalities of validator nodes, but since they cannot vote they are primarily used to respond to requests on the blockchain. These are RPC nodes. RPC stands for remote procedure call, and these RPC nodes are used to send transactions through the blockchain. "),(0,r.kt)("p",null,"Solana maintains three public API nodes, one for each cluster which are Devnet, Mainnet Beta, and Testnet. These API nodes are what allow users to connect to the cluster. To connect to Devnet users can look at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://api.devnet.solana.com\n")),(0,r.kt)("p",null,"This is the node for Devnet, and it is rate limited."),(0,r.kt)("p",null,"In the Mainnet Beta cluster, many developers choose to use their own private RPC node to take advantage of higher rate limits not avalible to them from Solana's public API nodes. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1GmCbcu.png#radius%22",alt:null})),(0,r.kt)("p",null,"For Mainnet Beta in the picture above, from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/cluster/rpc-endpoints"},"Solana Docs"),", we can view the rate limits from using the mainnet api node."),(0,r.kt)("p",null,"We will proceed to define two types of RPC nodes and then present you with several options. We recommend you choose one based on your project's needs. "),(0,r.kt)("h2",{id:"archive-and-nonarchive-nodes"},"Archive and Nonarchive Nodes"),(0,r.kt)("p",null,"We can divide nodes into two different categories. The first one we will look at are the ",(0,r.kt)("strong",{parentName:"p"},"Archive nodes"),". These can store information of previous blocks. In the case of these archival nodes, we can leverage having access to all previous blocks in several ways. Some of the advantages include being able to view an address's balance history and view any state in the history. Due to the high system requirements of running a full historical node, having private nodes available with this feature is highly beneficial."),(0,r.kt)("p",null,"Unlike archival nodes, a non-archive node, or just a regular node, will only have access to some of the previous blocks, which is upwards of 100 blocks. We previously mentioned that running an archival node has intensive requirements, but even a non-archive node can become hard to manage. For this reason, users often choose a private RPC provider. Most use cases involving private RPCs in Solana usually revolve around Mainnet-beta uses since this involves real SOL tokens, and there is a higher chance of being rate limited."),(0,r.kt)("h2",{id:"rpcs-available"},"RPCs Available"),(0,r.kt)("p",null,"The following section includes multiple RPC providers. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),"\nThis list is in alphabetical order. Please choose the RPC provider that best suits your project's needs. If we are missing a provider, let us know in our discord or submit a PR.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alchemy.com/?a=metaplex"},"Alchemy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ankr.com/protocol/public/solana/"},"Ankr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blockdaemon.com/marketplace/solana/"},"Blockdaemon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chainstack.com/build-better-with-solana/"},"Chainstack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://figment.io/datahub/solana/"},"Figment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://genesysgo.com/"},"GenesysGo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://getblock.io/"},"GetBlock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://quicknode.com/"},"QuickNode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://runnode.com/"},"RunNode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://syndica.io/"},"Syndica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.triton.one/"},"Triton One | RPC Pool"))),(0,r.kt)("h3",{id:"alchemy"},"Alchemy"),(0,r.kt)("p",null,"Alchemy offers a free plan with a rate limit of 12 million transactions per month. Their plan is to keep it free for the first 500 people who sign up to use it. Once you sign up, you will have access to the private RPC they provide."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/v0AZlqf.png#radius%22",alt:null})),(0,r.kt)("p",null,"From this image you will notice they have a request counter which is setup to help you confirm your RPC is working."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"49 USD/month"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transactions/month"),(0,r.kt)("td",{parentName:"tr",align:null},"12 million"),(0,r.kt)("td",{parentName:"tr",align:null},"16 million"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h3",{id:"ankr"},"Ankr"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.ankr.com/rpc/solana"},"Ankr")," provides a free endpoint without any account creation requirement. This allows you to connect to both devent and mainnet beta. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"Paid"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requests/sec"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"4000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,"Their dashboard also allows you to test the RPC through several methods such as using the public address of your wallet which you can get from your terminal with: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts="},"solana address\n// output \nDZCjxxxxxxxxx\n")),(0,r.kt)("p",null,"And input it into their tester with ",(0,r.kt)("inlineCode",{parentName:"p"},"getbalance")," option chosen for the following result which includes the token balance and time taken to respond:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/HCcFoym.png#radius%22",alt:null})),(0,r.kt)("h3",{id:"blockdaemon"},"Blockdaemon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blockdaemon.com/documentation/guides/solana/solana-nodes/"},"Blockdaemon")," offers nodes for the three Solana networks and also provide the option of having an archival node with full history or history from past weeks. They have both a free option and a custom option."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1GmCbcu.png#radius%22",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Calls/month"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"1+ million")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h3",{id:"chainstack"},"Chainstack"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chainstack.com/build-better-with-solana/"},"Chainstack")," offers elastic and dedicated high-performance Solana nodes across a number of cloud locations and providers. Chainstack has a free option, the Developer plan, that allows for 3 million included monthly requests with more included requests available with paid plans."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/otznOWo.png",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"50 USD/month"),(0,r.kt)("th",{parentName:"tr",align:null},"350 USD/month"),(0,r.kt)("th",{parentName:"tr",align:null},"990 USD/month"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requests/month"),(0,r.kt)("td",{parentName:"tr",align:null},"3 million"),(0,r.kt)("td",{parentName:"tr",align:null},"20 million"),(0,r.kt)("td",{parentName:"tr",align:null},"140 million"),(0,r.kt)("td",{parentName:"tr",align:null},"400 million")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"figment"},"Figment"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.figment.io/datahub/solana"},"Figment")," has a free option of 3 million requests per month and requires filling in an application to request your private RPC. They also offer a paid plan with 15 million requests per month and for higher options you can contact their team. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"50 USD/month"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requests/month"),(0,r.kt)("td",{parentName:"tr",align:null},"3 million"),(0,r.kt)("td",{parentName:"tr",align:null},"15 million"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"genesysgo"},"GenesysGo"),(0,r.kt)("p",null,"GenesysGo has information regarding the setup for your RPC in their ",(0,r.kt)("a",{parentName:"p",href:"https://docs.genesysgo.com/shadow/"},"docs"),". Their free RPC has a limit of 1 request per second. They also offer a premium service that has no rate limiting."),(0,r.kt)("p",null,"After going through the documentation, you can reserve an account in their ",(0,r.kt)("a",{parentName:"p",href:"https://portal.genesysgo.net/premium/reserve"},"portal")," and proceed to choose your plan."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"325 USDC/month"),(0,r.kt)("th",{parentName:"tr",align:null},"795 USDC/month"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requests/sec"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"100 + 100 extra"),(0,r.kt)("td",{parentName:"tr",align:null},"200 + 200 extra")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"getblock"},"GetBlock"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getblock.io/"},"GetBlock")," is the blockchain RPC provider that employs a \u2018pay per use\u2019 model: its requests have no \u2018expiration date\u2019 so that users only pay for the resources they actually use. It supports more than 50 multiple blockchains. GetBlock guarantees the highest rate limit in free tariff, 60 RPS."),(0,r.kt)("p",null,"After setting up an account, proceed to choose a convenient plan."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://imgur.com/iqO3rE7.png#radius",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"Shared"),(0,r.kt)("th",{parentName:"tr",align:null},"Custom"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requests/month"),(0,r.kt)("td",{parentName:"tr",align:null},"40 000"),(0,r.kt)("td",{parentName:"tr",align:null},"from 5 million to Unlimited"),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,"GetBlock users can set up an account using nothing but a cryptocurrency wallet."),(0,r.kt)("h3",{id:"quicknode"},"QuickNode"),(0,r.kt)("p",null,"Another provider is ",(0,r.kt)("a",{parentName:"p",href:"https://www.quicknode.com?tap_a=67226-09396e&tap_s=2286372-341e1b&utm_source=affiliate&utm_campaign=generic&utm_content=affiliate_landing_page&utm_medium=generic"},"QuickNode"),"."),(0,r.kt)("p",null,"To begin using it, you will create an account and go to your dashboard. Once you're there, you'll create an endpoint and choose the appropriate blockchain. We will click on Solana. You will then have the option to choose between one of the three networks that Solana has to offer. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/iAD5sUi.png#radius%22",alt:null})),(0,r.kt)("p",null,"This is followed by optional add-ons and finally you get to choose a plan. Currently, QuickNode offers a ",(0,r.kt)("strong",{parentName:"p"},"Discover")," option for free and paid options if you require higher rate limits along with other features such as additional endpoints."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/HGvgNOu.png#radius%22",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"49 USD/month"),(0,r.kt)("th",{parentName:"tr",align:null},"299 USD/month"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requests/sec"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h3",{id:"runnode"},"Runnode"),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.runnode.com/runnode/tutorials/1.-how-to-sign-up-for-an-rpc-endpoint"},"official docs")," from Runnode we can find how to setup a private RPC and the plans that they offer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"50 USD/month"),(0,r.kt)("th",{parentName:"tr",align:null},"200 USD/month"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requests/sec"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/zO4kjqG.jpg#radius%22",alt:null})),(0,r.kt)("h3",{id:"syndica"},"Syndica"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.figment.io/datahub/solana"},"Syndica")," offers three plans. Their free option has a limit of 1 thousand requests per month."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"Free"),(0,r.kt)("th",{parentName:"tr",align:null},"75 USD/month"),(0,r.kt)("th",{parentName:"tr",align:null},"499 USD/month"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requests/month"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"1 million"),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/42O2GVG.png#radius%22",alt:null})),(0,r.kt)("h3",{id:"triton"},"Triton"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://triton.one/#/pricing"},"Triton")," starts by offering a paid plan at 500 USD per month which provides up to 50 requests per second. They also offer higher rate limits at other price points."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/qaUayM6.png#radius%22",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Info"),(0,r.kt)("th",{parentName:"tr",align:null},"500 USD/month"),(0,r.kt)("th",{parentName:"tr",align:null},"1000 USD/month"),(0,r.kt)("th",{parentName:"tr",align:null},"1500 USD/month"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requests/sec"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"150")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archival Node"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"additional-information"},"Additional Information"),(0,r.kt)("p",null,"If you have any questions or would like to further understand this topic, you are welcome to ask join the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/YZZAyMFU22"},"Metaplex Discord")," group."))}m.isMDXComponent=!0}}]);