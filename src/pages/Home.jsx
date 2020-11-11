/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/Home.scss';
import banner from '../images/banner.webp';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Topbar />
      <div className="home">
        <nav className="container">
          <ul className="home__list">
            <li className="home__list--item">Camisetas</li>
            <li className="home__list--item">Calças</li>
            <li className="home__list--item">Tênis</li>
            <li className="home__list--item">Bolsas</li>
          </ul>
        </nav>

        <div className="home__banner">
          <img alt="banner" src={banner} />
        </div>

        <div className="home__promo">
          <p>Até 15% Off!</p>

          <button>
            <Link to="/catalog">
              Aproveite
            </Link>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
