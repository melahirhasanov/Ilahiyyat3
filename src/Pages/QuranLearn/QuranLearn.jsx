import React from 'react';
import styles from './QuranLearn.module.css';
import { FaQuran, FaCalendarAlt, FaChalkboardTeacher, FaUtensils, FaMale, FaFemale } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { MdFamilyRestroom } from 'react-icons/md';

const QuranLearning = () => {
  const teachers = {
    female: [

      { name: "Inci Rüstəmova", specialty: "Təfsir dərsləri,Quran,Hədis" },
      { name: "Rəsulzadə Nərgiz", specialty: "Siyər,Fiqh,Quran"  },
      { name: "Məmişova Aydan", specialty: "Təfsir dərsləri,Quran,Siyər" }
    ],
    male: [
      { name: "Vüqar Səmədov", specialty: "Əlifba & Qiraət,Dini bilgilər" },
      { name: "Seyidov Ağalar", specialty: "Təcvid & Hifz,Dini bilgilər" },
      { name: "Məzahir Məhərrəmov", specialty: "Təcvid,Hifz,Dini bilgilər" },

    ]
  };

  const schedule = [

    { day: "Hər gün(Cümə günü istisna olmaqla)", time: "Quran dərsləri", group: "Qadınlar" },
    { day: "Hər gün(Cümə günü istisna olmaqla)", time: "Quran dərsləri", group: "Kişilər" }

  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1><FaQuran /> Quran Öyrənmə Mərkəzi</h1>
          <p>Möminlər üçün Quran təlimi və tədbirlər</p>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Quranı düzgün oxumağı öyrənin!</h2>

          <p>Həftənin 6 günü quran dərslərimiz(Cümə günü istisna olmaqla), şənbə və bazar günləri övladlarınız üçün xüsusi yemək programı</p>
          <p>Sizdə Təlimlərimizə Qoşularaq Qur'an Oxumağı Öyrənə bilərsiniz</p>
          <p>Gecikmə Tam Vaxtıdır</p>
          <p>Müraciət və daha ətraflı Məlumat üçün : 051-590-14-24</p>
        </div>
      </section>

      <section className={styles.scheduleSection}>
        <h2><FaCalendarAlt /> Dərs Cədvəli</h2>
        <div className={styles.scheduleGrid}>
          {schedule.map((item, index) => (
            <div key={index} className={styles.scheduleCard}>
              <h3>{item.day}</h3>
              <p className={styles.time}>{item.time}</p>
              <p className={styles.group}>{item.group}</p>
              <div className={styles.icon}>
                {item.group.includes("Qadınlar") || item.group.includes("Uşaqlar") ? <FaFemale /> : <FaMale />}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.teachersSection}>
        <h2><FaChalkboardTeacher /> Müəllimlərimiz</h2>
        
        <div className={styles.teacherCategory}>
          <h3><FaFemale /> Qadın Müəllimlər (Qızlar üçün)</h3>
          <div className={styles.teachersGrid}>
            {teachers.female.map((teacher, index) => (
              <div key={index} className={styles.teacherCard}>
                <div className={styles.teacherIcon}><GiTeacher /></div>
                <h4>{teacher.name}</h4>
                <p><strong>İxtisas:</strong> {teacher.specialty}</p>


              </div>
            ))}
          </div>
        </div>

        <div className={styles.teacherCategory}>
          <h3><FaMale /> Kişi Müəllimlər (Oğlanlar üçün)</h3>
          <div className={styles.teachersGrid}>
            {teachers.male.map((teacher, index) => (
              <div key={index} className={styles.teacherCard}>
                <div className={styles.teacherIcon}><GiTeacher /></div>
                <h4>{teacher.name}</h4>
                <p><strong>İxtisas:</strong> {teacher.specialty}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mealSection}>
        <div className={styles.mealContent}>
          <div className={styles.mealText}>
            <h2><FaUtensils /> Şənbə VƏ Bazar Günləri Xüsusi Yemək</h2>
            <p>Hər şənbə və bazat günləri Quran dərslərindən sonra məscidimiz tərəfindən qonaqlarımız üçün xüsusi yemək hazırlanır.</p>
            <p>Bütün şagirdlər üçün pulsuzdur.</p>
          </div>
          <div className={styles.mealImage}>
            <MdFamilyRestroom className={styles.mealIcon} />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Quran Öyrənmə Mərkəzi. Bütün hüquqlar qorunur.</p>
        <p>Əlaqə: +994 XX XXX XX XX | info@quranmerkezi.az</p>
      </footer>
    </div>
  );
};

export default QuranLearning;