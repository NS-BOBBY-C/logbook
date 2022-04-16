"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[5858],{3905:function(e,t,i){i.d(t,{Zo:function(){return s},kt:function(){return h}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(i),h=r,A=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return i?n.createElement(A,a(a({ref:t},s),{},{components:i})):n.createElement(A,a({ref:t},s))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},7655:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return s},toc:function(){return u},default:function(){return h}});var n=i(7462),r=i(3366),o=(i(7294),i(3905)),a=["components"],l={},c="Building ViroCore --\x3e ViroReact --\x3e Use in starter kit",d={permalink:"/programming-blog/2022/02/23/building-viro",source:"@site/programming-blog/2022-02-23-building-viro.md",title:"Building ViroCore --\x3e ViroReact --\x3e Use in starter kit",description:"I am assuming that you have your directories set up with viro, virocore and the starter-kit as follows:",date:"2022-02-23T00:00:00.000Z",formattedDate:"February 23, 2022",tags:[],readingTime:1.505,truncated:!1,authors:[],nextItem:{title:"Adding back GVR on iOS for Viro",permalink:"/programming-blog/2022/02/22/gvr-ios"}},s={authorsImageUrls:[]},u=[{value:"1. Build ViroCore",id:"1-build-virocore",children:[{value:"(iOS) Building the renderer to be used in react-viro platform",id:"ios-building-the-renderer-to-be-used-in-react-viro-platform",children:[],level:3},{value:"1.1. Make sure you followed through steps 1 - 3 mentioned in the android section",id:"11-make-sure-you-followed-through-steps-1---3-mentioned-in-the-android-section",children:[],level:3},{value:"1.2. Execute the following commands to install pods from <code>Podfile</code>",id:"12-execute-the-following-commands-to-install-pods-from-podfile",children:[],level:3},{value:"1.3. Open <code>ViroRenderer.xcworkspace</code> in Xcode. Build scheme <code>ViroKit</code> with Build Configuration set to <code>Release</code> and target set to <code>Generic iOS Device</code>.",id:"13-open-virorendererxcworkspace-in-xcode-build-scheme-virokit-with-build-configuration-set-to-release-and-target-set-to-generic-ios-device",children:[],level:3}],level:2},{value:"2. Build ViroReact",id:"2-build-viroreact",children:[{value:"2.1. Execute the following commands to install pods from <code>Podfile</code>",id:"21-execute-the-following-commands-to-install-pods-from-podfile",children:[],level:3},{value:"2.2. Open <code>ViroReact.xcworkspace</code> in Xcode. Build scheme <code>ViroReact</code> with Build Configuration set to <code>Release</code> and target set to <code>Generic iOS Device</code>.",id:"22-open-viroreactxcworkspace-in-xcode-build-scheme-viroreact-with-build-configuration-set-to-release-and-target-set-to-generic-ios-device",children:[],level:3},{value:"2.3. Install pods",id:"23-install-pods",children:[],level:3},{value:"2.4. Bundle the ViroReact project into a tarball",id:"24-bundle-the-viroreact-project-into-a-tarball",children:[],level:3}],level:2},{value:"3. Use in starter kit",id:"3-use-in-starter-kit",children:[{value:"3.1. Clear the yarn cache of the tarball",id:"31-clear-the-yarn-cache-of-the-tarball",children:[],level:3},{value:"3.2. install dependencies",id:"32-install-dependencies",children:[],level:3},{value:"3.3. Run the starter kit",id:"33-run-the-starter-kit",children:[],level:3}],level:2}],p={toc:u};function h(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I am assuming that you have your directories set up with ",(0,o.kt)("inlineCode",{parentName:"p"},"viro"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"virocore")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"starter-kit")," as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"directories",src:i(231).Z})),(0,o.kt)("h2",{id:"1-build-virocore"},"1. Build ViroCore"),(0,o.kt)("h3",{id:"ios-building-the-renderer-to-be-used-in-react-viro-platform"},"(iOS) Building the renderer to be used in react-viro platform"),(0,o.kt)("h3",{id:"11-make-sure-you-followed-through-steps-1---3-mentioned-in-the-android-section"},"1.1. Make sure you followed through steps 1 - 3 mentioned in the android section"),(0,o.kt)("h3",{id:"12-execute-the-following-commands-to-install-pods-from-podfile"},"1.2. Execute the following commands to install pods from ",(0,o.kt)("inlineCode",{parentName:"h3"},"Podfile")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# in virocore/\ncd ios\npod install\n")),(0,o.kt)("h3",{id:"13-open-virorendererxcworkspace-in-xcode-build-scheme-virokit-with-build-configuration-set-to-release-and-target-set-to-generic-ios-device"},"1.3. Open ",(0,o.kt)("inlineCode",{parentName:"h3"},"ViroRenderer.xcworkspace")," in Xcode. Build scheme ",(0,o.kt)("inlineCode",{parentName:"h3"},"ViroKit")," with Build Configuration set to ",(0,o.kt)("inlineCode",{parentName:"h3"},"Release")," and target set to ",(0,o.kt)("inlineCode",{parentName:"h3"},"Generic iOS Device"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"directories",src:i(5932).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",null,"If you want the ability to run on Simulator, change target to any of the ",(0,o.kt)("inlineCode",{parentName:"p"},"iOS Simulator")," targets instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Generic iOS Device"),". If the Xcode build succeeded, you should see a bunch of new files copied over in ",(0,o.kt)("inlineCode",{parentName:"p"},"viro/ios/dist/")," folder in the viro repo you cloned earlier."),(0,o.kt)("h2",{id:"2-build-viroreact"},"2. Build ViroReact"),(0,o.kt)("h3",{id:"21-execute-the-following-commands-to-install-pods-from-podfile"},"2.1. Execute the following commands to install pods from ",(0,o.kt)("inlineCode",{parentName:"h3"},"Podfile")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# in viro/\ncd ios\npod install\n")),(0,o.kt)("h3",{id:"22-open-viroreactxcworkspace-in-xcode-build-scheme-viroreact-with-build-configuration-set-to-release-and-target-set-to-generic-ios-device"},"2.2. Open ",(0,o.kt)("inlineCode",{parentName:"h3"},"ViroReact.xcworkspace")," in Xcode. Build scheme ",(0,o.kt)("inlineCode",{parentName:"h3"},"ViroReact")," with Build Configuration set to ",(0,o.kt)("inlineCode",{parentName:"h3"},"Release")," and target set to ",(0,o.kt)("inlineCode",{parentName:"h3"},"Generic iOS Device"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"directories",src:i(6942).Z})),(0,o.kt)("p",null,"This should generate more files in the ios/dist/ folder."),(0,o.kt)("h3",{id:"23-install-pods"},"2.3. Install pods"),(0,o.kt)("p",null,"I don't know if this is required, but I'm doing it anyways"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# in viro/\ncd ios\npod install\n")),(0,o.kt)("h3",{id:"24-bundle-the-viroreact-project-into-a-tarball"},"2.4. Bundle the ViroReact project into a tarball"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn bundle\n")),(0,o.kt)("h2",{id:"3-use-in-starter-kit"},"3. Use in starter kit"),(0,o.kt)("h3",{id:"31-clear-the-yarn-cache-of-the-tarball"},"3.1. Clear the yarn cache of the tarball"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# I know, this cleans the entire cache. \n# yarn cache clean @viro-community/react-viro doesn't properly clear the tarball from the cache.\nyarn cache clean\n")),(0,o.kt)("h3",{id:"32-install-dependencies"},"3.2. install dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# in starter-kit/\nyarn install\n\nyarn add ../viro/viro-community-react-viro-<version>.tgz\n\ncd ios\npod install\n")),(0,o.kt)("h3",{id:"33-run-the-starter-kit"},"3.3. Run the starter kit"))}h.isMDXComponent=!0},231:function(e,t){t.Z="data:image/png;base64,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"},5932:function(e,t,i){t.Z=i.p+"assets/images/virocore-0cc835288eb8036cc79f0e80273e80a1.png"},6942:function(e,t,i){t.Z=i.p+"assets/images/viroreact-19ca08be4f21e658401014e53915ef6d.png"}}]);