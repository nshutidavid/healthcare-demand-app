import React from 'react';
import './AlertDetails.css';

function AlertDetails({ alert }) {
  return (
    <div className="alert-details">
      <h3>Alert Details</h3>
      <p><strong>Location:</strong> {alert.location}</p>
      <p><strong>Type:</strong> {alert.type}</p>
      <p><strong>Severity:</strong> {alert.severity}</p>
      <p><strong>Status:</strong> {alert.status}</p>
      <p><strong>Recommendations:</strong> Take immediate action to address the issue.</p>
    </div>
  );
}

export default AlertDetails;