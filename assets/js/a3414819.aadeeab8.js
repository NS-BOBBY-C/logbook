"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[5080],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2134:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},c="Building @viro-community/react-viro package",u={permalink:"/logbook/blog/2022/02/13/building-viro",editUrl:"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-13-building-viro.md",source:"@site/blog/2022-02-13-building-viro.md",title:"Building @viro-community/react-viro package",description:"The first major change I had to make was to add react native as a dev dependency. Android will not build correctly without it.",date:"2022-02-13T00:00:00.000Z",formattedDate:"February 13, 2022",tags:[],readingTime:.765,truncated:!1,authors:[],prevItem:{title:"Adding back GVR on iOS for Viro",permalink:"/logbook/blog/2022/02/22/gvr-ios"},nextItem:{title:"Developing with ViroCommunity/viro Locally",permalink:"/logbook/blog/2022/02/13/develop-with-viro-locally"}},p={authorsImageUrls:[]},d=[],s={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The first major change I had to make was to add react native as a dev dependency. Android will not build correctly without it."),(0,a.kt)("p",null,"After sifting around through the build.gradle, settings.gradle, and android/build.gradle files, I had a realization that there might be certain parts of the android project that are put into different places when the ./prepare_release.sh script is run."),(0,a.kt)("p",null,"The next AHA! moment was when I realized that I can install a dependency from a tarball. The package.json for the starter kit looks slightly different:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "@viro-community/react-viro": "../viro/viro-community-react-viro-2.22.0.tgz",\n  "fsevents": "^2.3.2",\n  "react": "17.0.2",\n  "react-native": "0.65.1"\n}\n')),(0,a.kt)("p",null,"instead of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "@viro-community/react-viro": "../viro",\n  "fsevents": "^2.3.2",\n  "react": "17.0.2",\n  "react-native": "0.65.1"\n},\n')),(0,a.kt)("p",null,"This tarball puts everything into the right spot for a local installation, and then the starter-kit builds on android! I had to add the dist folder for the generated JS files so that ",(0,a.kt)("inlineCode",{parentName:"p"},"npm pack")," would get everything needed."))}f.isMDXComponent=!0}}]);