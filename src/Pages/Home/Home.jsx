import React, { useEffect, useState } from 'react';
import style from "./Home.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaPrayingHands } from 'react-icons/fa'; // Bu sətri əlavə edin
import { FaMapMarkerAlt } from 'react-icons/fa'; // Bu sətri əlavə edin
import { FaPhone } from 'react-icons/fa'; // Bu sətri əlavə edin
import { FaEnvelope } from 'react-icons/fa'; // Bu sətri əlavə edin

import {Grid, Navigation, Pagination, Autoplay} from "swiper/modules";

const Home = () => {
    const [prayerTimes, setPrayerTimes] = useState({
        fajr: '--',
        sunrise: '--',
        dhuhr: '--',
        asr: '--',
        maghrib: '--',
        isha: '--'
    });
    
    
    const [currentDate, setCurrentDate] = useState('');
    const [currentPrayer, setCurrentPrayer] = useState('');
    const [timeLeft, setTimeLeft] = useState({ hours: '--', minutes: '--', seconds: '--' });
    const [nextPrayer, setNextPrayer] = useState({ name: '', displayName: '' });

    useEffect(() => {
        updateCurrentDate();
        fetchPrayerTimes();
        
        // Saniyəlik yeniləmə üçün interval qur
        const timer = setInterval(() => {
            updateCurrentTime();
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    const updateCurrentDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const now = new Date();
        const dateStr = now.toLocaleDateString('az-AZ', options);
        setCurrentDate(dateStr);
    };

    const fetchPrayerTimes = async () => {
        try {
            const response = await fetch('https://api.jsonbin.io/v3/b/681641458561e97a500d1cd7', {
                headers: {
                    'X-Master-Key': '$2a$10$TirNs59Qi3Qh3dKcRHAqh.TSvGR3IaH72vYPOM9AYWc0Bo/iJZawC'
                }
            });
            const data = await response.json();
            
            const today = new Date();
            const currentDay = today.getDate();
            
            const todayData = data.record.prayerTimes.find(item => {
                const [day] = item.date.split(' ');
                return parseInt(day) === currentDay;
            });
            
            if (todayData) {
                const newPrayerTimes = {
                    fajr: todayData.fajr,
                    sunrise: todayData.sunrise,
                    dhuhr: todayData.dhuhr,
                    asr: todayData.asr,
                    maghrib: todayData.maghrib,
                    isha: todayData.isha
                };
                setPrayerTimes(newPrayerTimes);
                updateCurrentTime(newPrayerTimes);
            } else {
                console.error('Bugünkü namaz vaxtları tapılmadı');
                const defaultTimes = {
                    fajr: '04:05',
                    sunrise: '05:37',
                    dhuhr: '12:37',
                    asr: '17:34',
                    maghrib: '19:54',
                    isha: '21:03'
                };
                setPrayerTimes(defaultTimes);
                updateCurrentTime(defaultTimes);
            }
        } catch (error) {
            console.error('Namaz vaxtları yüklənərkən xəta baş verdi:', error);
            const defaultTimes = {
                fajr: '04:05',
                sunrise: '05:37',
                dhuhr: '12:37',
                asr: '17:34',
                maghrib: '19:54',
                isha: '21:03'
            };
            setPrayerTimes(defaultTimes);
            updateCurrentTime(defaultTimes);
        }
    };

    const updateCurrentTime = (prayerData = prayerTimes) => {
        const now = new Date();
        const currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        
        const prayers = [
            { name: 'fajr', displayName: 'Sübh', time: prayerData.fajr },
            { name: 'sunrise', displayName: 'Günəş', time: prayerData.sunrise },
            { name: 'dhuhr', displayName: 'Zöhr', time: prayerData.dhuhr },
            { name: 'asr', displayName: 'Əsr', time: prayerData.asr },
            { name: 'maghrib', displayName: 'Məğrib', time: prayerData.maghrib },
            { name: 'isha', displayName: 'İşa', time: prayerData.isha }
        ];
        
        // Namaz vaxtlarını saniyəyə çevir
        const prayerTimesInSeconds = prayers.map(prayer => {
            const [hours, minutes] = prayer.time.split(':').map(Number);
            return {
                ...prayer,
                timeInSeconds: hours * 3600 + minutes * 60
            };
        });
        
        // Cari və növbəti namazı tap
        let currentPrayerObj = null;
        let nextPrayerObj = null;
        
        // Əgər cari vaxt bütün namaz vaxtlarından sonradırsa, növbəti günün sübh namazına qədər
        if (currentTime >= prayerTimesInSeconds[prayerTimesInSeconds.length - 1].timeInSeconds) {
            currentPrayerObj = prayerTimesInSeconds[prayerTimesInSeconds.length - 1];
            nextPrayerObj = { 
                ...prayerTimesInSeconds[0], 
                timeInSeconds: prayerTimesInSeconds[0].timeInSeconds + 24 * 3600 // Növbəti günə əlavə et
            };
        } else {
            for (let i = 0; i < prayerTimesInSeconds.length; i++) {
                if (currentTime < prayerTimesInSeconds[i].timeInSeconds) {
                    nextPrayerObj = prayerTimesInSeconds[i];
                    currentPrayerObj = i > 0 ? prayerTimesInSeconds[i - 1] : null;
                    break;
                }
            }
        }
        
        // Cari namazı təyin et
        setCurrentPrayer(currentPrayerObj?.name || '');
        
        // Növbəti namazı təyin et və qalan vaxtı hesabla
        if (nextPrayerObj) {
            setNextPrayer({
                name: nextPrayerObj.name,
                displayName: nextPrayerObj.displayName
            });
            
            const timeLeftInSeconds = nextPrayerObj.timeInSeconds - currentTime;
            const hoursLeft = Math.floor(timeLeftInSeconds / 3600);
            const minutesLeft = Math.floor((timeLeftInSeconds % 3600) / 60);
            const secondsLeft = timeLeftInSeconds % 60;
            
            setTimeLeft({
                hours: hoursLeft.toString().padStart(2, '0'),
                minutes: minutesLeft.toString().padStart(2, '0'),
                seconds: secondsLeft.toString().padStart(2, '0')
            });
        }
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitStatus, setSubmitStatus] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Burada form məlumatlarını göndərə bilərsiniz
        console.log('Form göndərildi:', formData);
        
        // Simulyasiya üçün setTimeout
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          
          // 5 saniyədən sonra statusu sıfırla
          setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
      };

    return (
        <>
            <Swiper 
                style={{marginTop:"-60px"}} 
                className={style.Swiper10} 
                autoplay={{delay:4000,disableOnInteraction:false}} 
                spaceBetween={50} 
                slidesPerView={1} 
                pagination={{clickable:true}} 
                scrollbar={{draggable:true}} 
                modules={[Navigation,Pagination,Autoplay]}
            >
                <SwiperSlide>
                    <img className={style.SwiperImg10} src="https://i.pinimg.com/736x/8d/a8/9d/8da89dcf4b6e82296f4b9c337a7d902e.jpg" alt="" />
                    <div className={style.SwipeInfoDiv10}>
                        <h1 className={style.voucherSwipe10} style={{color:"orange",backgroundColor:"hsla(0, 0.00%, 100.00%, 0.70)",borderRadius:"20px",padding:"10px"}}>
                            Tövbe Sürəsi, 18. Ayə
                            Mənası: "Allahın məscidlərini yalnız Allaha və Axirət gününə iman gətirən, namaz qılan, zəkat verən və yalnız Allahdan qorxanlar abad edər. Umulur ki, onlar doğru yola çıxanlardan olsunlar."
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className={style.SwiperImg10} src="https://i.pinimg.com/736x/40/80/d0/4080d048b8006c6c43d9e986db61c0cf.jpg" alt="" />
                    <div className={style.SwipeInfoDiv10}>
                        <h1 className={style.voucherSwipe10} style={{color:"orange",backgroundColor:"rgba(255,255,255,0.7)",borderRadius:"20px",padding:"10px"}}>
                            Məscidimizdə Qur'an təlimi mövcuddur.
                        </h1>
                        <button className={style.baton10}>Daha çox...</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className={style.SwiperImg10} src="https://i.pinimg.com/736x/90/20/51/9020518e407c524d0832768365963bf0.jpg" alt="" />
                    <div className={style.SwipeInfoDiv10}>
                        <h1 className={style.voucherSwipe10} style={{color:"orange",backgroundColor:"rgba(255,255,255,0.7)",borderRadius:"20px",padding:"10px"}}>
                        Məscidə Gözəlliklə Gəlmək:
"Ey Adəm oğulları! Hər məscidə gedəndə zinətinizi götürün (gözəl geyinin)..."
(Ə'raf surəsi, 31-ci ayə)
                        </h1>
                    </div>
                </SwiperSlide>
            </Swiper>
            
            <div className={style.namazContainer}>
                <div className={style.header}>
                    <h1>Bakı Namaz Vaxtları</h1>
                    <p>{currentDate}</p>
                </div>
                
                {nextPrayer.name && (
                    <div className={style.timeLeftDisplay}>
                        Növbəti namaz (<strong>{nextPrayer.displayName}</strong>) üçün qalan zaman: 
                        <strong> {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</strong>
                    </div>
                )}
                
                <div className={style.timesContainer}>
                    <div className={`${style.prayerTime} ${currentPrayer === 'fajr' ? style.currentTime : ''}`}>
                        <span className={style.prayerName}>Sübh</span>
                        <span className={style.prayerTimeValue}>
                            {prayerTimes.fajr}
                        </span>
                    </div>
                    <div className={style.prayerTime}>
                        <span className={style.prayerName}>Günəş</span>
                        <span className={style.prayerTimeValue}>
                            {prayerTimes.sunrise}
                        </span>
                    </div>
                    <div className={`${style.prayerTime} ${currentPrayer === 'dhuhr' ? style.currentTime : ''}`}>
                        <span className={style.prayerName}>Zöhr</span>
                        <span className={style.prayerTimeValue}>
                            {prayerTimes.dhuhr}
                        </span>
                    </div>
                    <div className={`${style.prayerTime} ${currentPrayer === 'asr' ? style.currentTime : ''}`}>
                        <span className={style.prayerName}>Əsr</span>
                        <span className={style.prayerTimeValue}>
                            {prayerTimes.asr}
                        </span>
                    </div>
                    <div className={`${style.prayerTime} ${currentPrayer === 'maghrib' ? style.currentTime : ''}`}>
                        <span className={style.prayerName}>Məğrib</span>
                        <span className={style.prayerTimeValue}>
                            {prayerTimes.maghrib}
                        </span>
                    </div>
                    <div className={`${style.prayerTime} ${currentPrayer === 'isha' ? style.currentTime : ''}`}>
                        <span className={style.prayerName}>İşa</span>
                        <span className={style.prayerTimeValue}>
                            {prayerTimes.isha}
                        </span>
                    </div>
                </div>
                
                <div className={style.footer}>
                    Vaxtlar dəqiqdir | Bakı şəhəri
                </div>
            </div>
            <div className={style.Categories}>
                <div className={style.CategoriesOne}><i id={style.Ids} className="fa-solid fa-person-praying"></i><h3 className={style.StilCategories}>Namaz</h3></div>
                <div className={style.CategoriesTwo}><i id={style.Idss}  className="fa-solid fa-book-quran"></i><h3 className={style.StilCategoriess}>Qurani Kərim</h3></div>
                <div className={style.CategoriesThree}><i id={style.Idsss} className="fa-solid fa-mosque"></i><h3 className={style.StilCategoriesss}>Xütbələr</h3></div>
            </div>
            <div className={style.contactSection}>
      <h2 className={style.sectionHeader}>
        <FaPrayingHands className={style.headerIcon} />
        Bizimlə Əlaqə
      </h2>
      
      <div className={style.contactContainer}>
        {/* Əlaqə məlumatları */}
        <div className={style.contactInfo}>
          <div className={style.infoCard}>
            <h3 className={style.infoTitle}>İlahiyyat Məscidi</h3>
            
            <div className={style.infoItem}>
              <FaMapMarkerAlt className={style.infoIcon} />
              <div>
                <p className={style.infoLabel}>Ünvan:</p>
                <p className={style.infoText}>Bakı şəhəri, İlahiyyat Məscidi</p>
              </div>
            </div>
            
            <div className={style.infoItem}>
              <FaPhone className={style.infoIcon} />
              <div>
                <p className={style.infoLabel}>Telefon:</p>
                <p className={style.infoText}>+994 12 345 67 89</p>
              </div>
            </div>
            
            <div className={style.infoItem}>
              <FaEnvelope className={style.infoIcon} />
              <div>
                <p className={style.infoLabel}>Email:</p>
                <p className={style.infoText}>info@ilahiyyatmescidi.az</p>
              </div>
            </div>
            
            <div className={style.mapContainer}>
                
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.046928225745!2d49.805526568153056!3d40.37508958201237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307deeb49b9191%3A0x6caf84652558a590!2zxLBsYWhpeXlhdCBNyZlzY2lkaQ!5e0!3m2!1saz!2saz!4v1746486329593!5m2!1saz!2saz" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="İlahiyyat Məscidi Xəritə"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Əlaqə formu */}
        <div className={style.contactFormWrapper}>
          <form className={style.contactForm}>
            <h3 className={style.formTitle}>Mesaj Göndər</h3>
            
            <div className={style.formGroup}>
              <input 
                type="text" 
                id="name" 
                placeholder="Adınız" 
                className={style.formInput}
                required
              />
            </div>
            
            <div className={style.formGroup}>
              <input 
                type="email" 
                id="email" 
                placeholder="Email ünvanınız" 
                className={style.formInput}
                required
              />
            </div>
            
            <div className={style.formGroup}>
              <input 
                type="tel" 
                id="phone" 
                placeholder="Telefon nömrəniz" 
                className={style.formInput}
              />
            </div>
            
            <div className={style.formGroup}>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Mesajınız..." 
                className={style.formTextarea}
                required
                style={{resize:"none"}}
              ></textarea>
            </div>
            
            <button type="submit" className={style.submitButton}>
              Mesajı Göndər
            </button>
          </form>
        </div>
      </div>
    </div>
        </>
    );
};

export default Home;