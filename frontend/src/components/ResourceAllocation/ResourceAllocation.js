import React, { useState } from 'react';
import ResourceTable from './ResourceTable';
import ResourceMap from './ResourceMap';
import ResourceForm from './ResourceForm';
import ResourceChart from './ResourceChart';
import './ResourceAllocation.css';

function ResourceAllocation() {
  const [resources, setResources] = useState([
    { facility: 'Hospital A', doctors: 20, beds: 100, demand: 150, status: 'Insufficient' },
    { facility: 'Clinic B', doctors: 10, beds: 50, demand: 40, status: 'Adequate' },
  ]);

  const recommendations = [
    { area: 'Gasabo', action: 'Move 10 doctors from Kicukiro', timeline: 'Within 1 week' },
    { area: 'Nyarugenge', action: 'Add 20 beds', timeline: 'Within 2 weeks' },
  ];

  return (
    <div className="resource-allocation">
      <h2>Resource Allocation</h2>

      {/* Metrics Dashboard */}
      <div className="metrics">
        <div className="metric-card">
          <h3>Total Doctors</h3>
          <p>150</p>
        </div>
        <div className="metric-card">
          <h3>Total Beds</h3>
          <p>500</p>
        </div>
        <div className="metric-card">
          <h3>Resource Utilization</h3>
          <p>75%</p>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="map-container">
        <ResourceMap />
      </div>

      {/* Resource Table */}
      <div className="table-container">
        <ResourceTable resources={resources} />
      </div>

      {/* Recommendations */}
      <div className="recommendations">
        <h3>Recommendations</h3>
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>
              <strong>{rec.area}:</strong> {rec.action} ({rec.timeline})
            </li>
          ))}
        </ul>
      </div>

      {/* Resource Request Form */}
      <div className="form-container">
        <ResourceForm />
      </div>

      {/* Historical Trends Chart */}
      <div className="chart-container">
        <ResourceChart />
      </div>
    </div>
  );
}

export default ResourceAllocation;