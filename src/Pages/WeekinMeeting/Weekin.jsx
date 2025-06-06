import React, { useState, useEffect } from 'react';
import style from "./Weekin.module.css";
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'
const Weekin = () => {
   
      const germon = [
        {
          title: "Ramazan Rəhmət ayıdır",
          videoUrl: "https://www.youtube.com/embed/tzcnH9eyolI?si=RudFicLBDLTpNLnI"
        },
        {
          title: "Ramazanın hikməti və fəziləti",
          videoUrl: "https://www.youtube.com/embed/Xjm_H3mwBE4?si=hiLF6ve7KvJ8tRn0"
        },
        {
          title: "Nəfs təzkiyəsi",
          videoUrl: "https://www.youtube.com/embed/Rf-UaPiIyXs?si=LpAftaw313sUvn8l"
        },
        {
            title: "Ramazan Rəhmət ayıdır",
            videoUrl: "https://www.youtube.com/embed/tzcnH9eyolI?si=RudFicLBDLTpNLnI"
          },
          {
            title: "Ramazanın hikməti və fəziləti",
            videoUrl: "https://www.youtube.com/embed/Xjm_H3mwBE4?si=hiLF6ve7KvJ8tRn0"
          },
          {
            title: "Nəfs təzkiyəsi",
            videoUrl: "https://www.youtube.com/embed/Rf-UaPiIyXs?si=LpAftaw313sUvn8l"
          },
          {
            title: "Ramazan Rəhmət ayıdır",
            videoUrl: "https://www.youtube.com/embed/tzcnH9eyolI?si=RudFicLBDLTpNLnI"
          },
          {
            title: "Ramazanın hikməti və fəziləti",
            videoUrl: "https://www.youtube.com/embed/Xjm_H3mwBE4?si=hiLF6ve7KvJ8tRn0"
          },
          {
            title: "Nəfs təzkiyəsi",
            videoUrl: "https://www.youtube.com/embed/Rf-UaPiIyXs?si=LpAftaw313sUvn8l"
          },
          {
            title: "Ramazan Rəhmət ayıdır",
            videoUrl: "https://www.youtube.com/embed/tzcnH9eyolI?si=RudFicLBDLTpNLnI"
          },
          {
            title: "Ramazanın hikməti və fəziləti",
            videoUrl: "https://www.youtube.com/embed/Xjm_H3mwBE4?si=hiLF6ve7KvJ8tRn0"
          },
          {
            title: "Nəfs təzkiyəsi",
            videoUrl: "https://www.youtube.com/embed/Rf-UaPiIyXs?si=LpAftaw313sUvn8l"
          },
          {
            title: "Ramazan Rəhmət ayıdır",
            videoUrl: "https://www.youtube.com/embed/tzcnH9eyolI?si=RudFicLBDLTpNLnI"
          },
          {
            title: "Ramazanın hikməti və fəziləti",
            videoUrl: "https://www.youtube.com/embed/Xjm_H3mwBE4?si=hiLF6ve7KvJ8tRn0"
          },
          {
            title: "Nəfs təzkiyəsi",
            videoUrl: "https://www.youtube.com/embed/Rf-UaPiIyXs?si=LpAftaw313sUvn8l"
          },{
            title: "Ramazan Rəhmət ayıdır",
            videoUrl: "https://www.youtube.com/embed/tzcnH9eyolI?si=RudFicLBDLTpNLnI"
          },
          {
            title: "Ramazanın hikməti və fəziləti",
            videoUrl: "https://www.youtube.com/embed/Xjm_H3mwBE4?si=hiLF6ve7KvJ8tRn0"
          },
          {
            title: "Nəfs təzkiyəsi",
            videoUrl: "https://www.youtube.com/embed/Rf-UaPiIyXs?si=LpAftaw313sUvn8l"
          }
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
        <header className={`${style.header} ${scrolled ? style.scrolled : ''}`}>
            <div className={style.headerTop}>
                <h1 className={style.headerTitle}>Xidmətlərimiz</h1>
            </div>
            
            <nav className={style.navFull}>
                <div className={style.navMain}>
                    <NavLink className={style.navLink} to="/Qurani-Kərim">Qur'an-i Kərim</NavLink>
                    <NavLink className={style.navLink} to="/Cuma-Xutba">Cümə Xütbələrimiz</NavLink>
                    <NavLink className={style.navLink} to="/Həftə-Söhbətləri">Həftə İçi Söhbətlərimiz</NavLink>
                </div>
            </nav>
            
            <div className={style.headerMobile}>
                <h2 className={style.headerTitleMobile}>Xidmətlərimiz</h2>
                
                <div className={style.menu} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <div className={style.menu}>
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
                            id={style.menu}
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
                       
                                {/* Digər menyu elementləri */}
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>

       
    <div className={style.container}>
      <h2 className={style.heading}>Dini Dərslər</h2>
      <div className={style.grid}>
        {germon.map((germon, index) => (
          <div key={index} className={style.card}>
            <div className={style.videoWrapper}>
              <iframe
                src={germon.videoUrl}
                title={germon.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className={style.title}>{germon.title}</p>
          </div>
        ))}
      </div>
    </div>
        </>
    );
};

export default Weekin;