import React from 'react';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';

import '../styles/components/Topbar.scss';
import Logo from '../images/logo.png';

function Topbar() {
  return (
    <header className="topbar">
      <img
        alt="Logo"
        className="topbar__logo"
        src={Logo}
      />

      <div className="topbar__search">
        <FiSearch />
      </div>

      <div className="topbar__icons">
        <FiUser />
        <FiShoppingBag />
      </div>

    </header>
  );
}

export default Topbar;
