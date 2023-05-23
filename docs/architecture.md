---
sidebar_position: 2
---

# Architecture

The higher-level component of the system is the Manager. It is responsible for listening for migration triggers, and handling the subsequent migration logic, and for making some of the real time data available to the Grafana dashboards, such as where each DT is hosted. 

Below it is the OSM instance, which takes the role of deploying the DTs, handling the related network and infrastructure aspects. It makes use of two different VIM Accounts, each connected to its own K8s Cluster. 

The DTs are deployed in a cluster and consume their respective messages from a MQTT broker available on the machine and send their output to the broker adjacent to the Grafana dashboards. These dashboards have their data provided by the manager, the broker itself, and a proxy implemented between the dashboards and the broker. Its sole purpose it to convert some of the data from the broker messages to more conventional units before it reaches the dashboards, aiding in readability. 

<div>
    <img src="https://media.discordapp.net/attachments/1077307423636869142/1110486580789002332/arquitetura_updated.png" style={{maxWidth:"100%"}} />
</div>

For more information, [read](./report.md) the project report.