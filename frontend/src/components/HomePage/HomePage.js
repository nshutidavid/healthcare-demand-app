import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard/Dashboard';
import DemandPrediction from '../DemandPrediction/DemandPrediction';
import ResourceAllocation from '../ResourceAllocation/ResourceAllocation';
import HealthAlerts from '../HealthAlerts/HealthAlerts';
import Reports from '../Reports/Reports';
import Settings from '../Settings/Settings';
import './HomePage.css';

function HomePage() {
  const [selectedPage, setSelectedPage] = useState('dashboard');

  return (
    <div className="home-page">
      {/* Sidebar */}
      <Sidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      {/* Main Content */}
      <div className="main-content">
        {selectedPage === 'dashboard' && <Dashboard />}
        {selectedPage === 'demand-prediction' && <DemandPrediction />}
        {selectedPage === 'resource-allocation' && <ResourceAllocation />}
        {selectedPage === 'health-alerts' && <HealthAlerts />}
        {selectedPage === 'reports' && <Reports />}
        {selectedPage === 'settings' && <Settings />}
      </div>
    </div>
  );
}

export default HomePage;