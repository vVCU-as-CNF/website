---
title: "Specification Report"
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# A Virtual Vehicular Communications Unit as a Cloud-Native Network Function 

<br></br>

**Authors**&nbsp;&nbsp;&nbsp;&nbsp;102491&nbsp;&nbsp;&nbsp;&nbsp;Ana Raquel Fonseca Paradinha 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;103234&nbsp;&nbsp;&nbsp;&nbsp;Paulo Jorge Nevado Pinto 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;103341&nbsp;&nbsp;&nbsp;&nbsp;João Miguel Almeida Matos 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;103470&nbsp;&nbsp;&nbsp;&nbsp;Filipe Maia Antão 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;104142&nbsp;&nbsp;&nbsp;&nbsp;Tiago Gomes Carvalho 

**Date**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;May 2023 

**Course**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Projeto em Informática - Licenciatura em Engenharia Informática* 

<br></br>

---

## Acknowledgments

To begin with, we would like to thank our advisers, Rafael Direito and João Almeida, for their support and availability to help us continuously throughout the whole project. Furthermore, we would like to thank David Rocha for all the help he provided during both inception and development, regarding the interactions with the new technologies used. Lastly, we would like to thank Daniel Gomes, for sharing his never-ending OSM expertise with us.

<br></br>

---

**Keywords** Cloud-Native Network Function, Digital Twin, Multi-Access Edge Computing, OSM, Vehicular Communications Units, 5G  

---

<br></br>

### **Abstract**

This project focuses on improving Cooperative, Connected, and Automated Mobility (CCAM) applications by utilizing Multi-Access Edge Computing (MEC) nodes and Digital Twins (DT). The current CCAM system faces some limitations, including latency, stability, package loss, and computation issues. MEC nodes, deployed at the network edge, offer low-latency processing and storage capabilities, reducing communication delays and enabling real-time decision-making. Furthermore, Digital Twins create virtual representations of physical entities, such as vehicles, replicating their characteristics and behaviour for monitoring and decision-making purposes.  

This way, we developed a virtual environment for CCAM applications, incorporating Digital Twins of 5G-enabled Vehicular Communications Units (VCUs), which can migrate between different 5G network infrastructures. This migration can even further decrease the communication and subsequent manoeuvre coordination time the use of Digital Twins already reduces. By leveraging Cloud Native and Network Function Virtualization concepts, the project facilitates the development and testing of future CCAM applications. Overall, this work contributes to the enhancement and efficiency of CCAM while taking advantage of the use of Digital Twins and MEC technology.

<br></br>

---

## Glossary

<table>
  <tr>
    <th>5G</th>
    <td>5th Generation Mobile sNetwork </td>
    <th>MEC</th>
    <td>Multi-Access Edge Computing</td>
  </tr>
  <tr>
    <th>5GASP</th>
    <td>5G Application & Services Experimentation and Certification Platform</td>
    <th>MQTT</th>
    <td>Message Queuing Telemetry Transport</td>
  </tr>
  <tr>
    <th>API</th>
    <td>Application Programming Interface </td>
    <th>NFV</th>
    <td>Network Function Virtualization </td>
  </tr>
  <tr>
    <th>AVN</th>
    <td>Autonomous Vehicle Network</td>
    <th>OBU</th>
    <td>On-Board Unit</td>
  </tr>
  <tr>
    <th>CCAM</th>
    <td>Cooperative, Connected and Automated Mobility </td>
    <th>OSM</th>
    <td>Open-Source MANO</td>
  </tr>
  <tr>
    <th>CN</th>
    <td>Cloud Native</td>
    <th>QoS</th>
    <td>Quality of Service</td>
  </tr>
  <tr>
    <th>CNF</th>
    <td>Cloud-native Network Function </td>
    <th>RSU</th>
    <td>Road-Side Unit </td>
  </tr>
  <tr>
    <th>C-ITS</th>
    <td>Cooperative ITS</td>
    <th>VCU</th>
    <td>Vehicular Communications Unit </td>
  </tr>
  <tr>
    <th>DT</th>
    <td>Digital Twin</td>
    <th>VIM</th>
    <td>Virtual Infrastructure Manager</td>
  </tr>
  <tr>
    <th>ETSI</th>
    <td>European Telecommunications Standards Institute</td>
    <th>VM</th>
    <td>Virtual Machine</td>
  </tr>
  <tr>
    <th>ITS</th>
    <td>Intelligent Transportation System</td>
    <th>VNF</th>
    <td>Virtual Network Function</td>
  </tr>
  <tr>
    <th>K8s</th>
    <td>Kubernetes</td>
    <th>vOBU</th>
    <td>Virtual OBU</td>
  </tr>
  <tr>
    <th>KNF</th>
    <td>Kubernetes-based VNF</td>
    <th>vRSU</th>
    <td>Virtual RSU</td>
  </tr>
  <tr>
    <th>MANO</th>
    <td>Management and Orchestration</td>
    <th>vVCU</th>
    <td>Virtual VCU</td>
  </tr>
</table>

<br></br>

---

## Introduction

Cooperative, Connected, and Automated Mobility (CCAM) refers to a system where vehicles and infrastructure work together to improve road safety, traffic efficiency, and driving comfort by allowing coordination manoeuvre and a more robust situational awareness through the share of sensorial information and improved communication. The goal of our project is to enhance these system’s performance, particularly in reducing communication and subsequent manoeuvre coordination times. 

Nowadays, the concept of CCAM is based on the communication between vehicles equipped with On-Board Units (OBUs), which allow the exchange of vehicular information. However, this type of contact faces some limitations, namely at the level of latency values and computational capacity. 

In the context of CCAM, the usage of Multi-Access Edge Computing (MEC) nodes and the concept of Digital Twins (DT) can significantly enhance the capabilities and efficiency of CCAM applications. 

