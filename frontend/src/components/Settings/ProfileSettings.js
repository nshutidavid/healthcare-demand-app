import React, { useState } from 'react';
import './ProfileSettings.css';

function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated:', profile);
  };

  return (
    <div className="profile-settings">
      <h3>Profile Settings</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default ProfileSettings;