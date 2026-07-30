import React, { useState } from 'react';

export default function SettingsForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved", { username, email, notifications });
    alert("Settings saved!");
  };

  return (
    <div>
      <h1>User Settings</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Receive Notifications</label>
          <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
