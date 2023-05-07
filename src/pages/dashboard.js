import React from 'react';
import Layout from '@theme/Layout';

export default function Grafana() {
  return (
    <Layout title="Grafana Dashboard">
      <div style={{ display: 'flex', flexDirection: "row", height: '75vh', width: '100%', left: "0px", top: '0px', backgroundColor: "black" }}>
        <div style={{ width: "25%", height: "100%", margin: "0px" }}>
          <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683238598695&to=1683238628695&panelId=2" width="100%" height="75%" frameborder="0"></iframe>
          <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683238873322&to=1683238903322&panelId=8" width="50%" height="25%" frameborder="0"></iframe>
          <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683239133590&to=1683239163590&panelId=12" width="50%" height="25%" frameborder="0"></iframe>
        </div>
        <div style={{ width: "25%", height: "100%" }}>
          <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683238612617&to=1683238642617&panelId=10" width="100%" height="75%%" frameborder="0"></iframe>
          <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683239440634&to=1683239470634&panelId=13" width="50%" height="25%" frameborder="0"></iframe>
          <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683239450354&to=1683239480354&panelId=14" width="50%" height="25%" frameborder="0"></iframe>
        </div>
        <div style={{ width: "50%", height: "100%" }}>
          <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683236824515&to=1683236854515&panelId=6" width="100%" height="100%" frameborder="0"></iframe>
        </div>
      </div>
    <div style={{ display: 'flex', flexDirection: "row", height: '25vh', width: '100%', left: "0px", top: '0px', backgroundColor: "black" }}>
      <div style={{ width: "50%", height: "100%" }}>
        <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683240393990&to=1683240423990&panelId=18" width="100%" height="100%" frameborder="0"></iframe>
      </div>
      <div style={{ width: "50%", height: "100%" }}>
        <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683240393990&to=1683240423990&panelId=18" width="100%" height="100%" frameborder="0"></iframe>
      </div>
    </div>
    </Layout>
  );
}