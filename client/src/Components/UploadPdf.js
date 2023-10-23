import React from 'react'

function UploadPdf({ setPDF }) {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Process the file (e.g., validate it as a PDF) and set it to the state.
            setPDF(file);
        }
    }
    return (
        <div>
            <div className='upload-pdf'>
                <label for="fileInput" className="custom-file-upload">
                    Choose a file
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }}  onChange={handleFileChange}/>
            </div>
        </div>
    )
}

export default UploadPdf