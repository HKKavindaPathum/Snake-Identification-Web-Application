import React from 'react';
import { useLocation } from 'react-router-dom';
import './Output.css';

const Output = () => {
  const location = useLocation();
  const { snake, file } = location.state || {};

  if (!file || !snake) {
    return <div>No image or snake data provided.</div>;
  }

  return (
    <div className='output'>
      <div className='output-content'>
        <h1>Snake Identification Result</h1>
        <img src={URL.createObjectURL(new Blob([file]))} alt="Uploaded Snake" className="uploaded-image" />
        <div className="output-details">
          <p><strong>Scientific Name:</strong> <span>{snake.scientificName}</span></p>
          <p><strong>Common Name:</strong> <span>{snake.commonName}</span></p>
          <p><strong>Local Name (Sri Lanka):</strong> <span>{snake.localName}</span></p>
          <p><strong>Description:</strong> <span>{snake.description}</span></p>
          <p><strong>Habitat:</strong> <span>{snake.habitat}</span></p>
          <p><strong>Geographical Range:</strong> <span>{snake.geographicalRange}</span></p>
          <p><strong>Venom Status:</strong> <span>{snake.venomStatus}</span></p>
          <p><strong>Diet:</strong> <span>{snake.diet}</span></p>
          <p><strong>Behavior:</strong> <span>{snake.behavior}</span></p>
          <p><strong>Reproduction:</strong> <span>{snake.reproduction}</span></p>
          <p><strong>Lifespan:</strong> <span>{snake.lifespan}</span></p>
          <p><strong>Conservation Status:</strong> <span>{snake.conservationStatus}</span></p>
          <p><strong>Danger Level:</strong> <span>{snake.dangerLevel}</span></p>
        </div>
      </div>
    </div>

  );
};

export default Output;  // Change this to default export