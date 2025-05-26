import React from 'react'
import style from "./Header.module.css"
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleToggle=()=>{
        SetSelectShow(prev=>!prev)
      }
      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
  return (
    <>
    <div className={style.Header1DDiv}>
<div className={style.Header2DDiv}>
    <p className={style.Header1}>Ilahiyyat Məscidi</p>
    <p className={style.Header2}>Yasamal Rayonu İlahiyyat Məscidi</p>
</div>
<div className={style.Header2DivNavfull}>


<div className={style.Header2DivNav}>
    <NavLink className={style.HeaderNavbar1} to={"/"}>Ana Səhifə</NavLink>
    <NavLink className={style.HeaderNavbar1} to={"/"}>Qalereya</NavLink>
    <NavLink className={style.HeaderNavbar1} to={"/"}>Haqqımızda</NavLink>
    <NavLink className={style.HeaderNavbar1} to={"/"}>Əlaqə</NavLink>
    <NavLink className={style.HeaderNavbar1} to={"/"}>Faydalı Məlumatlar</NavLink>

</div></div>
<div style={{display:"flex",justifyContent:"space-between"}}><div className={style.Header3DDiv}>
    <p className={style.Header11}>Ilahiyyat Məscidi</p>
</div>
    <div className={style.menu} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}><div className={style.menu} onClick={handleToggle}>
        <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              
            >
              <MenuIcon sx={{fontSize:"50px"}}/>
            </IconButton> <Menu
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
                  <Button  onClick={()=>{{navigate("")}}} style={{textDecoration:"none"}} ><Typography sx={{ textAlign: 'center' }}>Əsas Səhifə</Typography></Button>
                  <Button  onClick={()=>{{navigate("AllTeachers")}}} style={{textDecoration:"none"}} ><Typography sx={{ textAlign: 'center' }}>Qalereya</Typography></Button>
                  <Button  onClick={()=>{{navigate("PetorderForm")}}} style={{textDecoration:"none"}} ><Typography sx={{ textAlign: 'center' }}>Haqqımızda</Typography></Button>
                  <Button  onClick={()=>{{navigate("AboutUs")}}} style={{textDecoration:"none"}} ><Typography sx={{ textAlign: 'center' }}>Əlaqə</Typography></Button>
                  <Button  onClick={()=>{{navigate("ContactUs")}}} style={{textDecoration:"none"}} ><Typography sx={{ textAlign: 'center' }}>Faydalı Məlumatlar</Typography></Button>

                </MenuItem>
              
            </Menu>
            </div></div>
        </div>

    </div>

    
    
    </>
  )
}

export default Header