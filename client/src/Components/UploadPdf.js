import React, { useRef, useState } from 'react';

function UploadPdf({ setPDF }) {
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setPDF(file);
        setErrorMessage(null); // Clear any previous error messages
      } else {
        setErrorMessage('Only PDF files are accepted.');
      }
    }
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setPDF(file);
        setErrorMessage(null); // Clear any previous error messages
      } else {
        setErrorMessage('Only PDF files are accepted.');
      }
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div
        className='upload-pdf'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label htmlFor="fileInput" className="custom-file-upload">
          Upload the file here
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept=".pdf"
          ref={fileInputRef}
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default UploadPdf;
