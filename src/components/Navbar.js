import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptopia-logo.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    menuActive();
  }, [screenSize]);

  const menuActive = () => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  };

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Typography.Title level={1} className='logo'>
          <Link to='/'>
            <img src={icon} alt='cryptopia-logo' style={{ width: '200px' }} />
          </Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme='dark' style={{ background: '#24292f', display: 'flex', alignItems: 'center' }}>
          <Menu.Item icon={<HomeOutlined />} onClick={() => menuActive()}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} onClick={() => menuActive()}>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} onClick={() => menuActive()}>
            <Link to='/news'>News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
