import React from "react";
import './Header.scss';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

function Header() {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <MenuOutlinedIcon className='hamburger'/>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
          className='logo-img'
        />
        <span className='app-name'>Keep</span>
      </div>
      <div className='nav-mid'>
        <SearchOutlinedIcon className='search-icon'/>
        <input placeholder="Search" />
      </div>
      <div className='nav-right'>
        <GridViewOutlinedIcon className='nav-icon'/>
        <ViewAgendaOutlinedIcon className='nav-icon' />
        <DarkModeOutlinedIcon className='nav-icon' />
      </div>
    </div>
  );
}

export default Header;
