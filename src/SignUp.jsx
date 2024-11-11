import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const images = [
  'https://th.bing.com/th/id/OIP.cGWmQuhX3NVB2SF2lB-28wHaFj?w=188&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',  
  'https://th.bing.com/th/id/OIP.54lzvSYm9sYvTGzA_ZdPFQHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7 ', 
  'https://th.bing.com/th/id/OIP.WpRmFAMvZIWjJQW3TGSktgHaEo?w=309&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP._0ioMlL__mSzX8KrPD5gcwHaEo?w=301&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
];

function SignUp() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (userId && password && selectedImage) {
      localStorage.setItem('userId', userId);
      localStorage.setItem('password', password);
      localStorage.setItem('selectedImage', selectedImage);
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields and select an image.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <div className="image-selection">
          <h3>Select an Image</h3>
          <div className="images">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Option ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? 'selected' : ''}
              />
            ))}
          </div>
        </div>
            
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
