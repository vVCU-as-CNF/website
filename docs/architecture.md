---
sidebar_position: 2
---

# Architecture

## Components

Our architecture has 6 main components, as shown in Figure 7: the VCUs (both the OBUs and RSUs), the message brokers, the orchestrator, the MECs, the manager and the Grafana dashboards.  



### OBUs and RSUs 

The OBUs and RSUs are the physical components that we are creating a DT for. They generate data continuously and publish it to a network of message brokers. 

For each of these objects, we instantiate its corresponding digital twin, which gathers all the information regarding its object and forwards it to our user-interface. 

### The Messaging Network 

The messages in the network are organized by topics, relating both to the sender’s identity and geographic location, and each DT fetches their respective data from them. This includes both data related to its physical counterpart and the surrounding stations to enable cooperation.  

### Orchestrator 

The orchestrator is the component that handles the lifecycle of the digital twins. It orchestrates their deployment and management and the resources needed to run these, like network connectivity and virtual machines.  

This orchestrator would consist of a MANO software. MANO is an architectural framework that can coordinate the deployment of cloud-based applications.

### MECs 

The MEC nodes are the hosts for the DTs. These computing nodes are located at the edge of the network, thus allowing for the deployment and execution of the service closer to the devices. 

Due to the nature of a CNF, all stages of the DT’s lifecycle take place in these nodes, from instantiation to deletion. The orchestrator communicates directly with the MECs when it needs to create or delete a digital twin.  

### Manager 

The manager is our trigger event listener component. It orchestrates the migration process, is responsible for listening for migrating triggers and handling the subsequent migration logic, as well as supporting Grafana by providing some real-time data, such as the DT location in the system.  

It is the manager who communicates directly with the Orchestrator and controls when a migration should occur or not. The trigger for a migration is based on the physical location of the OBU and it is automated. However, an API was implemented, that provides a collection of endpoints that allow us to execute operations, such as starting a migration process on a DT, but also provides relevant information to the Data Visualization Dashboard. 

### Grafana Dashboards 

Two data dashboards are deployed on the same machine that the manager is on. These consume data from the message network and display it in a user-friendly interface. 

Important to note a small but relevant component adjacent to this dashboard, which is the proxy, an intermediary in communications that transforms some of the values before sending them to the user-friendly-interface. 

<br></br>

<div style={{textAlign:"center"}}>
    <img src="https://media.discordapp.net/attachments/1079089453198479370/1112856037612069016/general_architecture.drawio.png" style={{maxWidth:"80%"}} />
    <p>Image 1 - Component-Based Architecture</p>
</div>

<br></br>

## Technologies

In this section, we describe the purposes and the reasons behind the choices of the technologies used to develop this project. Besides that, there is a brief preview of the advantages of using such technologies.  

### Docker 

In the beginning of this project, we were provided with a Docker image which contained the code, dependencies and configuration of a digital twin application. 

### Mosquitto 

This digital twin was consuming from a topic of a message broker that was set up using Mosquitto, an open-source message broker, and was consuming the messages the OBU was publishing on said topic. 

### Kubernetes 

One of the goals of the project is to offer digital twins through CNFs. This CNF would be instantiated in a MEC. As mentioned in the architecture section, we did not use real MEC and instead simulated its existence with two Kubernetes clusters, each in separate machines. The DTs will be deployed in these. However, we cannot just deploy a Docker image in a Kubernetes cluster. We had to create a Kubernetes application which contained not only our digital twin docker image, but also all the components necessary to integrate it in a Kubernetes cluster environment. 

### Helm 

To do this we used Helm, which is a package manager for Kubernetes applications. Helm allows us to define our Kubernetes application in a Helm Chart. This Helm Chart contains the files which define the structure, configuration and deployment of our Kubernetes application and it is hand and since OSM can handle Helm Charts, we encapsulated our Digital Twins Kubernetes application in a Helm Chart, and we provided it to OSM so that it can manage the application deployments in the different clusters. With this process completed, we were able to launch our CNF.  

### Open Source MANO 

It is important to highlight that in our solution, the number of digital twins deployed in a cluster is subject to change, according to real-world changes. Not only that, but our solution must also handle the creation and deployment of a digital twin at any given time without any negative impact and this process needs to be automated and not need any human intervention. For this to happen we need our orchestrator. 

With that being said, we chose Open-Source MANO as our orchestrator, given that it can manage the different Kubernetes applications inside each cluster. For this to occur, we describe how our Kubernetes application should look like to OSM to allow it to orchestrate and manage it properly.  

### Grafana 

Now that our solution supports the migration of the Digital Twins among clusters, we still need an interface that allows the user to see not only the Digital Twin information, but also the migration process happening. So, we deployed a message broker, also using Mosquitto, and made all Digital Twins publish their messages to a topic in this broker. This broker was deployed in the same virtual machine where a container running a Grafana Instance was deployed and displaying the different Digital Twins information. 

### FastAPI 

Our solution must also handle the migration of a Digital Twin from one cluster to another. This process is accomplished by terminating a Kubernetes application from one cluster and creating it in another cluster. However, it is important to note that this implementation is only possible because our system is stateless, meaning its operations do not rely on any stored data and different applications can be created and terminated without any negative impact in the overall system. 

So, to handle the migration we had to implement a component that integrated an API which would then be used to communicate to OSM when a migration needed to occur. To implement this API we used FastAPI, a python framework that allows us to create APIs in a very quick and simple manner. This way, we can create an endpoint we can call that handles the logic adjacent to the migration process. 

<br></br>

<div style={{textAlign:"center"}}>
    <img src="https://media.discordapp.net/attachments/1079089453198479370/1112845350919733299/techs_architecture.png?width=1080&height=516" style={{maxWidth:"80%"}} />
    <p>Image 2 - High-Level System Architecture</p>
</div>

<br></br>

For more information, [read](./report.md) the project specification report.