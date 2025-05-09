import React, { useState, useEffect } from 'react';
import styles from './QuranPdf.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'
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
    <><header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
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
        
        <div className={styles.menu} styles={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
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
                    id={styles.menu}
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
    </>
  );
};

export default QuranPdf;