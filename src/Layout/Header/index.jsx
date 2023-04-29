import React from "react";
import './Header.scss';

import {MenuBookOutlined, SearchOutlined, GridViewOutlined, ViewAgendaOutlined, DarkModeOutlined, LightModeOutlined} from '@mui/icons-material'

function Header() {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <div className='hamburger'><MenuBookOutlined/></div>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
          className='logo-img'
        />
        <span className='app-name'>Keep</span>
      </div>
      <div className='nav-mid'>
        <SearchOutlined className='search-icon'/>
        <input placeholder="Search" />
      </div>
      <div className='nav-right'>
        <div className='nav-icon'><GridViewOutlined /></div>
        <div className='nav-icon' ><ViewAgendaOutlined /></div>
        <div className='nav-icon'><DarkModeOutlined  /></div>
      </div>
    </div>
  );
}

export default Header;
