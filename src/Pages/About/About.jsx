import React from 'react';
import styles from './About.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Haqqımızda</h1>
      </div>
      
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src="https://i.pinimg.com/736x/9a/be/3a/9abe3afbb606bd510f93868b82edf3f2.jpg" 
            alt="İlahiyyat Məscidi" 
            className={styles.image}
          />
        </div>
        
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Bakı Dövlət Universitetinin tələbə şəhərciyi ərazisində yerləşən <span className={styles.highlight}>"İlahiyyat" məscidinin</span> bünövrəsi <span className={styles.highlight}>1993-cü ildə</span> qoyulmuşdur. Bakı Dövlət Universitetinin İlahiyyat fakültəsi üçün nəzərdə tutulmuş məscidin adı fakültənin adından götürülmüşdür.
          </p>
          
          <p className={styles.text}>
            Məscid <span className={styles.highlight}>Türkiyənin Diyanət Vəqfi</span> tərəfindən <span className={styles.highlight}>Osmanlı memarlığı üslubunda</span> inşa edilmişdir. <span className={styles.highlight}>27 metrlik</span> tək minarəsi və <span className={styles.highlight}>üç mərtəbəli</span> geniş ibadət zalı var.
          </p>
          
          <p className={styles.text}>
            Bakının ən böyük ibadət evlərindən biri olan "İlahiyyat" məscidində eyni vaxtda <span className={styles.highlight}>2500 nəfərin</span> ibadət etməsi üçün bütün zəruri şərait mövcuddur.
          </p>
          
          <p className={styles.imam}>İmam: Vüqar Səmədov</p>
          
          <div className={styles.features}>
            <div className={styles.feature}>Osmanlı memarlığı</div>
            <div className={styles.feature}>27 metrlik minarə</div>
            <div className={styles.feature}>3 mərtəbəli ibadət zalı</div>
            <div className={styles.feature}>2500 nəfərlik tutum</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;