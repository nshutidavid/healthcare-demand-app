import React, { useState } from 'react';
import './ResourceForm.css';

function ResourceForm() {
  const [formData, setFormData] = useState({
    facility: '',
    resource: '',
    quantity: 0,
    urgency: 'Low',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resource Request:', formData);
    // Send the request to the backend
  };

  return (
    <div className="resource-form">
      <h3>Request Additional Resources</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Facility Name:
          <input
            type="text"
            value={formData.facility}
            onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
          />
        </label>
        <label>
          Resource Needed:
          <select
            value={formData.resource}
            onChange={(e) => setFormData({ ...formData, resource: e.target.value })}
          >
            <option value="doctors">Doctors</option>
            <option value="beds">Beds</option>
            <option value="ventilators">Ventilators</option>
          </select>
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          />
        </label>
        <label>
          Urgency:
          <select
            value={formData.urgency}
            onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default ResourceForm;