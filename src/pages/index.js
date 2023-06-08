import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import VideoComponent from "../components/VideoComponent";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{ font: "100px" }}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">
          Virtual environment for Cooperative, Connected, and Automated Mobility
          applications, <br />
          including digital twins of 5G-enabled Vehicular Communications Units
        </p>
        <div className={styles.buttons} style={{ marginTop: "50px" }}>
          <Link style={{marginRight:"10px"}} className="button button--secondary" to="/docs/documentation">
            Learn More
          </Link>
          <Link style={{marginLeft:"10px"}} className="button button--secondary" to="/docs/report">
            Read Report
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
        <div className={clsx(styles.ourTeam)} style={{marginTop:"3%"}}>
          <div className="container">
            <h1 className="">Our Goals</h1>
            <img src="img/goalspi.png" style={{maxWidth: "80%", marginTop:"30px"}}/>
          </div>
        </div>
        <div className={clsx(styles.ourTeam)} style={{marginTop:"3%"}}>
          <div className="container">
            <h1 className="">Our Team</h1>
          </div>
        </div>
      <HomepageFeatures />
      <VideoComponent>

      </VideoComponent>
    </Layout>
  );
}
