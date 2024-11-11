import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';

const images = [
  'https://th.bing.com/th/id/OIP.cGWmQuhX3NVB2SF2lB-28wHaFj?w=188&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',  
  'https://th.bing.com/th/id/OIP.54lzvSYm9sYvTGzA_ZdPFQHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7 ', 
  'https://th.bing.com/th/id/OIP.WpRmFAMvZIWjJQW3TGSktgHaEo?w=309&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP._0ioMlL__mSzX8KrPD5gcwHaEo?w=301&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
];


function SignIn() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSelectionVisible, setImageSelectionVisible] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    const storedUserId = localStorage.getItem('userId');
    const storedPassword = localStorage.getItem('password');
    const storedImage = localStorage.getItem('selectedImage');

    if (userId === storedUserId && password === storedPassword) {
      alert('Please select your image to proceed.');
      setImageSelectionVisible(true);
    } else {
      alert('Wrong User ID or Password. Please try again.');
    }
  };

  const handleImageSelect = (img) => {
    const storedImage = localStorage.getItem('selectedImage');
    if (img === storedImage) {
      alert('Login successful!');
      setSelectedImage(img); 
      navigate('/dashboard');
    } else {
      alert('Invalid image selection. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign In</h2>
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

        <button onClick={handleSignIn}>Sign In</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>

        {imageSelectionVisible && (
          <div className="image-selection">
            <h3>Select Your Image</h3>
            <div className="images">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Option ${index + 1}`}
                  onClick={() => handleImageSelect(img)}
                  className={selectedImage === img ? 'selected' : ''}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;
