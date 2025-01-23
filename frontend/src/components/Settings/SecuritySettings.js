import React, { useState } from 'react';
import './SecuritySettings.css';

function SecuritySettings() {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleToggle = () => {
    setTwoFactorAuth(!twoFactorAuth);
    console.log('Two-Factor Authentication:', !twoFactorAuth);
    // Add logic to enable/disable two-factor authentication
  };

  return (
    <div className="security-settings">
      <h3>Security Settings</h3>
      <label>
        <input
          type="checkbox"
          checked={twoFactorAuth}
          onChange={handleToggle}
        />
        Enable Two-Factor Authentication
      </label>
    </div>
  );
}

export default SecuritySettings;