import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ViewPdf({ pdf }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const navigate = useNavigate(); // Use useNavigate to access navigation function

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const generatePDF = () => {
    // Use navigate to navigate to the target component and pass the pdf state as a prop
    navigate('/generate', { state: { pdf } });
  };

  return (
    <div>
      {pdf && (
        <div>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages} in the PDF
          </p>
          <div className="pagination">
            <MDBIcon fas icon="angle-left" onClick={handlePreviousPage} disabled={pageNumber === 1} />
            <MDBIcon fas icon="angle-right" onClick={handleNextPage} disabled={pageNumber === numPages} />
          </div>
          <div className="generate-pdf">
            <button onClick={generatePDF}>Generate PDF</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewPdf;
