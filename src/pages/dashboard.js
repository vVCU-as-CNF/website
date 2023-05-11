import React from 'react';
import Layout from '@theme/Layout';

export default function App() {
  const placeholderImage = 'https://picsum.photos/1000'; 

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
    height: '85vh', // mudar tamanho total da grelha
    width: '100vw', 
    gap: '0.3rem',
    backgroundColor: "black"
  };
  const flexContainerStyle2 = {
    display: 'flex',
    gridColumn: '1',
    gridRow: '1 / span 3',
    gap: '0.3rem'
  };

  const flexChildStyle2 = {
    flex: '1',
    backgroundSize: 'cover',
  };

  const flexContainerStyle4 = {
    display: 'flex',
    gridColumn: '1',
    gridRow: '4',
    gap: '0.3rem'
  };

  const flexChildStyle4 = {
    flex: '1',
    backgroundSize: 'cover',
  };


  return  (
    <Layout title="Grafana Dashboard">
      <div style={gridStyle}>
        <div style={flexContainerStyle2}>
          <div style={flexChildStyle2}>
            <iframe src="http://10.255.32.4:3000/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=2" width="100%" height="100%" frameborder="0"></iframe>
          </div>
          <div style={flexChildStyle2}>
            <iframe src="http://10.255.32.4:3000/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=10" width="100%" height="100%" frameborder="0"></iframe>
          </div>
        </div>
        <div style={flexContainerStyle4}>
          <div style={flexChildStyle4}>
            <iframe src="http://10.255.32.4:3000/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=8" width="100%" height="100%" frameborder="0"></iframe>
          </div>
          <div style={flexChildStyle4}>
            <iframe src="http://10.255.32.4:3000/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=12" width="100%" height="100%" frameborder="0"></iframe>
          </div>
          <div style={flexChildStyle4}>
            <iframe src="http://10.255.32.4:3000/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=13" width="100%" height="100%" frameborder="0"></iframe>
          </div>
          <div style={flexChildStyle4}>
            <iframe src="http://10.255.32.4:3000/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=14" width="100%" height="100%" frameborder="0"></iframe>
          </div>
        </div>
        <div style={{ gridColumn: '1', gridRow: '5', backgroundSize: 'cover'}}>
          <iframe src="http://10.255.32.4:3000/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=18" width="100%" height="100%" frameborder="0"></iframe>
        </div>
        <div style={{ gridColumn: '2', gridRow: '1 / span 4', backgroundSize: 'cover'}}>
          <iframe src="http://10.255.32.4:3000/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=6" width="100%" height="100%" frameborder="0"></iframe>
        </div>
        <div style={{ gridColumn: '2', gridRow: '5', backgroundImage: `url(${placeholderImage})`, backgroundSize: 'cover'}}>
          <iframe src="http://10.255.32.4:3000/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=20" width="100%" height="100%" frameborder="0"></iframe>
        </div>
      </div>
    </Layout>
  );
};

// import React from 'react';
// import Layout from '@theme/Layout';

// export default function Grafana() {
//   return (
//     <Layout title="Grafana Dashboard">
//       <div style={{ display: 'flex', flexDirection: "row", height: '75vh', width: '100%', left: "0px", top: '0px', backgroundColor: "black" }}>
//         <div style={{ width: "25%", height: "100%", margin: "0px" }}>
//           <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683238598695&to=1683238628695&panelId=2" width="100%" height="75%" frameborder="0"></iframe>
//           <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683238873322&to=1683238903322&panelId=8" width="50%" height="25%" frameborder="0"></iframe>
//           <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683239133590&to=1683239163590&panelId=12" width="50%" height="25%" frameborder="0"></iframe>
//         </div>
//         <div style={{ width: "25%", height: "100%" }}>
//           <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683238612617&to=1683238642617&panelId=10" width="100%" height="75%%" frameborder="0"></iframe>
//           <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683239440634&to=1683239470634&panelId=13" width="50%" height="25%" frameborder="0"></iframe>
//           <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683239450354&to=1683239480354&panelId=14" width="50%" height="25%" frameborder="0"></iframe>
//         </div>
//         <div style={{ width: "50%", height: "100%" }}>
//           <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683236824515&to=1683236854515&panelId=6" width="100%" height="100%" frameborder="0"></iframe>
//         </div>
//       </div>
//     <div style={{ display: 'flex', flexDirection: "row", height: '25vh', width: '100%', left: "0px", top: '0px', backgroundColor: "black" }}>
//       <div style={{ width: "50%", height: "100%" }}>
//         <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683240393990&to=1683240423990&panelId=18" width="100%" height="100%" frameborder="0"></iframe>
//       </div>
//       <div style={{ width: "50%", height: "100%" }}>
//         <iframe src="http://localhost:3000/d-solo/wACnaqxVz/dashboard-4?orgId=1&from=1683240393990&to=1683240423990&panelId=18" width="100%" height="100%" frameborder="0"></iframe>
//       </div>
//     </div>
//     </Layout>
//   );
// }