import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import './style.css'
import UploadPdf from './UploadPdf'
import ViewPdf from './ViewPdf'

function Home() {
    const [pdf, setPDF] = useState(null);
    useEffect(() => {
        // You can use this effect to load the PDF into the viewer when 'pdf' state changes.
    }, [pdf]);
    return (
        <div>
            <div className="main-section">
                <Navbar />
                <div className="pdf-section">
                    {
                        pdf ? <ViewPdf pdf={pdf}  /> : <UploadPdf  setPDF={setPDF}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home