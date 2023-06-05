"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(3117),o=(n(7294),n(3905));const i={sidebar_position:2},r="Architecture",s={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Components",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/website/docs/architecture",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Project Guidelines",permalink:"/website/docs/documentation"},next:{title:"Specification Report",permalink:"/website/docs/report"}},l={},c=[{value:"Components",id:"components",level:2},{value:"OBUs and RSUs",id:"obus-and-rsus",level:3},{value:"The Messaging Network",id:"the-messaging-network",level:3},{value:"Orchestrator",id:"orchestrator",level:3},{value:"MECs",id:"mecs",level:3},{value:"Manager",id:"manager",level:3},{value:"Grafana Dashboards",id:"grafana-dashboards",level:3},{value:"Technologies",id:"technologies",level:2},{value:"Docker",id:"docker",level:3},{value:"Mosquitto",id:"mosquitto",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Helm",id:"helm",level:3},{value:"Open Source MANO",id:"open-source-mano",level:3},{value:"Grafana",id:"grafana",level:3},{value:"FastAPI",id:"fastapi",level:3}],h={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("p",null,"Our architecture has 6 main components, as shown in Figure 7: the VCUs (both the OBUs and RSUs), the message brokers, the orchestrator, the MECs, the manager and the Grafana dashboards.  "),(0,o.kt)("h3",{id:"obus-and-rsus"},"OBUs and RSUs"),(0,o.kt)("p",null,"The OBUs and RSUs are the physical components that we are creating a DT for. They generate data continuously and publish it to a network of message brokers. "),(0,o.kt)("p",null,"For each of these objects, we instantiate its corresponding digital twin, which gathers all the information regarding its object and forwards it to our user-interface. "),(0,o.kt)("h3",{id:"the-messaging-network"},"The Messaging Network"),(0,o.kt)("p",null,"The messages in the network are organized by topics, relating both to the sender\u2019s identity and geographic location, and each DT fetches their respective data from them. This includes both data related to its physical counterpart and the surrounding stations to enable cooperation.  "),(0,o.kt)("h3",{id:"orchestrator"},"Orchestrator"),(0,o.kt)("p",null,"The orchestrator is the component that handles the lifecycle of the digital twins. It orchestrates their deployment and management and the resources needed to run these, like network connectivity and virtual machines.  "),(0,o.kt)("p",null,"This orchestrator would consist of a MANO software. MANO is an architectural framework that can coordinate the deployment of cloud-based applications."),(0,o.kt)("h3",{id:"mecs"},"MECs"),(0,o.kt)("p",null,"The MEC nodes are the hosts for the DTs. These computing nodes are located at the edge of the network, thus allowing for the deployment and execution of the service closer to the devices. "),(0,o.kt)("p",null,"Due to the nature of a CNF, all stages of the DT\u2019s lifecycle take place in these nodes, from instantiation to deletion. The orchestrator communicates directly with the MECs when it needs to create or delete a digital twin.  "),(0,o.kt)("h3",{id:"manager"},"Manager"),(0,o.kt)("p",null,"The manager is our trigger event listener component. It orchestrates the migration process, is responsible for listening for migrating triggers and handling the subsequent migration logic, as well as supporting Grafana by providing some real-time data, such as the DT location in the system.  "),(0,o.kt)("p",null,"It is the manager who communicates directly with the Orchestrator and controls when a migration should occur or not. The trigger for a migration is based on the physical location of the OBU and it is automated. However, an API was implemented, that provides a collection of endpoints that allow us to execute operations, such as starting a migration process on a DT, but also provides relevant information to the Data Visualization Dashboard. "),(0,o.kt)("h3",{id:"grafana-dashboards"},"Grafana Dashboards"),(0,o.kt)("p",null,"Two data dashboards are deployed on the same machine that the manager is on. These consume data from the message network and display it in a user-friendly interface. "),(0,o.kt)("p",null,"Important to note a small but relevant component adjacent to this dashboard, which is the proxy, an intermediary in communications that transforms some of the values before sending them to the user-friendly-interface. "),(0,o.kt)("br",null),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://media.discordapp.net/attachments/1079089453198479370/1112856037612069016/general_architecture.drawio.png",style:{maxWidth:"80%"}}),(0,o.kt)("p",null,"Image 1 - Component-Based Architecture")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"technologies"},"Technologies"),(0,o.kt)("p",null,"In this section, we describe the purposes and the reasons behind the choices of the technologies used to develop this project. Besides that, there is a brief preview of the advantages of using such technologies.  "),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"In the beginning of this project, we were provided with a Docker image which contained the code, dependencies and configuration of a digital twin application. "),(0,o.kt)("h3",{id:"mosquitto"},"Mosquitto"),(0,o.kt)("p",null,"This digital twin was consuming from a topic of a message broker that was set up using Mosquitto, an open-source message broker, and was consuming the messages the OBU was publishing on said topic. "),(0,o.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"One of the goals of the project is to offer digital twins through CNFs. This CNF would be instantiated in a MEC. As mentioned in the architecture section, we did not use real MEC and instead simulated its existence with two Kubernetes clusters, each in separate machines. The DTs will be deployed in these. However, we cannot just deploy a Docker image in a Kubernetes cluster. We had to create a Kubernetes application which contained not only our digital twin docker image, but also all the components necessary to integrate it in a Kubernetes cluster environment. "),(0,o.kt)("h3",{id:"helm"},"Helm"),(0,o.kt)("p",null,"To do this we used Helm, which is a package manager for Kubernetes applications. Helm allows us to define our Kubernetes application in a Helm Chart. This Helm Chart contains the files which define the structure, configuration and deployment of our Kubernetes application and it is hand and since OSM can handle Helm Charts, we encapsulated our Digital Twins Kubernetes application in a Helm Chart, and we provided it to OSM so that it can manage the application deployments in the different clusters. With this process completed, we were able to launch our CNF.  "),(0,o.kt)("h3",{id:"open-source-mano"},"Open Source MANO"),(0,o.kt)("p",null,"It is important to highlight that in our solution, the number of digital twins deployed in a cluster is subject to change, according to real-world changes. Not only that, but our solution must also handle the creation and deployment of a digital twin at any given time without any negative impact and this process needs to be automated and not need any human intervention. For this to happen we need our orchestrator. "),(0,o.kt)("p",null,"With that being said, we chose Open-Source MANO as our orchestrator, given that it can manage the different Kubernetes applications inside each cluster. For this to occur, we describe how our Kubernetes application should look like to OSM to allow it to orchestrate and manage it properly.  "),(0,o.kt)("h3",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,"Now that our solution supports the migration of the Digital Twins among clusters, we still need an interface that allows the user to see not only the Digital Twin information, but also the migration process happening. So, we deployed a message broker, also using Mosquitto, and made all Digital Twins publish their messages to a topic in this broker. This broker was deployed in the same virtual machine where a container running a Grafana Instance was deployed and displaying the different Digital Twins information. "),(0,o.kt)("h3",{id:"fastapi"},"FastAPI"),(0,o.kt)("p",null,"Our solution must also handle the migration of a Digital Twin from one cluster to another. This process is accomplished by terminating a Kubernetes application from one cluster and creating it in another cluster. However, it is important to note that this implementation is only possible because our system is stateless, meaning its operations do not rely on any stored data and different applications can be created and terminated without any negative impact in the overall system. "),(0,o.kt)("p",null,"So, to handle the migration we had to implement a component that integrated an API which would then be used to communicate to OSM when a migration needed to occur. To implement this API we used FastAPI, a python framework that allows us to create APIs in a very quick and simple manner. This way, we can create an endpoint we can call that handles the logic adjacent to the migration process. "),(0,o.kt)("br",null),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://media.discordapp.net/attachments/1079089453198479370/1112845350919733299/techs_architecture.png?width=1080&height=516",style:{maxWidth:"80%"}}),(0,o.kt)("p",null,"Image 2 - High-Level System Architecture")),(0,o.kt)("br",null),(0,o.kt)("p",null,"For more information, ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/report"},"read")," the project specification report."))}u.isMDXComponent=!0}}]);