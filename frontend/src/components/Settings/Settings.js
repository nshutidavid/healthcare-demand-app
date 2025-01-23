import React from 'react';
import ProfileSettings from './ProfileSettings';
import NotificationSettings from './NotificationSettings';
import ThemeSettings from './ThemeSettings';
import LanguageSettings from './LanguageSettings';
import DataExport from './DataExport';
import SecuritySettings from './SecuritySettings';
import './Settings.css';

function Settings() {
  return (
    <div className="settings">
      <h2>Settings</h2>

      {/* Profile Settings */}
      <div className="settings-section">
        <ProfileSettings />
      </div>

      {/* Notification Settings */}
      <div className="settings-section">
        <NotificationSettings />
      </div>

      {/* Theme Settings */}
      <div className="settings-section">
        <ThemeSettings />
      </div>

      {/* Language Settings */}
      <div className="settings-section">
        <LanguageSettings />
      </div>

      {/* Data Export */}
      <div className="settings-section">
        <DataExport />
      </div>

      {/* Security Settings */}
      <div className="settings-section">
        <SecuritySettings />
      </div>
    </div>
  );
}

export default Settings;