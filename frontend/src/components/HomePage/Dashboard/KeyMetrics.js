import React from 'react';
import './KeyMetrics.css';

function KeyMetrics() {
  return (
    <div className="key-metrics">
      <div className="metric-card">
        <h3>Total Demand</h3>
        <p>1,200</p>
      </div>
      <div className="metric-card">
        <h3>Active Alerts</h3>
        <p>5</p>
      </div>
      <div className="metric-card">
        <h3>Resource Utilization</h3>
        <p>75%</p>
      </div>
    </div>
  );
}

export default KeyMetrics;