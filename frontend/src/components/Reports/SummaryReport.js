import React from 'react';
import './SummaryReport.css';

function SummaryReport({ filters }) {
  const summaryData = {
    totalDemand: 1000,
    resourceUtilization: '75%',
    activeAlerts: 5,
  };

  return (
    <div className="summary-report">
      <h3>Summary Report</h3>
      <div className="metrics">
        <div className="metric-card">
          <h4>Total Demand</h4>
          <p>{summaryData.totalDemand}</p>
        </div>
        <div className="metric-card">
          <h4>Resource Utilization</h4>
          <p>{summaryData.resourceUtilization}</p>
        </div>
        <div className="metric-card">
          <h4>Active Alerts</h4>
          <p>{summaryData.activeAlerts}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryReport;