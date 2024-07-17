import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuSidebar = ({ activePage }) => {
  const location = useLocation();
  const menuItems = [
    { name: 'Profil Saya', path: '/profile' },
    { name: 'Kelas Saya', path: '/kelas-saya' },
    { name: 'Pesanan Saya', path: '/pesanan-saya' },
  ];

  return (
    <div className="sidebar bg-white p-4 shadow-md">
      <h1 className="text-xl font-semibold mb-4">Menu Sidebar</h1>
      <ul className="list-none">
        {menuItems.map((item, index) => (
          <li key={index} className={`mb-2 ${location.pathname === item.path ? 'font-bold' : ''}`}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSidebar;
