import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ imageUrl = "https://i.pinimg.com/736x/de/45/c3/de45c39e984459599645d12560ca11a7.jpg", altText = "Müasir dizayn şəkli" }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <img 
          src={imageUrl} 
          alt={altText} 
          className={styles.responsiveImage}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
          }}
        />
      </div>
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>Məscidimizin Qapısı Sizədə Açıqdır</h3>
        <p className={styles.cardDescription}>Hər gün Xidmətinizdəyik</p>
      </div>
    </div>
  );
};

export default ImageCard;