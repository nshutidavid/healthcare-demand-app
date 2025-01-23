import React from 'react';
import './AlertTable.css';

function AlertTable({ alerts, onAlertClick }) {
  return (
    <div className="alert-table">
      <h3>Recent Health Alerts</h3>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Type</th>
            <th>Severity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id} onClick={() => onAlertClick(alert)}>
              <td>{alert.location}</td>
              <td>{alert.type}</td>
              <td>{alert.severity}</td>
              <td>{alert.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertTable;