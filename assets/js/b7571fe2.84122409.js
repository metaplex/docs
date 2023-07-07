"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8455],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,f=s["".concat(d,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},47109:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_label:"5. Verify Upload"},c="Verify Upload",i={unversionedId:"deprecated/candy-machine-js-cli/verify-upload",id:"deprecated/candy-machine-js-cli/verify-upload",title:"Verify Upload",description:"We strongly recommend you do not skip this step.",source:"@site/docs/06-deprecated/00-candy-machine-js-cli/04-verify-upload.md",sourceDirName:"06-deprecated/00-candy-machine-js-cli",slug:"/deprecated/candy-machine-js-cli/verify-upload",permalink:"/deprecated/candy-machine-js-cli/verify-upload",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/00-candy-machine-js-cli/04-verify-upload.md",tags:[],version:"current",lastUpdatedAt:1688758618,formattedLastUpdatedAt:"Jul 7, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"5. Verify Upload"},sidebar:"sidebar",previous:{title:"4. Creating the Candy Machine",permalink:"/deprecated/candy-machine-js-cli/creating-candy-machine"},next:{title:"6. Mint Tokens",permalink:"/deprecated/candy-machine-js-cli/mint-tokens"}},d={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verify-upload"},"Verify Upload"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We strongly recommend you do not skip this step.")),(0,a.kt)("p",null,"The Candy Machine provides a command to verify if the metadata URI on chain has been successfully uploaded."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts verify_upload \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -c example\n")),(0,a.kt)("p",null,"The command will check that each entry in the cache file matches the URI stored on-chain. A successful execution will generate an output similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Key size 10\nName Number #0001 with https://arweave.net/AVmNYNiiJcsjMwICLnrZQacxn5duJJCQoEeksrz2VC4 checked out\nName Number #0002 with https://arweave.net/AQ5jvijKSIfiWt49w-Xf4OTwWS1WzXK2kq9gT8CCYeM checked out\nName Number #0003 with https://arweave.net/jC6Cz-6VtQSWp0kJMurdxp5BPeNHHoXmjOXl6G7bFeI checked out\nName Number #0004 with https://arweave.net/-u8Uikbe-K0RKTvJWXEf2s0vXkRJmbM-XxJb2ijCqD4 checked out\nName Number #0005 with https://arweave.net/oC0S6XNiAOo97SS0qhVbeoXEBC5TmlklWOZMJLD0URM checked out\nName Number #0006 with https://arweave.net/YoGpQYv7SGGF0_46n0pmLitXfjiY20mXDa8ezgpo0j4 checked out\nName Number #0007 with https://arweave.net/fvXr1-3RnTDj7C7rJ4I32SHbH_MDMs9O6Eunzzu1vk4 checked out\nName Number #0008 with https://arweave.net/lWnzWX_Mh7Lxy3f6drrJvtfi1_zN6xfNVS7gCF0hY1A checked out\nName Number #0009 with https://arweave.net/YtHXX8vJ-3dAFINUoeLEKpNBtP32LVyj6_kH6nFFdPw checked out\nName Number #0010 with https://arweave.net/FJDIqjMi1R-ut0n08QNCADvvfLKT-j7g2qNS2fkr5EQ checked out\nuploaded (10) out of (10)\nready to deploy!\n")),(0,a.kt)("p",null,"If any of the URI entries do not match the information on the chain, you will get an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error: not all NFTs checked out. check out logs above for details\n")),(0,a.kt)("p",null,"In this case, you will need to re-run the upload command. Only after the verify command succeeds should you make your Candy Machine live."))}p.isMDXComponent=!0}}]);