The first ones refer to a decentralized computing infrastructure deployed at the edge of the network, closer to the CCAM devices and vehicles. These nodes enable low-latency, high-bandwidth processing, and storage capabilities, facilitating real-time data analysis and decision-making at the edge of the network. By bringing computing resources closer to the CCAM devices, MEC nodes reduce communication delays and enable faster response times, which are crucial for time sensitive CCAM applications. 

The Digital Twin paradigm involves creating virtual representations of physical entities, such as vehicles. These DTs replicate the characteristics, behaviour, and real-time status of their physical counterparts. They serve as a digital mirror that can be used for monitoring, simulation, and decision-making purposes.  

Integrating mechanisms that can orchestrate the deployment and manage the lifecycle of these edge network components further enhances the system’s efficiency and reliability, facilitating the migration of DTs between MEC nodes. 

This enables the dynamic movement or replication of these virtual representations of the physical units, offering resource optimization, load balancing, scalability as the CCAM ecosystem grows, and geographical distribution benefits. 

This work is under the authority of the Telecommunications Institute of Aveiro and more specifically associated with the Route 25 project, whose goal is to develop the cooperative mobility paradigm by supplying a communication and detection infrastructure to enable cooperative autonomous driving in diverse types of cities.

<br></br>

---

## State of the Art

Given the complexity and novelty of the concepts that this project relies on, we researched prior studies on these topics to ensure that we understood the paradigm associated with the work and that we were about to get into. The project brings together two different areas by aiming to enhance the current C-ITS ecosystem with the benefits of the CN paradigm, requiring us to be on top of both concepts to produce an effective solution.  

Since the goal of our solution is the improvement of CCAM applications, we had to first get a greater understanding of the field of transportation and mobility, and analyse the different advancements made and how they can contribute to our project.  

### ITS Paradigm

ITS refers to Intelligent Transportation Systems, which combine advanced technologies with transportation infrastructure to improve efficiency, safety, and sustainability. It includes elements like information and communication technologies, data analysis, intelligent traffic management, traveller information systems, vehicle-to-vehicle and vehicle-to-infrastructure communication, and a focus on safety, security, and environmental impact. ITS aims to enhance transportation systems through technology-driven solutions. 

The deployment of Cooperative Intelligent Transport Systems (C-ITS) relies on roadside units (RSUs) equipped with communication capabilities and sensors to enhance road safety and traffic efficiency. The roadside and cloud architecture proposed in ​(Emanuel Vieira, 2023)​ has been implemented, and it allows for the management of vehicle-to-everything (V2X) communication and efficient dissemination of C-ITS messages. It has been deployed on Portuguese motorways, demonstrating its effectiveness in monitoring road traffic and infrastructure. It offers visualization and event reporting features, making it adaptable to future communication technologies like Cellular-V2X or 5G RSUs. This state-of-the-art approach highlights the integration of advanced technologies to improve C-ITS and pave the way for further advancements in the field. 

By understanding the ITS paradigm, we can comprehend how CCAM applications and our project can be seen as an extension of ITS, improving communications between its different participants. To enable this, we will employ Digital Twins. Again, with this concept being a novelty to us, we had to research it to understand its utility and how its implementation could benefit our project. 

### Digital Twins

Digital twins are virtual representations of physical objects or systems that enable real-time monitoring, analysis, and simulation. They are used in collaborative autonomous driving to facilitate decision-making and coordination among autonomous vehicles (AVs). The solution proposed in ​(Hui Y. , 2022)​ showcases a digital twin-enabled architecture and mechanisms like auction games and coalition games to optimize driving costs and determine group compositions. Simulation results show that the scheme achieves a Nash stable collaborative and distributed structure while minimizing autonomous driving costs for each AV, effectively creating driving groups where the AVs are mutually cooperating, and no AV can improve its situation by changing its strategy alone. 

A Digital Twin is a concept which consists of the replication of real-world entities into a digital space. It focuses on Pedestrians and Connected Vehicles (CVs) in Intelligent Transportation Systems (ITS). In ​(Wang, 2022)​, the proposed framework involves data transmission between the physical world (pedestrians and CVs) and the digital world (their digital twins). The study simulates collision warning systems under occlusion conditions, providing insights for future research and potential applications of the project in different scenarios. 

With all this in mind, it becomes easy to understand the value that these Digital Twins bring to our project, allowing us to reduce the complexity of the communication between participants and consequently improve coordination and computing of the manoeuvres. 

However, the viability of these entities depends on their efficient management and orchestration. This is where the concepts of Network Function Virtualization and Cloud Native come in, offering us the methods to accomplish this. 

### Network Function Virtualization

The recent advancements in Network Function Virtualization have been supporting the softwarization of infrastructure, empowering 5G networks due to its improvements in scalability, agility, and cost. By enabling key hardware components to be deployed as software, networks can rely on these virtualized components to handle the logic that used to be processed by physical devices. With this, we no longer need specialized machines to handle network functions, since these services and applications can now be instantiated as software on commodity hardware as needed.  

ETSI has published an NFV architectural framework that is subdivided into three main blocks ​(Pino, 2021): 

1. NFV Infrastructure (NFVI), managed by the Virtual Infrastructure Manager (VIM); 

2. NFV Management and Orchestration (MANO); 

3. The set of VNFs. 

### VNF deployment and migration

Virtual Network Functions are virtualized network services that run on virtual machines, allocating its resources. VNFs have a finite lifetime determined by the service it carries. During its lifecycle, it allocates the VM resources and once it is finished, the resources which were being used are released and the VNF is eliminated.  

However, optimal VNF deployment can be a complicated challenge. As pointed out by this study ​(Fu & Li, 2019)​, when the resource allocation for a VNF occurs, the number of resources allocated is based on the VNFs peak value. This can cause some problems regarding the physical machine resource usage, since most VNFs are not actually using all the resources provided for its peak value, leading to a waste of resources. 

Many studies have been made to contribute to this problem and find a solution. The one I mentioned before however, can be relevant to our project. It proposes the migration of a VNF, when its physical machine resources usage surpass a determined threshold, it migrates the VNF with the highest consumption of resources, leading to a release of resources in the overloaded machine. 

