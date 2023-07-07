"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3115],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14613:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const i={sidebar_label:"8. Withdraw Rent"},o="Withdraw Rent",d={unversionedId:"deprecated/candy-machine-js-cli/withdraw",id:"deprecated/candy-machine-js-cli/withdraw",title:"Withdraw Rent",description:"Candy Machines use an account to store configuration and a (potentially) large list for pointers to assets to control the mint. To have this data stored on-chain, you need to pay rent in SOL - this is the cost associated to set up a Candy Machine. After a Candy Machine is fully minted, this data is useless and there is no need to continue to pay rent.",source:"@site/docs/06-deprecated/00-candy-machine-js-cli/07-withdraw.md",sourceDirName:"06-deprecated/00-candy-machine-js-cli",slug:"/deprecated/candy-machine-js-cli/withdraw",permalink:"/deprecated/candy-machine-js-cli/withdraw",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/00-candy-machine-js-cli/07-withdraw.md",tags:[],version:"current",lastUpdatedAt:1688758618,formattedLastUpdatedAt:"Jul 7, 2023",sidebarPosition:7,frontMatter:{sidebar_label:"8. Withdraw Rent"},sidebar:"sidebar",previous:{title:"7. Update the Candy Machine",permalink:"/deprecated/candy-machine-js-cli/update"},next:{title:"9. Signing Your NFTs",permalink:"/deprecated/candy-machine-js-cli/sign-nfts"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Execution",id:"execution",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"withdraw-rent"},"Withdraw Rent"),(0,r.kt)("p",null,"Candy Machines use an account to store configuration and a (potentially) large list for pointers to assets to control the mint. To have this data stored on-chain, you need to pay rent in SOL - this is the cost associated to set up a Candy Machine. After a Candy Machine is fully minted, this data is useless and there is no need to continue to pay rent."),(0,r.kt)("p",null,"To drain the account of a Candy Machine and recover the rent SOL, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," command."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," command is also useful in cases where you made mistakes in the creation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv2")," as it provides a way to retrieve the SOL used in the set-up of the Candy Machine.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"You should not withdraw the rent of a live Candy Machine, as the Candy Machine will stop working when you drain its account.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," command must be executed with the keypair that created the Candy Machine and the Candy Machine ID you want to drain. Below is the argument and options for the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," command:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"argument"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<candy_machine_id>")),(0,r.kt)("td",{parentName:"tr",align:null},"The Candy Machine ID you want to drain")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"option"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-k, --keypair <PublicKey>")),(0,r.kt)("td",{parentName:"tr",align:null},"SOL wallet that created the Candy Machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-e, --env <string>")),(0,r.kt)("td",{parentName:"tr",align:null},"Solana cluster environment (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"devnet"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-d, --dry")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the withdraw amount without withdrawing the rent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-ch, --charity <PublicKey>")),(0,r.kt)("td",{parentName:"tr",align:null},"SOL wallet for donation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-cp, --charityPercent <number>")),(0,r.kt)("td",{parentName:"tr",align:null},"Donation percentage of the total SOL drained")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-r, --rpc-url <string>")),(0,r.kt)("td",{parentName:"tr",align:null},"custom RPC as the withdraw is a network-intensive command")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_all")," command will find all Candy Machines accounts made by this keypair and attempt to drain them. Below are the options used in most cases for the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_all")," command:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"option"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-k, --keypair <PublicKey>")),(0,r.kt)("td",{parentName:"tr",align:null},"SOL wallet that created the Candy Machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-e, --env <string>")),(0,r.kt)("td",{parentName:"tr",align:null},"Solana cluster environment (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"devnet"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-d, --dry")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the withdraw amount without withdrawing the rent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-ch, --charity <PublicKey>")),(0,r.kt)("td",{parentName:"tr",align:null},"SOL wallet for donation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-cp, --charityPercent <number>")),(0,r.kt)("td",{parentName:"tr",align:null},"Donation percentage of the total SOL drained")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-r, --rpc-url <string>")),(0,r.kt)("td",{parentName:"tr",align:null},"custom RPC as the withdraw is a network-intensive command")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_all")," command drains all Candy Machine accounts made by the specified keypair. You need to make sure that you want to drain all Candy Machines before you proceed. It is ",(0,r.kt)("strong",{parentName:"p"},"strongly advised")," that you first run the command with the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--dry")," to see how much you have locked up in those accounts and to make sure you are not draining an account you need. ")),(0,r.kt)("p",null,"You can also donate a percentage of the retrieved SOL to charity. But ",(0,r.kt)("strong",{parentName:"p"},"BE CAREFUL"),", this will actually take money out of the keypair you pass in and transfer it to the address you set as the ",(0,r.kt)("inlineCode",{parentName:"p"},"--charity")," option."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("p",null,"To start the withdraw process, execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts withdraw <candy_machine_id> \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json\n")),(0,r.kt)("p",null,"To start the withdraw_all process, execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_all")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts withdraw_all \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The example commands are directed at devnet with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-e devnet")," option. To target your 'withdraw' command to Mainnet Beta, replace that option with ",(0,r.kt)("inlineCode",{parentName:"p"},"-e mainnet-beta"),".")),(0,r.kt)("p",null,"If there are Candy Machine accounts to be drained, you will see an output similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Total Number of Candy Machine Config Accounts to drain 50.03644952 SOL locked up in configs\nWARNING: This command will drain ALL of the Candy Machine config accounts that are owned by your current KeyPair, this will break your Candy Machine if its still in use.\n...\nHSLcb56y2wQEdaTcNoybcPJRrXuxRe3AnAXhpvJmZkMo has been withdrawn. \n...\nCongratulations, 1 config accounts have been successfully drained.\nNow you kinda rich, please consider supporting Open Source developers.\n")))}u.isMDXComponent=!0}}]);