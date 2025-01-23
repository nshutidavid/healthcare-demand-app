import React from 'react';
import './RecentDataTable.css';

function RecentDataTable({ data }) {
  return (
    <div className="recent-data-table">
      <h3>Recent Demand Data</h3>
      <table>
        <thead>
          <tr>
            <th>District</th>
            <th>Demand</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.district}</td>
              <td>{item.demand}</td>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentDataTable;