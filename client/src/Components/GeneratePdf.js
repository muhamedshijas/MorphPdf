import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';

function GeneratePDF() {
    const [numPages, setNumPages] = useState(0);
    const location = useLocation();
    const pdf = location.state.pdf;
    const [selectedPages, setSelectedPages] = useState([]);

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const togglePageSelection = (pageNumber) => {
        if (selectedPages.includes(pageNumber)) {
            setSelectedPages(selectedPages.filter((page) => page !== pageNumber));
        } else {
            setSelectedPages([...selectedPages, pageNumber]);
        }
    };

    const generateSelectedPDF = () => {
        const doc = new jsPDF();

        selectedPages.forEach((pageNumber) => {
            pdf.getPage(pageNumber).then((page) => {
                page.getTextContent().then((textContent) => {
                    doc.addPage();
                    doc.text(textContent.items.map((item) => item.str).join(' '), 10, 10);
                });
            });
        });

        doc.save('selected_pages.pdf');
    };

    return (
        <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from({ length: numPages }, (_, index) => (
                    <div key={index + 1}>
                        <Page
                            pageNumber={index + 1}
                            width={200}
                            onClick={() => togglePageSelection(index + 1)}
                        />
                        <input
                            type="checkbox"
                            checked={selectedPages.includes(index + 1)}
                            onChange={() => togglePageSelection(index + 1)}
                        />
                    </div>
                )}
            </Document>
            <div className="page-table">
                <table>
                    <thead>
                        <tr>
                            <th>Page Number</th>
                            <th>Page Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: numPages }, (_, index) => (
                            <tr key={index + 1}>
                                <td>Page {index + 1}</td>
                                <td>
                                    <div className="page-preview">
                                        <Page pageNumber={index + 1} width={100} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={generateSelectedPDF}>Generate PDF with Selected Pages</button>
        </div>
    );
}

export default GeneratePDF;
