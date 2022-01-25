"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[355],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4385:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={},c="Jest: Flush Promises and Timers with Snapshot Tests",l={permalink:"/logbook/blog/2022/01/24/jest-flush-snapshot-timers",editUrl:"https://github.com/NS-BOBBY-C/logbook/edit/main/blog/2022-01-24-jest-flush-snapshot-timers.md",source:"@site/blog/2022-01-24-jest-flush-snapshot-timers.md",title:"Jest: Flush Promises and Timers with Snapshot Tests",description:"I got a warning error which looked like:",date:"2022-01-24T00:00:00.000Z",formattedDate:"January 24, 2022",tags:[],readingTime:.68,truncated:!1,authors:[],nextItem:{title:"Jest: Accurate Snapshots When Loading from UseEffect",permalink:"/logbook/blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data"}},u={authorsImageUrls:[]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I got a warning error which looked like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-error"},"Warning: It looks like you're using the wrong act() around your test interactions.\nBe sure to use the matching version of act() corresponding to your renderer:\n\n// for react-dom:\nimport {act} from 'react-dom/test-utils';\n// ...\nact(() => ...);\n\n// for react-test-renderer:\nimport TestRenderer from 'react-test-renderer';\nconst {act} = TestRenderer;\n// ...\nact(() => ...);\n")),(0,a.kt)("p",null,"that has also been documented ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library/issues/516"},"here"),". I was able to fix this by adding a similar function ",(0,a.kt)("inlineCode",{parentName:"p"},"flushPromisesAndTimersForSnapshot()")," and the error messages went away."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { act } from '@testing-library/react';\nimport renderer from 'react-test-renderer';\n\nexport function flushPromisesAndTimers() {\n  return act(\n    () =>\n      new Promise((resolve) => {\n        setTimeout(resolve, 500);\n        jest.runAllTimers();\n      })\n  );\n}\n\nexport function flushPromisesAndTimersForSnapshot() {\n  return renderer.act(\n    () =>\n      new Promise((resolve) => {\n        setTimeout(resolve, 500);\n        jest.runAllTimers();\n      })\n  );\n}\n")))}f.isMDXComponent=!0}}]);