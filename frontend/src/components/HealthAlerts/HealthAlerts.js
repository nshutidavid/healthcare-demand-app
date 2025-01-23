import React, { useState } from 'react';
import AlertTable from './AlertTable';
import AlertMap from './AlertMap';
import AlertDetails from './AlertDetails';
import AlertChart from './AlertChart';
import './HealthAlerts.css';

function HealthAlerts() {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = [
    { id: 1, location: 'Gasabo', type: 'Disease Outbreak', severity: 'High', status: 'Active' },
    { id: 2, location: 'Kicukiro', type: 'High Demand', severity: 'Medium', status: 'Resolved' },
    { id: 3, location: 'Nyarugenge', type: 'Equipment Shortage', severity: 'Low', status: 'Active' },
  ];

  const handleAlertClick = (alert) => {
    setSelectedAlert(alert);
  };

  return (
    <div className="health-alerts">
      <h2>Health Alerts</h2>

      {/* Alert Dashboard */}
      <div className="metrics">
        <div className="metric-card">
          <h3>Total Alerts</h3>
          <p>{alerts.length}</p>
        </div>
        <div className="metric-card">
          <h3>Active Outbreaks</h3>
          <p>{alerts.filter((alert) => alert.type === 'Disease Outbreak' && alert.status === 'Active').length}</p>
        </div>
        <div className="metric-card">
          <h3>High-Risk Areas</h3>
          <p>{alerts.filter((alert) => alert.severity === 'High').length}</p>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="map-container">
        <AlertMap alerts={alerts} onAlertClick={handleAlertClick} />
      </div>

      {/* Alert Table */}
      <div className="table-container">
        <AlertTable alerts={alerts} onAlertClick={handleAlertClick} />
      </div>

      {/* Alert Details */}
      {selectedAlert && (
        <div className="details-container">
          <AlertDetails alert={selectedAlert} />
        </div>
      )}

      {/* Trend Analysis Chart */}
      <div className="chart-container">
        <AlertChart />
      </div>
    </div>
  );
}

export default HealthAlerts;