import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './FileDropBox.css';

const FileDropBox = ({ clearImage, setClearImage, setUploadedFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
    }
  }, [setUploadedFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    if (clearImage) {
      setUploadedFile(null);
      setClearImage(false);
    }
  }, [clearImage, setUploadedFile,setClearImage]);

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the image here...</p> : <p>Drag & drop an image, or click to select one</p>}
    </div>
    
  );
};

export default FileDropBox;
