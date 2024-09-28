import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import samplePDF from '../assets/PDF/Politique de confidentialité.pdf';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDC = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <Navigation/>
            <div className={"PDFContainer"}>
                <h2>Politique de Confidentialité</h2>
                <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber}/>
                </Document>
                <p>
                    Page {pageNumber} sur {numPages}
                </p>
                <div className={"controls"}>
                    <button
                        disabled={pageNumber <= 1}
                        onClick={() => setPageNumber(pageNumber - 1)}
                    >
                        Précédente
                    </button>
                    <button
                        disabled={pageNumber >= numPages}
                        onClick={() => setPageNumber(pageNumber + 1)}
                    >
                        Suivante
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PDC;
