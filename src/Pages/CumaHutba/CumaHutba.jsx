import React, { useState, useEffect } from 'react';
import style from "./CumaHutba.module.css";
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
const CumaDay = () => {
    const sermons = [
        {
          title: "Ramazan Rəhmət ayıdır",
          videoUrl: "https://www.youtube.com/embed/C_IZ25SxiN8?si=sRpsp_7ZNQ-mGxbC"
        },
        {
          title: "Ramazanın hikməti və fəziləti",
          videoUrl: "https://www.youtube.com/embed/yCrWUe4PJU4?si=yJ5y0COXxFoK55gO"
        },
        {
          title: "Nəfs təzkiyəsi",
          videoUrl: "https://www.youtube.com/embed/awpL6v9nnUM?si=ShIZWNveUGLPZBHD"
        },
        {
            title: "Ramazan Rəhmət ayıdır",
            videoUrl: "https://www.youtube.com/embed/C_IZ25SxiN8?si=sRpsp_7ZNQ-mGxbC"
          },
          {
            title: "Ramazanın hikməti və fəziləti",
            videoUrl: "https://www.youtube.com/embed/yCrWUe4PJU4?si=yJ5y0COXxFoK55gO"
          },
          {
            title: "Nəfs təzkiyəsi",
            videoUrl: "https://www.youtube.com/embed/awpL6v9nnUM?si=ShIZWNveUGLPZBHD"
          },
          {
            title: "Ramazan Rəhmət ayıdır",
            videoUrl: "https://www.youtube.com/embed/C_IZ25SxiN8?si=sRpsp_7ZNQ-mGxbC"
          },
          {
            title: "Ramazanın hikməti və fəziləti",
            videoUrl: "https://www.youtube.com/embed/yCrWUe4PJU4?si=yJ5y0COXxFoK55gO"
          },
          {
            title: "Nəfs təzkiyəsi",
            videoUrl: "https://www.youtube.com/embed/awpL6v9nnUM?si=ShIZWNveUGLPZBHD"
          }
          ,{
            title: "Ramazan Rəhmət ayıdır",
            videoUrl: "https://www.youtube.com/embed/C_IZ25SxiN8?si=sRpsp_7ZNQ-mGxbC"
          },
          {
            title: "Ramazanın hikməti və fəziləti",
            videoUrl: "https://www.youtube.com/embed/yCrWUe4PJU4?si=yJ5y0COXxFoK55gO"
          },
          {
            title: "Nəfs təzkiyəsi",
            videoUrl: "https://www.youtube.com/embed/awpL6v9nnUM?si=ShIZWNveUGLPZBHD"
          }
          ,{
            title: "Ramazan Rəhmət ayıdır",
            videoUrl: "https://www.youtube.com/embed/C_IZ25SxiN8?si=sRpsp_7ZNQ-mGxbC"
          },
          {
            title: "Ramazanın hikməti və fəziləti",
            videoUrl: "https://www.youtube.com/embed/yCrWUe4PJU4?si=yJ5y0COXxFoK55gO"
          },
          {
            title: "Nəfs təzkiyəsi",
            videoUrl: "https://www.youtube.com/embed/awpL6v9nnUM?si=ShIZWNveUGLPZBHD"
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
                            
                                {/* Digər menyu elementləri */}
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>

        <div className={style.container}>
      <h2 className={style.heading}>Cümə Xütbələri</h2>
      <div className={style.grid}>
        {sermons.map((sermon, index) => (
          <div key={index} className={style.card}>
            <div className={style.videoWrapper}>
              <iframe
                src={sermon.videoUrl}
                title={sermon.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className={style.title}>{sermon.title}</p>
          </div>
        ))}
      </div>
    </div>
   
        </>
    );
};

export default CumaDay;