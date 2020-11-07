import React from 'react';

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
    </header>
  );
}

export default Topbar;
