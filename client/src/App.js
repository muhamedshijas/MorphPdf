import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFReader } from 'react-pdf-js';
import './App.css'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import GeneratePdf from './Components/GeneratePdf';

function App() {
  return (
    <MDBContainer fluid>
      <div className="main-section">
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/generate' element={<GeneratePdf/>}/>
        </Routes>
      </div>
    </MDBContainer>
  );
}

export default App;