Not only that, but another study ​(Cho, Taheri, Zomaya, & Bouvry, 2017)​ also contributes to showcasing another VNF migration advantage, particularly when it comes to reduced latency. We found this relevant since it correlates directly with the problem of our project. The research was successful in showcasing the decrease in latency when migrating a VNF. 

So, after gathering all this information, it was easy to understand the beneficial impact migration can have in our solution.

### Cloud Native Paradigm 

Cloud Native comes into play by taking responsibility for the application’s deployment and whole lifecycle, improving system agility and services roll-out. Usually, these applications are decomposed into a set of microservices that can be developed and deployed independently, leveraging containerization to encapsulate the entire environment needed for these to run within the container, eliminating dependency issues and allowing portability. 

As the name indicates, CN refers to the building and deployment of applications that take full advantage of cloud computing capabilities - their whole lifecycle is meant to start and end within the cloud. Thus, CNFs, despite their numerous advantages in terms of lightness and portability, require an efficient orchestration system capable of orchestrating the deployment process and providing automated lifecycle management, while always taking into consideration 5G’s QoS ​(Khichane, 2022)​. 

MANO is the building block that takes care of these tasks within the NFV context. 

By integrating with Kubernetes and leveraging its features, administrators can benefit from a single management system that simplifies the deployment, scaling, and management of VNFs. The use of more readable and friendly descriptors further enhances the management speed and ease of use for administrators. 

Overall, MANO plays a crucial role in enabling the efficient management and orchestration of VNFs in a hybrid environment, bridging the gap between VMs and containers while ensuring the system remains scalable, flexible, and manageable for administrators ​(Lee & Kim, 2021)​. 

Taking all this into account, we can understand how CNFs can play a major role in our project, allowing the Digital Twins to be containerized and deployed in it, and providing us with the portability and scalability we need to implement the Digital Twins deployment and migration. 

So now the only aspect left to consider in our project is where this deployment and migration would be happening in the real world. We were introduced to MEC technology, which was also a new concept to us. We embarked on further research to get a greater understanding of this topic. 

### Multi-Access Edge Computing

The usage of MEC has several benefits in the implementation of CCAM applications. Firstly, it enables the processing and analysis of vehicle data at the network edge, reducing latency and improving real-time response. This enhances the overall performance by offloading computation tasks and reducing network congestion.  

The work developed in ​(Mikel Seron, 2023)​ incorporates a virtualization framework in the architecture that allows for dynamic pipeline instantiation based on consumer demand, ensuring optimal resource utilization and responsiveness. Overall, CCAM application and their associated systems can leverage MEC to enhance data processing, scalability, and data privacy, enabling effective data monetization in the automotive sector and helping us understand the benefits of the use of MEC technology.  

For these reasons, we decided to take advantage of MEC and their characteristics and resort to them for the deployment of our CNFs.  

After this final research we did, we felt ready to start implementing our solution, starting by identifying its different actors, gathering functional and non-functional requirements our solution must meet, and designing its architecture.

<br></br>

---

## Concept

### Actors

Taking into consideration the objectives and features of this project we identified two main actors: 

- Traffic Managers
- Drivers 

**Traffic Managers** 

Traffic Managers are the main actor and the primary reference for the features implemented in the project. They consist of a group of entities that execute operations based on the output provided by our solution. 

**Drivers**

Drivers represent the group of users who pilot the vehicles that incorporate the OBU which sends all the information regarding the vehicle. The input our system receives is directly influenced by the actions the driver executes with the vehicle.

### Use Cases

#### Real-Time Manoeuvre Coordination

The system can be used to manage and control traffic in real-time using CCAM services such as situational awareness, collective perception, and manoeuvre coordination. Traffic operators can use the system to monitor traffic flow and adjust traffic control measures as needed. 

Platooning (Figure 1), lane changing (Figure 2), lane merging (Figure 3), handling (Figure 4) an intersection and overtaking are very characteristic situations that describe this use case. All these scenarios require an exchange of messages between the vehicles involved, and message exchanges bring latency costs. By having the DTs negotiate each one’s ideal next sequence of actions instead of the physical units, we can avoid the inherent latencies of the cellular network and have these exchanges be made between a much smaller digital distance. After negotiations are completed, the manoeuvres the AVs should perform are then sent back to the physical units.

<div class="container" style={{display:"flex", flexWrap:"wrap", justifyContent:"center", textAlign:"center"}}>
    <div style={{width:"30%", margin:"5% 5%"}}>
        <img src="https://media.discordapp.net/attachments/945711148903333949/1115075372166434856/image.png?width=624&height=627" alt="Image 1" />
        <div class="subtitle">Figure 1 - Platooning</div>
    </div>
    <div style={{width:"30%", margin:"5% 5%"}}>
        <img src="https://media.discordapp.net/attachments/945711148903333949/1115075460003541036/image.png?width=802&height=627" alt="Image 1" />
        <div class="subtitle">Figure 2 - Lane Changing</div>
    </div>
    <div style={{width:"30%", margin:"5% 5%"}}>
        <img src="https://media.discordapp.net/attachments/945711148903333949/1115075582267510844/image.png?width=1440&height=500" alt="Image 1" />
        <div class="subtitle">Figure 3 - Lane Merging</div>
    </div>
    <div style={{width:"30%", margin:"5% 5%" }}>
        <img src="https://media.discordapp.net/attachments/945711148903333949/1115075772160409721/image.png?width=1440&height=500" alt="Image 1" />
        <div class="subtitle">Figure 4 - Handling</div>
    </div>
</div>

The communication between the vehicles relies on Maneuver Coordination Messages (MCM). MCMs are an essential component of a standard currently being developed by the ETSI. This standard aims to enhance the coordination and communication capabilities of various systems involved in manoeuvre planning and execution.  

By establishing a standardized framework for exchanging MCM, the ETSI standard enables interoperability and seamless coordination among various entities involved in manoeuvre planning and execution. This enhances safety, efficiency, and overall operational effectiveness in dynamic environments where coordinated actions are paramount.  

