"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Validation and Benchmarking of CNFs in OSM for pure Cloud Native applications in 5G and beyond",s={unversionedId:"references/paper2",id:"references/paper2",title:"Validation and Benchmarking of CNFs in OSM for pure Cloud Native applications in 5G and beyond",description:"Adri\xe1n Pino, Pouria Khodashenas, Xavier Hesselbach, Estefan\xeda Coronado & Shuaib Siddiqui",source:"@site/docs/references/paper2.md",sourceDirName:"references",slug:"/references/paper2",permalink:"/website/docs/references/paper2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"A roadside and cloud-based vehicular communications framework for the provision of C-ITS services",permalink:"/website/docs/references/paper1"},next:{title:"Kube5G: A Cloud-Native 5G Service Platform",permalink:"/website/docs/references/paper3"}},c={},l=[{value:"Adri\xe1n Pino, Pouria Khodashenas, Xavier Hesselbach, Estefan\xeda Coronado &amp; Shuaib Siddiqui",id:"adri\xe1n-pino-pouria-khodashenas-xavier-hesselbach-estefan\xeda-coronado--shuaib-siddiqui",level:3},{value:"Abstract",id:"abstract",level:2},{value:"Full Report",id:"full-report",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"validation-and-benchmarking-of-cnfs-in-osm-for-pure-cloud-native-applications-in-5g-and-beyond"},"Validation and Benchmarking of CNFs in OSM for pure Cloud Native applications in 5G and beyond"),(0,a.kt)("h3",{id:"adri\xe1n-pino-pouria-khodashenas-xavier-hesselbach-estefan\xeda-coronado--shuaib-siddiqui"},"Adri\xe1n Pino, Pouria Khodashenas, Xavier Hesselbach, Estefan\xeda Coronado & Shuaib Siddiqui"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"Cloud Native (CN) in 5G systems has been identified as a pivotal candidate for operational and capital expenditure savings as well as for improvements in system agility and services role-out. CN telco is a step forward with respect to Network Function Virtualisation (NFV) aiming at embracing a microservice-based architecture. With this in mind, the European Telecommunications Standards Institute (ETSI) has evolved the ETSI NFV reference architecture to adapt to CN and fill the gap with the NFV framework, including containers and ZeroTouch, among other capabilities. Open-source Management & Orchestration (MANO) initiatives, such as Open Source MANO (OSM), are promoting this adoption giving support to CN solutions based on containers. However, at this early stage deployments are currently non-standalone and embedded in VNF-based solutions such as OpenStack. In this context, this paper presents a proof of concept of a full container technology deployment -via Kubernetes- in a NFV architecture. First, a full CN NFV environment is set with the help of OSM MANO, for which we describe the implementation to enable native kubernetes-based Container Network Functions (CNFs) and analyse their performance, limits, advantages and drawbacks. Finally, our solution for CNFs is benchmarked against a typical OSMOpenStack setup where VNFs are deployed. The results obtained in this work can help to further encourage users and operators to use CNFs and get the most out of containerisation in NFV."),(0,a.kt)("h2",{id:"full-report"},"Full Report"),(0,a.kt)("p",null,"Read the complete file, ",(0,a.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/9522356"},"here"),"."))}u.isMDXComponent=!0}}]);