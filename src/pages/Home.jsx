/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
import React from 'react';

import '../styles/pages/Home.scss';
import banner from '../images/banner.png';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Topbar />
      <div className="home">
        <nav className="container">
          <ul className="home__list">
            <li className="home__list--item">T-Shirts</li>
            <li className="home__list--item">Pants</li>
            <li className="home__list--item">Shoes</li>
            <li className="home__list--item">Bags</li>
          </ul>
        </nav>

        <div className="home__banner">
          <img alt="banner" src={banner} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
