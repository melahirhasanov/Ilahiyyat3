import React from 'react';
import { 
  FaPrayingHands, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaClock,
  FaMosque
} from 'react-icons/fa';
import styles from './Contact.module.css';
import ImageCard from './ImageCard';

const ContactSection = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionHeader}>
          <FaPrayingHands className={styles.headerIcon} />
          Bizimlə Əlaqə
        </h2>
        
        {/* Xəritə hissəsi */}
        <div className={styles.mapSection}>
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.046928225745!2d49.805526568153056!3d40.37508938201237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307deeb49b9191%3A0x6caf84652558a590!2zxLBsYWhpeXlhdCBNyZlzY2lkaQ!5e0!3m2!1saz!2saz!4v1746486329593!5m2!1saz!2saz" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="İlahiyyat Məscidi Xəritə"
            ></iframe>
          </div>
        </div>
        
        {/* Məscid məlumatları */}
        <div className={styles.mosqueInfo}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              <FaMosque className={styles.titleIcon} />
              İlahiyyat Məscidi
            </h3>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <FaMapMarkerAlt className={styles.infoIcon} />
                <div>
                  <p className={styles.infoLabel}>Ünvan:</p>
                  <p className={styles.infoText}>Bakı şəhəri, İlahiyyat Məscidi</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <FaPhone className={styles.infoIcon} />
                <div>
                  <p className={styles.infoLabel}>Telefon:</p>
                  <p className={styles.infoText}>+994 12 345 67 89</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <FaEnvelope className={styles.infoIcon} />
                <div>
                  <p className={styles.infoLabel}>Email:</p>
                  <p className={styles.infoText}>info@ilahiyyatmescidi.az</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <FaClock className={styles.infoIcon} />
                <div>
                  <p className={styles.infoLabel}>İş saatları:</p>
                  <p className={styles.infoText}>Hər gün 08:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Əlaqə formu */}
        <div className={styles.formSection}>
          <form className={styles.contactForm}>
            <h3 className={styles.formTitle}>Bizə Mesaj Göndərin</h3>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Adınız" 
                  className={styles.formInput}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email ünvanınız" 
                  className={styles.formInput}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <input 
                type="tel" 
                id="phone" 
                placeholder="Telefon nömrəniz" 
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Mesajınız..." 
                className={styles.formTextarea}
                required
                style={{resize:"none"}}
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Mesajı Göndər
            </button>
          </form>
        </div>
      </div>
      <ImageCard/>
    </div>
  );
};

export default ContactSection;