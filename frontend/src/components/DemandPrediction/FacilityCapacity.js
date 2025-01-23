import React from 'react';
import './FacilityCapacity.css';

function FacilityCapacity() {
  const facilities = [
    { name: 'Hospital A', capacity: 100, demand: 120 },
    { name: 'Clinic B', capacity: 50, demand: 40 },
  ];

  return (
    <div className="facility-capacity">
      <h3>Facility Capacity Overview</h3>
      <table>
        <thead>
          <tr>
            <th>Facility</th>
            <th>Capacity</th>
            <th>Demand</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {facilities.map((facility, index) => (
            <tr key={index}>
              <td>{facility.name}</td>
              <td>{facility.capacity}</td>
              <td>{facility.demand}</td>
              <td>{facility.demand > facility.capacity ? 'Overcapacity' : 'Adequate'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacilityCapacity;