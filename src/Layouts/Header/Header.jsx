import React, { useState, useEffect } from 'react';
import style from "./Header.module.css";
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [scrolled, setScrolled] = useState(false);
    const navigate=useNavigate()
    // Scroll hadisəsini dinləmək
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className={`${style.Header1DDiv} ${scrolled ? style.scrolled : ''}`}>
            <div className={style.Header2DDiv}>
                <p className={style.Header1}>Ilahiyyat Məscidi</p>
            </div>
            
            <div className={style.Header2DivNavfull}>
                <div className={style.Header2DivNav}>
                    <NavLink className={style.HeaderNavbar1} to={"/"}>Ana Səhifə</NavLink>
                    <NavLink className={style.HeaderNavbar1} to={"/Qalereya"}>Qalereya</NavLink>
                    <NavLink className={style.HeaderNavbar1} to={"/Haqqımızda"}>Haqqımızda</NavLink>
                    <NavLink className={style.HeaderNavbar1} to={"/Əlaqə"}>Əlaqə</NavLink>
                    <NavLink className={style.HeaderNavbar1} to={"/Xidmətlərimiz"}>Xidmətlər</NavLink>
                </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div className={style.Header3DDiv}>
                    <p className={style.Header11}>Ilahiyyat Məscidi</p>
                </div>
                
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
                                <Button sx={{color:'#00f510'}} onClick={() => {navigate("/")}} style={{textDecoration:"none"}}>
                                    <Typography sx={{ textAlign: 'center' }}>Ana Səhifə</Typography>
                                </Button>
                                <Button sx={{color:'#00f510'}} onClick={() => {navigate("/Qalereya")}} style={{textDecoration:"none"}}>
                                    <Typography sx={{ textAlign: 'center' }}>Qalereya</Typography>
                                </Button>
                                <Button sx={{color:'#00f510'}} onClick={() =>{navigate("/Haqqımızda")}} style={{textDecoration:"none"}}>
                                    <Typography sx={{ textAlign: 'center' }}>Haqqımızda</Typography>
                                </Button>
                                <Button sx={{color:'#00f510'}} onClick={() => {navigate("/Əlaqə")}} style={{textDecoration:"none"}}>
                                    <Typography sx={{ textAlign: 'center' }}>Əlaqə</Typography>
                                </Button>
                                <Button sx={{color:'#00f510'}} onClick={() => {navigate("/Xidmətlərimiz")}
                                } style={{textDecoration:"none"}}>
                                    <Typography sx={{ textAlign: 'center' }}>Xidmətlər</Typography>
                                </Button>
                                {/* Digər menyu elementləri */}
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;