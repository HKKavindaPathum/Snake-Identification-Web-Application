import React, { useState } from 'react';
import backgroundImage from '../../Assets/background.jpg';
import FileDropBox from '../../Components/FileDropBox/FileDropBox';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Home = () => {
  const navigate = useNavigate();
  const [clearImage, setClearImage] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSearchClick = () => {
    if (uploadedFile) {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      // Send the file to the backend
      axios.post('http://127.0.0.1:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        // If successful, navigate to the output page with the returned snake data
        const snakeInfo = response.data.snake;
        navigate('/output', { state: { file: uploadedFile, snake: snakeInfo } });
      })
      .catch(error => {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
      });
    } else {
      alert("Please upload an image first");
    }
  };

  const handleClearClick = () => {
    setClearImage(true);
    setUploadedFile(null); // Clear the uploaded file from state
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header className="App-header">
        <h1>Upload Snake Image Here</h1>
        
        {/* FileDropBox for uploading */}
        <FileDropBox clearImage={clearImage} setClearImage={setClearImage} setUploadedFile={setUploadedFile} />

        {/* Display image preview if an image is selected */}
        {uploadedFile && (
          <div className="image-preview">
            <h3>Selected Image Preview:</h3>
            <img src={URL.createObjectURL(uploadedFile)} alt="Selected" className="preview-image" />
          </div>
        )}

        <div className="buttons-container">
          <div className='search'>
          <button onClick={handleSearchClick}>Search</button>
          </div>
          <div className='clear'>
          <button onClick={handleClearClick}>Clear</button>
          </div>
        </div>
      </header>
    </div>
  );
};
