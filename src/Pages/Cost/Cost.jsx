import React, { useEffect, useState } from 'react';
import styles from './Cost.module.css';
import { FaMosque, FaHandHoldingUsd, FaMoneyBillWave, FaArrowUp, FaArrowDown, FaDonate } from 'react-icons/fa';
import { GiMoneyStack, GiExpense } from 'react-icons/gi';
import { MdCleaningServices, MdPeopleAlt } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
const Cost = () => {
  const [currentMonth] = useState('May 2025');
  const [totalDonations] = useState(12500);
  const [remainingBudget] = useState(4500);
  
  const expenditures = [
    { category: 'Mescid İşçileri', amount: 3200, icon: <MdPeopleAlt />, color: '#4CAF50' },
    { category: 'Təmizlik', amount: 2800, icon: <MdCleaningServices />, color: '#2196F3' },
    { category: 'Digər Xərclər', amount: 2000, icon: <GiExpense />, color: '#FF9800' },
  ];
  const [anchorElNav, setAnchorElNav] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


  return (
    <>
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.headerTop}>
                <h1 className={styles.headerTitle}>Xidmətlərimiz</h1>
            </div>
            
            <nav className={styles.navFull}>
                <div className={styles.navMain}>
                    <NavLink className={styles.navLink} to="/Qurani-Kərim">Qur'an-i Kərim</NavLink>
                    <NavLink className={styles.navLink} to="/Cuma-Xutba">Cümə Xütbələrimiz</NavLink>
                    <NavLink className={styles.navLink} to="/Həftə-Söhbətləri">Həftə İçi Söhbətlərimiz</NavLink>
                    <NavLink className={styles.navLink} to="/Aylıq-Hesabat">Hesabatlarımız</NavLink>
                </div>
            </nav>
            
            <div className={styles.headerMobile}>
                <h2 className={styles.headerTitleMobile}>Xidmətlərimiz</h2>
                
                <div className={styles.menu} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <div className={styles.menu}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{fontSize:"50px", color: '#00f510'}}/>
                        </IconButton>
                        
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuItem key={"Navbar"} onClick={handleCloseNavMenu} sx={{display:"flex",flexDirection:"column"}}>
                                <Button sx={{color:'#00f510'}} onClick={() => {navigate("/Qurani-Kərim")}} style={{textDecoration:"none"}}>
                                    <Typography sx={{ textAlign: 'center' }}>Qurani-Kərim</Typography>
                                </Button>
                                <Button sx={{color:'#00f510'}} onClick={() => {navigate("/Cuma-Xutba")}} style={{textDecoration:"none"}}>
                                    <Typography sx={{ textAlign: 'center' }}>Cümə Xütbələrimiz</Typography>
                                </Button>
                                <Button sx={{color:'#00f510'}} onClick={() =>{navigate("/Həftə-Söhbətləri")}} style={{textDecoration:"none"}}>
                    
                                    <Typography sx={{ textAlign: 'center' }}>Həftə İçi Söhbətlərimiz</Typography>
                                </Button>
                                <Button sx={{color:'#00f510'}} onClick={() => {navigate("/Aylıq-Hesabat")}} style={{textDecoration:"none"}}>
                                    <Typography sx={{ textAlign: 'center' }}>Hesabatlarımız</Typography>
                                </Button>
                                {/* Digər menyu elementləri */}
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
  
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1><FaMosque /> Sədəqə İdarəetmə Paneli</h1>
        <p className={styles.currentMonth}>{currentMonth}</p>
      </header>
      
      <div className={styles.summaryCards}>
        <div className={`${styles.card} ${styles.totalDonations}`}>
          <div className={styles.cardIcon}>
            <FaHandHoldingUsd />
          </div>
          <div className={styles.cardContent}>
            <h3>Ümumi Toplanan</h3>
            <p className={styles.amount}>{totalDonations} ₼</p>
            <p className={styles.changePositive}>
              <FaArrowUp /> 12% keçən aydan
            </p>
          </div>
        </div>
        
        <div className={`${styles.card} ${styles.remainingBudget}`}>
          <div className={styles.cardIcon}>
            <GiMoneyStack />
          </div>
          <div className={styles.cardContent}>
            <h3>Qalan Büdcə</h3>
            <p className={styles.amount}>{remainingBudget} ₼</p>
            <p className={styles.changeNeutral}>
              Cari ayın balansı
            </p>
          </div>
        </div>
      </div>
      
      <div className={styles.expenditures}>
        <h2><FaMoneyBillWave /> Xərclər</h2>
        <div className={styles.expenditureList}>
          {expenditures.map((item, index) => (
            <div key={index} className={styles.expenditureItem} style={{ borderLeft: `4px solid ${item.color}` }}>
              <div className={styles.expenditureIcon} style={{ color: item.color }}>
                {item.icon}
              </div>
              <div className={styles.expenditureDetails}>
                <h3>{item.category}</h3>
                <p>{item.amount} ₼</p>
              </div>
              <div className={styles.expenditurePercentage}>
                {Math.round((item.amount / totalDonations) * 100)}%
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.donationCard}>
        <div className={styles.donationCardContent}>
          <h2><FaDonate /> Sədəqələriniz və Yardımlarınız</h2>
          <p className={styles.cardNumber}>AZ00 XXXX XXXX XXXX XXXX XX</p>
          <p className={styles.cardText}>Yardımlarınızı bu hesab nömrəsinə köçürə bilərsiniz</p>
          <button className={styles.donateButton}>Köçür Et</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cost;