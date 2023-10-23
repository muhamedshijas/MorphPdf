import React, { useEffect, useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf';

function ViewPdf({pdf}) {
    const [pageNumber, setPageNumber] = useState(1); // Initialize page number to 1

    const handleNextPage = () => {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };
  
    const handlePreviousPage = () => {
      setPageNumber((prevPageNumber) => prevPageNumber - 1);
    };
    useEffect(() => { pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;});
  return (
    <div>
    <div>
      {pdf && (
        <div>
          <Document file={pdf}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of the PDF
          </p>
          <button onClick={handlePreviousPage}>Previous Page</button>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      )}
    </div>
    </div>
  )
}

export default ViewPdf