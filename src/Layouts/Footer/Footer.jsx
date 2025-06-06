import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaMosque } from 'react-icons/fa';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      {/* Arxa fon şəkli */}
      <div className={style.backgroundOverlay}></div>
      
      {/* Mərkəzdə məscid ikonu */}
      <div className={style.mosqueIconContainer}>
        <FaMosque className={style.mosqueIcon} />
      </div>

      <div className={style.footerContent}>
        {/* Sol sütun - Əlaqə məlumatları */}
        <div className={style.footerSection}>
          <h4 className={style.sectionTitle}>Əlaqə</h4>
          <ul className={style.contactList}>
            <li>
              <FaMapMarkerAlt className={style.contactIcon} />
              <span>Bakı şəhəri, İlahiyyat Məscidi</span>
            </li>
            <li>
              <FaPhone className={style.contactIcon} />
              <span>+994 55  322  67 63</span>
            </li>
            <li>
              <FaClock className={style.contactIcon} />
              <span>Hər gün 05:00 - 23:00</span>
            </li>
          </ul>
        </div>

        {/* Orta sütun - Məscid adı */}
        <div className={style.footerSection}>
          <div className={style.mosqueTitle}>
            <h3 className={style.logoText}>İlahiyyat Məscidi</h3>
            <p className={style.missionText}>
              "Hər kəsə xoş məkan, hər kəsə Allahın mərhəməti"
            </p>
          </div>
        </div>

        {/* Sağ sütun - Sosial şəbəkələr */}
        <div className={style.footerSection}>
          <h4 className={style.sectionTitle}>Bizi izləyin</h4>
          <div className={style.socialLinks}>
            <a href="https://www.facebook.com/p/%C4%B0lahiyyat-m%C9%99scidi-100067997245266/?locale=az_AZ" className={style.socialLink}>Facebook</a>
            <a href="https://www.instagram.com/ilahiyyatmscidi/" className={style.socialLink}>Instagram</a>
            <a href="https://www.youtube.com/@%C4%B0lahiyyat1985" className={style.socialLink}>YouTube</a>
          </div>
        </div>
      </div>

      {/* Copyright hissəsi */}
      <div className={style.copyright}>
        <p>© {new Date().getFullYear()} İlahiyyat Məscidi. Bütün hüquqlar qorunur.</p>
      </div>
    </footer>
  );
};

export default Footer;