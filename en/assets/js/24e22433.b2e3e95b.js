"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[92406],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Cross-platform Development"},l=void 0,p={unversionedId:"envs",id:"version-3.x/envs",title:"Cross-platform Development",description:"Taro was originally designed to unify cross-platform development and has tried its best to smooth out the differences between multiple ends through runtime frameworks, components, and APIs, but there are still some differences between different platforms that cannot be eliminated, so in order to better realize cross-platform development, Taro provides the following solutions",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/envs.md",sourceDirName:".",slug:"/envs",permalink:"/taro-docs/en/docs/envs",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/envs.md",tags:[],version:"3.x",frontMatter:{title:"Cross-platform Development"},sidebar:"docs",previous:{title:"Static resource references",permalink:"/taro-docs/en/docs/static-reference"},next:{title:"Multi-Platform Synchronized Debugging",permalink:"/taro-docs/en/docs/envs-debug"}},s={},u=[{value:"Built-in environment variables",id:"built-in-environment-variables",level:2},{value:"process.env.TARO_ENV",id:"processenvtaro_env",level:3},{value:"Uniform interface for multi-terminal files",id:"uniform-interface-for-multi-terminal-files",level:2},{value:"Multiple platform components",id:"multiple-platform-components",level:3},{value:"Multiple platform scripting",id:"multiple-platform-scripting",level:3},{value:"Usage points",id:"usage-points",level:3},{value:"Use different pages in app.js",id:"use-different-pages-in-appjs",level:3},{value:"Make dependencies in node_modules parse multiple files as well",id:"make-dependencies-in-node_modules-parse-multiple-files-as-well",level:3},{value:"Reference Case",id:"reference-case",level:2}],c={toc:u};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro was originally designed to unify cross-platform development and has tried its best to smooth out the differences between multiple ends through runtime frameworks, components, and APIs, but there are still some differences between different platforms that cannot be eliminated, so in order to better realize cross-platform development, Taro provides the following solutions"),(0,r.kt)("h2",a({},{id:"built-in-environment-variables"}),"Built-in environment variables"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The way environment variables are used in the code, ",(0,r.kt)("a",a({parentName:"p"},{href:"/taro-docs/en/docs/best-practice#%E6%9C%80%E4%BD%B3%E7%BC%96%E7%A0%81%E6%96%B9%E5%BC%8F"}),"reference"))),(0,r.kt)("p",null,"Taro provides some built-in environment variables at compile time to help the user do some special handling"),(0,r.kt)("h3",a({},{id:"processenvtaro_env"}),"process.env.TARO_ENV"),(0,r.kt)("p",null,"Used to determine the current compilation type, currently there are ",(0,r.kt)("inlineCode",{parentName:"p"},"weapp")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"swan")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"alipay")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"h5")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"rn")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"tt")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"qq")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"quickapp")," eight values, This variable can be used to write code for different environments, and when compiling the code that does not belong to the current compile type will be removed  and only the code under the current compile type will be kept, for example, if you want to refer to different resources in the WeChat mini-program and H5 respectively"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"if (process.env.TARO_ENV === 'weapp') {\n  require('path/to/weapp/name')\n} else if (process.env.TARO_ENV === 'h5') {\n  require('path/to/h5/name')\n}\n")),(0,r.kt)("p",null,"It can also be used in JSX to determine which components to load on different ends."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"render () {\n  return (\n    <View>\n      {process.env.TARO_ENV === 'weapp' && <ScrollViewWeapp />}\n      {process.env.TARO_ENV === 'h5' && <ScrollViewH5 />}\n    </View>\n  )\n}\n")),(0,r.kt)("h2",a({},{id:"uniform-interface-for-multi-terminal-files"}),"Uniform interface for multi-terminal files"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"1.2.17 start support")),(0,r.kt)("p",null,"The built-in environment variables can solve most of the cross-end problems, but it will fill the code with logic judgment code, which affects the maintainability of the code, and also makes the code more and more ugly. To solve this problem, since ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.17"),", Taro provides another way of cross-end development as a supplement."),(0,r.kt)("p",null,"Developers can address features that differ across ends by using multiple platform files with a unified interface. For a feature, if there are differences between multiple ends, developers can modify the file into the naming form of ",(0,r.kt)("inlineCode",{parentName:"p"},"original file name + end type"),", so that the file code of different ends keeps a unified interface to the outside world, while the reference is still ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," the file with the original file name. Taro will change the loaded file to a file with the file name of the corresponding end type at compilation time, so as to achieve the purpose of loading the corresponding file for different ends."),(0,r.kt)("p",null,"The end type corresponds to the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.TARO_ENV"),"."),(0,r.kt)("p",null,"There are usually two usage scenarios."),(0,r.kt)("h3",a({},{id:"multiple-platform-components"}),"Multiple platform components"),(0,r.kt)("p",null,"If there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," component that exists in three different versions - WeChat mini-program, Baidu smart-program and H5 - then the code can be organized like this"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"test.js")," file, which is the default form of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," component, is compiled to a version that is used outside of the  WeChat mini-program, Baidu smart-program and H5"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"test.h5.js")," file, which is the H5 version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"test.weapp.js")," file, which is the WeChat mini-program version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"test.swan.js")," file, which is the Baidu smart-program version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"test.qq.js")," file, which is the QQ mini-program version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"test.quickapp.js")," file, which is the quick app version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," component"),(0,r.kt)("p",null,"The four files, which expose a unified interface to the outside world, accept consistent parameters, but only have internal code implementations for their respective platforms"),(0,r.kt)("p",null,"When we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")," component, the reference remains the same as before, the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," is a file name without the end type, and the end type suffix is automatically recognized and added at compile time"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Test from '../../components/test'\n\n<Test argA={1} argA={2} />\n")),(0,r.kt)("h3",a({},{id:"multiple-platform-scripting"}),"Multiple platform scripting"),(0,r.kt)("p",null,"Similar to the multiple platform component, if there is a need to write different script logic code for different ends, we can handle it similarly, the only principle to follow is to keep the external interface of the multiple platform file consistent."),(0,r.kt)("p",null,"For example, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.setNavigationBarTitle")," to set the page title on WeChat mini-program, and H5 uses ",(0,r.kt)("inlineCode",{parentName:"p"},"document.title"),", then you can encapsulate a ",(0,r.kt)("inlineCode",{parentName:"p"},"setTitle")," method to smooth out the difference between the two platforms."),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"set_title.h5.js"),",with the following code"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="set_title.h5.js"',title:'"set_title.h5.js"'}),"export default function setTitle (title) {\n  document.title = title\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"set_title.weapp.js"),"\uff0cwith the following code"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="set_title.weapp.js"',title:'"set_title.weapp.js"'}),"import Taro from '@tarojs/taro'\nexport default function setTitle (title) {\n  Taro.setNavigationBarTitle({\n    title\n  })\n}\n")),(0,r.kt)("p",null,"When called, the following is used"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"import setTitle from '../utils/set_title'\n\nsetTitle('page title')\n")),(0,r.kt)("h3",a({},{id:"usage-points"}),"Usage points"),(0,r.kt)("p",null,"There are three key points of use for this cross-platform compatible writeup of the unified interface's multi-terminal files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The corresponding files on different ends must have a unified interface and a unified call method"),(0,r.kt)("li",{parentName:"ul"},"It is better to have a platform-independent default file, so that there will be no error when using ts"),(0,r.kt)("li",{parentName:"ul"},"When referring to a file, only the default file name should be written, not the file suffix.")),(0,r.kt)("h3",a({},{id:"use-different-pages-in-appjs"}),"Use different pages in app.js"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"1.3.11 Start of support")),(0,r.kt)("p",null,"Depending on the environment, different ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," are returned, which can be written like this"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"let pages = []\nif (process.env.TARO_ENV === 'weapp') {\n  pages = [\n    '/pages/index/index'\n  ]\n}\nif (process.env.TARO_ENV === 'swan') {\n  pages = [\n    '/pages/indexswan/indexswan'\n  ]\n}\nexport default {\n  pages\n}\n")),(0,r.kt)("h3",a({},{id:"make-dependencies-in-node_modules-parse-multiple-files-as-well"}),"Make dependencies in node_modules parse multiple files as well"),(0,r.kt)("p",null,"The multiple platform files in Taro 3 are parsed by the  ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-runner-utils/src/resolve/MultiPlatformPlugin.ts"}),"MultiPlatformPlugin")," plugin."),(0,r.kt)("p",null,"It is an ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/webpack/enhanced-resolve"}),"enhanced-resolve")," plugin, which is loaded internally by taro by default. However, the plugin does not resolve files in node_modules by default."),(0,r.kt)("p",null,"If we have an npm package called @taro-mobile and we need to parse the multiple platform files  in it, we can change the configuration of the MultiPlatformPlugin in the taro configuration file like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="/config/index.js"',title:'"/config/index.js"'}),"// mini can also be changed to h5, corresponding to the mini-program and h5 end configuration respectively\nmini: {\n  webpackChain (chain) {\n    chain.resolve.plugin('MultiPlatformPlugin')\n      .tap(args => {\n        return [...args, {\n          include: ['@taro-mobile']\n        }]\n      })\n  }\n}\n")),(0,r.kt)("p",null,"The Taro 3 RN side does not use webpack, so it can't be consistent with the other side, so a configuration support has to be added here."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="/config/index.js"',title:'"/config/index.js"'}),"rn: {\n  resolve: {\n    include: ['@taro-mobile'],\n  }\n}\n")),(0,r.kt)("h2",a({},{id:"reference-case"}),"Reference Case"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/wuba/taro-playground"}),"Taro Playground")," Project support RN, WeChat mini program, web is available for reference."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Android"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"iOS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Web"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Mini Program"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("img",a({parentName:"td"},{src:"https://pic3.58cdn.com.cn/nowater/fangfe/n_v295dd481b6b2f446592350e3187716d03.png",alt:null}))),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("img",a({parentName:"td"},{src:"https://pic1.58cdn.com.cn/nowater/fangfe/n_v224532e5560314106b6ab32b0a1534a9d.png",alt:null}))),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("img",a({parentName:"td"},{src:"https://pic5.58cdn.com.cn/nowater/frs/n_v2d585527f52e640679cdd37123a418fe3.png",alt:null}))),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("img",a({parentName:"td"},{src:"https://pic3.58cdn.com.cn/nowater/frs/n_v23ec2613515c6458aaa44f01d459cea8b.jpg",alt:null})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/wuba/taro-playground/releases"}),"https://github.com/wuba/taro-playground/releases")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://apps.apple.com/cn/app/taro-playground/id1576830673"}),"https://apps.apple.com/cn/app/taro-playground/id1576830673")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://wuba.github.io/taro-playground/"}),"https://wuba.github.io/taro-playground/")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"https://github.com/wuba/taro-playground"}),"https://github.com/wuba/taro-playground"))))),(0,r.kt)("p",null,"The project also integrates with ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/wuba/taro-playground/tree/main/.github/workflows"}),"Github Workflows")," to automate publishing for Android, iOS, WeChat applets, and web."))}d.isMDXComponent=!0}}]);