The flow of MCMs typically follows a predefined pattern that enables effective coordination among the participating entities. The process can be summarized as follows:

1. The entities involved establish the necessary communication links and exchange information to initiate the manoeuvre coordination process.  
2. The entity that desires to change trajectory and detect a collision with the remaining entities generates MCMs containing essential details about the planned manoeuvres. This includes information such as the type of manoeuvre, intended route, timing, and any specific requirements or constraints.  
3. The generated MCMs are transmitted between the participating entities using a standardized communication protocol.  
4. Upon receiving an MCM, the recipient entities interpret its relevance to their operations. They analyse the desired manoeuvre details, evaluate potential conflicts or overlaps, and determine how it affects their planned manoeuvres or actions.  
5. Based on the received MCMs and the local context, entities make informed decisions regarding their manoeuvres. They may update their routes or modify their timing to ensure proper coordination with other entities and avoid any potential conflicts.  
6. Entities provide feedback to the originator of the MCM, confirming their understanding and acceptance of the coordinated manoeuvres or proposing modifications if necessary.

The diagrams in Figures 5 and 6 demonstrate a possible scenario in which is present this flow of MCMs.

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115263649402073150/Untitled_1_1.png" style={{width:"40%"}}/>
  <p>Figure 5 - MCM negotiation example</p>
</div>

<br></br>

<br></br>

<br></br>

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115273889677852792/Untitled_4.png" style={{width:"80%"}}/>
  <p>Figure 6 - MCM negotiation example</p>
</div>

<br></br>
---

## Solution Specification

### Functional Requirements

**Creation of a Digital Twin** 

Our solution must handle the creation of a Digital Twin application corresponding to a virtual representation of an existing OBU.

**Cloud-Native Network Function** 	 

Our solution must provide a Cloud-Native Network Function that can use our digital twins and handle all communications to and from the digital twins. 

**Digital Twin Migration**		 

Our solution must handle the migration process of a Digital Twin from one MEC to another.

**Trigger a Migration based on location** 

Our solution must identify when a migration needs to occur. The migration of a Digital Twin should be triggered according to its respective OBU location.  

**Dashboard displaying system information** 

Our solution must provide a user-friendly graphical interface that displays information regarding the system’s components, as well as its performance.

**Dashboard showcasing Digital Twin migration** 

Our solution must also provide a user-friendly graphical interface that showcases specific Digital Twin information, as well as its migration process.

<br></br>

### Non-functional requirements

**Performance**		 

The system should provide fast and responsive CCAM services to support real-time decision-making and control. 

**Scalability**		 

The system should be able to support many vVCUs and CNFs, as well as handle traffic from multiple users.

**Reliability**		 

The system should be reliable and available, with minimal downtime or disruptions to CCAM services.

**Security**		 

The system should be secure and protect sensitive data transmitted between vVCUs and CNFs.

**Usability**		 

The system should be easy to use and provide a user-friendly dashboard that displays the information being transmitted to the vVCU.

**Portability**		 

The system should be portable and able to migrate CCAM services between different 5G network infrastructures belonging to different Mobile Network Operators. 

**Maintainability** 

The system should be easy to maintain and update, with the ability to fix bugs and add new features to the vVCU and CNF.

<br></br>

### Architecture

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115264623537565697/general_architecture.drawio.png" style={{width:"80%"}}/>
  <p>Figure 7 - High-Level Architecture</p>
</div>

Our architecture has 6 main components, as shown in Figure 7: the VCUs (both the OBUs and RSUs), the message brokers, the orchestrator, the MECs, the manager and the Grafana dashboards.

**OBUs and RSUs** 

The OBUs and RSUs are the physical components that we are creating a DT for. They generate data continuously and publish it to a network of message brokers. 

For each of these objects, we instantiate its corresponding digital twin, which gathers all the information regarding its object and forwards it to our user-interface.

**Message brokers**

The messages in the network are organized by topics, relating both to the sender’s identity and geographic location, and each DT fetches their respective data from them. This includes both data related to its physical counterpart and the surrounding stations to enable cooperation.

**Orchestrator** 

The orchestrator is the component that handles the lifecycle of the digital twins. It orchestrates their deployment and management and the resources needed to run these, like network connectivity and virtual machines.  

This orchestrator would consist of a MANO software. MANO is an architectural framework that can coordinate the deployment of cloud-based applications.

**MECs** 

The MEC nodes are the hosts for the DTs. These computing nodes are located at the edge of the network, thus allowing for the deployment and execution of the service closer to the devices. 

Due to the nature of a CNF, all stages of the DT’s lifecycle take place in these nodes, from instantiation to deletion. The orchestrator communicates directly with the MECs when it needs to create or delete a digital twin.

**Manager** 

The manager is our trigger event listener component. It orchestrates the migration process, is responsible for listening for migrating triggers and handling the subsequent migration logic, as well as supporting Grafana by providing some real-time data, such as the DT location in the system.  

It is the manager who communicates directly with the Orchestrator and controls when a migration should occur or not. The trigger for a migration is based on the physical location of the OBU and it is automated. However, an API was implemented, that provides a collection of endpoints that allow us to execute operations, such as starting a migration process on a DT, but also provides relevant information to the Data Visualization Dashboard.

**Dashboards** 

Two data dashboards are deployed on the same machine that the manager is on. These consume data from the message network and display it in a user-friendly interface. 

Important to note a small but relevant component adjacent to this dashboard, which is the proxy, an intermediary in communications that transforms some of the values before sending them to the user-friendly-interface.

<br></br>

### Technologies

In this section, we describe the purposes and the reasons behind the choices of the technologies used to develop this project. Besides that, there is a brief preview of the advantages of using such technologies.

**Docker** 

In the beginning of this project, we were provided with a Docker image which contained the code, dependencies and configuration of a digital twin application.

**Mosquitto**

This digital twin was consuming from a topic of a message broker that was set up using Mosquitto, an open-source message broker, and was consuming the messages the OBU was publishing on said topic. 

