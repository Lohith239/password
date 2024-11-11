import React, { useState } from 'react';
import './App.css';

function Dashboard() {
  const [userData, setUserData] = useState('');

  const handleSaveData = () => {
    if (userData) {
      console.log('User Data:', userData);
      alert('Data saved successfully!');
    } else {
      alert('Please enter some data before saving.');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-form">
        <h2>Enter Your Data</h2>
        <textarea
          value={userData}
          onChange={(e) => setUserData(e.target.value)}
          placeholder="Enter additional information here"
        />
        <button onClick={handleSaveData}>Save</button>
      </div>
    </div>
  );
}

export default Dashboard;
