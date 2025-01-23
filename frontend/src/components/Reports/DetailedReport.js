import React from 'react';
import './DetailedReport.css';

function DetailedReport({ filters }) {
  const detailedData = [
    { district: 'Gasabo', demand: 500, resources: 400, alerts: 3 },
    { district: 'Kicukiro', demand: 300, resources: 250, alerts: 1 },
    { district: 'Nyarugenge', demand: 200, resources: 150, alerts: 1 },
  ];

  return (
    <div className="detailed-report">
      <h3>Detailed Report</h3>
      <table>
        <thead>
          <tr>
            <th>District</th>
            <th>Demand</th>
            <th>Resources</th>
            <th>Alerts</th>
          </tr>
        </thead>
        <tbody>
          {detailedData.map((data, index) => (
            <tr key={index}>
              <td>{data.district}</td>
              <td>{data.demand}</td>
              <td>{data.resources}</td>
              <td>{data.alerts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailedReport;