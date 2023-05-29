import React from 'react';

const ManagerDashboard = () => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: 'calc(20% + 10px) 1fr 1fr calc(20% + 10px) calc(20% + 10px)',
    height: '85vh',
    width: '100%',
    gap: '0.3rem',
    backgroundColor: 'black',
  };

  const flexChildStyle = {
    flex: '1',
    backgroundSize: 'cover',
    gap: '0.3rem',
  };
  const flexParent = {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
  };

  const flexFirstChildStyle = {
    ...flexChildStyle,
    marginTop: '0',
};

// Don't add margin to the last child
const flexLastChildStyle = {
    ...flexChildStyle,
    marginBottom: '0',
};

  const firstCol = [
    { src: "http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=3" },
    { src: "http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=18" },
    { src: "http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=11" },
    { src: "http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=5" },
    { src: "http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=6" }
  ];

  return (
    <div id="main_dashboard" style={gridStyle}>
      {firstCol.map((item, index) => (
        <div style={{ ...flexChildStyle, gridColumn: '1', gridRow: index + 1 }} key={index}>
          <iframe
            src={item.src}
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      ))}
      
      <div style={{ ...flexChildStyle, ...flexParent, gridColumn: '2 / span 3', gridRow: '1 / span 1' }}>
        <div style={{ ...flexChildStyle }}>
          <iframe
            src="http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=19"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
        <div style={{ ...flexChildStyle }}>
          <iframe
            src="http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=4"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
        <div style={{ ...flexChildStyle }}>
          <iframe
            src="http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=8"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      
      <div style={{ ...flexFirstChildStyle, gridColumn: '2 / span 3', gridRow: '2 / span 1' }}>
        <iframe
          src="http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=15"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
      <div style={{ ...flexChildStyle, gridColumn: '2 / span 3', gridRow: '3 / span 1' }}>
        <iframe
          src="http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=20"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
      <div style={{ ...flexChildStyle, gridColumn: '2 / span 3', gridRow: '4 / span 1' }}>
        <iframe
          src="http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=9"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
      <div style={{ ...flexLastChildStyle, gridColumn: '2 / span 3', gridRow: '5 / span 1' }}>
        <iframe
          src="http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=10"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>


      <div style={{ ...flexChildStyle, gridColumn: '5 / span 3', gridRow: '1 / span 4' }}>
        <iframe
          src="http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=12"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>      </div>
      <div style={{ ...flexChildStyle, gridColumn: '5 / span 3', gridRow: '5' }}>
        <iframe
          src="http://vvcu-as-a-cnf.av.it.pt/d-solo/dbd697ba-c1ff-41ab-8773-4c98f98de26f/manager-dashboard?orgId=1&panelId=14"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ManagerDashboard;