**Kubernetes** 

One of the goals of the project is to offer digital twins through CNFs. This CNF would be instantiated in a MEC. As mentioned in the architecture section, we did not use real MEC and instead simulated its existence with two Kubernetes clusters, each in separate machines. The DTs will be deployed in these. However, we cannot just deploy a Docker image in a Kubernetes cluster. We had to create a Kubernetes application which contained not only our digital twin docker image, but also all the components necessary to integrate it in a Kubernetes cluster environment.

**Open-Source MANO** 

It is important to highlight that in our solution, the number of digital twins deployed in a cluster is subject to change, according to real-world changes. Not only that, but our solution must also handle the creation and deployment of a digital twin at any given time without any negative impact and this process needs to be automated and not need any human intervention. For this to happen we need our orchestrator. 

With that being said, we chose Open-Source MANO as our orchestrator, given that it can manage the different Kubernetes applications inside each cluster. For this to occur, we describe how our Kubernetes application should look like to OSM to allow it to orchestrate and manage it properly.

**Helm** 

To do this we used Helm, which is a package manager for Kubernetes applications. Helm allows us to define our Kubernetes application in a Helm Chart. This Helm Chart contains the files which define the structure, configuration and deployment of our Kubernetes application and it is hand and since OSM can handle Helm Charts, we encapsulated our Digital Twins Kubernetes application in a Helm Chart, and we provided it to OSM so that it can manage the application deployments in the different clusters. With this process completed, we were able to launch our CNF.

**FastAPI** 

Our solution must also handle the migration of a Digital Twin from one cluster to another. This process is accomplished by terminating a Kubernetes application from one cluster and creating it in another cluster. However, it is important to note that this implementation is only possible because our system is stateless, meaning its operations do not rely on any stored data and different applications can be created and terminated without any negative impact in the overall system. 

So, to handle the migration we had to implement a component that integrated an API which would then be used to communicate to OSM when a migration needed to occur. To implement this API we used FastAPI, a python framework that allows us to create APIs in a very quick and simple manner. This way, we can create an endpoint we can call that handles the logic adjacent to the migration process.

**Grafana** 

Now that our solution supports the migration of the Digital Twins among clusters, we still need an interface that allows the user to see not only the Digital Twin information, but also the migration process happening. So, we deployed a message broker, also using Mosquitto, and made all Digital Twins publish their messages to a topic in this broker. This broker was deployed in the same virtual machine where a container running a Grafana Instance was deployed and displaying the different Digital Twins information.

<br></br>

The process described in this section can be visualized in the architecture diagram illustrated in Figure 8. 

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115264623189434468/techs_architecture.png" style={{width:"80%"}}/>
  <p>Figure 8 - System Architecture</p>
</div>

<br></br>

---

## Solution Implementation

### Exploration and Deployment of vVCU Image

The DT Docker image used was provided by our project advisors and had already been developed in the context of the parent projects. We explored, tested, and tried to adapt it given the context of our problem.

<br></br>

### Deployment of vVCU Using Kubernetes and Helm Chart

When analysing our problem, we tried to produce a Kubernetes-based solution, taking advantage of its variety of objects. 

First, we needed to encapsulate our container with the Docker image. For that, we took advantage of Kubernetes pods. Pods are the smallest units of computing that you can create and manage in Kubernetes. A Pod consists of a single or a group of containers, as well as the specification of its resources, environment variables and ports, among others. In our solution, the digital twins’ docker image is packaged and deployed in a container that is encapsulated in a Pod. Besides that, we also defined an extra mechanism, a Readiness Probe. A Readiness Probe runs a command inside our container to ensure that the docker image is ready and running. This will be important in the context of our problem when it comes to the migration process.  

However, even though Pods are useful in Kubernetes they have one major drawback. They have a finite time of living. Therefore, we cannot deploy a Pod by itself. If it dies for any reason, and eventually one will, we lose the digital twin. This is where Deployments come in. 

A Deployment is a Kubernetes Object that attempts to solve this issue. They are defined with a desired state that the cluster must obey, such as a specific number of pods running. If it detects that the state of the cluster is not the defined one, it automatically tries to fix it, whether by removing or adding objects to match the desired state. In our solution, we defined a Deployment in which the desired state corresponds to our solution goal. The desired state of our solution, is one single pod per digital twin, running the container with its corresponding image.  

Next, we need to establish the connection from the outside to the digital twin. As explained before, Pods have a finite lifetime, and they can terminate at any point. It is not a clever idea to communicate directly with the pod. For that, we will use a service. A Service is a Kubernetes object that allows the exposure of a network application to external sources, allowing for the pod communication with other applications outside and inside the cluster. In our solution, we implemented a Service as an intermediary between the outside and the pod, exposing a port for components external to the cluster to communicate with the digital twin.   

It is also important to note that we also defined a Kubernetes Secret to manage the permissions to access the repository where we have our docker image. A Kubernetes Secret is an object that usually contains sensitive data. In our solution, we use one with our docker credentials.  

With this logic in mind, we implemented our Digital Twin Kubernetes application. After that, we had to encapsulate our application inside a Helm Chart to proceed to the orchestration phase of our project. All our Kubernetes application and components code is stored in the templates folder, and values such as the image URL, our namespace and other relevant information are saved in the values.yaml file.  

Below is the yaml file that describes the Kubernetes Deployment within our Helm Chart.

```yaml title="Deployment"
apiVersion: apps/v1 
kind: Deployment 
metadata: 
  name: {{ include "eechart.fullname" . }} 
spec: 
  replicas: 1 
  selector: 
    matchLabels: 
      app: {{ .Values.appName }} 
  template: 
    metadata: 
      labels: 
        app: {{ .Values.appName }} 
    spec: 
      containers: 
      - name: mycontainer 
        image: "{{ .Values.image.name }}:{{ .Values.image.tag }}" 
        imagePullPolicy: Never 
        resources: 
          limits: 
            memory: "128Mi" 
            cpu: "500m" 
        ports: 
        - containerPort: 3306 
        env: 
        - name: IN_BROKER_HOST 
          value: {{ .Values.broker }} 
        readinessProbe: 
          exec: 
            command: 
            - netstat 
            - -na 
            - | 
            - grep 
            - "3306" 
          initialDelaySeconds: 1 
          periodSeconds: 1 
```

