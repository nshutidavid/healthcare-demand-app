import React from 'react';
import QuickLinks from './QuickLinks';
import KeyMetrics from './KeyMetrics';
import RecentUpdates from './RecentUpdates';
import HomeChart from './HomeChart';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {/* Quick Links */}
      <div className="quick-links-container">
        <QuickLinks />
      </div>

      {/* Key Metrics */}
      <div className="metrics-container">
        <KeyMetrics />
      </div>

      {/* Recent Updates */}
      <div className="updates-container">
        <RecentUpdates />
      </div>

      {/* Visualizations */}
      <div className="chart-container">
        <HomeChart />
      </div>
    </div>
  );
}

export default Dashboard;