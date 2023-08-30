"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5565],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73064:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var a=n(83117),o=(n(67294),n(3905));const r={},i="Bring Your Own Uploader",l={unversionedId:"developer-tools/sugar/developer/bring-your-own-uploader",id:"developer-tools/sugar/developer/bring-your-own-uploader",title:"Bring Your Own Uploader",description:"Sugar has an extensible architecture to easily allow the implementation of new upload methods with minimal effort. The upload logic is decoupled from the upload command and new methods can be plug-in into the upload flow by implementing a Rust trait, supporting both free-form and parallel upload methods:",source:"@site/docs/03-developer-tools/00-sugar/06-developer/00-bring-your-own-uploader.md",sourceDirName:"03-developer-tools/00-sugar/06-developer",slug:"/developer-tools/sugar/developer/bring-your-own-uploader",permalink:"/developer-tools/sugar/developer/bring-your-own-uploader",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/06-developer/00-bring-your-own-uploader.md",tags:[],version:"current",lastUpdatedAt:1693391782,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Developer Guide",permalink:"/developer-tools/sugar/developer/"},next:{title:"Solita",permalink:"/developer-tools/solita/"}},p={},s=[{value:"Traits",id:"traits",level:2},{value:"Uploader",id:"uploader",level:3},{value:"ParallelUploader",id:"paralleluploader",level:3},{value:"Prepare",id:"prepare",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bring-your-own-uploader"},"Bring Your Own Uploader"),(0,o.kt)("p",null,"Sugar has an extensible architecture to easily allow the implementation of new upload methods with minimal effort. The upload logic is decoupled from the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command and new methods can be plug-in into the upload flow by implementing a Rust trait, supporting both ",(0,o.kt)("em",{parentName:"p"},"free-form")," and parallel upload methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Uploader"),": this trait should be implemented directly by upload methods that require full control on how the upload is performed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ParallelUploader"),": this trait abstracts the threading logic and allows methods to focus on the logic of uploading a single asset (file).")),(0,o.kt)("p",null,"The use of the different traits is illustrated in the upload architecture overview below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Uploader Overview",src:n(32224).Z+"#radius#shadow",width:"1720",height:"1444"})),(0,o.kt)("p",null,"To implement your uploader, the first step is to decide whether you need full control of the upload process or your method support parallel upload. This will inform which trait to implement. Independently of the trait that you implement, assets (files) requiring upload are represented by a ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetInfo")," struct."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct AssetInfo {\n    /// Id of the asset in the cache.\n    pub asset_id: String,\n    /// Name (file name) of the asset.\n    pub name: String,\n    /// Content of the asset - either a file path or the string\n    /// representation of its content.\n    pub content: String,\n    /// Type of the asset.\n    pub data_type: DataType,\n    /// MIME content type.\n    pub content_type: String,\n}\n")),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetInfo")," can represent a physical file, in which case the ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," will correspond to the name of the file; or an in-memory asset, in which case the ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," will correspond to the content of the asset."),(0,o.kt)("p",null,"For example, for image files, the ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," contains the path of the file on the file system. In the case of json metadata files, the ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," contains the string representation of the json metadata."),(0,o.kt)("h2",{id:"traits"},"Traits"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"More details of the traits' implementations can be found on Sugar's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/sugar/blob/main/src/upload/uploader.rs"},"source code"),".")),(0,o.kt)("h3",{id:"uploader"},"Uploader"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Uploader")," trait gives you full control on how the assets (files) are uploaded. It defines a single function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"async fn upload(\n        &self,\n        sugar_config: &SugarConfig,\n        cache: &mut Cache,\n        data_type: DataType,\n        assets: &mut Vec<AssetInfo>,\n        progress: &ProgressBar,\n        interrupted: Arc<AtomicBool>,\n    ) -> Result<Vec<UploadError>>;\n")),(0,o.kt)("p",null,"where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sugar_config")," - The current sugar configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cache")," - Asset cache object (mutable)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data_type")," - Type of the asset being uploaded"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assets")," - Vector of assets to upload (mutable)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"progress")," - Reference to the progress bar to provide feedback to the console"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"interrupted")," - Reference to the shared interruption handler flag to receive notifications")),(0,o.kt)("p",null,"This function will be called to upload each type of asset separately","\u2014","e.g., once for your images, once for your metadata and, if present, once for your animation assets. After uploading an asset, its information needs to be updated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cache")," object and the cache saved to the file system using the ",(0,o.kt)("inlineCode",{parentName:"p"},"sync_file")," function. Syncing the cache to the file system might be slow for large collections, therefore it should be done as frequent as practical to avoid slowing down the upload process and, at the same time, minimizing the chances of information loss in case the user aborts the upload."),(0,o.kt)("p",null,"Implementations are expected to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"interrupted")," parameter to control when the user aborts the upload process by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),"\u2014","this is useful for large uploads. Any information saved in the cache will not be re-uploaded. The ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command will filter out the assets already uploaded, and they will not be included in the vector of assets. The ",(0,o.kt)("inlineCode",{parentName:"p"},"progress")," is a reference to the progress bar displayed on the console and should be used to provide a visual feedback of the progress of the upload by calling its ",(0,o.kt)("inlineCode",{parentName:"p"},"progress.inc(1)")," function to indicate that ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," asset was uploaded."),(0,o.kt)("p",null,"When all files are uploaded successfully, the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," method will return an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"Vec"),"; in case of errors, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Vec")," will contain a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"UploadError"),"s that will be displayed to the user."),(0,o.kt)("h3",{id:"paralleluploader"},"ParallelUploader"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ParallelUpload")," provides a thread-enabled implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Uploader")," trait's ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," function to support concurrent uploads, abstracting the threading logic to focus on the logic of uploading a single asset (file). Therefore, methods that can upload assets in parallel need to implement a simplified ",(0,o.kt)("inlineCode",{parentName:"p"},"upload_asset")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn upload_asset(\n        &self,\n        asset: AssetInfo\n    ) -> JoinHandle<Result<(String, String)>>;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"upload_asset")," function must return a ",(0,o.kt)("inlineCode",{parentName:"p"},"JoinHandle")," object. In most cases, the function will return the value from ",(0,o.kt)("inlineCode",{parentName:"p"},"tokio::spawn"),". This function should only include the logic to upload the asset","\u2014","the interruption control and cache synchronization is done automatically by the ",(0,o.kt)("inlineCode",{parentName:"p"},"ParallelUpload")," trait."),(0,o.kt)("h3",{id:"prepare"},"Prepare"),(0,o.kt)("p",null,"All upload methods need to implement an additional trait ",(0,o.kt)("inlineCode",{parentName:"p"},"Prepare"),". The rationale is to prepare the method for the upload of the specified media/metadata files, e.g.:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check if any file exceeds a size limit;"),(0,o.kt)("li",{parentName:"ul"},"check if there is storage space for the upload;"),(0,o.kt)("li",{parentName:"ul"},"check/add funds for the upload.")),(0,o.kt)("p",null,"The trait defines a single function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"async fn prepare(\n        &self,\n        sugar_config: &SugarConfig,\n        asset_pairs: &HashMap<isize, AssetPair>,\n        asset_indices: Vec<(DataType, &[isize])>,\n    ) -> Result<()>;\n")),(0,o.kt)("p",null,"where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sugar_config")," - The current sugar configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"asset_pairs")," - Mapping of ",(0,o.kt)("inlineCode",{parentName:"li"},"index")," to an ",(0,o.kt)("inlineCode",{parentName:"li"},"AssetPair")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"asset_indices")," - Vector with the information of which asset pair indices will be uploaded, grouped by type.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"asset_pairs")," contain the complete information of the assets, but only the assets specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"asset_indices")," will be uploaded","\u2014","e.g., if index ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," is only present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataType::Image")," indices' array, only the image of asset ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," will the uploaded."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"After implementing the logic of the upload method, you need to integrate your method in Sugar's configuration file. Firstly, you will need to add a new value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"UploadMethod")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/sugar/blob/main/src/config/data.rs#L296"},"enum")," to identify your upload method. Secondly, you need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/sugar/blob/main/src/upload/uploader.rs#L270"},"factory method")," to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Uploader")," object when it is specified in the configuration file."),(0,o.kt)("p",null,"In case your upload method requires additional parameters, you will need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigData")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/sugar/blob/main/src/config/data.rs#L35"},"struct"),". For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"aws")," upload method requires the user to specify a bucket name for the upload. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigData")," struct, you will find an ",(0,o.kt)("inlineCode",{parentName:"p"},"aws_s3_bucket")," field, which corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"awsS3Bucket")," property in the configuration file."),(0,o.kt)("p",null,"Once you completed the upload method trait implementation and added its details to Sugar's configuration file, it is ready to be used to upload assets."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Do not forget to submit a PR to Sugar's repository to have your implementation added to Sugar's code base.")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Sugar currently has four ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/sugar/tree/main/src/upload/methods"},"upload methods")," available","\u2014","check their source code for more details about how the upload of assets works and design ideas to implement your own upload method."))}u.isMDXComponent=!0},32224:function(e,t,n){t.Z=n.p+"assets/images/UploaderOverview-c455b1d9ac30e0c664d77d49e5935b3d.png"}}]);