<br></br>

Below is the yaml file that describes the Kubernetes Service encapsulated in the Helm Chart.

```yaml title="Service"
apiVersion: v1 
kind: Service 
metadata: 
  name: {{ include "eechart.fullname" . }} 
  namespace: {{ .Values.namespace }} 
spec: 
  selector: 
    app: {{ .Values.appName }} 
  ports: 
  - port: 80 
    targetPort: 3306 
  type: NodePort 
```

<br></br>

### Encapsulation of Helm Chart into a Cloud-Native Network Function

Before we describe our solution, it is important to do a brief overview of MANO. There are three managers in MANO: 

- Virtualized Infrastructure Manager (VIM)
- Virtualized Network Function Manager (VNFM)
- NFV Management and Orchestration (NFVO)

<br></br>

#### VIM 

VIMs are responsible for managing the virtualized infrastructure, keeping track of the different resources that are allocated for the VNFs. For our solution, two VIMs were created to manage the physical resources necessary to deploy our Kubernetes clusters. Figure 9 shows OSM’s dashboard, where we can see the two VIM Accounts we used for this project, each managing its own Kubernetes cluster.

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115266310155288636/Screenshot_from_2023-06-05_14-10-42.png"/>
  <p>Figure 9 - OSM VIM interface</p>
</div>

<br></br>

### VNFs  

VNFMs are responsible for carrying out operations on the VNF such as its instantiation, scaling, updating or termination. 

A VNF is a virtualized implementation of a network function and usually runs on Virtual Machines overseen by a VNFM. Common examples of VNFs are virtualized routers, firewalls, etc... In our solution, we package and instantiate a VNF using OSM. To do that, we define a descriptor, a YAML file that contains all the characteristics, requirements, and behaviour of a VNF. Our VNF descriptor, besides all the information regarding the VNF identification and its connections, contains information regarding its deployment unit (kdu). We provide our Helm Chart to the VNF in the kdu field, meaning our VNF will consist of our Digital Twin Kubernetes application encapsulated in the Helm Chart. 

Below is the descriptor for the VNF we used:

```yaml title="VNF Descriptor"
vnfd: 
  id: vvcu-as-acnf 
  description: K8s container deployment of OSM 
  product-name: vvcu-as-cnf 
  provider: ATNOG 
  version: '1.0' 
  mgmt-cp: mgmt-ext 
  df: 
  - id: default-df 
  ext-cpd: 
  - id: mgmt-ext 
    k8s-cluster-net: mgmtnet 
  k8s-cluster: 
    nets: 
    - id: mgmtnet 
  kdu: 
  - name: vvcu-as-cnf 
    helm-chart: vvcu-as-cnf.tar.gz 
    helm-version: v3 
```

<br></br>

However, one cannot talk about VNFs without talking about Network Services, since a VNF is a component of a NS. Network Services provide all the functionalities, capabilities, and protocols to enable communication with our application. They are also packaged and instantiated using OSM, the same way we do with VNFs. Therefore, our NS descriptor file contains the information regarding the VNF such as its id and connection points. 

Below is the descriptor for the Network Service we used:

```yaml title="NS Descriptor"
nsd: 
  nsd: 
  - description: NS consisting of a single KNF connected to mgmt network 
    designer: OSM 
    df: 
    - id: default-df 
      vnf-profile: 
      - id: vvcu-as-acnf 
        virtual-link-connectivity: 
        - constituent-cpd-id: 
          - constituent-base-element-id: vvcu-as-acnf 
            constituent-cpd-id: mgmt-ext 
          virtual-link-profile-id: mgmtnet 
        vnfd-id: vvcu-as-acnf 
    id: vvcu-as-acnf_ns 
    name: vvcu-as-acnf_ns 
    version: 1.0 
    virtual-link-desc: 
    - id: mgmtnet 
      mgmt-network: true 
    vnfd-id: 
    - vvcu-as-acnf 
```

<br></br>

#### NFVO 

NFV Orchestrators have two major functionalities: Service Orchestration and Resource Orchestration. Service Orchestration refers to the management of the Network Services and its VNFs. On the other hand, Resource Orchestration refers to the management of the VIM resources between the different Network Functions. 

Our Orchestrator will deploy our Digital Twins Kubernetes applications in the clusters according to the instructions it receives. It encapsulates each digital twin in a Network Service to make sure communication with our Kubernetes application is possible. Figure 12 displays OSM’s dashboard, the MANO we used.

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115267051137798194/Screenshot_from_2023-06-05_14-13-43.png"/>
  <p>Figure 10 - OSM dashboard</p>
</div>

<br></br>

### Migration of the vVCU Between Infrastructures

Encapsulating the logic behind the lifecycle of the vVCU into a CNF allows us to take advantage of the ease of the deployment process to easily migrate the virtualized vehicle between distinct infrastructures. Given the nature of a CNF, we can easily deploy the DT without worrying about the underlying infrastructure, providing portability and reliability. 

The migration process is handled by the manager, which, through its interaction with OSM’s Northbound API, provided its own endpoints to execute routines to manage and migrate NS instances. 

Due to its nature, a CNF allows us to migrate the DT between even MEC from different telco operators. However, as we mentioned before, in the context of the project, we did not have access to two different MEC nodes we could use to test and experiment with our solution. Thus, to emulate the two distinct infrastructures the DT would be deployed on, and migrated to and from, we used two Kubernetes Clusters, managed by two different VIM Accounts. 

<br></br>

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115267370836045924/Screenshot_from_2023-06-05_14-15-04.png" style={{width:"80%"}}/>
  <p>Figure 11 - OSM’s north-bound API Swagger documentation</p>
