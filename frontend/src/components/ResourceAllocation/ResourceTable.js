import React from 'react';
import './ResourceTable.css';

function ResourceTable({ resources }) {
  return (
    <div className="resource-table">
      <h3>Resource Allocation Table</h3>
      <table>
        <thead>
          <tr>
            <th>Facility</th>
            <th>Doctors</th>
            <th>Beds</th>
            <th>Demand</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource, index) => (
            <tr key={index}>
              <td>{resource.facility}</td>
              <td>{resource.doctors}</td>
              <td>{resource.beds}</td>
              <td>{resource.demand}</td>
              <td>{resource.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResourceTable;