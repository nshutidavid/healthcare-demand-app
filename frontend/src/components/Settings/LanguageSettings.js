import React, { useState } from 'react';
import './LanguageSettings.css';

function LanguageSettings() {
  const [language, setLanguage] = useState('english');

  const handleChange = (e) => {
    setLanguage(e.target.value);
    console.log('Language Changed:', e.target.value);
    // Add logic to change the app's language
  };

  return (
    <div className="language-settings">
      <h3>Language Settings</h3>
      <label>
        <select value={language} onChange={handleChange}>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="kinyarwanda">Kinyarwanda</option>
        </select>
      </label>
    </div>
  );
}

export default LanguageSettings;