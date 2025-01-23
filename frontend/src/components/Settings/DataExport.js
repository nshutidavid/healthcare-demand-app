import React from 'react';
import './DataExport.css';

function DataExport() {
  const handleExport = (format) => {
    console.log(`Exporting data in ${format} format`);
    // Add logic to export data
  };

  return (
    <div className="data-export">
      <h3>Data Export</h3>
      <button onClick={() => handleExport('PDF')}>Export as PDF</button>
      <button onClick={() => handleExport('CSV')}>Export as CSV</button>
    </div>
  );
}

export default DataExport;