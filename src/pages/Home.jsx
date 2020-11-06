import React from 'react';

import '../styles/pages/Home.scss';

import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Topbar />
      <div className="home">
        <div className="container">
          <ul className="home__list">
            <li className="home__list--item">T-Shirts</li>
            <li className="home__list--item">Pants</li>
            <li className="home__list--item">Shoes</li>
            <li className="home__list--item">Bags</li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
