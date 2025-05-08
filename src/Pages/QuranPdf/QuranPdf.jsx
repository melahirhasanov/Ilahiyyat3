import React, { useState, useEffect } from 'react';
import styles from './QuranPdf.module.css';

const QuranPdf = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const module = await import('../../assets/Asan Oxunan Qurani-Kərim.pdf');
        const response = await fetch(module.default);
        
        if (!response.ok) throw new Error('PDF yüklənmədi');
        
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (err) {
        console.error('PDF yüklənmə xətası:', err);
        setError(true);
        setIsLoading(false);
      }
    };

    loadPdf();
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const downloadPdf = () => {
    if (!pdfUrl) return;
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Asan-Oxunan-Qurani-Kerim.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`${styles.container} ${isFullscreen ? styles.fullscreen : ''}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Qur'an Oxu</h2>
        <div className={styles.buttonGroup}>
          <button 
            onClick={toggleFullscreen} 
            className={styles.button}
          >
            {isFullscreen ? 'Kiçilt' : 'Tam ekran'}
          </button>
          <button 
            onClick={downloadPdf} 
            className={styles.button}
            disabled={!pdfUrl || error}
          >
            PDF-i Yüklə
          </button>
        </div>
      </div>
      
      {isLoading && !error && (
        <div className={styles.loading}>PDF yüklənir...</div>
      )}
      
      {error && (
        <div className={styles.loading}>
          PDF göstərilərkən xəta baş verdi. Zəhmət olmasa yenidən yoxlayın.
        </div>
      )}
      
      <div className={isFullscreen ? styles.fullscreen : styles.pdfContainer}>
        {pdfUrl && (
          <iframe
            src={pdfUrl}
            className={`${styles.pdfFrame} ${isLoading ? styles.hidden : ''}`}
            title="Quran PDF"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setError(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default QuranPdf;