---
sidebar_position: 1
---

# Project Guidelines

## A Virtual Vehicular Communications Unit as a Cloud-Native Network Function

Tutors: [**Rafael Direito**](https://www.it.pt/Members/Index/35471) & [**João Almeida**](https://www.it.pt/Members/Index/17453)

## Description:

The main goal of this project is to create a virtual environment for Cooperative, Connected, and Automated Mobility (CCAM) applications, including digital twins of 5G-enabled Vehicular Communications Units (VCUs): both vehicles’ On-Board Units (OBUs) and Road-Side Units (RSUs) equipped with traffic sensors. This way, a digital representation of these 5G VCUs can be developed, running on edge computing (MEC) nodes or 5G core premises. Fundamentally, it enables CCAM services to be remotely deployed and controlled in real-time, including, for instance, situational awareness, collective perception, and maneuver coordination among 5G autonomous vehicles. As a step ahead, these services can be migrated between distinct 5G network infrastructures (e.g. MEC nodes) belonging to different Mobile Network Operators.

The students will mainly work on developing a CNF (Cloud-Native Network Function) to make available a virtual VCU (vVCU). To this end, the students will rely on a pre-built Docker image that already provides all functionalities of a VCU. However, some minor improvements or bug fixing of said Docker image might be required. The students will also have to create a Dashboard that showcases the information being transmitted to the vVCU. Lastly, it is expected that the students develop mechanisms capable of migrating a vVCU to a different infrastructure than the one where these entities were initially deployed.

Considering that this research field involves jargon that is unknown to many students, we can use simpler terms to describe all the aforementioned entities:

- vVCU – A docker image that provides all functionalities of a VCU (the docker image will be provided to the students)
- CNF – A Network Function that encapsulates the vVCU. The CNF is basically a Kubernetes Helm Chart to deploy the vVCU’s docker image

## Requirements:

- As a first step, the students shall deploy the virtual VCU via Docker:
  - The students should explore how to interact with the virtual VCU
  - o The students should fix any bug that the VCU Docker Image comprises
- The students should develop a dashboard to provide a visual representation of the data being collected by the vVCU
  - This dashboard may be a fully custom Web UI
  - Or the students may rely on Grafana to showcase the vVCU’s information
- After this, the students will have to deploy the virtual VCU (pre-built docker image) to Kubernetes using a Helm Chart
- The Helm Chart must be then encapsulated in a Cloud Native Network Function that shall be deployed through an orchestrator (Open-Source MANO)
  - (In simple terms, the CNF is basically a Kubernetes deployment/service)
- Once the CNF is deployed, it should be possible to migrate it to another Kubernetes cluster. This mimics the migration of such entities between MECs
- All tools used during this project must be free/open source

## Possible Challenges:

- The migration of the CNF between Kubernetes clusters should not result in any service downtime;
- All communication should rely on 5G connectivity
- The students can also develop an entity that aggregates data coming from different vVCUs

## Expected Results:

- User-friendly dashboard that showcases the vVCUs data
- All functionalities and the developed code should take into consideration aspects like decoupling, modularity, extendibility, and security
- A CNF that provides a vVCU
- Mechanisms that are capable of migrating vVCUs between different infrastructure (more specifically between Kubernetes clusters)