</div>

<br></br>

Currently, OSM has no native support to migrate an NS between hosts. However, in its essence, the migration process can be split into three phases:  

1. Create a new DT in the new host  
2. Ensure the new DT is operational  
3. Delete the old DT in the old host  

The manager makes use of OSM’s north-bound API (partially displayed in Figure 11) to make it deploy a new DT in the new host. After this, we can only delete the old one when the new one is fully operational. The migration process should not result in a period where the VCU has nowhere to send its messages; a DT should always be available, which means we can only dispose of the old one when it is certain the new one is functioning. 

To run this check, the manager makes use of the Kubernetes API to check the pod’s state in the cluster and verify whether it has passed its readiness probe, implemented inside the Helm Chart. If it has, it means the DT is ready and operational, allowing us to start the deletion process of the old vVCU, which is once again handled by the manager by means of OSM’s north-bound API. 

This migration process is encapsulated within an endpoint of the manager’s API, allowing us to call for a migration process to be started. The manager’s endpoints are listed in Figure 12.

<br></br>

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115267732200493066/Screenshot_from_2023-06-05_14-16-25.png" style={{width:"80%"}}/>
  <p>Figure 12 - Manager’s API Swagger documentation</p>
</div>

<br></br>

As proof of concept, the manager keeps track of an OBU’s location and migrates it from one cluster to another when it passes through an arbitrary geographic location. 

### System Data Visualization

To represent this project’s data, as mentioned above, we make use of Grafana dashboards and panels, as well as its data sources’ plugins. There are three phases to this process: the data collection, processing, and representation in Grafana. 

This project’s visualization is also designed to be used as a support mechanism to developers, so those interacting with our solution can easily visualize the data and the information regarding the Digital Twins and more. 

#### Data Collection 

The data represented in the Grafana dashboards are collected from one main source, the MQTT Message Broker. To interact with such a broker, we use Grafana’s MQTT Plugin.  

The MQTT plugin in Grafana enables the seamless integration of MQTT-based data sources into the panels. MQTT is a lightweight messaging protocol designed for efficient communication between devices and applications. By configuring MQTT data sources in Grafana, we can establish a connection to our message broker and define the desired topics to receive messages in real-time.  

The data is collected in a JSON-based format, which allows flexible and extensive data structures, that can easily process.

#### Data Processing 

Data processing takes place both inside and outside the Grafana panels. To avoid unnecessary information, reduce the amount of data being processed by the Grafana dashboards and do some statistics with the data collected, we first process some of the data outside the Grafana dashboard. 

To do so, we implemented a proxy component using Python. The proxy allows for real-time data conversion and processing before it reaches Grafana. It can normalize data formats, apply calculations, perform aggregations, filter, or enrich data. 

The proxy is deployed alongside Grafana and connects directly to the MQTT broker and the manager’s API, working as the element that captures and converts some selected data and provides the processed data required in Grafana’s panels. 

A practical case of the use of the proxy is the values of OBU's average speed presented in the main dashboard. We obtain those average values by aggregating the speed values that are spread among the JSON data collected. 

The remaining data transformations take place inside Grafana’s panels and dashboards. We use Grafana’s basic transformations to, for example, extract the value of a JSON field or iterate a list of values, which are more specific and would require more topics in the MQTT broker.

#### Data Visualization 

Moving on to the actual representation, we have created two Grafana dashboards for two separate cases.  

The first dashboard, displayed in Figure 13, contains a general overview of the entire system, representing some information on the VCUs, the perceived objects detected by them and information about the network flow and signal quality. This dashboard is considered the main dashboard of our system and it is the primary view when users interact with it.

<br></br>

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115269495129378887/Screenshot_from_2023-06-05_14-23-26.png" style={{width:"80%"}}/>
  <p>Figure 13 - System Dashboard</p>
</div>

<br></br>

The other dashboard, showcased in Figure 14, is focused on providing detailed information on the vVCUs (DTs). It contains panels displaying information regarding the selected DT by the user. It is possible to input the DT’s identifier on the top of the dashboard and, once the input matches an available DT, the dashboard will obtain data corresponding to the twin. In this dashboard is also possible to visualize the status of the DT, where is possible to verify if it is migrating or stable. The dashboard also keeps track of the migrations the twin has been through. 

<br></br>

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115269020527104051/image.png" style={{width:"80%"}}/>
  <p>Figure 14 - Migration Dashboard</p>
</div>

<br></br>

---

## Solution Testing

To benchmark the produced solution and prove our concept, we conducted some tests to analyse aspects such as latencies, deployment, and migration times. 

### Testing environment

Our Kubernetes clusters are deployed in a VM with Ubuntu installed. These Ubuntu images were previously deployed in a Proxmox Cluster. The VMs have 2 vCPUs and the Proxmox Cluster has Network Interface Cards of 10 Gb/s, meaning our VMs have a maximum transfer rate of 10 Gigabits per second. 

We executed two tests and reached some conclusions regarding two aspects of our solution: Digital Twin communication time and Digital Twin migration time. 

The first test was done to compare communication times between two Digital Twins in two different scenarios: 

1. When two Digital Twins are deployed in the same cluster 
2. When two Digital Twins are deployed in different clusters 

By comparing these communication times, we attempt to reach some conclusions regarding the benefits of migration in our solution. 

We executed 10 pings from one Digital Twin to another in each scenario by running the command “ping -c endpoint_ip” with the endpoint_ip corresponding to the receiver DT IP address when testing the 1st scenario and the receiver DT internal IP address when testing the 2nd scenario. 

The second test was done to ensure that the migration is a viable option. We migrated a DT from one cluster to another and registered two times: the time until the DT is created in the destination cluster, as to assure service, which we refer to as time until ready, and the time it took to delete the original DT from the origin cluster, completing the migration process, which we refer to as time until done. 

We executed 22 migrations to reach our results. 

### Results Analysis

In our communication times test, we got the following results: 

