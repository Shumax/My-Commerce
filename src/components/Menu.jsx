import React from 'react';

import '../styles/components/Menu.scss';

export default function Menu() {
  return (
    <nav className="container">
      <ul className="menu">
        <li className="menu--item">Camisetas</li>
        <li className="menu--item">Calças</li>
        <li className="menu--item">Tênis</li>
        <li className="menu--item">Bolsas</li>
      </ul>
    </nav>
  );
}
