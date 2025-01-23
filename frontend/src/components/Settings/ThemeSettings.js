import React, { useState } from 'react';
import './ThemeSettings.css';

function ThemeSettings() {
  const [theme, setTheme] = useState('light');

  const handleChange = (e) => {
    setTheme(e.target.value);
    console.log('Theme Changed:', e.target.value);
    // Add logic to apply the theme globally
  };

  return (
    <div className="theme-settings">
      <h3>Theme Settings</h3>
      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === 'light'}
          onChange={handleChange}
        />
        Light Theme
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={handleChange}
        />
        Dark Theme
      </label>
    </div>
  );
}

export default ThemeSettings;