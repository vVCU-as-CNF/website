import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      styles={{}}
    >
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
          <Link className="button button--secondary" to="/docs/documentation">
            Learn More
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
      <div className={clsx(styles.ourTeam)}>
        <div className="container">
          <h1 className="">Our Goals</h1>
          <img src="img/goalspi.png" style={{maxWidth: "80%", marginTop:"30px"}}/>
        </div>
      </div>
      <main></main>
      <div className={clsx(styles.ourTeam)}>
        <div className="container">
          <h1 className="">Our Team</h1>
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
