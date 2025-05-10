import React, { useState } from 'react';
import styles from './Images.module.css';
import { FaExpand, FaTimes } from 'react-icons/fa';

const images = [
  { src: 'https://i.pinimg.com/736x/d0/77/67/d07767f92616a622f25b3a0464e43a89.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/90/20/51/9020518e407c524d0832768365963bf0.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/8d/a8/9d/8da89dcf4b6e82296f4b9c337a7d902e.jpg', size: 'small', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/de/45/c3/de45c39e984459599645d12560ca11a7.jpg', title: 'İlahiyya Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/f0/4e/b2/f04eb2b1af60dfac5001a9f1698165a1.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/c3/df/46/c3df46faf7118112c81d91268eb965d7.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},  
  { src: 'https://i.pinimg.com/736x/f5/47/a5/f547a5041ff912b300d5cfb696a58073.jpg', size: 'medium' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/49/39/e9/4939e9177c27f03df351cdd974e93b6b.jpg', size: 'small' , title: 'İlahiyyat Məscidi'}, 
  { src: 'https://i.pinimg.com/736x/9a/be/3a/9abe3afbb606bd510f93868b82edf3f2.jpg', size: 'medium' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/d0/75/87/d075876798e6534645a8ba03ae2bc873.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},    { src: 'https://i.pinimg.com/736x/d0/77/67/d07767f92616a622f25b3a0464e43a89.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/90/20/51/9020518e407c524d0832768365963bf0.jpg', size: 'medium' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/8d/a8/9d/8da89dcf4b6e82296f4b9c337a7d902e.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/de/45/c3/de45c39e984459599645d12560ca11a7.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/f0/4e/b2/f04eb2b1af60dfac5001a9f1698165a1.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/c3/df/46/c3df46faf7118112c81d91268eb965d7.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},  
  { src: 'https://i.pinimg.com/736x/f5/47/a5/f547a5041ff912b300d5cfb696a58073.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/49/39/e9/4939e9177c27f03df351cdd974e93b6b.jpg', size: 'small' , title: 'İlahiyyat Məscidi'}, 
  { src: 'https://i.pinimg.com/736x/9a/be/3a/9abe3afbb606bd510f93868b82edf3f2.jpg', size: 'medium' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/d0/75/87/d075876798e6534645a8ba03ae2bc873.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},  { src: 'https://i.pinimg.com/736x/d0/77/67/d07767f92616a622f25b3a0464e43a89.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/90/20/51/9020518e407c524d0832768365963bf0.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/8d/a8/9d/8da89dcf4b6e82296f4b9c337a7d902e.jpg', size: 'small', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/de/45/c3/de45c39e984459599645d12560ca11a7.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/f0/4e/b2/f04eb2b1af60dfac5001a9f1698165a1.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/c3/df/46/c3df46faf7118112c81d91268eb965d7.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},  
  { src: 'https://i.pinimg.com/736x/f5/47/a5/f547a5041ff912b300d5cfb696a58073.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/49/39/e9/4939e9177c27f03df351cdd974e93b6b.jpg', size: 'small', title: 'İlahiyyat Məscidi' }, 
  { src: 'https://i.pinimg.com/736x/9a/be/3a/9abe3afbb606bd510f93868b82edf3f2.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/d0/75/87/d075876798e6534645a8ba03ae2bc873.jpg', size: 'small', title: 'İlahiyyat Məscidi' },  { src: 'https://i.pinimg.com/736x/d0/77/67/d07767f92616a622f25b3a0464e43a89.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/90/20/51/9020518e407c524d0832768365963bf0.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/8d/a8/9d/8da89dcf4b6e82296f4b9c337a7d902e.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/d0/77/67/d07767f92616a622f25b3a0464e43a89.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/90/20/51/9020518e407c524d0832768365963bf0.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/8d/a8/9d/8da89dcf4b6e82296f4b9c337a7d902e.jpg', size: 'small', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/de/45/c3/de45c39e984459599645d12560ca11a7.jpg', title: 'İlahiyya Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/f0/4e/b2/f04eb2b1af60dfac5001a9f1698165a1.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/c3/df/46/c3df46faf7118112c81d91268eb965d7.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},  
  { src: 'https://i.pinimg.com/736x/f5/47/a5/f547a5041ff912b300d5cfb696a58073.jpg', size: 'medium' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/49/39/e9/4939e9177c27f03df351cdd974e93b6b.jpg', size: 'small' , title: 'İlahiyyat Məscidi'}, 
  { src: 'https://i.pinimg.com/736x/9a/be/3a/9abe3afbb606bd510f93868b82edf3f2.jpg', size: 'medium' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/d0/75/87/d075876798e6534645a8ba03ae2bc873.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},    { src: 'https://i.pinimg.com/736x/d0/77/67/d07767f92616a622f25b3a0464e43a89.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/90/20/51/9020518e407c524d0832768365963bf0.jpg', size: 'medium' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/8d/a8/9d/8da89dcf4b6e82296f4b9c337a7d902e.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/de/45/c3/de45c39e984459599645d12560ca11a7.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/f0/4e/b2/f04eb2b1af60dfac5001a9f1698165a1.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/c3/df/46/c3df46faf7118112c81d91268eb965d7.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},  
  { src: 'https://i.pinimg.com/736x/f5/47/a5/f547a5041ff912b300d5cfb696a58073.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/49/39/e9/4939e9177c27f03df351cdd974e93b6b.jpg', size: 'small' , title: 'İlahiyyat Məscidi'}, 
  { src: 'https://i.pinimg.com/736x/9a/be/3a/9abe3afbb606bd510f93868b82edf3f2.jpg', size: 'medium' , title: 'İlahiyyat Məscidi'},
  { src: 'https://i.pinimg.com/736x/d0/75/87/d075876798e6534645a8ba03ae2bc873.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},  { src: 'https://i.pinimg.com/736x/d0/77/67/d07767f92616a622f25b3a0464e43a89.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/90/20/51/9020518e407c524d0832768365963bf0.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/8d/a8/9d/8da89dcf4b6e82296f4b9c337a7d902e.jpg', size: 'small', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/de/45/c3/de45c39e984459599645d12560ca11a7.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/f0/4e/b2/f04eb2b1af60dfac5001a9f1698165a1.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/c3/df/46/c3df46faf7118112c81d91268eb965d7.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},  
  { src: 'https://i.pinimg.com/736x/f5/47/a5/f547a5041ff912b300d5cfb696a58073.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/49/39/e9/4939e9177c27f03df351cdd974e93b6b.jpg', size: 'small', title: 'İlahiyyat Məscidi' }, 
  { src: 'https://i.pinimg.com/736x/9a/be/3a/9abe3afbb606bd510f93868b82edf3f2.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/d0/75/87/d075876798e6534645a8ba03ae2bc873.jpg', size: 'small', title: 'İlahiyyat Məscidi' },  { src: 'https://i.pinimg.com/736x/d0/77/67/d07767f92616a622f25b3a0464e43a89.jpg', title: 'İlahiyyat Məscidi', size: 'large' },
  { src: 'https://i.pinimg.com/736x/90/20/51/9020518e407c524d0832768365963bf0.jpg', size: 'medium', title: 'İlahiyyat Məscidi' },
  { src: 'https://i.pinimg.com/736x/8d/a8/9d/8da89dcf4b6e82296f4b9c337a7d902e.jpg', size: 'small' , title: 'İlahiyyat Məscidi'},
];

const IMAGES_PER_PAGE = 10;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedImage, setExpandedImage] = useState(null);
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const selectedImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleExpand = (img) => {
    setExpandedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseExpanded = (e) => {
    // Only close if clicked outside the image or on the close button
    if (!e.target.closest(`.${styles.expandedContent}`) || e.target.closest(`.${styles.closeButton}`)) {
      setExpandedImage(null);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className={styles.container}>
        <h1 className={styles.Header}>Məscidimizin Fotoları</h1>
      <div className={styles.gallery}>
        {selectedImages.map((img, index) => (
          <div 
            key={`${startIndex + index}`} 
            className={`${styles.imageWrapper} ${styles[img.size]}`}
          >
            <img 
              src={img.src} 
              alt={`img-${startIndex + index}`} 
              className={styles.image} 
            />
            
            {/* Zoom icon overlay */}
            <div 
              className={styles.zoomOverlay}
              onClick={() => handleExpand(img)}
            >
              <FaExpand className={styles.zoomIcon} />
            </div>
            
            {img.title && (
              <div className={styles.titleOverlay}>
                <div className={styles.text}>{img.title}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            className={`${styles.pageButton} ${currentPage === pageNum ? styles.active : ''}`}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>

      {expandedImage && (
  <div className={styles.expandedOverlay} onClick={handleCloseExpanded}>
    <div className={styles.expandedImageContainer}>
      <img 
        src={expandedImage.src} 
        alt="expanded" 
        className={styles.expandedImage} 
      />
      {expandedImage.title && (
        <div className={styles.expandedTitle}>{expandedImage.title}</div>
      )}
    </div>
    <button className={styles.closeButton} onClick={handleCloseExpanded}>
      <FaTimes />
    </button>
  </div>
)}
    </div>
  );
};

export default Gallery;