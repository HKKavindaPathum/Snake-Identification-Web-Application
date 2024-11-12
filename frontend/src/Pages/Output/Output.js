import React from 'react';
import { useLocation } from 'react-router-dom';
import './Output.css';
import backgroundImage from '../../Assets/background.jpg';

const Output = () => {
  const location = useLocation();
  const { snake, file } = location.state || {};

  if (!file || !snake) {
    return <div>No image or snake data provided.</div>;
  }

  return (
    <div className="output"style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1>Snake Identification Result</h1>
      <img src={URL.createObjectURL(new Blob([file]))} alt="Uploaded Snake" className="uploaded-image" />
      <h2>{snake.name}</h2>
      <ul className="snake-details">
        <li><strong>Venom:</strong> {snake.venom}</li>
        <li><strong>Region:</strong> {snake.region}</li>
        <li><strong>Danger Level:</strong> {snake.danger_level}</li>
      </ul>
    </div>
  );
};

export default Output;  // Change this to default export