import React, { useState } from 'react';
import './NotificationSettings.css';

function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    inApp: true,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Notification Preferences Updated:', notifications);
  };

  return (
    <div className="notification-settings">
      <h3>Notification Settings</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="email"
            checked={notifications.email}
            onChange={handleChange}
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="sms"
            checked={notifications.sms}
            onChange={handleChange}
          />
          SMS Notifications
        </label>
        <label>
          <input
            type="checkbox"
            name="inApp"
            checked={notifications.inApp}
            onChange={handleChange}
          />
          In-App Notifications
        </label>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
}

export default NotificationSettings;