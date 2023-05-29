import React from 'react';

const MainDashboard = () => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
        height: '85vh',
        width: '100%',
        gap: '0.3rem',
        backgroundColor: 'black',
    };
    const flexContainerStyle2 = {
        display: 'flex',
        gridColumn: '1',
        gridRow: '1 / span 3',
        gap: '0.3rem',
    };

    const flexChildStyle2 = {
        flex: '1',
        backgroundSize: 'cover',
    };

    const flexContainerStyle4 = {
        display: 'flex',
        gridColumn: '1',
        gridRow: '4',
        gap: '0.3rem',
    };

    const flexChildStyle4 = {
        flex: '1',
        backgroundSize: 'cover',
    };

    return (
        <div id="main_dashboard" style={gridStyle}>
            <div style={flexContainerStyle2}>
                <div style={flexChildStyle2}>
                <iframe
                    src="http://vvcu-as-a-cnf.av.it.pt/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=2"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
                </div>
                <div style={flexChildStyle2}>
                <iframe
                    src="http://vvcu-as-a-cnf.av.it.pt/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=10"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
                </div>
            </div>
            <div style={flexContainerStyle4}>
                <div style={flexChildStyle4}>
                <iframe
                    src="http://vvcu-as-a-cnf.av.it.pt/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=8"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
                </div>
                <div style={flexChildStyle4}>
                <iframe
                    src="http://vvcu-as-a-cnf.av.it.pt/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=12"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
                </div>
                <div style={flexChildStyle4}>
                <iframe
                    src="http://vvcu-as-a-cnf.av.it.pt/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=13"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
                </div>
                <div style={flexChildStyle4}>
                <iframe
                    src="http://vvcu-as-a-cnf.av.it.pt/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=14"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
                </div>
            </div>
            <div style={{ gridColumn: '1', gridRow: '5', backgroundSize: 'cover' }}>
                <iframe
                    src="http://vvcu-as-a-cnf.av.it.pt/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=18"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
            </div>
            <div style={{ gridColumn: '2', gridRow: '1 / span 4', backgroundSize: 'cover' }}>
                <iframe
                    src="http://vvcu-as-a-cnf.av.it.pt/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=6"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
            </div>
            <div style={{ gridColumn: '2', gridRow: '5', backgroundSize: 'cover' }}>
                <iframe
                    src="http://vvcu-as-a-cnf.av.it.pt/d-solo/a95b957e-022b-44c8-a706-79ddd2acd931/new-dashboard?orgId=1&panelId=20"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default MainDashboard;
