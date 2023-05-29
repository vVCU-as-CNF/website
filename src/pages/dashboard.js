import React from 'react';
import Layout from '@theme/Layout';
import MainDashboard from '../components/MainDashboard/index';
import ManagerDashboard from '../components/ManagerDashboard/index';
import { Button } from '@mui/material';

class App extends React.Component {
  state = {
    activeDashboard: 'Main',
  };

  switchToMainDashboard = () => {
    this.setState({
      activeDashboard: 'Main',
    });
  };

  switchToManagerDashboard = () => {
    this.setState({
      activeDashboard: 'Manager',
    });
  };

  render() {
    const { activeDashboard } = this.state;

    return (
      <Layout title="Grafana Dashboard">
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <Button
            style={{ margin: '0 10px' }}
            variant={activeDashboard === 'Main' ? 'contained' : 'outlined'}
            onClick={this.switchToMainDashboard}
            sx={{
              backgroundColor: activeDashboard === 'Main' ? '#00A1BF' : '',
              color: activeDashboard === 'Main' ? '#fff' : '#00A1BF',
              borderColor: activeDashboard === 'Main' ? '' : '#00A1BF',
              '&:hover': {
                backgroundColor: activeDashboard === 'Main' ? '#00A1BF' : '',
                borderColor: activeDashboard === 'Main' ? '' : '#00A1BF',
              },
            }}
          >
            Main Dashboard
          </Button>
          <Button
            style={{ margin: '0 10px' }}
            variant={activeDashboard === 'Manager' ? 'contained' : 'outlined'}
            onClick={this.switchToManagerDashboard}
            sx={{
              backgroundColor: activeDashboard === 'Manager' ? '#00A1BF' : '',
              color: activeDashboard === 'Manager' ? '#fff' : '#00A1BF',
              borderColor: activeDashboard === 'Manager' ? '' : '#00A1BF',
              '&:hover': {
                backgroundColor: activeDashboard === 'Manager' ? '#00A1BF' : '',
                borderColor: activeDashboard === 'Manager' ? '' : '#00A1BF',
              },
            }}
          >
            Manager Dashboard
          </Button>
        </div>
        {activeDashboard === 'Main' ? <MainDashboard /> : <ManagerDashboard />}
      </Layout>
    );
  }
}

export default App;
