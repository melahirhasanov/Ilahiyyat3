// src/components/QuranViewer.jsx
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdfFile from '../../assets/Asan Oxunan Qurani-Kərim.pdf';

const QuranPdf = () => {
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    // PDF.js worker faylını dinamik olaraq yükləyirik
    import('pdfjs-dist/build/pdf.worker.min.js').then((module) => {
      pdfjs.GlobalWorkerOptions.workerSrc = module.default;
    });
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
      <h2>Qur'an PDF Viewer</h2>
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    </div>
  );
};

export default QuranPdf;