1. **DTs in different clusters:** an average time of 0.387 milliseconds with a standard deviation of 0.055 milliseconds, maximum and minimum value of 0.458 and 0.280 milliseconds respectively.
2. **DTs in the same cluster:** an average time of 0.142 milliseconds with a standard deviation of 0.035 seconds, maximum and minimum value of 0.216 and 0.107 milliseconds respectively. 

Analysing the results, seen in Figure 15, we can see a significant difference between the average measured times in both scenarios, is highly benefited for being in the same machine since the latency’s values are lower. These results align with the results obtained from this study mentioned in the State-of-the-Art regarding the migration of VNFs and its impact in network latency [8].

<br></br>

<div style={{textAlign:"center"}}>
  <img src="https://media.discordapp.net/attachments/945711148903333949/1115270138925691080/image.png" style={{width:"60%"}}/>
  <p>Figure 15 - Ping round-trip times</p>
</div>

<br></br>

Regarding the migration times test we got the following results: 

1. **Time Until Ready:** an average time of 32.9 seconds with a standard deviation of 0.158 seconds, maximum and minimum value of 33.57 and 32.81 seconds respectively.
2. **Time Until Done:** an average time of 49.4 seconds with a standard deviation of 0.154 seconds, maximum and minimum value of 50.04 and 49.28 seconds respectively. 

While these results might seem a bit high at first, we need to take into consideration that the migration is a sequential process with various stages of deletion and creation of DT, operations which OSM takes some time to complete without causing any issues. Secondly, this value in the context of our problem is not that high considering in a real-world scenario, a trigger for migration will not happen frequently enough for a migration time of less than a minute to have a negative impact on the system. The standard deviation value also indicates that our migration is very consistent.

### Factors Affecting Latency in 5G connections 

Latency can be affected by a variety of reasons. In the following section, we identify and explain the ones that were the greater conditioners of the obtained results. 

#### Physical Distance 

The physical distance between the sender and receiver of data plays a significant role in latency. As data needs to travel across physical mediums such as cables or wireless connections, longer distances result in higher latency due to the time it takes for signals to propagate.

#### Network Infrastructure and Routing 

The quality and capacity of the network infrastructure can impact latency. Issues such as outdated equipment, poorly configured routers or switches, or bottlenecks in the network architecture can introduce additional delays. For example, if the switches in the university are limited to 1 Megabyte per second, even if our connection is better, the connection will never be better than that because our data needs to pass by that switch. 

The routing of data packets across networks can affect latency. Inefficient routing decisions or network congestion at specific routing points can introduce additional delays in the transmission of data.

#### Processing and End-to-End Delays 

The time taken for processing data at various points along the communication path can contribute to latency. This includes tasks such as data encoding, decoding, encryption, decryption, and any additional processing required by intermediate network devices or the receiving application. 

Latency can also be affected by delays introduced by the source and destination systems. This includes the time taken for data to be processed by the sender and the time required for the receiving system to process and respond to the data.

<br></br>

---

## Future Work

Despite us being happy and satisfied with our solution and results, we feel there were some aspects we could improve in our project but due to the lack of time that did not happen. The main ones are the implementation and use of OSM primitives and some improvements in the migration sequence.

### OSM Primitives 

Primitives are a set of actions that are exposed to the operator. They would be useful in our solution since we need to perform the health check in each DT to ensure it is running. The way we designed our solution can be considered a bit intrusive since the manager is communicating directly with the Kubernetes cluster.  

Using Primitives, we would be able to define a health check action and the manager would call it to the Orchestrator whenever needed, with it gathering the information in the corresponding Kubernetes cluster. This solution would be the ideal one, instead of the one we have implemented.

<br></br>

---

## Conclusion

Our solution highlights the advantages in using the Digital Twins and their migration in the context of CCAM application, reducing not only the communication time between the OBUs. This is confirmed based on the tests we executed, and the results shown in the section before. Not only that, but we can also safely say the time it takes complete the manoeuvre coordination process decreases as well, since communication times decreases. Thus, we have proved our solution facilitates real-time data exchange and decision-making. 

Moreover, this project has been a valuable learning experience for us, as we delved into various modern technologies, particularly Open-Source MANO, which posed challenges during the implementation process. Despite these difficulties, we persevered and developed a solution that not only met all the predetermined requirements but also achieved our set objectives in terms of digital twin orchestration and migration. 

In conclusion, we are proud of the outcomes achieved through this project. The successful demonstration of Digital Twins advantages, the effective implementation of the solution, and the expansion of our knowledge all contribute to the overall success and impact of our work. We believe that this project lays the foundation for further advancements in the field of digital twin technologies and their integration within the cooperative, connected, and automated mobility landscape.

<br></br>

---

### References

1. 
   Cho, D., Taheri, J., Zomaya, A. Y., & Bouvry, P. (2017). Real-Time Virtual Network Function (VNF) Migration toward Low Network Latency in Cloud Environments.
2. Emanuel Vieira, J. A. (2023). A roadside and cloud-based vehicular communications framework for the provision of C-ITS services.
3. Fu, J., & Li, G. (2019). An Efficient VNF Deployment Scheme for Cloud Networks.
4. Hui, Y., Ma, X., Su, Z., Cheng, N., Yin, Z., Luan, T. H., & Chen, Y. (2022). Collaboration as a Service: Digital-Twin-Enabled Collaborative and Distributed Autonomous Driving.
5. Khichane, A. (2022). Cloud Native 5G: an Efficient Orchestration of Cloud Native 5G System.
6. Lee, J., & Kim, Y. (2021). A Design of MANO System for Cloud Native Infrastructure.
7. Mikel Seron, A. M. (2023). Life cycle management of automotive data functions in MEC infrastructures.
8. Pino, A. (2021). Validation and Benchmarking of CNFs in OSM for pure Cloud Native applications in 5G and beyond.
9. Wang, Z. (2022). Towards Next Generation of Pedestrian and Connected Vehicle In-the-loop Research: A Digital Twin Co-Simulation Framework. 