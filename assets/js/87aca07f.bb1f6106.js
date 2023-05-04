"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},o="Validation and Benchmarking of CNFs in OSM for pure Cloud Native applications in 5G and beyond",s={unversionedId:"state_of_art/paper2",id:"state_of_art/paper2",title:"Validation and Benchmarking of CNFs in OSM for pure Cloud Native applications in 5G and beyond",description:"Adri\xe1n Pino, Pouria Khodashenas, Xavier Hesselbach, Estefan\xeda Coronado & Shuaib Siddiqui",source:"@site/references/state_of_art/paper2.md",sourceDirName:"state_of_art",slug:"/state_of_art/paper2",permalink:"/website/references/state_of_art/paper2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"A roadside and cloud-based vehicular communications framework for the provision of C-ITS services",permalink:"/website/references/state_of_art/paper1"},next:{title:"Kube5G: A Cloud-Native 5G Service Platform",permalink:"/website/references/state_of_art/paper3"}},c={},l=[{value:"Adri\xe1n Pino, Pouria Khodashenas, Xavier Hesselbach, Estefan\xeda Coronado &amp; Shuaib Siddiqui",id:"adri\xe1n-pino-pouria-khodashenas-xavier-hesselbach-estefan\xeda-coronado--shuaib-siddiqui",level:3},{value:"Abstract",id:"abstract",level:2},{value:"Full Report",id:"full-report",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validation-and-benchmarking-of-cnfs-in-osm-for-pure-cloud-native-applications-in-5g-and-beyond"},"Validation and Benchmarking of CNFs in OSM for pure Cloud Native applications in 5G and beyond"),(0,n.kt)("h3",{id:"adri\xe1n-pino-pouria-khodashenas-xavier-hesselbach-estefan\xeda-coronado--shuaib-siddiqui"},"Adri\xe1n Pino, Pouria Khodashenas, Xavier Hesselbach, Estefan\xeda Coronado & Shuaib Siddiqui"),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"Cloud Native (CN) in 5G systems has been identified as a pivotal candidate for operational and capital expenditure savings as well as for improvements in system agility and services role-out. CN telco is a step forward with respect to Network Function Virtualisation (NFV) aiming at embracing a microservice-based architecture. With this in mind, the European Telecommunications Standards Institute (ETSI) has evolved the ETSI NFV reference architecture to adapt to CN and fill the gap with the NFV framework, including containers and ZeroTouch, among other capabilities. Open-source Management & Orchestration (MANO) initiatives, such as Open Source MANO (OSM), are promoting this adoption giving support to CN solutions based on containers. However, at this early stage deployments are currently non-standalone and embedded in VNF-based solutions such as OpenStack. In this context, this paper presents a proof of concept of a full container technology deployment -via Kubernetes- in a NFV architecture. First, a full CN NFV environment is set with the help of OSM MANO, for which we describe the implementation to enable native kubernetes-based Container Network Functions (CNFs) and analyse their performance, limits, advantages and drawbacks. Finally, our solution for CNFs is benchmarked against a typical OSMOpenStack setup where VNFs are deployed. The results obtained in this work can help to further encourage users and operators to use CNFs and get the most out of containerisation in NFV."),(0,n.kt)("h2",{id:"full-report"},"Full Report"),(0,n.kt)("p",null,"Read the complete file, ",(0,n.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/9522356"},"here"),"."))}u.isMDXComponent=!0}}]);