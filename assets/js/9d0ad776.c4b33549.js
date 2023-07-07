"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[276],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16344:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var a=t(83117),o=(t(67294),t(3905));const i={sidebar_label:"4. Creating the Candy Machine"},r="Creating the Candy Machine",c={unversionedId:"deprecated/candy-machine-js-cli/creating-candy-machine",id:"deprecated/candy-machine-js-cli/creating-candy-machine",title:"Creating the Candy Machine",description:"Once you have your collection prepared, the next step is to upload your assets and create a Candy Machine. This step is completed by a single command via the Candy Machine CLI.",source:"@site/docs/06-deprecated/00-candy-machine-js-cli/03-creating-candy-machine.md",sourceDirName:"06-deprecated/00-candy-machine-js-cli",slug:"/deprecated/candy-machine-js-cli/creating-candy-machine",permalink:"/deprecated/candy-machine-js-cli/creating-candy-machine",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/00-candy-machine-js-cli/03-creating-candy-machine.md",tags:[],version:"current",lastUpdatedAt:1688758618,formattedLastUpdatedAt:"Jul 7, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"4. Creating the Candy Machine"},sidebar:"sidebar",previous:{title:"3. Preparing your Assets",permalink:"/deprecated/candy-machine-js-cli/preparing-assets"},next:{title:"5. Verify Upload",permalink:"/deprecated/candy-machine-js-cli/verify-upload"}},s={},l=[{value:"Candy Machine Collections",id:"candy-machine-collections",level:2}],d={toc:l};function p(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-the-candy-machine"},"Creating the Candy Machine"),(0,o.kt)("p",null,"Once you have your collection prepared, the next step is to upload your assets and create a Candy Machine. This step is completed by a single command via the Candy Machine CLI."),(0,o.kt)("p",null,"Before you can proceed, you need to check that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your images and metadata are located in the same directory - in most cases this will be a directory named ",(0,o.kt)("inlineCode",{parentName:"li"},"assets")),(0,o.kt)("li",{parentName:"ul"},"You have funds in your wallet - the command ",(0,o.kt)("inlineCode",{parentName:"li"},"solana balance")," will tell your current balance"),(0,o.kt)("li",{parentName:"ul"},"You have created your Candy Machine configuration file (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json"),")")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To create a Candy Machine, space is allocated on chain to temporarily store the names and URI links (mirroring what is in your ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},".cache")," directory). To store this data on chain, you are required to pay on chain rent costs. After your mint (or whenever you want to end it), you can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," command to ",(0,o.kt)("strong",{parentName:"p"},"reclaim all the rent costs"),". Check the ",(0,o.kt)("a",{parentName:"p",href:"./withdraw"},"withdraw section")," for more details. For a 10k collection, the rent costs are approximately ",(0,o.kt)("strong",{parentName:"p"},"16.7 SOL"),". This scales linearly with the number of items in your collection. Thus, you can get an approximate on chain rent cost estimate by multiplying the number of items in your collection by ",(0,o.kt)("strong",{parentName:"p"},"0.00167 SOL"),".")),(0,o.kt)("p",null,"To proceed, you will execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts upload \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -cp config.json \\\n    -c example \\\n    ./assets\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The upload is a network-intensive command, in particular when dealing with larger collections. We highly recommend using a custom RPC, which can be specified by the switch ",(0,o.kt)("inlineCode",{parentName:"p"},"--rpc-url <string>")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command. You can find a list of custom RPC services in our ",(0,o.kt)("a",{parentName:"p",href:"/resources/rpc-providers"},"community docs"),".")),(0,o.kt)("p",null,"In this command we are specifying that we will run the upload in the ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," environment (",(0,o.kt)("inlineCode",{parentName:"p"},"-e")," option), we will use the wallet keypair ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/solana/devnet.json")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-k")," option), the Candy Machine configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-cp")," option), the cache file suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," option) and upload our assets from the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"./assets"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By default, the Candy Machine will automatically generate a collection NFT that will be set during minting if you use a UI that supports this feature (such as the ",(0,o.kt)("a",{parentName:"p",href:"/guides/candy-machine-ui"},"frontend")," provided by Metaplex). As long as your NFTs are mutable and you retain update authority, you will be able to change or remove the collection at any point in the future should you so desire. More details in ",(0,o.kt)("a",{parentName:"p",href:"#candy-machine-collections"},"Candy Machine Collections"),".")),(0,o.kt)("p",null,"Depending on the size of the collection - number of items and/or size of the images - this command has the potential to fail multiple times but should not be a problem when executed again, it will resume from the point it stopped in the previous execution."),(0,o.kt)("p",null,"Below is a sample output of a successful upload and Candy Machine creation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARNING: The \"arweave\" storage option will be going away soon. Please migrate to arweave-bundle or arweave-sol for mainnet.\n\nBeginning the upload for 10 (img+json) pairs\nstarted at: 1640191406699\nSize 10 { mediaExt: '.png', index: '0' }\nProcessing asset: 0\ninitializing candy machine\ninitialized config for a candy machine with publickey: ABceMmLMwmSfL5mL1cCrpPMKGupMXUezEY3JyZ1JSd6h\nProcessing asset: 0\nProcessing asset: 1\nProcessing asset: 2\nProcessing asset: 3\nProcessing asset: 4\nProcessing asset: 5\nProcessing asset: 6\nProcessing asset: 7\nProcessing asset: 8\nProcessing asset: 9\nWriting indices 0-9\nDone. Successful = true.\nended at: 2021-12-22T16:44:38.446Z. time taken: 00:01:11\n")),(0,o.kt)("p",null,"Any execution that does not complete an upload successfully will have an output ",(0,o.kt)("inlineCode",{parentName:"p"},"Successful = false"),". In this case, re-run the upload command until a successful execution is achieved."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It is common to receive ",(0,o.kt)("inlineCode",{parentName:"p"},"signatureUnsubscribe error: Invalid subscription id.")," messages. This is not an error that affects the upload.")),(0,o.kt)("p",null,"The command also outputs the Candy Machine PublicKey, which you can verify on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.solana.com"},"Solana Explorer"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Solana Explorer",src:t(68549).Z+"#radius#shadow",width:"2382",height:"2356"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The example uses the ",(0,o.kt)("inlineCode",{parentName:"p"},'"arweave"')," storage option as we are running it on the ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),". When running on ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet-beta"),", check other storage options that better suit your project/needs.")),(0,o.kt)("h2",{id:"candy-machine-collections"},"Candy Machine Collections"),(0,o.kt)("p",null,"Candy Machine now allows you to set an on-chain collection which will be set during mint, following the ",(0,o.kt)("a",{parentName:"p",href:"/programs/token-metadata/certified-collections"},"on-chain collections specification")," of the Token Metadata program."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Setting or removing a collection for a Candy Machine will ",(0,o.kt)("strong",{parentName:"p"},"only")," impact NFTs that have yet to be minted. This will ",(0,o.kt)("strong",{parentName:"p"},"not")," change NFTs from your Candy Machine that have already been minted.")),(0,o.kt)("p",null,"To set the collection for your Candy Machine, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"set_collection")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts set_collection \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -c example \\\n    -m C2eGm8iQPnKVWxakyo8QhwJUvYrZHKF52DPQuAejpTWG\n")),(0,o.kt)("p",null,"Successful output example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wallet public key: bob1upX2AoA7HAHzDTPMcYhWWnYJeMJturpswReqqP4\n(node:7714) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time\n(Use `node --trace-warnings ...` to show where the warning was created)\n(node:7714) ExperimentalWarning: buffer.Blob is an experimental feature. This feature could change at any time\nCandy machine address:  6KyiTBupdBKFRvppJFa7LHhNYyQet8uTci9PiMkb6Niw\nCollection metadata address:  6KVxzViK7v3nMKJxsgTBCXoZAgWc7TPWUy5YszuPytDL\nCollection metadata authority:  bob1upX2AoA7HAHzDTPMcYhWWnYJeMJturpswReqqP4\nCollection master edition address:  8uK5BmKsGYyngQ81iFbXkSdbhN2cN4NZCzyXH18k6sBg\nCollection mint address:  FyLAtLXi1UcyBNbmz6G9rcxT6Qg7HhoT9PsTitmkVsyE\nCollection PDA address:  7ULQrCp4MWZ4dMoaGdY52cZucmq8vHJxpogFSJXK8ee1\nCollection authority record address:  BHkQpLrDPq6JBAzW8nMHVP9Hz4L6P1rqtXNhR8EEo2Jq\nset collection finished {\n  collectionMetadata: '6KVxzViK7v3nMKJxsgTBCXoZAgWc7TPWUy5YszuPytDL',\n  collectionPDA: '7ULQrCp4MWZ4dMoaGdY52cZucmq8vHJxpogFSJXK8ee1',\n  txId: '2e9VytqDnDtATyK3tsAUQJSHuEHvZL2XDQmUEGm5MuTG7jSgMfZxUjXLosJnWc7WeQCyhpktZRJxpXFsN6rJDwPd'\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-m")," option is the mint account of the collection NFT you want to set for your Candy Machine. This is the same account as the one you would see in mint/hash lists."),(0,o.kt)("p",null,"If you have already set a collection for your Candy Machine, you can also remove it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"remove_collection")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts remove_collection \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -c example\n")),(0,o.kt)("p",null,"Successful output example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wallet public key: bob1upX2AoA7HAHzDTPMcYhWWnYJeMJturpswReqqP4\n(node:14972) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time\n(Use `node --trace-warnings ...` to show where the warning was created)\n(node:14972) ExperimentalWarning: buffer.Blob is an experimental feature. This feature could change at any time\nCandy machine address:  6KyiTBupdBKFRvppJFa7LHhNYyQet8uTci9PiMkb6Niw\nAuthority address:  bob1upX2AoA7HAHzDTPMcYhWWnYJeMJturpswReqqP4\nCollection PDA address:  7ULQrCp4MWZ4dMoaGdY52cZucmq8vHJxpogFSJXK8ee1\nMetadata address:  6KVxzViK7v3nMKJxsgTBCXoZAgWc7TPWUy5YszuPytDL\nMint address:  FyLAtLXi1UcyBNbmz6G9rcxT6Qg7HhoT9PsTitmkVsyE\nCollection authority record address:  BHkQpLrDPq6JBAzW8nMHVP9Hz4L6P1rqtXNhR8EEo2Jq\nremove collection finished {\n  collectionMetadata: '6KVxzViK7v3nMKJxsgTBCXoZAgWc7TPWUy5YszuPytDL',\n  collectionPDA: '7ULQrCp4MWZ4dMoaGdY52cZucmq8vHJxpogFSJXK8ee1',\n  txId: '32EseQPvZzcyVtpj4Sse2RoeAsU5akwbLL2v36W6CBEx6Jh9okmH4yR4XyfRAQKujmt7aKvYJ4GjNhp7ddnowm7D'\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"While it's not possible for the user minting to set the NFTs to a separate collection, as of today it is possible for minters to avoid setting the collection by using alternate UIs/CLIs (likely from bots). Since you will have update authority on your NFTs, you can add the collection after the fact if NFTs were not minted from the Candy Machine with the collection. You can do this easily using ",(0,o.kt)("a",{parentName:"p",href:"https://collections.metaplex.com."},"https://collections.metaplex.com.")," We suggest you use this tool after your Candy Machine has minted out, although you can do it earlier if you want.")))}p.isMDXComponent=!0},68549:function(e,n,t){n.Z=t.p+"assets/images/solana-explorer-6d992d47ec7f4a7661d40bbd779b9099.png"}}]);