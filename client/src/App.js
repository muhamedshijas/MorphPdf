import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFReader } from 'react-pdf-js';
import './App.css'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Home from './Components/Home';

function App() {
  const [pdfFile, setPDFFile] = useState(null);
  const [pageNumber, setPageNumber] = useState(2); // Initialize page number to 1

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPDFFile(file);
  };

 

  return (
    <MDBContainer fluid>
      <div className="main-section">
      <Home/>
      </div>
    </MDBContainer>
  );
}

export default App;
