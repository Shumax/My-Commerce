import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';

import '../styles/components/Topbar.scss';
import Logo from '../images/logo.png';

function Topbar() {
  return (
    <header className="topbar">
      <Link to="/">
        <img
          alt="Logo"
          className="topbar__logo"
          src={Logo}
        />
      </Link>

      <nav className="topbar__search">
        <div className="topbar__search--input">
          <input
            placeholder="O que você está procurando?"
          />
          <button type="button" className="topbar__search--button">
            <FiSearch />
          </button>
        </div>

      </nav>

      <div className="topbar__icons">
        <div className='topbar__icons--user'>
					<FiUser />
					<div className='topbar__icons--user-content'>
						<ul>
							<li>Login</li>
							<li>Pedidos</li>
						</ul>
					</div>
				</div>
				
				<div className='topbar__icons--cart'>
					<FiShoppingBag />
					<div className='topbar__icons--cart-content'>
						<div className='topbar__icons--cart-content-inside'	>
							Seu carrinho está vazio!
						</div>
					</div>
				</div>
        
      </div>

    </header>
  );
}

export default Topbar;
