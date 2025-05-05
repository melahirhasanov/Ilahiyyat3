import React, { useEffect, useState } from 'react';
import style from "./Home.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
    const [timeLeft, setTimeLeft] = useState(''); // Yeni state: qalan zaman
    const [nextPrayer, setNextPrayer] = useState(''); // Yeni state: növbəti namaz

    useEffect(() => {
        updateCurrentDate();
        fetchPrayerTimes();
        highlightCurrentPrayer();
        
        const interval = setInterval(() => {
            highlightCurrentPrayer();
            updateTimeLeft(); // Hər dəqiqə qalan zamanı yenilə
        }, 600000000);
        
        return () => clearInterval(interval);
    }, []); // prayerTimes dəyişdikdə də təzələ

    const updateCurrentDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const now = new Date();
        const dateStr = now.toLocaleDateString('az-AZ', options);
        setCurrentDate(dateStr);
    };

    const fetchPrayerTimes = async () => {
        try {
            // JSONBin.io API-dan məlumatları çək
            const response = await fetch('https://api.jsonbin.io/v3/b/681641458561e97a500d1cd7', {
                headers: {
                    'X-Master-Key': '$2a$10$TirNs59Qi3Qh3dKcRHAqh.TSvGR3IaH72vYPOM9AYWc0Bo/iJZawC ' // Əgər tələb olunarsa
                }
            });
            const data = await response.json();
            
            // Cari tarixi al
            const today = new Date();
            const currentDay = today.getDate(); // Ayın neçənci günü (1-31)
            const currentMonth = today.toLocaleString('az-AZ', { month: 'long' }); // "May"
            
            // JSON-dan uyğun günü tap
            const todayData =await data.record.prayerTimes.find(item => {
                // Tarix formatı: "3 May" - ayın 3-ü
                const [day, month] = item.date.split(' ');
                return parseInt(day) === currentDay;
            });
            
            if (todayData) {
                setPrayerTimes({
                    fajr: todayData.fajr,
                    sunrise: todayData.sunrise,
                    dhuhr: todayData.dhuhr,
                    asr: todayData.asr,
                    maghrib: todayData.maghrib,
                    isha: todayData.isha
                });
            } else {
                console.error('Bugünkü namaz vaxtları tapılmadı');
                // Əgər bugünkü məlumat tapılmasa, default dəyərlər istifadə et
                setPrayerTimes({
                    fajr: '04:05',
                    sunrise: '05:37',
                    dhuhr: '12:37',
                    asr: '17:34',
                    maghrib: '19:54',
                    isha: '21:03'
                });
            }
        } catch (error) {
            console.error('Namaz vaxtları yüklənərkən xəta baş verdi:', error);
            // Əgər API işləməsə, default dəyərlər qalacaq
            setPrayerTimes({
                fajr: '04:05',
                sunrise: '05:37',
                dhuhr: '12:37',
                asr: '17:34',
                maghrib: '19:54',
                isha: '21:03'
            });
        }
    };
    const updateTimeLeft = () => {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        
        const prayers = [
            { name: 'fajr', displayName: 'Sübh', time: prayerTimes.fajr },
            { name: 'sunrise', displayName: 'Günəş', time: prayerTimes.sunrise },
            { name: 'dhuhr', displayName: 'Zöhr', time: prayerTimes.dhuhr },
            { name: 'asr', displayName: 'Əsr', time: prayerTimes.asr },
            { name: 'maghrib', displayName: 'Məğrib', time: prayerTimes.maghrib },
            { name: 'isha', displayName: 'İşa', time: prayerTimes.isha }
        ];
        
        // Növbəti namazı tap
        let nextPrayerObj = null;
        for (let i = 0; i < prayers.length; i++) {
            const [hours, minutes] = prayers[i].time.split(':').map(Number);
            const prayerTime = hours * 60 + minutes;
            
            if (currentTime < prayerTime) {
                nextPrayerObj = prayers[i];
                break;
            }
        }
        
        // Əgər bütün vaxtlar keçibsə, növbəti günün sübhünə qədər İşa qalır
        if (!nextPrayerObj) {
            nextPrayerObj = prayers[0]; // Sübh
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
        }
        
        if (nextPrayerObj) {
            setNextPrayer(nextPrayerObj.displayName);
            
            // Qalan zamanı hesabla
            const [hours, minutes] = nextPrayerObj.time.split(':').map(part => parseInt(part, 10));
const prayerDate = new Date();
prayerDate.setHours(hours, minutes, 0, 0);

// Check if the prayer time has passed for today
if (prayerDate < now) {
    prayerDate.setDate(prayerDate.getDate() + 1);
}

const diffMs = prayerDate - now;

// Ensure we don't get negative values or NaN
if (isNaN(diffMs) || diffMs < 0) {
    setTimeLeft("0 saat 0 dəqiqə");
} else {
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    setTimeLeft(`${diffHours} saat ${diffMinutes} dəqiqə`);
}
        }
    };

    const highlightCurrentPrayer = () => {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        
        const prayers = [
            { name: 'fajr', time: prayerTimes.fajr },
            { name: 'sunrise', time: prayerTimes.sunrise },
            { name: 'dhuhr', time: prayerTimes.dhuhr },
            { name: 'asr', time: prayerTimes.asr },
            { name: 'maghrib', time: prayerTimes.maghrib },
            { name: 'isha', time: prayerTimes.isha }
        ];
        
        let current = '';
        
        for (let i = 0; i < prayers.length; i++) {
            const [hours, minutes] = prayers[i].time.split(':').map(Number);
            const prayerTime = hours * 60 + minutes;
            
            if (currentTime >= prayerTime && 
                (i === prayers.length - 1 || currentTime < prayers[i + 1].time.split(':').map(Number).reduce((h, m) => h * 60 + m))) {
                current = prayers[i].name;
                break;
            }
        }
        
        setCurrentPrayer(current);
        updateTimeLeft(); // Cari namaz dəyişdikdə qalan zamanı yenilə
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
(Ə’raf surəsi, 31-ci ayə)

</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
            
            <div className={style.namazContainer}>
                <div className={style.header}>
                    <h1>Bakı Namaz Vaxtları</h1>
                    <p>Bugünkü namaz vaxtları</p>
                </div>
                
                
                
                {/* Qalan zamanı göstərən yeni hissə */}
                {timeLeft && nextPrayer && (
                    <div className={style.timeLeftDisplay}>
                        Növbəti namaz (<strong>{nextPrayer}</strong>) üçün qalan zaman: <strong>{timeLeft}</strong>
                    </div>
                )}
                
                <div className={style.timesContainer}>
                    <div className={style.prayerTime}>
                        <span className={style.prayerName}>Sübh</span>
                        <span className={`${style.prayerTimeValue} ${currentPrayer === 'fajr' ? style.currentTime : ''}`}>
                            {prayerTimes.fajr}
                        </span>
                    </div>
                    <div className={style.prayerTime}>
                        <span className={style.prayerName}>Günəş</span>
                        <span className={style.prayerTimeValue}>
                            {prayerTimes.sunrise}
                        </span>
                    </div>
                    <div className={style.prayerTime}>
                        <span className={style.prayerName}>Zöhr</span>
                        <span className={`${style.prayerTimeValue} ${currentPrayer === 'dhuhr' ? style.currentTime : ''}`}>
                            {prayerTimes.dhuhr}
                        </span>
                    </div>
                    <div className={style.prayerTime}>
                        <span className={style.prayerName}>Əsr</span>
                        <span className={`${style.prayerTimeValue} ${currentPrayer === 'asr' ? style.currentTime : ''}`}>
                            {prayerTimes.asr}
                        </span>
                    </div>
                    <div className={style.prayerTime}>
                        <span className={style.prayerName}>Məğrib</span>
                        <span className={`${style.prayerTimeValue} ${currentPrayer === 'maghrib' ? style.currentTime : ''}`}>
                            {prayerTimes.maghrib}
                        </span>
                    </div>
                    <div className={style.prayerTime}>
                        <span className={style.prayerName}>İşa</span>
                        <span className={`${style.prayerTimeValue} ${currentPrayer === 'isha' ? style.currentTime : ''}`}>
                            {prayerTimes.isha}
                        </span>
                    </div>
                </div>
                
                <div className={style.footer}>
                    Vaxtlar dəqiqdir | Bakı şəhəri
                </div>
            </div>
        </>
    );
};

export default Home;
