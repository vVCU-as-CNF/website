---
sidebar_position: 2
---

# Architecture

## Components

Our architecture has 6 main components: the VCUs (both the OBUs and RSUs), the messaging network, the orchestrator, the MECs, the manager and the Grafana dashboards. 



### OBUs and RSUs 

The OBUs and RSUs are the physical component that we are creating a DT for. They generate data continuously and publish it to a network of message brokers. 

For each of these objects we instantiate its corresponding digital twin, which gathers all the information regarding its object and forwards it to our user-interface. 

### The Messaging Network 

The messages in the network are organized by topics, relating both to the sender’s identity and geographic location, and each DT fetches their respective data from them. This includes both data related to its physical counterpart and the surrounding stations to enable cooperation. 

### Orchestrator 

The orchestrator is the component that handles the lifecycle of the digital twins. It orchestrates their deployment and management and the resources needed to run these, like network connectivity and virtual machines.  

It contains an instance of OSM and it is constantly running and available. We will not get into much detail on how OSM works, later in the report its functioning is explained more in-depth.  

A brief simplification would be the OSM allows our solution to control the digital twins that are or must be deployed and instantiated while handling the related network and infrastructure aspects. Therefore, it is easy to understand how the orchestrator plays a key role in our solution. 

### MECs 

The MEC nodes are the hosts for the DTs. These computing nodes are located at the edge of the network, thus allowing for the deployment and execution of the service closer to the devices. 

Due to the nature of a CNF, all stages of the DT’s lifecycle take place in these nodes, from instantiation to deletion. The orchestrator communicates directly with the MECs when it needs to create or delete a digital twin.  

In our solution, we only used 2 different MECs two implement and showcase the migration of a DT between both. In a real-world scenario, there would be dozens, in distinct locations and from different network communications operators. 

### Manager 

The manager can be considered the higher-level component of the system. It implements the migration process, is responsible for listening for migrating triggers and handling the subsequent migration logic, as well as supporting Grafana by providing some real-time data, such as the DT location in the system.  

It is the manager who communicates directly with the Orchestrator and controls when a migration should occur or not. The trigger for a migration is based on the physical location of the OBU and it is automated. However, an API needs to be implemented, that provides a collection of endpoints that allow us to execute operations, such as starting a migration process on a DT, but also provides relevant information to the Data Visualization Dashboard. 

### Grafana Dashboards 

A Grafana instance is deployed on the same machine that the manager is on. This instance consumes the data from the message network and displays it in a user-friendly interface. 

Important to note a small but relevant component adjacent to Grafana which is the proxy, an intermediary in communications that transforms some of the values before sending them to Grafana. 

<br></br>

<div style={{textAlign:"center"}}>
    <img src="https://media.discordapp.net/attachments/1079089453198479370/1112856037612069016/general_architecture.drawio.png" style={{maxWidth:"80%"}} />
    <p>Image 1 - Component-Based Architecture</p>
</div>

<br></br>

## Technologies

In this section, we describe the purposes and the reasons behind the choices of the technologies used to develop this project. Besides that, there is a brief preview of the advantages of using such technologies. 

### Docker 

Docker, the primary technology of our project, is the perfect choice to package our system due to its consistency, portability, and isolation. 

With Docker, it is possible to ensure that the system runs consistently across different environments and that it is possible to move between different hosts and environments easily. Besides that, Docker provides a prominent level of isolation, which helps to avoid conflicts and ensures that every environment has its unique system running separately from the others. 

Our Digital Twin consists of a docker image that runs in a container. 

### Mosquitto 

Mosquitto is an open-source message broker that implements the MQTT protocol, popular among developers not only because of its lightweight and scalability but also for its cross-platform support and active community.  

Since Mosquitto provides a library in C, we took advantage of it, making all communications between the different components of our architecture be handled by it. 

### Kubernetes 

To manage, scale and deploy containerized applications, in this case, the digital twins, Kubernetes was the chosen technology for the job. Thanks to its high availability, portability and automatability. 

K8s is well known since it allows easy deployment across different environments and cloud providers and delivers a powerful and flexible API that allows you to automate many aspects of the management and deployment. All that helped save time and improve consistency. 

Using Kubernetes, we were able to create our Digital Twin application and deploy it in a cluster inside the different MECs. 

### Helm 

Helm is a package manager for Kubernetes which simplifies managing and deploying applications in Kubernetes. We can package an application by combining all files of the different application resources and combining them in a chart. This chart can then be shared and distributed. 

Helm also provides a command-line tool that allows users to execute operations on a chart, such as installing, upgrading, and deleting it from a Kubernetes cluster. 

We used Helm as a way of encapsulating our Kubernetes application in a way that our orchestrator (OSM) could handle.  

### Open Source MANO 

Open Source MANO is an open-source project hosted by ETSI to develop an Open Source NFV Management and Orchestration software stack. It provides tools to develop, manage and straightforwardly orchestrate network functions, with benefits such as flexibility, scalability, and cost efficiency. It also provides a user-friendly dashboard to manage all these operations in an easier way.  

OSM has gained popularity among the open-source community, with over 150 organizations contributing to its development. Not only that but its future looks promising, since Cloud-Native technology has seen a rise in popularity in the last few years, it is expected OSM to lead the way in the network management and orchestration world.  

Using OSM, we were able to instantiate different CNFs and manage them. These CNFs used our Kubernetes application that was encapsulated in the Helm Chart we give OSM. 

### Grafana 

Grafana was the chosen technology to take care of the visual component of this project. Its connectivity to the message broker is the main reason for this choice. Besides that, the data source integration, alerting features, and dashboard customization were other factors that led to this choice. 

Grafana supports integration with many different data sources, simplifying the monitoring of data coming from numerous sources in one place. It also provides a customizable interface, which can help analyse your data more effectively. 

### FastAPI 

FastAPI is a framework that allows for fast and simple API implementation. It provides us with the tools to create a python API in a fast, simple, and intuitive way while ensuring high performance and robustness.  

It is famous among the developer community and used in many projects due to not only the advantages referred above but also due to its compliance with industry standards and automatic interactive documentation.  

Since we needed a manager that could handle all the migration triggers and communicated them to our Orchestrator, we used FastAPI to develop an API that could handle these events.

<br></br>

<div style={{textAlign:"center"}}>
    <img src="https://media.discordapp.net/attachments/1079089453198479370/1112845350919733299/techs_architecture.png?width=1080&height=516" style={{maxWidth:"80%"}} />
    <p>Image 2 - High-Level System Architecture</p>
</div>

<br></br>

For more information, [read](./report.md) the project specification report.