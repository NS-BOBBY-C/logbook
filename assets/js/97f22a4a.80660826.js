"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[3831],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||l[g]||a;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6584:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return l},default:function(){return g}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],i={},c="Jest: String Matching (Use RegEx)",s={permalink:"/programming-blog/2022/01/19/jest-using-regex-in-string-matching",source:"@site/programming-blog/2022-01-19-jest-using-regex-in-string-matching.md",title:"Jest: String Matching (Use RegEx)",description:'While trying to use result.getByText() to find a component, I found that it was not working. My test case was a regression test to make sure that a component could not say "1 providers." The component looked like:',date:"2022-01-19T00:00:00.000Z",formattedDate:"January 19, 2022",tags:[],readingTime:.605,truncated:!1,authors:[],prevItem:{title:"Jest: Accurate Snapshots When Loading from UseEffect",permalink:"/programming-blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data"}},u={authorsImageUrls:[]},l=[],d={toc:l};function g(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While trying to use ",(0,a.kt)("inlineCode",{parentName:"p"},"result.getByText()"),' to find a component, I found that it was not working. My test case was a regression test to make sure that a component could not say "1 providers." The component looked like:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"}," <Typography\n  variant=\"caption\"\n  color=\"textSecondary\"\n  data-testid=\"approved-by-provider-count\"\n>\n  {t('Approved by')} {abbrNum(supporters.length, 1)}{' '}\n  {supporters.length === 1 ? t('provider') : t('providers')}\n</Typography>\n")),(0,a.kt)("p",null,"and the snapshot was:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span\n  class="MuiTypography-root MuiTypography-caption MuiTypography-colorTextSecondary"\n  data-testid="approved-by-provider-count">\n    Approved by\n\n    1\n\n    provider\n</span>  \n')),(0,a.kt)("p",null,"I couldn't figure out the newlines and spaces in my expect statement. I tried to use a regex to match the string, and it worked correctly! ",(0,a.kt)("inlineCode",{parentName:"p"},"/s")," matches any whitespace character, including newlines."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const expected = /Approved by\\s*1\\s*provider/;\nconst expected1 = /Approved by\\s*1\\s*providers/;\nexpect(result.queryByText(expected1)).not.toBeInTheDocument();\nexpect(result.getByText(expected)).toBeInTheDocument();\n")))}g.isMDXComponent=!0}}]);